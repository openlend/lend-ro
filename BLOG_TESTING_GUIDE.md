# Blog UI Testing Guide - lend.ro

## 🧪 Manual Testing Checklist

### 1. Blog Homepage (`/blog`)

**Desktop (1024px+):**
- [ ] Header displays: title, subtitle, search box
- [ ] Filters bar shows 5 buttons: Toate, Credite, Bănci, Legislație, Piață Imobiliară
- [ ] Featured article appears as large card (2 columns)
- [ ] Articles grid shows 2 columns
- [ ] Sidebar visible on right (sticky)
- [ ] Pagination shows if >9 articles
- [ ] Bottom CTA section displays

**Mobile (320px-767px):**
- [ ] Search box full-width
- [ ] Filters bar scrollable horizontally
- [ ] Featured article stacks vertically
- [ ] Articles show 1 column
- [ ] Sidebar hidden (appears below articles)
- [ ] Pagination buttons stack nicely

**Interactions:**
- [ ] Click "Toate" → Shows all 11 articles (excluding featured)
- [ ] Click "Credite" → Shows 3 articles
- [ ] Click "Bănci" → Shows 3 articles
- [ ] Click "Legislație" → Shows 3 articles
- [ ] Click "Piață Imobiliară" → Shows 3 articles
- [ ] Active filter highlighted in mint green
- [ ] Type in search → Filters results live
- [ ] Click pagination → Changes page
- [ ] Click article card → Opens article page

---

### 2. Category Pages (`/blog/credite`, `/blog/banci`, etc.)

**Test URLs:**
- /blog/credite
- /blog/banci
- /blog/legislatie
- /blog/piata-imobiliara

**For Each Category:**
- [ ] Breadcrumbs: Home > Blog > [Category Name]
- [ ] Title shows category name
- [ ] Article count correct (3 articles per category)
- [ ] Grid shows 2 columns (desktop) / 1 column (mobile)
- [ ] Pagination hidden (only 3 articles)
- [ ] Sidebar shows categories list
- [ ] Bottom CTA section displays
- [ ] Click article → Opens article page

**Invalid Category:**
- [ ] /blog/invalid-category → Shows 404 page

---

### 3. Article Pages (`/blog/[category]/[slug]`)

**Test URLs:**
- /blog/legislatie/bnr-ircc-februarie-2026 (featured)
- /blog/credite/cum-scazi-dobanda-credit-ipotecar
- /blog/banci/top-banci-credite-ipotecare-2026
- /blog/piata-imobiliara/preturile-apartamentelor-bucuresti-2026

**For Each Article:**
- [ ] Breadcrumbs: Home > Blog > [Category] > [Title]
- [ ] Category badge displays
- [ ] Meta info: Date, Reading time
- [ ] Featured image loads (full-width)
- [ ] Share buttons (top) visible
- [ ] Article content displays with proper typography:
  - H2 headings in navy
  - Lists styled correctly
  - Blockquote has mint left border
  - Links in mint color
- [ ] CTA box (calculator) in middle
- [ ] Tags section displays all tags
- [ ] Author bio with avatar
- [ ] Share buttons (bottom) visible
- [ ] Related articles section (3 cards from same category)
- [ ] "Back to Blog" link works
- [ ] Sidebar visible (desktop) with:
  - Calculator CTA
  - Categories list
  - Newsletter form

**Share Buttons:**
- [ ] Facebook → Opens Facebook share dialog
- [ ] Twitter → Opens Twitter share dialog
- [ ] LinkedIn → Opens LinkedIn share dialog
- [ ] WhatsApp → Opens WhatsApp share (mobile: app, desktop: web)
- [ ] Copy Link → Copies URL to clipboard, shows checkmark

**Invalid Article:**
- [ ] /blog/credite/invalid-slug → Shows 404 page

---

### 4. Search Page (`/blog/search`)

**Test Scenarios:**

**No Query:**
- URL: /blog/search
- [ ] Shows "Introdu un termen de căutare"
- [ ] Icon and message display
- [ ] "Înapoi la Blog" button works

**With Results:**
- URL: /blog/search?q=credit
- [ ] Header shows "X rezultate pentru 'credit'"
- [ ] Results grid displays matching articles
- [ ] Pagination works (if >9 results)
- [ ] Sidebar shows categories

**No Results:**
- URL: /blog/search?q=xyzabc123
- [ ] Shows "Nu am găsit articole pentru 'xyzabc123'"
- [ ] Suggestions display (clickable keyword chips)
- [ ] "Înapoi la Blog" button works

**Test Queries:**
- "credit" → Should find 6+ articles
- "bancă" → Should find 3-6 articles
- "IRCC" → Should find 1 article (featured)
- "Prima Casă" → Should find 2 articles
- "xyzinvalid" → No results

---

### 5. Sidebar Components

