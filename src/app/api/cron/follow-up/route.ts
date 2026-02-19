import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { getFollowUpEmail } from '@/lib/email-templates';

const LEAD_EMAIL = 'open@lend.ro';

export async function GET() {
  const startTime = Date.now();

  try {
    const databaseUrl = process.env.DATABASE_URL;
    
    if (!databaseUrl) {
      return NextResponse.json({ error: 'No DATABASE_URL' }, { status: 500 });
    }

    const sql = neon(databaseUrl);
    const now = new Date().toISOString();

    // Find leads that need follow-up (scheduled_at < now AND follow_up_sent = false)
    const leadsToFollowUp = await sql`
      SELECT id, name, email, loan_amount as "loanAmount", follow_up_scheduled_at as "scheduledAt"
      FROM leads
      WHERE follow_up_scheduled_at IS NOT NULL
        AND follow_up_scheduled_at <= ${now}
        AND follow_up_sent = false
      LIMIT 50
    `;

    if (leadsToFollowUp.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No leads need follow-up at this time',
        checked: 0,
        sent: 0,
        processingTime: Date.now() - startTime,
      });
    }

    console.log(`[FOLLOW-UP] Found ${leadsToFollowUp.length} leads needing follow-up`);

    // Send follow-up emails
    let sentCount = 0;
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
      port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
    });

    for (const lead of leadsToFollowUp) {
      try {
        const followUpEmail = getFollowUpEmail({
          name: lead.name,
          loanAmount: lead.loanAmount,
        });

        await transporter.sendMail({
          from: `${process.env.BREVO_FROM_NAME || 'Platforma Lend.ro'} <${process.env.BREVO_FROM_EMAIL || LEAD_EMAIL}>`,
          to: lead.email,
          subject: followUpEmail.subject,
          html: followUpEmail.html,
          text: followUpEmail.text,
        });

        // Mark as sent in database
        await sql`
          UPDATE leads
          SET follow_up_sent = true, updated_at = CURRENT_TIMESTAMP
          WHERE id = ${lead.id}
        `;

        sentCount++;
        console.log(`[FOLLOW-UP] Sent to ${lead.email} (Lead ID: ${lead.id})`);

      } catch (emailError: any) {
        console.error(`[FOLLOW-UP ERROR] Lead ID ${lead.id}:`, emailError.message);
      }
    }

    const processingTime = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      message: `Sent ${sentCount}/${leadsToFollowUp.length} follow-up emails`,
      checked: leadsToFollowUp.length,
      sent: sentCount,
      processingTime,
    });

  } catch (error: any) {
    console.error('[FOLLOW-UP CRON ERROR]', error.message);
    return NextResponse.json({ 
      error: 'Cron job failed',
      details: error.message 
    }, { status: 500 });
  }
}
