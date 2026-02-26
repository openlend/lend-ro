import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import BankLogo from '@/components/BankLogo';
import bankData from '@/data/bank-products.json';

const bankInfo: Record<string, {
  fullName: string;
  description: string;
  website: string;
  phone: string;
  advantages: string[];
  considerations: string[];
}> = {
  'bt': {
    fullName: 'Banca Transilvania',
    description: 'Cea mai mare bancă privată din România, cu peste 2.8 milioane de clienți și peste 500 de agenții la nivel național. BT oferă credite ipotecare competitive, inclusiv produse verzi cu dobândă redusă.',
    website: 'https://www.bancatransilvania.ro',
    phone: '*2227 (gratuit)',
    advantages: [
      'Creditele Verzi cu dobândă redusă (IRCC + 2.95%)',
      'Rețea extinsă de agenții (500+)',
      'Proces de aprobare rapid (3-5 zile)',
      'Opțiune rambursare anticipată fără comision',
      'Servicii digitale avansate (aplicație mobilă)'
    ],
    considerations: [
      'Comision de acordare: 0.5-1% din suma creditului',
      'Evaluare imobiliară: ~400-600 RON',
      'Asigurare obligatorie (viață + bunuri)'
    ]
  },
  'bcr': {
    fullName: 'BCR (Banca Comercială Română)',
    description: 'Cea mai mare bancă din România după active, parte din grupul Erste. BCR are experiență de peste 150 de ani și oferă credite ipotecare flexibile cu rate competitive.',
    website: 'https://www.bcr.ro',
    phone: '0800 801 227 (gratuit)',
    advantages: [
      'Cea mai mare bancă din România (active)',
      'Dobânzi competitive începând de la IRCC + 2.90%',
      'Program Prima Casă cu condiții avantajoase',
      'Consultanță specializată în credite ipotecare',
      'Opțiune period de grație pentru construcții'
    ],
    considerations: [
      'Cerințe stricte de documentație',
      'Evaluare prudentă a proprietății',
      'Asigurări obligatorii prin parteneriatele BCR'
    ]
  },
  'brd': {
    fullName: 'BRD Groupe Société Générale',
    description: 'Bancă cu capital francez, parte din grupul Société Générale. BRD oferă credite ipotecare cu condiții competitive și experiență internațională în finanțare imobiliară.',
    website: 'https://www.brd.ro',
    phone: '0800 800 500 (gratuit)',
    advantages: [
      'Experiență internațională (Groupe SG)',
      'Credite pentru prima casă cu avans de la 5%',
      'Refinanțare cu condiții atractive',
      'Consultanță personalizată cu specialist credit',
      'Aplicație mobilă modernă'
    ],
    considerations: [
      'Comisioane mai ridicate decât alte bănci',
      'Timp de aprobare: 7-10 zile',
      'Evaluare strictă a veniturilor'
    ]
  },
  'ing': {
    fullName: 'ING Bank România',
    description: 'Bancă olandeză prezentă în România din 1994. ING este cunoscută pentru digitalizare avansată și servicii online simple. Oferă credite ipotecare 100% online.',
    website: 'https://www.ing.ro',
    phone: '0800 999 000 (gratuit)',
    advantages: [
      'Credit 100% online (de la aplicație la aprobare)',
      'Fără comision de acordare în campanii',
      'Aplicație mobilă premiată',
      'Răspuns rapid (pre-aprobare în 24h)',
      'Transparență totală (calculator online detaliat)'
    ],
    considerations: [
      'Mai puține agenții fizice decât alte bănci',
      'Proces preponderent digital (nu pentru toată lumea)',
      'Evaluare strict automată a dosarului'
    ]
  },
  'raiffeisen': {
    fullName: 'Raiffeisen Bank',
    description: 'Bancă austriacă cu peste 25 de ani în România. Raiffeisen oferă credite ipotecare premium cu servicii personalizate și consultanță de specialitate.',
    website: 'https://www.raiffeisen.ro',
    phone: '0800 801 800 (gratuit)',
    advantages: [
      'Experiență austriacă în credite imobiliare',
      'Dobânzi competitive (IRCC + 2.95% în campanii)',
      'Consultanță premium banking',
      'Flexibilitate în negocierea termenilor',
      'Program pentru clienți premium'
    ],
    considerations: [
      'Target clienți cu venituri peste medie',
      'Comisioane mai ridicate pentru servicii premium',
      'Cerințe stricte de eligibilitate'
    ]
  },
  'garanti': {
    fullName: 'Garanti BBVA',
    description: 'Bancă turcă-spaniolă (BBVA) prezentă în România. Garanti oferă produse inovatoare, inclusiv Green Power Loan pentru case eficiente energetic.',
    website: 'https://www.garantibbva.ro',
    phone: '0800 888 101 (gratuit)',
    advantages: [
      'Green Power Loan (IRCC + 2.95%) pentru case A/B',
      'Proces simplu de aplicare',
      'Flexibilitate la alegerea perioadei fixe (2/3/5 ani)',
      'Comisioane competitive',
      'Servicii digitale moderne'
    ],
    considerations: [
      'Rețea mai mică de agenții decât BT/BCR',
      'Dobânzi variabile după perioada fixă',
      'Evaluare strictă pentru creditele verzi'
    ]
  },
  'unicredit': {
    fullName: 'UniCredit Bank',
    description: 'Bancă italiană cu prezență globală. UniCredit oferă credite ipotecare cu experiență europeană și servicii personalizate pentru clienți corporate și retail.',
    website: 'https://www.unicredit.ro',
    phone: '0800 672 342 (gratuit)',
    advantages: [
      'Experiență bancară italiană',
      'Credite pentru prima și a doua casă',
      'Consultanță personalizată',
      'Program refinanțare atractive',
      'Parteneriate cu dezvoltatori imobiliari'
    ],
    considerations: [
      'Cerințe de venit mai ridicate',
      'Comisioane standard (fără campanii frecvente)',
      'Timp de aprobare: 7-14 zile'
    ]
  },
  'libra': {
    fullName: 'Libra Internet Bank',
    description: 'Bancă românească specializată pe digital banking. Libra oferă credite ipotecare 100% online cu proces simplificat și dobânzi competitive.',
    website: 'https://www.librabank.ro',
    phone: '0800 410 210 (gratuit)',
    advantages: [
      '100% online (de la aplicație la aprobare)',
      'Dobânzi competitive pentru clienți cu venit virat',
      'Proces rapid (aprobare în 3-5 zile)',
      'Fără comision de rambursare anticipată',
      'Flexibilitate în structurarea creditului'
    ],
    considerations: [
      'Rețea limitată de agenții fizice',
      'Mai puțin cunoscută decât băncile mari',
      'Evaluare automată (mai puțină flexibilitate)'
    ]
  },
  'nexent': {
    fullName: 'Nexent Bank (fost Credit Europe Bank)',
    description: 'Bancă românească rezultată din fuziunea Credit Europe Bank și Banca Comercială Carpatica (2024). Oferă credite ipotecare cu dobânzi competitive și servicii personalizate.',
    website: 'https://www.nexentbank.ro',
    phone: '0800 888 123 (gratuit)',
    advantages: [
      'Dobânzi competitive (IRCC + 2.95%)',
      'Rețea extinsă după fuziune',
      'Consultanță personalizată',
      'Credite pentru prima și a doua casă',
      'Parteneriate cu dezvoltatori'
    ],
    considerations: [
      'Bancă rebranded recent (2024)',
      'În proces de integrare a rețelelor',
      'Cerințe standard de eligibilitate'
    ]
  },
  'patria': {
    fullName: 'Patria Bank',
    description: 'Bancă românească dedicată IMM-urilor și retail. Patria oferă credite ipotecare cu abordare personalizată și flexibilitate în negociere.',
    website: 'https://www.patriabank.ro',
    phone: '0800 410 310 (gratuit)',
    advantages: [
      'Flexibilitate în negocierea termenilor',
      'Proces personalizat (nu automated)',
      'Consultanță dedicată',
      'Credite pentru renovări și construcții',
      'Parteneriate locale'
    ],
    considerations: [
      'Rețea limitată de agenții',
      'Dobânzi ușor mai mari decât băncile mari',
      'Proces mai lung (10-15 zile)'
    ]
  },
  'exim': {
    fullName: 'EximBank (Banca Românească)',
    description: 'Bancă de stat specializată în finanțarea exportului, dar oferă și credite ipotecare pentru retail cu dobânzi competitive.',
    website: 'https://www.eximbank.ro',
    phone: '0800 801 802 (gratuit)',
    advantages: [
      'Bancă de stat (stabilitate)',
      'Dobânzi competitive pentru prima casă',
      'Flexibilitate la avans (de la 5%)',
      'Credite pentru construcții',
      'Consultanță specializată'
    ],
    considerations: [
      'Rețea mai mică decât băncile comerciale',
      'Proces mai birocratic',
      'Cerințe stricte de documentație'
    ]
  },
  'intesa': {
    fullName: 'Intesa Sanpaolo Bank România',
    description: 'Bancă italiană, parte din grupul Intesa Sanpaolo. Oferă credite ipotecare cu experiență bancară europeană și servicii personalizate.',
    website: 'https://www.intesasanpaolobank.ro',
    phone: '0800 888 122 (gratuit)',
    advantages: [
      'Experiență bancară italiană',
      'Dobânzi competitive în campanii',
      'Consultanță personalizată',
      'Credite pentru prima și a doua proprietate',
      'Parteneriate cu dezvoltatori premium'
    ],
    considerations: [
      'Rețea limitată de agenții',
      'Target clienți cu venituri medii-ridicate',
      'Evaluare strictă a dosarului'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(bankInfo).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bank = bankInfo[slug];
  
  if (!bank) {
    return {
      title: 'Bancă necunoscută - lend.ro',
    };
  }

  return {
    title: `Credit Ipotecar ${bank.fullName} 2026 - Oferte, Dobânzi, Condiții | lend.ro`,
    description: `Ghid complet ${bank.fullName}: cele mai bune oferte de credite ipotecare, dobânzi actualizate, avantaje, condiții. Compară cu alte 11 bănci și economisește bani.`,
  };
}

export default async function BankPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bank = bankInfo[slug];
  
  if (!bank) {
    notFound();
  }

  // Get bank products from JSON
  const bankProducts = bankData.products.filter(
    (p: any) => p.bank.toLowerCase().replace(/\s+/g, '-') === slug ||
                p.bank.toLowerCase() === bank.fullName.toLowerCase()
  );

  const bestProduct = bankProducts
    .filter((p: any) => !p.rate_type.toUpperCase().includes('EURO'))
    .sort((a: any, b: any) => {
      const rateA = a.rates.fixed_rate || a.rates.variable_margin;
      const rateB = b.rates.fixed_rate || b.rates.variable_margin;
      return rateA - rateB;
    })[0];

  const minRate = bestProduct 
    ? (bestProduct.rates.fixed_rate || `IRCC + ${bestProduct.rates.variable_margin}%`)
    : 'N/A';

  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <BankLogo bankName={bank.fullName} size="lg" />
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  Credit Ipotecar {bank.fullName}
                </h1>
                <p className="text-xl text-gray-600">
                  Oferte actualizate 2026 • Dobândă de la <span className="font-bold text-mint">{minRate}</span>
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {bank.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href={bank.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-mint text-white px-6 py-3 rounded-xl font-semibold hover:bg-mint/90 transition"
              >
                🌐 Site oficial
              </a>
              <a 
                href={`tel:${bank.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-xl font-semibold hover:bg-sage/90 transition"
              >
                📞 {bank.phone}
              </a>
            </div>
          </div>

          {/* Advantages & Considerations */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">✅</span>
                Avantaje
              </h2>
              <ul className="space-y-3">
                {bank.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-mint/20 text-mint rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">⚠️</span>
                De Reținut
              </h2>
              <ul className="space-y-3">
                {bank.considerations.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      !
                    </span>
                    <span className="leading-relaxed">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Table */}
          {bestProduct && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Produse Disponibile
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="pb-3 font-bold text-gray-900">Produs</th>
                      <th className="pb-3 font-bold text-gray-900">Dobândă</th>
                      <th className="pb-3 font-bold text-gray-900">Perioada Fixă</th>
                      <th className="pb-3 font-bold text-gray-900">Marjă Variabilă</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankProducts
                      .filter((p: any) => !p.rate_type.toUpperCase().includes('EURO'))
                      .slice(0, 5)
                      .map((product: any, idx: number) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 text-gray-700">
                            {product.product_type.replace(/\*+/g, '').substring(0, 50)}
                          </td>
                          <td className="py-4">
                            <span className="font-bold text-mint">
                              {product.rates.fixed_rate 
                                ? `${product.rates.fixed_rate}%` 
                                : `IRCC + ${product.rates.variable_margin}%`}
                            </span>
                          </td>
                          <td className="py-4 text-gray-600">
                            {product.rates.fixed_years ? `${product.rates.fixed_years} ani` : 'Variabilă'}
                          </td>
                          <td className="py-4 text-gray-600">
                            {product.rates.variable_margin}%
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                💡 Dobânzile sunt orientative. Oferta finală depinde de profilul tău de risc și este emisă de bancă după analiza dosarului.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-sage via-sage/90 to-mint text-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Compară {bank.fullName} cu Alte 11 Bănci
            </h2>
            <p className="text-xl mb-6 opacity-95">
              Vezi instant care bancă îți oferă cele mai bune condiții pentru situația ta
            </p>
            <a 
              href="/#calculator" 
              className="inline-block bg-white text-sage px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Calculează rata lunară →
            </a>
            <p className="text-sm mt-4 opacity-90">
              100% gratuit • Fără obligații • Răspuns în 24h
            </p>
          </div>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