**Calculator CTA:**
- [ ] Mint background, white text
- [ ] "Calculează Rata" title
- [ ] Descriptive text
- [ ] Button links to /calculator

**Categories List:**
- [ ] Shows all 4 categories
- [ ] Each category shows article count badge
- [ ] Hover effect on links
- [ ] Links work (/blog/[category])

**Newsletter Form:**
- [ ] Email input field
- [ ] "Abonează-te" button
- [ ] Submit → Shows success message (green background)
- [ ] Success message auto-hides after 3 seconds
- [ ] Form resets after success

---

### 6. Responsive Design

**Test Breakpoints:**

**Mobile (375px):**
- [ ] All content visible, no horizontal scroll
- [ ] Typography readable (min 16px)
- [ ] Buttons easy to tap (min 44px)
- [ ] Images scale properly

**Tablet (768px):**
- [ ] Grid switches to 2 columns
- [ ] Sidebar still hidden
- [ ] Filters bar fits without scrolling

**Desktop (1024px):**
- [ ] Grid shows 2-3 columns
- [ ] Sidebar appears, sticky on scroll
- [ ] Max-width container centers content

**Large Desktop (1440px+):**
- [ ] Content max-width respected
- [ ] Images don't stretch too much
- [ ] Spacing comfortable

---

### 7. Design Consistency

**Colors:**
- [ ] Mint (#00D186): CTAs, badges, links, active states
- [ ] Navy (#0B1B3E): Headings, emphasis text
- [ ] Gray (#F9FAFB): Page backgrounds
- [ ] White: Card backgrounds

**Typography:**
- [ ] Rubik font loaded everywhere
- [ ] H1: 40px (2.5rem) bold
- [ ] H2: 32px (2rem) bold
- [ ] H3: 24px (1.5rem) bold
- [ ] Body: 18px (1.125rem) regular
- [ ] Line height: 1.75

**Spacing:**
- [ ] Consistent padding/margins
- [ ] Card gaps uniform
- [ ] Section spacing comfortable

**Hover Effects:**
- [ ] Links: color change + underline
- [ ] Buttons: background color change
- [ ] Cards: shadow increase
- [ ] Smooth transitions (0.2-0.3s)

---

### 8. SEO & Metadata

**Each Page Should Have:**
- [ ] `<title>` tag unique and descriptive
- [ ] Meta description present
- [ ] Open Graph tags (og:title, og:description, og:type)
- [ ] Canonical URL
- [ ] Proper heading hierarchy (only one H1)

**Check in Browser DevTools:**
```html
<head>
  <title>Specific Page Title | lend.ro</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <link rel="canonical" href="https://lend.ro/blog/..." />
</head>
```

---

### 9. Performance

**Lighthouse Audit (Chrome DevTools):**
- [ ] Performance: >80
- [ ] Accessibility: >90
- [ ] Best Practices: >90
- [ ] SEO: >90

**Page Load:**
- [ ] Initial load <3 seconds (on fast connection)
- [ ] Images lazy load (below fold)
- [ ] No layout shift (CLS <0.1)

---

### 10. Cross-Browser Testing

**Test in:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

**Check:**
- [ ] Layout renders correctly
- [ ] Images display properly
- [ ] Forms work
- [ ] Buttons/links clickable
- [ ] No console errors

---

## 🐛 Known Issues / Future Fixes

1. **Demo Content:** Articles show placeholder content - will be replaced with real markdown content from `/content/blog/*.md` files.

2. **Images:** Using Unsplash placeholders - should replace with:
   - Custom lend.ro illustrations
   - Licensed stock photos
   - Real screenshots/infographics

3. **Newsletter:** Form shows success message but doesn't actually submit to backend - needs Brevo integration.

4. **Search:** Client-side only - for production, consider:
   - Algolia integration for fast search
   - Server-side search endpoint
   - Search analytics

5. **Analytics:** No tracking yet - should add:
   - Google Analytics / Plausible
   - Article view counts
   - Popular articles tracking

---

## ✅ Deployment Verification

After deploying to Vercel:

1. **Check Production URLs:**
   - https://lend.ro/blog
   - https://lend.ro/blog/credite
   - https://lend.ro/blog/legislatie/bnr-ircc-februarie-2026
   - https://lend.ro/blog/search?q=credit

2. **Verify Build:**
   - Check Vercel deployment logs
   - Confirm all pages statically generated
   - No build errors or warnings

3. **Test Live Site:**
   - Run through this checklist on production
   - Test on real mobile device
   - Check page load speeds
   - Verify images load

4. **SEO Check:**
   - Google Search Console: Submit sitemap
   - Check robots.txt allows /blog
   - Verify structured data (if added)

---

## 📞 Support

For issues or questions:
- GitHub Issues: https://github.com/openlend/lend-ro/issues
- Email: contact@lend.ro

---

**Last Updated:** 2026-02-26  
**Version:** 1.0.0
