'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="lend.ro" 
              className="h-8 md:h-10 transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/#calculator" 
              className="text-gray-700 hover:text-mint font-semibold transition"
            >
              Calculator
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-mint font-semibold transition flex items-center gap-1">
                Bănci
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/banci/bt" className="block py-2 px-3 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition">
                  Banca Transilvania
                </Link>
                <Link href="/banci/bcr" className="block py-2 px-3 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition">
                  BCR
                </Link>
                <Link href="/banci/brd" className="block py-2 px-3 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition">
                  BRD
                </Link>
                <Link href="/banci/ing" className="block py-2 px-3 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition">
                  ING Bank
                </Link>
                <Link href="/banci/raiffeisen" className="block py-2 px-3 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition">
                  Raiffeisen Bank
                </Link>
                <Link href="/banci/garanti" className="block py-2 px-3 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition">
                  Garanti BBVA
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <Link href="/#calculator" className="block py-2 px-3 text-mint hover:bg-mint/5 rounded-lg transition font-semibold">
                  Vezi toate băncile →
                </Link>
              </div>
            </div>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-mint font-semibold transition"
            >
              Blog
            </Link>
            <Link 
              href="/glosar" 
              className="text-gray-700 hover:text-mint font-semibold transition"
            >
              Glosar
            </Link>
            <Link 
              href="/despre" 
              className="text-gray-700 hover:text-mint font-semibold transition"
            >
              Despre
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-mint font-semibold transition"
            >
              Contact
            </Link>
            <Link 
              href="/#calculator" 
              className="bg-mint text-white px-6 py-2.5 rounded-xl font-bold hover:bg-mint/90 transition shadow-md hover:shadow-lg"
            >
              Începe →
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-mint transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4 space-y-2 animate-fadeIn">
            <Link 
              href="/#calculator" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition font-semibold"
            >
              Calculator
            </Link>
            
            {/* Mobile Bank Links */}
            <div className="space-y-1">
              <div className="py-2 px-4 text-gray-500 text-sm font-bold uppercase tracking-wide">
                Bănci
              </div>
              <Link 
                href="/banci/bt" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 pl-8 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition"
              >
                Banca Transilvania
              </Link>
              <Link 
                href="/banci/bcr" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 pl-8 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition"
              >
                BCR
              </Link>
              <Link 
                href="/banci/brd" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 pl-8 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition"
              >
                BRD
              </Link>
              <Link 
                href="/banci/ing" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 pl-8 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition"
              >
                ING Bank
              </Link>
              <Link 
                href="/banci/raiffeisen" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 pl-8 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition"
              >
                Raiffeisen Bank
              </Link>
              <Link 
                href="/banci/garanti" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 pl-8 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition"
              >
                Garanti BBVA
              </Link>
            </div>

            <Link 
              href="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition font-semibold"
            >
              Blog
            </Link>
            <Link 
              href="/glosar" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition font-semibold"
            >
              Glosar
            </Link>
            <Link 
              href="/despre" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition font-semibold"
            >
              Despre
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:text-mint hover:bg-mint/5 rounded-lg transition font-semibold"
            >
              Contact
            </Link>
            
            <div className="pt-4">
              <Link 
                href="/#calculator" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-mint text-white px-6 py-3 rounded-xl font-bold hover:bg-mint/90 transition shadow-md"
              >
                Începe acum →
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
