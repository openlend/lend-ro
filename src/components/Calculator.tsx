'use client';

import { useState, useEffect } from 'react';
import bankData from '@/data/bank-products.json';
import BankLogo from './BankLogo';
import LeadModal from './LeadModal';
import RangeSliderWithTooltip from './RangeSliderWithTooltip';

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
  const [salaryTransfer, setSalaryTransfer] = useState(true);
  const [fixedPeriod, setFixedPeriod] = useState<number | 'any' | 'variable'>('any');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState<CalculatorResult[]>([]);

  const minDownPayment = isFirstProperty ? 5 : 25;
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
        const productName = product.product_type.toLowerCase();
        
        // Exclude EURO products
        if (rateType.includes('EURO')) return false;
        
        // Filter by salary transfer preference
        if (salaryTransfer) {
          // User wants WITH salary transfer - only show products with "virare" or "SALARY"
          if (!productName.includes('virare') && !productName.includes('salary')) {
            return false;
          }
        } else {
          // User wants WITHOUT salary transfer - exclude products with "virare" or "SALARY"
          if (productName.includes('virare') || productName.includes('salary')) {
            return false;
          }
        }
        
        // Filter by fixed period preference
        if (fixedPeriod !== 'any') {
          if (fixedPeriod === 'variable') {
            // User wants ONLY variable (no fixed period)
            if (product.rates.fixed_years !== null) {
              return false;
            }
          } else {
            // User selected specific fixed period (3, 5)
            if (product.rates.fixed_years !== fixedPeriod) {
              return false;
            }
          }
        }
        
        return true;
      })
      .sort((a: any, b: any) => {
        // FIX: Compare EFFECTIVE rates (fixed OR ircc+margin), not just margin
        const rateA = a.rates.fixed_rate || (bankData.ircc_current + a.rates.variable_margin);
        const rateB = b.rates.fixed_rate || (bankData.ircc_current + b.rates.variable_margin);
        return rateA - rateB;
      });

    // Calculate max margin per bank (for DTI worst-case scenario)
    const maxMarginPerBank = new Map<string, number>();
    sortedProducts.forEach((product: any) => {
      const currentMax = maxMarginPerBank.get(product.bank) || 0;
      const productMargin = product.rates.variable_margin || 0;
      if (productMargin > currentMax) {
        maxMarginPerBank.set(product.bank, productMargin);
      }
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
      
      // Monthly payment: use fixed rate if available, else current variable rate
      const monthlyRate = rates.fixed_rate || (bankData.ircc_current + rates.variable_margin);
      const monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyRate, loanTerm);
      
      // DTI: ALWAYS use worst-case variable rate (max margin without benefits)
      const worstCaseMargin = maxMarginPerBank.get(bank) || rates.variable_margin;
      const worstCaseRate = bankData.ircc_current + worstCaseMargin;
      const worstCasePayment = calculateMonthlyPayment(loanAmount, worstCaseRate, loanTerm);
      const debtRatio = (worstCasePayment / salary) * 100;

      calculatedResults.push({
        monthlyPayment,
        debtRatio,
        eligible: debtRatio <= 40,
        bankName: bank,
        productType: product_type,
      });
    });

    setResults(calculatedResults);
  }, [propertyPrice, downPayment, salary, loanTerm, salaryTransfer, fixedPeriod]);

  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body p-4 md:p-8">
        <h2 className="card-title text-2xl md:text-4xl font-bold mb-2 md:mb-4">Calculează rata lunară</h2>
        <p className="text-base-content/70 text-sm md:text-base mb-4 md:mb-6">Ajustează parametrii și vezi instant cele mai bune oferte</p>

        <div className="space-y-3 md:space-y-5">
          <div>
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <span className="text-sm md:text-base font-semibold md:font-bold">Preț proprietate</span>
              <span className="text-xl md:text-2xl font-bold text-mint">{propertyPrice.toLocaleString('ro-RO')} RON</span>
            </div>
            <RangeSliderWithTooltip
              value={propertyPrice}
              min={100000}
              max={1500000}
              step={10000}
              onChange={setPropertyPrice}
              formatValue={(val) => `${(val / 1000).toFixed(0)}k`}
            />
            <div className="flex justify-between text-xs opacity-50 mt-1">
              <span>100.000</span>
              <span>1.500.000</span>
            </div>
            <div className="mt-1 text-center">
              <span className="text-xs opacity-70">Suma credit: </span>
              <span className="text-sm md:text-lg font-bold text-mint">{loanAmount.toLocaleString('ro-RO')} RON</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <span className="text-sm md:text-base font-semibold md:font-bold">Venit lunar net</span>
              <span className="text-xl md:text-2xl font-bold text-mint">{salary.toLocaleString('ro-RO')} RON</span>
            </div>
            <RangeSliderWithTooltip
              value={salary}
              min={3000}
              max={30000}
              step={500}
              onChange={setSalary}
              formatValue={(val) => `${(val / 1000).toFixed(1)}k`}
            />
            <div className="flex justify-between text-xs opacity-50 mt-1">
              <span>3.000</span>
              <span>30.000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <span className="text-sm md:text-base font-semibold md:font-bold">Perioadă creditare</span>
              <span className="text-xl md:text-2xl font-bold text-mint">{loanTerm} ani</span>
            </div>
            <RangeSliderWithTooltip
              value={loanTerm}
              min={5}
              max={30}
              step={1}
              onChange={setLoanTerm}
              formatValue={(val) => `${val}y`}
            />
            <div className="flex justify-between text-xs opacity-50 mt-1">
              <span>5 ani</span>
              <span>30 ani</span>
            </div>
          </div>

          <div className="flex items-center gap-3 py-1 md:py-2">
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
            <label htmlFor="firstProperty" className="text-xs md:text-sm text-gray-700 cursor-pointer leading-tight">
              Prima proprietate <span className="text-gray-500">(avans min. {minDownPayment}%)</span>
            </label>
          </div>

          <div className="flex items-center gap-3 py-1 md:py-2">
            <input 
              type="checkbox" 
              id="salaryTransfer"
              checked={salaryTransfer}
              onChange={(e) => setSalaryTransfer(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-gray-300"
              style={{ accentColor: '#4FD1C5' }}
            />
            <label htmlFor="salaryTransfer" className="text-xs md:text-sm text-gray-700 cursor-pointer leading-tight">
              Cu virare venit <span className="text-gray-500">(dobândă mai mică)</span>
            </label>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <span className="text-sm md:text-base font-semibold md:font-bold">Perioadă dobândă fixă</span>
              <span className="text-xl md:text-2xl font-bold text-mint">
                {fixedPeriod === 'any' ? 'Orice' : fixedPeriod === 'variable' ? 'Variabil' : `${fixedPeriod} ani`}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { value: 'any', label: 'Orice' },
                { value: 3, label: '3 ani' },
                { value: 5, label: '5 ani' },
                { value: 'variable', label: 'Variabil' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFixedPeriod(option.value as number | 'any' | 'variable')}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    fixedPeriod === option.value
                      ? 'bg-mint text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {fixedPeriod === 'variable' 
                ? 'Dobândă variabilă de la început (IRCC + marjă)'
                : fixedPeriod === 'any'
                ? 'Afișează toate produsele disponibile'
                : 'După perioada fixă, dobânda devine variabilă (IRCC + marjă)'
              }
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <span className="text-sm md:text-base font-semibold md:font-bold">Avans</span>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-bold text-mint">{downPayment}%</span>
                <div className="text-xs opacity-70">{(propertyPrice * downPayment / 100).toLocaleString('ro-RO')} RON</div>
              </div>
            </div>
            <RangeSliderWithTooltip
              value={downPayment}
              min={minDownPayment}
              max={50}
              step={5}
              onChange={setDownPayment}
              formatValue={(val) => `${val}%`}
            />
            <div className="flex justify-between text-xs opacity-50 mt-1">
              <span>{minDownPayment}%</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {results.length > 0 && (
          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Cele mai bune oferte:</h3>

            {results.map((result, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-mint/30 md:hover:-translate-y-1"
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  {/* Logo + Nume */}
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <BankLogo bankName={result.bankName} size="md" />
                    <div className="text-center">
                      <h4 className="font-black text-xl text-gray-900 mb-1">{result.bankName}</h4>
                      <p className="text-sm text-gray-600 font-medium">
                        {result.productType.replace(/\*+/g, "").substring(0, 40).trim()}
                      </p>
                    </div>
                  </div>

                  {/* Rată Lunară */}
                  <div className="text-center mb-4 py-4 bg-gray-50 rounded-xl">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Rată lunară</div>
                    <div className="text-4xl font-black text-gray-900 mb-1">
                      {Math.round(result.monthlyPayment).toLocaleString('ro-RO')}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">RON / lună</div>
                  </div>

                  {/* Îndatorare + Eligibil */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-mint/10 flex items-center justify-center flex-shrink-0 border-2 border-mint/20">
                        <span className="text-mint font-black text-base">{result.debtRatio.toFixed(0)}%</span>
                      </div>
                      <span className="text-sm text-gray-600 font-semibold">îndatorare</span>
                    </div>
                    
                    {result.eligible ? (
                      <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full font-bold text-sm border-2 border-sage/20">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Eligibil
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-sm border-2 border-red-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Depășit
                      </div>
                    )}
                  </div>

                  {/* Buton Aplică */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-mint text-white px-6 py-4 rounded-xl text-base font-black hover:bg-mint/90 transition-all shadow-md"
                  >
                    Aplică →
                  </button>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 items-center">
                  
                  {/* Logo + Bank Info */}
                  <div className="md:col-span-5 flex items-center gap-4">
                    <BankLogo bankName={result.bankName} size="md" />
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-1">{result.bankName}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {result.productType.replace(/\*+/g, "").substring(0, 35).trim()}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-mint font-bold text-sm">{result.debtRatio.toFixed(0)}%</span>
                        </div>
                        <span className="text-xs text-gray-500">îndatorare</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="md:col-span-1">
                    <div className="h-20 w-px bg-gray-200 mx-auto"></div>
                  </div>

                  {/* Rate + Badge */}
                  <div className="md:col-span-4 text-left">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Rată lunară</div>
                    <div className="text-5xl font-black text-gray-900 mb-1">
                      {Math.round(result.monthlyPayment).toLocaleString('ro-RO')}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">RON / lună</div>
                    {result.eligible ? (
                      <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full font-semibold text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Eligibil
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-semibold text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Depășit
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="md:col-span-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-mint text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-mint/90 transition-all group-hover:scale-105"
                    >
                      Aplică →
                    </button>
                  </div>

                </div>
              </div>
            ))}

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-sage text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:opacity-90 transition w-full mt-4 md:mt-6 shadow-xl"
            >
              Solicită oferte de la 5 brokeri
            </button>
          </div>
        )}
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        loanAmount={loanAmount}
        monthlyPayment={results.length > 0 ? results[0].monthlyPayment : 0}
      />
    </div>
  );
}
