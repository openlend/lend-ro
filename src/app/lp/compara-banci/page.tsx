import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';
import BankGrid from '@/components/BankGrid';

export const metadata = {
  title: 'Compară bănci - Găsește cea mai bună ofertă | Lend.ro',
  description: 'Pagina de comparare a băncilor — vezi diferențele între oferte, comisioane și condiții pentru a face o alegere informată.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function ComparaBanciLP() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <StructuredData type="website" data={{}} />
      <link rel="canonical" href="https://lend.ro/instrumente/comparator-banci" />

      <main style={{ fontFamily: 'Rubik, sans-serif' }}>
        <section className="py-12 md:py-20 bg-gradient-to-br from-white to-[#F5F7FA] text-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-base md:text-lg text-gray-600 mb-4">Compara Bănci</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1B3E] mb-4">
              Vezi rapid ofertele băncilor partenere
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Compară comisioane, dobânzi și condiții pentru a alege oferta potrivită pentru tine.
            </p>
            <a href="#banci" className="inline-block bg-[#0B1B3E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#162f5e] transition shadow-md">
              Vezi băncile →
            </a>
          </div>
        </section>

        <section id="banci" className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-6">
            <BankGrid />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#F5F7FA] text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Cum te ajutăm</h2>
            <p className="text-gray-600 mb-6">Afișăm cele mai relevante oferte și informații clare pentru a lua o decizie în cunoștință de cauză.</p>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
