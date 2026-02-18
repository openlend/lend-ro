# Email Setup pentru lend.ro - Brevo (Sendinblue)

## ✅ Configurare Brevo SMTP (FREE tier - 300 emails/zi)

### 1. Creare cont Brevo
- Mergi pe https://app.brevo.com/account/register
- Sign up cu open@lend.ro (sau alt email)
- Verifică emailul

### 2. Obține SMTP credentials
- Login la https://app.brevo.com
- Settings (stânga jos) → SMTP & API
- Tab: **SMTP**
- Copiază:
  - **SMTP Server:** smtp-relay.brevo.com
  - **Port:** 587
  - **Login:** (email-ul tău de sign-up)
  - **SMTP Key:** Click "Create a new SMTP key" → copiază

### 3. Verifică sender email (IMPORTANT!)
- Settings → Senders & IP
- Click "Add a new sender"
- Email: `open@lend.ro`
- Name: `Platforma Lend.ro`
- Verifică emailul (click link în inbox)

### 4. Adaugă în Vercel Environment Variables
- Vercel Dashboard → lend-ro project
- Settings → Environment Variables
- Add următoarele:

```
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=open@lend.ro (sau email-ul tău de sign-up)
BREVO_SMTP_KEY=xsmtpsib-xxxxx... (cheia copiată la pasul 2)
BREVO_FROM_EMAIL=open@lend.ro
BREVO_FROM_NAME=Platforma Lend.ro
```

### 5. Redeploy Vercel
- Deployments → Latest → ⋮ menu → Redeploy
- Sau push orice commit nou

### 6. Install nodemailer (dacă nu e deja)
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 7. Test local (opțional)
Creează fișier `.env.local`:
```
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=open@lend.ro
BREVO_SMTP_KEY=xsmtpsib-xxxxx...
BREVO_FROM_EMAIL=open@lend.ro
BREVO_FROM_NAME=Platforma Lend.ro
```

Run local:
```bash
npm run dev
```

Completează formularul → verifică inbox open@lend.ro

---

## 📧 Email Template (actual)

### Subiect:
```
🏠 Lead nou lend.ro: Ion Popescu - 400.000 RON
```

### Body HTML:
- Design clean cu background cream
- Card alb cu border-radius
- Info structurate (nume, email, telefon, etc.)
- Highlight mint pentru suma creditului
- Footer cu branding lend.ro

### Body Text (fallback):
Plain text pentru clienți email fără HTML.

---

## 💰 Costuri Brevo

**FREE tier:**
- ✅ 300 emails/zi
- ✅ SMTP + API access
- ✅ Contact management
- ✅ Email templates

**Dacă depășești:**
- Lite: 10.000 emails/lună = €19/lună
- Standard: 20.000 emails/lună = €29/lună

**Estimare pentru lend.ro:**
- 50 leads/lună = 50 emails = **FREE**
- 200 leads/lună = 200 emails = **FREE**

---

## 🔍 Verificare funcționare

### 1. Check Vercel Logs
- Vercel Dashboard → Functions
- Click pe `/api/lead`
- Verifică logs: `[EMAIL SENT] via Brevo to open@lend.ro`

### 2. Check Brevo Dashboard
- Logs → Statistics
- Vezi emails sent/delivered/opened

### 3. Check inbox open@lend.ro
- Webmail: https://lend.ro:2096
- Verifică folder Inbox și Spam

---

## ⚠️ Troubleshooting

**Email nu sosește:**
1. Verifică Environment Variables în Vercel (toate 6)
2. Verifică sender `open@lend.ro` e verificat în Brevo
3. Check Spam folder în webmail
4. Check Vercel Function logs pentru erori
5. Verifică Brevo logs dacă emailul a fost sent

**Eroare "Invalid credentials":**
- SMTP Key greșit sau expirat
- Regenerează SMTP Key în Brevo Settings

**Eroare "Sender not verified":**
- Adaugă `open@lend.ro` ca sender în Brevo
- Click link de verificare din email

---

## 🚀 Next Steps (opțional)

### 1. Custom domain sending
- Verifică domeniul lend.ro în Brevo
- Adaugă DNS records (SPF, DKIM, DMARC)
- Trimiți de la `leads@lend.ro` în loc de `open@lend.ro`

### 2. Email templates în Brevo
- Creează template în Brevo Dashboard
- Folosește în cod cu `templateId` în loc de `html`

### 3. Auto-reply client
- După submit lead, trimite email de confirmare la client
- Template: "Am primit cererea ta, te contactăm în 24h"

---

**Setup complet = 10 minute** ⏱️

**Acum funcționează:** Lead form → API → Brevo SMTP → inbox open@lend.ro 📧✅
