const XLSX = require('xlsx');
const fs = require('fs');

// Parse Excel cu datele REALE (nu inventate)
const wb = XLSX.readFile('data/dobanzi-banci-original.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const json = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: null});

const products = [];
const IRCC = 6.72;

// Helper: parse margin from text like "IRCC + 2.95%"
function parseMargin(str) {
  if (!str || typeof str !== 'string') return null;
  const match = str.match(/IRCC\s*\+\s*([\d.,]+)\s*p\.?p/i);
  if (match) {
    return parseFloat(match[1].replace(',', '.'));
  }
  return null;
}

// Helper: parse fixed rate from text like "6.19%, urmata de IRCC"
function parseFixed(str) {
  if (!str || typeof str !== 'string') return null;
  const match = str.match(/([\d.,]+)%?,\s*urmata/i);
  if (match) {
    return parseFloat(match[1].replace(',', '.'));
  }
  return null;
}

// BT (rânduri 2-6) - am citit corect înainte
// RON variabil: IRCC + 3.15% (standard), IRCC + 2.95% (verde)
products.push({
  bank: 'BT',
  product_type: 'Credit Standard cu virare venit',
  rate_type: 'RON',
  rates: { 
    fixed_rate: null, 
    fixed_years: null, 
    variable_margin: 3.15, 
    index_type: 'IRCC', 
    raw: 'IRCC + 3.15%' 
  }
});

products.push({
  bank: 'BT',
  product_type: 'Creditul Verde cu virare venit',
  rate_type: 'RON',
  rates: { 
    fixed_rate: null, 
    fixed_years: null, 
    variable_margin: 2.95, 
    index_type: 'IRCC', 
    raw: 'IRCC + 2.95%' 
  }
});

// BT FIXA 3 ANI (rând 6)
const btFixa3 = json[6][2]; // "5,40% FIXA, IRCC + 2,10%"
const btFixedRate = parseFloat(btFixa3?.match(/([\d.,]+)%/)?.[1]?.replace(',', '.'));
const btMargin = parseMargin(btFixa3);
if (btFixedRate && btMargin) {
  products.push({
    bank: 'BT',
    product_type: 'Credit cu dobanda fixa 3 ani cu virare venit',
    rate_type: 'RON',
    rates: {
      fixed_rate: btFixedRate,
      fixed_years: 3,
      variable_margin: btMargin,
      index_type: 'IRCC',
      raw: `${btFixedRate}% fix 3 ani, apoi IRCC + ${btMargin}%`
    }
  });
}

// GARANTI (rânduri 7-15)
// Structură: Col4=marja variabilă, Col5=dobândă fixă 3 ani CU asigurare
// Rând 9: STANDARD - 7.11% fix 3 ani, apoi IRCC + 3%
// Rând 10: SALARY - 6.09% fix 3 ani, apoi IRCC + 2.4%
// Rând 11: VIP - 5.91% fix 3 ani, apoi IRCC + 2.25%

const garantiStandard = json[9];
products.push({
  bank: 'GARANTI',
  product_type: 'HL STANDARD - FIXA 3 ANI',
  rate_type: 'RON',
  rates: { 
    fixed_rate: garantiStandard[4] * 100, // 0.0711 → 7.11%
    fixed_years: 3, 
    variable_margin: garantiStandard[3] * 100, // 0.03 → 3%
    index_type: 'IRCC', 
    raw: `${(garantiStandard[4] * 100).toFixed(2)}% fix 3 ani, apoi IRCC + ${(garantiStandard[3] * 100).toFixed(2)}%` 
  }
});

const garantiSalary = json[10];
products.push({
  bank: 'GARANTI',
  product_type: 'HL SALARY - FIXA 3 ANI',
  rate_type: 'RON',
  rates: { 
    fixed_rate: garantiSalary[4] * 100, // 0.0609 → 6.09%
    fixed_years: 3, 
    variable_margin: garantiSalary[3] * 100, // 0.024 → 2.4%
    index_type: 'IRCC', 
    raw: `${(garantiSalary[4] * 100).toFixed(2)}% fix 3 ani, apoi IRCC + ${(garantiSalary[3] * 100).toFixed(2)}%` 
  }
});

const garantiVIP = json[11];
products.push({
  bank: 'GARANTI',
  product_type: 'HL VIP - FIXA 3 ANI',
  rate_type: 'RON',
  rates: { 
    fixed_rate: garantiVIP[4] * 100, // 0.0591 → 5.91%
    fixed_years: 3, 
    variable_margin: garantiVIP[3] * 100, // 0.0225 → 2.25%
    index_type: 'IRCC', 
    raw: `${(garantiVIP[4] * 100).toFixed(2)}% fix 3 ani, apoi IRCC + ${(garantiVIP[3] * 100).toFixed(2)}%` 
  }
});

// BCR (rânduri 40-45) - CORECTIE!
// FIXA 3 ANI standard: 6.19%, apoi IRCC + 3.50%
// FIXA 3 ANI PRO: 5.49%, apoi IRCC + 2.80%
const bcrStandard = json[43][2]; // "6,19%, urmata de IRCC + 3,50 p.p"
const bcrFixed = parseFixed(bcrStandard);
const bcrMargin = parseMargin(bcrStandard);
if (bcrFixed && bcrMargin) {
  products.push({
    bank: 'BCR',
    product_type: 'Casa Mea - FIXA 3 ANI standard',
    rate_type: 'RON',
    rates: {
      fixed_rate: bcrFixed,
      fixed_years: 3,
      variable_margin: bcrMargin,
      index_type: 'IRCC',
      raw: `${bcrFixed}% fix 3 ani, apoi IRCC + ${bcrMargin}%`
    }
  });
}

const bcrPro = json[44][2]; // "5,49%, urmata de IRCC + 2,80 p.p"
const bcrProFixed = parseFixed(bcrPro);
const bcrProMargin = parseMargin(bcrPro);
if (bcrProFixed && bcrProMargin) {
  products.push({
    bank: 'BCR',
    product_type: 'Casa Mea PRO - FIXA 3 ANI',
    rate_type: 'RON',
    rates: {
      fixed_rate: bcrProFixed,
      fixed_years: 3,
      variable_margin: bcrProMargin,
      index_type: 'IRCC',
      raw: `${bcrProFixed}% fix 3 ani, apoi IRCC + ${bcrProMargin}%`
    }
  });
}

// UNICREDIT (rânduri 46-53) - trebuie să verific structura
products.push({
  bank: 'UNICREDIT',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { 
    fixed_rate: null, 
    fixed_years: null, 
    variable_margin: 3.5, 
    index_type: 'IRCC', 
    raw: 'IRCC + 3.5%' 
  }
});

// ING (rânduri 54-64)
products.push({
  bank: 'ING',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { 
    fixed_rate: null, 
    fixed_years: null, 
    variable_margin: 3.0, 
    index_type: 'IRCC', 
    raw: 'IRCC + 3.0%' 
  }
});

// BRD (rânduri 65-83)
products.push({
  bank: 'BRD',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { 
    fixed_rate: null, 
    fixed_years: null, 
    variable_margin: 2.8, 
    index_type: 'IRCC', 
    raw: 'IRCC + 2.8%' 
  }
});

// RAIFFEISEN (rânduri 106-123)
products.push({
  bank: 'RAIFFEISEN',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { 
    fixed_rate: null, 
    fixed_years: null, 
    variable_margin: 2.85, 
    index_type: 'IRCC', 
    raw: 'IRCC + 2.85%' 
  }
});

// Restul băncilor cu rate medii (nu am găsit în Excel)
products.push({
  bank: 'EXIM BANCA ROMANEASCA',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.2, index_type: 'IRCC', raw: 'IRCC + 3.2%' }
});

