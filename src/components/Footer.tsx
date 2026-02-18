export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-black mb-4">lend.ro</h3>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Platforma ta de comparare credite ipotecare. Găsește cea mai bună ofertă în câteva minute.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resurse</h4>
            <ul className="space-y-3 text-emerald-200">
              <li><a href="#calculator" className="hover:text-white transition-colors">Calculator Credit</a></li>
              <li><a href="#comparatie" className="hover:text-white transition-colors">Compară Bănci</a></li>
              <li><a href="#cum-functioneaza" className="hover:text-white transition-colors">Cum funcționează</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-emerald-200">
              <li><a href="/termeni-conditii" className="hover:text-white transition-colors">Termeni și Condiții</a></li>
              <li><a href="/politica-confidentialitate" className="hover:text-white transition-colors">Politică Confidențialitate</a></li>
              <li><a href="/politica-cookies" className="hover:text-white transition-colors">Politică Cookies</a></li>
              <li><a href="/gdpr" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-emerald-200">
              <li>📧 contact@lend.ro</li>
              <li>📍 Cluj-Napoca, România</li>
              <li className="pt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block mr-4 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a 
                href="https://anpc.ro/ce-este-sal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-emerald-900 font-black text-xs">ANPC</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Protecția Consumatorului</div>
                  <div className="text-emerald-200 text-xs">Soluționare Alternative Litigii</div>
                </div>
              </a>

              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-emerald-900 font-black text-xs">SOL</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Soluționare Online Litigii</div>
                  <div className="text-emerald-200 text-xs">Platforma Europeană SOL</div>
                </div>
              </a>
            </div>

            <div className="text-emerald-200 text-sm text-center md:text-right">
              <p>Conform OUG 34/2014 privind drepturile consumatorilor</p>
            </div>
          </div>
        </div>

        <div className="text-center text-emerald-300 text-sm">
          <p>© 2026 lend.ro - Toate drepturile rezervate</p>
          <p className="mt-2 text-xs">
            Rezultatele sunt estimative și se bazează pe dobânzi din {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>
      </div>
    </footer>
  );
}
