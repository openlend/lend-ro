# Design Test Page

## 🔗 URL Secret
**https://lend.ro/design-test**

⚠️ **IMPORTANT:** Această pagină este hidden și NU apare:
- ❌ În sitemap.xml
- ❌ În robots.txt (noindex meta tag)
- ❌ Linkuri din alte pagini
- ❌ Google search results
- ✅ Accesibilă DOAR prin URL direct

## 🎨 Design Concept

### Culori
- **Dark Green Primary:** `#0A2F2F`
- **Dark Green Gradient:** `#0D3B3B` → `#051818`
- **Accent (Mint):** `#4FD1C5`
- **Cream Text:** `#F5F1E8`

### Fonturi
- **Titluri:** Playfair Display (serif elegant)
- **Body:** System UI (sans-serif)

### Layout
1. **Hero Section**
   - Text stânga (h1 mare + CTA buttons)
   - 2 phone mockups dreapta (rotație 3D -6° / +6°)
   - Trust indicators jos

2. **Stats Section**
   - 3 coloane: 12+ bănci | 5 brokeri | 24h răspuns
   - Background dark (#051818)

3. **CTA Section**
   - Centered text + mare CTA button
   - Gradient overlay mint

4. **Footer**
   - Minimalist
   - Links la legal pages

### Phone Mockups
**Phone 1 (dark green, stânga, -6°):**
- Background: gradient dark green
- Text: "Compară instant" italic
- Subtitle despre 12 bănci

**Phone 2 (cream, dreapta, +6°):**
- Background: cream/beige gradient
- Calculator interface mockup
- Rata lunară: 2.603 RON
- 3 date boxes (credit, perioadă, îndatorare)
- CTA button jos

## 📱 Responsive
- Desktop: 2 phone mockups vizibile
- Mobile: phone mockups ascunse (doar text hero)

## 🎯 Inspirație
Design inspirat din **Horizon banking app** (user reference):
- Dark green premium
- Serif elegant pentru titluri
- Phone mockups cu 3D rotation
- Minimalist & modern fintech aesthetic

## 🛠️ Cum să modifici

### Culori
Caută și înlocuiește în `src/app/design-test/page.tsx`:
- `#0A2F2F` (dark green primary)
- `#4FD1C5` (mint accent)
- `#F5F1E8` (cream text)

### Font
Linia 10-11 - Google Fonts link:
```tsx
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:..." />
```

### Text
Modifică direct în JSX (linia 33+):
- h1: "Eleganță în creditare"
- Subtitle
- CTA buttons text

### Phone Mockups
Linia 77-150 - două div-uri absolute cu:
- `transform rotate-[-6deg]` (phone 1)
- `transform rotate-[6deg]` (phone 2)

## 🚀 Deploy
Orice commit pe `main` branch → auto-deploy Vercel în 2-3 minute.

## 📊 Stats Build
- **Total pages:** 32 (including /design-test)
- **Size:** 167 B (static page)
- **First Load JS:** 106 kB

---

**Created:** 2026-02-18 22:35 GMT+1  
**Status:** ✅ LIVE  
**Access:** Direct URL only (hidden from navigation)
