# Design Reference - Niskarata.pl Calculator

Aceste imagini sunt referința de design pentru calculatorul lend.ro.

## Files:

### niskarata-01.jpg
Screenshot calculator simplu (Gotówkowy mode)

### niskarata-02.jpg
Screenshot calculator cu parametri avansați (Dodatkowe parametry expanded)

### niskarata-03.jpg
Screenshot calculator full view (toate secțiunile)

### niskarata-04-color-palette.jpg
Color palette + typography specifications:
- Logo: niskarata (3 vertical bars + text)
- Colors: #00D186 (green), #0B1B3E (navy), #A0A9B5 (gray), #FFFFFF (white)
- Font: Rubik (sans-serif, rounded corners)

### niskarata-comparison.jpg
Side-by-side comparison:
- LEFT: Niskarata.pl original (Polish)
- RIGHT: lend.ro implementation (Romanian)

## Design Extracted (via Vision AI):

### Colors:
- **Primary Green:** `#1AB386` (NOT #00D186 or #22C997)
- **Navy/Dark:** `#1B2A4A` 
- **Background:** `#F2F4F7`
- **Text Primary:** `#1B2A4A`
- **Text Secondary:** `#4A5568`
- **Text Muted:** `#8E96A4`
- **Border:** `#E2E8F0`

### Typography:
- **Font:** Rubik (400, 500, 600, 700)
- **H1/H2:** 24-28px, bold
- **Body:** 14-16px
- **Small:** 12-13px

### Layout:
- **Card max-width:** ~420px
- **Card padding:** 24-32px (p-6 to p-8)
- **Border radius:** 16px (rounded-2xl)
- **Shadow:** lg (0 10px 25px rgba)

### Components:
- Logo: 3 vertical bars (gradient opacity) + text
- Tabs: Pills style with background switch
- Sliders: Custom green track + circular thumb
- Buttons: Rounded-lg, py-3, font-semibold
- Inputs: Border gray-300, focus:ring-green

## Implementation Status:

✅ Basic structure
✅ Tabs (Imobiliar/Consum)
✅ Sliders with dynamic gradient
✅ Social proof ("156 cereri")
✅ Comparison bar bottom
⏸️ Advanced parameters (collapsible, not implemented)
⏸️ Color corrections needed (green #1AB386 vs current)

## Next Steps:

1. Update colors to Vision AI extracted values
2. Fine-tune spacing/sizing
3. Implement advanced parameters section
4. Add proper logo (3 bars + text)
5. Test on mobile (responsive)

---

*Last updated: 2026-02-19*
