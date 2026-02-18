# 🚀 Brevo Account Setup - Step by Step (5 minute)

## ⚠️ Instrucțiuni pentru creare cont

**NU pot crea contul automat** - Brevo necesită verificare email + captcha uman.

**TU trebuie să creezi contul manual** urmând pașii de mai jos:

---

## 📋 Step 1: Creare cont Brevo

1. Deschide browser în modul Incognito/Private
2. Mergi pe: **https://app.brevo.com/account/register**

3. Completează formularul:
   - **Email:** `open@lend.ro`
   - **Password:** Generează una puternică (salvează în manager parole!)
   - **Company name:** `Lend.ro`
   - **Country:** Romania
   - **Phone:** (opțional)

4. Acceptă Terms & Conditions
5. Click **"Sign up"**

6. **Verifică inbox:** `open@lend.ro`
   - Login la: https://lend.ro:2096
   - Găsește email de la Brevo
   - Click link de confirmare

---

## 📧 Step 2: Verifică Sender Email

1. Login la Brevo: https://app.brevo.com

2. Click **Settings** (roată jos-stânga)

3. Click **Senders & IP**

4. Click **"Add a new sender"**
   - Email: `open@lend.ro`
   - Name: `Platforma Lend.ro`
   - Click **Add**

5. **Verifică inbox** `open@lend.ro` AGAIN
   - Primești email "Verify your sender"
   - Click link de confirmare
   - Status devine: ✅ **Verified**

---

## 🔑 Step 3: Generează SMTP Key

1. În Brevo Dashboard → Click **Settings**

2. Click **SMTP & API** (în meniul stânga)

3. Tab **"SMTP"** (nu API!)

4. Click **"Create a new SMTP key"**
   - Name: `lend-ro-production`
   - Click **Generate**

5. **COPIAZĂ INSTANT** cheia generată (începe cu `xsmtpsib-...`)
   - ⚠️ **NU o poți vedea din nou!**
   - Salvează în fișier temporar SAU direct în Vercel

6. Vezi și **Login (email):** `open@lend.ro`

---

## ☁️ Step 4: Add în Vercel Environment Variables

1. Login Vercel: https://vercel.com

2. Selectează project **"lend-ro"**

3. Click **Settings** → **Environment Variables**

4. Add următoarele 6 variabile:

### Variable 1:
- **Key:** `BREVO_SMTP_HOST`
- **Value:** `smtp-relay.brevo.com`
- Environment: Production + Preview + Development
- Click **Save**

### Variable 2:
- **Key:** `BREVO_SMTP_PORT`
- **Value:** `587`
- Environment: Production + Preview + Development
- Click **Save**

### Variable 3:
- **Key:** `BREVO_SMTP_USER`
- **Value:** `open@lend.ro`
- Environment: Production + Preview + Development
- Click **Save**

### Variable 4:
- **Key:** `BREVO_SMTP_KEY`
- **Value:** `xsmtpsib-xxxxx...` (cheia copiată la Step 3)
- Environment: Production + Preview + Development
- Click **Save**

### Variable 5:
- **Key:** `BREVO_FROM_EMAIL`
- **Value:** `open@lend.ro`
- Environment: Production + Preview + Development
- Click **Save**

### Variable 6:
- **Key:** `BREVO_FROM_NAME`
- **Value:** `Platforma Lend.ro`
- Environment: Production + Preview + Development
- Click **Save**

---

## 🔄 Step 5: Redeploy Vercel

1. În Vercel Dashboard → Click **Deployments**

2. Click pe cel mai recent deployment (verde Ready)

3. Click **⋮** (trei puncte dreapta sus)

4. Click **Redeploy**

5. Confirmă: **Redeploy**

6. Așteaptă ~2 minute până devine **Ready** (verde)

---

## ✅ Step 6: Test Email Funcționează

1. Deschide site-ul: https://lend-ro-*.vercel.app (SAU lend.ro după DNS)

2. Scroll la Calculator

3. Completează formular (date fake OK pentru test):
   - Preț proprietate: 500.000 RON
   - Venit: 10.000 RON
   - Click **"Solicită oferte de la 5 brokeri"**

4. Completează formularul modal:
   - Nume: Test User
   - Email: test@example.com
   - Telefon: 0712345678
   - Tip: Apartament
   - Click **"Trimite cererea"**

5. Verifică SUCCESS message (3 secunde)

6. **Check inbox `open@lend.ro`:**
   - Login: https://lend.ro:2096
   - Verifică folder **Inbox**
   - Ar trebui să vezi: **"🏠 Lead nou lend.ro: Test User - 400.000 RON"**

7. **Check Brevo Dashboard:**
   - Logs → Statistics
   - Ar trebui să vezi: 1 email Sent + 1 Delivered

---

## ⚠️ Troubleshooting

### Email nu sosește?

**1. Verifică Vercel Environment Variables:**
   - Toate 6 variabile prezente?
   - BREVO_SMTP_KEY corect copiat?

**2. Verifică Brevo Sender:**
   - `open@lend.ro` are status ✅ Verified?

**3. Check Spam folder:**
   - Login webmail: https://lend.ro:2096
   - Check folder **Spam/Junk**

**4. Check Vercel Logs:**
   - Vercel → Functions → `/api/lead`
   - Verifică logs pentru `[EMAIL SENT]` sau erori

**5. Check Brevo Logs:**
   - Brevo Dashboard → Logs → Statistics
   - Vezi dacă emailul apare ca Sent/Failed

### Eroare "Invalid credentials"?
- SMTP Key expirat sau greșit
- Regenerează SMTP Key în Brevo
- Update în Vercel Environment Variables
- Redeploy

### Eroare "Sender not verified"?
- Adaugă `open@lend.ro` ca sender în Brevo
- Click link verificare din email
- Așteaptă status ✅ Verified

---

## 💰 Limits Brevo FREE

- ✅ **300 emails/day**
- ✅ **9.000 emails/month**
- ✅ SMTP + API access
- ✅ Contact management
- ✅ Email templates

**Pentru lend.ro:**
- 50 leads/lună = 50 emails = **FREE ✅**
- 200 leads/lună = 200 emails = **FREE ✅**

Dacă depășești 300/day → Upgrade la Lite (€19/lună).

---

## 📊 Monitoring

### Brevo Dashboard:
https://app.brevo.com

- **Statistics:** Vezi câte emailuri trimise/delivered/opened
- **Logs:** Istoric complet cu toate emailurile
- **Contacts:** Lista tuturor lead-urilor (auto-sync)

### Vercel Function Logs:
https://vercel.com/dashboard

- Functions → `/api/lead`
- Vezi toate request-urile + success/errors

---

## ✅ După Setup Complet

Vei avea:
- ✅ Lead form funcțional pe site
- ✅ Email automat la `open@lend.ro` pentru fiecare lead
- ✅ Tracking local în `data/leads/` (backup)
- ✅ Dashboard Brevo cu statistici
- ✅ 100% gratuit (sub 300 emails/day)

**Total timp setup: 10-15 minute** ⏱️

---

## 🎉 Success!

Când vezi email în inbox după test → **GATA! FUNCȚIONEAZĂ!** 🚀📧

Acum fiecare lead generat pe site = email instant la tine.
