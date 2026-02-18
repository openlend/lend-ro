import { NextResponse } from 'next/server';

const LEAD_EMAIL = 'open@lend.ro';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyType, loanAmount, monthlyPayment, timestamp } = body;

    // Validare
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Date incomplete' },
        { status: 400 }
      );
    }

    const leadData = {
      id: Date.now(),
      name,
      email,
      phone,
      propertyType,
      loanAmount,
      monthlyPayment: Math.round(monthlyPayment),
      timestamp,
      sentTo: LEAD_EMAIL,
    };

    console.log('[LEAD RECEIVED]', leadData);

    // Salvare temporară în fișier pentru tracking
    const fs = require('fs');
    const path = require('path');
    const leadsDir = path.join(process.cwd(), 'data', 'leads');
    
    try {
      if (!fs.existsSync(leadsDir)) {
        fs.mkdirSync(leadsDir, { recursive: true });
      }
      
      const leadFile = path.join(leadsDir, `lead-${leadData.id}.json`);
      fs.writeFileSync(leadFile, JSON.stringify(leadData, null, 2));
      console.log('[LEAD SAVED]', leadFile);
    } catch (err) {
      console.error('[LEAD SAVE ERROR]', err);
    }

    // Trimitere email prin Brevo SMTP
    if (process.env.BREVO_SMTP_KEY) {
      try {
        const nodemailer = require('nodemailer');
        
        const transporter = nodemailer.createTransport({
          host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
          port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
          secure: false, // true for 465, false for 587
          auth: {
            user: process.env.BREVO_SMTP_USER,
            pass: process.env.BREVO_SMTP_KEY,
          },
        });

        const mailOptions = {
          from: `${process.env.BREVO_FROM_NAME || 'Platforma Lend.ro'} <${process.env.BREVO_FROM_EMAIL || LEAD_EMAIL}>`,
          to: LEAD_EMAIL,
          subject: `🏠 Lead nou lend.ro: ${name} - ${loanAmount.toLocaleString('ro-RO')} RON`,
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
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>🏠 Lead nou de pe lend.ro</h2>
                  
                  <div class="info-row">
                    <div class="label">📋 Nume complet</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📱 Telefon</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">🏠 Tip proprietate</div>
                    <div class="value">${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💰 Credit solicitat</div>
                    <div class="value"><span class="highlight">${loanAmount.toLocaleString('ro-RO')} RON</span></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💳 Rată lunară estimată</div>
                    <div class="value">${Math.round(monthlyPayment).toLocaleString('ro-RO')} RON/lună</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📅 Data solicitării</div>
                    <div class="value">${new Date(timestamp).toLocaleString('ro-RO', { 
                      dateStyle: 'long', 
                      timeStyle: 'short' 
                    })}</div>
                  </div>
                  
                  <div class="footer">
                    <p>Acesta este un email automat generat de platforma <strong>lend.ro</strong></p>
                  </div>
                </div>
              </body>
            </html>
          `,
          text: `
Lead nou lend.ro

Nume: ${name}
Email: ${email}
Telefon: ${phone}
Tip proprietate: ${propertyType}
Credit solicitat: ${loanAmount.toLocaleString('ro-RO')} RON
Rată lunară: ${Math.round(monthlyPayment).toLocaleString('ro-RO')} RON/lună
Data: ${new Date(timestamp).toLocaleString('ro-RO')}
          `.trim(),
        };

        await transporter.sendMail(mailOptions);
        console.log('[EMAIL SENT] via Brevo to', LEAD_EMAIL);

      } catch (emailError) {
        console.error('[EMAIL ERROR]', emailError);
        // Nu returnăm eroare - lead-ul e salvat oricum
      }
    } else {
      console.log('[EMAIL SKIPPED] No Brevo credentials in env');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Cererea ta a fost trimisă cu succes! Vei fi contactat în maxim 24h.',
      leadId: leadData.id,
    });

  } catch (error) {
    console.error('[LEAD API ERROR]', error);
    return NextResponse.json(
      { error: 'Eroare la procesarea cererii' },
      { status: 500 }
    );
  }
}
