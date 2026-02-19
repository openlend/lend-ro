'use client';

import Link from 'next/link';
import BankLogo from './BankLogo';

export default function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero - Premium */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-white via-cream to-mint/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-mint/10 text-mint px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-extrabold mb-6 md:mb-8">
              <span className="text-lg md:text-xl">🏆</span>
              <span className="leading-tight">Platformă #1 pentru credite ipotecare în România</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-4 md:mb-6 px-2">
              Găsim cel mai bun<br />
              credit pentru tine
            </h1>
            
            <p className="text-xl md:text-2xl text-sage font-black mb-3 md:mb-4">
              Garantat. Gratuit. În 24 de ore.
            </p>
            
            <p className="text-base md:text-xl text-gray-800 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-2 font-medium">
              Ne plătesc băncile, nu tu. Compară oferte de la <strong>12+ instituții</strong> fără niciun cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
              <button
                onClick={scrollToCalculator}
                className="bg-sage text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:opacity-90 transition shadow-xl hover:scale-105"
              >
                Calculează rata acum →
              </button>
              <button
                onClick={scrollToCalculator}
                className="bg-white text-sage border-2 border-sage px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-sage hover:text-white transition shadow-lg"
              >
                Solicită 5 oferte gratuite
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10 text-xs md:text-sm text-gray-700 font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-mint text-lg md:text-xl font-black">✓</span>
                <span>Fără costuri ascunse</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mint text-lg md:text-xl font-black">✓</span>
                <span>Proces 100% online</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mint text-lg md:text-xl font-black">✓</span>
                <span>Răspuns în 24h</span>
              </div>
            </div>
          </div>

          {/* Stats Grid - Clean & Spaced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto px-2">
            {[
              { value: '10+', label: 'Bănci partenere' },
              { value: '24h', label: 'Răspuns rapid' },
              { value: '5', label: 'Oferte personalizate' },
              { value: '100%', label: 'Gratuit' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-3xl md:text-4xl font-black text-mint mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-700 font-bold leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-10 md:py-16 bg-white border-y border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-gray-600 text-xs md:text-base mb-6 md:mb-8 uppercase tracking-wider font-extrabold">
            Compară oferte de la 12+ bănci din România
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center">
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
