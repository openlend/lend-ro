'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Cât avans trebuie să am pentru un credit ipotecar?',
    answer: 'Avansul minim depinde dacă este prima ta proprietate sau nu. Pentru prima casă, majoritatea băncilor cer un avans minim de 5-15%. Pentru a doua proprietate, avansul minim este de 25%. Cu cât avansul este mai mare, cu atât rata lunară va fi mai mică și vei avea acces la dobânzi mai avantajoase.'
  },
  {
    question: 'Cum se calculează rata lunară la un credit ipotecar?',
    answer: 'Rata lunară se calculează în funcție de suma împrumutată, dobânda bancii, perioada de rambursare și tipul de rată (fixă sau variabilă). Calculatorul nostru ia în considerare IRCC-ul actual (indicele de referință pentru creditele în lei) și marja băncii pentru a-ți oferi o estimare precisă. De asemenea, verifică gradul tău de îndatorare pentru a stabili eligibilitatea.'
  },
  {
    question: 'Ce este gradul de îndatorare și de ce este important?',
    answer: 'Gradul de îndatorare reprezintă procentul din venitul tău net lunar care se duce pe plata ratelor. Băncile din România acceptă un grad de îndatorare de maximum 40-50%. Dacă venitul tău net este 10.000 RON, rata maximă acceptată va fi de 4.000-5.000 RON. Calculatorul nostru verifică automat dacă ești eligibil pentru fiecare ofertă.'
  },
  {
    question: 'Diferența dintre dobândă fixă și dobândă variabilă?',
    answer: 'Dobânda fixă rămâne constantă pe o perioadă de 1-10 ani (de obicei 3-5 ani), ceea ce îți oferă predictibilitate. Dobânda variabilă se schimbă trimestrial în funcție de IRCC (la credite în lei) sau EURIBOR (la credite în euro). După perioada cu dobândă fixă, majoritatea creditelor trec pe dobândă variabilă. Dobânda fixă este recomandată când indicii sunt ridicați, iar cea variabilă când sunt scăzuți.'
  },
  {
    question: 'Cât durează aprobarea unui credit ipotecar?',
    answer: 'Procesul de aprobare durează în medie 7-14 zile lucrătoare. Include: evaluarea dosarului (1-3 zile), evaluarea proprietății (2-5 zile), aprobarea finală (3-7 zile). Dacă actele sunt complete și bine pregătite, procesul poate fi mai rapid. După aprobare, urmează semnarea contractului la notar și deblocarea banilor.'
  },
  {
    question: 'Pot obține credit dacă am un contract pe perioadă determinată?',
    answer: 'Da, multe bănci acceptă contracte pe perioadă determinată, dar de obicei cer o vechime minimă în muncă (6-12 luni) și ar putea solicita documente suplimentare. Riscul este evaluat în funcție de stabilitatea veniturilor.'
  },
  {
    question: 'Ce costuri ascunse să urmăresc la semnarea contractului?',
    answer: 'Uită-te la comisioane de analiză dosar, comisioane de administrare, penalități pentru rambursare anticipată, costuri cu evaluarea imobilului, asigurări obligatorii și eventuale taxe bancare lunare. Cere un simulacru de plăți pentru 1-5 ani pentru a vedea costul real.'
  },
  {
    question: 'Pot refinanța pentru a scoate bani din imobil (cash-out)?',
    answer: 'Da, refinanțarea cu cash-out este posibilă dacă valoarea curentă a imobilului și gradul tău de îndatorare permit. Băncile pot acorda o parte din valoarea imobilului în numerar, dar vei plăti costuri de evaluare, comisioane și poate o dobândă mai mare.'
  },
  {
    question: 'Ce documente se cer, de obicei, pentru credit ipotecar?',
    answer: 'În mod tipic: act de identitate, adeverință de venit / extras Revisal (sau documente pentru PFA/SRL), extras de cont, antecontract, acte proprietate, certificat energetic și documente de la evaluator. Lista exactă diferă pe bancă și pe tipul venitului.'
  },
  {
    question: 'Ce înseamnă DAE și de ce contează mai mult decât dobânda?',
    answer: 'DAE (Dobânda Anuală Efectivă) include nu doar dobânda, ci și costuri precum comisioane și unele taxe recurente. E utilă pentru comparație între oferte, dar verifică și condițiile (perioada dobânzii fixe, comisioane, asigurări, rambursare anticipată).'
  },
  {
    question: 'Pot rambursa anticipat și cum mă ajută?',
    answer: 'Da. Rambursarea anticipată îți poate reduce costul total al creditului. De regulă poți alege: scazi perioada (cel mai eficient pe termen lung) sau scazi rata. Verifică în contract eventualele comisioane (mai ales pe dobândă fixă) și modul de calcul.'
  },
  {
    question: 'E mai bine să aleg perioada maximă (30 ani) sau mai mică?',
    answer: 'Perioada mai lungă scade rata lunară (mai ușor de încadrat), dar crește costul total. Perioada mai scurtă crește rata, dar reduce dobânda totală plătită. O strategie des întâlnită: alegi 30 ani pentru flexibilitate și rambursezi anticipat când ai surplus.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Întrebări frecvente
          </h2>
          <p className="text-lg text-gray-600">
            Răspunsuri rapide la cele mai importante întrebări despre credite ipotecare
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition"
              >
                <span className="font-bold text-gray-900 text-lg flex-1">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-sage transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Mai ai întrebări? Contactează-ne și îți răspundem în maximum 24 de ore.
          </p>
          <a 
            href="mailto:open@lend.ro"
            className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}
