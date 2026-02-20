'use client';

import Link from 'next/link';
import BankLogo from './BankLogo';

export default function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Hero - Clean & Modern */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F7FA] to-white" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Icon Badge */}
            <div className="mb-4">
              <span className="text-5xl">🏆</span>
            </div>
            
            {/* Hook */}
            <p className="text-lg md:text-xl text-[#00D186] font-semibold mb-6">
              Compară oferte de la 12+ bănci în 2 minute
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#0B1B3E] leading-tight mb-6">
              Găsim cel mai bun<br />
              credit pentru tine
            </h1>
            
            <p className="text-xl md:text-2xl text-[#00D186] font-semibold mb-4">
              Garantat. Gratuit. În 24 de ore.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Ne plătesc băncile, nu tu. Compară oferte de la <strong className="text-[#0B1B3E]">12+ instituții</strong> fără niciun cost.
            </p>
            
            <button
              onClick={scrollToCalculator}
              className="bg-[#0B1B3E] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#162f5e] transition shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <span>Calculează rata acum</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10h10M12 7l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Trust indicators - 4 benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                    <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Fără costuri ascunse</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                    <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Proces 100% online</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                    <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Răspuns în 24h</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-8 h-8 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                    <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Complet gratuit</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: '12+', label: 'Bănci partenere' },
              { value: '24h', label: 'Răspuns rapid' },
              { value: '5', label: 'Oferte personalizate' },
              { value: '100%', label: 'Gratuit pentru tine' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00D186] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-200" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-gray-600 text-sm md:text-base mb-8 uppercase tracking-wide font-semibold">
            Compară oferte de la 12+ bănci din România
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {[
              { name: 'BT', slug: 'bt' },
              { name: 'BCR', slug: 'bcr' },
              { name: 'ING', slug: 'ing' },
              { name: 'RAIFFEISEN', slug: 'raiffeisen' },
              { name: 'UNICREDIT', slug: 'unicredit' },
              { name: 'BRD', slug: 'brd' },
              { name: 'GARANTI', slug: 'garanti' },
              { name: 'LIBRA BANK', slug: 'libra' },
              { name: 'CREDIT EUROPE BANK', slug: 'credit-europe' },
              { name: 'INTESA SAN PAOLO', slug: 'intesa' },
              { name: 'PATRIA BANK', slug: 'patria' },
              { name: 'EXIM BANCA ROMANEASCA', slug: 'exim' }
            ].map((bank) => (
              <Link 
                key={bank.name} 
                href={`/banci/${bank.slug}`}
                className="opacity-70 hover:opacity-100 transition-all hover:scale-105 cursor-pointer"
                title={`Vezi detalii ${bank.name}`}
              >
                <BankLogo bankName={bank.name} size="sm" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
