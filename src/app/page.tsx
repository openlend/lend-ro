import Calculator from '@/components/Calculator';
import HeroSection from '@/components/HeroSection';
import SEOContent from '@/components/SEOContent';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <section id="calculator" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <Calculator />
          </div>
        </section>

        <section id="cum-functioneaza" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cum funcționează?
              </h2>
              <p className="text-xl text-gray-600">
                Un proces simplu în 3 pași
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Calculezi rata lunară
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Introduci datele tale în calculator și vezi instant ofertele de la 10+ bănci. Durează doar 2 minute.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                <div className="w-16 h-16 bg-sage rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Soliciti oferte personalizate
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Completezi formularul și primești 5 oferte competitive de la brokeri certificați în maxim 24 de ore.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Alegi cea mai bună ofertă
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compari ofertele și alegi pe cea cu cele mai bune condiții. 100% gratuit, fără obligații.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SEOContent />

        <FAQ />

        <section className="py-20 bg-gradient-to-br from-sage to-mint text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Începe să economisești astăzi
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Nu mai pierde timp căutând singur prin site-uri de bănci.<br />
              Găsește cel mai bun credit ipotecar în 24 de ore.
            </p>
            <a 
              href="#calculator" 
              className="inline-block bg-white text-sage px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Calculează rata acum →
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
