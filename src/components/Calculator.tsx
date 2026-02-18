'use client';

import { useState, useEffect } from 'react';
import bankData from '@/data/bank-products.json';

interface CalculatorResult {
  monthlyPayment: number;
  debtRatio: number;
  eligible: boolean;
  bankName: string;
  productType: string;
}

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [salary, setSalary] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(25);
  const [downPayment, setDownPayment] = useState(20);
  const [results, setResults] = useState<CalculatorResult[]>([]);

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
  }, [loanAmount, salary, loanTerm]);

  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-4xl font-black mb-4">💰 Calculează rata lunară</h2>
        <p className="text-base-content/70 mb-6">Ajustează parametrii și vezi instant cele mai bune oferte</p>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Suma credit</span>
              <span className="text-2xl font-black text-primary">{loanAmount.toLocaleString('ro-RO')} RON</span>
            </div>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="range range-primary"
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>50.000</span>
              <span>1.000.000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Venit lunar net</span>
              <span className="text-2xl font-black text-info">{salary.toLocaleString('ro-RO')} RON</span>
            </div>
            <input
              type="range"
              min="3000"
              max="30000"
              step="500"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="range range-info"
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>3.000</span>
              <span>30.000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Perioadă creditare</span>
              <span className="text-2xl font-black text-secondary">{loanTerm} ani</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="range range-secondary"
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>5 ani</span>
              <span>30 ani</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Avans (%)</span>
              <span className="text-2xl font-black text-warning">{downPayment}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="range range-warning"
            />
            <div className="flex justify-between text-xs opacity-50">
              <span>5%</span>
              <span>50%</span>
            </div>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              <span className="label-text font-bold">Prima proprietate imobiliară</span>
            </label>
          </div>
        </div>

        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-black">🎯 Cele mai bune oferte:</h3>

            {results.map((result, index) => (
              <div key={index} className="alert shadow-lg">
                <div className="flex-1">
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <h4 className="font-black text-xl">{result.bankName}</h4>
                      <p className="text-sm opacity-70">{result.productType.substring(0, 50)}...</p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="radial-progress text-primary" style={{"--value": result.debtRatio, "--size": "4rem"} as any}>
                          {result.debtRatio.toFixed(0)}%
                        </div>
                        <span className="text-xs">Grad îndatorare</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-50">Rată lunară</div>
                      <div className="text-4xl font-black text-primary">
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
              🚀 Solicită oferte de la 5 brokeri
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
