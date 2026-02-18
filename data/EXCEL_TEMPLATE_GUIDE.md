# 📊 Excel Template Guide - banci-produse-v2.xlsx

## Structură Excel (3 sheet-uri)

### Sheet 1: PRODUSE

**Coloane (în ordine):**

| Coloană | Tip | Obligatoriu | Descriere | Exemplu |
|---------|-----|-------------|-----------|---------|
| `id` | Number | ✅ | ID unic produs | 1, 2, 3... |
| `id_banca` | Text | ✅ | ID bancă (din sheet BANCI) | BT, BCR, BRD |
| `nume_produs` | Text | ✅ | Nume complet produs | "Home Loan STANDARD cu virare venit" |
| `tip_rate` | Text | ✅ | RON / EURO / STANDARD | RON |
| `perioada_fixa_ani` | Number | ❌ | Ani dobândă fixă (2, 3, 5) | 3 |
| `dobanda_fixa` | Number | ❌ | % dobândă fixă | 3.0 |
| `marja_variabila` | Number | ✅ | % marjă variabilă după perioada fixă | 2.8 |
| `avans_minim_pct` | Number | ❌ | % avans minim | 5 |
| `venit_minim_ron` | Number | ❌ | RON venit minim net | 2200 |
| `virare_venit` | Text | ❌ | DA / NU | DA |
| `card_debit` | Text | ❌ | DA / NU | DA |
| `asigurare_viata` | Text | ❌ | OBLIGATORIE / OPTIONALA | OBLIGATORIE |
| `comision_acordare_pct` | Number | ❌ | % comision acordare | 0.5 |
| `comision_analiza_ron` | Number | ❌ | RON comision analiza | 150 |
| `rambursare_anticipata` | Text | ❌ | GRATUIT / % comision | GRATUIT |
| `nota` | Text | ❌ | Observații | "Doar clasa energetică A/B" |

**Exemplu rânduri:**

```
id | id_banca | nume_produs                    | tip_rate | perioada_fixa_ani | dobanda_fixa | marja_variabila | virare_venit
1  | BT       | Creditul Verde cu virare       | RON      | 3                 | 3.0          | 2.95            | DA
2  | BT       | Creditul Verde fără virare     | RON      |                   |              | 3.15            | NU
3  | BCR      | Prima Casă STANDARD            | RON      | 5                 | 3.2          | 2.90            | DA
4  | ING      | Home Credit variabil           | RON      |                   |              | 3.10            | NU
```

---

### Sheet 2: BANCI

**Coloane (în ordine):**

| Coloană | Tip | Obligatoriu | Descriere | Exemplu |
|---------|-----|-------------|-----------|---------|
| `id` | Text | ✅ | ID unic (2-5 caractere) | BT, BCR, BRD |
| `nume` | Text | ✅ | Nume scurt bancă | BT |
| `nume_lung` | Text | ✅ | Nume complet oficial | Banca Transilvania |
| `logo_path` | Text | ❌ | Cale relativă logo | /bank-logos/bt.png |
| `website` | Text | ❌ | URL site oficial | https://www.bancatransilvania.ro |
| `telefon_contact` | Text | ❌ | Telefon suport | *2227 (gratuit) |
| `cota_piata_pct` | Number | ❌ | % cotă piață | 18.5 |
| `rating` | Text | ❌ | Rating credit (AAA, AA+) | AA- |
| `activa` | Number | ✅ | 1 = activă, 0 = inactivă | 1 |

**Exemplu rânduri:**

```
id  | nume      | nume_lung                  | website                          | telefon_contact | activa
BT  | BT        | Banca Transilvania         | https://bancatransilvania.ro     | *2227           | 1
BCR | BCR       | Banca Comercială Română    | https://bcr.ro                   | 0800 801 227    | 1
BRD | BRD       | BRD Groupe Société Générale| https://brd.ro                   | 0800 800 500    | 1
ING | ING       | ING Bank România           | https://ing.ro                   | 0800 999 000    | 1
```

---

### Sheet 3: PARAMETRI_PIATA

**Coloane (în ordine):**

| Coloană | Tip | Obligatoriu | Descriere | Exemplu |
|---------|-----|-------------|-----------|---------|
| `parametru` | Text | ✅ | Nume parametru | IRCC |
| `valoare` | Number/Text | ✅ | Valoare curentă | 6.72 |
| `unitate` | Text | ❌ | % / RON / EUR | % |
| `data_actualizare` | Date/Text | ✅ | Data ultimei actualizări | 2026-02-18 |
| `sursa` | Text | ❌ | Sursa oficială | BNR |

**Exemplu rânduri:**

