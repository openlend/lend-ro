'use client';

import BankLogo from './BankLogo';

export default function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero - Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-cream to-mint/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="text-xl">🏆</span>
              <span>Platformă #1 pentru credite ipotecare în România</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
              Găsim cel mai bun<br />
              credit pentru tine
            </h1>
            
            <p className="text-xl md:text-2xl text-sage font-bold mb-4">
              Garantat. Gratuit. În 24 de ore.
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Ne plătesc băncile, nu tu. Compară oferte de la <strong>12+ instituții</strong> fără niciun cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToCalculator}
                className="bg-sage text-white px-10 py-5 rounded-2xl font-black text-lg hover:opacity-90 transition shadow-xl hover:scale-105"
              >
                Calculează rata acum →
              </button>
              <button
                onClick={scrollToCalculator}
                className="bg-white text-sage border-2 border-sage px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sage hover:text-white transition shadow-lg"
              >
                Solicită 5 oferte gratuite
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-mint text-xl">✓</span>
                <span>Fără costuri ascunse</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mint text-xl">✓</span>
                <span>Proces 100% online</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mint text-xl">✓</span>
                <span>Răspuns în 24h</span>
              </div>
            </div>
          </div>

          {/* Stats Grid - Clean & Spaced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: '10+', label: 'Bănci partenere' },
              { value: '24h', label: 'Răspuns rapid' },
              { value: '5', label: 'Oferte personalizate' },
              { value: '100%', label: 'Gratuit' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-3xl md:text-4xl font-black text-mint mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm md:text-base mb-8 uppercase tracking-wider font-bold">
            Compară oferte de la 12+ bănci din România
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {['BT', 'BCR', 'ING', 'RAIFFEISEN', 'UNICREDIT', 'BRD', 'GARANTI', 'LIBRA', 'CREDIT EUROPE BANK', 'INTESA SAN PAOLO', 'PATRIA BANK', 'EXIM BANCA ROMANEASCA'].map((bank) => (
              <div key={bank} className="opacity-70 hover:opacity-100 transition-opacity">
                <BankLogo bankName={bank} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
