'use client';

import { useState, useEffect } from 'react';
import bankData from '@/data/bank-products.json';
import BankLogo from './BankLogo';
import LeadModal from './LeadModal';

interface CalculatorResult {
  monthlyPayment: number;
  debtRatio: number;
  eligible: boolean;
  bankName: string;
  productType: string;
}

export default function Calculator() {
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [salary, setSalary] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(25);
  const [downPayment, setDownPayment] = useState(20);
  const [isFirstProperty, setIsFirstProperty] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState<CalculatorResult[]>([]);

  const minDownPayment = isFirstProperty ? 5 : 25;

  // Helper for slider progress background
  const getSliderStyle = (value: number, min: number, max: number) => {
    const percent = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #4FD1C5 0%, #4FD1C5 ${percent}%, #E5E7EB ${percent}%, #E5E7EB 100%)`,
    };
  };
  const loanAmount = propertyPrice * (1 - downPayment / 100);

  const calculateMonthlyPayment = (principal: number, annualRate: number, years: number): number => {
    const monthlyRate = annualRate / 12 / 100;
    const numPayments = years * 12;
    if (monthlyRate === 0) return principal / numPayments;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
           (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  useEffect(() => {
    const calculatedResults: CalculatorResult[] = [];
    
    // All products EXCEPT Euro
    const sortedProducts = [...bankData.products]
      .filter((product: any) => {
        const rateType = product.rate_type.toUpperCase();
        return !rateType.includes('EURO');
      })
      .sort((a: any, b: any) => {
        const rateA = a.rates.fixed_rate || a.rates.variable_margin;
        const rateB = b.rates.fixed_rate || b.rates.variable_margin;
        return rateA - rateB;
      });

    // Group by bank: take only the BEST (cheapest) product per bank
    const bestPerBank = new Map();
    sortedProducts.forEach((product: any) => {
      if (!bestPerBank.has(product.bank)) {
        bestPerBank.set(product.bank, product);
      }
    });

    // Show all unique banks (best offer from each)
    Array.from(bestPerBank.values()).forEach((product: any) => {
      const { bank, product_type, rates } = product;
      const monthlyRate = rates.fixed_rate || (bankData.ircc_current + rates.variable_margin);
      const monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyRate, loanTerm);
      const debtRatio = (monthlyPayment / salary) * 100;

      calculatedResults.push({
        monthlyPayment,
        debtRatio,
        eligible: debtRatio <= 40,
        bankName: bank,
        productType: product_type,
      });
    });

    setResults(calculatedResults);
  }, [propertyPrice, downPayment, salary, loanTerm]);

  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold mb-4">Calculează rata lunară</h2>
        <p className="text-base-content/70 mb-6">Ajustează parametrii și vezi instant cele mai bune oferte</p>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Preț proprietate</span>
              <span className="text-2xl font-bold text-mint">{propertyPrice.toLocaleString('ro-RO')} RON</span>
            </div>
            <input
              type="range"
              min="100000"
              max="1500000"
              step="10000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full range-with-progress"
              style={getSliderStyle(propertyPrice, 100000, 1500000)}
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>100.000</span>
              <span>1.500.000</span>
            </div>
            <div className="mt-2 text-center">
              <span className="text-sm opacity-70">Suma credit: </span>
              <span className="text-lg font-bold text-mint">{loanAmount.toLocaleString('ro-RO')} RON</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Venit lunar net</span>
              <span className="text-2xl font-bold text-mint">{salary.toLocaleString('ro-RO')} RON</span>
            </div>
            <input
              type="range"
              min="3000"
              max="30000"
              step="500"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full range-with-progress"
              style={getSliderStyle(salary, 3000, 30000)}
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>3.000</span>
              <span>30.000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Perioadă creditare</span>
              <span className="text-2xl font-bold text-mint">{loanTerm} ani</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full range-with-progress"
              style={getSliderStyle(loanTerm, 5, 30)}
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>5 ani</span>
              <span>30 ani</span>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2">
            <input 
              type="checkbox" 
              id="firstProperty"
              checked={isFirstProperty}
              onChange={(e) => {
                setIsFirstProperty(e.target.checked);
                if (!e.target.checked && downPayment < 25) {
                  setDownPayment(25);
                }
              }}
              className="w-5 h-5 rounded border-2 border-gray-300"
              style={{ accentColor: '#4FD1C5' }}
            />
            <label htmlFor="firstProperty" className="text-sm text-gray-700 cursor-pointer">
              Prima proprietate imobiliară <span className="text-gray-500">(avans minim {minDownPayment}%)</span>
            </label>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Avans</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-mint">{downPayment}%</span>
                <div className="text-xs opacity-70">{(propertyPrice * downPayment / 100).toLocaleString('ro-RO')} RON</div>
              </div>
            </div>
            <input
              type="range"
              min={minDownPayment}
              max="50"
              step="5"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full range-with-progress"
              style={getSliderStyle(downPayment, minDownPayment, 50)}
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>{minDownPayment}%</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-bold">Cele mai bune oferte:</h3>

            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex-1">
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <BankLogo bankName={result.bankName} size="md" />
                        <div>
                          <h4 className="font-bold text-xl">{result.bankName}</h4>
                          <p className="text-sm opacity-70">{result.productType.replace(/\*+/g, "").substring(0, 40).trim()}...</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="radial-progress text-mint" style={{"--value": result.debtRatio, "--size": "4rem"} as any}>
                          {result.debtRatio.toFixed(0)}%
                        </div>
                        <span className="text-xs">Grad îndatorare</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-50">Rată lunară</div>
                      <div className="text-4xl font-bold text-mint">
                        {Math.round(result.monthlyPayment).toLocaleString('ro-RO')}
                      </div>
                      <div className="text-sm">RON / lună</div>
                      {result.eligible ? (
                        <div className="badge badge-success mt-2">✓ Eligibil</div>
                      ) : (
                        <div className="badge badge-error mt-2">✗ Depășit</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="btn btn-primary btn-lg w-full mt-6">
              Solicită oferte de la 5 brokeri
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
