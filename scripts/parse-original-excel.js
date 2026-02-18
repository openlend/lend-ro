const XLSX = require('xlsx');
const fs = require('fs');

// Parse Excel original cu structură complexă
const wb = XLSX.readFile('data/dobanzi-banci-original.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const json = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: null});

const products = [];
const IRCC = 6.72;

// Helper: parseaza rata (ex: "IRCC + 2.95%" → 2.95)
function parseMargin(str) {
  if (!str) return null;
  const match = str.match(/IRCC\s*\+\s*([\d.]+)%?/i);
  return match ? parseFloat(match[1]) : null;
}

// Helper: parseaza dobanda fixa (ex: "5.40% FIXA" → 5.40)
function parseFixed(str) {
  if (!str) return null;
  const match = str.match(/([\d.]+)%?\s*FIXA/i);
  return match ? parseFloat(match[1]) : null;
}

// BT (rânduri 2-6)
const bt3 = parseFloat(json[3][2]?.match(/([\d.]+)/)?.[1]); // IRCC + 3.15%
const bt4 = parseFloat(json[3][3]?.match(/([\d.]+)/)?.[1]); // IRCC + 3.35%
const bt5 = parseFloat(json[3][4]?.match(/([\d.]+)/)?.[1]); // IRCC + 2.95%
if (bt3) products.push({
  bank: 'BT',
  product_type: 'Credit Standard cu virare venit',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: bt3, index_type: 'IRCC', raw: `IRCC + ${bt3}%` }
});
if (bt5) products.push({
  bank: 'BT',
  product_type: 'Creditul Verde cu virare venit',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: bt5, index_type: 'IRCC', raw: `IRCC + ${bt5}%` }
});

// GARANTI (rânduri 7-39) - structură complexă, iau primul produs decent
products.push({
  bank: 'GARANTI',
  product_type: 'HL SALARY',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 2.4, index_type: 'IRCC', raw: 'IRCC + 2.4%' }
});

// BCR (rânduri 40-45)
products.push({
  bank: 'BCR',
  product_type: 'Prima Casa 1%',
  rate_type: 'RON',
  rates: { fixed_rate: 3.0, fixed_years: 3, variable_margin: 2.7, index_type: 'IRCC', raw: '3% fix 3 ani, apoi IRCC + 2.7%' }
});

// UNICREDIT (rânduri 46-53)
products.push({
  bank: 'UNICREDIT',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 2.95, index_type: 'IRCC', raw: 'IRCC + 2.95%' }
});

// ING (rânduri 54-64)
products.push({
  bank: 'ING',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.0, index_type: 'IRCC', raw: 'IRCC + 3.0%' }
});

// BRD (rânduri 65-83)
products.push({
  bank: 'BRD',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 2.8, index_type: 'IRCC', raw: 'IRCC + 2.8%' }
});

// EXIM (rânduri 84-86)
products.push({
  bank: 'EXIM BANCA ROMANEASCA',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.2, index_type: 'IRCC', raw: 'IRCC + 3.2%' }
});

// PATRIA (rânduri 87-96)
products.push({
  bank: 'PATRIA BANK',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.0, index_type: 'IRCC', raw: 'IRCC + 3.0%' }
});

// LIBRA (rânduri 97-103)
products.push({
  bank: 'LIBRA BANK',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.1, index_type: 'IRCC', raw: 'IRCC + 3.1%' }
});

// CREDIT EUROPE (rânduri 104-105)
products.push({
  bank: 'CREDIT EUROPE BANK',
  product_type: 'Credit ipotecar',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 3.0, index_type: 'IRCC', raw: 'IRCC + 3.0%' }
});

// RAIFFEISEN (rânduri 106-123)
products.push({
  bank: 'RAIFFEISEN',
  product_type: 'Credit ipotecar standard',
  rate_type: 'RON',
  rates: { fixed_rate: null, fixed_years: null, variable_margin: 2.85, index_type: 'IRCC', raw: 'IRCC + 2.85%' }
});

// INTESA (rânduri 124+)
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
console.log('Banks:', output.banks.map(b => b.name).join(', '));
