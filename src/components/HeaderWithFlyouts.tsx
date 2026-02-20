'use client';

import { useState } from 'react';
import Link from 'next/link';
import BankLogo from './BankLogo';
import { Home, Building, RefreshCw, Calculator, TrendingUp, BookOpen, HelpCircle, FileText, Phone, Lock } from 'lucide-react';

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

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeaderWithFlyouts() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopFlyout, setActiveDesktopFlyout] = useState<string | null>(null);
  const [activeMobileFlyout, setActiveMobileFlyout] = useState<string | null>(null);

  const banks = [
    { name: 'BT', slug: 'bt' },
    { name: 'BCR', slug: 'bcr' },
    { name: 'ING', slug: 'ing' },
    { name: 'RAIFFEISEN', slug: 'raiffeisen' },
    { name: 'UNICREDIT', slug: 'unicredit' },
    { name: 'BRD', slug: 'brd' },
    { name: 'GARANTI', slug: 'garanti' },
    { name: 'LIBRA BANK', slug: 'libra' },
    { name: 'CREDIT EUROPE BANK', slug: 'credit-europe' },
    { name: 'INTESA SAN PAOLO', slug: 'intesa' },
    { name: 'PATRIA BANK', slug: 'patria' },
    { name: 'EXIM BANCA ROMANEASCA', slug: 'exim' }
  ];

  const scrollToCalculator = () => {
    setMobileMenuOpen(false);
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <div className="flex gap-1">
                <div className="w-1.5 h-6 bg-[#00D186] rounded-sm"></div>
                <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-70"></div>
                <div className="w-1.5 h-6 bg-[#00D186] rounded-sm opacity-40"></div>
              </div>
              <span className="text-xl font-bold text-[#0B1B3E]">lend.ro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Acasă */}
              <Link 
                href="/" 
                className="text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors"
              >
                Acasă
              </Link>

              {/* Produse Flyout */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDesktopFlyout('produse')}
                onMouseLeave={() => setActiveDesktopFlyout(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors">
                  Produse
                  <ChevronDown />
                </button>

                {activeDesktopFlyout === 'produse' && (
                  <div className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-200 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Stânga: Tipuri Credit */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Tipuri Credit</h3>
                        <div className="space-y-1">
                          <Link href="/produse/credit-ipotecar" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <Home size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Credit ipotecar clasic</div>
                              <div className="text-xs text-gray-500 mt-0.5">Pentru achiziție casă/apartament</div>
                            </div>
                          </Link>
                          <Link href="/produse/prima-casa" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <Building size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Credit Prima Casă</div>
                              <div className="text-xs text-gray-500 mt-0.5">Avans redus, dobândă avantajoasă</div>
                            </div>
                          </Link>
                          <Link href="/produse/refinantare" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <RefreshCw size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Refinanțare credit</div>
                              <div className="text-xs text-gray-500 mt-0.5">Rată lunară mai mică</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Dreapta: Tools */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Instrumente</h3>
                        <div className="space-y-1">
                          <button onClick={scrollToCalculator} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group w-full text-left">
                            <Calculator size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Calculator rate</div>
                              <div className="text-xs text-gray-500 mt-0.5">Calculează rata lunară instant</div>
                            </div>
                          </button>
                          <button onClick={scrollToCalculator} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group w-full text-left">
                            <TrendingUp size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Comparator bănci</div>
                              <div className="text-xs text-gray-500 mt-0.5">Compară oferte din 12+ bănci</div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bănci Flyout */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDesktopFlyout('banci')}
                onMouseLeave={() => setActiveDesktopFlyout(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors">
                  Bănci
                  <ChevronDown />
                </button>

                {activeDesktopFlyout === 'banci' && (
                  <div className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-xl shadow-xl border border-gray-200 p-6">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Bănci Partenere (12)</h3>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      {banks.map((bank) => (
                        <Link
                          key={bank.slug}
                          href={`/banci/${bank.slug}`}
                          className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all hover:scale-105"
                        >
                          <BankLogo bankName={bank.name} size="sm" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/banci"
                      className="block w-full text-center py-2 text-sm font-medium text-[#00D186] hover:text-[#00b874] transition-colors"
                    >
                      Vezi toate băncile →
                    </Link>
                  </div>
                )}
              </div>

              {/* Resurse Flyout */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDesktopFlyout('resurse')}
                onMouseLeave={() => setActiveDesktopFlyout(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#00D186] transition-colors">
                  Resurse
                  <ChevronDown />
                </button>

                {activeDesktopFlyout === 'resurse' && (
                  <div className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-200 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Stânga: Ghiduri */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Ghiduri & Învățare</h3>
                        <div className="space-y-1">
                          <Link href="/blog/ghid-complet-credit-ipotecar-2026" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <BookOpen size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Ghid complet</div>
                              <div className="text-xs text-gray-500 mt-0.5">Tot ce trebuie să știi</div>
                            </div>
                          </Link>
                          <Link href="/blog" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <HelpCircle size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Întrebări frecvente</div>
                              <div className="text-xs text-gray-500 mt-0.5">Răspunsuri rapide</div>
                            </div>
                          </Link>
                          <Link href="/glosar" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <FileText size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Glosar termeni</div>
                              <div className="text-xs text-gray-500 mt-0.5">Explicații clare</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Dreapta: Legal + Support */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Legal & Contact</h3>
                        <div className="space-y-1">
                          <Link href="/despre" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <Building size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Despre noi</div>
                              <div className="text-xs text-gray-500 mt-0.5">Cine suntem</div>
                            </div>
                          </Link>
                          <Link href="/contact" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <Phone size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Contact</div>
                              <div className="text-xs text-gray-500 mt-0.5">Suntem aici pentru tine</div>
                            </div>
                          </Link>
                          <Link href="/politica-confidentialitate" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <Lock size={22} className="text-[#00D186] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-[#00D186]">Confidențialitate</div>
                              <div className="text-xs text-gray-500 mt-0.5">Datele tale sunt sigure</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Link 
                href="/contact" 
                className="text-sm font-medium text-gray-700 hover:text-[#00D186] px-4 py-2 border border-gray-300 rounded-lg hover:border-[#00D186] transition-colors"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <button
                onClick={scrollToCalculator}
                className="px-5 py-2.5 bg-[#00D186] text-white font-semibold text-sm rounded-lg hover:bg-[#00b874] transition-colors shadow-sm"
              >
                Calculează rata
              </button>
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

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 md:hidden shadow-2xl overflow-y-auto">
              <div className="p-6">
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

                <nav className="flex flex-col gap-2">
                  {/* Acasă */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                  >
                    Acasă
                  </Link>

                  {/* Produse Accordion */}
                  <div>
                    <button
                      onClick={() => setActiveMobileFlyout(activeMobileFlyout === 'produse' ? null : 'produse')}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                    >
                      <span>Produse</span>
                      <ChevronDown />
                    </button>
                    {activeMobileFlyout === 'produse' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link href="/produse/credit-ipotecar" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          🏠 Credit ipotecar clasic
                        </Link>
                        <Link href="/produse/prima-casa" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          🏡 Credit Prima Casă
                        </Link>
                        <Link href="/produse/refinantare" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          🔄 Refinanțare credit
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Bănci */}
                  <Link
                    href="/banci"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                  >
                    Bănci
                  </Link>

                  {/* Resurse Accordion */}
                  <div>
                    <button
                      onClick={() => setActiveMobileFlyout(activeMobileFlyout === 'resurse' ? null : 'resurse')}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00D186] rounded-lg transition-colors"
                    >
                      <span>Resurse</span>
                      <ChevronDown />
                    </button>
                    {activeMobileFlyout === 'resurse' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          📖 Ghiduri & Articole
                        </Link>
                        <Link href="/glosar" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          📝 Glosar termeni
                        </Link>
                        <Link href="/despre" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          📄 Despre noi
                        </Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00D186]">
                          📞 Contact
                        </Link>
                      </div>
                    )}
                  </div>
                </nav>

                <div className="mt-6">
                  <button
                    onClick={scrollToCalculator}
                    className="block w-full px-6 py-3.5 bg-[#00D186] text-white text-center font-semibold text-base rounded-lg hover:bg-[#00b874] transition-colors shadow-md"
                  >
                    Calculează rata acum
                  </button>
                </div>

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
