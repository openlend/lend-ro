import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact - lend.ro',
  description: 'Contactează echipa lend.ro pentru întrebări despre credite ipotecare și compararea ofertelor bancare',
};

export default function Contact() {
  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Contactează-ne
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Suntem aici să te ajutăm să găsești cel mai bun credit ipotecar
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <div className="bg-mint/10 rounded-2xl p-6 border-2 border-mint/20 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-mint rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-3">
                  Răspundem în maxim 24 de ore în zile lucrătoare
                </p>
                <a 
                  href="mailto:contact@lend.ro" 
                  className="text-mint hover:underline font-semibold text-lg"
                >
                  contact@lend.ro
                </a>
              </div>

              {/* Program */}
              <div className="bg-sage/10 rounded-2xl p-6 border-2 border-sage/20 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-sage rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Program</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Luni - Vineri:</strong> 09:00 - 18:00<br />
                  <strong>Sâmbătă:</strong> 10:00 - 14:00<br />
                  <strong>Duminică:</strong> Închis
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Răspundem la email non-stop, dar procesăm cererile în programul de lucru
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Întrebări Frecvente - Răspunsuri Rapide
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    📧 Cât durează să primesc oferte de la brokeri?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    În <strong>maxim 24 de ore</strong> de la transmiterea cererii. 
                    De obicei, primul broker te contactează în primele 2-4 ore în zilele lucrătoare.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    💰 Cât costă serviciul vostru?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>0 RON.</strong> Utilizarea platformei este complet gratuită. 
                    Ne plătesc băncile prin comision, nu tu. 
                    Nu există costuri ascunse sau taxe surpriză.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🏦 Cu ce bănci colaborați?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comparăm ofertele de la <strong>12+ bănci românești</strong>: 
                    BT, BCR, BRD, ING, Raiffeisen, Garanti, UniCredit, Libra, Patria, 
                    Credit Europe, Exim, Intesa Sanpaolo. Brokerii noștri au acces direct 
                    la toate acestea.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    📊 Calculatorul arată suma exactă pe care o voi plăti?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Calculatorul oferă <strong>estimări orientative</strong> bazate pe datele oficiale ale băncilor. 
                    Oferta finală (cu suma exactă) va fi emisă de bancă după analiza dosarului tău complet.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🔒 Ce se întâmplă cu datele mele personale?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sunt protejate conform <a href="/politica-confidentialitate" className="text-mint hover:underline font-semibold">GDPR</a>. 
                    Le transmitem <strong>doar către brokerii certificați</strong> care te vor contacta. 
                    Nu vindem date către terți și nu faci spam.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    ❌ Pot anula cererea după ce am trimis-o?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Da, oricând. Scrie-ne la{' '}
                    <a href="mailto:contact@lend.ro" className="text-mint hover:underline font-semibold">
                      contact@lend.ro
                    </a>
                    {' '}cu subiectul "Anulare cerere" și vom opri procesarea imediat. 
                    Nu există penalizări sau costuri.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🤝 Cine sunt brokerii?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Intermediari financiari <strong>certificați de BNR</strong> (Banca Națională a României), 
                    cu experiență de 5-15 ani în credite ipotecare. 
                    Ei lucrează cu toate băncile și îți găsesc cea mai bună ofertă.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mint/10 border-l-4 border-mint p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💡 Nu ai găsit răspunsul?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Scrie-ne la <a href="mailto:contact@lend.ro" className="text-mint hover:underline font-semibold">contact@lend.ro</a> 
                {' '}cu întrebarea ta. Îți răspundem în maxim 24 de ore cu toate detaliile necesare.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Alternativ, consultă <a href="/glosar" className="text-mint hover:underline font-semibold">Glosarul nostru</a> pentru 
                explicații despre termenii financiari sau <a href="/blog" className="text-mint hover:underline font-semibold">Blogul</a> pentru 
                ghiduri complete.
              </p>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Începe să compari ofertele acum
              </h2>
              <a 
                href="/#calculator" 
                className="inline-block bg-mint text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-mint/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Calculează rata lunară →
              </a>
              <p className="text-sm text-gray-600 mt-4">
                100% gratuit • Fără obligații • Răspuns în 24h
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
