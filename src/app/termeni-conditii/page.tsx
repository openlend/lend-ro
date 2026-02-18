import Footer from '@/components/Footer';

export const metadata = {
  title: 'Termeni și Condiții - lend.ro',
  description: 'Termeni și condiții de utilizare pentru platforma lend.ro - Compararea creditelor ipotecare în România',
};

export default function TermeniConditii() {
  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Termeni și Condiții
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Data ultimei actualizări:</strong> 18 februarie 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptarea Termenilor</h2>
                <p className="text-gray-700 leading-relaxed">
                  Prin accesarea și utilizarea platformei <strong>lend.ro</strong> (denumită în continuare "Platforma"), 
                  confirmi că ai citit, înțeles și acceptat în totalitate acești Termeni și Condiții. 
                  Dacă nu ești de acord cu oricare dintre prevederile prezentului document, 
                  te rugăm să nu utilizezi Platforma.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrierea Serviciilor</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>lend.ro</strong> este o platformă de comparare și intermediere pentru credite ipotecare 
                  care oferă următoarele servicii:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Calculator gratuit pentru estimarea ratei lunare a creditului ipotecar</li>
                  <li>Compararea ofertelor de la 12+ bănci românești</li>
                  <li>Intermediere între utilizatori și brokeri de credite certificați</li>
                  <li>Conținut educațional despre credite ipotecare și finanțare</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Important:</strong> lend.ro este o platformă de comparare și recomandare. 
                  Nu suntem bancă și nu acordăm credite direct. Colaborăm cu brokeri certificați 
                  care te vor ajuta să obții cele mai bune oferte de la bănci.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilizarea Platformei</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1. Eligibilitate</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pentru a utiliza serviciile noastre, trebuie să ai minimum 18 ani împliniți 
                  și capacitate juridică deplină conform legislației românești.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2. Utilizare Corectă</h3>
                <p className="text-gray-700 leading-relaxed">
                  Te angajezi să utilizezi Platforma în mod legal și conform scopului pentru care a fost creată. 
                  Este interzisă utilizarea platformei pentru:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                  <li>Transmiterea de informații false sau înșelătoare</li>
                  <li>Încercări de fraudare sau manipulare a sistemului</li>
                  <li>Spam, scraping automatizat sau utilizare abuzivă</li>
                  <li>Distribuirea de malware sau cod dăunător</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gratuitatea Serviciilor</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Utilizarea platformei lend.ro este 100% gratuită pentru utilizatori finali.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ne susținem financiar prin comisioane primite de la băncile partenere și brokerii de credite, 
                  atunci când un utilizator finalizează cu succes un contract de credit. 
                  <strong>Aceste comisioane NU cresc costul creditului pentru tine</strong> și sunt incluse 
                  în structura de comisioane standard a băncii.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acuratețea Informațiilor</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ne străduim să oferim informații corecte și actualizate despre ofertele băncilor. 
                  Cu toate acestea:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Ratele și condițiile pot varia în funcție de profilul de risc al fiecărui solicitant</li>
                  <li>Informațiile din calculator sunt <strong>estimative</strong> și pot diferi de oferta finală</li>
                  <li>Ofertele finale sunt emise exclusiv de bănci, pe baza evaluării complete a dosarului</li>
                  <li>Indicii IRCC și Euribor se actualizează trimestrial/lunar și pot varia</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protecția Datelor Personale</h2>
                <p className="text-gray-700 leading-relaxed">
                  Colectăm și procesăm datele tale personale conform{' '}
                  <a href="/politica-confidentialitate" className="text-mint hover:underline font-semibold">
                    Politicii de Confidențialitate
                  </a>
                  {' '}și în conformitate cu GDPR (Regulamentul UE 2016/679). 
                  Datele tale sunt transmise exclusiv către brokerii certificați care te vor contacta 
                  pentru finalizarea solicitării tale.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitarea Răspunderii</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>lend.ro</strong> nu este responsabilă pentru:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Decizia finală de aprobare/respingere a creditului (decisă exclusiv de bancă)</li>
                  <li>Modificări ale condițiilor de creditare după transmiterea solicitării</li>
                  <li>Erorile sau întârzierile cauzate de terțe părți (bănci, brokeri)</li>
                  <li>Pierderi financiare rezultate din utilizarea informațiilor de pe platformă</li>
                  <li>Conținutul link-urilor externe către site-uri terțe</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificări ale Termenilor</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. 
                  Modificările vor fi publicate pe această pagină cu indicarea datei ultimei actualizări. 
                  Utilizarea continuă a Platformei după publicarea modificărilor constituie acceptarea acestora.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Drept Aplicabil</h2>
                <p className="text-gray-700 leading-relaxed">
                  Acești Termeni și Condiții sunt guvernați de legea română. 
                  Orice litigiu rezultat din interpretarea sau executarea acestor termeni 
                  va fi soluționat de instanțele competente din România.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pentru întrebări sau clarificări legate de acești Termeni și Condiții, 
                  ne poți contacta la:
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                  Email: <a href="mailto:contact@lend.ro" className="text-mint hover:underline">contact@lend.ro</a>
                </p>
              </section>

              <div className="bg-mint/10 border-l-4 border-mint p-6 rounded-lg mt-8">
                <p className="text-gray-800 font-semibold">
                  💡 Ai întrebări? Consultă{' '}
                  <a href="/glosar" className="text-mint hover:underline">Glosarul nostru</a>
                  {' '}pentru explicații despre termenii financiari sau{' '}
                  <a href="/contact" className="text-mint hover:underline">contactează-ne direct</a>.
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
