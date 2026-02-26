import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refinanțare Credit Ipotecar - Rată Mai Mică, Economii Garantate | lend.ro',
  description: 'Refinanțează creditul ipotecar și economisește până la 30% din rata lunară. Compară oferte de la BCR, BT, ING și alte bănci. Proces rapid, fără costuri ascunse.',
  keywords: 'refinantare credit, refinantare ipotecar, rata mai mica, schimbare banca, restructurare credit',
};

export default function Refinantare() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ce înseamnă refinanțarea unui credit ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refinanțarea înseamnă transferarea creditului ipotecar de la banca actuală la o altă bancă care oferă condiții mai avantajoase (dobândă mai mică, perioadă diferită sau rate mai flexibile). Noua bancă plătește soldul rămas la vechea bancă, iar tu continui să plătești ratele la noua instituție cu condiții îmbunătățite."
        }
      },
      {
        "@type": "Question",
        "name": "Când merită să refinanțez creditul ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Merită să refinanțezi dacă: (1) diferența de dobândă este de minim 0.5-1%, (2) mai ai de plătit minim 5 ani din credit, (3) soldul rămas este semnificativ (peste 50.000 euro), (4) venitul tău a crescut și vrei să reduci perioada, sau (5) vrei să consolidezi mai multe credite într-unul singur."
        }
      },
      {
        "@type": "Question",
        "name": "Cât costă refinanțarea unui credit ipotecar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costurile refinanțării includ: evaluarea imobilului (300-600 lei), comision de rambursare anticipată la vechea bancă (0-2%, dacă există), comision de acordare la noua bancă (0-1%), notar pentru ipotecă (500-1500 lei), asigurare nouă (0.1-0.3% anual). Total estimat: 1.5-3% din soldul creditului, recuperabile rapid prin economiile la dobândă."
        }
      },
      {
        "@type": "Question",
        "name": "Cât timp durează procesul de refinanțare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refinanțarea durează în medie 2-4 săptămâni: preaprobarea (2-3 zile), evaluarea proprietății (3-5 zile), aprobarea finală (5-7 zile), semnarea și transferul bancar (1-2 săptămâni). Prin lend.ro poți accelera procesul primind oferte preliminare în 24-48 ore."
        }
      },
      {
        "@type": "Question",
        "name": "Pot refinanța un credit Prima Casă?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, poți refinanța un credit Prima Casă, dar vei pierde garanția de stat oferită de programul guvernamental. Asigură-te că noile condiții (dobândă mai mică, rată mai convenabilă) compensează pierderea acestui avantaj. Multe persoane refinanțează după ce au achitat peste 50% din credit și garanția devine mai puțin relevantă."
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
              Refinanțare Credit - Rată Mai Mică, Economii Garantate
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Transferă creditul ipotecar la o bancă cu condiții mai bune și economisește până la 30% din rata lunară. Compară oferte de refinanțare de la BCR, BT, ING, Raiffeisen și alte bănci. Proces simplu, economii reale.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Economiile →
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          
          {/* Ce este refinantarea */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Ce este refinanțarea unui credit ipotecar?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Refinanțarea unui credit ipotecar</strong> este procesul prin care transferi creditul actual de la banca la care l-ai contractat inițial către o altă bancă care oferă condiții mai avantajoase – dobândă mai mică, perioadă diferită de rambursare sau flexibilitate sporită. Practic, noua bancă preia datoria ta față de vechea bancă, plătind soldul rămas, iar tu continui să plătești ratele către noua instituție financiară, dar cu condiții mai bune.
              </p>
              <p>
                Motivele principale pentru refinanțare sunt economice: dacă dobânda pieței a scăzut de când ai luat creditul, dacă venitul tău a crescut și vrei să reduci perioada de creditare (și implicit costul total al dobânzii), sau pur și simplu dacă o altă bancă îți oferă pachete mai competitive. Diferența de dobândă poate părea mică – de exemplu, de la 7% la 5.5% – dar pe durata unui credit de 20-30 de ani, această diferență se traduce în economii de zeci de mii de euro.
              </p>
              <p>
                Refinanțarea este disponibilă pentru orice tip de <Link href="/produse/credit-ipotecar" className="text-[#00D186] hover:underline">credit ipotecar</Link>: credite clasice, <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">Prima Casă</Link>, credite pentru construcție sau credite pentru achiziția unei a doua proprietăți. Procesul este similar cu obținerea unui credit nou: trebuie să îndeplinești criteriile de eligibilitate (venit stabil, istoric bun de plată), iar banca va evalua din nou proprietatea pentru a stabili valoarea actualizată.
              </p>
              <p>
                În România, majoritatea băncilor majore oferă pachete competitive de refinanțare: <Link href="/banci/bcr" className="text-[#00D186] hover:underline">BCR</Link>, <Link href="/banci/bt" className="text-[#00D186] hover:underline">Banca Transilvania</Link>, <Link href="/banci/ing" className="text-[#00D186] hover:underline">ING Bank</Link>, <Link href="/banci/raiffeisen" className="text-[#00D186] hover:underline">Raiffeisen Bank</Link>, Alpha Bank, Unicredit și altele. Competiția între bănci pentru clienți buni (cu istoric solid de plată) înseamnă că ai putere de negociere și poți obține oferte excelente.
              </p>
            </div>
          </section>

          {/* Cand merita sa refinantezi */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Când merită să refinanțezi creditul ipotecar?
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  📉 Diferență semnificativă de dobândă (minim 0.5-1%)
                </h3>
                <p className="text-gray-700">
                  Dacă dobânda curentă la noua bancă este cu minim 0.5-1% mai mică decât ce plătești acum, merită să calculezi economiile. De exemplu, dacă ai un credit de 150.000 euro la 7% dobândă și poți refinanța la 5.5%, vei economisi aproximativ 200-300 euro lunar și zeci de mii de euro pe întreaga durată a creditului.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  ⏳ Mai ai de plătit minim 5 ani din credit
                </h3>
                <p className="text-gray-700">
                  Refinanțarea are sens dacă mai ai o perioadă semnificativă de rambursat – ideal minim 5-10 ani. Dacă mai ai de plătit doar 2-3 ani, costurile refinanțării (evaluare, notar, comisioane) s-ar putea să nu fie recuperate prin economiile la dobândă. Calculează <Link href="/glosar#dae" className="text-[#00D186] hover:underline">DAE (Dobânda Anuală Efectivă)</Link> pentru ambele scenarii.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  💰 Soldul rămas este semnificativ (peste 50.000 euro)
                </h3>
                <p className="text-gray-700">
                  Cu cât soldul rămas este mai mare, cu atât economiile din reducerea dobânzii sunt mai mari. Pentru un sold de 30.000 euro, economiile pot fi mici și să nu justifice efortul. Dar pentru 100.000-200.000 euro, diferența devine substanțială – uneori câteva sute de euro pe lună.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  📈 Venitul tău a crescut și vrei să reduci perioada
                </h3>
                <p className="text-gray-700">
                  Dacă câștigi acum mai mult decât când ai luat creditul, poți refinanța pentru a reduce perioada de rambursare (de exemplu, de la 25 la 15 ani), plătind rate mai mari lunar, dar economisind semnificativ la dobânda totală. Alternativ, poți menține aceeași rată lunară și achita creditul mai repede prin <Link href="/glosar#rambursare-anticipata" className="text-[#00D186] hover:underline">rambursări anticipate</Link>.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00D186] pl-6">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  🔗 Vrei să consolidezi mai multe credite într-unul singur
                </h3>
                <p className="text-gray-700">
                  Dacă ai și un credit ipotecar și un credit de consum (auto, nevoi personale), poți consolida totul într-un singur credit ipotecar cu dobândă mai mică. Creditele ipotecare au întotdeauna dobânzi mai mici decât creditele de consum, așa că mutarea datoriilor într-un singur credit garantat cu proprietatea poate reduce substanțial costurile totale.
                </p>
              </div>
            </div>
          </section>

          {/* Avantaje refinantare */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Avantajele refinanțării creditului ipotecar
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Dobândă mai mică = economii lunare și totale</strong>
                  <p className="text-gray-700 mt-1">Principalul avantaj: plătești mai puțin dobândă lunar, ceea ce înseamnă rate mai mici sau achitare mai rapidă. O reducere de 1% la dobândă pe un credit de 150.000 euro poate însemna economii de 25.000-40.000 euro pe durata totală a creditului.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Flexibilitate în alegerea perioadei de creditare</strong>
                  <p className="text-gray-700 mt-1">Poți alege să scurtezi perioada (rate mai mari, dar îți termini creditul mai repede și plătești mai puțină dobândă totală) sau să o prelungești (rate mai mici lunar, dar cost total mai mare). Totul depinde de situația ta financiară și prioritățile pe termen lung.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Consolidarea mai multor credite într-unul singur</strong>
                  <p className="text-gray-700 mt-1">Dacă ai credit ipotecar + credit auto + card de credit, poți consolida totul într-un singur credit ipotecar cu dobândă mică. Simplifici gestionarea (o singură rată lunar), reduci costurile (dobândă mai mică) și îmbunătățești fluxul de numerar.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Acces la servicii bancare mai bune</strong>
                  <p className="text-gray-700 mt-1">Unele bănci oferă, în pachetul de refinanțare, beneficii suplimentare: cont curent gratuit, card de credit cu condiții avantajoase, asigurări incluse sau reduceri la servicii bancare. Compară nu doar dobânda, ci întregul pachet oferit.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Posibilitatea de a accesa capital suplimentar</strong>
                  <p className="text-gray-700 mt-1">Dacă valoarea proprietății tale a crescut de când ai luat creditul inițial, poți refinanța pentru o sumă mai mare și folosi diferența pentru renovări, investiții sau alte nevoi. De exemplu, dacă ai un credit de 100.000 euro, dar casa valorează acum 200.000 euro, poți refinanța pentru 120.000 euro și folosi 20.000 euro pentru îmbunătățiri.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#00D186] font-bold text-xl">✓</span>
                <div>
                  <strong className="text-[#0B1B3E]">Schimbarea tipului de dobândă (fixă vs variabilă)</strong>
                  <p className="text-gray-700 mt-1">Poți trece de la dobândă variabilă (legată de <Link href="/glosar#ircc" className="text-[#00D186] hover:underline">IRCC</Link>) la dobândă fixă (predictibilitate pe termen lung) sau invers, în funcție de previziunile economice și de preferințele tale de risc.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Cum functioneaza procesul */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Cum funcționează procesul de refinanțare? (Ghid pas cu pas)
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Evaluează situația actuală și calculează economiile potențiale
                  </h3>
                  <p className="text-gray-700">
                    Verifică contractul actual: care este dobânda, soldul rămas, perioada rămasă? Folosește <Link href="/#calculator" className="text-[#00D186] hover:underline">calculatorul nostru</Link> pentru a estima economiile dintr-o refinanțare. Introdu soldul actual, dobânda actuală și compară cu ofertele noi de la alte bănci. Dacă economisești minim 100-200 euro lunar, merită să continui.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Compară ofertele de refinanțare de la mai multe bănci
                  </h3>
                  <p className="text-gray-700">
                    Solicită oferte de la <Link href="/banci/bcr" className="text-[#00D186] hover:underline">BCR</Link>, <Link href="/banci/bt" className="text-[#00D186] hover:underline">Banca Transilvania</Link>, <Link href="/banci/ing" className="text-[#00D186] hover:underline">ING</Link>, <Link href="/banci/raiffeisen" className="text-[#00D186] hover:underline">Raiffeisen</Link> și alte bănci. Compară nu doar dobânda, ci și comisioanele, flexibilitatea rambursării anticipate, asigurările incluse și serviciile conexe. Prin lend.ro primești oferte preliminare în 24-48 ore.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Depune cererea de preapprobare la noua bancă
                  </h3>
                  <p className="text-gray-700">
                    Completează formularul de preapprobare și trimite documentele inițiale: CI, adeverință de venit, extras de cont, contractul de credit actual, extras CF al proprietății. Banca va verifica eligibilitatea ta și îți va comunica în 2-3 zile dacă îndeplinești condițiile pentru refinanțare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Evaluarea proprietății și verificarea documentației juridice
                  </h3>
                  <p className="text-gray-700">
                    Noua bancă va solicita o evaluare actualizată a proprietății (cost: 300-600 lei) pentru a stabili valoarea de piață curentă. De asemenea, va verifica extrasul de Carte Funciară pentru a confirma că nu există sarcini noi, litigii sau restricții. Procesul durează 3-5 zile lucrătoare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Aprobarea finală și pregătirea documentelor de transfer
                  </h3>
                  <p className="text-gray-700">
                    Odată ce totul este în regulă, noua bancă emite aprobarea finală și pregătește documentele de transfer. Vei primi detalii despre dobânda exactă, rata lunară nouă, graficul de rambursare și toate costurile asociate. Verifică că economiile estimate se regăsesc în oferta finală.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Notificare vechii bănci și rambursare anticipată
                  </h3>
                  <p className="text-gray-700">
                    Informează banca actuală că vrei să rambursezi anticipat creditul (de obicei, trebuie să anunți cu 10-30 zile înainte). Solicită un deviz de sold – documentul care arată exact cât datorezi la o anumită dată. Verifică dacă există comision de rambursare anticipată în contractul tău actual (de obicei 0-2% din sold).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D186] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                    Semnarea contractului și transferul bancar
                  </h3>
                  <p className="text-gray-700">
                    Semnezi contractul de credit cu noua bancă la notar, împreună cu noul act de ipotecă. Noua bancă transferă suma în contul vechii bănci pentru a achita soldul rămas. Vechea ipotecă este ridicată, iar noua ipotecă este înregistrată în Cartea Funciară. De acum plătești ratele către noua bancă, la condiții mai bune. Felicitări – tocmai ai economisit bani! 💰
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="bg-gradient-to-r from-[#0B1B3E] to-[#1a2d5a] text-white rounded-lg shadow-lg p-12 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Calculează cât poți economisi prin refinanțare
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Introdu soldul actual al creditului și compară rata actuală cu ofertele de refinanțare. Vezi economiile lunare și totale. Gratuit, fără obligații.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Economiile →
            </Link>
          </section>

          {/* Bănci recomandate pentru refinantare */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Bănci recomandate pentru refinanțare
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/banci/bcr" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">BCR - Refinanțare</h3>
                <p className="text-gray-700">Dobânzi competitive, fără comision de acordare pentru refinanțări. Proces rapid și transparent.</p>
              </Link>
              
              <Link href="/banci/bt" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">Banca Transilvania - Refinanțare</h3>
                <p className="text-gray-700">Oferte speciale pentru refinanțare, fără penalități pentru rambursare anticipată ulterioară.</p>
              </Link>
              
              <Link href="/banci/ing" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">ING Bank - Refinanțare</h3>
                <p className="text-gray-700">100% online, aprobare rapidă. Reduceri suplimentare pentru clienți cu salariu la ING.</p>
              </Link>
              
              <Link href="/banci/raiffeisen" className="border border-gray-200 rounded-lg p-6 hover:border-[#00D186] transition-colors">
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">Raiffeisen Bank - Refinanțare</h3>
                <p className="text-gray-700">Pachete complete cu asigurări incluse, condiții flexibile de rambursare.</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link href="/#calculator" className="text-[#00D186] hover:underline font-semibold">
                Compară toate băncile →
              </Link>
            </div>
          </section>

          {/* Costuri refinantare */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Costurile refinanțării - Ce cheltuieli să te aștepți
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-[#0B1B3E]">Evaluarea imobilului</h3>
                  <p className="text-gray-600 text-sm">Evaluare independentă pentru noua bancă</p>
                </div>
                <span className="font-bold text-[#0B1B3E]">300-600 lei</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-[#0B1B3E]">Comision de rambursare anticipată (vechea bancă)</h3>
                  <p className="text-gray-600 text-sm">Dacă este prevăzut în contract (mulți nu mai au)</p>
                </div>
                <span className="font-bold text-[#0B1B3E]">0-2% din sold</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-[#0B1B3E]">Comision de acordare (noua bancă)</h3>
                  <p className="text-gray-600 text-sm">Unele bănci renunță la acest comision pentru refinanțări</p>
                </div>
                <span className="font-bold text-[#0B1B3E]">0-1% din credit</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-[#0B1B3E]">Taxă de dosar</h3>
                  <p className="text-gray-600 text-sm">Procesare administrativă</p>
                </div>
                <span className="font-bold text-[#0B1B3E]">0-500 lei</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-[#0B1B3E]">Notar și ipotecă</h3>
                  <p className="text-gray-600 text-sm">Ridicare ipotecă veche + înregistrare ipotecă nouă</p>
                </div>
                <span className="font-bold text-[#0B1B3E]">500-1500 lei</span>
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-[#0B1B3E]">Asigurare locuință (obligatorie)</h3>
                  <p className="text-gray-600 text-sm">Prima anuală, reînnoită la noua bancă</p>
                </div>
                <span className="font-bold text-[#0B1B3E]">0.1-0.3% anual</span>
              </div>
              
              <div className="bg-[#00D186] bg-opacity-10 p-6 rounded-lg mt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-[#0B1B3E] text-lg">TOTAL ESTIMAT</h3>
                    <p className="text-gray-600 text-sm">Pentru un credit de 100.000 euro</p>
                  </div>
                  <span className="font-bold text-[#0B1B3E] text-2xl">1.5-3%</span>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  💡 <strong>Important:</strong> Aceste costuri sunt recuperate rapid prin economiile la dobândă. De exemplu, dacă economisești 150 euro/lună, recuperezi costurile în 6-12 luni, iar după aceea toate economiile sunt pure.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B3E] mb-6">
              Întrebări frecvente despre refinanțare
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Ce înseamnă refinanțarea unui credit ipotecar?
                </h3>
                <p className="text-gray-700">
                  Refinanțarea înseamnă transferarea creditului ipotecar de la banca actuală la o altă bancă care oferă condiții mai avantajoase (dobândă mai mică, perioadă diferită sau rate mai flexibile). Noua bancă plătește soldul rămas la vechea bancă, iar tu continui să plătești ratele la noua instituție cu condiții îmbunătățite.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Când merită să refinanțez creditul ipotecar?
                </h3>
                <p className="text-gray-700">
                  Merită să refinanțezi dacă: (1) diferența de dobândă este de minim 0.5-1%, (2) mai ai de plătit minim 5 ani din credit, (3) soldul rămas este semnificativ (peste 50.000 euro), (4) venitul tău a crescut și vrei să reduci perioada, sau (5) vrei să consolidezi mai multe credite într-unul singur. Folosește <Link href="/#calculator" className="text-[#00D186] hover:underline">calculatorul nostru</Link> pentru a estima economiile.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Cât costă refinanțarea unui credit ipotecar?
                </h3>
                <p className="text-gray-700">
                  Costurile refinanțării includ: evaluarea imobilului (300-600 lei), comision de rambursare anticipată la vechea bancă (0-2%, dacă există), comision de acordare la noua bancă (0-1%), notar pentru ipotecă (500-1500 lei), asigurare nouă (0.1-0.3% anual). Total estimat: 1.5-3% din soldul creditului, recuperabile rapid prin economiile la dobândă.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Cât timp durează procesul de refinanțare?
                </h3>
                <p className="text-gray-700">
                  Refinanțarea durează în medie 2-4 săptămâni: preaprobarea (2-3 zile), evaluarea proprietății (3-5 zile), aprobarea finală (5-7 zile), semnarea și transferul bancar (1-2 săptămâni). Prin lend.ro poți accelera procesul primind oferte preliminare în 24-48 ore.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0B1B3E] mb-2">
                  Pot refinanța un credit Prima Casă?
                </h3>
                <p className="text-gray-700">
                  Da, poți refinanța un <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">credit Prima Casă</Link>, dar vei pierde garanția de stat oferită de programul guvernamental. Asigură-te că noile condiții (dobândă mai mică, rată mai convenabilă) compensează pierderea acestui avantaj. Multe persoane refinanțează după ce au achitat peste 50% din credit și garanția devine mai puțin relevantă.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0B1B3E] mb-6">
              Resurse utile și ghiduri refinanțare
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/glosar#refinantare" className="text-[#00D186] hover:underline">
                🔄 Ce este refinanțarea?
              </Link>
              <Link href="/glosar#rambursare-anticipata" className="text-[#00D186] hover:underline">
                💰 Rambursare anticipată
              </Link>
              <Link href="/glosar#dae" className="text-[#00D186] hover:underline">
                📊 DAE - Dobânda Anuală Efectivă
              </Link>
              <Link href="/glosar#ircc" className="text-[#00D186] hover:underline">
                📈 IRCC - Indicele de Referință
              </Link>
              <Link href="/produse/credit-ipotecar" className="text-[#00D186] hover:underline">
                🏡 Credit ipotecar
              </Link>
              <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline">
                🏠 Prima Casă
              </Link>
              <Link href="/contact" className="text-[#00D186] hover:underline">
                📞 Contactează-ne
              </Link>
              <Link href="/#calculator" className="text-[#00D186] hover:underline">
                🧮 Calculator refinanțare
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-[#0B1B3E] text-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gata să economisești bani?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Calculează economiile din refinanțare și primește oferte personalizate de la cele mai competitive bănci din România. Răspuns în 24 ore, fără costuri.
            </p>
            <Link 
              href="/#calculator"
              className="inline-block bg-[#00D186] text-[#0B1B3E] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#00E194] transition-colors"
            >
              Calculează Economiile → Gratuit
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
