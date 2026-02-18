import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politica de Confidențialitate - lend.ro',
  description: 'Politica de confidențialitate și protecția datelor personale pentru utilizatorii lend.ro',
};

export default function PoliticaConfidentialitate() {
  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Politica de Confidențialitate
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Data ultimei actualizări:</strong> 18 februarie 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Identitatea Operatorului</h2>
                <div className="bg-mint/10 rounded-xl p-6 border-2 border-mint/20 mb-6">
                  <p className="text-gray-800 leading-relaxed mb-2">
                    <strong>Operator date cu caracter personal:</strong>
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li><strong>Denumire:</strong> PUBLISHING OFFICE S.R.L.</li>
                    <li><strong>CUI:</strong> RO37770955</li>
                    <li><strong>Nr. Reg. Com.:</strong> J12/3783/2017</li>
                    <li><strong>Sediu:</strong> Cluj-Napoca, str. Calea Turzii, nr. 111C, et.2, ap.6, jud. Cluj, România</li>
                    <li><strong>Email:</strong> contact@lend.ro</li>
                    <li><strong>Email GDPR:</strong> gdpr@lend.ro</li>
                    <li><strong>Website:</strong> https://lend.ro</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>lend.ro</strong> (denumit în continuare "noi", "Platforma" sau "Operatorul") 
                  respectă confidențialitatea datelor tale personale și se angajează să le protejeze 
                  în conformitate cu <strong>GDPR</strong> (Regulamentul UE 2016/679) și 
                  legislația română privind protecția datelor (Legea 190/2018).
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Această Politică de Confidențialitate explică ce date colectăm, 
                  de ce le colectăm, cum le folosim și care sunt drepturile tale.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ce Date Colectăm</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1. Date furnizate direct de tine</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Atunci când completezi formularul de solicitare oferte, colectăm:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Nume și prenume</strong></li>
                  <li><strong>Email</strong></li>
                  <li><strong>Număr de telefon</strong></li>
                  <li><strong>Suma solicitată pentru credit</strong></li>
                  <li><strong>Tipul de credit</strong> (prima casă, credit clasic, refinanțare)</li>
                  <li><strong>Mesaj opțional</strong> (dacă completezi)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.2. Date colectate automat</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Pentru funcționarea corectă a platformei și pentru prevenirea abuzurilor, colectăm:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Adresa IP</strong> (pentru protecție împotriva spam-ului)</li>
                  <li><strong>User agent</strong> (browser și dispozitiv utilizat)</li>
                  <li><strong>Cookie-uri tehnice</strong> (vezi <a href="/politica-cookies" className="text-mint hover:underline">Politica de Cookies</a>)</li>
                  <li><strong>Data și ora solicitării</strong></li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.3. Date pe care NU le colectăm</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>CNP sau alte date de identificare oficiale</li>
                  <li>Istoric bancar sau date financiare detaliate</li>
                  <li>Informații despre venituri exacte (doar estimări în calculator)</li>
                  <li>Date medicale sau etnice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. De ce Colectăm Datele Tale (Scopul Prelucrării)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Colectăm și procesăm datele tale pentru următoarele scopuri legitime:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>Furnizarea serviciului</strong> - transmiterea solicitării tale către brokeri certificați 
                    pentru obținerea de oferte competitive
                  </li>
                  <li>
                    <strong>Comunicare</strong> - răspunsul la întrebările tale și confirmarea primirii solicitării
                  </li>
                  <li>
                    <strong>Prevenirea fraudelor</strong> - protejarea platformei împotriva spam-ului și utilizării abuzive
                  </li>
                  <li>
                    <strong>Îmbunătățirea serviciilor</strong> - analiza anonimizată a datelor pentru optimizarea platformei
                  </li>
                  <li>
                    <strong>Conformare legală</strong> - respectarea obligațiilor legale (ex: facturare, raportări fiscale)
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cu Cine Partajăm Datele Tale</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Nu vindem niciodată datele tale personale.</strong> Datele sunt partajate doar cu:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1. Brokeri de credite certificați</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Atunci când soliciți oferte, datele tale (nume, email, telefon, sumă, tip credit) 
                  sunt transmise către <strong>maxim 5 brokeri certificați</strong> care colaborează cu băncile 
                  pentru a-ți găsi cele mai bune condiții.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2. Furnizori de servicii tehnice</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Vercel Inc.</strong> - hosting și infrastructură cloud (SUA)<br/>
                    <span className="text-sm">Transfer internațional protejat prin <strong>Standard Contractual Clauses (SCC)</strong> aprobate de Comisia Europeană (Decizia 2021/914/UE) + encryption in transit & at rest.</span>
                  </li>
                  <li>
                    <strong>Brevo (Sendinblue)</strong> - platformă de email marketing (Franța, UE)<br/>
                    <span className="text-sm">GDPR compliant, servere în UE, DPA semnat.</span>
                  </li>
                  <li>
                    <strong>Neon Database</strong> - stocare securizată a datelor (Germania, UE)<br/>
                    <span className="text-sm">GDPR compliant, encryption AES-256, servere în UE.</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Toți furnizorii noștri sunt <strong>GDPR compliant</strong> și au contracte de prelucrare (Data Processing Agreements) 
                  care garantează securitatea datelor tale.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>⚠️ Transfer Internațional:</strong> Datele tale pot fi procesate în SUA (Vercel Inc.) pe bază de Standard Contractual Clauses + măsuri suplimentare de securitate (encryption). 
                    Prin utilizarea platformei, consimți la acest transfer conform GDPR Art. 46.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cât Timp Păstrăm Datele Tale</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>Solicitări active:</strong> Datele sunt păstrate timp de <strong>12 luni</strong> 
                    pentru a putea urmări progresul solicitării și a oferi suport
                  </li>
                  <li>
                    <strong>După finalizare:</strong> Datele pot fi arhivate pentru conformare legală (ex: facturare) 
                    pentru <strong>5 ani</strong> conform legislației fiscale românești
                  </li>
                  <li>
                    <strong>Date tehnice (IP, logs):</strong> Maxim <strong>90 de zile</strong> pentru securitate și debugging
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Poți solicita ștergerea anticipată</strong> a datelor tale oricând, 
                  trimițând un email la <a href="mailto:contact@lend.ro" className="text-mint hover:underline">contact@lend.ro</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Drepturile Tale GDPR</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conform GDPR, ai următoarele drepturi:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>Dreptul de acces</strong> - poți solicita o copie a tuturor datelor pe care le deținem despre tine
                  </li>
                  <li>
                    <strong>Dreptul la rectificare</strong> - poți corecta datele incorecte sau incomplete
                  </li>
                  <li>
                    <strong>Dreptul la ștergere</strong> ("dreptul de a fi uitat") - poți solicita ștergerea datelor tale
                  </li>
                  <li>
                    <strong>Dreptul la portabilitate</strong> - poți primi datele tale în format JSON/CSV
                  </li>
                  <li>
                    <strong>Dreptul la opoziție</strong> - poți refuza prelucrarea datelor pentru marketing direct
                  </li>
                  <li>
                    <strong>Dreptul de a depune plângere</strong> - la Autoritatea Națională de Supraveghere 
                    a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pentru exercitarea oricăruia dintre aceste drepturi, trimite un email la{' '}
                  <a href="mailto:contact@lend.ro" className="text-mint hover:underline font-semibold">contact@lend.ro</a>
                  {' '}cu subiectul "GDPR - [Tipul cererii]".
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Securitatea Datelor</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Implementăm măsuri tehnice și organizatorice pentru protejarea datelor tale:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Criptare SSL/TLS</strong> pentru toate comunicațiile (HTTPS)</li>
                  <li><strong>Bază de date criptată</strong> (Neon Postgres cu encryption at rest)</li>
                  <li><strong>Rate limiting</strong> - protecție împotriva atacurilor brute-force</li>
                  <li><strong>Honeypot fields</strong> - detectare bots spam</li>
                  <li><strong>Backup-uri automate</strong> și disaster recovery plan</li>
                  <li><strong>Acces restricționat</strong> - doar personal autorizat poate accesa datele</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferuri Internaționale de Date</h2>
                <p className="text-gray-700 leading-relaxed">
                  Unii furnizori de servicii (ex: Vercel) pot procesa date în SUA. 
                  În astfel de cazuri, ne asigurăm că sunt implementate <strong>Standard Contractual Clauses (SCC)</strong> 
                  aprobate de Comisia Europeană pentru a garanta protecția datelor la nivelul GDPR.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Minori</h2>
                <p className="text-gray-700 leading-relaxed">
                  Serviciile noastre sunt destinate persoanelor cu vârsta de <strong>minimum 18 ani</strong>. 
                  Nu colectăm în mod conștient date de la minori. 
                  Dacă descoperi că un minor și-a furnizat datele, te rugăm să ne contactezi imediat.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificări ale Politicii</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate. 
                  Modificările vor fi publicate pe această pagină cu indicarea datei ultimei actualizări. 
                  Utilizarea continuă a platformei după publicarea modificărilor constituie acceptarea acestora.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact și DPO</h2>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Pentru orice întrebări legate de protecția datelor tale, ne poți contacta:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:contact@lend.ro" className="text-mint hover:underline">contact@lend.ro</a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Subiect:</strong> "GDPR - Protecția Datelor"
                  </p>
                  <p className="text-gray-700">
                    <strong>Răspuns:</strong> În maxim 30 de zile calendaristice (conform GDPR)
                  </p>
                </div>
              </section>

              <div className="bg-mint/10 border-l-4 border-mint p-6 rounded-lg mt-8">
                <p className="text-gray-800 font-semibold">
                  🔒 Confidențialitatea ta este prioritatea noastră. 
                  Dacă ai nelămuriri despre cum procesăm datele tale, 
                  nu ezita să ne contactezi la{' '}
                  <a href="mailto:contact@lend.ro" className="text-mint hover:underline">contact@lend.ro</a>
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
