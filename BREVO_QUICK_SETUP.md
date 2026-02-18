# ⚡ Brevo Setup - 5 minute

## 1. Creare cont
https://app.brevo.com/account/register
Sign up cu open@lend.ro

## 2. Get SMTP Key
Settings → SMTP & API → Tab "SMTP"
Click "Create a new SMTP key" → Copy

## 3. Verifică sender
Settings → Senders & IP → Add sender
Email: open@lend.ro
Name: Platforma Lend.ro
→ Click link în email de verificare

## 4. Add în Vercel
Settings → Environment Variables

```
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=open@lend.ro
BREVO_SMTP_KEY=xsmtpsib-xxxxx (cheia copiată la step 2)
BREVO_FROM_EMAIL=open@lend.ro
BREVO_FROM_NAME=Platforma Lend.ro
```

## 5. Redeploy
Deployments → ⋮ → Redeploy

## ✅ Done!
Lead form → Email la open@lend.ro automat

**FREE:** 300 emails/zi
