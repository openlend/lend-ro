#!/usr/bin/env node

/**
 * Create Excel file from CSV samples
 * Usage: node scripts/create-excel-from-csv.js
 */

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const CSV_DIR = path.join(__dirname, '../data');
const OUTPUT_FILE = path.join(CSV_DIR, 'banci-produse-v2.xlsx');

console.log('📊 Creating Excel file from CSV samples...\n');

// Check if CSV files exist
const csvFiles = [
  'SAMPLE-PRODUSE.csv',
  'SAMPLE-BANCI.csv',
  'SAMPLE-PARAMETRI_PIATA.csv'
];

const missingFiles = csvFiles.filter(f => !fs.existsSync(path.join(CSV_DIR, f)));
if (missingFiles.length > 0) {
  console.error('❌ Missing CSV files:', missingFiles.join(', '));
  console.error('Run this script from the project root: node scripts/create-excel-from-csv.js');
  process.exit(1);
}

// Create new workbook
const workbook = XLSX.utils.book_new();

// Read and add PRODUSE sheet
const produseCSV = fs.readFileSync(path.join(CSV_DIR, 'SAMPLE-PRODUSE.csv'), 'utf8');
const produseSheet = XLSX.utils.aoa_to_sheet(
  produseCSV.split('\n').map(row => row.split(','))
);
XLSX.utils.book_append_sheet(workbook, produseSheet, 'PRODUSE');
console.log('✓ Added PRODUSE sheet');

// Read and add BANCI sheet
const banciCSV = fs.readFileSync(path.join(CSV_DIR, 'SAMPLE-BANCI.csv'), 'utf8');
const banciSheet = XLSX.utils.aoa_to_sheet(
  banciCSV.split('\n').map(row => row.split(','))
);
XLSX.utils.book_append_sheet(workbook, banciSheet, 'BANCI');
console.log('✓ Added BANCI sheet');

// Read and add PARAMETRI_PIATA sheet
const parametriCSV = fs.readFileSync(path.join(CSV_DIR, 'SAMPLE-PARAMETRI_PIATA.csv'), 'utf8');
const parametriSheet = XLSX.utils.aoa_to_sheet(
  parametriCSV.split('\n').map(row => row.split(','))
);
XLSX.utils.book_append_sheet(workbook, parametriSheet, 'PARAMETRI_PIATA');
console.log('✓ Added PARAMETRI_PIATA sheet');

// Write Excel file
try {
  XLSX.writeFile(workbook, OUTPUT_FILE);
  console.log(`\n✅ Successfully created: ${OUTPUT_FILE}`);
  console.log('\nNext steps:');
  console.log('1. Open the Excel file and customize the data');
  console.log('2. Run: npm run import:excel');
  console.log('3. Run: npm run build\n');
} catch (error) {
  console.error('❌ Error writing Excel file:', error.message);
  process.exit(1);
}
