import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'Calculator - Compară rate și găsește cel mai bun credit | Lend.ro',
  description: 'Folosește calculatorul nostru pentru a compara ratele la credit de la multiple bănci. Rapid, gratuit și transparent.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function CalculatorLP() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <StructuredData type="website" data={{}} />
      <link rel="canonical" href="https://lend.ro/instrumente/calculator-rate" />

      <main style={{ fontFamily: 'Rubik, sans-serif' }}>
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#F5F7FA] to-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-base md:text-lg text-gray-600 mb-4">Calculator credit</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1B3E] mb-4">
              Calculează rata în 2 minute
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Introdu detaliile pentru a compara ofertele a 12+ bănci și a găsi cea mai avantajoasă variantă.
            </p>
            <a href="#calculator" className="inline-block bg-[#00D186] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00b874] transition shadow-md">
              Începe calculul →
            </a>
          </div>
        </section>

        <section id="calculator" className="py-8 md:py-12 lg:py-16 bg-[#F5F7FA]">
          <div className="container mx-auto px-6">
            <Calculator />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">De ce să folosești calculatorul nostru?</h2>
            <p className="text-gray-600 mb-6">Compari rapid oferte reale, primești estimări oneste și economisești timp prețios.</p>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
