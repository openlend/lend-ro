import InternalLinks from './InternalLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* SEO Internal Links Section */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <h3 className="text-xl font-bold mb-4">Credite Ipotecare pe Bănci</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="/banci/bt" className="text-gray-400 hover:text-mint transition text-sm">Credit Ipotecar BT</a>
            <a href="/banci/bcr" className="text-gray-400 hover:text-mint transition text-sm">Credit Ipotecar BCR</a>
            <a href="/banci/brd" className="text-gray-400 hover:text-mint transition text-sm">Credit Ipotecar BRD</a>
            <a href="/banci/ing" className="text-gray-400 hover:text-mint transition text-sm">Credit Ipotecar ING</a>
            <a href="/banci/raiffeisen" className="text-gray-400 hover:text-mint transition text-sm">Credit Raiffeisen</a>
            <a href="/banci/garanti" className="text-gray-400 hover:text-mint transition text-sm">Credit Garanti BBVA</a>
            <a href="/banci/unicredit" className="text-gray-400 hover:text-mint transition text-sm">Credit UniCredit</a>
            <a href="/banci/libra" className="text-gray-400 hover:text-mint transition text-sm">Credit Libra Bank</a>
            <a href="/banci/credit-europe" className="text-gray-400 hover:text-mint transition text-sm">Credit Europe Bank</a>
            <a href="/banci/patria" className="text-gray-400 hover:text-mint transition text-sm">Credit Patria Bank</a>
            <a href="/banci/exim" className="text-gray-400 hover:text-mint transition text-sm">Credit EximBank</a>
            <a href="/banci/intesa" className="text-gray-400 hover:text-mint transition text-sm">Credit Intesa Sanpaolo</a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="lend.ro - Calculator Credit Ipotecar România" className="h-10 mb-4 opacity-90" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Platformă #1 pentru compararea creditelor ipotecare în România. Compară oferte de la 12+ bănci și primești 5 oferte personalizate gratuit în 24h.
            </p>
            <div className="text-gray-500 text-sm space-y-1 mb-4">
              <p><strong className="text-gray-400">PUBLISHING OFFICE S.R.L.</strong></p>
              <p>CUI: RO37770955 | J12/3783/2017</p>
              <p>Cluj-Napoca, str. Calea Turzii, nr. 111C, et.2, ap.6</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:contact@lend.ro" className="text-gray-400 hover:text-mint transition" aria-label="Email contact">
                📧 contact@lend.ro
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigare</h3>
            <nav className="space-y-3">
              <a href="/#calculator" className="block text-gray-400 hover:text-mint transition">Calculator</a>
              <a href="/#cum-functioneaza" className="block text-gray-400 hover:text-mint transition">Cum funcționează</a>
              <a href="/blog" className="block text-gray-400 hover:text-mint transition">Blog</a>
              <a href="/glosar" className="block text-gray-400 hover:text-mint transition">Glosar termeni</a>
              <a href="/despre" className="block text-gray-400 hover:text-mint transition">Despre noi</a>
              <a href="/contact" className="block text-gray-400 hover:text-mint transition">Contact</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <nav className="space-y-3">
              <a href="/termeni-conditii" className="block text-gray-400 hover:text-mint transition">Termeni și condiții</a>
              <a href="/politica-confidentialitate" className="block text-gray-400 hover:text-mint transition">Confidențialitate</a>
              <a href="/politica-cookies" className="block text-gray-400 hover:text-mint transition">Politică cookies</a>
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-mint transition">
                ANPC - SAL
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 lend.ro - Toate drepturile rezervate</p>
            <p className="text-xs">
              🔒 Datele tale sunt protejate conform GDPR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
