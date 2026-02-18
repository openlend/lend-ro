#!/usr/bin/env node

/**
 * Import Excel bank data → JSON
 * Usage: node scripts/import-excel.js [path/to/excel.xlsx]
 */

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_PATH = process.argv[2] || path.join(__dirname, '../data/banci-produse-v2.xlsx');
const OUTPUT_PATH = path.join(__dirname, '../src/data/bank-products.json');

console.log('📊 Importing Excel bank data...\n');
console.log(`Input:  ${EXCEL_PATH}`);
console.log(`Output: ${OUTPUT_PATH}\n`);

// Read Excel file
let workbook;
try {
  workbook = XLSX.readFile(EXCEL_PATH);
} catch (error) {
  console.error('❌ Error reading Excel file:', error.message);
  process.exit(1);
}

// Check required sheets
const requiredSheets = ['PRODUSE', 'BANCI', 'PARAMETRI_PIATA'];
const missingSheets = requiredSheets.filter(s => !workbook.Sheets[s]);
if (missingSheets.length > 0) {
  console.error(`❌ Missing required sheets: ${missingSheets.join(', ')}`);
  process.exit(1);
}

// Parse sheets
const produseSheet = XLSX.utils.sheet_to_json(workbook.Sheets['PRODUSE']);
const banciSheet = XLSX.utils.sheet_to_json(workbook.Sheets['BANCI']);
const parametriSheet = XLSX.utils.sheet_to_json(workbook.Sheets['PARAMETRI_PIATA']);

console.log(`✓ Found ${produseSheet.length} products`);
console.log(`✓ Found ${banciSheet.length} banks`);
console.log(`✓ Found ${parametriSheet.length} market parameters\n`);

// Parse market parameters (IRCC, Euribor, etc.)
const parametri = {};
parametriSheet.forEach(row => {
  if (row.parametru && row.valoare !== undefined) {
    parametri[row.parametru] = parseFloat(row.valoare) || row.valoare;
  }
});

const ircc = parametri['IRCC'] || 6.72;
const euribor6m = parametri['EURIBOR_6M'] || 2.50;
const dateUpdated = parametri['DATA_ACTUALIZARE'] || new Date().toISOString().split('T')[0];

console.log(`Market parameters:`);
console.log(`  IRCC: ${ircc}%`);
console.log(`  Euribor 6M: ${euribor6m}%`);
console.log(`  Date: ${dateUpdated}\n`);

// Parse banks
const banksMap = {};
banciSheet.forEach(bank => {
  if (!bank.id || !bank.nume) {
    console.warn(`⚠️  Skipping bank row (missing id or nume):`, bank);
    return;
  }
  
  banksMap[bank.id] = {
    name: bank.nume.trim(),
    fullName: bank.nume_lung ? bank.nume_lung.trim() : bank.nume.trim(),
    logo: bank.logo_path || null,
    website: bank.website || null,
    phone: bank.telefon_contact || null,
    active: bank.activa !== false && bank.activa !== 0
  };
});

console.log(`Banks processed: ${Object.keys(banksMap).length}`);

// Parse products
const products = [];
let skipped = 0;

produseSheet.forEach((row, idx) => {
  // Skip if missing required fields
  if (!row.id_banca || !row.nume_produs || !row.tip_rate) {
    console.warn(`⚠️  Skipping row ${idx + 2} (missing required fields)`);
    skipped++;
    return;
  }

  const bank = banksMap[row.id_banca];
  if (!bank) {
    console.warn(`⚠️  Skipping row ${idx + 2} (unknown bank id: ${row.id_banca})`);
    skipped++;
    return;
  }

  if (!bank.active) {
    skipped++;
    return;
  }

  // Parse rates
  const fixedRate = row.dobanda_fixa ? parseFloat(row.dobanda_fixa) : null;
  const fixedYears = row.perioada_fixa_ani ? parseInt(row.perioada_fixa_ani) : null;
  const variableMargin = row.marja_variabila ? parseFloat(row.marja_variabila) : null;
  const indexType = (row.tip_rate || '').toUpperCase().includes('EUR') ? 'EURIBOR_6M' : 'IRCC';

  // Build rate string
  let rateString = '';
  if (fixedRate && fixedYears) {
    rateString = `${fixedRate}% fix ${fixedYears} ani`;
    if (variableMargin) {
      rateString += `, apoi ${indexType} + ${variableMargin}%`;
    }
  } else if (variableMargin) {
    rateString = `${indexType} + ${variableMargin}%`;
  }

  products.push({
    bank: bank.name,
    product_type: row.nume_produs.trim(),
    rate_type: row.tip_rate.trim(),
    rates: {
      fixed_rate: fixedRate,
      fixed_years: fixedYears,
      variable_margin: variableMargin,
      index_type: indexType,
      raw: rateString
    }
  });
});

console.log(`Products processed: ${products.length}`);
if (skipped > 0) {
  console.log(`⚠️  Skipped: ${skipped} rows\n`);
}

// Build unique banks list (from processed products)
const uniqueBanks = Array.from(new Set(products.map(p => p.bank)))
  .sort()
  .map((bankName, idx) => ({
    name: bankName,
    row: idx + 2 // Excel row number (starting from 2, after header)
  }));

// Build output JSON
const output = {
  date_updated: dateUpdated,
  ircc_current: ircc,
  euribor_6m_current: euribor6m,
  total_banks: uniqueBanks.length,
  total_products: products.length,
  banks: uniqueBanks,
  products: products
};

// Write to file
try {
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf8');
  console.log(`✅ Successfully wrote ${OUTPUT_PATH}`);
  console.log(`\nSummary:`);
  console.log(`  Banks: ${output.total_banks}`);
  console.log(`  Products: ${output.total_products}`);
  console.log(`  Date: ${output.date_updated}`);
  console.log(`\n🚀 Ready to deploy! Run: npm run build\n`);
} catch (error) {
  console.error('❌ Error writing output file:', error.message);
  process.exit(1);
}
