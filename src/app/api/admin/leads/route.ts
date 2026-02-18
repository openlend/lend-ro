import { NextResponse } from 'next/server';
import { getLeads, getLeadCount, deleteLead } from '@/lib/db';

// Simple authentication (use env var for production)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'lend2026admin';

function isAuthenticated(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;

  const base64Credentials = authHeader.split(' ')[1];
  if (!base64Credentials) return false;

  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  return username === 'admin' && password === ADMIN_PASSWORD;
}

export async function GET(request: Request) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Area"',
      },
    });
  }

  try {
    // Get query params for filtering
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Get leads from database
    const leads = await getLeads(limit, offset);
    const totalCount = await getLeadCount();

    return NextResponse.json({
      success: true,
      leads,
      count: totalCount,
      offset,
      limit,
      hasMore: offset + limit < totalCount,
      source: 'database',
    });

  } catch (error: any) {
    console.error('[ADMIN API ERROR]', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to load leads',
        message: error.message 
      },
      { status: 500 }
    );
  }
}

// Delete a lead
export async function DELETE(request: Request) {
  if (!isAuthenticated(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Area"',
      },
    });
  }

  try {
    const { leadId } = await request.json();
    
    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    const deleted = await deleteLead(leadId);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Lead not found or failed to delete' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Lead ${leadId} deleted successfully`,
    });

  } catch (error: any) {
    console.error('[DELETE LEAD ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to delete lead', message: error.message },
      { status: 500 }
    );
  }
}
