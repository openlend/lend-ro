import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
    const leadsDir = path.join(process.cwd(), 'data', 'leads');
    
    // Check if leads directory exists
    if (!fs.existsSync(leadsDir)) {
      return NextResponse.json({
        success: true,
        leads: [],
        count: 0,
        message: 'No leads directory found',
      });
    }

    // Read all lead files
    const files = fs.readdirSync(leadsDir)
      .filter(file => file.startsWith('lead-') && file.endsWith('.json'))
      .sort()
      .reverse(); // Most recent first

    const leads = files.map(file => {
      const filePath = path.join(leadsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    });

    // Get query params for filtering
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    const paginatedLeads = leads.slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      leads: paginatedLeads,
      count: leads.length,
      offset,
      limit,
      hasMore: offset + limit < leads.length,
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

// Delete a lead (optional)
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

    const leadsDir = path.join(process.cwd(), 'data', 'leads');
    const leadFile = path.join(leadsDir, `lead-${leadId}.json`);

    if (!fs.existsSync(leadFile)) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    fs.unlinkSync(leadFile);

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