```
parametru           | valoare    | unitate | data_actualizare | sursa
IRCC                | 6.72       | %       | 2026-02-18       | BNR
EURIBOR_6M          | 2.50       | %       | 2026-02-18       | BNR
CURS_EUR_RON        | 4.98       | RON     | 2026-02-18       | BNR
DATA_ACTUALIZARE    | 2026-02-18 |         |                  |
```

---

## 🚀 Cum să folosești template-ul

### 1. Creează Excel-ul

```bash
# Fișier: data/banci-produse-v2.xlsx
# 3 sheet-uri: PRODUSE, BANCI, PARAMETRI_PIATA
```

### 2. Completează datele

- **BANCI** → Adaugă toate băncile (id, nume, website)
- **PARAMETRI_PIATA** → IRCC, Euribor, data actualizării
- **PRODUSE** → Toate produsele (folosește id_banca din sheet BANCI)

### 3. Validări Excel (recomandate)

#### Dropdown pentru `tip_rate` (sheet PRODUSE):
- Selectează coloana D (tip_rate)
- Data → Data Validation → List
- Values: `RON,EURO,STANDARD`

#### Dropdown pentru `virare_venit`:
- Selectează coloana J (virare_venit)
- Values: `DA,NU`

#### Dropdown pentru `id_banca`:
- Selectează coloana B (id_banca)
- Source: `=BANCI!$A$2:$A$20` (ID-urile din sheet BANCI)

### 4. Formule automate (opțional)

#### Calculează dobânda efectivă automată:
```excel
// Coloană M (dobanda_efectiva) în sheet PRODUSE
=IF(F2<>"", F2, VLOOKUP("IRCC", PARAMETRI_PIATA!$A:$B, 2, FALSE) + G2)
```

#### Estimare rată lunară pentru 400k RON:
```excel
// Coloană N (rata_lunara_400k) în sheet PRODUSE
=PMT(M2/12/100, 25*12, -400000)
```

### 5. Rulează import

```bash
cd /data/.openclaw/workspace/projects/lend-ro-nextjs

# Install dependencies (prima dată)
npm install xlsx

# Run import
node scripts/import-excel.js data/banci-produse-v2.xlsx

# Output: src/data/bank-products.json (actualizat)
```

### 6. Verifică JSON-ul

```bash
cat src/data/bank-products.json | head -50
```

### 7. Build & Deploy

```bash
npm run build
git add -A
git commit -m "Update bank data from Excel (YYYY-MM-DD)"
git push origin main
```

---

## 📝 Best Practices

### ✅ DO:
- Verifică toate ID-urile băncilor înainte de import
- Folosește virgulă pentru zecimale în Excel (ex: `3,15`)
- Actualizează `DATA_ACTUALIZARE` în sheet PARAMETRI_PIATA
- Testează local după import (`npm run build`)
- Commit Excel-ul împreună cu JSON-ul

### ❌ DON'T:
- Nu lăsa celule goale în coloane obligatorii
- Nu folosi spații la începutul/sfârșitul textelor
- Nu folosi caractere speciale în ID-uri (doar A-Z, 0-9, _, -)
- Nu uita să actualizezi IRCC/Euribor lunar

---

## 🔄 Workflow Lunar Actualizare

### Zi 1-5: Colectare date
1. Accesează site-urile băncilor
2. Copiază dobânzile actualizate în Excel
3. Verifică produse noi/eliminate

### Zi 6: Actualizare parametri
1. BNR.ro → IRCC actual (se publică trimestrial)
2. Update EURIBOR_6M (dacă aplicabil)
3. Update DATA_ACTUALIZARE

### Zi 7: Deploy
1. `node scripts/import-excel.js`
2. Verifică output JSON
3. `npm run build && git push`
4. ✅ Live in ~2 minutes

**Timp total: ~30-45 minute/lună** (vs 2-3 ore manual înainte)

---

## 🐛 Troubleshooting

### Eroare: "Missing required sheets"
- Verifică că Excel-ul are exact 3 sheet-uri: `PRODUSE`, `BANCI`, `PARAMETRI_PIATA`
- Numele trebuie să fie identice (case-sensitive)

### Eroare: "Unknown bank id: XXX"
- Produsul referă un id_banca care nu există în sheet BANCI
- Adaugă banca în sheet BANCI sau corectează id_banca

### Produse lipsesc după import
- Verifică coloana `activa` în sheet BANCI (trebuie să fie 1)
- Verifică că produsele au toate câmpurile obligatorii completate

### Dobânzile nu se calculează corect
- Asigură-te că ai număr în `marja_variabila` (ex: `2.8`, nu text)
- Verifică că `IRCC` există în sheet PARAMETRI_PIATA

---

## 📊 Exemplu complet

Vezi fișierul anexat: `banci-produse-v2-SAMPLE.xlsx`

Sau descarcă template gol: `banci-produse-v2-TEMPLATE.xlsx`

---

**Întrebări?** Contact: open@lend.ro
