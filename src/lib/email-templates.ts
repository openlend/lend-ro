// Email templates for lead workflow

export function getLeadConfirmationEmail(data: {
  name: string;
  loanAmount: number;
  monthlyPayment: number;
}) {
  return {
    subject: '✅ Cererea ta a fost primită - lend.ro',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: #F9F7F4; padding: 20px; margin: 0; }
    .container { background: white; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    h2 { color: #2D5F5D; margin-bottom: 16px; font-size: 28px; }
    p { color: #374151; line-height: 1.7; margin: 12px 0; }
    .highlight { background: #4FD1C5; color: white; padding: 20px; border-radius: 12px; margin: 24px 0; }
    .button { display: inline-block; background: #2D5F5D; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; margin: 16px 0; }
    .footer { margin-top: 32px; padding-top: 24px; border-top: 2px solid #E5E7EB; color: #6B7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>🎉 Bună ${data.name.split(' ')[0]}!</h2>
    
    <p>Mulțumim pentru cererea ta pe <strong>lend.ro</strong>!</p>
    
    <p><strong>Am primit solicitarea ta pentru un credit ipotecar de ${data.loanAmount.toLocaleString('ro-RO')} RON.</strong></p>
    
    <div class="highlight">
      <p style="margin: 0; font-size: 16px; font-weight: 700;">📊 Rata lunară estimată:</p>
      <p style="margin: 8px 0 0 0; font-size: 32px; font-weight: 900;">${data.monthlyPayment.toLocaleString('ro-RO')} RON/lună</p>
    </div>
    
    <h3 style="color: #2D5F5D; margin-top: 32px;">📞 Ce urmează?</h3>
    
    <p>În următoarele <strong>24 de ore</strong> vei primi:</p>
    
    <ul style="line-height: 2;">
      <li>📧 Email-uri de la <strong>5 brokeri certificați</strong> cu oferte personalizate</li>
      <li>📱 Telefon de la specialiști pentru clarificări suplimentare</li>
      <li>💬 WhatsApp cu detalii despre documentația necesară</li>
    </ul>
    
    <p><strong>💡 Important:</strong> Nu plătești nimic pentru acest serviciu. Băncile ne plătesc pe noi, nu tu!</p>
    
    <a href="https://lend.ro" class="button">Vezi ghidul complet →</a>
    
    <div class="footer">
      <p><strong>lend.ro</strong> | București, România</p>
      <p>Ai întrebări? Scrie-ne la <a href="mailto:open@lend.ro" style="color: #4FD1C5;">open@lend.ro</a></p>
      <p style="font-size: 12px; margin-top: 16px;">
        <a href="https://lend.ro/politica-confidentialitate" style="color: #4FD1C5; text-decoration: none;">Politica de Confidențialitate</a> | 
        <a href="https://lend.ro/termeni-conditii" style="color: #4FD1C5; text-decoration: none;">Termeni și Condiții</a>
      </p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Bună ${data.name.split(' ')[0]}!

Mulțumim pentru cererea ta pe lend.ro!

Am primit solicitarea ta pentru un credit ipotecar de ${data.loanAmount.toLocaleString('ro-RO')} RON.
Rata lunară estimată: ${data.monthlyPayment.toLocaleString('ro-RO')} RON/lună

Ce urmează?

În următoarele 24 de ore vei primi:
- Email-uri de la 5 brokeri certificați cu oferte personalizate
- Telefon de la specialiști pentru clarificări suplimentare
- WhatsApp cu detalii despre documentația necesară

Important: Nu plătești nimic pentru acest serviciu. Băncile ne plătesc pe noi, nu tu!

Ai întrebări? Scrie-ne la open@lend.ro

lend.ro | București, România
    `.trim()
  };
}

export function getFollowUpEmail(data: {
  name: string;
  loanAmount: number;
}) {
  return {
    subject: '🔔 Ai primit deja oferte? - lend.ro',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: #F9F7F4; padding: 20px; margin: 0; }
    .container { background: white; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    h2 { color: #2D5F5D; margin-bottom: 16px; font-size: 28px; }
    p { color: #374151; line-height: 1.7; margin: 12px 0; }
    .cta { background: #2D5F5D; color: white; padding: 24px; border-radius: 12px; margin: 24px 0; text-align: center; }
    .button { display: inline-block; background: #4FD1C5; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; margin: 16px 0; }
    .footer { margin-top: 32px; padding-top: 24px; border-top: 2px solid #E5E7EB; color: #6B7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>👋 Bună ${data.name.split(' ')[0]}!</h2>
    
    <p>Acum 2 ore ai solicitat oferte pentru un credit ipotecar de <strong>${data.loanAmount.toLocaleString('ro-RO')} RON</strong>.</p>
    
    <p><strong>Ai primit deja oferte de la brokerii noștri?</strong></p>
    
    <div class="cta">
      <p style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700;">📬 Verifică-ți inbox-ul!</p>
      <p style="margin: 0; font-size: 14px; opacity: 0.9;">Ar trebui să ai deja email-uri de la 3-5 brokeri certificați.</p>
    </div>
    
    <h3 style="color: #2D5F5D;">🤔 Nu ai primit nimic?</h3>
    
    <p>Posibile cauze:</p>
    
    <ul style="line-height: 2;">
      <li>📧 Verifică folder-ul <strong>Spam/Junk</strong></li>
      <li>⏰ Brokerii lucrează L-V 9:00-18:00 (răspuns în 24h)</li>
      <li>📱 Unii brokeri preferă să sune direct</li>
    </ul>
    
    <p><strong>💬 Ai întrebări?</strong> Răspunde direct la acest email sau scrie-ne la <a href="mailto:open@lend.ro" style="color: #4FD1C5;">open@lend.ro</a></p>
    
    <a href="https://lend.ro/blog/ghid-complet-credit-ipotecar-2026" class="button">Citește ghidul complet →</a>
    
    <div class="footer">
      <p><strong>lend.ro</strong> | București, România</p>
      <p style="font-size: 12px; margin-top: 16px;">
        Vrei să te dezabonezi? <a href="https://lend.ro/dezabonare" style="color: #4FD1C5; text-decoration: underline;">Click aici</a>
      </p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Bună ${data.name.split(' ')[0]}!

Acum 2 ore ai solicitat oferte pentru un credit ipotecar de ${data.loanAmount.toLocaleString('ro-RO')} RON.

Ai primit deja oferte de la brokerii noștri?

Verifică-ți inbox-ul! Ar trebui să ai deja email-uri de la 3-5 brokeri certificați.

Nu ai primit nimic? Posibile cauze:
- Verifică folder-ul Spam/Junk
- Brokerii lucrează L-V 9:00-18:00 (răspuns în 24h)
- Unii brokeri preferă să sune direct

Ai întrebări? Răspunde direct la acest email sau scrie-ne la open@lend.ro

lend.ro | București, România
    `.trim()
  };
}
