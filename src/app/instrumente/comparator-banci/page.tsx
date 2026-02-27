import type { Metadata } from 'next';

import BankGrid from '@/components/BankGrid';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Comparator bănci (credit ipotecar) | Compară oferte | Lend.ro',
  description:
    'Comparator bănci pentru credit ipotecar: vezi opțiuni, condiții și diferențe între bănci, apoi calculează rata estimativă în aceeași pagină.',
  alternates: {
    canonical: '/instrumente/comparator-banci'
  },
  openGraph: {
    title: 'Comparator bănci (credit ipotecar) | Lend.ro',
    description:
      'Compară rapid oferte între bănci și calculează rata estimativă în aceeași pagină.',
    url: 'https://lend.ro/instrumente/comparator-banci',
    siteName: 'Lend.ro',
    type: 'website'
  }
};

export default function ComparatorBanciPage() {
  return (
    <>
      <StructuredData type="website" data={{}} />

      <main className="bg-white">
        {/* HERO */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white to-[#F5F7FA]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm md:text-base text-gray-600 mb-3">Instrumente • Comparator</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1B3E] mb-4">Comparator bănci: alege informat</h1>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
              Compară bănci și condiții pe înțelesul tău, apoi calculează rata estimativă în aceeași pagină.
              Scopul: să iei o decizie mai bună, mai repede.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#banci"
                className="inline-flex items-center justify-center bg-[#0B1B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#162f5e] transition"
              >
                Vezi băncile
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center bg-[#00D186] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00b874] transition"
              >
                Calculează rata
              </a>
              <a
                href="/lp/compara-banci"
                className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0B1B3E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Landing (ads) →
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Disclaimer: informațiile sunt orientative. Oferta finală depinde de banca aleasă și de analiza dosarului.
            </p>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-[#0B1B3E] mb-3">Ce merită să compari între bănci</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Dobândă (fixă vs variabilă) și cum se calculează.</li>
                  <li>Comisioane și costuri recurente (ex.: administrare, evaluare).</li>
                  <li>Condiții: virare venit, asigurări, praguri de eligibilitate.</li>
                  <li>Flexibilitate: rambursare anticipată, refinanțare, perioadă.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0B1B3E] mt-10 mb-3">Cum folosești comparatorul</h2>
                <p className="text-gray-700">
                  Începe cu o listă scurtă de bănci care te interesează, apoi verifică scenarii apropiate de situația ta.
                  Dacă vrei să vezi impactul direct în buget, sari la secțiunea de calculator de mai jos.
                </p>

                <h2 className="text-2xl font-bold text-[#0B1B3E] mt-10 mb-3">Vrei credit ipotecar? Uite ghidul</h2>
                <p className="text-gray-700 mb-4">
                  Pentru pași, documente și explicații clare, vezi pagina noastră dedicată.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/produse/credit-ipotecar"
                    className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0B1B3E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Credit ipotecar (ghid)
                  </a>
                  <a
                    href="/banci"
                    className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0B1B3E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Toate băncile
                  </a>
                </div>
              </div>

              <aside className="md:col-span-1">
                <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0B1B3E] mb-2">Shortcut</h3>
                  <p className="text-sm text-gray-700">
                    Dacă ai deja suma și perioada, calculează rata întâi. Apoi compară ce bancă îți iese cel mai bine.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BANKS */}
        <section id="banci">
          <BankGrid />
        </section>

        {/* CALCULATOR */}
        <section id="calculator" className="bg-[#F5F7FA] py-6 md:py-10">
          <div className="max-w-[1600px] mx-auto">
            <Calculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#0B1B3E] mb-6">Întrebări frecvente</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">Comparatorul arată oferte finale?</h3>
                <p className="text-gray-700">
                  Nu. Îți oferă o comparație orientativă și structurată. Oferta finală depinde de bancă și de analiza
                  dosarului.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">Ce e mai important: dobânda sau comisioanele?</h3>
                <p className="text-gray-700">
                  Ambele. Uneori o dobândă puțin mai mică poate fi anulată de costuri recurente. De aceea merită să vezi
                  imaginea de ansamblu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">Pot compara și pentru refinanțare?</h3>
                <p className="text-gray-700">
                  Da — vezi și pagina{' '}
                  <a className="text-[#00D186] font-semibold" href="/produse/refinantare">
                    Refinanțare
                  </a>{' '}
                  pentru explicații.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">Unde calculez rata pentru scenariul meu?</h3>
                <p className="text-gray-700">
                  Chiar aici, în secțiunea „Calculează rata”, sau pe{' '}
                  <a className="text-[#00D186] font-semibold" href="/instrumente/calculator-rate">
                    calculatorul de rate
                  </a>.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-10">
              Disclaimer: informațiile din această pagină au rol informativ. Nu reprezintă consultanță financiară.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
