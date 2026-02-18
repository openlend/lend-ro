export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            lend.ro
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#calculator" className="text-gray-700 hover:text-primary font-medium">
              Calculator
            </a>
            <a href="#comparatie" className="text-gray-700 hover:text-primary font-medium">
              Compară Bănci
            </a>
            <a href="#cum-functioneaza" className="text-gray-700 hover:text-primary font-medium">
              Cum funcționează
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Găsește cel mai bun credit ipotecar
          </h1>
          <p className="text-xl opacity-90">
            Compară dobânzi de la 10+ bănci din România. Primește oferte personalizate în 24h.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Calculează rata lunară</h2>
          
          <div className="text-center py-12 text-gray-500">
            <p>Calculator component - în dezvoltare...</p>
            <p className="mt-2 text-sm">Se migrează calculatorul din index.html</p>
          </div>
        </div>
      </section>

      {/* Comparație Bănci */}
      <section id="comparatie" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Compară ofertele de la toate băncile
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Banca {i}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Dobândă fixă 3 ani: <strong>5.{i}%</strong>
                </p>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                  Solicită ofertă
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 lend.ro - Toate drepturile rezervate</p>
          <p className="mt-2 text-sm text-gray-400">
            Rezultatele sunt estimative și se bazează pe dobânzi din 06.02.2026
          </p>
        </div>
      </footer>
    </div>
  );
}
