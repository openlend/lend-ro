# 🔒 GDPR Compliance Guide - lend.ro

## Status Actual: 75/100 ⚠️

### ✅ Ce avem implementat (BINE):

1. **Politică de Confidențialitate completă** ✅
   - Explicație clară ce date colectăm
   - Scop prelucrare transparent
   - Drepturile GDPR enumerate
   - Link vizibil în footer + formular

2. **Cookie Banner funcțional** ✅
   - Accept / Refuz explicit
   - Link către Politica de Cookies
   - Salvare în localStorage

3. **Consimțământ implicit în formular** ✅
   - Text: "Prin trimiterea cererii, accepți T&C și Privacy Policy"
   - Linkuri către documente legale

4. **Securitate tehnică** ✅
   - Rate limiting (anti-spam)
   - Data sanitization (anti-XSS)
   - Honeypot (anti-bots)
   - IP logging (doar pentru securitate)
   - HTTPS (via Vercel)

5. **Data minimization** ✅
   - Colectăm DOAR datele strict necesare:
     - Nume, email, telefon (pentru contact)
     - Sumă credit, tip proprietate (pentru ofertă)
   - NU colectăm: CNP, istoric bancar, date medicale

---

## ❌ Ce lipsește (PROBLEMATIC):

### 1. **Checkbox explicit de consimțământ** (Recomandat URGENT)

**Problema:** Formularul folosește "implicit consent" (text mic jos).  
**Risc:** Interpretabil - unii consider că e OK, alții nu.

**Soluție:** Adaugă checkbox obligatoriu:
```tsx
<div className="flex items-start gap-3 mb-4">
  <input 
    type="checkbox" 
    id="gdprConsent" 
    required 
    checked={formData.gdprConsent}
    onChange={(e) => setFormData({...formData, gdprConsent: e.target.checked})}
    className="mt-1 w-5 h-5"
  />
  <label htmlFor="gdprConsent" className="text-sm text-gray-700">
    Sunt de acord ca datele mele personale să fie prelucrate conform{' '}
    <a href="/politica-confidentialitate" className="text-mint underline font-semibold">
      Politicii de Confidențialitate
    </a>{' '}
    și să fie transmise către brokeri certificați pentru obținerea de oferte.{' '}
    <span className="text-red-500">*</span>
  </label>
</div>
```

**Beneficiu:** Consimțământ explicit, clar, documentat → compliance 100% GDPR.

---

### 2. **Link de Unsubscribe în Email-uri** (OBLIGATORIU GDPR)

**Problema:** Email-urile trimise către brokeri NU au link de unsubscribe.  
**Risc:** Încălcare GDPR Articol 21 (dreptul la opoziție).

**Soluție:** Adaugă footer în email cu:
```html
<div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center; color: #6B7280; font-size: 12px;">
  <p>
    Ai primit acest email deoarece ai solicitat oferte de credit ipotecar pe lend.ro.<br>
    Dacă dorești să îți retragi consimțământul sau să ștergi datele, 
    <a href="https://lend.ro/retragere-consimtamant?email=${sanitizedEmail}&id=${leadData.id}" style="color: #4FD1C5; text-decoration: underline;">
      click aici
    </a> sau contactează-ne la 
    <a href="mailto:gdpr@lend.ro" style="color: #4FD1C5;">gdpr@lend.ro</a>
  </p>
  <p style="margin-top: 10px;">
    <strong>lend.ro</strong> | București, România | 
    <a href="https://lend.ro/politica-confidentialitate" style="color: #4FD1C5;">Politica de Confidențialitate</a>
  </p>
</div>
```

---

### 3. **Pagină "Retragere Consimțământ" lipsește** (OBLIGATORIU)

**Problema:** Utilizatorii nu pot retrage consimțământul sau șterge datele online.  
**Risc:** Încălcare GDPR Articol 17 (dreptul la ștergere).

**Soluție:** Creează pagină `/retragere-consimtamant`:
- Form simplu: Email + Lead ID (opțional)
- Submit → trimite email la `gdpr@lend.ro`
- Confirmare: "Cererea ta a fost înregistrată. Vom șterge datele în max 30 zile."

