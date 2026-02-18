# Database Setup - Neon Postgres (lend.ro)

## 🎯 Overview

Lead-urile se salvează acum în **Neon Postgres** (persistent database), nu în filesystem (care e read-only pe Vercel).

---

## ✅ Setup Steps (5-10 min)

### 1️⃣ Create Neon Postgres Database

**Go to:** https://console.neon.tech/signup

**Steps:**
1. Sign up cu GitHub sau email
2. Click **"Create a project"**
3. Project name: `lend-ro`
4. Region: **Europe (Frankfurt)** sau **Europe (London)** (mai aproape de România)
5. Postgres version: **16** (default)
6. Click **"Create project"**

**FREE Tier Limits:**
- 512 MB storage (suficient pentru 10.000+ leads)
- 1 project
- Always-available database
- ✅ GRATUIT forever pentru proiecte mici

---

### 2️⃣ Get Database Connection String

După crearea proiectului, vei vedea pe dashboard:

**Connection string format:**
```
postgresql://username:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require
```

**Copy this URL!** (Neon îl afișează automat după creare)

**Alternative:**
1. Go to Dashboard → **Connection Details**
2. Copy **Connection string** (PostgreSQL format)
3. Make sure it includes `?sslmode=require` at the end

---

### 3️⃣ Add to Vercel Environment Variables

**Go to:** https://vercel.com/openlends-projects/lend-ro

**Steps:**
1. Click **Settings** → **Environment Variables**
2. Add new variable:
   - **Name:** `DATABASE_URL`
   - **Value:** `postgresql://username:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`
   - **Environment:** Production, Preview, Development (check all 3)
3. Click **"Save"**

---

### 4️⃣ Redeploy on Vercel

**Option A - Automatic (recommended):**
```bash
# In your local project
cd /data/.openclaw/workspace/projects/lend-ro-nextjs
git push origin main
```
Vercel auto-deploys cu noile env vars.

**Option B - Manual:**
1. Go to Vercel Dashboard → **Deployments**
2. Click pe latest deployment
3. Click **"Redeploy"** button
4. Check ☑️ **"Use existing build cache"** (mai rapid)
5. Click **"Redeploy"**

**Wait:** 1-2 minutes pentru deployment

---

### 5️⃣ Initialize Database Schema

**Metoda 1 - Browser (Recomandat):**
1. Go to: https://lend-ro.vercel.app/api/lead
2. Vei vedea JSON response cu `databaseInitialized: true`
3. ✅ Gata! Schema creată automat

**Metoda 2 - Curl:**
```bash
curl https://lend-ro.vercel.app/api/lead
```

**Expected response:**
```json
{
  "status": "healthy",
  "service": "lead-api",
  "timestamp": "2026-02-18T20:30:00Z",
  "brevoConfigured": false,
  "databaseConfigured": true,
  "databaseInitialized": true
}
```

**Schema created:**
- Table: `leads`
- Columns: id, name, email, phone, property_type, loan_amount, monthly_payment, ip, user_agent, email_sent, created_at, timestamp
- Index: `leads_created_at_idx` (for fast sorting)

---

### 6️⃣ Test End-to-End

**Submit a test lead:**
1. Go to: https://lend-ro.vercel.app
2. Use calculator → click **"Aplică"** button
3. Fill form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 0712345678
4. Submit

**Check admin panel:**
1. Go to: https://lend-ro.vercel.app/admin/leads
2. Login: `admin` / `lend2026admin`
3. **You should see your test lead!** 🎉

---

## 🔍 Verify Database in Neon Console

**Go to:** https://console.neon.tech → Your project

**SQL Editor:**
```sql
-- Check how many leads you have
SELECT COUNT(*) FROM leads;

-- View all leads
SELECT * FROM leads ORDER BY created_at DESC LIMIT 10;

-- View lead details
SELECT 
  name, email, phone, 
  loan_amount, monthly_payment,
  created_at 
FROM leads 
ORDER BY created_at DESC;
```

---

## 📊 What Happens Now

### When a user submits a lead:

1. ✅ **Frontend validation** (phone, email format)
2. ✅ **Backend validation** (rate limit, honeypot, sanitization)
3. ✅ **Email sent** via Brevo (if configured)
4. ✅ **Saved to Neon Postgres** (persistent, survives deploys)
5. ✅ **Admin panel** shows it instantly

### Before Database Setup:
- ❌ Leads saved to JSON files (lost on Vercel serverless)
- ❌ Admin panel empty
- ✅ Email still worked (if Brevo configured)

