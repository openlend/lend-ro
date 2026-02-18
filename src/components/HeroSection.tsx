'use client';

export default function HeroSection() {
  const scrollToCalculator = () => {
    const calcSection = document.getElementById('calculator');
    calcSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section - Dark Green */}
      <section className="relative bg-emerald-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                Schimbă modul<br />
                în care iei<br />
                <span className="text-lime-400">credite ipotecare</span>
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 mb-8 font-light leading-relaxed">
                Compară oferte de la 10+ bănci din România.<br />
                Primești 5 oferte personalizate în 24 de ore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToCalculator}
                  className="group bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-lime-400/20 hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Calculează rata
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => alert('Lead form - coming soon!')}
                  className="bg-emerald-800/50 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-800/70 transition-all"
                >
                  Solicită oferte gratuite
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl font-black text-lime-400 mb-2">10+</div>
                <div className="text-emerald-100 font-medium">Bănci partenere</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl font-black text-cyan-400 mb-2">24h</div>
                <div className="text-emerald-100 font-medium">Răspuns rapid</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl font-black text-orange-400 mb-2">5</div>
                <div className="text-emerald-100 font-medium">Oferte personalizate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl font-black text-rose-400 mb-2">100%</div>
                <div className="text-emerald-100 font-medium">Gratuit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider font-semibold">
            Compară oferte de la băncile de top
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['BT', 'BCR', 'ING', 'Raiffeisen', 'UniCredit', 'BRD'].map((bank) => (
              <div key={bank} className="text-2xl font-black text-gray-400">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