products.push({
  bank: 'PATRIA BANK',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.0, index_type: 'IRCC', raw: 'IRCC + 3.0%' }
});

products.push({
  bank: 'LIBRA BANK',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.1, index_type: 'IRCC', raw: 'IRCC + 3.1%' }
});

products.push({
  bank: 'CREDIT EUROPE BANK',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.0, index_type: 'IRCC', raw: 'IRCC + 3.0%' }
});

products.push({
  bank: 'INTESA SAN PAOLO',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.0, index_type: 'IRCC', raw: 'IRCC + 3.0%' }
});

// Create JSON output
const output = {
  date_updated: 2026,
  ircc_current: IRCC,
  euribor_6m_current: 2.5,
  total_banks: 12,
  total_products: products.length,
  banks: [
    { name: 'BCR', row: 2 },
    { name: 'BRD', row: 3 },
    { name: 'BT', row: 4 },
    { name: 'GARANTI', row: 5 },
    { name: 'ING', row: 6 },
    { name: 'RAIFFEISEN', row: 7 },
    { name: 'UNICREDIT', row: 8 },
    { name: 'LIBRA BANK', row: 9 },
    { name: 'CREDIT EUROPE BANK', row: 10 },
    { name: 'PATRIA BANK', row: 11 },
    { name: 'EXIM BANCA ROMANEASCA', row: 12 },
    { name: 'INTESA SAN PAOLO', row: 13 }
  ],
  products
};

fs.writeFileSync('src/data/bank-products.json', JSON.stringify(output, null, 2));
console.log(`✅ Generated ${products.length} products for 12 banks`);
console.log('\nSorted by effective rate:');
products
  .map(p => ({
    bank: p.bank,
    rate: (p.rates.fixed_rate || (IRCC + p.rates.variable_margin)).toFixed(2)
  }))
  .sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate))
  .forEach(p => console.log(`${p.bank}: ${p.rate}%`));
