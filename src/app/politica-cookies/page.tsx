import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politica de Cookies - lend.ro',
  description: 'Informații despre utilizarea cookies pe platforma lend.ro',
};

export default function PoliticaCookies() {
  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Politica de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Data ultimei actualizări:</strong> 18 februarie 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Ce sunt cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookie-urile sunt <strong>fișiere text mici</strong> stocate de browser-ul tău 
                  atunci când vizitezi un site web. Acestea ajută site-ul să "își amintească" 
                  preferințele tale și să funcționeze mai eficient.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>lend.ro</strong> utilizează cookies în mod limitat, 
                  prioritizând confidențialitatea ta și experiența utilizatorului.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ce tipuri de cookies folosim</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1. Cookies esențiale (strict necesare)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aceste cookies sunt <strong>absolut necesare</strong> pentru funcționarea corectă a site-ului 
                  și nu pot fi dezactivate. Nu colectează informații personale identificabile.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold">Cookie</th>
                        <th className="text-left py-2 font-semibold">Scop</th>
                        <th className="text-left py-2 font-semibold">Durată</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100">
                        <td className="py-3"><code>cookie_consent</code></td>
                        <td className="py-3">Reține acceptarea banner-ului de cookies</td>
                        <td className="py-3">365 zile</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3"><code>session_id</code></td>
                        <td className="py-3">Protecție împotriva CSRF (securitate)</td>
                        <td className="py-3">Sesiune</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.2. Cookies funcționale</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aceste cookies îmbunătățesc funcționalitatea site-ului, 
                  dar nu sunt strict esențiale. Pot fi dezactivate din setările browser-ului.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold">Cookie</th>
                        <th className="text-left py-2 font-semibold">Scop</th>
                        <th className="text-left py-2 font-semibold">Durată</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100">
                        <td className="py-3"><code>calc_last_values</code></td>
                        <td className="py-3">Păstrează valorile tale în calculator pentru confort</td>
                        <td className="py-3">30 zile</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.3. Cookies analitice</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Momentan NU utilizăm cookies analitice</strong> (Google Analytics, Meta Pixel etc.). 
                  Dacă vom implementa astfel de servicii în viitor, 
                  vei fi informat și vei avea posibilitatea să refuzi.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.4. Cookies de marketing/publicitate</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>NU folosim cookies de remarketing sau urmărire publicitară.</strong> 
                  Nu vindem datele tale către terți pentru publicitate targetată.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cum poți gestiona cookies?</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1. Setări browser</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Poți controla și șterge cookies din setările browser-ului tău:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookies și alte date ale site-ului
                  </li>
                  <li>
                    <strong>Firefox:</strong> Setări → Confidențialitate și securitate → Cookies și date ale site-ului
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferințe → Confidențialitate → Gestionare date site-uri web
                  </li>
                  <li>
                    <strong>Edge:</strong> Setări → Cookies și permisiuni site
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3.2. Banner-ul de cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  La prima vizită, vei vedea un banner în partea de jos a ecranului 
                  prin care poți accepta sau refuza cookies opționale. 
                  Cookies-urile esențiale nu pot fi dezactivate pentru că sunt necesare funcționării site-ului.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies terțe părți</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unele funcționalități ale site-ului pot implica servicii terțe care setează propriile cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Vercel</strong> (hosting) - cookies tehnice pentru load balancing și CDN
                  </li>
                  <li>
                    <strong>Brevo</strong> (email) - tracking-ul deschiderii email-urilor (DOAR pentru email-uri, nu pe site)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Toți partenerii noștri sunt GDPR compliant și respectă confidențialitatea ta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Do Not Track (DNT)</h2>
                <p className="text-gray-700 leading-relaxed">
                  Respectăm semnalul <strong>Do Not Track</strong> trimis de browser-ul tău. 
                  Dacă ai activat DNT, nu vom seta cookies analitice sau de marketing 
                  (chiar dacă le vom implementa în viitor).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Impactul dezactivării cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dacă dezactivezi toate cookies-urile:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>✅ Poți naviga și citi conținutul site-ului</li>
                  <li>✅ Poți utiliza calculatorul de credit</li>
                  <li>✅ Poți trimite solicitări de oferte</li>
                  <li>⚠️ Banner-ul de cookies va reapărea la fiecare vizită</li>
                  <li>⚠️ Valorile din calculator nu vor fi salvate</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificări ale politicii</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ne rezervăm dreptul de a actualiza această Politică de Cookies. 
                  Orice modificare va fi publicată pe această pagină cu indicarea datei ultimei actualizări. 
                  Te vom notifica prin banner dacă adăugăm noi tipuri de cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pentru întrebări despre utilizarea cookies pe <strong>lend.ro</strong>, 
                  ne poți contacta la:
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                  Email: <a href="mailto:contact@lend.ro" className="text-mint hover:underline">contact@lend.ro</a>
                </p>
              </section>

              <div className="bg-mint/10 border-l-4 border-mint p-6 rounded-lg mt-8">
                <p className="text-gray-800 font-semibold">
                  🍪 <strong>lend.ro folosește cookies minimal</strong> și transparent. 
                  Nu urmărim fiecare click și nu vindem datele tale. 
                  Pentru mai multe detalii despre protecția datelor, consultă{' '}
                  <a href="/politica-confidentialitate" className="text-mint hover:underline">
                    Politica de Confidențialitate
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
