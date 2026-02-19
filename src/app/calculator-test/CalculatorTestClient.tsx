'use client';

import { useState } from 'react';

// SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

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

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 4V3a2 2 0 012-2h2a2 2 0 012 2v1M4 7h12M5 7l1 10a2 2 0 002 2h4a2 2 0 002-2l1-10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CalculatorTestClient() {
  const [activeTab, setActiveTab] = useState<'cash' | 'mortgage'>('cash');
  const [loanAmount, setLoanAmount] = useState(250000);
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [comparison, setComparison] = useState(3);

  return (
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="min-h-screen bg-[#F5F7FA] py-8 px-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="max-w-[420px] mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-2">
              {/* Logo - 3 vertical bars */}
              <div className="flex gap-0.5">
                <div className="w-1 h-5 bg-[#00D186] rounded-sm"></div>
                <div className="w-1 h-5 bg-[#00D186] rounded-sm opacity-70"></div>
                <div className="w-1 h-5 bg-[#00D186] rounded-sm opacity-40"></div>
              </div>
              <span className="text-xl font-bold text-[#0B1B3E]">lend.ro</span>
            </div>
            <button className="text-gray-600 hover:text-gray-900 p-1">
              <MenuIcon />
            </button>
          </div>

          <div className="px-6 pb-6">
            {/* Title */}
            <h2 className="text-2xl font-bold text-[#0B1B3E] mb-2 leading-tight">
              Găsește cel mai bun<br />credit
            </h2>

            {/* Social Proof */}
            <p className="text-sm text-gray-600 mb-1">
              În ultimele 7 zile pe site-ul nostru s-au trimis
            </p>
            <p className="text-lg font-bold text-[#00D186] mb-6">
              156 cereri
            </p>

            {/* Tabs with 3 dots */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex flex-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('cash')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors ${
                    activeTab === 'cash'
                      ? 'bg-[#00D186] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Consum
                </button>
                <button
                  onClick={() => setActiveTab('mortgage')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors ${
                    activeTab === 'mortgage'
                      ? 'bg-[#00D186] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Imobiliar
                </button>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <DotsVerticalIcon />
              </button>
            </div>

            {/* Loan Amount Slider */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-sm font-semibold text-[#0B1B3E]">
                  Suma creditului
                </label>
                <p className="text-xs text-gray-400">Cât necesitezi?</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex-1">
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #00D186 0%, #00D186 ${((loanAmount - 50000) / (500000 - 50000)) * 100}%, #e5e7eb ${((loanAmount - 50000) / (500000 - 50000)) * 100}%, #e5e7eb 100%)`
                    }}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 min-w-[130px]">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full text-right text-sm font-semibold text-gray-900 focus:outline-none"
                  />
                  <span className="text-sm text-gray-600">RON</span>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#00D186] font-medium">50k</span>
                <span className="text-gray-400">500k</span>
              </div>
            </div>

            {/* Loan Period Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-sm font-semibold text-[#0B1B3E]">
                  Perioada creditului
                </label>
                <p className="text-xs text-gray-400">Pe câți ani?</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex-1">
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
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 min-w-[130px]">
                  <input
                    type="number"
                    value={loanPeriod}
                    onChange={(e) => setLoanPeriod(Number(e.target.value))}
                    className="w-full text-right text-sm font-semibold text-gray-900 focus:outline-none"
                  />
                  <span className="text-sm text-gray-600">ani</span>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#00D186] font-medium">5 ani</span>
                <span className="text-gray-400">35 ani</span>
              </div>
            </div>

            {/* Advanced Search Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-[#0B1B3E] hover:text-[#00D186] transition-colors mb-6"
            >
              <span>Căutare detaliată</span>
              <div className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>
                <ChevronDownIcon />
              </div>
            </button>

            {/* Search Button */}
            <button className="w-full bg-[#0B1B3E] hover:bg-[#1a2b52] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md mb-4">
              <span>Caută oferte</span>
              <ArrowRightIcon />
            </button>

            {/* Comparison Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">În comparație:</span>
                <span className="text-lg font-bold text-[#0B1B3E]">{comparison}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <TrashIcon />
                </button>
                <button className="px-4 py-2 text-sm font-medium text-[#00D186] border border-[#00D186] rounded-lg hover:bg-[#00D186] hover:text-white transition-colors">
                  Vezi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>📊 Pagină test design - inspirată din niskarata.pl</p>
          <p className="mt-1">Noindex • Only for development</p>
        </div>
      </div>

      <style jsx global>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00D186;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 209, 134, 0.4);
          border: 3px solid #fff;
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
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
