import { NextResponse } from 'next/server';

// Lista de brokeri care primesc leads
const BROKERS = [
  { name: 'Andrea Broker 1', email: 'broker1@example.com' },
  { name: 'Broker 2', email: 'broker2@example.com' },
  { name: 'Broker 3', email: 'broker3@example.com' },
  { name: 'Broker 4', email: 'broker4@example.com' },
  { name: 'Broker 5', email: 'broker5@example.com' },
];

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

    // TODO: Integrare Resend.com sau alt email provider
    // Pentru MVP, salvăm în fișier local (pentru testare)
    const leadData = {
      id: Date.now(),
      name,
      email,
      phone,
      propertyType,
      loanAmount,
      monthlyPayment: Math.round(monthlyPayment),
      timestamp,
      sentToBrokers: BROKERS.map(b => b.email),
    };

    console.log('[LEAD RECEIVED]', leadData);

    // Aici va veni integrarea cu Resend.com
    // await sendEmailToBrokers(leadData, BROKERS);

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
