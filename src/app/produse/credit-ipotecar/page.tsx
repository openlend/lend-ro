import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Credit Ipotecar - Compară Oferte din 12+ Bănci | lend.ro',
  description: 'Credit ipotecar cu cele mai bune condiții în România. Compară oferte de la BCR, BT, ING, Raiffeisen și alte 12+ bănci. Calculator gratuit, răspuns în 24h.',
  keywords: 'credit ipotecar, credit imobiliar, credit pentru casa, credite bancare Romania, credit ipotecar calculator',
};

export default function CreditIpotecar() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ce este un credit ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Creditul ipotecar este un împrumut pe termen lung (5-30 ani) garantat cu o proprietate imobiliară. Banca îți oferă suma necesară pentru a cumpăra o casă sau apartament, iar tu rambursezi creditul în rate lunare fixe sau variabile. Proprietatea rămâne ipotecată în favoarea băncii până la achitarea completă a creditului."
        }
      },
      {
        "@type": "Question",
        "name": "Care este avansul minim necesar pentru un credit ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avansul minim variază între 15-25% din valoarea proprietății, în funcție de bancă și de tipul creditului. Pentru creditele Prima Casă, avansul poate fi de doar 5%. Unele bănci oferă condiții mai avantajoase pentru avansuri mai mari (peste 30-40%)."
        }
      },
      {
        "@type": "Question",
        "name": "Cât durează aprobarea unui credit ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procesul de aprobare durează în medie 5-10 zile lucrătoare după depunerea documentației complete. Prin lend.ro primești răspuns preliminar în 24-48 ore, iar analiza finală de la bancă poate dura 3-7 zile. Întregul proces, de la aplicație până la semnarea contractului, durează în medie 2-4 săptămâni."
        }
      },
      {
        "@type": "Question",
        "name": "Care sunt costurile suplimentare la un credit ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pe lângă rata lunară, vei avea costuri pentru: evaluarea imobilului (300-600 lei), asigurarea locuinței (0.1-0.3% anual), comision de acordare (0-1% din suma creditată), taxa de dosar (0-500 lei) și notarul pentru ipotecă (500-1500 lei). Estimează costuri totale de aproximativ 2-3% din valoarea creditului."
        }
      },
      {
        "@type": "Question",
        "name": "Pot obține credit ipotecar dacă am alt credit în derulare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, poți obține credit ipotecar chiar dacă ai alte credite active, dacă raportul DTI (gradul de îndatorare) nu depășește 40-50% din venitul net lunar. Banca va analiza toate obligațiile tale financiare existente și va verifica dacă îți poți permite rata noului credit ipotecar."
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
              Credit Ipotecar - Compară Oferte din 12+ Bănci
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Găsește cel mai avantajos credit ipotecar din România. Compară oferte personalizate de la BCR, BT, ING, Raiffeisen și alte bănci majore. Răspuns în 24 ore, fără costuri ascunse.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Rata Acum →
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          
          {/* Ce este creditul ipotecar */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Ce este creditul ipotecar?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Creditul ipotecar</strong> este un împrumut bancar pe termen lung (de obicei între 5 și 30 de ani) destinat achiziționării unei proprietăți imobiliare – casă, apartament sau teren. Spre deosebire de un credit de consum obișnuit, creditul ipotecar este garantat cu proprietatea pe care o cumperi, ceea ce înseamnă că proprietatea este ipotecată în favoarea băncii până la achitarea completă a datoriei.
              </p>
              <p>
                Această formă de finanțare îți permite să devii proprietar de locuință fără a avea întreaga sumă necesară în avans. În schimb, plătești o rată lunară care include atât o parte din suma principală împrumutată (principalul), cât și dobânda bancară. Ratele pot fi fixe sau variabile, în funcție de tipul de credit ales și de politica băncii.
              </p>
              <p>
                În România, creditele ipotecare sunt reglementate de Banca Națională și oferite de bănci precum <Link href="/banci/bcr" className="text-[#00D186] hover:underline">BCR</Link>, <Link href="/banci/bt" className="text-[#00D186] hover:underline">Banca Transilvania</Link>, <Link href="/banci/ing" className="text-[#00D186] hover:underline">ING Bank</Link>, <Link href="/banci/raiffeisen" className="text-[#00D186] hover:underline">Raiffeisen Bank</Link> și altele. Condițiile variază, de aceea compararea ofertelor este esențială pentru a găsi cele mai bune condiții adaptate situației tale financiare.
              </p>
            </div>
          </section>

          {/* Avantaje credit ipotecar */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Avantajele creditului ipotecar
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Dobândă mai mică decât la alte credite</strong>
                  <p className="text-gray-700 mt-1">Fiind garantat cu proprietatea imobiliară, creditul ipotecar beneficiază de cele mai mici dobânzi din piață – adesea între 5-8% pe an, mult mai favorabil decât un credit de consum (care poate ajunge și la 15-20%).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Perioadă de rambursare lungă (până la 30 de ani)</strong>
                  <p className="text-gray-700 mt-1">Poți împărți costul locuinței pe maximum 30 de ani, ceea ce face rata lunară mult mai accesibilă și mai ușor de gestionat în bugetul familiei.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Devii proprietar fără să plătești întreaga sumă în avans</strong>
                  <p className="text-gray-700 mt-1">Cu un avans de 15-25% și un <Link href="/glosar#dti" className="text-[#00D186] hover:underline">grad de îndatorare (DTI)</Link> sănătos, poți cumpăra o locuință și începe să construiești patrimoniu imediat, fără a aștepta ani de zile să economisești suma totală.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Diversitate de oferte și programe speciale</strong>
                  <p className="text-gray-700 mt-1">Piața bancară din România oferă multiple variante: de la <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">programul Prima Casă</Link> cu avans de doar 5% la credite clasice personalizate, cu sau fără asigurare de viață inclusă.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Posibilitatea refinanțării ulterioare</strong>
                  <p className="text-gray-700 mt-1">Dacă condițiile pieței se îmbunătățesc sau venitul tău crește, poți <Link href="/produse/refinantare" className="text-[#00D186] hover:underline">refinanța creditul</Link> pentru o dobândă mai mică sau o perioadă diferită, economisind mii de euro pe durata contractului.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Protecție și stabilitate pentru familie</strong>
                  <p className="text-gray-700 mt-1">Investiția într-o locuință proprie oferă siguranță pe termen lung, protecție față de fluctuațiile chiriilor și posibilitatea de a lăsa un patrimoniu copiilor.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Pentru cine e potrivit */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Pentru cine este potrivit creditul ipotecar?
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  🏡 Tineri și familii care vor prima locuință
                </h3>
                <p className="text-gray-700">
                  Dacă ești la începutul carierei sau ai o familie tânără și vrei să ieși din chirie, creditul ipotecar este soluția ideală. Prin <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">programul Prima Casă</Link>, poți obține un credit cu avans de doar 5% și dobândă avantajoasă, perfect pentru cumpărarea primei proprietăți.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  💼 Profesioniști cu venit stabil și perspective de creștere
                </h3>
                <p className="text-gray-700">
                  Dacă ai un loc de muncă stabil (contract pe perioadă nedeterminată sau PFA/SRL cu istoric financiar solid), banca va vedea în tine un client de încredere. Cu un venit predictibil și un <Link href="/glosar#ircc" className="text-[#00D186] hover:underline">IRCC</Link> favorabil, poți negocia condiții excelente și o perioadă de creditare optimă.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  🏠 Cumpărători care doresc să investească în imobiliare
                </h3>
                <p className="text-gray-700">
                  Chiar dacă deja ai o locuință, un credit ipotecar poate fi folosit pentru achiziția unei a doua proprietăți – de exemplu, pentru închiriere sau ca investiție pe termen lung. Băncile oferă și credite pentru renovări majore sau extinderi ale proprietății existente.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  🔄 Clienți care vor să-și refinanțeze creditul actual
                </h3>
                <p className="text-gray-700">
                  Ai deja un credit ipotecar, dar condițiile nu mai sunt competitive? <Link href="/produse/refinantare" className="text-[#00D186] hover:underline">Refinanțarea</Link> îți permite să muți creditul la o altă bancă cu dobândă mai mică, economisind semnificativ pe durata rămasă a creditului. Ideal pentru cei care au contracte vechi cu dobânzi mari.
                </p>
              </div>
            </div>
          </section>

          {/* Cum funcționează */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Cum funcționează un credit ipotecar? (Ghid pas cu pas)
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Folosește calculatorul de credite ipotecare
                  </h3>
                  <p className="text-gray-700">
                    Introdu suma dorită, avansul disponibil și perioada de creditare în <Link href="/#calculator" className="text-[#00D186] hover:underline">calculatorul nostru gratuit</Link>. În câteva secunde vei vedea o estimare a ratei lunare și vei putea compara ofertele de la cele mai importante bănci din România.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Compară ofertele și alege banca potrivită
                  </h3>
                  <p className="text-gray-700">
                    Analizează dobânzile, comisioanele, flexibilitatea rambursării anticipate și serviciile adiționale. Verifică ofertele de la <Link href="/banci/bcr" className="text-[#00D186] hover:underline">BCR</Link>, <Link href="/banci/bt" className="text-[#00D186] hover:underline">BT</Link>, <Link href="/banci/ing" className="text-[#00D186] hover:underline">ING</Link>, <Link href="/banci/raiffeisen" className="text-[#00D186] hover:underline">Raiffeisen</Link> și alege-o pe cea mai avantajoasă pentru situația ta.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Depune cererea online sau la bancă
                  </h3>
                  <p className="text-gray-700">
                    Completează formularul de preaprobareși trimite actele necesare (CI/buletin, adeverință de venit, extras de cont). Majoritatea băncilor oferă aplicație 100% online, iar prin lend.ro primești răspuns preliminar în 24-48 de ore.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Evaluarea proprietății și verificarea documentelor
                  </h3>
                  <p className="text-gray-700">
                    Banca va solicita evaluarea imobilului de către un evaluator autorizat (cost: 300-600 lei) și va verifica documentele juridice ale proprietății (extras CF, certificat urbanism). Acest pas durează în medie 5-7 zile lucrătoare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Aprobarea finală și semnarea contractului
                  </h3>
                  <p className="text-gray-700">
                    Odată ce totul este în regulă, vei primi aprobarea finală și vei semna contractul de credit la notar împreună cu reprezentantul băncii. Banca va transfera suma în contul vânzătorului, iar tu vei începe să plătești ratele lunare conform graficului de rambursare stabilit. Felicitări – ești proprietar!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="bg-gradient-to-r from-[#0B1B3E] to-[#1a2d5a] text-white rounded-lg shadow-lg p-12 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Calculează rata creditului ipotecar în 2 minute
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Compară oferte de la 12+ bănci și află care este rata lunară pentru locuința ta de vis. Gratuit, fără obligații.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Rata Acum →
            </Link>
          </section>

          {/* Bănci recomandate */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Bănci recomandate pentru credite ipotecare
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/banci/bcr" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">BCR (Banca Comercială Română)</h3>
                <p className="text-gray-700">Lider pe piața creditelor ipotecare, cu dobânzi competitive și proces de aprobare rapid. Disponibil și pentru Prima Casă.</p>
              </Link>
              
              <Link href="/banci/bt" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">Banca Transilvania</h3>
                <p className="text-gray-700">Credite ipotecare flexibile, cu perioadă de grație și posibilitate de rambursare anticipată fără penalități.</p>
              </Link>
              
              <Link href="/banci/ing" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">ING Bank</h3>
                <p className="text-gray-700">Aplicație 100% online, aprobare rapidă și dobândă avantajoasă pentru clienți existenți cu salariu la ING.</p>
              </Link>
              
              <Link href="/banci/raiffeisen" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">Raiffeisen Bank</h3>
                <p className="text-gray-700">Condiții speciale pentru angajați la companii partenere și pachete complete cu asigurare inclusă.</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link href="/#calculator" className="text-[#00D186] hover:underline font-semibold">
                Compară toate băncile →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Întrebări frecvente despre creditele ipotecare
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Ce este un credit ipotecar?
                </h3>
                <p className="text-gray-700">
                  Creditul ipotecar este un împrumut pe termen lung (5-30 ani) garantat cu o proprietate imobiliară. Banca îți oferă suma necesară pentru a cumpăra o casă sau apartament, iar tu rambursezi creditul în rate lunare fixe sau variabile. Proprietatea rămâne ipotecată în favoarea băncii până la achitarea completă a creditului.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Care este avansul minim necesar pentru un credit ipotecar?
                </h3>
                <p className="text-gray-700">
                  Avansul minim variază între 15-25% din valoarea proprietății, în funcție de bancă și de tipul creditului. Pentru creditele <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">Prima Casă</Link>, avansul poate fi de doar 5%. Unele bănci oferă condiții mai avantajoase pentru avansuri mai mari (peste 30-40%).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Cât durează aprobarea unui credit ipotecar?
                </h3>
                <p className="text-gray-700">
                  Procesul de aprobare durează în medie 5-10 zile lucrătoare după depunerea documentației complete. Prin lend.ro primești răspuns preliminar în 24-48 ore, iar analiza finală de la bancă poate dura 3-7 zile. Întregul proces, de la aplicație până la semnarea contractului, durează în medie 2-4 săptămâni.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Care sunt costurile suplimentare la un credit ipotecar?
                </h3>
                <p className="text-gray-700">
                  Pe lângă rata lunară, vei avea costuri pentru: evaluarea imobilului (300-600 lei), asigurarea locuinței (0.1-0.3% anual), comision de acordare (0-1% din suma creditată), taxa de dosar (0-500 lei) și notarul pentru ipotecă (500-1500 lei). Estimează costuri totale de aproximativ 2-3% din valoarea creditului. Vezi <Link href="/glosar#dae" className="text-[#00D186] hover:underline">DAE (Dobânda Anuală Efectivă)</Link> pentru costul real total.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Pot obține credit ipotecar dacă am alt credit în derulare?
                </h3>
                <p className="text-gray-700">
                  Da, poți obține credit ipotecar chiar dacă ai alte credite active, dacă raportul <Link href="/glosar#dti" className="text-[#00D186] hover:underline">DTI (gradul de îndatorare)</Link> nu depășește 40-50% din venitul net lunar. Banca va analiza toate obligațiile tale financiare existente și va verifica dacă îți poți permite rata noului credit ipotecar.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0B1B3E] mb-6">
              Resurse utile și ghiduri
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/glosar#ircc" className="text-[#00D186] hover:underline">
                📊 Ce este IRCC?
              </Link>
              <Link href="/glosar#dti" className="text-[#00D186] hover:underline">
                💰 Gradul de îndatorare (DTI)
              </Link>
              <Link href="/glosar#avans" className="text-[#00D186] hover:underline">
                🏦 Ce înseamnă avansul?
              </Link>
              <Link href="/glosar#dae" className="text-[#00D186] hover:underline">
                📈 DAE - Dobânda Anuală Efectivă
              </Link>
              <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">
                🏡 Programul Prima Casă
              </Link>
              <Link href="/produse/refinantare" className="text-[#00D186] hover:underline">
                🔄 Refinanțare credit ipotecar
              </Link>
              <Link href="/contact" className="text-[#00D186] hover:underline">
                📞 Contactează-ne
              </Link>
              <Link href="/#calculator" className="text-[#00D186] hover:underline">
                🧮 Calculator credite
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-[#0B1B3E] text-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gata să începi?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Calculează rata creditului ipotecar și primește oferte personalizate de la cele mai importante bănci din România. Răspuns în 24 ore, fără costuri.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Rata → Gratuit
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
