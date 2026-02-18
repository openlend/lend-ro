'use client';

import { useState, useEffect } from 'react';
import bankData from '@/data/bank-products.json';

interface CalculatorResult {
  monthlyPayment: number;
  debtRatio: number;
  eligible: boolean;
  bankName: string;
  productType: string;
  fixedRate: number | null;
  variableRate: number;
}

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [salary, setSalary] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(25);
  const [firstProperty, setFirstProperty] = useState(true);
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
    const sortedProducts = [...bankData.products]
      .filter((product: any) => product.rate_type.includes('RON'))
      .sort((a: any, b: any) => {
        const rateA = a.rates.fixed_rate || a.rates.variable_margin;
        const rateB = b.rates.fixed_rate || b.rates.variable_margin;
        return rateA - rateB;
      });

    sortedProducts.slice(0, 3).forEach((product: any) => {
      const { bank, product_type, rates } = product;
      const monthlyRate = rates.fixed_rate || (bankData.ircc_current + rates.variable_margin);
      const variableRate = bankData.ircc_current + rates.variable_margin;
      const monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyRate, loanTerm);
      const debtRatio = (monthlyPayment / salary) * 100;

      calculatedResults.push({
        monthlyPayment,
        debtRatio,
        eligible: debtRatio <= 40,
        bankName: bank,
        productType: product_type,
        fixedRate: rates.fixed_rate,
        variableRate,
      });
    });

    setResults(calculatedResults);
  }, [loanAmount, salary, loanTerm]);

  const colors = ['#f87171', '#fb923c', '#fbbf24'];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
      <h2 className="text-4xl font-black text-gray-900 mb-8">
        💰 Calculează rata lunară
      </h2>

      {/* Sliders */}
      <div className="space-y-8 mb-10">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Suma credit: <span className="text-2xl text-emerald-600 ml-2">{loanAmount.toLocaleString('ro-RO')} RON</span>
          </label>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-emerald-200 to-emerald-500 rounded-full appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>50.000</span>
            <span>1.000.000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Venit lunar net: <span className="text-2xl text-blue-600 ml-2">{salary.toLocaleString('ro-RO')} RON</span>
          </label>
          <input
            type="range"
            min="3000"
            max="30000"
            step="500"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-500 rounded-full appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>3.000</span>
            <span>30.000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Perioadă: <span className="text-2xl text-purple-600 ml-2">{loanTerm} ani</span>
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-purple-200 to-purple-500 rounded-full appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>5 ani</span>
            <span>30 ani</span>
          </div>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-6">
            🎯 Cele mai bune oferte:
          </h3>
          
          {results.map((result, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${colors[index]}15 0%, ${colors[index]}30 100%)`,
                border: `2px solid ${colors[index]}40`
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-black text-xl text-gray-900 mb-1">{result.bankName}</h4>
                  <p className="text-sm text-gray-600">{result.productType.substring(0, 35)}...</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black" style={{ color: colors[index] }}>
                    {Math.round(result.monthlyPayment).toLocaleString('ro-RO')} RON
                  </p>
                  <p className="text-xs text-gray-600">rată lunară</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center font-black text-white text-lg"
                    style={{ background: colors[index] }}
                  >
                    {result.debtRatio.toFixed(0)}%
                  </div>
                  <span className="text-sm text-gray-600">îndatorare</span>
                </div>

                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${Math.min(result.debtRatio, 100)}%`,
                        background: colors[index]
                      }}
                    />
                  </div>
                </div>

                {result.eligible ? (
                  <span className="text-sm font-bold text-emerald-600">✓ Eligibil</span>
                ) : (
                  <span className="text-sm font-bold text-red-600">✗ Depășit</span>
                )}
              </div>
            </div>
          ))}

          <button
            className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg"
          >
            🚀 Solicită oferte de la 5 brokeri
          </button>
        </div>
      )}
    </div>
  );
}
