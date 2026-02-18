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
    <html lang="ro" data-theme="emerald">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
          <div className="navbar-start">
            <a href="/" className="btn btn-ghost text-xl">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black">L</span>
              </div>
              <span className="font-black text-primary">lend.ro</span>
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><a href="#calculator" className="font-semibold">Calculator</a></li>
              <li><a href="#cum-functioneaza" className="font-semibold">Cum funcționează</a></li>
              <li><a href="/blog" className="font-semibold">Blog</a></li>
              <li><a href="#calculator" className="btn btn-primary">Începe acum</a></li>
            </ul>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
