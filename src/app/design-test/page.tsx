import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design Test - lend.ro',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignTest() {
  return (
    <>
      {/* Google Fonts - Playfair Display */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen bg-[#0A2F2F] text-[#F5F1E8]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">lend.ro</div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#calculator" className="hover:text-[#4FD1C5] transition">Calculator</a>
            <a href="#despre" className="hover:text-[#4FD1C5] transition">Despre</a>
            <a href="#contact" className="hover:text-[#4FD1C5] transition">Contact</a>
          </nav>
          <Link 
            href="/"
            className="text-sm uppercase tracking-wider hover:text-[#4FD1C5] transition"
          >
            Înapoi →
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 py-24 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B3B] via-[#0A2F2F] to-[#051818] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-block bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#4FD1C5]">
              Platformă românească
            </div>
            
            <h1 className="text-5xl md:text-7xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Eleganță în <br />
              <span className="italic text-[#4FD1C5]">creditare</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#F5F1E8]/80 leading-relaxed max-w-xl">
              Simplifică călătoria ta financiară. Compară oferte de la 12+ bănci și găsește 
              creditul perfect într-un singur loc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#calculator"
                className="inline-flex items-center justify-center bg-[#4FD1C5] text-[#0A2F2F] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#3FB8AC] transition-all shadow-2xl hover:scale-105"
              >
                Calculează acum →
              </a>
              <a 
                href="#despre"
                className="inline-flex items-center justify-center border-2 border-[#F5F1E8]/30 text-[#F5F1E8] px-10 py-5 rounded-xl font-semibold text-lg hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-all"
              >
                Cum funcționează
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-[#F5F1E8]/60 border-t border-[#F5F1E8]/10">
              <div className="flex items-center gap-2">
                <span className="text-[#4FD1C5] text-xl">✓</span>
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4FD1C5] text-xl">✓</span>
                <span>12+ Bănci</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4FD1C5] text-xl">✓</span>
                <span>Fără obligații</span>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockups */}
          <div className="relative h-[600px] hidden md:block">
            {/* Phone 1 - Back */}
            <div className="absolute top-12 left-0 w-72 h-[580px] bg-gradient-to-br from-[#0D3B3B] to-[#051818] rounded-[3rem] shadow-2xl border-8 border-[#1A4D4D] transform rotate-[-6deg] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-1 bg-[#F5F1E8]/20 rounded-full"></div>
              </div>
              
              <div className="p-8 pt-12 h-full flex flex-col">
                <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl italic text-[#4FD1C5]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Compară<br />instant
                  </h3>
                  <p className="text-sm text-[#F5F1E8]/60 leading-relaxed">
                    12 bănci, sute de<br />produse, un singur<br />calculator elegant
                  </p>
                  <div className="pt-8">
                    <div className="w-full h-1 bg-[#4FD1C5]/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 - Front */}
            <div className="absolute top-0 right-0 w-72 h-[580px] bg-gradient-to-br from-[#F5F1E8] to-[#E8E0D5] rounded-[3rem] shadow-2xl border-8 border-white transform rotate-[6deg] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/5 flex items-center justify-center">
                <div className="w-20 h-1 bg-black/10 rounded-full"></div>
              </div>
              
              <div className="p-8 pt-12 h-full">
                <div className="text-[#0A2F2F] space-y-6">
                  <div className="text-xs uppercase tracking-wider text-[#0A2F2F]/50">Rata lunară estimată</div>
                  
                  <div className="text-5xl font-bold">
                    2.603<span className="text-2xl"> RON</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/50 rounded-xl p-4">
                      <span className="text-sm font-medium">Credit</span>
                      <span className="font-bold">400.000 RON</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/50 rounded-xl p-4">
                      <span className="text-sm font-medium">Perioadă</span>
                      <span className="font-bold">25 ani</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#4FD1C5]/20 rounded-xl p-4 border-2 border-[#4FD1C5]">
                      <span className="text-sm font-medium">Îndatorare</span>
                      <span className="font-bold text-[#0A2F2F]">26%</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#0A2F2F] text-[#F5F1E8] py-4 rounded-xl font-bold text-sm uppercase tracking-wider">
                    Solicită oferte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-[#051818] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-[#4FD1C5]">12+</div>
              <div className="text-lg text-[#F5F1E8]/60">Bănci partenere</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-[#4FD1C5]">5</div>
              <div className="text-lg text-[#F5F1E8]/60">Brokeri certificați</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-[#4FD1C5]">24h</div>
              <div className="text-lg text-[#F5F1E8]/60">Timp de răspuns</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1C5]/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Începe călătoria către<br />
            <span className="italic text-[#4FD1C5]">casa ta</span>
          </h2>
          
          <p className="text-xl text-[#F5F1E8]/80 mb-12 max-w-2xl mx-auto">
            Peste 100 de familii au găsit deja cel mai bun credit prin lend.ro. 
            Urmează tu.
          </p>

          <a 
            href="#calculator"
            className="inline-flex items-center justify-center bg-[#4FD1C5] text-[#0A2F2F] px-12 py-6 rounded-xl font-bold text-xl hover:bg-[#3FB8AC] transition-all shadow-2xl hover:scale-105"
          >
            Calculează rata acum →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#F5F1E8]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-[#F5F1E8]/50">
              © 2026 lend.ro - Comparator credite ipotecare
            </div>
            <div className="flex gap-8 text-sm text-[#F5F1E8]/50">
              <Link href="/termeni-conditii" className="hover:text-[#4FD1C5] transition">Termeni</Link>
              <Link href="/politica-confidentialitate" className="hover:text-[#4FD1C5] transition">Confidențialitate</Link>
              <Link href="/contact" className="hover:text-[#4FD1C5] transition">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Design Test Notice */}
      <div className="fixed bottom-6 right-6 bg-[#4FD1C5] text-[#0A2F2F] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xl">
        🎨 Design Test
      </div>
    </div>
    </>
  );
}
