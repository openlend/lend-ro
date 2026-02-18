'use client';

export default function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hero min-h-[600px] bg-gradient-to-br from-primary to-primary-focus">
        <div className="hero-content text-center text-white">
          <div className="max-w-6xl">
            <h1 className="text-6xl font-black mb-6">
              Schimbă modul în care iei<br />
              <span className="text-warning">credite ipotecare</span>
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Compară oferte de la 10+ bănci din România.<br />
              Primești 5 oferte personalizate în 24 de ore.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={scrollToCalculator} className="btn btn-lg btn-warning text-black font-bold">
                Calculează rata →
              </button>
              <button className="btn btn-lg btn-outline btn-warning">
                Solicită oferte gratuite
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="stats shadow bg-white/10 backdrop-blur">
                <div className="stat place-items-center">
                  <div className="stat-value text-warning">10+</div>
                  <div className="stat-desc text-white">Bănci partenere</div>
                </div>
              </div>
              <div className="stats shadow bg-white/10 backdrop-blur">
                <div className="stat place-items-center">
                  <div className="stat-value text-info">24h</div>
                  <div className="stat-desc text-white">Răspuns rapid</div>
                </div>
              </div>
              <div className="stats shadow bg-white/10 backdrop-blur">
                <div className="stat place-items-center">
                  <div className="stat-value text-secondary">5</div>
                  <div className="stat-desc text-white">Oferte personalizate</div>
                </div>
              </div>
              <div className="stats shadow bg-white/10 backdrop-blur">
                <div className="stat place-items-center">
                  <div className="stat-value text-success">100%</div>
                  <div className="stat-desc text-white">Gratuit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-base-200">
        <div className="text-center text-sm font-semibold text-base-content/60 mb-4">
          COMPARĂ OFERTE DE LA BĂNCILE DE TOP
        </div>
        <div className="flex flex-wrap justify-center gap-8 opacity-50">
          {['BT', 'BCR', 'ING', 'Raiffeisen', 'UniCredit', 'BRD'].map((bank) => (
            <div key={bank} className="text-2xl font-black">{bank}</div>
          ))}
        </div>
      </div>
    </>
  );
}
