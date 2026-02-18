# 📊 Bank Data Import System

## Quick Start

### 1. Creează Excel-ul din CSV-uri (prima dată)

**Opțiunea A: Manual în Excel/Google Sheets**
1. Deschide Excel sau Google Sheets
2. Creează un workbook nou: `banci-produse-v2.xlsx`
3. Creează 3 sheet-uri: `PRODUSE`, `BANCI`, `PARAMETRI_PIATA`
4. Import CSV-urile în fiecare sheet:
   - Sheet `PRODUSE`: Import `SAMPLE-PRODUSE.csv`
   - Sheet `BANCI`: Import `SAMPLE-BANCI.csv`
   - Sheet `PARAMETRI_PIATA`: Import `SAMPLE-PARAMETRI_PIATA.csv`
5. Salvează ca `.xlsx`

**Opțiunea B: Folosește LibreOffice Calc**
```bash
# Linux/Mac
libreoffice --calc SAMPLE-PRODUSE.csv &
# Import celelalte 2 CSV-uri ca sheet-uri noi
# Salvează ca banci-produse-v2.xlsx
```

**Opțiunea C: Cere fișierul gata pregătit**
- Descarcă de pe Google Drive (link în echipă)
- Sau solicită la open@lend.ro

---

### 2. Instalează dependencies

```bash
cd /data/.openclaw/workspace/projects/lend-ro-nextjs
npm install xlsx
```

---

### 3. Rulează import

```bash
# Import cu calea default (data/banci-produse-v2.xlsx)
node scripts/import-excel.js

# SAU specifică calea
node scripts/import-excel.js path/to/custom-file.xlsx
```

**Output:**
```
📊 Importing Excel bank data...

Input:  /path/to/banci-produse-v2.xlsx
Output: /path/to/src/data/bank-products.json

✓ Found 15 products
✓ Found 12 banks
✓ Found 5 market parameters

Market parameters:
  IRCC: 6.72%
  Euribor 6M: 2.50%
  Date: 2026-02-18

Banks processed: 12
Products processed: 15

✅ Successfully wrote src/data/bank-products.json

Summary:
  Banks: 12
  Products: 15
  Date: 2026-02-18

🚀 Ready to deploy! Run: npm run build
```

---

### 4. Verifică JSON-ul generat

```bash
cat src/data/bank-products.json | head -50
```

---

### 5. Build & Deploy

```bash
npm run build
git add -A
git commit -m "Update bank data (2026-02-18)"
git push origin main
```

**Vercel auto-deploy:** ~2 minute → LIVE ✅

---

## 📋 Structura Excel

### Sheet 1: PRODUSE (15 coloane)
- `id`, `id_banca`, `nume_produs`, `tip_rate`
- `perioada_fixa_ani`, `dobanda_fixa`, `marja_variabila`
- `avans_minim_pct`, `venit_minim_ron`
- `virare_venit`, `card_debit`, `asigurare_viata`
- `comision_acordare_pct`, `comision_analiza_ron`
- `rambursare_anticipata`, `nota`

### Sheet 2: BANCI (9 coloane)
- `id`, `nume`, `nume_lung`, `logo_path`
- `website`, `telefon_contact`, `cota_piata_pct`
- `rating`, `activa`

### Sheet 3: PARAMETRI_PIATA (5 coloane)
- `parametru`, `valoare`, `unitate`
- `data_actualizare`, `sursa`

**Vezi detalii complete:** `EXCEL_TEMPLATE_GUIDE.md`

---

## 🔄 Workflow Lunar

### Când se actualizează?
- **IRCC:** Trimestrial (BNR publică în luna următoare)
- **Euribor 6M:** Lunar (15-20 ale fiecărei luni)
- **Dobânzi bănci:** Variază (verifică săptămânal)

### Pași:
1. **Zi 1-5:** Colectează dobânzi actualizate de pe site-urile băncilor
2. **Zi 6:** Actualizează Excel-ul (sheet PRODUSE + PARAMETRI_PIATA)
3. **Zi 7:** Run import + deploy
4. ✅ **Total: 30-45 minute/lună**

---

## 🛠️ Customization

### Adaugă o bancă nouă:
1. Sheet `BANCI` → adaugă rând nou cu `id`, `nume`, etc.
2. Sheet `PRODUSE` → adaugă produsele (folosește `id_banca` nou)
3. Run import
4. Actualizează `/src/app/banci/[slug]/page.tsx` cu info bancă nouă (optional)

### Elimină o bancă:
1. Sheet `BANCI` → setează `activa = 0`
2. Run import (produsele vor fi skip-ate automat)

### Adaugă un parametru nou:
1. Sheet `PARAMETRI_PIATA` → adaugă rând nou
2. Modifică `scripts/import-excel.js` să parseze noul parametru
3. Actualizează `bank-products.json` schema

---

## 📁 Files

| File | Descriere |
|------|-----------|
| `EXCEL_TEMPLATE_GUIDE.md` | Ghid complet cu exemple și best practices |
| `SAMPLE-PRODUSE.csv` | Template produse (15 produse sample) |
| `SAMPLE-BANCI.csv` | Template bănci (12 bănci) |
| `SAMPLE-PARAMETRI_PIATA.csv` | Template parametri (IRCC, Euribor) |
| `banci-produse-v2.xlsx` | **Excel-ul principal** (creează-l din CSV-uri) |
| `../scripts/import-excel.js` | Import script (Excel → JSON) |
| `../src/data/bank-products.json` | Output JSON (generat automat) |

---

## ❓ FAQ

**Q: Nu am Excel, pot folosi Google Sheets?**  
A: Da! Import CSV-urile, apoi Download as → Microsoft Excel (.xlsx)

**Q: Cum adaug dropdown-uri în Excel?**  
A: Data → Data Validation → List → Values: `DA,NU` (vezi EXCEL_TEMPLATE_GUIDE.md)

**Q: Produsele nu apar după import**  
A: Verifică că banca are `activa = 1` în sheet BANCI

**Q: Eroare "Cannot find module 'xlsx'"**  
A: Run `npm install xlsx`

**Q: Pot folosi LibreOffice/Numbers/etc?**  
A: Da, orice tool care salvează `.xlsx` compatibil cu MS Excel

---

## 📞 Contact

**Probleme tehnice:** open@lend.ro  
**Ghid video:** [coming soon]  
**Community:** Discord/Slack (link in echipă)

---

**Last updated:** 2026-02-18
