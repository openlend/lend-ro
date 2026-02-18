export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="lend.ro" className="h-10 mb-4 opacity-90" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Platformă #1 pentru compararea creditelor ipotecare în România. Compară oferte de la 12+ bănci și primești 5 oferte personalizate gratuit în 24h.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@lend.ro" className="text-gray-400 hover:text-mint transition">
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
