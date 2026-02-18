# Cloudflare + Google Workspace Setup - lend.ro

## 🎯 Obiectiv

Migrare completă:
- **DNS:** cPanel → Cloudflare (CDN + protecție)
- **Email:** cPanel → Google Workspace alias (gratuit)
- **Site:** Rămâne pe Vercel (deja configurat)

---

## ✅ Ce funcționează DEJA

- ✅ Site live pe Vercel: https://lend-ro.vercel.app
- ✅ Database Neon Postgres configurată
- ✅ Admin panel: /admin/leads (user: admin / pass: lend2026admin)
- ✅ Backend complet: validation, rate limiting, honeypot
- ✅ Blog + articol SEO 2000+ cuvinte
- ✅ Toate 12 logo-uri bănci

---

## 📋 Pași pentru mâine (30 min total)

### 1️⃣ Cloudflare Setup (10 min)

#### A. Add Site

1. Go to: https://dash.cloudflare.com
2. Sign in (sau Sign up dacă nu ai cont)
3. Click **"Add a Site"**
4. Enter: `lend.ro`
5. Select plan: **FREE** (suficient pentru tot ce ai nevoie)
6. Click **"Continue"**

#### B. Scan DNS Records

Cloudflare va scana automat DNS-ul actual.

**Șterge TOATE records găsite!** (vor fi greșite din zona editor veche)

#### C. Add Records Manual

Click **"Add record"** pentru fiecare:

```
Type: A
Name: @ (or lend.ro)
IPv4: 76.76.21.21
Proxy: ON (☁️ orange cloud)
TTL: Auto

---

Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy: ON (☁️ orange cloud)
TTL: Auto

---

Type: MX (Google Workspace - toate 5!)
Name: @
Mail server: ASPMX.L.GOOGLE.COM
Priority: 1
TTL: Auto

---

Type: MX
Name: @
Mail server: ALT1.ASPMX.L.GOOGLE.COM
Priority: 5
TTL: Auto

---

Type: MX
Name: @
Mail server: ALT2.ASPMX.L.GOOGLE.COM
Priority: 5
TTL: Auto

---

Type: MX
Name: @
Mail server: ALT3.ASPMX.L.GOOGLE.COM
Priority: 10
TTL: Auto

---

Type: MX
Name: @
Mail server: ALT4.ASPMX.L.GOOGLE.COM
Priority: 10
TTL: Auto
```

#### D. Copy Nameservers

Cloudflare îți va arăta 2 nameservers:
```
Example:
alex.ns.cloudflare.com
lily.ns.cloudflare.com
```

**COPIAZĂ-LE!** Le vei folosi la pasul 2.

---

### 2️⃣ Update Nameservers la Registrar (5 min)

**Unde ai cumpărat domeniul lend.ro?**
- Hostinger?
- Namecheap?
- GoDaddy?
- Altul?

#### Pentru Hostinger:

1. Go to: https://hpanel.hostinger.com/domains
2. Click pe **lend.ro**
3. Scroll jos → **"DNS/Nameservers"**
4. Click **"Change Nameservers"**
5. Select: **"Custom nameservers"**
6. Paste cele 2 nameservers de la Cloudflare
7. Click **"Save"**

**⏱️ Propagare:** 2-24 ore (de obicei ~2-4 ore)

---

### 3️⃣ Google Workspace - Add Domain Alias (10 min)

#### A. Open Admin Console

1. Go to: https://admin.google.com
2. Sign in cu contul Google Workspace existent

#### B. Add Domain Alias

1. Click **"Domains"** (stânga)
2. Click **"Manage domains"**
3. Click **"Add a domain or domain alias"**
4. Select: **"Add a domain alias of [your-primary-domain]"**
5. Enter: `lend.ro`
6. Click **"Continue and verify domain ownership"**

#### C. Verify Domain

**Metoda 1: TXT Record (recomandat)**

Google îți va da un TXT record de verificare:
```
Example:
google-site-verification=abc123xyz456...
```

**Add în Cloudflare:**
```
Type: TXT
Name: @
Content: google-site-verification=abc123xyz456...
TTL: Auto
```

**Apoi în Google Admin:**
- Click **"Verify"**
- Wait 10-30 sec
- ✅ Verificat!

#### D. Activate Gmail

1. After verification → Click **"Activate Gmail"**
2. Wait 10-30 min pentru propagare
3. Test: trimite email la open@lend.ro
4. ✅ Ar trebui să apară în Gmail-ul tău!

---

### 4️⃣ Vercel Domain Setup (5 min)

**Opțional:** Dacă lend.ro nu merge după DNS propagare.

