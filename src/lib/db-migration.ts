// Database migration script - add CRM fields to leads table
import { neon } from '@neondatabase/serverless';

export async function migrateLeadsTable() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.error('[MIGRATION] No DATABASE_URL configured');
    return false;
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

    console.log('[MIGRATION] ✅ Leads table migration completed successfully');
    return true;

  } catch (error: any) {
    console.error('[MIGRATION] ❌ Migration failed:', error.message);
    return false;
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateLeadsTable()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error('Migration error:', error);
      process.exit(1);
    });
}
