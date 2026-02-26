import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Credit Prima Casă 2025 - Avans 5%, Dobândă Avantajoasă | lend.ro',
  description: 'Credit Prima Casă cu avans de doar 5% și dobândă subvenționată. Compară oferte de la BCR, BT, ING și alte bănci. Garanție de stat, condiții speciale pentru prima locuință.',
  keywords: 'prima casa, credit prima casa, avans 5%, program guvernamental, credit garantat stat, prima locuinta',
};

export default function PrimaCasa() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ce este programul Prima Casă?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prima Casă este un program guvernamental care oferă garantii de stat pentru credite ipotecare destinate achiziției primei locuințe. Principalele avantaje sunt: avans minim de doar 5%, dobândă mai mică decât la creditele clasice și garanție de stat până la 60% din valoarea creditului."
        }
      },
      {
        "@type": "Question",
        "name": "Care sunt condițiile de eligibilitate pentru Prima Casă?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pentru a fi eligibil trebuie să: (1) nu deții altă locuință în proprietate, (2) ai minim 18 ani, (3) ai venit suficient pentru a acoperi rata (DTI maxim 40-45%), (4) cumperi o locuință cu valoare maximă de 140.000 euro (450.000 lei) și suprafață sub 120 mp. Ambii soți trebuie să respecte aceste condiții."
        }
      },
      {
        "@type": "Question",
        "name": "Care este diferența între Prima Casă și un credit ipotecar clasic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diferențele principale: (1) Avans minim 5% vs 15-25% la creditul clasic, (2) Dobândă mai mică datorită garanției de stat, (3) Valoare maximă 140.000 euro vs nelimitat, (4) Eligibilitate strictă - doar pentru prima locuință vs oricine cu venit adecvat, (5) Garanție de stat 60% vs fără garanție."
        }
      },
      {
        "@type": "Question",
        "name": "Cât timp durează aprobarea unui credit Prima Casă?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procesul de aprobare durează în medie 7-14 zile lucrătoare după depunerea documentației complete. Primești răspuns preliminar în 2-3 zile, iar aprobarea finală de la bancă și FNGCIMM (Fondul Național de Garantare) poate dura 5-10 zile suplimentare."
        }
      },
      {
        "@type": "Question",
        "name": "Pot lua Prima Casă pentru un apartament second-hand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, programul Prima Casă se aplică atât pentru locuințe noi, cât și pentru cele second-hand (vechi). Singura condiție este ca locuința să îndeplinească cerințele de suprafață (max 120 mp) și valoare (max 140.000 euro) și să aibă toate documentele în regulă."
        }
      },
      {
        "@type": "Question",
        "name": "Pot cumpăra o casă cu grădină prin Prima Casă?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, poți cumpăra casă cu teren, dar există limite: suprafața construită trebuie să fie sub 120 mp, iar terenul să nu depășească 250 mp în urban sau 500 mp în rural. Valoarea totală (casă + teren) nu trebuie să depășească 140.000 euro."
        }
      }
    ]
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <main className="py-12 bg-gray-50" style={{ fontFamily: 'Rubik, sans-serif' }}>
        {/* Hero Section */}
        <section className="bg-[#0B1B3E] text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Credit Prima Casă - Avans 5%, Dobândă Avantajoasă
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Devino proprietar cu cel mai accesibil program de creditare din România. Avans de doar 5%, dobândă subvenționată și garanție de stat până la 60%. Compară oferte de la toate băncile și află în 24 ore dacă ești eligibil.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Rata Prima Casă →
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          
          {/* Ce este Prima Casa */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Ce este programul Prima Casă?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Prima Casă</strong> este un program guvernamental lansat în 2009 care facilitează accesul tinerilor și familiilor la prima locuință prin oferirea de garanții de stat pentru credite ipotecare. Programul este administrat de FNGCIMM (Fondul Național de Garantare a Creditelor pentru Întreprinderi Mici și Mijlocii) și implementat de principalele bănci din România.
              </p>
              <p>
                Avantajul principal al programului este că <strong>garanția de stat acoperă până la 60% din valoarea creditului</strong>, ceea ce permite băncilor să ofere condiții mai avantajoase: avans minim de doar 5% (față de 15-25% la creditele clasice) și dobândă mai mică. Practic, statul garantează băncii că va acoperi o parte din pierderi dacă împrumutatul nu își mai poate plăti ratele, reducând astfel riscul bancar și făcând creditul mai accesibil.
              </p>
              <p>
                Programul se adresează exclusiv persoanelor care <strong>nu dețin altă locuință în proprietate</strong> și doresc să cumpere prima lor casă sau apartament. Este ideal pentru tineri, familii tinere, cupluri la început de drum sau persoane singure care vor să iasă din chirie și să investească într-o locuință proprie fără a avea economii mari pentru avans.
              </p>
              <p>
                În România, majoritatea băncilor majore participă la programul Prima Casă: <Link href="/banci/bcr" className="text-[#00D186] hover:underline">BCR</Link>, <Link href="/banci/bt" className="text-[#00D186] hover:underline">Banca Transilvania</Link>, <Link href="/banci/ing" className="text-[#00D186] hover:underline">ING Bank</Link>, <Link href="/banci/raiffeisen" className="text-[#00D186] hover:underline">Raiffeisen Bank</Link>, Alpha Bank, Unicredit, CEC Bank și altele. Condițiile pot varia ușor între bănci, dar cadrul general este același pentru toate.
              </p>
            </div>
          </section>

          {/* Avantaje Prima Casa */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Avantajele programului Prima Casă
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Avans redus de doar 5%</strong>
                  <p className="text-gray-700 mt-1">Cel mai mic avans din piață! Pentru o locuință de 100.000 euro, ai nevoie de doar 5.000 euro avans, comparativ cu 15.000-25.000 euro la un <Link href="/produse/credit-ipotecar" className="text-[#00D186] hover:underline">credit ipotecar clasic</Link>. Acest lucru face programul accesibil chiar și pentru cei cu economii modeste.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Dobândă competitivă și stabilă</strong>
                  <p className="text-gray-700 mt-1">Datorită garanției de stat, băncile oferă dobânzi mai mici decât la creditele ipotecare standard – adesea cu 0.5-1.5% mai mici. Dobânda este variabilă, legată de <Link href="/glosar#ircc" className="text-[#00D186] hover:underline">IRCC</Link> (Indicele de Referință pentru Creditele Consumatorilor) plus marja băncii, dar rămâne competitivă pe toată durata creditului.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Garanție de stat până la 60%</strong>
                  <p className="text-gray-700 mt-1">Statul garantează până la 60% din valoarea creditului prin FNGCIMM, ceea ce oferă securitate atât băncii, cât și debitorului. În cazul unor dificultăți financiare temporare, poți negocia mai ușor cu banca soluții de restructurare, știind că există această garanție în spate.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Perioadă de creditare până la 35 de ani</strong>
                  <p className="text-gray-700 mt-1">Poți împărți creditul pe o perioadă foarte lungă (până la 35 ani), ceea ce reduce semnificativ rata lunară și o face mai ușor de gestionat în bugetul familiei. Evident, cu cât perioada este mai lungă, cu atât plătești mai multă dobândă totală, dar flexibilitatea este maximă.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Eligibilitate simplă și transparentă</strong>
                  <p className="text-gray-700 mt-1">Criteriile sunt clare și publice: nu ai altă locuință, ai venit suficient (DTI sub 40-45%), locuința costă max 140.000 euro și are sub 120 mp. Dacă îndeplinești aceste condiții, ai șanse mari de aprobare, indiferent de vârstă sau profesie.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Flexibilitate în alegerea locuinței</strong>
                  <p className="text-gray-700 mt-1">Poți cumpăra apartament sau casă, nouă sau second-hand, în urban sau rural. Singurele limite sunt valoarea (140.000 euro) și suprafața (120 mp). Ai libertatea să alegi locuința care ți se potrivește, nu una impusă de program.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Conditii eligibilitate */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Condiții de eligibilitate Prima Casă 2025
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-[#00D186] p-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-3">
                  ✅ Criterii pentru beneficiar
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Vârstă:</strong> Minimum 18 ani (fără limită maximă de vârstă)</li>
                  <li>• <strong>Prima locuință:</strong> Nu deții și nu ai deținut niciodată altă locuință în proprietate (nici tu, nici soțul/soția)</li>
                  <li>• <strong>Venit suficient:</strong> <Link href="/glosar#dti" className="text-[#00D186] hover:underline">Gradul de îndatorare (DTI)</Link> maxim 40-45% din venitul net lunar (unele bănci acceptă până la 50% cu garanții suplimentare)</li>
                  <li>• <strong>Istoric financiar bun:</strong> Nu ai restanțe la credite și nu ești înscris în Biroul de Credit cu incidente de plată</li>
                  <li>• <strong>Cetățenie/rezidență:</strong> Cetățean român sau rezident legal în România</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#00D186] p-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-3">
                  🏡 Criterii pentru locuință
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Valoare maximă:</strong> 140.000 euro (aproximativ 700.000 lei la cursul actual) – valoare totală inclusiv TVA și costuri aferente</li>
                  <li>• <strong>Suprafață utilă:</strong> Maximum 120 mp (pentru apartamente și case)</li>
                  <li>• <strong>Tip locuință:</strong> Apartament sau casă, nouă sau second-hand, în urban sau rural</li>
                  <li>• <strong>Destinație:</strong> Exclusiv rezidențială (nu poți cumpăra spațiu comercial sau mixt)</li>
                  <li>• <strong>Teren (pentru case):</strong> Max 250 mp în urban, max 500 mp în rural</li>
                  <li>• <strong>Documentație în regulă:</strong> Certificat de urbanism, extras CF valid, fără sarcini sau litigii</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#00D186] p-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-3">
                  💰 Criterii financiare
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Avans minim:</strong> 5% din valoarea locuinței (poți da și mai mult pentru rate mai mici)</li>
                  <li>• <strong>Suma maximă împrumutată:</strong> 95% din valoarea de <Link href="/glosar#evaluare" className="text-[#00D186] hover:underline">evaluare</Link> a locuinței (nu mai mult de 133.000 euro)</li>
                  <li>• <strong>Perioadă de creditare:</strong> Între 5 și 35 de ani</li>
                  <li>• <strong>Garanție de stat:</strong> Până la 60% din valoarea creditului, acordată automat de FNGCIMM</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Diferente vs credit clasic - Tabel comparativ */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Prima Casă vs Credit Ipotecar Clasic - Comparație
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-3 gap-4 mb-4 font-semibold text-[#0B1B3E]">
                  <div className="p-4 bg-gray-100 rounded">Criteriu</div>
                  <div className="p-4 bg-[#00D186] bg-opacity-10 rounded">Prima Casă</div>
                  <div className="p-4 bg-gray-100 rounded">Credit Ipotecar Clasic</div>
                </div>
                
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4 border-b">Avans minim</div>
                    <div className="p-4 border-b bg-[#00D186] bg-opacity-5 font-semibold">5%</div>
                    <div className="p-4 border-b">15-25%</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4 border-b">Dobândă</div>
                    <div className="p-4 border-b bg-[#00D186] bg-opacity-5 font-semibold">Mai mică (subvenționată)</div>
                    <div className="p-4 border-b">Standard piață</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4 border-b">Valoare maximă</div>
                    <div className="p-4 border-b bg-[#00D186] bg-opacity-5">140.000 euro</div>
                    <div className="p-4 border-b font-semibold">Nelimitată</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4 border-b">Suprafață maximă</div>
                    <div className="p-4 border-b bg-[#00D186] bg-opacity-5">120 mp</div>
                    <div className="p-4 border-b font-semibold">Nelimitată</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4 border-b">Eligibilitate</div>
                    <div className="p-4 border-b bg-[#00D186] bg-opacity-5">Doar prima locuință</div>
                    <div className="p-4 border-b font-semibold">Oricine cu venit adecvat</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4 border-b">Garanție de stat</div>
                    <div className="p-4 border-b bg-[#00D186] bg-opacity-5 font-semibold">60%</div>
                    <div className="p-4 border-b">Fără</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-gray-700">
                    <div className="p-4">Perioadă creditare</div>
                    <div className="p-4 bg-[#00D186] bg-opacity-5 font-semibold">5-35 ani</div>
                    <div className="p-4">5-30 ani</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              💡 <strong>Concluzie:</strong> Prima Casă este ideal pentru cine cumpără prima locuință și are economii limitate pentru avans. Creditele ipotecare clasice sunt mai flexibile în termeni de valoare și suprafață, dar necesită avans mai mare.
            </p>
          </section>

          {/* Calculator CTA */}
          <section className="bg-gradient-to-r from-[#0B1B3E] to-[#1a2d5a] text-white rounded-lg shadow-lg p-12 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Calculează rata pentru Prima Casă
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Introdu suma dorită și află exact cât vei plăti lunar cu avans de 5%. Compară oferte de la toate băncile participante la program.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Rata Acum →
            </Link>
          </section>

          {/* Bănci Prima Casa */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Bănci participante la programul Prima Casă
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/banci/bcr" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">BCR - Prima Casă</h3>
                <p className="text-gray-700">Lider pe piață, cu cele mai multe credite Prima Casă acordate. Aprobare rapidă și dobândă competitivă.</p>
              </Link>
              
              <Link href="/banci/bt" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">Banca Transilvania - Prima Casă</h3>
                <p className="text-gray-700">Aplicație 100% online, aprobare în 3-5 zile. Flexibilitate în rambursarea anticipată.</p>
              </Link>
              
              <Link href="/banci/ing" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">ING Bank - Prima Casă</h3>
                <p className="text-gray-700">Condiții speciale pentru clienți cu salariu la ING. Process digital complet.</p>
              </Link>
              
              <Link href="/banci/raiffeisen" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">Raiffeisen Bank - Prima Casă</h3>
                <p className="text-gray-700">Pachete complete cu asigurare inclusă și consiliere personalizată.</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link href="/#calculator" className="text-[#00D186] hover:underline font-semibold">
                Compară toate băncile participante →
              </Link>
            </div>
          </section>

          {/* Pasi aplicare */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Cum aplici pentru Prima Casă? (Ghid pas cu pas)
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Verifică eligibilitatea și calculează rata
                  </h3>
                  <p className="text-gray-700">
                    Asigură-te că îndeplinești condițiile: nu ai altă locuință, ai venit suficient, iar locuința dorită respectă limitele de valoare (140.000 euro) și suprafață (120 mp). Folosește <Link href="/#calculator" className="text-[#00D186] hover:underline">calculatorul nostru</Link> pentru a vedea rata lunară estimată.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Alege banca și depune cererea de preapro aprobare
                  </h3>
                  <p className="text-gray-700">
                    Compară ofertele de la <Link href="/banci/bcr" className="text-[#00D186] hover:underline">BCR</Link>, <Link href="/banci/bt" className="text-[#00D186] hover:underline">BT</Link>, <Link href="/banci/ing" className="text-[#00D186] hover:underline">ING</Link> și alte bănci. Completează formularul de preapprobare online sau la bancă. Vei primi răspuns în 24-48 ore dacă îndeplinești criteriile inițiale.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Strânge documentația necesară
                  </h3>
                  <p className="text-gray-700">
                    Pregătește: CI/pașaport, adeverință de venit (ultimele 3-6 luni), extras de cont, dovada avansului (extras bancar), declarație pe propria răspundere că nu ai altă locuință. Dacă ești PFA/SRL, vei avea nevoie de bilanț contabil și declarații fiscale.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Găsește locuința și solicită evaluarea
                  </h3>
                  <p className="text-gray-700">
                    Odată cu preaprobarea, începe căutarea locuinței. Când găsești proprietatea potrivită, banca va solicita o evaluare independentă (cost: 300-600 lei) pentru a stabili valoarea de piață. Evaluarea durează 2-3 zile lucrătoare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Obține aprobarea FNGCIMM și a băncii
                  </h3>
                  <p className="text-gray-700">
                    Banca va transmite dosarul către FNGCIMM (Fondul Național de Garantare) pentru aprobarea garanției de stat. Acest pas durează 3-5 zile lucrătoare. Apoi banca emite aprobarea finală de credit, incluzând valoarea exactă, dobânda și graficul de rambursare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Semnează contractul și devino proprietar
                  </h3>
                  <p className="text-gray-700">
                    Ultimul pas: semnarea contractului de credit la notar, împreună cu contractul de vânzare-cumpărare și actul de ipotecă. Banca transferă suma în contul vânzătorului, iar tu primești cheile noii tale locuințe. Felicitări – ești acum proprietar! 🏡
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Întrebări frecvente despre Prima Casă
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Ce este programul Prima Casă?
                </h3>
                <p className="text-gray-700">
                  Prima Casă este un program guvernamental care oferă garantii de stat pentru credite ipotecare destinate achiziției primei locuințe. Principalele avantaje sunt: avans minim de doar 5%, dobândă mai mică decât la creditele clasice și garanție de stat până la 60% din valoarea creditului.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Care sunt condițiile de eligibilitate pentru Prima Casă?
                </h3>
                <p className="text-gray-700">
                  Pentru a fi eligibil trebuie să: (1) nu deții altă locuință în proprietate, (2) ai minim 18 ani, (3) ai venit suficient pentru a acoperi rata (<Link href="/glosar#dti" className="text-[#00D186] hover:underline">DTI</Link> maxim 40-45%), (4) cumperi o locuință cu valoare maximă de 140.000 euro (450.000 lei) și suprafață sub 120 mp. Ambii soți trebuie să respecte aceste condiții.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Care este diferența între Prima Casă și un credit ipotecar clasic?
                </h3>
                <p className="text-gray-700">
                  Diferențele principale: (1) Avans minim 5% vs 15-25% la creditul clasic, (2) Dobândă mai mică datorită garanției de stat, (3) Valoare maximă 140.000 euro vs nelimitat, (4) Eligibilitate strictă - doar pentru prima locuință vs oricine cu venit adecvat, (5) Garanție de stat 60% vs fără garanție. Vezi <Link href="/produse/credit-ipotecar" className="text-[#00D186] hover:underline">comparația completă aici</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Cât timp durează aprobarea unui credit Prima Casă?
                </h3>
                <p className="text-gray-700">
                  Procesul de aprobare durează în medie 7-14 zile lucrătoare după depunerea documentației complete. Primești răspuns preliminar în 2-3 zile, iar aprobarea finală de la bancă și FNGCIMM (Fondul Național de Garantare) poate dura 5-10 zile suplimentare.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Pot lua Prima Casă pentru un apartament second-hand?
                </h3>
                <p className="text-gray-700">
                  Da, programul Prima Casă se aplică atât pentru locuințe noi, cât și pentru cele second-hand (vechi). Singura condiție este ca locuința să îndeplinească cerințele de suprafață (max 120 mp) și valoare (max 140.000 euro) și să aibă toate documentele în regulă.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Pot cumpăra o casă cu grădină prin Prima Casă?
                </h3>
                <p className="text-gray-700">
                  Da, poți cumpăra casă cu teren, dar există limite: suprafața construită trebuie să fie sub 120 mp, iar terenul să nu depășească 250 mp în urban sau 500 mp în rural. Valoarea totală (casă + teren) nu trebuie să depășească 140.000 euro.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0B1B3E] mb-6">
              Resurse utile și ghiduri Prima Casă
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/glosar#dae" className="text-[#00D186] hover:underline">
                📊 Ce este DAE (Dobânda Anuală Efectivă)?
              </Link>
              <Link href="/glosar#evaluare" className="text-[#00D186] hover:underline">
                🏠 Evaluarea imobilului
              </Link>
              <Link href="/glosar#garantie" className="text-[#00D186] hover:underline">
                ✅ Garanția de stat
              </Link>
              <Link href="/glosar#ircc" className="text-[#00D186] hover:underline">
                📈 IRCC - Indicele de Referință
              </Link>
              <Link href="/glosar#dti" className="text-[#00D186] hover:underline">
                💰 DTI - Gradul de îndatorare
              </Link>
              <Link href="/produse/credit-ipotecar" className="text-[#00D186] hover:underline">
                🏡 Credit ipotecar clasic
              </Link>
              <Link href="/produse/refinantare" className="text-[#00D186] hover:underline">
                🔄 Refinanțare credit
              </Link>
              <Link href="/contact" className="text-[#00D186] hover:underline">
                📞 Contactează-ne
              </Link>
              <Link href="/#calculator" className="text-[#00D186] hover:underline">
                🧮 Calculator Prima Casă
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-[#0B1B3E] text-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gata să-ți cumperi prima locuință?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Calculează rata pentru Prima Casă și primește oferte personalizate de la toate băncile participante. Avans de doar 5%, garanție de stat, răspuns în 24 ore.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Rata Prima Casă →
            </Link>
          </section>

        </div>
      </main>

      <Footer />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