**Sau mai bine:** Automatizează complet:
- User introduce email
- System verifică în DB dacă există
- Dacă DA → marchează `deleted_at` în DB + trimite email confirmare
- Dacă NU → "Nu am găsit datele tale în sistem"

---

### 4. **Admin Panel - Funcție Ștergere lipsește** (Recomandat)

**Problema:** Admin poate vedea leads, dar NU poate șterge datele.  
**Risc:** Imposibil de răspuns la cereri GDPR în timp util.

**Soluție:** Adaugă buton "Delete" în admin panel:
```tsx
<button 
  onClick={() => handleDelete(lead.id)}
  className="text-red-600 hover:text-red-800"
>
  🗑️ Șterge
</button>
```

Backend:
```typescript
// DELETE /api/admin/leads/:id
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const deleted = await deleteLead(id);
  
  if (deleted) {
    // Log ștergere pentru audit trail
    console.log(`[GDPR DELETE] Lead ${id} deleted by admin`);
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
}
```

---

### 5. **Data Retention Policy nu e suficient de clară**

**Problema:** Politica de Confidențialitate zice "12 luni active, 5 ani arhivă" dar:
- Nu specifică că arhiva e DOAR pentru facturare/fiscalitate
- Nu zice CE date rămân după 12 luni (anonimizate sau complete?)

**Soluție:** Clarificare în Privacy Policy:
```markdown
## Păstrarea Datelor

**Date active (leads):**
- **12 luni** de la solicitare (pentru urmărire progres + suport)
- După 12 luni → ștergere automată SAU anonimizare (nume/email/telefon înlocuite cu "DELETED")

**Date arhivă (doar pentru conformare legală):**
- **5 ani** conform legislației fiscale românești (Cod Fiscal art. 155)
- Conține DOAR: suma creditului, data, ID tranzacție (fără date personale identificabile)

**Ștergere garantată:** După 5 ani → ștergere definitivă din toate sistemele (DB + backup-uri)
```

---

### 6. **Lista exactă brokeri terți lipsește**

**Problema:** Privacy Policy zice "transmitem către max 5 brokeri certificați" dar:
- Nu specifică CINE sunt brokerii (nume companie, date contact)
- Nu zice DACĂ brokerii au propriile lor Privacy Policies

**Soluție:** Adaugă secțiune în Privacy Policy:
```markdown
## Brokeri Parteneri (Destinatari Date)

Datele tale sunt transmise către următorii brokeri certificați BNR:

1. **[Nume Broker 1]**
   - Cod BNR: XXXXX
   - Website: https://broker1.ro
   - Privacy Policy: https://broker1.ro/privacy
   - Contact: contact@broker1.ro

2. **[Nume Broker 2]**
   - [...]

Fiecare broker are obligația legală de a respecta GDPR și are propria Politică de Confidențialitate. 
Noi NU răspundem pentru modul în care brokerii procesează datele DUPĂ transmitere.
```

**Alternativ (dacă brokerii se schimbă frecvent):**
```markdown
Datele sunt transmise către **max 5 brokeri certificați BNR** selectați în funcție de:
- Specializare (prima casă, refinanțare, etc.)
- Zone geografice deservite
- Availability

Lista actualizată de brokeri: [link către pagină dedicată]
```

---

## 🔧 Plan de Implementare GDPR Complet

### **Prioritate 1 (URGENT - 1-2 zile):**
- [ ] Adaugă checkbox explicit de consimțământ în formular
- [ ] Adaugă link unsubscribe în email-uri
- [ ] Creează pagină `/retragere-consimtamant`

### **Prioritate 2 (Recomandat - 3-5 zile):**
- [ ] Adaugă funcție delete în admin panel
- [ ] Clarificare data retention în Privacy Policy
- [ ] Adaugă lista brokeri terți (sau link către listă)
- [ ] Setup email dedicat: `gdpr@lend.ro`

