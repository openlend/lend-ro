import { neon } from '@neondatabase/serverless';

// Initialize Neon client
export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.warn('[DB] No DATABASE_URL configured - using fallback JSON storage');
    return null;
  }

  return neon(databaseUrl);
}

// Initialize database schema (run once)
export async function initDb() {
  const sql = getDb();
  if (!sql) return false;

  try {
    // Create leads table
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id BIGINT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        property_type VARCHAR(50) NOT NULL,
        loan_amount INTEGER NOT NULL,
        monthly_payment INTEGER NOT NULL,
        ip VARCHAR(45),
        user_agent TEXT,
        email_sent BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        timestamp TIMESTAMP
      )
    `;

    // Create index on created_at for faster queries
    await sql`
      CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC)
    `;

    console.log('[DB] Schema initialized successfully');
    return true;
  } catch (error: any) {
    console.error('[DB] Schema initialization error:', error.message);
    return false;
  }
}

// Insert a new lead
export async function insertLead(lead: {
  id: number;
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  loanAmount: number;
  monthlyPayment: number;
  ip: string;
  userAgent: string;
  emailSent: boolean;
  timestamp: string;
}) {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      INSERT INTO leads (
        id, name, email, phone, property_type, loan_amount, monthly_payment,
        ip, user_agent, email_sent, timestamp
      ) VALUES (
        ${lead.id},
        ${lead.name},
        ${lead.email},
        ${lead.phone},
        ${lead.propertyType},
        ${lead.loanAmount},
        ${lead.monthlyPayment},
        ${lead.ip},
        ${lead.userAgent},
        ${lead.emailSent},
        ${lead.timestamp}
      )
    `;
    return true;
  } catch (error: any) {
    console.error('[DB] Insert lead error:', error.message);
    return false;
  }
}

// Get all leads
export async function getLeads(limit = 100, offset = 0) {
  const sql = getDb();
  if (!sql) return [];

  try {
    const results = await sql`
      SELECT 
        id, name, email, phone, property_type as "propertyType",
        loan_amount as "loanAmount", monthly_payment as "monthlyPayment",
        ip, user_agent as "userAgent", email_sent as "emailSent",
        created_at as "createdAt", timestamp
      FROM leads
      ORDER BY created_at DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `;
    return results;
  } catch (error: any) {
    console.error('[DB] Get leads error:', error.message);
    return [];
  }
}

// Get lead count
export async function getLeadCount() {
  const sql = getDb();
  if (!sql) return 0;

  try {
    const result = await sql`SELECT COUNT(*) as count FROM leads`;
    return result[0]?.count || 0;
  } catch (error: any) {
    console.error('[DB] Get count error:', error.message);
    return 0;
  }
}

// Delete a lead
export async function deleteLead(leadId: number) {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`DELETE FROM leads WHERE id = ${leadId}`;
    return true;
  } catch (error: any) {
    console.error('[DB] Delete lead error:', error.message);
    return false;
  }
}