1. Go to: https://vercel.com (login cu GitHub)
2. Project: **lend-ro**
3. Settings → **Domains**
4. Add: `lend.ro` + `www.lend.ro`
5. Vercel verifică automat DNS
6. ✅ Gata!

---

## 🧪 Testing Checklist

### Verifică după DNS propagare (2-4 ore):

#### Site:
- [ ] https://lend.ro se deschide (homepage)
- [ ] https://www.lend.ro redirecționează la lend.ro
- [ ] https://lend.ro/blog funcționează
- [ ] https://lend.ro/admin/leads funcționează (login: admin/lend2026admin)
- [ ] Submit test lead → apare în admin

#### Email:
- [ ] Trimite email TEST la open@lend.ro
- [ ] Verifică inbox Gmail
- [ ] Reply din Gmail cu open@lend.ro (sender)
- [ ] Destinatarul primește de la open@lend.ro

#### SSL/Security:
- [ ] Certificat SSL activ (lacăt verde 🔒)
- [ ] Cloudflare proxy ON (☁️)
- [ ] No mixed content warnings

---

## 🔍 Troubleshooting

### Issue: Site nu se deschide după 24h

**Check:**
```bash
nslookup lend.ro
```

**Ar trebui să vezi:**
```
Server: 1.1.1.1
Address: 1.1.1.1#53

Non-authoritative answer:
Name: lend.ro
Address: 76.76.21.21
```

**Dacă nu:** Nameservers nu s-au propagat → wait more sau check registrar.

---

### Issue: Email nu funcționează

**Check MX records:**
```bash
nslookup -type=mx lend.ro
```

**Ar trebui să vezi:**
```
lend.ro mail exchanger = 1 ASPMX.L.GOOGLE.COM
lend.ro mail exchanger = 5 ALT1.ASPMX.L.GOOGLE.COM
...
```

**Dacă nu:** Re-add MX records în Cloudflare.

---

### Issue: "Too many redirects" (loop)

**Fix:** Cloudflare SSL mode

1. Cloudflare → SSL/TLS
2. Select: **"Full"** (not Flexible, not Full Strict)
3. Save
4. Clear browser cache
5. Retry

---

### Issue: Admin panel cere login mereu

**Fix:** Clear cookies + cache browser

---

## 📊 Final Architecture

```
User Browser
    ↓
Cloudflare CDN (proxy + cache + SSL)
    ↓
Vercel Edge Network
    ↓
lend.ro Next.js App
    ↓
Neon Postgres Database (leads storage)

Email Flow:
Sender → Google SMTP → open@lend.ro inbox (Gmail)
```

---

## 💰 Costs

- **Cloudflare:** FREE (unlimited bandwidth)
- **Vercel:** FREE (hobby plan)
- **Neon Postgres:** FREE (512MB storage)
- **Google Workspace alias:** FREE (dacă ai deja cont plătit)
- **Domain registration:** ~€10-15/an (deja plătit)

**Total running cost:** €0/lună 🎉

---

## ⚠️ Important Notes

### Păstrează cPanel temporar:

- **NU șterge** cPanel hosting imediat
- Așteaptă **1 săptămână** după migrare
- Verifică că totul funcționează perfect
- **Apoi** poți cancela cPanel (economii ~€5-10/lună)

### Backup înainte de migrare:

**Email backup (dacă ai mesaje importante în cPanel):**
1. cPanel webmail → Settings → Export
2. Download .mbox file
3. Import în Gmail (dacă vrei)

---

## 🆘 Need Help?

### Cloudflare Support:
- Docs: https://developers.cloudflare.com
- Community: https://community.cloudflare.com

### Google Workspace Support:
- Docs: https://support.google.com/a
- Help Center: admin.google.com → Help

### Vercel Support:
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

---

## ✅ Success Criteria

**După migrare, ar trebui să ai:**

- [x] Site live pe lend.ro cu SSL
- [x] Email functional pe open@lend.ro (via Gmail)
- [x] Admin panel accesibil
- [x] Lead submission funcționează
- [x] Database salvează leads
- [x] Cloudflare analytics active
- [x] cPanel cancelat (după 1 săptămână verificare)

---

## 📞 OpenClaw Command (pentru mâine)

Când începi setup-ul, trimite mesaj:

> "Start Cloudflare setup"

Și te ghidez pas cu pas cu screenshots! 📸

---

**Good luck! 🚀**

**Estimated time:** 30 min  
**Difficulty:** Easy (cu ghidul)  
**Risk:** Low (poți reveni la DNS vechi oricând)
