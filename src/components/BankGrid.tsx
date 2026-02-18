'use client';

import BankCard from './BankCard';
import bankData from '@/data/bank-products.json';

interface BankSummary {
  name: string;
  bestRate: number;
  rateType: string;
  productCount: number;
  features: string[];
}

export default function BankGrid() {
  // Process bank data to get summary for each bank
  const bankSummaries: BankSummary[] = [];
  
  bankData.banks.forEach((bank: any) => {
    // Get all products for this bank
    const products = bankData.products.filter((p: any) => p.bank === bank.name);
    
    if (products.length === 0) return;

    // Find best rate (lowest)
    let bestRate = Infinity;
    let bestRateType = '';
    
    products.forEach((product: any) => {
      const rate = product.rates.fixed_rate || 
                   (bankData.ircc_current + product.rates.variable_margin);
      
      if (rate < bestRate) {
        bestRate = rate;
        bestRateType = product.rates.fixed_rate 
          ? `Dobândă fixă ${product.rate_type}`
          : `Dobândă variabilă ${product.rate_type}`;
      }
    });

    // Count product types
    const productTypes = new Set(products.map((p: any) => p.product_type));
    
    // Generate features (sample - customize per bank)
    const features = [
      'Rate competitive',
      'Aprobare rapidă',
      'Online banking',
      'Consultanță gratuită'
    ];

    bankSummaries.push({
      name: bank.name,
      bestRate: Number(bestRate.toFixed(2)),
      rateType: bestRateType,
      productCount: productTypes.size,
      features
    });
  });

  // Sort by best rate
  bankSummaries.sort((a, b) => a.bestRate - b.bestRate);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compară oferte de la {bankSummaries.length} bănci
          </h2>
          <p className="text-xl text-gray-600">
            Găsește cel mai bun credit ipotecar pentru nevoile tale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bankSummaries.map((bank) => (
            <BankCard
              key={bank.name}
              name={bank.name}
              bestRate={bank.bestRate.toString()}
              rateType={bank.rateType}
              productCount={bank.productCount}
              features={bank.features}
            />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <span className="text-3xl mr-4">ℹ️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                De ce să folosești un broker de credite?
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✓ Economisești timp - un singur formular, oferte de la toate băncile</li>
                <li>✓ Rate mai bune - brokerii au parteneriate speciale cu băncile</li>
                <li>✓ Consultanță gratuită - experți te ghidează în tot procesul</li>
                <li>✓ Șanse mai mari de aprobare - știu exact ce documente cere fiecare bancă</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
