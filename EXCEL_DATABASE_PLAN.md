# Plan Excel - Bază de Date Produse Bănci (v2.0)

## 🎯 Obiectiv

Transformăm Excel-ul actual (`dobanzi-banci.xlsx`) într-o bază de date **clară, simplă, ușor de importat**.

---

## 📋 Structură Nouă Excel

### **Fișier: `banci-produse-v2.xlsx`**

**Sheet 1: PRODUSE** (produse individuale)

| Coloană | Tip | Descriere | Exemplu |
|---------|-----|-----------|---------|
| **id** | Integer | ID unic auto-generat | 1 |
| **banca** | Text | Nume bancă (uppercase) | BT |
| **nume_produs** | Text | Denumire completă produs | STANDARD (fără virare venit) |
| **tip_rate** | Dropdown | RON_FIXA / RON_VARIABILA / EURO_FIXA | RON_FIXA |
| **perioada_fixa_ani** | Integer | Ani cu dobândă fixă (0 = variabilă) | 3 |
| **dobanda_fixa** | Decimal | % dobândă fixă (perioada inițială) | 7.40 |
| **marja_variabila** | Decimal | % marjă peste IRCC după perioada fixă | 2.30 |
| **avans_minim_pct** | Integer | % avans minim necesar | 15 |
| **venit_minim_ron** | Integer | Venit lunar minim net (RON) | 2000 |
| **virare_venit** | Dropdown | DA / NU / OPTIONAL | NU |
| **card_debit** | Dropdown | OBLIGATORIU / OPTIONAL / NU | OPTIONAL |
| **asigurare_viata** | Dropdown | OBLIGATORIU / OPTIONAL / NU | OPTIONAL |
| **comision_analiza** | Decimal | % comision analiză dosar | 0.00 |
| **comision_administrare** | Decimal | RON/lună comision administrare | 0.00 |
| **perioada_gratie_luni** | Integer | Luni cu grație (fără rambursare) | 0 |
| **rambursare_anticipata** | Dropdown | GRATUITA / CU_PENALIZARE / NU | GRATUITA |
| **valabil_prima_casa** | Dropdown | DA / NU | DA |
| **valabil_a2a_casa** | Dropdown | DA / NU | DA |
| **data_actualizare** | Date | Data ultimei actualizări | 2026-02-18 |
| **note** | Text | Observații speciale | Max 70% finanțare |
| **link_oferta** | URL | Link la pagina băncii | https://www.bancatransilvania.ro/... |

---

### **Sheet 2: BANCI** (metadata bănci)

| Coloană | Tip | Descriere | Exemplu |
|---------|-----|-----------|---------|
| **id** | Integer | ID unic | 1 |
| **nume** | Text | Nume bancă (uppercase) | BT |
| **nume_lung** | Text | Denumire oficială completă | Banca Transilvania |
| **logo_path** | Text | Path logo local | /bank-logos/bt.png |
| **website** | URL | Site oficial | https://www.bancatransilvania.ro |
| **telefon_contact** | Text | Telefon info credite | 0264 407 150 |
| **email_contact** | Email | Email info credite | credite@btrl.ro |
| **cota_piata_pct** | Decimal | % cotă de piață (estimativ) | 22.5 |
| **rating** | Integer | Rating intern (1-5 stele) | 5 |
| **activa** | Dropdown | DA / NU | DA |

---

### **Sheet 3: PARAMETRI_PIATA** (indici economici)

| Coloană | Tip | Descriere | Exemplu |
|---------|-----|-----------|---------|
| **parametru** | Text | Nume parametru | IRCC |
| **valoare** | Decimal | Valoare curentă | 6.72 |
| **unitate** | Text | Unitate măsură | % |
| **data_actualizare** | Date | Data actualizării | 2026-02-06 |
| **sursa** | URL | Sursă oficială | https://www.bnr.ro |

**Rânduri:**
- IRCC (Indicele de Referință pentru Creditele Consumatorilor)
- EURIBOR_6M (Euribor 6 luni)
- ROBOR_3M (Robor 3 luni - istoric)
- CURS_EUR_RON (Curs BNR EUR/RON)

---

## 🔄 Proces Import Automat

### Script: `scripts/import-excel.js`

```javascript
// Citește Excel → Parsează → Validare → Generează JSON → Upload Vercel

const XLSX = require('xlsx');
const fs = require('fs');

function importBankProducts(excelPath) {
  const workbook = XLSX.readFile(excelPath);
  
  // Sheet 1: PRODUSE
  const products = XLSX.utils.sheet_to_json(
    workbook.Sheets['PRODUSE']
  );
  
  // Sheet 2: BANCI
  const banks = XLSX.utils.sheet_to_json(
    workbook.Sheets['BANCI']
  );
  
  // Sheet 3: PARAMETRI_PIATA
  const marketParams = XLSX.utils.sheet_to_json(
    workbook.Sheets['PARAMETRI_PIATA']
  );
  
  // Validare
  products.forEach(p => {
    if (!p.banca || !p.nume_produs) {
      throw new Error(`Invalid product: ${JSON.stringify(p)}`);
    }
  });
  
  // Generează JSON
  const output = {
    banks: banks.filter(b => b.activa === 'DA'),
    products: products,
    ircc_current: marketParams.find(m => m.parametru === 'IRCC')?.valoare || 6.72,
    euribor_6m: marketParams.find(m => m.parametru === 'EURIBOR_6M')?.valoare || 2.50,
    last_updated: new Date().toISOString(),
  };
  
  fs.writeFileSync(
    'src/data/bank-products.json',
    JSON.stringify(output, null, 2)
  );
  
  console.log(`✅ Imported ${output.products.length} products from ${output.banks.length} banks`);
}

// Run
importBankProducts('banci-produse-v2.xlsx');
```

