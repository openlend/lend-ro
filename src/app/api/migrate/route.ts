import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    return NextResponse.json({ 
      error: 'No DATABASE_URL configured' 
    }, { status: 500 });
  }

  const sql = neon(databaseUrl);

  try {
    console.log('[MIGRATION] Starting leads table migration...');

    // Add new columns for CRM functionality
    await sql`
      ALTER TABLE leads 
      ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new',
      ADD COLUMN IF NOT EXISTS notes TEXT,
      ADD COLUMN IF NOT EXISTS tags TEXT[],
      ADD COLUMN IF NOT EXISTS email_to_lead_sent BOOLEAN DEFAULT false,
      ADD COLUMN IF NOT EXISTS follow_up_sent BOOLEAN DEFAULT false,
      ADD COLUMN IF NOT EXISTS follow_up_scheduled_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    `;

    // Create index on status for filtering
    await sql`
      CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status)
    `;

    // Create index on follow_up_scheduled_at for cron job efficiency
    await sql`
      CREATE INDEX IF NOT EXISTS leads_followup_idx ON leads(follow_up_scheduled_at) 
      WHERE follow_up_sent = false
    `;

    console.log('[MIGRATION] ✅ Migration completed successfully');
    
    return NextResponse.json({ 
      success: true,
      message: 'Database migration completed successfully',
      changes: [
        'Added status column (default: new)',
        'Added notes column (TEXT)',
        'Added tags column (TEXT[])',
        'Added email_to_lead_sent column (BOOLEAN)',
        'Added follow_up_sent column (BOOLEAN)',
        'Added follow_up_scheduled_at column (TIMESTAMP)',
        'Added updated_at column (TIMESTAMP)',
        'Created index on status',
        'Created index on follow_up_scheduled_at'
      ]
    });

  } catch (error: any) {
    console.error('[MIGRATION] ❌ Migration failed:', error.message);
    return NextResponse.json({ 
      error: 'Migration failed',
      details: error.message 
    }, { status: 500 });
  }
}
