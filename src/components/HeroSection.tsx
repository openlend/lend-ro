'use client';

export default function HeroSection() {
  const scrollToCalculator = () => {
    const calcSection = document.getElementById('calculator');
    calcSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section - Modern Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white py-24">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              Găsește cel mai bun<br />
              <span className="text-white bg-clip-text">credit ipotecar</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-emerald-50 font-light">
              Compară oferte de la <strong className="font-bold">10+ bănci</strong> din România<br />
              Primești oferte personalizate în <strong className="font-bold">24 ore</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button
                className="group bg-white text-emerald-600 font-bold py-5 px-10 rounded-2xl hover:bg-emerald-50 shadow-2xl hover:shadow-emerald-200/50 transform hover:-translate-y-1 text-lg"
                onClick={scrollToCalculator}
              >
                <span className="flex items-center gap-3">
                  Calculează rata
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                className="bg-emerald-700/50 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-5 px-10 rounded-2xl hover:bg-emerald-700/70 shadow-xl text-lg"
                onClick={() => alert('Lead form - coming soon!')}
              >
                Solicită oferte gratuite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Modern Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover-lift min-w-[140px]">
              <p className="text-5xl font-black text-emerald-600 mb-2">10+</p>
              <p className="text-sm font-medium text-gray-700">Bănci partenere</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover-lift min-w-[140px]">
              <p className="text-5xl font-black text-blue-600 mb-2">24h</p>
              <p className="text-sm font-medium text-gray-700">Răspuns rapid</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover-lift min-w-[140px]">
              <p className="text-5xl font-black text-purple-600 mb-2">5</p>
              <p className="text-sm font-medium text-gray-700">Oferte personalizate</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover-lift min-w-[140px]">
              <p className="text-5xl font-black text-amber-600 mb-2">100%</p>
              <p className="text-sm font-medium text-gray-700">Gratuit</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
