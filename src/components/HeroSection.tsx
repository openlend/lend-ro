'use client';

export default function HeroSection() {
  const scrollToCalculator = () => {
    const calcSection = document.getElementById('calculator');
    calcSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Găsește cel mai bun credit ipotecar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Compară oferte de la peste 10 bănci din România.<br />
              Primești 5 oferte personalizate în 24 de ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors text-lg"
                onClick={scrollToCalculator}
              >
                Calculează rata →
              </button>
              <button
                className="bg-green-700 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-900 transition-colors text-lg border-2 border-white"
                onClick={() => alert('Lead form - coming soon!')}
              >
                Solicită oferte gratuite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-600">10+</p>
              <p className="text-sm text-gray-600">Bănci partenere</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
            <div>
              <p className="text-4xl font-bold text-green-600">24h</p>
              <p className="text-sm text-gray-600">Răspuns rapid</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
            <div>
              <p className="text-4xl font-bold text-green-600">5</p>
              <p className="text-sm text-gray-600">Oferte personalizate</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
            <div>
              <p className="text-4xl font-bold text-green-600">100%</p>
              <p className="text-sm text-gray-600">Gratuit</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
