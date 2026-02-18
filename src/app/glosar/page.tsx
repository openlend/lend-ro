import Footer from '@/components/Footer';

export const metadata = {
  title: 'Glosar Termeni Financiari - lend.ro',
  description: 'Dicționar complet cu termeni financiari pentru credite ipotecare în România - explicații simple și clare',
};

export default function Glosar() {
  const terms = [
    {
      term: "Avans (Down Payment)",
      definition: "Suma pe care o plătești din banii tăi la achiziționarea proprietății. De exemplu, la un apartament de 400.000 RON cu avans de 20%, vei plăti 80.000 RON cash, iar restul de 320.000 RON va fi credit. Avansul minim este 5% pentru prima casă și 25% pentru a doua proprietate."
    },
    {
      term: "Credit Ipotecar",
      definition: "Credit garantat cu o proprietate imobiliară (apartament, casă, teren). Dacă nu mai poți plăti ratele, banca poate executa ipoteca și vinde proprietatea pentru recuperarea banilor. Din cauza acestei garanții, dobânzile sunt mai mici decât la creditele de consum."
    },
    {
      term: "DAE (Dobânda Anuală Efectivă)",
      definition: "Costul REAL total al creditului exprimat ca procent anual. Include dobânda + comisioane + asigurări obligatorii. De exemplu, un credit cu dobândă 7% dar cu comisioane mari poate avea DAE de 8.5%. Compară întotdeauna DAE-ul, nu doar dobânda!"
    },
    {
      term: "Dobândă Fixă",
      definition: "Rata dobânzii rămâne constantă pe o perioadă stabilită (de obicei 2, 3 sau 5 ani). După expirare, devine variabilă. Avantaj: știi exact cât plătești în perioada fixă. Dezavantaj: de obicei e mai mare decât variabila inițial."
    },
    {
      term: "Dobândă Variabilă",
      definition: "Rata dobânzii se modifică periodic în funcție de un indice de referință (IRCC sau Euribor) + o marjă fixă a băncii. De exemplu: IRCC (5.68%) + marjă (2.8%) = 8.48%. Dacă IRCC scade, scade și dobânda ta (și invers)."
    },
    {
      term: "DTI (Debt-to-Income) / Grad de Îndatorare",
      definition: "Procentul din venitul lunar care merge către rate. Formula: (Rată lunară / Venit net lunar) × 100. De exemplu: rată 2,600 RON / venit 8,000 RON = 32.5% îndatorare. Băncile acceptă maxim 40-45% DTI. IMPORTANT: Se calculează întotdeauna cu rata cea mai mare posibilă (dobândă variabilă FĂRĂ virare venit)."
    },
    {
      term: "Euribor 6M (Euro Interbank Offered Rate)",
      definition: "Rata dobânzii la care băncile europene își împrumută bani între ele pe 6 luni. Folosită ca indice de referință pentru creditele în EURO. În februarie 2026: ~2.50%. Se actualizează lunar și influențează direct dobânda creditelor în EUR."
    },
    {
      term: "IRCC (Indicele de Referință pentru Creditele Consumatorilor)",
      definition: "Indicele oficial BNR pentru creditele în RON. Calculat trimestrial ca medie a dobânzilor la depozitele noi cu maturitate până la 2 ani. În februarie 2026: 6.72%. Când IRCC crește, cresc și ratele la creditele cu dobândă variabilă."
    },
    {
      term: "Prima Casă (Prima Casa)",
      definition: "Program guvernamental de susținere a achiziției primei locuințe. Avantaje: avans minim 5% (vs 25% credit clasic), dobândă subvenționată (parțial), valoare maximă eligibilă ~450.000 RON (depinde de localitate). Cerințe: să nu deții altă proprietate, venit minim 2,200 RON net."
    },
    {
      term: "Rambursare Anticipată",
      definition: "Plata creditului înainte de scadență (total sau parțial). De exemplu, dacă ai un bonus de 50.000 RON, poți plăti în avans și reduci rata/perioada. Unele bănci percep comision de rambursare anticipată (0-2% din suma plătită), altele nu."
    },
    {
      term: "Refinanțare",
      definition: "Mutarea creditului de la o bancă la alta pentru condiții mai bune (dobândă mai mică, rată mai mică, perioadă extinsă). De exemplu: ai credit la BT cu 8%, găsești ofertă la BCR cu 7%, îți muți creditul și economisești bani. Costă: taxă de rambursare anticipată + taxe notariale (~2,000-5,000 RON)."
    },
    {
      term: "Marjă Bancară (Bank Margin)",
      definition: "Procentul fix pe care îl adaugă banca la indicele de referință (IRCC/Euribor). De exemplu: IRCC 5.68% + marjă 2.8% = 8.48% total. Marja NU se modifică pe toată durata creditului, doar indicele variază. Negociază marja atunci când iei creditul!"
    },
    {
      term: "Asigurare de Viață (Life Insurance)",
      definition: "Asigurare obligatorie care protejează familia în caz de deces. Dacă mori, asigurarea plătește restul creditului. Cost: ~0.10-0.30% din suma creditului/an. De exemplu: credit 300.000 RON → ~300-900 RON/an asigurare."
    },
    {
      term: "Asigurare de Bunuri (Property Insurance)",
      definition: "Asigurare obligatorie a proprietății împotriva incendiu, cutremur, inundații. Cost: ~0.10-0.20% din valoarea proprietății/an. De exemplu: casă 400.000 RON → ~400-800 RON/an. Se plătește anual pe toată durata creditului."
    },
    {
      term: "Evaluare Imobiliară (Property Appraisal)",
      definition: "Raport realizat de un evaluator autorizat care stabilește valoarea de piață a proprietății. Costă ~300-800 RON. Banca acordă credit maxim 90-95% din valoarea de evaluare (nu de vânzare!). Dacă vinzătorul cere 450.000 dar evaluatorul zice 400.000, banca calculează avansul din 400.000."
    },
    {
      term: "Virare Venit (Salary Transfer)",
      definition: "Condiție prin care îți muți salariul în contul băncii creditoare. Avantaj: reducere dobândă (0.10-0.50%). De exemplu: marjă 3% CU virare vs 3.2% FĂRĂ virare. Dezavantaj: ești legat de banca respectivă pentru salariu."
    },
    {
      term: "Card de Debit (Debit Card)",
      definition: "Unele bănci cer deschiderea unui card de debit ca și condiție pentru credit. Cost: 0-100 RON/an. Nu e obligatoriu să îl folosești, dar trebuie să îl ai activ. Unele bănci scad dobânda dacă cheltui lunar minim X RON pe card."
    },
    {
      term: "Perioadă de Grație (Grace Period)",
      definition: "Perioadă (de obicei 6-24 luni) în care plătești doar dobânda, nu și principalul. Folositor în construcții când încă investești în finisaje. Atenție: creditul nu scade deloc în această perioadă, doar amâni plata principalului."
    },
    {
      term: "Grafic de Rambursare (Amortization Schedule)",
      definition: "Tabel detaliat cu toate ratele pe toată perioada creditului: data, suma, dobândă, principal, sold rămas. Primii ani plătești mai multă dobândă decât principal. De exemplu: rată 3,000 RON poate fi 2,200 dobândă + 800 principal în primul an."
    },
    {
      term: "Comision de Analiza Dosarului",
      definition: "Taxă unică percepută de bancă pentru studierea cererii tale de credit. Variază între 0-500 RON. Unele bănci o scot complet în campanii promoționale. Se plătește o singură dată, chiar dacă creditul e respins."
    },
    {
      term: "Comision de Acordare",
      definition: "Procent din valoarea creditului perceput la semnarea contractului. De exemplu: credit 300.000 RON, comision 0.5% = 1,500 RON. Unele bănci au 0% comision de acordare în campanii. Se plătește din banii proprii (nu din credit)."
    },
    {
      term: "Certificat de Sarcini (Property Title Report)",
      definition: "Document oficial emis de Oficiul de Cadastru care arată dacă proprietatea are datorii, ipoteci, litigii. Costă ~50 RON, valabil 30 zile. Banca îl cere obligatoriu pentru a verifica că proprietatea e 'curată' înainte de acordarea creditului."
    },
    {
      term: "Broker de Credite (Mortgage Broker)",
      definition: "Intermediar între tine și bănci. Te ajută să găsești cea mai bună ofertă din piață, pregătește dosarul, negociază condiții. Nu îți ia bani - e plătit de bancă prin comision. Avantaj: economisești timp și poți obține condiții mai bune prin parteneriatul brokerului cu băncile."
    },
    {
      term: "CAR (Codul Administrativ de Referință)",
      definition: "Cod numeric unic al unei proprietăți în sistemul de cadastru românesc. De exemplu: 123456-C1-U10. Necesar pentru identificarea exactă a imobilului în contracte și documente oficiale."
    },
    {
      term: "Credit Verde (Green Loan)",
      definition: "Credit ipotecar cu dobândă mai mică pentru proprietăți cu clasă energetică A sau B (eficiente energetic). Reducere: 0.10-0.50% față de creditele clasice. Avantaj: economii lunare + case eco-friendly."
    },
    {
      term: "Sold Rămas (Outstanding Balance)",
      definition: "Suma pe care mai ai de plătit către bancă la un moment dat. De exemplu: ai luat 300.000 RON, după 5 ani ai plătit 50.000 RON principal → sold rămas 250.000 RON. Din fiecare rată, o parte merge la principal (scade soldul) și o parte la dobândă."
    },
    {
      term: "BNR (Banca Națională a României)",
      definition: "Banca centrală care reglementează sistemul bancar românesc. Stabilește rata dobânzii de politică monetară, calculează IRCC, supraveghează băncile. Anunțurile BNR despre dobânzi influențează direct piața creditelor."
    },
    {
      term: "Coborâtorul (Co-borrower)",
      definition: "Persoană care semnează creditul împreună cu tine (de obicei soț/soție, părinte, partener). Ambii sunteți răspunzători pentru plata ratelor. Avantaj: venitul coborâtorului se ia în calcul → poți lua credit mai mare."
    },
    {
      term: "LTV (Loan-to-Value)",
      definition: "Raportul dintre creditul solicitat și valoarea proprietății. Formula: (Credit / Valoare proprietate) × 100. De exemplu: credit 400.000 RON pentru casă de 500.000 RON = LTV 80%. Maxim LTV acceptat: 95% pentru prima casă, 75% pentru a doua proprietate."
    },
    {
      term: "Prima de Risc (Risk Premium)",
      definition: "Adaos la marjă aplicat de bancă pentru clienți cu risc crescut (venit mic, istoric bancar slab, întârzieri la plăți). De exemplu: marjă standard 2.8% + primă de risc 0.5% = 3.3% total. Poți negocia eliminarea ei cu venit solid și istoric bun."
    },
    {
      term: "Credit Bridge (Bridging Loan)",
      definition: "Credit pe termen scurt (6-24 luni) folosit pentru a cumpăra o casă nouă înainte de a vinde pe cea veche. Dobândă mai mare decât creditele clasice. Odată vândută casa veche, rambursezi bridge loan-ul din banii obținuți."
    }
  ];

  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Glosar Termeni Financiari
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explicații simple și clare pentru termenii întâlniți în creditele ipotecare românești
            </p>
            
            <div className="bg-mint/10 border-l-4 border-mint p-6 rounded-lg mb-8">
              <p className="text-gray-800">
                💡 <strong>Sfat:</strong> Înainte de a semna un contract de credit, asigură-te că înțelegi 
                toți termenii. Nu te sfia să ceri clarificări brokerului sau bancherului!
              </p>
            </div>

            <div className="space-y-6">
              {terms.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-mint/30"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-mint text-white rounded-lg flex items-center justify-center text-sm font-black">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{item.term}</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg pl-11">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-sage/10 border-l-4 border-sage p-6 rounded-lg mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🎓 Vrei să afli mai multe?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Consultă <a href="/blog" className="text-sage hover:underline font-semibold">articolele noastre detaliate</a> despre:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cum să alegi între dobândă fixă și variabilă</li>
                <li>Strategii de economisire a zeci de mii de RON la credite</li>
                <li>Când merită refinanțarea și când nu</li>
                <li>Greșelile comune la primul credit ipotecar</li>
              </ul>
            </div>

            <div className="text-center mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Nu ai găsit un termen? Sugerează-ne să îl adăugăm!
              </p>
              <a 
                href="mailto:contact@lend.ro?subject=Sugestie termen glosar" 
                className="inline-block bg-mint text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-mint/90 transition-all shadow-lg hover:shadow-xl"
              >
                Contactează-ne →
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
