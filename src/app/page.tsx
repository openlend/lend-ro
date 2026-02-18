import Calculator from '@/components/Calculator';
import BankGrid from '@/components/BankGrid';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Bank Comparison Grid */}
      <BankGrid />

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Cum funcționează?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Completezi formularul
              </h3>
              <p className="text-gray-600">
                Răspunzi la câteva întrebări simple despre nevoia ta de credit (2 minute)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Primești 5 oferte
              </h3>
              <p className="text-gray-600">
                5 brokeri de credite certificați îți trimit oferte personalizate în 24h
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Alegi cea mai bună
              </h3>
              <p className="text-gray-600">
                Compari ofertele și alegi pe cea cu cea mai mică rată și cele mai bune condiții
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Întrebări frecvente
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Este serviciul cu adevărat gratuit?
              </summary>
              <p className="mt-4 text-gray-600">
                Da, 100% gratuit pentru tine. Brokerii sunt plătiți de bănci când reușesc să îți aprobe creditul,
                deci nu plătești nimic din buzunarul tău.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Cât durează să primesc ofertele?
              </summary>
              <p className="mt-4 text-gray-600">
                De obicei în maxim 24 de ore. Majoritatea brokerilor răspund chiar în câteva ore.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ce informații trebuie să furnizez?
              </summary>
              <p className="mt-4 text-gray-600">
                Suma dorită, venitul lunar net, perioada de creditare și dacă este prima ta proprietate.
                Datele personale (CNP, telefon, email) sunt necesare pentru ca brokerii să te contacteze.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Sunt obligat să accept o ofertă?
              </summary>
              <p className="mt-4 text-gray-600">
                Nu, absolut deloc. Primești ofertele, le analizezi în liniște și decizi dacă vrei să mergi mai departe cu vreuna.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Începe să economisești astăzi
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Nu mai pierde timp căutând singur prin bănci. Lasă experții să lucreze pentru tine.
          </p>
        </div>
      </section>
    </main>
  );
}
