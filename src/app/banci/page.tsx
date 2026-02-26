import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bănci Partenere | lend.ro',
  description: 'Descoperă băncile partenere lend.ro: BT, BCR, ING, Raiffeisen, BRD, Garanti BBVA și altele. Compară oferte de credit ipotecar de la 12+ instituții financiare.',
};

const banks = [
  {
    slug: 'banca-transilvania',
    name: 'Banca Transilvania (BT)',
    logo: '/logos/bt.png',
    description: 'Cea mai mare bancă privată din România cu dobânzi competitive pentru credite ipotecare.',
    highlight: 'Dobândă de la 5.40% fix 3 ani',
  },
  {
    slug: 'bcr',
    name: 'BCR (Banca Comercială Română)',
    logo: '/logos/bcr.png',
    description: 'Lider pe piața creditelor Prima Casă cu procesare rapidă și rețea națională.',
    highlight: 'Cea mai mare bancă din România',
  },
  {
    slug: 'ing',
    name: 'ING Bank',
    logo: '/logos/ing.png',
    description: 'Banking 100% digital cu aprobare online și fără coadă la ghișeu.',
    highlight: 'Proces 100% online',
  },
  {
    slug: 'raiffeisen',
    name: 'Raiffeisen Bank',
    logo: '/logos/raiffeisen.png',
    description: 'Banker dedicat și consultanță personalizată pentru fiecare client.',
    highlight: 'Relație personalizată',
  },
  {
    slug: 'brd',
    name: 'BRD - Groupe Société Générale',
    logo: '/logos/brd.png',
    description: 'Experiență vastă în creditare ipotecară cu soluții flexibile.',
    highlight: 'Flexibilitate mare',
  },
  {
    slug: 'garanti-bbva',
    name: 'Garanti BBVA',
    logo: '/logos/garanti.png',
    description: 'Specializați în credite pentru PFA/SRL cu aprobare flexibilă.',
    highlight: 'Perfect pentru antreprenori',
  },
];

export default function BanksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bănci Partenere
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl">
            Compară oferte de credit ipotecar de la cele mai importante bănci din România. 
            Găsim cea mai bună ofertă pentru tine, 100% gratuit.
          </p>
        </div>
      </header>

      {/* Banks Grid */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banks.map((bank) => (
            <Link 
              key={bank.slug} 
              href={`/banci/${bank.slug}`}
              className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  {/* Logo placeholder - add actual logos later */}
                  <span className="text-2xl font-bold text-emerald-600">
                    {bank.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {bank.name}
                </h2>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {bank.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600">
                  {bank.highlight}
                </span>
                <span className="text-emerald-600 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Compară oferte de la toate băncile
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Nu trebuie să mergi la fiecare bancă individual. 
            Primești oferte personalizate de la 5 brokeri în 24 de ore, gratuit.
          </p>
          <Link 
            href="/calculator"
            className="inline-block bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-colors text-lg"
          >
            Calculează rata lunară →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-4xl border-t">
        <h2 className="text-3xl font-bold mb-8 text-center">Întrebări frecvente</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">
              De ce să compar oferte de la mai multe bănci?
            </h3>
            <p className="text-gray-700">
              Diferența de dobândă de doar 0.5% pe un credit de 300.000 RON pe 30 de ani 
              înseamnă economii de ~30.000 RON. Merită să compari!
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">
              Costă ceva să primesc oferte?
            </h3>
            <p className="text-gray-700">
              Nu, este complet gratuit. Băncile plătesc comision brokerilor, nu tu.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">
              Cât durează să primesc oferte?
            </h3>
            <p className="text-gray-700">
              În maximum 24 de ore vei primi 5 oferte personalizate de la brokeri certificați 
              care lucrează cu toate băncile din listă.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
