import { NextResponse } from 'next/server';
import { deleteLead } from '@/lib/db';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'lend2026admin';

function checkAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Check authentication
  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' } }
    );
  }

  try {
    const { id } = await params;
    const leadId = parseInt(id, 10);

    if (isNaN(leadId)) {
      return NextResponse.json(
        { error: 'Invalid lead ID' },
        { status: 400 }
      );
    }

    // Delete from database
    const deleted = await deleteLead(leadId);

    if (deleted) {
      console.log(`[ADMIN DELETE] Lead ${leadId} deleted by admin`);
      
      return NextResponse.json({
        success: true,
        message: `Lead ${leadId} deleted successfully`,
        leadId,
        deletedAt: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        { error: 'Lead not found or already deleted' },
        { status: 404 }
      );
    }

  } catch (error: any) {
    console.error('[ADMIN DELETE ERROR]', {
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
