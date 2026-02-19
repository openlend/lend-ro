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
      
      <main>
        <HeroSection />

        <section id="calculator" className="py-0 md:py-12 bg-[#F5F7FA]">
          <div className="max-w-full md:max-w-6xl md:mx-auto md:px-6">
            <Calculator />
          </div>
        </section>

        <section id="cum-functioneaza" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-bold mb-4">
                Proces simplu
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                Cum funcționează?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                De la calcul la ofertă finală, totul online, transparent și <strong>100% gratuit</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-mint/30 text-center hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-mint to-mint/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-5xl">🧮</span>
                </div>
                <div className="inline-block bg-mint/10 text-mint px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Pas 1
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Calculezi rata lunară
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Introduci datele tale în calculator și vezi <strong>instant ofertele de la 12+ bănci</strong>. Durează doar 2 minute.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-sage/30 text-center hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-sage to-sage/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-5xl">📧</span>
                </div>
                <div className="inline-block bg-sage/10 text-sage px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Pas 2
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Soliciti oferte personalizate
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Completezi formularul și primești <strong>5 oferte competitive</strong> de la brokeri certificați în maxim 24 de ore.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-mint/30 text-center hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-mint to-mint/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-5xl">✅</span>
                </div>
                <div className="inline-block bg-mint/10 text-mint px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Pas 3
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Alegi cea mai bună ofertă
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Compari ofertele și alegi pe cea cu <strong>cele mai bune condiții</strong>. 100% gratuit, fără obligații.
                </p>
              </div>
            </div>

            {/* Process note */}
            <div className="text-center mt-16">
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                💡 <strong>Important:</strong> Ne plătesc băncile prin comision, nu tu. Nu plătești nimic pentru comparare sau pentru ofertele primite.
              </p>
            </div>
          </div>
        </section>

        {/* Broker Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-bold mb-4">
                💼 Expertiză profesională
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                De ce să lucrezi cu un Broker autorizat?
              </h2>
              <p className="text-xl text-gray-600">
                Procesul de creditare devine simplu, rapid și <strong>complet gratuit</strong> pentru tine
              </p>
            </div>

            <div className="bg-gradient-to-br from-sage/5 to-mint/5 rounded-3xl p-8 md:p-12 border-2 border-sage/10">
              <ReadMore 
                text={`✅ Economisești timp prețios - nu mai trebuie să mergi la toate băncile pentru a-ți face scoring. Primești rapid varianta care ți se potrivește, fără a diminua scorul FICO.

✅ Servicii gratuite - colaborarea cu un broker autorizat este complet gratuită pentru tine. Băncile îi plătesc comisionul, nu tu.

✅ Consultanță completă - nu trebuie să faci nimic. Brokerul se ocupă de întreg procesul de creditare, oferindu-ți consultanță financiară, juridică și de asigurări.

✅ Suport pe tot parcursul procesului - brokerul gestionează relația cu banca pe întreaga durată a procesului de creditare și intervine în diverse situații limită apărute.

✅ Negociere în favoarea ta - brokerul negociază cu băncile pentru a obține cele mai bune condiții și costuri reduse, atunci când profilul tău este bun.`}
                maxWords={75}
              />
              
              <div className="mt-8 pt-8 border-t-2 border-sage/10">
                <p className="text-gray-600 text-center mb-6">
                  🎯 <strong>Peste 5 brokeri certificați</strong> vor primi solicitarea ta și îți vor trimite oferte competitive în maximum 24 de ore
                </p>
                <div className="text-center">
                  <a 
                    href="#calculator" 
                    className="inline-block bg-sage text-white px-10 py-5 rounded-2xl font-black text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Începe calculul acum →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOContent />

        <FAQ />

        <section className="py-20 md:py-24 bg-gradient-to-br from-sage via-sage/90 to-mint text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
              🚀 Platformă #1 în România
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Începe să economisești astăzi
            </h2>
            
            <p className="text-xl md:text-2xl mb-4 opacity-95 leading-relaxed max-w-3xl mx-auto">
              Nu mai pierde timp căutând singur prin site-uri de bănci.
            </p>
            
            <p className="text-2xl md:text-3xl font-bold mb-10">
              Găsește cel mai bun credit ipotecar în <span className="text-mint">24 de ore</span> 🎯
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#calculator" 
                className="inline-block bg-white text-sage px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Calculează rata acum →
              </a>
              <a 
                href="/blog" 
                className="inline-block bg-white/10 text-white border-2 border-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
              >
                Citește ghidul complet
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Fără obligații</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Răspuns în 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
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
// Build timestamp: 1771530881
