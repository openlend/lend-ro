import { NextResponse } from 'next/server';

const GDPR_EMAIL = 'gdpr@lend.ro';
const ADMIN_EMAIL = 'open@lend.ro';

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

export async function POST(request: Request) {
  const clientIP = getClientIP(request);

  try {
    const body = await request.json();
    const { email, leadId, reason, timestamp } = body;

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email este obligatoriu.' },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.toLowerCase().trim();

    console.log('[GDPR DELETE REQUEST]', {
      email: sanitizedEmail,
      leadId: leadId || 'not provided',
      reason: reason || 'no reason',
      ip: clientIP,
      timestamp,
    });

    // Send notification email to GDPR team
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
        });

        // Email to GDPR team
        await transporter.sendMail({
          from: `Platforma Lend.ro <${process.env.BREVO_FROM_EMAIL || ADMIN_EMAIL}>`,
          to: [GDPR_EMAIL, ADMIN_EMAIL].join(','),
          subject: `🔒 GDPR: Cerere Ștergere Date - ${sanitizedEmail}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; background: #F9F7F4; padding: 20px; margin: 0; }
                  .container { background: white; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                  h2 { color: #DC2626; margin-bottom: 24px; font-size: 24px; }
                  .info-row { padding: 16px 0; border-bottom: 1px solid #E5E7EB; }
                  .label { color: #6B7280; font-size: 14px; margin-bottom: 4px; }
                  .value { color: #1F2937; font-size: 16px; font-weight: 600; }
                  .alert { background: #FEE2E2; border-left: 4px solid #DC2626; padding: 16px; margin: 24px 0; border-radius: 8px; }
                  .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 14px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>🔒 Cerere GDPR: Ștergere Date Personale</h2>
                  
                  <div class="alert">
                    <strong>⏰ ACȚIUNE NECESARĂ în 30 de zile (GDPR Art. 17)</strong>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value">${sanitizedEmail}</div>
                  </div>
                  
                  ${leadId ? `
                  <div class="info-row">
                    <div class="label">🆔 Lead ID</div>
                    <div class="value">${leadId}</div>
                  </div>
                  ` : ''}
                  
                  ${reason ? `
                  <div class="info-row">
                    <div class="label">💬 Motiv</div>
                    <div class="value">${reason}</div>
                  </div>
                  ` : ''}
                  
                  <div class="info-row">
                    <div class="label">📅 Data Cererii</div>
                    <div class="value">${new Date(timestamp).toLocaleString('ro-RO', { 
                      dateStyle: 'long', 
                      timeStyle: 'short' 
                    })}</div>
                  </div>

                  <div class="info-row">
                    <div class="label">🌐 IP</div>
                    <div class="value">${clientIP}</div>
                  </div>
                  
                  <div style="margin-top: 32px; background: #F3F4F6; padding: 20px; border-radius: 12px;">
                    <h3 style="margin-top: 0; color: #1F2937;">Pași de urmat:</h3>
                    <ol style="color: #4B5563; line-height: 1.8; padding-left: 20px;">
                      <li><strong>Verificare:</strong> Caută datele în DB (email: ${sanitizedEmail}${leadId ? `, ID: ${leadId}` : ''})</li>
                      <li><strong>Confirmare:</strong> Trimite email de confirmare către utilizator (max 3 zile)</li>
                      <li><strong>Ștergere:</strong> Șterge datele din:
                        <ul>
                          <li>Database (leads table)</li>
                          <li>Email arhivă (dacă există)</li>
                          <li>Backup-uri (sau marchează pentru ștergere)</li>
                        </ul>
                      </li>
                      <li><strong>Notificare brokeri:</strong> Anunță brokerii care au primit lead-ul</li>
                      <li><strong>Confirmare finală:</strong> Email către utilizator cu confirmare ștergere completă (max 30 zile)</li>
                      <li><strong>Log audit:</strong> Documentează acțiunea pentru compliance</li>
                    </ol>
                  </div>

                  <div class="footer">
                    <p><strong>Deadline legal:</strong> ${new Date(new Date(timestamp).getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ro-RO', { dateStyle: 'long' })}</p>
                    <p style="margin-top: 8px; font-size: 12px; color: #9CA3AF;">
                      Cerere generată automat de platforma lend.ro<br>
                      Conformitate: GDPR Art. 17 (Dreptul la ștergere)
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        // Confirmation email to user
        await transporter.sendMail({
          from: `GDPR - Lend.ro <${process.env.BREVO_FROM_EMAIL || GDPR_EMAIL}>`,
          to: sanitizedEmail,
          subject: '✓ Confirmare Cerere Ștergere Date - lend.ro',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; background: #F9F7F4; padding: 20px; margin: 0; }
                  .container { background: white; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                  h2 { color: #2D5F5D; margin-bottom: 24px; font-size: 24px; }
                  .success-box { background: #D1FAE5; border-left: 4px solid #10B981; padding: 16px; margin: 24px 0; border-radius: 8px; }
                  .timeline { margin: 24px 0; }
                  .timeline-item { display: flex; gap: 16px; margin-bottom: 16px; }
                  .timeline-number { flex-shrink: 0; width: 32px; height: 32px; background: #4FD1C5; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                  .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 14px; text-align: center; }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>✓ Cerere Înregistrată cu Succes</h2>
                  
                  <div class="success-box">
                    <strong>Cererea ta de retragere a consimțământului și ștergere a datelor a fost primită.</strong>
                  </div>
                  
                  <p style="color: #4B5563; line-height: 1.6;">
                    Bună ziua,<br><br>
                    Am primit cererea ta de ștergere a datelor personale conform GDPR (Regulamentul General privind Protecția Datelor).
                  </p>

                  <div class="timeline">
                    <h3 style="color: #1F2937; margin-bottom: 16px;">Ce urmează:</h3>
                    
                    <div class="timeline-item">
                      <div class="timeline-number">1</div>
                      <div>
                        <strong style="color: #1F2937;">Verificare date (1-3 zile)</strong><br>
                        <span style="color: #6B7280; font-size: 14px;">Verificăm dacă datele tale există în sistemele noastre</span>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-number">2</div>
                      <div>
                        <strong style="color: #1F2937;">Procesare cerere (max 30 zile)</strong><br>
                        <span style="color: #6B7280; font-size: 14px;">Ștergem datele din toate sistemele (database, backup-uri, email arhivă)</span>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-number">3</div>
                      <div>
                        <strong style="color: #1F2937;">Confirmare finală</strong><br>
                        <span style="color: #6B7280; font-size: 14px;">Vei primi un email de confirmare după ștergerea completă</span>
                      </div>
                    </div>
                  </div>

                  <p style="color: #4B5563; line-height: 1.6; margin-top: 24px;">
                    <strong>Deadline legal:</strong> ${new Date(new Date(timestamp).getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ro-RO', { dateStyle: 'long' })}<br>
                    (conform GDPR Art. 17)
                  </p>

                  <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 16px; margin: 24px 0; border-radius: 8px;">
                    <strong style="color: #92400E;">⚠️ Important:</strong><br>
                    <span style="color: #78350F; font-size: 14px;">
                      Ștergerea este definitivă și nu poate fi anulată. 
                      Dacă ai solicitat oferte de credit, brokerii contactați vor fi notificați despre retragerea consimțământului.
                    </span>
                  </div>

                  <div class="footer">
                    <p>
                      <strong>Întrebări sau nelămuriri?</strong><br>
                      Contactează-ne la <a href="mailto:gdpr@lend.ro" style="color: #4FD1C5; text-decoration: underline;">gdpr@lend.ro</a>
                    </p>
                    <p style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5E7EB;">
                      <strong>lend.ro</strong> | București, România<br>
                      <a href="https://lend.ro/politica-confidentialitate" style="color: #4FD1C5; text-decoration: none;">Politica de Confidențialitate</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        console.log('[GDPR EMAILS SENT]', { to: sanitizedEmail, gdprTeam: GDPR_EMAIL });

      } catch (emailError: any) {
        console.error('[GDPR EMAIL ERROR]', emailError.message);
        // Continue even if email fails - request is logged
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Cererea ta a fost înregistrată. Vei primi un email de confirmare în maxim 24 de ore.',
      email: sanitizedEmail,
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('[GDPR API ERROR]', {
      message: error.message,
      ip: clientIP,
    });
    
    return NextResponse.json(
      { error: 'A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct la gdpr@lend.ro' },
      { status: 500 }
    );
  }
}
