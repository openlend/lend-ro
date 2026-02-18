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

  const colors = ['#F87171', '#FB923C', '#FBBF24'];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
      <div className="mb-10">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">
          Calculează rata lunară
        </h2>
        <p className="text-gray-600 text-lg">
          Ajustează parametrii și vezi instant cele mai bune oferte
        </p>
      </div>

      {/* Sliders */}
      <div className="space-y-10 mb-12">
        <div>
          <div className="flex justify-between items-baseline mb-4">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              Suma credit
            </label>
            <span className="text-3xl font-black text-primary-500">
              {loanAmount.toLocaleString('ro-RO')} RON
            </span>
          </div>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-primary-200 to-primary-500 rounded-full appearance-none cursor-pointer"
            style={{
              accentColor: '#0A4D3C'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
            <span>50.000 RON</span>
            <span>1.000.000 RON</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-4">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              Venit lunar net
            </label>
            <span className="text-3xl font-black text-accent-cyan">
              {salary.toLocaleString('ro-RO')} RON
            </span>
          </div>
          <input
            type="range"
            min="3000"
            max="30000"
            step="500"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-cyan-200 to-cyan-500 rounded-full appearance-none cursor-pointer"
            style={{
              accentColor: '#22D3EE'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
            <span>3.000 RON</span>
            <span>30.000 RON</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-4">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              Perioadă creditare
            </label>
            <span className="text-3xl font-black text-accent-orange">
              {loanTerm} ani
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-orange-200 to-orange-500 rounded-full appearance-none cursor-pointer"
            style={{
              accentColor: '#FB923C'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
            <span>5 ani</span>
            <span>30 ani</span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <input
            type="checkbox"
            id="firstProperty"
            checked={firstProperty}
            onChange={(e) => setFirstProperty(e.target.checked)}
            className="w-6 h-6 text-primary-500 rounded border-gray-300 focus:ring-primary-500"
          />
          <label htmlFor="firstProperty" className="text-gray-700 font-medium cursor-pointer">
            Prima proprietate imobiliară
          </label>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black text-gray-900">
              Cele mai bune oferte pentru tine
            </h3>
          </div>
          
          {results.map((result, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2"
              style={{
                background: `linear-gradient(135deg, ${colors[index]}08 0%, ${colors[index]}18 100%)`,
                borderColor: `${colors[index]}40`
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left: Bank info */}
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-2">{result.bankName}</h4>
                  <p className="text-gray-600 text-sm mb-4">{result.productType.substring(0, 50)}...</p>
                  
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg"
                      style={{ background: colors[index] }}
                    >
                      {result.debtRatio.toFixed(0)}%
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                        Grad îndatorare
                      </div>
                      <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${Math.min(result.debtRatio, 100)}%`,
                            background: colors[index]
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Payment */}
                <div className="text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                    Rată lunară
                  </div>
                  <div className="text-5xl lg:text-6xl font-black mb-2" style={{ color: colors[index] }}>
                    {Math.round(result.monthlyPayment).toLocaleString('ro-RO')}
                  </div>
                  <div className="text-gray-600 font-medium">RON / lună</div>
                  
                  {result.eligible ? (
                    <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Eligibil
                    </div>
                  ) : (
                    <div className="mt-4 inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full font-bold text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Depășit 40%
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <button
            className="w-full mt-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-black py-6 px-8 rounded-2xl shadow-2xl hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1 text-xl"
          >
            🚀 Solicită oferte personalizate de la 5 brokeri
          </button>
        </div>
      )}
    </div>
  );
}
