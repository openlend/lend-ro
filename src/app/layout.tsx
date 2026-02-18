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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    cream: '#F9F7F4',
                    mint: '#4FD1C5',
                    sage: '#2D5F5D',
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                  },
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-cream">
        <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-mint to-sage rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">L</span>
                </div>
                <span className="text-2xl font-black text-sage">lend.ro</span>
              </a>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#calculator" className="text-gray-700 hover:text-sage font-medium transition">Calculator</a>
                <a href="#cum-functioneaza" className="text-gray-700 hover:text-sage font-medium transition">Cum funcționează</a>
                <a href="#calculator" className="bg-sage text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition shadow-lg">
                  Începe acum
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
