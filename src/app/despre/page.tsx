import Footer from '@/components/Footer';

export const metadata = {
  title: 'Despre Noi - lend.ro',
  description: 'Platforma românească de comparare credite ipotecare - misiunea, valorile și echipa lend.ro',
};

export default function Despre() {
  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Despre lend.ro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Platforma românească care te ajută să găsești cel mai bun credit ipotecar
            </p>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cine suntem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong>lend.ro</strong> este prima platformă digitală din România dedicată exclusiv 
                comparării și obținerii de credite ipotecare. 
                Am creat un ecosistem simplu, transparent și 100% gratuit care conectează 
                viitorii proprietari cu cele mai bune oferte de pe piață.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Înțelegem că achiziția unei case este cea mai importantă decizie financiară 
                din viața ta — de aceea am construit o platformă care îți economisește 
                timp, bani și stres.
              </p>
            </section>

            <section className="mb-10 bg-mint/10 rounded-2xl p-8 border-2 border-mint/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Misiunea noastră
              </h2>
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Să democratizăm accesul la informații despre credite ipotecare și să oferim 
                fiecărui român <strong>șansa de a economisi zeci de mii de lei</strong> prin 
                compararea transparentă a ofertelor bancare.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ce facem diferit
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                  <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    100% Gratuit
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nu plătești nimic pentru comparare sau oferte. 
                    Ne susținem din comisioane de la bănci, fără să crească costul creditului tău.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                  <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Transparență Totală
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Calculator cu date reale actualizate de la 12+ bănci. 
                    Fără costuri ascunse sau surprize neplăcute.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                  <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Rapid și Simplu
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Calculezi rata în 2 minute. Primești 5 oferte în 24 de ore. 
                    Tot procesul e optimizat pentru a-ți economisi timp prețios.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                  <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Brokeri Certificați
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Colaborăm exclusiv cu intermediari financiari certificați BNR, 
                    cu experiență dovedită în credite ipotecare.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cum funcționează
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mint text-white rounded-xl flex items-center justify-center font-black text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Calculezi rata
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Introduci câteva date simple (preț casă, venit, avans) și vezi instant 
                      ofertele de la toate băncile sortate de la cel mai bun la cel mai scump.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage text-white rounded-xl flex items-center justify-center font-black text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Soliciți oferte personalizate
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Completezi un formular scurt cu datele de contact. 
                      Cererile tale ajung automat la 5 brokeri certificați care lucrează 
                      cu toate băncile din România.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mint text-white rounded-xl flex items-center justify-center font-black text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Primești oferte în 24h
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Brokerii te contactează cu oferte competitive și negociază 
                      condiții speciale pentru tine. Alegi oferta care ți se potrivește cel mai bine.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage text-white rounded-xl flex items-center justify-center font-black text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Finalizezi creditul
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Brokerul ales te ghidează pas cu pas: pregătirea documentelor, 
                      depunerea dosarului la bancă, semnarea contractului. Tu te muți în casă nouă! 🎉
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10 bg-sage/10 rounded-2xl p-8 border-2 border-sage/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                De ce să ne alegi pe noi?
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span><strong>Economii reale:</strong> Găsim oferta cu rata cea mai mică → economisești 50.000-150.000 RON pe durata creditului</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span><strong>Timp economisit:</strong> În loc să vizitezi 10 bănci, primești toate ofertele într-un singur loc</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span><strong>Expertiză garantată:</strong> Brokerii știu cum să negocieze și ce documente să pregătească perfect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span><strong>Fără costuri:</strong> Serviciul e complet gratuit, fără taxe ascunse sau obligații</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Valorile noastre
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Transparență</h3>
                  <p className="text-gray-600">
                    Toate datele sunt reale și actualizate. 
                    Fără tactici de vânzare agresive.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💙</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Empatie</h3>
                  <p className="text-gray-600">
                    Înțelegem că e o decizie importantă. 
                    Suntem aici să te ajutăm, nu să te presăm.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Confidențialitate</h3>
                  <p className="text-gray-600">
                    Datele tale sunt protejate conform GDPR. 
                    Nu le vindem și nu facem spam.
                  </p>
                </div>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Gata să economisești zeci de mii de lei?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Peste <strong>10.000+ români</strong> și-au găsit creditul ideal prin lend.ro*
              </p>
              <a 
                href="/#calculator" 
                className="inline-block bg-mint text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-mint/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Calculează rata acum →
              </a>
              <p className="text-sm text-gray-500 mt-6">
                * Estimare bazată pe volumul de cereri procesate în 2025-2026
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
