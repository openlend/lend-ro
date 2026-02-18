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

### Culori (Light Theme - FINAL VERSION ✅)
- **Dark Green Primary:** `#0A2F2F` (ONLY Hero & Footer)
- **Accent (Mint):** `#4FD1C5` (buttons, highlights)
- **White:** `#FFFFFF` (all content sections)
- **Light Gray:** `bg-gray-50` (alternating sections)
- **Dark Text:** `text-gray-900`, `text-gray-600` (body text)

**Key Change:** Only Hero and Footer sections use dark green background. All other sections use white or light gray backgrounds with dark text for optimal readability.

### Fonturi
- **Titluri:** Playfair Display (serif elegant)
- **Body:** System UI (sans-serif)

### Layout (8 Complete Sections)
1. **Hero Section** (Dark green `#0A2F2F`)
   - Text stânga (h1 mare + CTA buttons)
   - 2 phone mockups dreapta (rotație 3D -6° / +6°)
   - Trust indicators jos
   - Light text on dark background

2. **Quick Stats** (White background)
   - 3 coloane: 12+ bănci | 5 brokeri | 24h răspuns
   - Dark text, simple layout

3. **Calculator Section** (Light gray `bg-gray-50`)
   - Elegant white card with 4 sliders
   - Property price, income, term, down payment
   - Large CTA button

4. **Features Section** (White background)
   - 6 feature cards (3x2 grid)
   - White cards with gray borders
   - Hover effects (teal border + shadow)

5. **How it Works** (Light gray `bg-gray-50`)
   - 3 steps with alternating layout
   - Demo cards with white backgrounds
   - Each step: badge, title, description, checklist

6. **Testimonials** (White background)
   - 3 testimonial cards
   - Star ratings, avatars, quotes

7. **FAQ** (White background)
   - 5 questions
   - Light gray cards with hover effects
   - Contact CTA button

8. **Final CTA** (White background)
   - Large centered headline
   - Big CTA button

9. **Footer** (Dark green `#0A2F2F`)
   - Minimalist
   - Light text on dark background
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

### Culori (Light Theme)
Caută și înlocuiește în `src/app/design-test/page.tsx`:
- `#0A2F2F` (dark green - Hero & Footer only)
- `#4FD1C5` (mint accent - buttons, highlights)
- `bg-white` / `bg-gray-50` (alternating section backgrounds)
- `text-gray-900` / `text-gray-600` (dark text for readability)

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

## 🔄 Design Evolution

### Version 1.0 (Original - 2026-02-18)
- Full dark green aesthetic
- Dark backgrounds throughout
- Light text (`#F5F1E8`)
- Fintech premium vibe

### Version 2.0 (Light Theme - 2026-02-18) ✅ CURRENT
**Major redesign:**
- Dark green ONLY for Hero & Footer
- All content sections: white or light gray backgrounds
- Dark text for better readability
- More accessible and modern
- Maintains elegance with Playfair Display serif
- 8 complete sections (Hero, Stats, Calculator, Features, How it Works, Testimonials, FAQ, CTA, Footer)

**Rationale:** User feedback indicated preference for light, clean design with bold visual hierarchy. Dark theme reserved for premium brand sections (Hero, Footer) only.

---

**Created:** 2026-02-18 22:35 GMT+1  
**Status:** ✅ LIVE  
**Access:** Direct URL only (hidden from navigation)
