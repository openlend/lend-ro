# Email Setup pentru lend.ro

## Configurare Resend.com (FREE tier - 3000 emails/luna)

### 1. Creare cont Resend
- Mergi pe https://resend.com
- Sign up cu open@lend.ro
- Verifică emailul

### 2. Obține API Key
- Dashboard → API Keys → Create API Key
- Name: `lend-ro-production`
- Copiază cheia (începe cu `re_...`)

### 3. Adaugă în Vercel
- Vercel Dashboard → lend-ro project
- Settings → Environment Variables
- Add: `RESEND_API_KEY` = `re_...`
- Redeploy

### 4. Verifică domeniu (opțional, pentru brand)
- Resend Dashboard → Domains → Add Domain
- Domain: `lend.ro`
- Adaugă DNS records (TXT, MX, CNAME)
- După verificare poți trimite de la `leads@lend.ro`

**FĂRĂ verificare domeniu:** trimiți de la `onboarding@resend.dev` (FREE)

### 5. Install dependență
```bash
npm install resend
```

### 6. Decomentează codul din `/src/app/api/lead/route.ts`
Șterge comentariile `//` de la:
```typescript
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ ... });
```

### 7. Test
- Completează formular pe site
- Verifică inbox open@lend.ro
- Verifică Resend Dashboard → Emails pentru delivery status

---

## Email Template

Subiect: `🏠 Lead nou: Ion Popescu - 400.000 RON`

Body:
```
Salut Radu,

Lead nou de pe lend.ro:

📋 Date contact:
- Nume: Ion Popescu
- Email: ion.popescu@email.com
- Telefon: 0712345678

🏠 Detalii credit:
- Tip proprietate: Apartament
- Credit solicitat: 400.000 RON
- Rată lunară estimată: 2.500 RON/lună

📅 Data: 18 februarie 2026, 17:45

---
Acesta este un email automat de pe lend.ro
```

---

## Costuri

**Resend FREE tier:**
- 3.000 emails/lună
- 100 emails/zi
- Perfect pentru început

**Dacă depășești:**
- Pay-as-you-go: $1 per 1.000 emails
- Estimare: 100 leads/lună = 100 emails = FREE

---

## Alternative (dacă vrei altceva)

1. **SendGrid** - 100 emails/zi FREE
2. **Mailgun** - 5.000 emails/lună FREE (3 luni)
3. **AWS SES** - $0.10 per 1.000 emails (necesită AWS account)

**Recomandare:** Resend (cel mai simplu de integrat cu Next.js)
