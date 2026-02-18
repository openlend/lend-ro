export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="lend.ro" className="h-10 mx-auto mb-4 opacity-90" />
          <p className="text-gray-300 mb-2">Platforma ta de comparare credite ipotecare</p>
          <p className="text-gray-400 text-sm">© 2026 - Toate drepturile rezervate</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="/termeni-conditii" className="text-gray-300 hover:text-mint transition">Termeni</a>
          <a href="/politica-confidentialitate" className="text-gray-300 hover:text-mint transition">Confidențialitate</a>
          <a href="/politica-cookies" className="text-gray-300 hover:text-mint transition">Cookies</a>
          <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mint transition">ANPC</a>
        </nav>
      </div>
    </footer>
  );
}
