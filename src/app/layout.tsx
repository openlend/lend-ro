import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lend.ro - Calculator Credit Ipotecar | Compară Oferte Bănci",
  description: "Calculează rata credit ipotecar gratuit. Compară dobânzi de la toate băncile din România. Primește 3-5 oferte personalizate în 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40 border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">L</span>
                </div>
                <span className="text-2xl font-black text-primary-500">lend.ro</span>
              </a>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="#calculator" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                  Calculator
                </a>
                <a href="#cum-functioneaza" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                  Cum funcționează
                </a>
                <a href="/blog" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                  Blog
                </a>
                <a 
                  href="#calculator" 
                  className="bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg"
                >
                  Începe acum
                </a>
              </nav>

              {/* Mobile menu button */}
              <button className="md:hidden">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
