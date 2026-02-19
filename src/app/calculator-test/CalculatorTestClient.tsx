'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

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
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('mortgage')}
              className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'mortgage'
                  ? 'bg-[#00D186] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Imobiliar
            </button>
            <button
              onClick={() => setActiveTab('consumer')}
              className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
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
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#0B1B3E]">
                Suma creditului
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-32 px-3 py-1.5 border border-gray-300 rounded-lg text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                />
                <span className="text-sm font-medium text-gray-600">RON</span>
              </div>
            </div>
            <input
              type="range"
              min="50000"
              max="500000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#00D186] font-medium">50k</span>
              <span className="text-xs text-gray-400">500k</span>
            </div>
          </div>

          {/* Loan Period Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#0B1B3E]">
                Perioada creditului
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(Number(e.target.value))}
                  className="w-24 px-3 py-1.5 border border-gray-300 rounded-lg text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                />
                <span className="text-sm font-medium text-gray-600">ani</span>
              </div>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
            />
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
            <div className="space-y-4 pt-4 border-t border-gray-200">
              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-2">
                  Avans (%)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                  />
                  <div className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 flex items-center justify-center">
                    %
                  </div>
                </div>
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-2">
                  Venit lunar
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                  />
                  <div className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 flex items-center justify-center">
                    RON
                  </div>
                </div>
              </div>

              {/* First Home */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3E] mb-2">
                  Prima casă
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setFirstHome(true)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      firstHome
                        ? 'bg-[#00D186] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Da
                  </button>
                  <button
                    onClick={() => setFirstHome(false)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
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
                <label className="block text-sm font-medium text-[#0B1B3E] mb-2">
                  Vârsta
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00D186] focus:border-transparent"
                  />
                  <div className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 flex items-center justify-center">
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
        .slider-green::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00D186;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-green::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00D186;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-green::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #00D186 0%, #00D186 ${(loanAmount - 50000) / 4500}%, #e5e7eb ${(loanAmount - 50000) / 4500}%, #e5e7eb 100%);
        }
      `}</style>
    </div>
  );
}