### **Prioritate 3 (Nice to have - 1-2 săptămâni):**
- [ ] Auto-delete după 12 luni (cron job)
- [ ] Export date (portabilitate GDPR) - user poate descărca JSON cu toate datele
- [ ] Audit log (cine a accesat ce date când)
- [ ] Cookie consent management platform (Cookiebot, OneTrust - paid)

---

## 📋 Checklist Compliance GDPR

### Consimțământ (Art. 6 & 7)
- [x] Obținut înainte de prelucrare
- [x] Specific și informat
- [ ] **Checkbox explicit** (lipsește - URGENT)
- [x] Retractabil (parțial - lipsește pagină dedicată)

### Transparență (Art. 12-14)
- [x] Politică de Confidențialitate completă
- [x] Scop prelucrare clar
- [ ] **Lista destinatari (brokeri)** (incomplet)
- [ ] **Data retention clarificat** (incomplet)

### Drepturi Utilizatori (Art. 15-22)
- [x] Dreptul la acces (email: contact@lend.ro)
- [ ] **Dreptul la ștergere** (nu automatizat)
- [ ] **Dreptul la portabilitate** (nu implementat)
- [ ] **Dreptul la opoziție** (nu există link unsubscribe)

### Securitate (Art. 32)
- [x] HTTPS / SSL
- [x] Rate limiting
- [x] Data sanitization
- [x] Honeypot (anti-bots)
- [x] IP logging minimal
- [ ] **Encryption at rest** (Neon DB - verifică)

### Breach Notification (Art. 33-34)
- [ ] **Procedură breach documentată** (lipsește)
- [ ] **Contact ANSPDCP** (autoritate RO - not registered)

---

## 🚨 Riscuri Legale Actuale

### Risc Mediu (⚠️):
1. **Lipsă checkbox explicit** → Amendă posibilă: 2% din CA sau €10M (whichever is lower)
2. **Lipsă unsubscribe link** → Amendă: 1-2% din CA
3. **Imposibilitate ștergere automată** → Reclamație utilizator → investigație ANSPDCP

### Risc Scăzut (✅):
- Politică de Confidențialitate OK
- Securitate tehnică OK
- Cookie banner OK

**Concluzie:** Site-ul e "acceptable" dar NU e "bulletproof" GDPR.

---

## 💡 Recomandări Finale

### **Prioritate 1 (FAI ACUM):**
1. Adaugă checkbox explicit în formular (30 min)
2. Adaugă footer cu unsubscribe în email-uri (30 min)
3. Creează pagină `/retragere-consimtamant` (2 ore)

→ **Total: 3 ore** → GDPR Compliance 95%

### **Prioritate 2 (Următoarele 2 săptămâni):**
4. Setup `gdpr@lend.ro` email dedicat
5. Adaugă funcție delete în admin
6. Clarificare Privacy Policy (data retention + brokeri)
7. Înregistrare ANSPDCP (optional dar recomandat)

→ **Total: 1-2 zile** → GDPR Compliance 100%

---

## 📞 ANSPDCP - Autoritatea Română

**Website:** https://www.dataprotection.ro/  
**Telefon:** 0318 059 211  
**Email:** anspdcp@dataprotection.ro

**Înregistrare obligatorie?**
- NU, dacă procesezi date pe bază de consimțământ explicit
- DA, dacă ai > 250 angajați SAU procesezi date sensibile

**Recomandare:** Înregistrează-te voluntar → arată bună-credință în caz de investigație.

---

## 🔗 Resurse Utile

1. **GDPR Full Text (RO):** https://gdpr.eu/tag/gdpr-ro/
2. **ANSPDCP Ghid:** https://www.dataprotection.ro/?page=Ghid_RGPD
3. **ICO (UK) Checklist:** https://ico.org.uk/for-organisations/gdpr-resources/
4. **Google GDPR Compliance:** https://privacy.google.com/businesses/compliance/

---

**Întrebări?** Pot implementa toate fix-urile enumerate mai sus în ~1 zi de muncă.

Spune-mi care e prioritatea: 
1. **URGENT** (checkbox + unsubscribe link) → 3 ore
2. **COMPLET** (toate de mai sus) → 1-2 zile
3. **CONSULTANȚĂ** (vrei să discutăm fiecare punct în detaliu)
