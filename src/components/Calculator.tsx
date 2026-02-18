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
  // Form state
  const [loanAmount, setLoanAmount] = useState(400000);
  const [salary, setSalary] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(25);
  const [firstProperty, setFirstProperty] = useState(true);

  // Results
  const [results, setResults] = useState<CalculatorResult[]>([]);

  // Calculate monthly payment
  const calculateMonthlyPayment = (
    principal: number,
    annualRate: number,
    years: number
  ): number => {
    const monthlyRate = annualRate / 12 / 100;
    const numPayments = years * 12;
    
    if (monthlyRate === 0) {
      return principal / numPayments;
    }
    
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  // Calculate debt ratio
  const calculateDebtRatio = (
    monthlyPayment: number,
    monthlySalary: number
  ): number => {
    return (monthlyPayment / monthlySalary) * 100;
  };

  // Run calculation when inputs change
  useEffect(() => {
    const calculatedResults: CalculatorResult[] = [];

    // Get top products sorted by rate
    const sortedProducts = [...bankData.products]
      .filter((product: any) => {
        // Only RON products
        return product.rate_type.includes('RON');
      })
      .sort((a: any, b: any) => {
        const rateA = a.rates.fixed_rate || a.rates.variable_margin;
        const rateB = b.rates.fixed_rate || b.rates.variable_margin;
        return rateA - rateB;
      });

    // Calculate for top 8 products
    sortedProducts.slice(0, 8).forEach((product: any) => {
      const { bank, product_type, rate_type, rates } = product;
      
      // Use fixed rate for monthly calculation (first 3 years typically)
      const monthlyRate = rates.fixed_rate || 
                         (bankData.ircc_current + rates.variable_margin);
      
      // Use variable rate for debt ratio (long-term assessment)
      const variableRate = bankData.ircc_current + rates.variable_margin;
      
      const monthlyPayment = calculateMonthlyPayment(
        loanAmount,
        monthlyRate,
        loanTerm
      );
      
      const debtRatio = calculateDebtRatio(monthlyPayment, salary);
      const eligible = debtRatio <= 40; // Max 40% debt ratio

      calculatedResults.push({
        monthlyPayment,
        debtRatio,
        eligible,
        bankName: bank,
        productType: product_type,
        fixedRate: rates.fixed_rate,
        variableRate,
      });
    });

    setResults(calculatedResults);
  }, [loanAmount, salary, loanTerm, firstProperty]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Calculează rata lunară
      </h2>

      {/* Loan Amount Slider */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Suma credit: <span className="text-green-600">{loanAmount.toLocaleString('ro-RO')} RON</span>
        </label>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="10000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>50.000 RON</span>
          <span>1.000.000 RON</span>
        </div>
      </div>

      {/* Monthly Salary Slider */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Venit lunar net: <span className="text-green-600">{salary.toLocaleString('ro-RO')} RON</span>
        </label>
        <input
          type="range"
          min="3000"
          max="30000"
          step="500"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>3.000 RON</span>
          <span>30.000 RON</span>
        </div>
      </div>

      {/* Loan Term Slider */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Perioadă credit: <span className="text-green-600">{loanTerm} ani</span>
        </label>
        <input
          type="range"
          min="5"
          max="30"
          step="1"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>5 ani</span>
          <span>30 ani</span>
        </div>
      </div>

      {/* First Property Checkbox */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={firstProperty}
            onChange={(e) => setFirstProperty(e.target.checked)}
            className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <span className="ml-3 text-sm font-semibold text-gray-700">
            Prima proprietate imobiliară
          </span>
        </label>
      </div>

      {/* Results Section */}
      {results.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Cele mai bune oferte pentru tine:
          </h3>
          
          <div className="space-y-4">
            {results.slice(0, 3).map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  result.eligible
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-300 bg-red-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{result.bankName}</h4>
                    <p className="text-xs text-gray-600">{result.productType.substring(0, 40)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {Math.round(result.monthlyPayment).toLocaleString('ro-RO')} RON
                    </p>
                    <p className="text-xs text-gray-500">rată lunară</p>
                  </div>
                </div>

                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Grad îndatorare: </span>
                    <span className={`font-semibold ${
                      result.debtRatio <= 40 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {result.debtRatio.toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Dobândă: </span>
                    <span className="font-semibold text-gray-900">
                      {result.fixedRate ? `${result.fixedRate.toFixed(2)}% fix` : `${result.variableRate.toFixed(2)}% var`}
                    </span>
                  </div>
                </div>

                {!result.eligible && (
                  <p className="text-xs text-red-600 mt-2">
                    ⚠️ Grad îndatorare prea mare. Încearcă să mărești venitul sau să reduci suma.
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            onClick={() => alert('Lead form modal - coming soon!')}
          >
            Solicită oferte personalizate de la 5 brokeri →
          </button>
        </div>
      )}
    </div>
  );
}
