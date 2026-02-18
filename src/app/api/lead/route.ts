import { NextResponse } from 'next/server';

// Email destinație pentru leads
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

    // TODO: Uncomment după setup Resend (vezi EMAIL_SETUP.md)
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'Platforma Lend.ro <onboarding@resend.dev>', // Schimbă în leads@lend.ro după verificare domeniu
    //   to: LEAD_EMAIL,
    //   subject: `🏠 Lead nou lend.ro: ${name} - ${loanAmount.toLocaleString('ro-RO')} RON`,
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //       <head>
    //         <style>
    //           body { font-family: 'Inter', Arial, sans-serif; background: #F9F7F4; padding: 20px; }
    //           .container { background: white; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; }
    //           h2 { color: #2D5F5D; margin-bottom: 24px; }
    //           .info-row { padding: 12px 0; border-bottom: 1px solid #E5E7EB; }
    //           .label { color: #6B7280; font-size: 14px; }
    //           .value { color: #1F2937; font-size: 16px; font-weight: 600; margin-top: 4px; }
    //           .highlight { background: #4FD1C5; color: white; padding: 2px 8px; border-radius: 6px; }
    //         </style>
    //       </head>
    //       <body>
    //         <div class="container">
    //           <h2>🏠 Lead nou de pe lend.ro</h2>
    //           
    //           <div class="info-row">
    //             <div class="label">📋 Nume complet</div>
    //             <div class="value">${name}</div>
    //           </div>
    //           
    //           <div class="info-row">
    //             <div class="label">📧 Email</div>
    //             <div class="value"><a href="mailto:${email}">${email}</a></div>
    //           </div>
    //           
    //           <div class="info-row">
    //             <div class="label">📱 Telefon</div>
    //             <div class="value"><a href="tel:${phone}">${phone}</a></div>
    //           </div>
    //           
    //           <div class="info-row">
    //             <div class="label">🏠 Tip proprietate</div>
    //             <div class="value">${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</div>
    //           </div>
    //           
    //           <div class="info-row">
    //             <div class="label">💰 Credit solicitat</div>
    //             <div class="value"><span class="highlight">${loanAmount.toLocaleString('ro-RO')} RON</span></div>
    //           </div>
    //           
    //           <div class="info-row">
    //             <div class="label">💳 Rată lunară estimată</div>
    //             <div class="value">${Math.round(monthlyPayment).toLocaleString('ro-RO')} RON/lună</div>
    //           </div>
    //           
    //           <div class="info-row">
    //             <div class="label">📅 Data solicitării</div>
    //             <div class="value">${new Date(timestamp).toLocaleString('ro-RO', { 
    //               dateStyle: 'long', 
    //               timeStyle: 'short' 
    //             })}</div>
    //           </div>
    //           
    //           <p style="margin-top: 32px; color: #6B7280; font-size: 14px;">
    //             Acesta este un email automat generat de platforma <strong>lend.ro</strong>
    //           </p>
    //         </div>
    //       </body>
    //     </html>
    //   `
    // });

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
