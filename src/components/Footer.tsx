'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <footer className="bg-[#0B1B3E] text-white py-12" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex gap-1">
                  <div className="w-1.5 h-6 bg-[#00D186] rounded-sm"></div>
                  <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-70"></div>
                  <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-40"></div>
                </div>
                <span className="text-xl font-bold">lend.ro</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Platforma #1 pentru credite ipotecare în România. Compară oferte de la 12+ bănci, gratuit și în 24 de ore.
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-white">Produse</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#calculator" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    Calculator rate
                  </Link>
                </li>
                <li>
                  <Link href="/banci" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    Bănci partenere
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    Ghiduri credite
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-white">Companie</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#contact" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/termeni-si-conditii" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    Termeni și condiții
                  </Link>
                </li>
                <li>
                  <Link href="/politica-confidentialitate" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    Politica de confidențialitate
                  </Link>
                </li>
                <li>
                  <Link href="/gdpr" className="text-sm text-gray-400 hover:text-[#00D186] transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:open@lend.ro" 
                    className="text-sm text-gray-400 hover:text-[#00D186] transition-colors flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-9zm1.5-.5a.5.5 0 00-.5.5v.5l5 3 5-3v-.5a.5.5 0 00-.5-.5h-9zM3 5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-7l-5 3-5-3z"/>
                    </svg>
                    open@lend.ro
                  </a>
                </li>
                <li>
                  <a 
                    href="https://radubalas.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-[#00D186] transition-colors flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm3.5 5.5h-2.79c-.45-.78-1.07-1.45-1.82-1.96.95.24 1.82.65 2.59 1.22.49.36.92.77 1.02.74zm-4.29 0H4.79c.1-.03.53-.38 1.02-.74.77-.57 1.64-.98 2.59-1.22-.75.51-1.37 1.18-1.82 1.96h-1.37zM2.04 8c0-.83.14-1.63.39-2.39h2.16c-.08.78-.13 1.58-.13 2.39s.05 1.61.13 2.39H2.43A6.96 6.96 0 012.04 8zm2.77 3.5h1.4c.36.78.82 1.5 1.38 2.13a7.003 7.003 0 01-2.78-2.13zm1.4-7H4.81c.82-.94 1.87-1.68 3.05-2.13-.56.63-1.02 1.35-1.38 2.13h-.27zM8 14.96c-.78 0-1.5-.57-2.02-1.47-.26-.44-.47-.93-.63-1.44h5.3c-.16.51-.37 1-.63 1.44-.52.9-1.24 1.47-2.02 1.47zm2.65-3.46H5.35c-.09-.78-.14-1.58-.14-2.39s.05-1.61.14-2.39h5.3c.09.78.14 1.58.14 2.39s-.05 1.61-.14 2.39zM8 1.04c.78 0 1.5.57 2.02 1.47.26.44.47.93.63 1.44H5.35c.16-.51.37-1 .63-1.44C6.5 1.61 7.22 1.04 8 1.04zm3.19 3.46h2.16c.25.76.39 1.56.39 2.39s-.14 1.63-.39 2.39h-2.16c.08-.78.13-1.58.13-2.39s-.05-1.61-.13-2.39zm.42 6.0h-1.4c-.36.78-.82 1.5-1.38 2.13 1.18-.45 2.23-1.19 3.05-2.13h-.27zM8 0z"/>
                    </svg>
                    radubalas.com
                  </a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#00D186] bg-opacity-10 text-[#00D186] hover:bg-opacity-20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#00D186] bg-opacity-10 text-[#00D186] hover:bg-opacity-20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                © {currentYear} lend.ro. Toate drepturile rezervate.
              </p>
              <p className="text-xs text-gray-500">
                Platformă dezvoltată de{' '}
                <a 
                  href="https://radubalas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00D186] hover:text-[#00b874] transition-colors"
                >
                  Radu Balaș
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
