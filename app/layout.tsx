import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'lend.ro - Calculator Credit Ipotecar | Compară Oferte Bănci',
  description: 'Calculează rata credit ipotecar gratuit. Compară dobânzi de la toate băncile din România. Primește 3-5 oferte personalizate în 24h.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
