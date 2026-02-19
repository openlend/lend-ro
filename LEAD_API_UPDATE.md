# Lead API Update Instructions

## Changes needed in `/src/app/api/lead/route.ts`:

### 1. Add imports at top:
```typescript
import { getLeadConfirmationEmail } from '@/lib/email-templates';
```

### 2. After sending email to `open@lend.ro`, add email to lead:

```typescript
// Send confirmation email TO LEAD (instant)
let emailToLeadSent = false;
if (process.env.BREVO_SMTP_KEY && emailSent) {
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

  } catch (emailError: any) {
    console.error('[EMAIL TO LEAD ERROR]', emailError.message);
  }
}
```

### 3. Update `insertLead()` call to include new fields:

```typescript
// Schedule follow-up for 2 hours from now
const followUpTime = new Date(Date.now() + 2 * 60 * 60 * 1000); // +2 hours

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
  followUpScheduledAt: followUpTime.toISOString(),
  timestamp: leadData.timestamp,
});
```

### 4. Update response to include email_to_lead status:

```typescript
return NextResponse.json({ 
  success: true,
  message: 'Cererea ta a fost trimisă cu succes! Vei fi contactat de 5 brokeri certificați în maxim 24 de ore.',
  leadId: leadData.id,
  emailSent,
  emailToLeadSent,
  dbSaved,
  processingTime,
});
```

## Update `/src/lib/db.ts` insertLead function signature:

```typescript
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
  emailToLeadSent: boolean;
  followUpScheduledAt: string;
  timestamp: string;
}) {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      INSERT INTO leads (
        id, name, email, phone, property_type, loan_amount, monthly_payment,
        ip, user_agent, email_sent, email_to_lead_sent, follow_up_scheduled_at, timestamp
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
        ${lead.emailToLeadSent},
        ${lead.followUpScheduledAt},
        ${lead.timestamp}
      )
    `;
    return true;
  } catch (error: any) {
    console.error('[DB] Insert lead error:', error.message);
    return false;
  }
}
```

---

**STATUS:** Instructions created. Manual edits needed due to file size.

**NEXT:** Create `/api/cron/follow-up` endpoint + configure OpenClaw Gateway Cron.
