import type { Metadata } from 'next';

import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Calculator rate credit ipotecar (estimativ) | Lend.ro',
  description:
    'Calculează o rată lunară estimativă și compară rapid scenarii pentru credit ipotecar. Instrument gratuit, simplu, fără dobânzi afișate agresiv.',
  alternates: {
    canonical: '/instrumente/calculator-rate'
  },
  openGraph: {
    title: 'Calculator rate credit ipotecar (estimativ) | Lend.ro',
    description:
      'Calculează o rată lunară estimativă și compară rapid scenarii pentru credit ipotecar.',
    url: 'https://lend.ro/instrumente/calculator-rate',
    siteName: 'Lend.ro',
    type: 'website'
  }
};

export default function CalculatorRatePage() {
  return (
    <>
      <StructuredData type="website" data={{}} />

      <main className="bg-white">
        {/* HERO */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#F5F7FA] to-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm md:text-base text-gray-600 mb-3">Instrumente • Calculator</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1B3E] mb-4">
              Calculator rate credit ipotecar (estimativ)
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
              Introdu suma, perioada și câteva detalii utile ca să vezi o estimare de rată lunară și să compari
              opțiuni între bănci. Rapid, gratuit, fără bătăi de cap.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center bg-[#00D186] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00b874] transition"
              >
                Calculează acum
              </a>
              <a
                href="/lp/calculator"
                className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0B1B3E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Landing (ads) →
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Disclaimer: rezultatele sunt orientative. Oferta finală depinde de banca aleasă și de analiza dosarului.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-[#0B1B3E] mb-3">Cum folosești calculatorul (în 2 minute)</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Alege tipul de credit (imobiliar / consum).</li>
                  <li>Setează suma și perioada.</li>
                  <li>Opțional: avans, venit, al doilea imobil etc. pentru o estimare mai relevantă.</li>
                  <li>Apasă „Caută oferte” și compară scenarii.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0B1B3E] mt-10 mb-3">Ce influențează rata lunară</h2>
                <p className="text-gray-700">
                  Rata lunară depinde de suma împrumutată, perioada, tipul dobânzii (fixă/variabilă), avans,
                  venituri acceptate de bancă și condiții specifice produsului (comisioane, asigurări etc.).
                  Calculatorul te ajută să vezi rapid cum se schimbă rata când ajustezi acești parametri.
                </p>

                <h2 className="text-2xl font-bold text-[#0B1B3E] mt-10 mb-3">Următorul pas: compară băncile</h2>
                <p className="text-gray-700 mb-4">
                  După ce ai o estimare, poți compara ofertele băncilor și condițiile pe înțelesul tău.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/instrumente/comparator-banci"
                    className="inline-flex items-center justify-center bg-[#0B1B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#162f5e] transition"
                  >
                    Compară bănci →
                  </a>
                  <a
                    href="/banci"
                    className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0B1B3E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Vezi băncile
                  </a>
                </div>
              </div>

              <aside className="md:col-span-1">
                <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0B1B3E] mb-2">Pro tip</h3>
                  <p className="text-sm text-gray-700">
                    Înainte să trimiți cererea, testează 2-3 scenarii (perioadă mai scurtă vs mai lungă, avans mai mare).
                    Diferențele pot fi surprinzătoare.
                  </p>
                </div>
              </aside>
            </div>
          </div>
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
                <h3 className="font-semibold text-[#0B1B3E]">Calculatorul arată rata exactă?</h3>
                <p className="text-gray-700">
                  Nu. Este o estimare orientativă, utilă pentru comparații rapide. Rata finală depinde de ofertă și de
                  analiza băncii.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">Pot compara mai multe bănci dintr-un singur loc?</h3>
                <p className="text-gray-700">
                  Da — după calcul, poți vedea scenarii și alternative. Pentru comparație dedicată, intră pe{' '}
                  <a className="text-[#00D186] font-semibold" href="/instrumente/comparator-banci">
                    comparatorul de bănci
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">De ce contează avansul?</h3>
                <p className="text-gray-700">
                  Avansul reduce suma împrumutată, ceea ce scade rata și poate îmbunătăți eligibilitatea.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1B3E]">Ce urmează după ce găsesc o opțiune bună?</h3>
                <p className="text-gray-700">
                  Poți continua cu o cerere de ofertă și să discuți pașii de aprobare. Vezi și{' '}
                  <a className="text-[#00D186] font-semibold" href="/produse/credit-ipotecar">
                    ghidul pentru credit ipotecar
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
