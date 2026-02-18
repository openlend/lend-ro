import Calculator from '@/components/Calculator';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <section id="calculator" className="py-20 bg-base-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <Calculator />
          </div>
        </section>

        <section id="cum-functioneaza" className="py-20 bg-base-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4">Cum funcționează?</h2>
              <p className="text-xl opacity-70">Un proces simplu în 3 pași</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="badge badge-primary badge-lg text-2xl font-black w-16 h-16">1</div>
                  <h3 className="card-title text-2xl">Completezi formularul</h3>
                  <p>Răspunzi la câteva întrebări simple. Durează doar 2 minute.</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="badge badge-secondary badge-lg text-2xl font-black w-16 h-16">2</div>
                  <h3 className="card-title text-2xl">Primești 5 oferte</h3>
                  <p>5 brokeri certificați îți trimit oferte în maxim 24 de ore.</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="badge badge-accent badge-lg text-2xl font-black w-16 h-16">3</div>
                  <h3 className="card-title text-2xl">Alegi cea mai bună</h3>
                  <p>Compari ofertele și alegi pe cea cu cele mai bune condiții.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl font-black text-center mb-12">Întrebări frecvente</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Este serviciul cu adevărat gratuit?',
                  a: 'Da, 100% gratuit pentru tine. Brokerii sunt plătiți de bănci.'
                },
                {
                  q: 'Cât durează să primesc ofertele?',
                  a: 'De obicei în maxim 24 de ore. Majoritatea răspund în câteva ore.'
                },
                {
                  q: 'Ce informații trebuie să furnizez?',
                  a: 'Suma dorită, venitul lunar, perioada și date de contact pentru brokeri.'
                },
                {
                  q: 'Sunt obligat să accept o ofertă?',
                  a: 'Nu, absolut deloc. Primești ofertele și decizi în liniște.'
                }
              ].map((faq, i) => (
                <div key={i} className="collapse collapse-arrow bg-base-200">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-bold">{faq.q}</div>
                  <div className="collapse-content"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hero bg-primary text-white py-20">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-black mb-6">Începe să economisești astăzi</h2>
              <p className="text-2xl mb-8 opacity-90">
                Nu mai pierde timp căutând singur. Găsește cel mai bun credit în 24 de ore.
              </p>
              <a href="#calculator" className="btn btn-warning btn-lg">Calculează acum →</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
