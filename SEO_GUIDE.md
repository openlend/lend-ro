# 🚀 SEO Guide - lend.ro

## Overview

Complete SEO implementation pentru lend.ro - optimizat pentru Google Search România.

---

## ✅ SEO Features Implemented

### 1. **XML Sitemap** (`/sitemap.xml`)
- Auto-generated cu Next.js 15
- Include toate paginile (27 pages)
- Update frequency + priority per page
- **URL:** https://lend.ro/sitemap.xml

**Pages included:**
- Homepage (priority: 1.0, daily)
- Calculator (priority: 0.9, daily)
- 12 bank pages (priority: 0.8, weekly)
- Blog articles (priority: 0.8, weekly)
- Legal pages (priority: 0.7, weekly)

### 2. **Robots.txt** (`/robots.txt`)
- Allow all bots (Googlebot, Bingbot, etc.)
- Disallow: `/admin/`, `/api/`
- Sitemap reference
- **URL:** https://lend.ro/robots.txt

### 3. **Structured Data (Schema.org JSON-LD)**

Implemented schemas:
- ✅ **WebSite** (homepage)
- ✅ **Organization / FinancialService**
- ✅ **BreadcrumbList** (navigation)
- ✅ **Article** (blog posts)
- ✅ **FAQPage** (FAQ section)
- ✅ **FinancialProduct** (bank products)

**Test structured data:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

### 4. **Enhanced Meta Tags**

**Global (layout.tsx):**
- Title template: `%s | lend.ro`
- Meta description (160 chars optimized)
- Keywords: 20+ relevant Romanian terms
- Canonical URLs
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Google Search Console verification ready

**Page-specific meta tags:**
- Each bank page: unique title + description
- Blog articles: article-specific metadata
- Legal pages: descriptive titles

### 5. **Open Graph & Social Sharing**

**Optimized for:**
- Facebook
- LinkedIn
- WhatsApp
- Twitter/X

**Images:**
- OG image: 1200x630px (recommended)
- Logo: High-resolution PNG
- Alt text pentru toate imaginile

### 6. **Internal Linking Strategy**

**Component:** `InternalLinks.tsx`

**3 variants:**
- `banks` - Links to all 12 bank pages
- `resources` - Links to blog, glosar, despre, contact
- `legal` - Links to T&C, Privacy, Cookies

**Usage:**
```tsx
import InternalLinks from '@/components/InternalLinks';

<InternalLinks variant="banks" />
<InternalLinks variant="resources" />
<InternalLinks variant="all" />
```

**Benefits:**
- Improved crawlability
- Better page authority distribution
- Lower bounce rate
- More pageviews per session

### 7. **Performance Optimizations**

- Next.js 15 (App Router)
- Static generation (SSG) pentru 27 pages
- Image optimization (next/image)
- Font optimization (Google Fonts)
- CDN delivery (Vercel Edge Network)
- Gzip compression

---

## 📊 SEO Metrics to Track

### Google Search Console
1. **Impressions** (afișări în search)
2. **Clicks** (click-uri din search)
3. **CTR** (click-through rate)
4. **Average position** (poziție medie în SERP)
5. **Core Web Vitals** (LCP, FID, CLS)

### Google Analytics 4
1. **Organic traffic**
2. **Bounce rate**
3. **Pages per session**
4. **Average session duration**
5. **Conversion rate** (lead form submissions)

### Target Keywords (Top 20)

| Keyword | Search Volume | Difficulty | Priority |
|---------|---------------|------------|----------|
| calculator credit ipotecar | 8,100/mo | Medium | HIGH |
| credit ipotecar | 18,100/mo | High | HIGH |
| dobanda credit ipotecar | 2,900/mo | Medium | HIGH |
| credit prima casa | 12,100/mo | High | HIGH |
| credit ipotecar bt | 1,600/mo | Low | MEDIUM |
| credit ipotecar bcr | 1,300/mo | Low | MEDIUM |
| credit ipotecar ing | 880/mo | Low | MEDIUM |
| rata credit ipotecar | 1,900/mo | Medium | HIGH |
| refinantare credit ipotecar | 1,600/mo | Medium | MEDIUM |
| credit pentru casa | 4,400/mo | Medium | HIGH |
| credit imobiliar | 3,600/mo | Medium | HIGH |
| comparator credite | 1,300/mo | Low | HIGH |
| avans credit ipotecar | 720/mo | Low | MEDIUM |
| dobanda ircc | 2,400/mo | Medium | MEDIUM |
| credit ipotecar raiffeisen | 590/mo | Low | LOW |
| credit ipotecar brd | 720/mo | Low | LOW |
| calculator refinantare | 480/mo | Low | MEDIUM |
| credit verde | 1,000/mo | Medium | MEDIUM |
| dobanda banca transilvania | 880/mo | Low | MEDIUM |
| credit ipotecar garanti | 320/mo | Low | LOW |

**Data source:** Google Keyword Planner (estimates for Romania)

---

## 🎯 SEO Action Plan (Next 90 Days)

### Month 1: Foundation (DONE ✅)
- [x] XML Sitemap
- [x] Robots.txt
- [x] Structured data (Schema.org)
- [x] Meta tags optimization
- [x] 27 pages indexed
- [x] Internal linking

