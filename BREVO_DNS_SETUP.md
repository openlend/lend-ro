# Brevo DNS Setup - lend.ro

## 🎯 Task: Add 4 DNS records for Brevo email authentication

**Domain:** lend.ro  
**Purpose:** Authenticate Brevo as sender for open@lend.ro emails

---

## 📋 DNS Records to Add

### 1️⃣ Brevo Code (TXT record)

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Name** | @ (or leave blank, or "lend.ro") |
| **Value** | `brevo-code:3bae217464673647fbd84409b448a05` |
| **TTL** | 3600 (1 hour) or default |

---

### 2️⃣ DKIM 1 Record (CNAME)

| Field | Value |
|-------|-------|
| **Type** | CNAME |
| **Name** | `brevo1._domainkey` |
| **Value** | `b1.lend-ro.dkim.brevo.com` |
| **TTL** | 3600 (1 hour) or default |

---

### 3️⃣ DKIM 2 Record (CNAME)

| Field | Value |
|-------|-------|
| **Type** | CNAME |
| **Name** | `brevo2._domainkey` |
| **Value** | `b2.lend-ro.dkim.brevo.com` |
| **TTL** | 3600 (1 hour) or default |

---

### 4️⃣ DMARC Record (TXT)

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Name** | `_dmarc` |
| **Value** | `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com` |
| **TTL** | 3600 (1 hour) or default |

---

## 🔧 How to Add (Hostinger cPanel)

### Step 1: Login to cPanel
1. Go to: https://lend.ro:2083
2. User: `lend092sdfjksd`
3. Pass: `3&d_pQ!^I%_?`

### Step 2: Open DNS Zone Editor
1. Find **"Zone Editor"** or **"Advanced DNS Zone Editor"**
2. Select domain: **lend.ro**

### Step 3: Add Each Record

**For TXT records (Brevo code + DMARC):**
- Click **"Add Record"** → **"TXT"**
- Name: `@` (for Brevo code) or `_dmarc` (for DMARC)
- Value: Copy exact value from table above
- Click **"Add Record"**

**For CNAME records (DKIM 1 + 2):**
- Click **"Add Record"** → **"CNAME"**
- Name: `brevo1._domainkey` (or `brevo2._domainkey`)
- Value: Copy exact value from table above
- Click **"Add Record"**

### Step 4: Wait for DNS Propagation
- **Time:** 10-60 minutes (usually ~15 min)
- **Check:** Go back to Brevo → Click **"Authenticate this email domain"**

---

## ✅ Verification

After adding all 4 records, wait 15-30 minutes, then:

1. Go to Brevo dashboard
2. Click **"Authenticate this email domain"**
3. Brevo will check all 4 records
4. **Status:** ✅ Authenticated (green checkmark)

---

## 🚨 Common Issues

### Issue 1: "Record not found"
**Solution:** Wait longer (up to 1 hour), DNS propagation takes time

### Issue 2: "Invalid CNAME value"
**Solution:** Make sure you copied the FULL value including `.com` at the end

### Issue 3: "Multiple TXT records conflict"
**Solution:** Each TXT record should be on its OWN line, don't merge them

---

## 📝 Quick Copy-Paste (for cPanel)

```
# Brevo Code (TXT)
Name: @
Value: brevo-code:3bae217464673647fbd84409b448a05

# DKIM 1 (CNAME)
Name: brevo1._domainkey
Value: b1.lend-ro.dkim.brevo.com

# DKIM 2 (CNAME)
Name: brevo2._domainkey
Value: b2.lend-ro.dkim.brevo.com

# DMARC (TXT)
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com
```

---

## 🎯 After Authentication

Once authenticated, you can:

1. **Add environment variables to Vercel:**
   ```
   BREVO_SMTP_HOST=smtp-relay.brevo.com
   BREVO_SMTP_PORT=587
   BREVO_SMTP_USER=open@lend.ro
   BREVO_SMTP_KEY=<your_smtp_key_from_brevo>
   BREVO_FROM_EMAIL=open@lend.ro
   BREVO_FROM_NAME=Platforma Lend.ro
   ```

2. **Redeploy on Vercel** (Settings → Deployments → Redeploy)

3. **Test lead form** → Email should arrive to open@lend.ro

---

**Estimated time:** 5 minutes to add records + 15-30 min DNS propagation = **~30-40 minutes total**
