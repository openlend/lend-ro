'use client';

import { useState, useMemo } from 'react';
import bankProducts from '@/data/bank-products.json';
import BankLogo from './BankLogo';
import LeadModal from './LeadModal';

// SVG Icons
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DotsVerticalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <circle cx="10" cy="5" r="1.5"/>
    <circle cx="10" cy="10" r="1.5"/>
    <circle cx="10" cy="15" r="1.5"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 10h10M12 7l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 7v4M8 4.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

interface BankProduct {
  bank: string;
  product_type: string;
  rate_type: string;
  rates: {
    fixed_rate: number | null;
    fixed_years: number | null;
    variable_margin: number | null;
    index_type: string;
    raw: string;
  };
}

interface BankProductsData {
  products: BankProduct[];
  ircc_current: number;
}

// IRCC from JSON data
const bankProductsData = bankProducts as unknown as BankProductsData;
const IRCC = bankProductsData.ircc_current;

// Helper function to format numbers with comma separator
const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US'); // 250,000 format
};

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<'consumer' | 'mortgage'>('mortgage');
  const [loanAmount, setLoanAmount] = useState(250000);
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<{ bank: string; monthlyPayment: number } | null>(null);
  const [activeDtiTooltip, setActiveDtiTooltip] = useState<number | null>(null);

  // Advanced parameters
  const [downPayment, setDownPayment] = useState(15);
  const [monthlyIncome, setMonthlyIncome] = useState(8000);
  const [secondProperty, setSecondProperty] = useState(false);
  const [showDownPaymentInfo, setShowDownPaymentInfo] = useState(false);
  const [showIncomeInfo, setShowIncomeInfo] = useState(false);
  const [hasDividendIncome, setHasDividendIncome] = useState(false);
  const [showDividendInfo, setShowDividendInfo] = useState(false);
  const [isEmployedAtOwnCompany, setIsEmployedAtOwnCompany] = useState<boolean | null>(null);

  // Enforce minimum 25% down payment for second property (mortgage only)
  const isSecondLoan = secondProperty;
  const minDownPayment = isSecondLoan && activeTab === 'mortgage' ? 25 : 5;
  const effectiveDownPayment = Math.max(downPayment, minDownPayment);
  
  // Label text changes based on tab
  const secondLoanLabel = activeTab === 'mortgage' ? 'Al doilea imobil' : 'Al doilea consum';
  const secondLoanTooltip = activeTab === 'mortgage' 
    ? 'Pentru al doilea imobil, băncile solicită avans minim 25% (față de 5% pentru prima proprietate).'
    : 'Pentru al doilea credit de consum, băncile pot solicită garanții suplimentare și dobânzi mai mari.';

  // Calculate eligible banks with monthly payments
  const eligibleBanks = useMemo(() => {
    // Use all products (no type filter for now - all are mortgage products)
    const products = bankProductsData.products;

    const results = products.map(product => {
      // Calculate effective interest rate
      const effectiveRate = product.rates.fixed_rate || (IRCC + (product.rates.variable_margin || 0));
      const monthlyRate = effectiveRate / 100 / 12;
      const numPayments = loanPeriod * 12;

      // Monthly payment formula
      const monthlyPayment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);

      // DTI (Debt-to-Income) ratio
      const dtiRatio = (monthlyPayment / monthlyIncome) * 100;

      // Check eligibility (simplified - assume all meet requirements)
      const meetsDTI = dtiRatio <= 40; // Max 40% DTI

      return {
        bank: product.bank,
        productName: product.product_type,
        effectiveRate,
        fixedPeriod: product.rates.fixed_years,
        monthlyPayment,
        dtiRatio,
        eligible: meetsDTI,
        requiresSalaryTransfer: product.product_type.toLowerCase().includes('virare'),
        requiresDebitCard: false,
        requiresInsurance: false
      };
    });

    // Sort by monthly payment (best first)
    return results.sort((a, b) => a.monthlyPayment - b.monthlyPayment);
  }, [loanAmount, loanPeriod, monthlyIncome]);

  // Get best product per bank (show ALL, not just eligible)
  const bestPerBank = useMemo(() => {
    const bankMap = new Map();
    eligibleBanks
      // Remove .filter(b => b.eligible) - show ALL banks even if DTI > 40%
      .forEach(bank => {
        if (!bankMap.has(bank.bank) || bankMap.get(bank.bank).monthlyPayment > bank.monthlyPayment) {
          bankMap.set(bank.bank, bank);
        }
      });
    return Array.from(bankMap.values()); // All 12 banks
  }, [eligibleBanks]);

  const handleSearch = () => {
    setShowResults(true);
    // Scroll smooth to results after a short delay (to allow render)
    setTimeout(() => {
      document.getElementById('search-results')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="bg-[#F5F7FA] py-0 md:py-8 px-0 md:px-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="max-w-full md:max-w-[440px] mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-none md:rounded-2xl shadow-none md:shadow-lg overflow-hidden">
            <div className="px-6 py-6">
              {/* Title */}
              <h2 className="text-2xl font-bold text-[#0B1B3E] mb-1 leading-tight">
                Găsește cel mai bun<br />credit
              </h2>

              {/* Social Proof */}
              <p className="text-sm text-gray-600 mb-0.5">
                În ultimele 7 zile pe site-ul nostru s-au trimis
              </p>
              <p className="text-lg font-bold text-[#00D186] mb-6">
                156 cereri
              </p>

              {/* Tabs with 3 dots */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex flex-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('mortgage')}
                    className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-all ${
                      activeTab === 'mortgage'
                        ? 'bg-[#00D186] text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Imobiliar
                  </button>
                  <button
                    onClick={() => setActiveTab('consumer')}
                    className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-all ${
                      activeTab === 'consumer'
                        ? 'bg-[#00D186] text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Consum
                  </button>
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setShowDotsMenu(!showDotsMenu)}
                    className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <DotsVerticalIcon />
                  </button>
                  
                  {showDotsMenu && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowDotsMenu(false)}
                      ></div>
                      <div className="absolute right-0 top-12 z-20 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                        <button 
                          onClick={() => {
                            setLoanAmount(250000);
                            setLoanPeriod(25);
                            setDownPayment(15);
                            setMonthlyIncome(8000);
                            setSecondProperty(false);
                            setShowDotsMenu(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          🔄 Reset valori
                        </button>
                        <button 
                          onClick={() => {
                            const url = window.location.href;
                            navigator.clipboard.writeText(url);
                            alert('Link copiat în clipboard!');
                            setShowDotsMenu(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          🔗 Distribuie
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Loan Amount */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-semibold text-[#0B1B3E]">
                    Suma creditului
                  </label>
                  <p className="text-xs text-gray-400">Cât necesitezi?</p>
                </div>
                
                {/* Slider - full width */}
                <div className="mb-2">
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #00D186 0%, #00D186 ${((loanAmount - 50000) / (1000000 - 50000)) * 100}%, #e5e7eb ${((loanAmount - 50000) / (1000000 - 50000)) * 100}%, #e5e7eb 100%)`
                    }}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#00D186] font-medium">50k</span>
                  
                  {/* Input Box - right aligned */}
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
                    <input
                      type="text"
                      value={formatNumber(loanAmount)}
                      onChange={(e) => {
                        const value = e.target.value.replace(/,/g, '');
                        const num = parseInt(value) || 0;
                        if (num >= 50000 && num <= 1000000) {
                          setLoanAmount(num);
                        }
                      }}
                      className="w-24 text-right text-sm font-semibold text-gray-900 focus:outline-none bg-transparent"
                    />
                    <span className="text-sm text-gray-600 font-medium">RON</span>
                  </div>
                  
                  <span className="text-gray-400">1M</span>
                </div>
              </div>

              {/* Loan Period */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-semibold text-[#0B1B3E]">
                    Perioada creditului
                  </label>
                  <p className="text-xs text-gray-400">Pe câți ani?</p>
                </div>
                
                {/* Slider - full width */}
                <div className="mb-2">
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={loanPeriod}
                    onChange={(e) => setLoanPeriod(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #00D186 0%, #00D186 ${((loanPeriod - 5) / (35 - 5)) * 100}%, #e5e7eb ${((loanPeriod - 5) / (35 - 5)) * 100}%, #e5e7eb 100%)`
                    }}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#00D186] font-medium">5 ani</span>
                  
                  {/* Input Box - center aligned */}
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
                    <input
                      type="number"
                      value={loanPeriod}
                      onChange={(e) => setLoanPeriod(Number(e.target.value))}
                      className="w-16 text-right text-sm font-semibold text-gray-900 focus:outline-none bg-transparent"
                    />
                    <span className="text-sm text-gray-600 font-medium">ani</span>
                  </div>
                  
                  <span className="text-gray-400">35 ani</span>
                </div>
              </div>

              {/* Advanced Search Toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-[#0B1B3E] hover:text-[#00D186] transition-colors"
              >
                <span>Căutare detaliată</span>
                <div className={`transform transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon />
                </div>
              </button>

              {/* Advanced Parameters Section */}
              {showAdvanced && (
                <div className="space-y-4 pt-2 pb-4 border-t border-gray-200">
                  <div className="flex items-start justify-between gap-4">
                    {/* Second Property/Loan Checkbox - Left */}
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="checkbox"
                        id="secondProperty"
                        checked={secondProperty}
                        onChange={(e) => {
                          setSecondProperty(e.target.checked);
                          if (e.target.checked && activeTab === 'mortgage' && downPayment < 25) {
                            setDownPayment(25);
                          }
                        }}
                        className="w-4 h-4 text-[#00D186] bg-gray-100 border-gray-300 rounded focus:ring-[#00D186] focus:ring-2"
                      />
                      <label htmlFor="secondProperty" className="text-sm text-[#0B1B3E] font-medium cursor-pointer">
                        {secondLoanLabel}
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowDownPaymentInfo(!showDownPaymentInfo)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <InfoIcon />
                        </button>
                        {showDownPaymentInfo && (
                          <>
                            <div 
                              className="fixed inset-0 z-40 bg-black bg-opacity-30 animate-fadeIn" 
                              onClick={() => setShowDownPaymentInfo(false)}
                            ></div>
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 max-w-[90vw] p-4 bg-[#0B1B3E] text-white text-sm rounded-xl shadow-2xl animate-slideUp">
                              <button
                                onClick={() => setShowDownPaymentInfo(false)}
                                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-lg"
                              >
                                ×
                              </button>
                              <div className="pr-6">
                                {secondLoanTooltip}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Dividend Income Checkbox - Right */}
                    <div className="flex items-center gap-2 flex-1 justify-end">
                      <input
                        type="checkbox"
                        id="dividendIncome"
                        checked={hasDividendIncome}
                        onChange={(e) => {
                          setHasDividendIncome(e.target.checked);
                          if (!e.target.checked) {
                            setIsEmployedAtOwnCompany(null);
                          }
                        }}
                        className="w-4 h-4 text-[#00D186] bg-gray-100 border-gray-300 rounded focus:ring-[#00D186] focus:ring-2"
                      />
                      <label htmlFor="dividendIncome" className="text-sm text-[#0B1B3E] font-medium cursor-pointer whitespace-nowrap">
                        Dividende
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowDividendInfo(!showDividendInfo)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <InfoIcon />
                        </button>
                        {showDividendInfo && (
                          <>
                            <div 
                              className="fixed inset-0 z-40 bg-black bg-opacity-30 animate-fadeIn" 
                              onClick={() => setShowDividendInfo(false)}
                            ></div>
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 max-w-[90vw] p-4 bg-[#0B1B3E] text-white text-sm rounded-xl shadow-2xl animate-slideUp">
                              <button
                                onClick={() => setShowDividendInfo(false)}
                                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-lg"
                              >
                                ×
                              </button>
                              <div className="pr-6">
                                <strong className="block mb-1">Venit din dividende</strong>
                                Dacă ai venit din dividende, te putem ajuta. Multe bănci acceptă, dar trebuie să știm din timp pentru a pregăti documentația necesară.
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Employed at Own Company - appears only if dividend income is checked */}
                  {hasDividendIncome && (
                    <div className="ml-6 flex items-center gap-4">
                      <span className="text-sm text-[#0B1B3E] font-medium">Ești angajat la firma ta?</span>
                      <div className="flex gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="employedAtOwnCompany"
                            checked={isEmployedAtOwnCompany === true}
                            onChange={() => setIsEmployedAtOwnCompany(true)}
                            className="w-4 h-4 text-[#00D186] border-gray-300 focus:ring-[#00D186] focus:ring-2"
                          />
                          <span className="text-sm text-gray-700">Da</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="employedAtOwnCompany"
                            checked={isEmployedAtOwnCompany === false}
                            onChange={() => setIsEmployedAtOwnCompany(false)}
                            className="w-4 h-4 text-[#00D186] border-gray-300 focus:ring-[#00D186] focus:ring-2"
                          />
                          <span className="text-sm text-gray-700">Nu</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Down Payment */}
                  <div>
                    <label className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
                      Avans
                      {secondProperty && (
                        <span className="text-[#00D186] font-medium">(minim 25%)</span>
                      )}
                    </label>
                    <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                      <input
                        type="number"
                        min={minDownPayment}
                        max="50"
                        value={effectiveDownPayment}
                        onChange={(e) => setDownPayment(Math.max(minDownPayment, Number(e.target.value)))}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                      />
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium min-w-[50px] text-center">
                        %
                      </div>
                    </div>
                  </div>

                  {/* Monthly Income */}
                  <div>
                    <label className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
                      Venit net lunar
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowIncomeInfo(!showIncomeInfo)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <InfoIcon />
                        </button>
                        {showIncomeInfo && (
                          <>
                            <div 
                              className="fixed inset-0 z-40 bg-black bg-opacity-30 animate-fadeIn" 
                              onClick={() => setShowIncomeInfo(false)}
                            ></div>
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 max-w-[90vw] p-4 bg-[#0B1B3E] text-white text-sm rounded-xl shadow-2xl animate-slideUp">
                              <button
                                onClick={() => setShowIncomeInfo(false)}
                                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-lg"
                              >
                                ×
                              </button>
                              <div className="pr-6">
                                <strong className="block mb-1">Venit net lunar</strong>
                                Venitul net lunar (după taxe) este folosit pentru calculul gradului de îndatorare. Băncile acceptă max 40-45% din venit pentru rate.
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </label>
                    <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                      <input
                        type="text"
                        value={formatNumber(monthlyIncome)}
                        onChange={(e) => {
                          const value = e.target.value.replace(/,/g, '');
                          const num = parseInt(value) || 0;
                          setMonthlyIncome(num);
                        }}
                        onBlur={(e) => {
                          // Set minimum 1000 RON on blur if empty
                          if (monthlyIncome < 1000) {
                            setMonthlyIncome(1000);
                          }
                        }}
                        placeholder="ex: 8,000"
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                      />
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium min-w-[60px] text-center">
                        RON
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="w-full bg-[#0B1B3E] hover:bg-[#162f5e] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md mt-4"
              >
                <span>Caută oferte</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          {/* Results Section */}
          {showResults && bestPerBank.length > 0 && (
            <div id="search-results" className="mt-6 bg-white rounded-none md:rounded-2xl shadow-none md:shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#0B1B3E] mb-6">
                {bestPerBank.length} {bestPerBank.length === 1 ? 'ofertă găsită' : 'oferte găsite'} pentru tine
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bestPerBank.map((bank, index) => (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-[#00D186] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <BankLogo bankName={bank.bank} size="md" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#0B1B3E]">
                          {formatNumber(Math.round(bank.monthlyPayment))} RON
                        </div>
                        <div className="text-sm text-gray-500">
                          rată lunară
                        </div>
                      </div>
                    </div>
                    
                    {/* DTI Warning Banner */}
                    {bank.dtiRatio > 40 && (
                      <div className="mb-3 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 text-lg leading-none">⚠️</span>
                          <div className="text-xs text-orange-700">
                            <strong>DTI ridicat:</strong> S-ar putea să fie nevoie de venit suplimentar sau co-debitor pentru această sumă.
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div>
                        <span className="text-gray-500">Dobândă: </span>
                        <span className="font-semibold text-[#0B1B3E]">
                          {bank.effectiveRate.toFixed(2)}%
                        </span>
                      </div>
                      <div className="relative">
                        <span className="text-gray-500">DTI: </span>
                        <span className="font-semibold text-[#0B1B3E]">
                          {bank.dtiRatio.toFixed(1)}%
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveDtiTooltip(activeDtiTooltip === index ? null : index)}
                          className="inline-block ml-1 text-gray-400 hover:text-gray-600 transition-colors align-middle"
                        >
                          <InfoIcon />
                        </button>
                        {activeDtiTooltip === index && (
                          <>
                            <div 
                              className="fixed inset-0 z-40 bg-black bg-opacity-30 animate-fadeIn" 
                              onClick={() => setActiveDtiTooltip(null)}
                            ></div>
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 max-w-[90vw] p-4 bg-[#0B1B3E] text-white text-sm rounded-xl shadow-2xl animate-slideUp">
                              <button
                                onClick={() => setActiveDtiTooltip(null)}
                                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-lg"
                              >
                                ×
                              </button>
                              <div className="pr-6">
                                <strong className="block mb-1">DTI (Debt-to-Income)</strong>
                                Procentul din venitul tău lunar care merge la plata ratei. Băncile acceptă max 40-45% DTI. Dacă DTI &gt; 40%, s-ar putea să nu fii eligibil.
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {bank.fixedPeriod && (
                      <div className="text-xs text-gray-500 mb-3">
                        Perioadă fixă: {bank.fixedPeriod} ani
                      </div>
                    )}

                    <div className="flex gap-2 text-xs mb-3">
                      {bank.requiresSalaryTransfer && (
                        <span className="px-2 py-1 bg-[#00D186] bg-opacity-10 text-[#00D186] rounded">
                          Virament salariu
                        </span>
                      )}
                      {bank.requiresDebitCard && (
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">
                          Card debit
                        </span>
                      )}
                      {bank.requiresInsurance && (
                        <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded">
                          Asigurare
                        </span>
                      )}
                    </div>

                    <button 
                      onClick={() => {
                        setSelectedBank({ bank: bank.bank, monthlyPayment: bank.monthlyPayment });
                        setLeadModalOpen(true);
                      }}
                      className="w-full bg-[#00D186] hover:bg-[#00b874] text-white font-semibold py-2.5 rounded-lg transition-colors"
                    >
                      Solicită ofertă
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lead Modal */}
          {selectedBank && (
            <LeadModal
              isOpen={leadModalOpen}
              onClose={() => {
                setLeadModalOpen(false);
                setSelectedBank(null);
              }}
              loanAmount={loanAmount}
              monthlyPayment={selectedBank.monthlyPayment}
            />
          )}
        </div>

        <style jsx global>{`
          .slider-thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #00D186;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0, 209, 134, 0.4);
            border: 3px solid #fff;
          }

          .slider-thumb::-moz-range-thumb {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #00D186;
            cursor: pointer;
            border: 3px solid #fff;
            box-shadow: 0 2px 6px rgba(0, 209, 134, 0.4);
          }
        `}</style>
      </div>
    </>
  );
}
