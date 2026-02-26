import Calculator from '@/components/Calculator';
import HeroSection from '@/components/HeroSection';
import SEOContent from '@/components/SEOContent';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';
import ReadMore from '@/components/ReadMore';

export default function Home() {
  return (
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <StructuredData type="website" data={{}} />
      <StructuredData type="organization" data={{}} />
      <StructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Acasă', url: 'https://lend.ro' },
            { name: 'Calculator Credit Ipotecar', url: 'https://lend.ro/#calculator' },
          ]
        }} 
      />
      
      <main style={{ fontFamily: 'Rubik, sans-serif' }}>
        <HeroSection />

        <section id="calculator" className="py-0 md:py-12 lg:py-16 bg-[#F5F7FA]">
          <div className="max-w-full md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
            <Calculator />
          </div>
        </section>

        <SEOContent />

        <section id="cum-functioneaza" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#00D186] bg-opacity-10 text-[#00D186] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Proces simplu
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3E] mb-6">
                Cum funcționează?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                De la calcul la ofertă finală, totul online, transparent și <strong className="text-[#0B1B3E]">100% gratuit</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="group bg-[#F5F7FA] rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#00D186] rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🧮</span>
                </div>
                <div className="inline-block bg-[#00D186] bg-opacity-10 text-[#00D186] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Pas 1
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1B3E] mb-4">
                  Calculezi rata lunară
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Introduci datele tale în calculator și vezi <strong className="text-[#0B1B3E]">instant ofertele de la 12+ bănci</strong>. Durează doar 2 minute.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group bg-[#F5F7FA] rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#0B1B3E] rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">📧</span>
                </div>
                <div className="inline-block bg-[#0B1B3E] bg-opacity-10 text-[#0B1B3E] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Pas 2
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1B3E] mb-4">
                  Soliciti oferte personalizate
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Completezi formularul și primești <strong className="text-[#0B1B3E]">5 oferte competitive</strong> de la brokeri certificați în maxim 24 de ore.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group bg-[#F5F7FA] rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#00D186] rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">✅</span>
                </div>
                <div className="inline-block bg-[#00D186] bg-opacity-10 text-[#00D186] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Pas 3
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1B3E] mb-4">
                  Alegi cea mai bună ofertă
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compari ofertele și alegi pe cea cu <strong className="text-[#0B1B3E]">cele mai bune condiții</strong>. 100% gratuit, fără obligații.
                </p>
              </div>
            </div>

            {/* Process note */}
            <div className="text-center mt-16">
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                💡 <strong className="text-[#0B1B3E]">Important:</strong> Ne plătesc băncile prin comision, nu tu. Nu plătești nimic pentru comparare sau pentru ofertele primite.
              </p>
            </div>
          </div>
        </section>

        {/* Broker Benefits Section */}
        <section className="py-16 md:py-20 bg-[#F5F7FA]">
          <div className="px-0 md:px-6 md:container md:mx-auto md:max-w-5xl">
            <div className="text-center mb-12 px-6 md:px-0">
              <span className="inline-block bg-[#0B1B3E] bg-opacity-10 text-[#0B1B3E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                💼 Expertiză profesională
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B1B3E] mb-6">
                De ce să lucrezi cu un Broker autorizat?
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Procesul de creditare devine simplu, rapid și <strong className="text-[#0B1B3E]">complet gratuit</strong> pentru tine
              </p>
            </div>

            <div className="bg-white md:rounded-xl p-8 md:p-12 md:shadow-md">
              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00D186] flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xl flex-1">
                    <strong className="text-[#0B1B3E]">Economisești timp prețios</strong> - nu mai trebuie să mergi la toate băncile pentru a-ți face scoring. Primești rapid varianta care ți se potrivește, fără a diminua scorul FICO.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00D186] flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xl flex-1">
                    <strong className="text-[#0B1B3E]">Servicii gratuite</strong> - colaborarea cu un broker autorizat este complet gratuită pentru tine. Băncile îi plătesc comisionul, nu tu.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00D186] flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xl flex-1">
                    <strong className="text-[#0B1B3E]">Consultanță completă</strong> - nu trebuie să faci nimic. Brokerul se ocupă de întreg procesul de creditare, oferindu-ți consultanță financiară, juridică și de asigurări.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00D186] flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xl flex-1">
                    <strong className="text-[#0B1B3E]">Suport pe tot parcursul procesului</strong> - brokerul gestionează relația cu banca pe întreaga durată a procesului de creditare și intervine în diverse situații limită apărute.
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00D186] flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M3 8l4 4 6-8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xl flex-1">
                    <strong className="text-[#0B1B3E]">Negociere în favoarea ta</strong> - brokerul negociază cu băncile pentru a obține cele mai bune condiții și costuri reduse, atunci când profilul tău este bun.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center mb-6 text-lg">
                  🎯 <strong className="text-[#0B1B3E]">Peste 5 brokeri certificați</strong> vor primi solicitarea ta și îți vor trimite oferte competitive în maximum 24 de ore
                </p>
                <div className="text-center">
                  <a 
                    href="#calculator" 
                    className="inline-block bg-[#00D186] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00b874] transition-all shadow-md hover:shadow-lg"
                  >
                    Începe calculul acum →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B1B3E] to-[#162f5e] text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D186] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D186] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
            <div className="inline-block bg-[#00D186] bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Platformă #1 în România
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Începe să economisești astăzi
            </h2>
            
            <p className="text-lg md:text-xl mb-4 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Nu mai pierde timp căutând singur prin site-uri de bănci.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold mb-10">
              Găsește cel mai bun credit ipotecar în <span className="text-[#00D186]">24 de ore</span> 🎯
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#calculator" 
                className="inline-block bg-[#00D186] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00b874] transition-all shadow-lg hover:shadow-xl"
              >
                Calculează rata acum →
              </a>
              <a 
                href="/blog" 
                className="inline-block bg-white bg-opacity-10 text-white border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-20 transition-all"
              >
                Citește ghidul complet
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Fără obligații</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Răspuns în 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00D186] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>12+ bănci comparate</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