### Month 2: Content & Authority
- [ ] **Publish 20 blog articles** (2/week)
  - Ghiduri complete (2000+ words)
  - Target long-tail keywords
  - Internal links to bank pages
- [ ] **Guest posting** (backlinks)
  - Financial blogs
  - Real estate portals
  - Romanian business media
- [ ] **Google My Business** (if applicable)
- [ ] **Local citations** (directories)

### Month 3: Optimization & Expansion
- [ ] **Core Web Vitals optimization**
  - Target: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] **A/B testing** (title tags, meta descriptions)
- [ ] **More bank product pages** (specific products)
- [ ] **Comparison pages** (BT vs BCR, etc.)
- [ ] **Calculator embeds** (widget pentru parteneri)

---

## 🔧 Setup Checklist

### Google Search Console
1. [ ] Add property: https://lend.ro
2. [ ] Verify ownership (DNS TXT record or HTML file)
3. [ ] Submit sitemap: https://lend.ro/sitemap.xml
4. [ ] Enable email notifications
5. [ ] Link to Google Analytics

**Verification methods:**
- **DNS TXT record** (recommended): Add TXT record în DNS
- **HTML file upload:** Upload `google-verification.html` în `/public/`
- **Meta tag:** Add în `<head>` (already in layout.tsx)

### Google Analytics 4
1. [ ] Create GA4 property
2. [ ] Install gtag.js in layout.tsx
3. [ ] Setup goals/conversions:
   - Lead form submission
   - Calculator usage
   - Bank page visits
4. [ ] Enable enhanced measurement
5. [ ] Link to Search Console

### Bing Webmaster Tools
1. [ ] Add site: https://lend.ro
2. [ ] Submit sitemap
3. [ ] Verify ownership

---

## 📈 Expected Results

### Month 1-2: Indexing Phase
- Google indexes all 27 pages
- Start appearing for brand keywords ("lend.ro", "lend ro credit")
- 100-500 impressions/day

### Month 3-4: Growth Phase
- Ranking for long-tail keywords (position 10-30)
- 500-2000 impressions/day
- 10-50 organic visitors/day

### Month 5-6: Expansion Phase
- Ranking for main keywords (position 5-20)
- 2000-10,000 impressions/day
- 100-500 organic visitors/day
- First leads from organic traffic

### Month 6-12: Authority Phase
- Top 3 positions pentru branded keywords
- Position 3-10 pentru "calculator credit ipotecar"
- 10,000-50,000 impressions/day
- 500-2000 organic visitors/day
- 50-200 leads/month from organic

**Assumptions:**
- Regular content publishing (2 articles/week)
- Active backlink building
- Good Core Web Vitals
- Competitive market (high difficulty keywords)

---

## 🛠️ SEO Tools Recommended

### Free Tools
- **Google Search Console** (essential)
- **Google Analytics 4** (essential)
- **Google PageSpeed Insights** (performance)
- **Google Rich Results Test** (structured data)
- **Screaming Frog SEO Spider** (free up to 500 URLs)
- **Ubersuggest** (keyword research - limited free)

### Paid Tools (optional)
- **Ahrefs** (~$99/mo) - backlinks, keywords, competitors
- **SEMrush** (~$119/mo) - all-in-one SEO platform
- **Moz Pro** (~$99/mo) - domain authority, keywords

### Romanian-Specific
- **Keyword.ro** - Romanian keyword research
- **Topline.ro** - Romanian SERP tracking
- **SEOmonitor** - Romanian SEO platform

---

## 📝 Content Calendar Template

### Week 1-2: Credit Ipotecar Basics
1. **"Ce este un credit ipotecar?"** (1500 words)
2. **"Cum se calculează rata lunară la credit?"** (2000 words)

### Week 3-4: Comparații Bănci
3. **"BT vs BCR: Care bancă oferă cele mai bune condiții?"** (2500 words)
4. **"Top 5 bănci pentru credit Prima Casă 2026"** (2000 words)

### Week 5-6: Ghiduri Avansate
5. **"Cum să negociezi dobânda la credit ipotecar"** (1800 words)
6. **"Refinanțare: Când merită și când nu"** (2200 words)

### Week 7-8: Termeni Financiari
7. **"IRCC explicat simplu: ce este și cum te afectează"** (1500 words)
8. **"DAE vs Dobândă: Care e diferența?"** (1200 words)

**Continue pattern:** 2 articles/week, 20 articles total in 10 weeks.

---

## 🚨 Common SEO Mistakes to Avoid

1. **Duplicate content** - fiecare pagină bancă trebuie să fie UNICĂ
2. **Missing alt text** - toate imaginile trebuie să aibă alt descriptiv
3. **Slow page speed** - target < 3s load time
4. **Mobile issues** - test pe toate device-urile
5. **Broken links** - verifică lunar cu Screaming Frog
6. **Thin content** - minimum 300 words per page
7. **Keyword stuffing** - natural writing > forced keywords
8. **Ignoring Core Web Vitals** - Google ranking factor din 2021

---

## 📞 Support

**SEO Questions:** open@lend.ro  
**Performance Issues:** Check Google PageSpeed Insights  
**Indexing Problems:** Google Search Console → Coverage report  

---

**Last updated:** 2026-02-18  
**Next review:** 2026-03-18
