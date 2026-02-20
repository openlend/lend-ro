import type { Metadata } from "next";
import "./globals.css";
import HeaderWithFlyouts from "@/components/HeaderWithFlyouts";

export const metadata: Metadata = {
  metadataBase: new URL('https://lend.ro'),
  title: {
    default: "Calculator Credit Ipotecar Online 2026 | Compară Oferte Bănci România - lend.ro",
    template: "%s | lend.ro"
  },
  description: "★ Calculator credit ipotecar cu dobânzi actualizate ✓ Compară oferte de la 12+ bănci din România (BT, BCR, ING, Raiffeisen) ✓ Calculează rata lunară instant ✓ Primești 5 oferte personalizate GRATUIT în 24h ✓ Fără obligații",
  keywords: ["calculator credit ipotecar", "credit ipotecar", "calculator rate credit", "dobanda credit ipotecar", "credit pentru casa", "credit imobiliar", "calculator refinantare", "prima casa", "credit pentru apartament", "dobanda banca", "comparator credite", "rate credit ipotecar", "ipotecar online", "credit casa", "credit apartament", "banca transilvania", "bcr credit", "ing credit ipotecar", "raiffeisen credit"],
  authors: [{ name: 'lend.ro' }],
  creator: 'lend.ro',
  publisher: 'lend.ro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://lend.ro',
    siteName: 'lend.ro',
    title: 'Calculator Credit Ipotecar - Compară Oferte Bănci România',
    description: 'Calculează rata lunară instant. Compară oferte de la 12+ bănci. Primești oferte personalizate gratuit în 24h.',
    images: [
      {
        url: 'https://lend.ro/logo.png',
        width: 1200,
        height: 630,
        alt: 'lend.ro - Calculator Credit Ipotecar România',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculator Credit Ipotecar - Compară Oferte Bănci România',
    description: 'Calculează rata lunară instant. Compară oferte de la 12+ bănci.',
    images: ['https://lend.ro/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lend.ro',
  },
  verification: {
    google: 'verification_token', // Add Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
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
        <HeaderWithFlyouts />
        {children}
      </body>
    </html>
  );
}