### After Database Setup:
- ✅ Leads saved permanently in Postgres
- ✅ Admin panel works 100%
- ✅ Email + Database both work
- ✅ Can query/export leads anytime

---

## 🔒 Security

### Database Security:
- ✅ SSL required (`sslmode=require`)
- ✅ Password-protected connection
- ✅ Only backend can access (not exposed to frontend)
- ✅ Environment variable (not in code)

### Admin Panel:
- ✅ HTTP Basic Auth
- ✅ Password in env var (`ADMIN_PASSWORD`)
- ⚠️ **Change default password!**

**Change admin password:**
1. Vercel → Settings → Environment Variables
2. Add: `ADMIN_PASSWORD=your-secure-password-here`
3. Redeploy

---

## 📈 Monitoring

### Check database health:
```bash
curl https://lend-ro.vercel.app/api/lead
```

**Response fields:**
- `databaseConfigured`: true if `DATABASE_URL` exists
- `databaseInitialized`: true if schema created successfully

### Check Neon Dashboard:
- **Storage used:** Dashboard → Project → Overview
- **Connection count:** Metrics tab
- **Query performance:** Monitoring tab

---

## 🚨 Troubleshooting

### Issue: `databaseConfigured: false`

**Problem:** `DATABASE_URL` env var not set on Vercel

**Solution:**
1. Check Vercel → Settings → Environment Variables
2. Make sure `DATABASE_URL` exists for Production environment
3. Redeploy

---

### Issue: `databaseInitialized: false`

**Problem:** Schema creation failed

**Solution:**
1. Check Neon Console → SQL Editor
2. Run manually:
```sql
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  property_type VARCHAR(50) NOT NULL,
  loan_amount INTEGER NOT NULL,
  monthly_payment INTEGER NOT NULL,
  ip VARCHAR(45),
  user_agent TEXT,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  timestamp TIMESTAMP
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
```
3. Refresh `/api/lead` endpoint

---

### Issue: Admin panel shows "No leads yet" but you submitted a lead

**Problem:** Database not saving (check Vercel logs)

**Solution:**
1. Vercel → Functions → `/api/lead` → Check logs
2. Look for `[DB SAVED]` or `[DB ERROR]` messages
3. If error, check `DATABASE_URL` format is correct
4. Make sure SSL mode is enabled (`?sslmode=require`)

---

### Issue: Connection string format wrong

**Correct format:**
```
postgresql://username:password@host:5432/database?sslmode=require
```

**Common mistakes:**
- Missing `?sslmode=require` at the end
- Using `postgres://` instead of `postgresql://`
- Spaces in the URL
- Missing password

---

## 🎯 Next Steps (Optional)

### 1. Export leads to CSV:

**Neon SQL Editor:**
```sql
COPY (
  SELECT 
    id, name, email, phone, property_type,
    loan_amount, monthly_payment,
    created_at::text
  FROM leads
  ORDER BY created_at DESC
) TO STDOUT WITH CSV HEADER;
```

Copy output → paste to Excel/Google Sheets

---

### 2. Backup database:

**Option A - Neon Backup (Manual):**
- Neon Console → Project → Settings → **Export snapshot**

**Option B - Programmatic:**
```bash
pg_dump $DATABASE_URL > backup.sql
```

---

### 3. Analytics queries:

**Leads per day:**
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as leads_count
FROM leads
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

**Average loan amount:**
```sql
SELECT 
  AVG(loan_amount) as avg_loan,
  MIN(loan_amount) as min_loan,
  MAX(loan_amount) as max_loan
FROM leads;
```

**Most popular property type:**
```sql
SELECT 
  property_type,
  COUNT(*) as count
FROM leads
GROUP BY property_type
ORDER BY count DESC;
```

---

## ✅ Final Checklist

- [ ] Neon project created
- [ ] `DATABASE_URL` added to Vercel
- [ ] Vercel redeployed
- [ ] `/api/lead` returns `databaseInitialized: true`
- [ ] Test lead submitted successfully
- [ ] Admin panel shows test lead
- [ ] Admin password changed from default
- [ ] Backup strategy decided (optional)

---

## 📞 Support

**Neon Docs:** https://neon.tech/docs/get-started-with-neon  
**Neon Discord:** https://discord.gg/neon  
**Vercel Docs:** https://vercel.com/docs/storage/vercel-postgres

---

**Last Updated:** 2026-02-18 20:30 CET  
**Database:** Neon Postgres (Serverless)  
**Status:** ✅ Production Ready
