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
      
      <div className="min-h-screen bg-[#0A2F2F] text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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
            <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-gray-600 border-t border-[#F5F1E8]/10">
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
                  <p className="text-sm text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-[#0A2F2F]">12+</div>
              <div className="text-lg text-gray-600">Bănci partenere</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-[#0A2F2F]">5</div>
              <div className="text-lg text-gray-600">Brokeri certificați</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-[#0A2F2F]">24h</div>
              <div className="text-lg text-gray-600">Timp de răspuns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#0A2F2F] mb-6">
              Calculator instant
            </div>
            <h2 className="text-4xl md:text-6xl leading-tight mb-6 text-[#0A2F2F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Compară <span className="italic text-[#4FD1C5]">ofertele</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ajustează parametrii și vezi instant cele mai bune rate de la 12+ bănci
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
            <div className="space-y-8">
              {/* Property Price */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm font-bold text-[#0A2F2F] uppercase tracking-wider">Preț proprietate</span>
                  <span className="text-2xl font-bold text-[#4FD1C5]">500.000 RON</span>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="1500000" 
                  step="10000"
                  defaultValue="500000"
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: 'linear-gradient(to right, #4FD1C5 0%, #4FD1C5 33%, #e5e7eb 33%, #e5e7eb 100%)'
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>100.000</span>
                  <span>1.500.000</span>
                </div>
              </div>

              {/* Monthly Income */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm font-bold text-[#0A2F2F] uppercase tracking-wider">Venit lunar net</span>
                  <span className="text-2xl font-bold text-[#4FD1C5]">10.000 RON</span>
                </div>
                <input 
                  type="range" 
                  min="3000" 
                  max="30000" 
                  step="500"
                  defaultValue="10000"
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>3.000</span>
                  <span>30.000</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm font-bold text-[#0A2F2F] uppercase tracking-wider">Perioadă creditare</span>
                  <span className="text-2xl font-bold text-[#4FD1C5]">25 ani</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  step="1"
                  defaultValue="25"
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>5 ani</span>
                  <span>30 ani</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm font-bold text-[#0A2F2F] uppercase tracking-wider">Avans</span>
                  <span className="text-2xl font-bold text-[#4FD1C5]">20%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="5"
                  defaultValue="20"
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200">
                <button className="w-full bg-[#0A2F2F] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#0D3B3B] transition-all shadow-lg hover:shadow-xl">
                  Vezi cele mai bune oferte →
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Gratuit, fără obligații • Primești 5 oferte în 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#0A2F2F] mb-6">
              De ce lend.ro
            </div>
            <h2 className="text-4xl md:text-6xl leading-tight mb-6 text-[#0A2F2F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experiență <span className="italic text-[#4FD1C5]">superioară</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te ajutăm să găsești cel mai bun credit ipotecar cu tehnologie premium și expertiza brokerilor certificați
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#4FD1C5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4FD1C5]/20 transition-all">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A2F2F]">Instant</h3>
              <p className="text-gray-600 leading-relaxed">
                Calculează rata lunară și compară oferte de la toate băncile în mai puțin de 2 minute. Fără birocrație.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#4FD1C5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4FD1C5]/20 transition-all">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A2F2F]">Securizat</h3>
              <p className="text-gray-600 leading-relaxed">
                Datele tale sunt protejate cu criptare de nivel bancar. GDPR compliant, fără vânzare de date către terți.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#4FD1C5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4FD1C5]/20 transition-all">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A2F2F]">Gratuit</h3>
              <p className="text-gray-600 leading-relaxed">
                Zero costuri pentru tine. Băncile ne plătesc comisionul, tu economisești timp și bani. Transparent total.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#4FD1C5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4FD1C5]/20 transition-all">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A2F2F]">Personalizat</h3>
              <p className="text-gray-600 leading-relaxed">
                Primești 5 oferte adaptate profilului tău financiar de la brokeri specializați. Nu email-uri automate.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#4FD1C5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4FD1C5]/20 transition-all">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A2F2F]">Transparent</h3>
              <p className="text-gray-600 leading-relaxed">
                Vezi toate costurile, comisioanele și condițiile înainte să te angajezi. Fără surprize neplăcute.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#4FD1C5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4FD1C5]/20 transition-all">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A2F2F]">Expert</h3>
              <p className="text-gray-600 leading-relaxed">
                Brokerii noștri au peste 10 ani experiență și acces la oferte exclusive pe care nu le găsești singur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#0A2F2F] mb-6">
              Proces simplu
            </div>
            <h2 className="text-4xl md:text-6xl leading-tight mb-6 text-[#0A2F2F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              În <span className="italic text-[#4FD1C5]">3 pași simpli</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la calcul la ofertă finală, totul online, rapid și transparent
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-[#4FD1C5] text-[#0A2F2F] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pas 1
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Calculează<br />
                  <span className="italic text-[#4FD1C5]">rata lunară</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Introduci valoarea proprietății, venitul lunar și perioada de creditare. 
                  Algoritmul nostru compară instant oferte de la 12+ bănci și îți arată 
                  rata lunară estimată pentru fiecare.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Calcul în timp real cu dobânzi actualizate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Verificare automată a eligibilității</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Comparație side-by-side între bănci</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-2 border-gray-200 hover:border-[#4FD1C5] transition-all rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="space-y-6">
                  <div className="text-xs uppercase tracking-widest text-gray-500">Estimare instant</div>
                  <div className="text-5xl font-bold text-[#4FD1C5]">2.603 RON</div>
                  <div className="text-sm text-gray-600">Rată lunară / 25 ani</div>
                  <div className="h-px bg-gray-200 my-6"></div>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Credit solicitat</span>
                      <span className="text-[#0A2F2F] font-bold">400.000 RON</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dobândă fixă</span>
                      <span className="text-[#0A2F2F] font-bold">3.00% (3 ani)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Îndatorare</span>
                      <span className="text-[#4FD1C5] font-bold">26% ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white border-2 border-gray-200 hover:border-[#4FD1C5] transition-all rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center">
                      <span className="text-[#4FD1C5] font-bold">1</span>
                    </div>
                    <span className="text-gray-700">broker@banca-a.ro</span>
                    <span className="ml-auto text-[#4FD1C5] text-xs font-semibold">În lucru</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center">
                      <span className="text-[#4FD1C5] font-bold">2</span>
                    </div>
                    <span className="text-gray-700">credit@intermediar-b.ro</span>
                    <span className="ml-auto text-[#4FD1C5] text-xs font-semibold">În lucru</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center">
                      <span className="text-[#4FD1C5] font-bold">3</span>
                    </div>
                    <span className="text-gray-700">oferte@broker-c.ro</span>
                    <span className="ml-auto text-[#4FD1C5] text-xs font-semibold">În lucru</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center">
                      <span className="text-[#4FD1C5] font-bold">4</span>
                    </div>
                    <span className="text-gray-700">contact@specialist-d.ro</span>
                    <span className="ml-auto text-gray-500 text-xs font-semibold">Pregătire</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-bold">5</span>
                    </div>
                    <span className="text-gray-400">ipotecar@broker-e.ro</span>
                    <span className="ml-auto text-gray-400 text-xs font-semibold">Așteptare</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="inline-block bg-[#4FD1C5] text-[#0A2F2F] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pas 2
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Primești<br />
                  <span className="italic text-[#4FD1C5]">5 oferte</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  În maximum 24 de ore, 5 brokeri certificați îți trimit oferte personalizate 
                  direct pe email. Fiecare ofertă include condițiile complete, 
                  costurile totale și pașii următori.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Oferte adaptate profilului tău</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Include și produse exclusive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Fără spam sau telefoane insistente</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-[#4FD1C5] text-[#0A2F2F] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Pas 3
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Alegi<br />
                  <span className="italic text-[#4FD1C5]">cea mai bună</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Compari ofertele în liniște, fără presiune. Când ești gata, 
                  contactezi brokerul ales și el se ocupă de tot procesul: 
                  documentație, aprobare, semnare. Tu doar te bucuri de noua casă.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Zero obligații de angajare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Suport complet din partea brokerului</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4FD1C5] mt-1">✓</span>
                    <span>Economisești în medie 15.000 RON/an</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#4FD1C5]/20 to-[#4FD1C5]/5 backdrop-blur-sm border-2 border-[#4FD1C5] rounded-3xl p-8 md:p-12 text-center shadow-lg">
                <div className="space-y-6">
                  <div className="text-7xl">🎉</div>
                  <h4 className="text-2xl font-bold text-gray-900">Felicitări!</h4>
                  <p className="text-gray-600">
                    Ai economisit timp, bani și nervi. <br />
                    Te muți în noua casă cu creditul perfect.
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-500 mb-2">Economie medie</div>
                    <div className="text-4xl font-bold text-[#4FD1C5]">15.000 RON</div>
                    <div className="text-sm text-gray-600">pe an față de oferta inițială</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#0A2F2F] mb-6">
              Ei au reușit
            </div>
            <h2 className="text-4xl md:text-6xl leading-tight mb-6 text-[#0A2F2F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Peste <span className="italic text-[#4FD1C5]">100 de familii</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              și-au găsit casa visurilor prin lend.ro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#4FD1C5] hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center text-2xl font-bold text-[#4FD1C5]">
                  M
                </div>
                <div>
                  <div className="font-bold text-gray-900">Maria T.</div>
                  <div className="text-sm text-gray-500">Cluj-Napoca</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#4FD1C5]">★</span>)}
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Am economisit peste 20.000 RON comparativ cu oferta pe care o aveam deja de la banca mea. 
                Procesul a fost extrem de simplu și transparent."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#4FD1C5] hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center text-2xl font-bold text-[#4FD1C5]">
                  A
                </div>
                <div>
                  <div className="font-bold text-gray-900">Andrei P.</div>
                  <div className="text-sm text-gray-500">București</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#4FD1C5]">★</span>)}
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Nu credeam că pot obține atât de repede aprobarea. În 10 zile aveam contractul semnat. 
                Recomand cu încredere!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#4FD1C5] hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center text-2xl font-bold text-[#4FD1C5]">
                  C
                </div>
                <div>
                  <div className="font-bold text-gray-900">Carmen & Radu S.</div>
                  <div className="text-sm text-gray-500">Timișoara</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#4FD1C5]">★</span>)}
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Brokerul ne-a găsit un produs special pentru prima casă despre care nu știam. 
                Rata e cu 400 RON mai mică!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#0A2F2F] mb-6">
              Întrebări frecvente
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight text-[#0A2F2F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="italic text-[#4FD1C5]">Tot</span> ce trebuie să știi
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Chiar este gratuit?',
                a: 'Da, 100% gratuit pentru tine. Băncile ne plătesc un comision când închei un credit prin intermediul nostru, exact ca la orice broker. Tu nu plătești nimic extra.'
              },
              {
                q: 'Cât durează să primesc ofertele?',
                a: 'În maximum 24 de ore primești 5 oferte personalizate de la brokeri certificați. De obicei, primele oferte ajung în primele 4-6 ore.'
              },
              {
                q: 'Sunt obligat să accept o ofertă?',
                a: 'Absolut deloc. Primești ofertele, le compari în liniște și decizi dacă mergi mai departe. Zero presiune, zero obligații.'
              },
              {
                q: 'De ce 5 brokeri, nu unul singur?',
                a: 'Fiecare broker are parteneriate diferite cu băncile și poate accesa produse exclusive. Mai multe oferte = șanse mai mari să găsești cea mai bună variantă.'
              },
              {
                q: 'Datele mele sunt în siguranță?',
                a: 'Da. Folosim criptare de nivel bancar și suntem GDPR compliant. Nu vindem și nu partajăm datele tale cu nimeni în afară de brokerii certificați care îți trimit oferte.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4FD1C5] hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#0A2F2F] mb-4">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Mai ai întrebări?
            </p>
            <a 
              href="mailto:open@lend.ro"
              className="inline-flex items-center gap-2 bg-[#0A2F2F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0D3B3B] transition-all shadow-lg"
            >
              <span>✉️</span>
              <span>Contactează-ne</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl leading-tight mb-8 text-[#0A2F2F]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Începe călătoria către<br />
            <span className="italic text-[#4FD1C5]">casa ta</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Peste 100 de familii au găsit deja cel mai bun credit prin lend.ro. 
            Urmează tu.
          </p>

          <a 
            href="#calculator"
            className="inline-flex items-center justify-center bg-[#0A2F2F] text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-[#0D3B3B] transition-all shadow-2xl hover:scale-105"
          >
            Calculează rata acum →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2F2F] border-t border-[#F5F1E8]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-[#F5F1E8]/60">
              © 2026 lend.ro - Comparator credite ipotecare
            </div>
            <div className="flex gap-8 text-sm text-[#F5F1E8]/60">
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
