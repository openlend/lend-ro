'use client';

import { useState } from 'react';

// Inline SVG icons
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

export default function CalculatorTestClient() {
  const [activeTab, setActiveTab] = useState<'mortgage' | 'consumer'>('mortgage');
  const [loanAmount, setLoanAmount] = useState(250000);
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Advanced parameters
  const [downPayment, setDownPayment] = useState(15);
  const [monthlyIncome, setMonthlyIncome] = useState(8000);
  const [firstHome, setFirstHome] = useState(true);
  const [age, setAge] = useState(35);

  // Simple calculation (placeholder - va fi înlocuit cu logica reală)
  const monthlyRate = Math.round((loanAmount * 0.00625) / (1 - Math.pow(1 + 0.00625, -loanPeriod * 12)));

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo placeholder - optional */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0B1B3E]">lend.ro</h1>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Title */}
          <h2 className="text-xl font-semibold text-[#0B1B3E] mb-6">
            Găsește cel mai bun credit
          </h2>

          {/* Tabs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setActiveTab('mortgage')}
              className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'mortgage'
                  ? 'bg-[#00D186] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Imobiliar
            </button>
            <button
              onClick={() => setActiveTab('consumer')}
              className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'consumer'
                  ? 'bg-[#00D186] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Consum
            </button>
          </div>

          {/* Loan Amount Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-[#0B1B3E]">
                Suma creditului
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-28 px-3 py-2 border border-gray-300 rounded-lg text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                />
                <span className="text-sm font-medium text-gray-600 w-10">RON</span>
              </div>
            </div>
            <div className="relative">
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
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#00D186] font-medium">50k</span>
              <span className="text-xs text-gray-400">500k</span>
            </div>
          </div>

          {/* Loan Period Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-[#0B1B3E]">
                Perioada creditului
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(Number(e.target.value))}
                  className="w-28 px-3 py-2 border border-gray-300 rounded-lg text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                />
                <span className="text-sm font-medium text-gray-600 w-10">ani</span>
              </div>
            </div>
            <div className="relative">
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
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#00D186] font-medium">5 ani</span>
              <span className="text-xs text-gray-400">35 ani</span>
            </div>
          </div>

          {/* Advanced Parameters Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full py-3 text-sm font-medium text-[#0B1B3E] hover:text-[#00D186] transition-colors"
          >
            <span>Parametri suplimentari</span>
            {showAdvanced ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>

          {/* Advanced Parameters Section */}
          {showAdvanced && (
            <div className="space-y-5 pt-4 mt-2 border-t border-gray-200">
              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-3">
                  Avans
                </label>
                <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                  />
                  <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium">
                    %
                  </div>
                </div>
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-3">
                  Venit lunar
                </label>
                <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                  />
                  <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium">
                    RON
                  </div>
                </div>
              </div>

              {/* First Home */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-3">
                  Prima casă
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFirstHome(true)}
                    className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                      firstHome
                        ? 'bg-[#00D186] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Da
                  </button>
                  <button
                    onClick={() => setFirstHome(false)}
                    className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                      !firstHome
                        ? 'bg-[#00D186] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Nu
                  </button>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-3">
                  Vârsta
                </label>
                <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                  />
                  <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium">
                    ani
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Monthly Payment Preview */}
          <div className="mt-6 p-4 bg-gradient-to-br from-[#F5F7FA] to-gray-100 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Rata lunară estimată</div>
            <div className="text-3xl font-bold text-[#00D186]">
              {monthlyRate.toLocaleString('ro-RO')} RON
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Calculat cu dobândă estimativă 7.5% (IRCC + marjă medie)
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-6 py-3.5 px-6 bg-[#0B1B3E] text-white font-semibold rounded-lg hover:bg-[#1a2b52] transition-colors shadow-md">
            Caută oferte
          </button>
        </div>

        {/* Test Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
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
          border: 2px solid #fff;
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00D186;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 209, 134, 0.4);
        }

        .slider-thumb::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 4px;
        }

        .slider-thumb::-moz-range-track {
          height: 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
