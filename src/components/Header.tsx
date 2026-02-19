'use client';

import { useState } from 'react';
import Link from 'next/link';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              {/* 3 vertical bars logo */}
              <div className="flex gap-1">
                <div className="w-1.5 h-6 bg-[#00D186] rounded-sm"></div>
                <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-70"></div>
                <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-40"></div>
              </div>
              <span className="text-xl font-bold text-[#0B1B3E]">lend.ro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/#calculator" 
                className="text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors"
              >
                Calculator
              </Link>
              <Link 
                href="/banci" 
                className="text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors"
              >
                Bănci
              </Link>
              <Link 
                href="/blog" 
                className="text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors"
              >
                Ghiduri
              </Link>
              <Link 
                href="/#contact" 
                className="px-5 py-2.5 bg-[#00D186] text-white font-semibold text-sm rounded-lg hover:bg-[#00b874] transition-colors shadow-sm"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#00D186] hover:text-[#00b874] p-1 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Full Screen */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 md:hidden shadow-2xl overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-6 bg-[#00D186] rounded-sm"></div>
                      <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-70"></div>
                      <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-40"></div>
                    </div>
                    <span className="text-xl font-bold text-[#0B1B3E]">lend.ro</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/#calculator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                  >
                    Calculator
                  </Link>
                  <Link
                    href="/banci"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                  >
                    Bănci
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                  >
                    Ghiduri
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                  >
                    Contact
                  </Link>
                </nav>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link
                    href="/#calculator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-6 py-3.5 bg-[#00D186] text-white text-center font-semibold text-base rounded-lg hover:bg-[#00b874] transition-colors shadow-md"
                  >
                    Calculează rata
                  </Link>
                </div>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    Compară oferte de la 12+ bănci
                  </p>
                  <p className="text-xs text-gray-400">
                    Gratuit. 100% online. În 24 de ore.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