---

## 🎨 Template Excel cu Dropdown-uri

### Validări automate în Excel:

**Coloana `tip_rate`:**
```
=DROPDOWN("RON_FIXA", "RON_VARIABILA", "EURO_FIXA", "EURO_VARIABILA")
```

**Coloana `virare_venit`:**
```
=DROPDOWN("DA", "NU", "OPTIONAL")
```

**Coloana `valabil_prima_casa`:**
```
=DROPDOWN("DA", "NU")
```

**Formule calculate:**

**Coloana `dobanda_efectiva` (calculată):**
```excel
=IF(perioada_fixa_ani>0, dobanda_fixa, IRCC+marja_variabila)
```

**Coloana `rata_lunara_400k` (preview):**
```excel
=PMT(dobanda_efectiva/12/100, 25*12, -400000)
```

---

## 📦 Structură Finală JSON (după import)

```json
{
  "banks": [
    {
      "id": 1,
      "name": "BT",
      "full_name": "Banca Transilvania",
      "logo": "/bank-logos/bt.png",
      "market_share": 22.5,
      "rating": 5,
      "contact": {
        "phone": "0264 407 150",
        "email": "credite@btrl.ro",
        "website": "https://www.bancatransilvania.ro"
      }
    }
  ],
  "products": [
    {
      "id": 1,
      "bank": "BT",
      "product_name": "STANDARD (fără virare venit)",
      "rate_type": "RON_FIXA",
      "fixed_period_years": 3,
      "rates": {
        "fixed_rate": 7.40,
        "variable_margin": 2.30
      },
      "requirements": {
        "min_down_payment_pct": 15,
        "min_income_ron": 2000,
        "income_transfer": "NU",
        "debit_card": "OPTIONAL",
        "life_insurance": "OPTIONAL"
      },
      "fees": {
        "analysis_fee_pct": 0.00,
        "monthly_admin_ron": 0.00
      },
      "features": {
        "grace_period_months": 0,
        "early_repayment": "GRATUITA",
        "first_home_eligible": true,
        "second_home_eligible": true
      },
      "updated_at": "2026-02-18",
      "link": "https://www.bancatransilvania.ro/credite-ipotecare/"
    }
  ],
  "ircc_current": 6.72,
  "euribor_6m": 2.50,
  "last_updated": "2026-02-18T16:40:00Z"
}
```

---

## ✅ Beneficii Noua Structură

### Pentru Tine (Admin):
✅ **1 rând = 1 produs** (nu mai merge structură complexă)
✅ Dropdown-uri → **nu mai faci typo-uri**
✅ Formule automate → vezi **preview rate instantaneu**
✅ Copy-paste din site-uri bănci → completare rapidă

### Pentru Import Script:
✅ **Parsare simplă** (XLSX → JSON direct)
✅ **Validare automată** (verifică câmpuri obligatorii)
✅ **Zero ambiguitate** (fiecare câmp e clar definit)

### Pentru Calculator:
✅ **Filtrare ușoară** (prima_casa=DA, tip_rate=RON_FIXA, etc.)
✅ **Sortare precisă** (după dobândă efectivă)
✅ **Metadata completă** (logo, contact, link ofertă)

---

## 📝 Workflow Lunar (Actualizare Date)

### Zi 1-5: Colectare date
1. Vizitează site-uri bănci (BT, BCR, ING, etc.)
2. Notează dobânzi actualizate (fixed + margin)
3. Verifică IRCC pe bnr.ro

### Zi 6: Actualizare Excel
1. Deschide `banci-produse-v2.xlsx`
2. Actualizează coloanele: `dobanda_fixa`, `marja_variabila`, `data_actualizare`
3. Sheet PARAMETRI_PIATA: actualizează `IRCC`, `EURIBOR_6M`

### Zi 7: Import & Deploy
```bash
cd /data/.openclaw/workspace/projects/lend-ro-nextjs
node scripts/import-excel.js
git add src/data/bank-products.json
git commit -m "Monthly update: bank rates February 2026"
git push origin main
```

**Vercel redeploy automat → Live în 60 secunde!**

---

## 🚀 Next Steps

1. **Creez template Excel** cu dropdown-uri și formule
2. **Migrez datele actuale** din `dobanzi-banci.xlsx` → structura nouă
3. **Scriu script import** (`scripts/import-excel.js`)
4. **Testez workflow** end-to-end
5. **Documentez** în README.md

**Timp estimat:** 2-3 ore pentru setup inițial
**Timp lunar:** 30 minute pentru actualizare date

---

Vrei să încep cu **crearea template-ului Excel** acum? 📊
