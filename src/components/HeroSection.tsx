'use client';

export default function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero - ARK Style */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Găsim cel mai bun credit pentru tine.<br />
              <span className="text-sage">Garantat. Gratuit. În 24 de ore.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Ne plătesc băncile, nu tu. Compară oferte de la 12+ instituții fără niciun cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToCalculator}
                className="bg-sage text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition shadow-xl"
              >
                Calculează rata →
              </button>
              <button
                onClick={scrollToCalculator}
                className="bg-white text-sage border-2 border-sage px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-sage hover:text-white transition"
              >
                Solicită oferte gratuite
              </button>
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
      <section className="py-12 bg-white border-y border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-xs md:text-sm mb-6 uppercase tracking-wider font-semibold">
            Compară oferte de la băncile de top
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {['BT', 'BCR', 'ING', 'Raiffeisen', 'UniCredit', 'BRD'].map((bank) => (
              <div key={bank} className="text-xl md:text-2xl font-black text-gray-600">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
