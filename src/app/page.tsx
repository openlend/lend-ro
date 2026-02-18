import Calculator from '@/components/Calculator';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <HeroSection />

        {/* Calculator Section */}
        <section id="calculator" className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <Calculator />
          </div>
        </section>

        {/* How It Works */}
        <section id="cum-functioneaza" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-4">
                Cum funcționează?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Un proces simplu în 3 pași pentru a obține creditul perfect
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-primary-500">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-black text-primary-500">1</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Completezi formularul
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Răspunzi la câteva întrebări simple despre suma dorită, venit și perioada de creditare. Durează doar 2 minute.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-accent-orange">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-black text-accent-orange">2</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Primești 5 oferte
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  5 brokeri de credite certificați analizează profilul tău și îți trimit oferte personalizate în maxim 24 de ore.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-accent-lime">
                <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-black text-accent-lime">3</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Alegi cea mai bună
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compari ofertele primite și alegi pe cea cu rata cea mai mică și cele mai avantajoase condiții pentru tine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-black text-gray-900 mb-12 text-center">
                Întrebări frecvente
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: 'Este serviciul cu adevărat gratuit?',
                    answer: 'Da, 100% gratuit pentru tine. Brokerii sunt plătiți de bănci când reușesc să îți aprobe creditul, deci nu plătești nimic din buzunarul tău.'
                  },
                  {
                    question: 'Cât durează să primesc ofertele?',
                    answer: 'De obicei în maxim 24 de ore. Majoritatea brokerilor răspund chiar în câteva ore de la trimiterea cererii tale.'
                  },
                  {
                    question: 'Ce informații trebuie să furnizez?',
                    answer: 'Suma dorită, venitul lunar net, perioada de creditare și dacă este prima ta proprietate. Datele personale (CNP, telefon, email) sunt necesare pentru ca brokerii să te contacteze cu oferte personalizate.'
                  },
                  {
                    question: 'Sunt obligat să accept o ofertă?',
                    answer: 'Nu, absolut deloc. Primești ofertele, le analizezi în liniște și decizi dacă vrei să mergi mai departe cu vreuna. Nu există nicio obligație.'
                  },
                  {
                    question: 'Ce bănci sunt partenere?',
                    answer: 'Lucrăm cu toate băncile majore din România: BT, BCR, ING, Raiffeisen, UniCredit, BRD, Garanti, Libra, Patria, Credit Europe, Intesa și altele.'
                  }
                ].map((faq, index) => (
                  <details key={index} className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all">
                    <summary className="flex justify-between items-center cursor-pointer font-bold text-lg text-gray-900 list-none">
                      <span>{faq.question}</span>
                      <svg className="w-6 h-6 text-primary-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Începe să economisești astăzi
            </h2>
            <p className="text-2xl text-primary-100 mb-10 max-w-3xl mx-auto font-light">
              Nu mai pierde timp căutând singur prin bănci. Lasă experții să lucreze pentru tine și găsește cel mai bun credit ipotecar în 24 de ore.
            </p>
            <button 
              onClick={() => {
                const calc = document.getElementById('calculator');
                calc?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-500 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-accent-lime/30 hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              Calculează acum
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
