# 🚀 Excel Import - Quick Start (5 minute)

## Step 1: Install Dependencies (prima dată)

```bash
cd /data/.openclaw/workspace/projects/lend-ro-nextjs
npm install
```

---

## Step 2: Creează Excel-ul (3 metode)

### Metoda A: Generate automat din CSV (RECOMANDAT - 30 secunde)

```bash
node scripts/create-excel-from-csv.js
```

**Output:** `data/banci-produse-v2.xlsx` ✅

---

### Metoda B: Manual în Excel/Google Sheets (5 minute)

1. Deschide Excel sau Google Sheets
2. Creează workbook nou: `banci-produse-v2.xlsx`
3. Import 3 CSV-uri ca sheet-uri separate:
   - `data/SAMPLE-PRODUSE.csv` → Sheet `PRODUSE`
   - `data/SAMPLE-BANCI.csv` → Sheet `BANCI`
   - `data/SAMPLE-PARAMETRI_PIATA.csv` → Sheet `PARAMETRI_PIATA`
4. Save as `.xlsx` în `data/`

---

### Metoda C: Download ready-made (instant)

```bash
# Download from shared drive (link in team)
# Or request at: open@lend.ro
```

---

## Step 3: Customizează Datele (optional)

Deschide `data/banci-produse-v2.xlsx` și:

1. **Sheet BANCI** → verifică/actualizează info bănci
2. **Sheet PARAMETRI_PIATA** → actualizează IRCC/Euribor (de pe BNR.ro)
3. **Sheet PRODUSE** → adaugă/modifică produse

**Salvează Excel-ul după modificări!**

---

## Step 4: Import în JSON

```bash
npm run import:excel
```

**Output:**
```
📊 Importing Excel bank data...
✓ Found 15 products
✓ Found 12 banks
✅ Successfully wrote src/data/bank-products.json
```

---

## Step 5: Build & Verifică

```bash
npm run build
```

Verifică că build-ul e OK (27 pages generated).

---

## Step 6: Deploy

```bash
git add -A
git commit -m "Update bank data (2026-02-18)"
git push origin main
```

**Vercel auto-deploy:** ~2 minute → LIVE ✅

---

## 🔄 Workflow Lunar (după prima configurare)

```bash
# 1. Actualizează Excel-ul (data/banci-produse-v2.xlsx)
#    - IRCC nou (BNR.ro)
#    - Dobânzi actualizate de la bănci

# 2. Import + Build + Deploy (1 comandă)
npm run deploy
```

**Total time: 30-45 minute/lună** ⏱️

---

## 📋 Comenzi Utile

```bash
# Import Excel → JSON
npm run import:excel

# Import + Build
npm run import:build

# Import + Build + Deploy (all-in-one)
npm run deploy

# Create Excel from CSV samples
node scripts/create-excel-from-csv.js

# Import custom Excel file
node scripts/import-excel.js path/to/custom.xlsx
```

---

## ⚠️ Common Issues

### Eroare: "Cannot find module 'xlsx'"
```bash
npm install
```

### Eroare: "Missing required sheets"
- Excel-ul trebuie să aibă exact 3 sheet-uri: `PRODUSE`, `BANCI`, `PARAMETRI_PIATA`
- Numele sunt case-sensitive!

### Produse lipsesc după import
- Verifică că banca are `activa = 1` în sheet BANCI
- Verifică că produsele au toate câmpurile obligatorii

### Build fail după import
- Verifică că JSON-ul e valid: `cat src/data/bank-products.json | head`
- Șterge cache: `rm -rf .next && npm run build`

---

## 📚 Documentation

- **Full guide:** `data/EXCEL_TEMPLATE_GUIDE.md` (7000+ words)
- **Quick reference:** `data/README.md`
- **CSV samples:** `data/SAMPLE-*.csv`

---

## ✅ Success Checklist

- [ ] `npm install` rulează OK
- [ ] `data/banci-produse-v2.xlsx` există (3 sheets)
- [ ] `npm run import:excel` generează JSON fără erori
- [ ] `npm run build` → 27 pages generated
- [ ] `git push` → Vercel deploy OK
- [ ] Site-ul LIVE arată datele noi

---

**Questions?** open@lend.ro
