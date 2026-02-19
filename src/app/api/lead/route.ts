import { NextResponse } from 'next/server';
import { insertLead, initDb } from '@/lib/db';
import { getLeadConfirmationEmail } from '@/lib/email-templates';

const LEAD_EMAIL = 'open@lend.ro';

// Simple in-memory rate limiting (IP-based)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_HOUR = 5;

// Validation helpers
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  // Romanian phone: +40... or 07... (10 digits)
  const phoneRegex = /^(\+4|0)(7[0-9]{8}|[23][0-9]{8})$/;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(cleaned);
}

function sanitizeString(str: string): string {
  return str.trim().replace(/[<>]/g, '');
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_REQUESTS_PER_HOUR - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_HOUR) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_HOUR - record.count };
}

export async function POST(request: Request) {
  const startTime = Date.now();
  const clientIP = getClientIP(request);

  try {
    // Rate limiting check
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.warn(`[RATE LIMIT] IP ${clientIP} exceeded rate limit`);
      return NextResponse.json(
        { 
          error: 'Prea multe cereri. Te rugăm să încerci din nou peste 1 oră.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      propertyType, 
      loanAmount, 
      monthlyPayment, 
      timestamp,
      honeypot // Bot trap field
    } = body;

    // Honeypot check (bots fill this, humans don't see it)
    if (honeypot) {
      console.warn(`[BOT DETECTED] IP ${clientIP} filled honeypot field`);
      // Fake success response to confuse bots
      return NextResponse.json({ 
        success: true,
        message: 'Cererea ta a fost trimisă cu succes!',
      });
    }

    // Required fields validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { 
          error: 'Te rugăm să completezi toate câmpurile obligatorii.',
          code: 'MISSING_FIELDS',
          fields: {
            name: !name,
            email: !email,
            phone: !phone,
          }
        },
        { status: 400 }
      );
    }

    // Email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { 
          error: 'Adresa de email nu este validă. Te rugăm să o verifici.',
          code: 'INVALID_EMAIL'
        },
        { status: 400 }
      );
    }

    // Phone format validation
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { 
          error: 'Numărul de telefon nu este valid. Format acceptat: 07XXXXXXXX sau +407XXXXXXXX',
          code: 'INVALID_PHONE'
        },
        { status: 400 }
      );
    }

    // Data sanitization
    const sanitizedName = sanitizeString(name);
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedPhone = phone.replace(/[\s\-\(\)]/g, '');

    // Amount validation
    if (!loanAmount || loanAmount < 10000 || loanAmount > 5000000) {
      return NextResponse.json(
        { 
          error: 'Suma creditului trebuie să fie între 10.000 și 5.000.000 RON.',
          code: 'INVALID_AMOUNT'
        },
        { status: 400 }
      );
    }

    const leadData = {
      id: Date.now(),
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      propertyType: propertyType || 'apartament',
      loanAmount: Math.round(loanAmount),
      monthlyPayment: Math.round(monthlyPayment),
      timestamp: timestamp || new Date().toISOString(),
      sentTo: LEAD_EMAIL,
      ip: clientIP,
      userAgent: request.headers.get('user-agent') || 'unknown',
      createdAt: new Date().toISOString(),
    };

    console.log('[LEAD RECEIVED]', {
      id: leadData.id,
      email: leadData.email,
      phone: leadData.phone,
      amount: leadData.loanAmount,
      ip: clientIP,
    });

    // Send email via Brevo SMTP
    let emailSent = false;
    let emailToLeadSent = false;
    if (process.env.BREVO_SMTP_KEY) {
      try {
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

        const mailOptions = {
          from: `${process.env.BREVO_FROM_NAME || 'Platforma Lend.ro'} <${process.env.BREVO_FROM_EMAIL || LEAD_EMAIL}>`,
          to: LEAD_EMAIL,
          subject: `🏠 Lead nou lend.ro: ${sanitizedName} - ${leadData.loanAmount.toLocaleString('ro-RO')} RON`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: 'Inter', Arial, sans-serif; background: #F9F7F4; padding: 20px; margin: 0; }
                  .container { background: white; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                  h2 { color: #2D5F5D; margin-bottom: 24px; font-size: 24px; }
                  .info-row { padding: 16px 0; border-bottom: 1px solid #E5E7EB; }
                  .info-row:last-child { border-bottom: none; }
                  .label { color: #6B7280; font-size: 14px; margin-bottom: 4px; }
                  .value { color: #1F2937; font-size: 16px; font-weight: 600; }
                  .value a { color: #4FD1C5; text-decoration: none; }
                  .value a:hover { text-decoration: underline; }
                  .highlight { background: #4FD1C5; color: white; padding: 4px 12px; border-radius: 8px; display: inline-block; }
                  .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 14px; text-align: center; }
                  .meta { color: #9CA3AF; font-size: 12px; margin-top: 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>🏠 Lead nou de pe lend.ro</h2>
                  
                  <div class="info-row">
                    <div class="label">📋 Nume complet</div>
                    <div class="value">${sanitizedName}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📱 Telefon</div>
                    <div class="value"><a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">🏠 Tip proprietate</div>
                    <div class="value">${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💰 Credit solicitat</div>
                    <div class="value"><span class="highlight">${leadData.loanAmount.toLocaleString('ro-RO')} RON</span></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💳 Rată lunară estimată</div>
                    <div class="value">${leadData.monthlyPayment.toLocaleString('ro-RO')} RON/lună</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📅 Data solicitării</div>
                    <div class="value">${new Date(leadData.timestamp).toLocaleString('ro-RO', { 
                      dateStyle: 'long', 
                      timeStyle: 'short' 
                    })}</div>
                  </div>

                  <div class="info-row">
                    <div class="label">🔍 Metadata</div>
                    <div class="meta">
                      Lead ID: ${leadData.id}<br>
                      IP: ${clientIP}<br>
                      User Agent: ${leadData.userAgent}
                    </div>
                  </div>
                  
                  <div class="footer">
                    <p>Acesta este un email automat generat de platforma <strong>lend.ro</strong></p>
                  </div>

                  <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E5E7EB; text-align: center; color: #9CA3AF; font-size: 12px; line-height: 1.6;">
                    <p style="margin-bottom: 12px;">
                      <strong>GDPR - Drepturile Utilizatorului</strong><br>
                      Utilizatorul a solicitat oferte de credit ipotecar pe lend.ro la data ${new Date(leadData.timestamp).toLocaleString('ro-RO')}.
                    </p>
                    <p style="margin-bottom: 12px;">
                      Pentru retragere consimțământ sau ștergere date:<br>
                      <a href="https://lend.ro/retragere-consimtamant?email=${encodeURIComponent(sanitizedEmail)}&id=${leadData.id}" 
                         style="color: #4FD1C5; text-decoration: underline; font-weight: 600;">
                        https://lend.ro/retragere-consimtamant
                      </a>
                    </p>
                    <p style="margin-bottom: 12px;">
                      Sau contactați: 
                      <a href="mailto:gdpr@lend.ro" style="color: #4FD1C5; text-decoration: underline;">gdpr@lend.ro</a>
                    </p>
                    <p style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5E7EB;">
                      <strong>lend.ro</strong> | București, România<br>
                      <a href="https://lend.ro/politica-confidentialitate" style="color: #4FD1C5; text-decoration: none;">Politica de Confidențialitate</a> | 
                      <a href="https://lend.ro/termeni-conditii" style="color: #4FD1C5; text-decoration: none;">Termeni și Condiții</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
          text: `
Lead nou lend.ro

Nume: ${sanitizedName}
Email: ${sanitizedEmail}
Telefon: ${sanitizedPhone}
Tip proprietate: ${propertyType}
Credit solicitat: ${leadData.loanAmount.toLocaleString('ro-RO')} RON
Rată lunară: ${leadData.monthlyPayment.toLocaleString('ro-RO')} RON/lună
Data: ${new Date(leadData.timestamp).toLocaleString('ro-RO')}

---
Lead ID: ${leadData.id}
IP: ${clientIP}
          `.trim(),
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log('[EMAIL SENT] via Brevo to', LEAD_EMAIL);

    // Send confirmation email TO LEAD (instant)
    try {
      const confirmationEmail = getLeadConfirmationEmail({
        name: sanitizedName,
        loanAmount: leadData.loanAmount,
        monthlyPayment: leadData.monthlyPayment,
      });

      await transporter.sendMail({
        from: `${process.env.BREVO_FROM_NAME || 'Platforma Lend.ro'} <${process.env.BREVO_FROM_EMAIL || LEAD_EMAIL}>`,
        to: sanitizedEmail,
        subject: confirmationEmail.subject,
        html: confirmationEmail.html,
        text: confirmationEmail.text,
      });

      emailToLeadSent = true;
      console.log('[EMAIL TO LEAD] Confirmation sent to', sanitizedEmail);

    } catch (emailToLeadError: any) {
      console.error('[EMAIL TO LEAD ERROR]', emailToLeadError.message);
    }


      } catch (emailError: any) {
        console.error('[EMAIL ERROR]', {
          message: emailError.message,
          code: emailError.code,
          leadId: leadData.id,
        });
      }
    } else {
      console.warn('[EMAIL SKIPPED] No Brevo credentials in env');
    }

    // Save to database
    let dbSaved = false;
    try {
      dbSaved = await insertLead({
        id: leadData.id,
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        propertyType: leadData.propertyType,
        loanAmount: leadData.loanAmount,
        monthlyPayment: leadData.monthlyPayment,
        ip: leadData.ip,
        userAgent: leadData.userAgent,
        emailSent,
        emailToLeadSent,
        followUpScheduledAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        timestamp: leadData.timestamp,
      });

      if (dbSaved) {
        console.log('[DB SAVED] Lead ID', leadData.id);
      } else {
        console.warn('[DB SAVE FAILED] Lead ID', leadData.id);
      }
    } catch (dbError: any) {
      console.error('[DB ERROR]', {
        message: dbError.message,
        leadId: leadData.id,
      });
    }

    const processingTime = Date.now() - startTime;
    console.log(`[LEAD PROCESSED] ID ${leadData.id} in ${processingTime}ms (email: ${emailSent}, db: ${dbSaved})`);

    return NextResponse.json({ 
      success: true,
      message: 'Cererea ta a fost trimisă cu succes! Vei fi contactat de 5 brokeri certificați în maxim 24 de ore.',
      leadId: leadData.id,
      emailSent,
      emailToLeadSent,
      dbSaved,
      processingTime,
    });

  } catch (error: any) {
    console.error('[LEAD API ERROR]', {
      message: error.message,
      stack: error.stack,
      ip: clientIP,
    });
    
    return NextResponse.json(
      { 
        error: 'A apărut o eroare la procesarea cererii. Te rugăm să încerci din nou sau să ne contactezi direct la open@lend.ro',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

// Health check + DB initialization endpoint
export async function GET() {
  // Try to initialize DB schema
  const dbInitialized = await initDb();

  return NextResponse.json({
    status: 'healthy',
    service: 'lead-api',
    timestamp: new Date().toISOString(),
    brevoConfigured: !!process.env.BREVO_SMTP_KEY,
    databaseConfigured: !!process.env.DATABASE_URL,
    databaseInitialized: dbInitialized,
  });
}
