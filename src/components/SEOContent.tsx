'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SEOContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Calculator Credit Ipotecar - Compară Oferte din România
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          {/* Always visible content */}
          <p className="text-lg leading-relaxed">
            <strong className="text-[#0B1B3E]">Lend.ro</strong> este <em>prima platformă</em> din România care te ajută să compari{' '}
            <Link href="/produse/credit-ipotecar" className="text-[#00D186] hover:underline font-semibold">
              credite ipotecare
            </Link>{' '}
            de la cele mai importante <strong>bănci</strong> din piață. Calculatorul nostru de{' '}
            <strong>rate credit</strong> îți permite să obții în câteva secunde o <u>estimare precisă</u> a ratei lunare pentru{' '}
            <strong>creditul imobiliar</strong> dorit.
          </p>

          <h3 className="text-2xl font-bold text-[#0B1B3E] mt-8 mb-4">
            De ce să folosești calculatorul nostru de credit ipotecar?
          </h3>
          
          <ul className="space-y-3 list-disc pl-6">
            <li className="leading-relaxed">
              <strong className="text-[#0B1B3E]">Compară instant oferte de la 10+ bănci</strong> -{' '}
              <Link href="/banci" className="text-[#00D186] hover:underline">
                BT, BCR, ING, Raiffeisen, UniCredit, BRD, Garanti BBVA, Libra Bank, Patria Bank
              </Link> și altele
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#0B1B3E]">Calculator rate credit precis</strong> - folosim datele oficiale actualizate săptămânal cu dobânzile practicate de fiecare bancă
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#0B1B3E]">Solicită oferte personalizate GRATUIT</strong> - primești <em>5 oferte competitive</em> în maxim 24 de ore
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#0B1B3E]">Fără obligații</strong> - nu te angajezi la nimic, compari în liniște și <u>decizi tu</u>
            </li>
          </ul>

          {!isExpanded && (
            <div className="text-center mt-8">
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 bg-[#00D186] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00b874] transition-all shadow-md hover:shadow-lg"
              >
                <span>Citește mai mult</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}

          {/* Expanded content */}
          {isExpanded && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold text-[#0B1B3E] mt-12 mb-4">
                Cum funcționează calculatorul de credit ipotecar?
              </h3>
              
              <p className="leading-relaxed">
                Procesul este <strong>simplu și rapid</strong>. Introduci <strong className="text-[#0B1B3E]">prețul proprietății</strong>,{' '}
                <strong className="text-[#0B1B3E]">venitul lunar net</strong>, <strong className="text-[#0B1B3E]">perioada de creditare</strong>{' '}
                (între 5 și 30 de ani) și <strong className="text-[#0B1B3E]">avansul</strong> pe care îl poți achita.{' '}
                Calculatorul îți afișează <em>instant</em> cele mai bune oferte de <strong>credite pentru casă</strong> sau apartament, 
                sortate după <u>rata lunară cea mai mică</u>.
              </p>

              <p className="leading-relaxed">
                Fiecare ofertă include <strong>rata lunară estimată</strong>, <strong>gradul de îndatorare (DTI)</strong> și 
                eligibilitatea ta pentru acel produs bancar. Poți compara <strong>dobânzile</strong> practicate de diferite 
                bănci și să alegi cea mai avantajoasă ofertă pentru bugetul tău. Conform{' '}
                <a 
                  href="https://www.bnr.ro/Rata-dobanzii-de-politica-monetara-30378.aspx" 
                  target="_blank" 
                  rel="nofollow noopener" 
                  className="text-[#00D186] hover:underline font-semibold"
                >
                  Băncii Naționale a României (BNR)
                </a>, dobânda de referință IRCC influențează direct costul creditelor ipotecare cu dobândă variabilă.
              </p>

              <h3 className="text-2xl font-bold text-[#0B1B3E] mt-12 mb-4">
                Credit ipotecar pentru prima casă
              </h3>
              
              <p className="leading-relaxed">
                Dacă vrei să cumperi <strong>prima proprietate imobiliară</strong>, beneficiezi de <em>condiții mai avantajoase</em>:{' '}
                <strong className="text-[#0B1B3E]"><u>avans minim de doar 5%</u></strong> (în loc de 25% pentru a doua proprietate).{' '}
                Calculatorul nostru ia automat în considerare acest beneficiu și îți afișează{' '}
                <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline font-semibold">
                  ofertele eligibile pentru Prima Casă
                </Link>.
              </p>

              <p className="leading-relaxed">
                De asemenea, poți solicita un{' '}
                <Link href="/produse/prima-casa" className="text-[#00D186] hover:underline font-semibold">
                  <strong>credit Prima Casă (Noua Casă)</strong>
                </Link>{' '}
                cu garanție de stat, care oferă <strong>dobânzi mai mici</strong> și <strong>avans redus</strong> pentru{' '}
                proprietăți de până la <u>140.000 euro</u>.
              </p>

              <h3 className="text-2xl font-bold text-[#0B1B3E] mt-12 mb-4">
                Calculator refinanțare credit ipotecar
              </h3>
              
              <p className="leading-relaxed">
                Ai deja un <strong>credit ipotecar</strong> și vrei să-l{' '}
                <Link href="/produse/refinantare" className="text-[#00D186] hover:underline font-semibold">
                  <strong>refinanțezi</strong>
                </Link>{' '}
                pentru o rată mai mică? Folosește{' '}
                <Link href="/#calculator" className="text-[#00D186] hover:underline">
                  calculatorul nostru
                </Link>{' '}
                pentru a vedea <em>cât ai economisi lunar</em> și pe întreaga perioadă dacă treci 
                la o altă bancă cu <u>dobândă mai avantajoasă</u>. Mulți clienți economisesc între{' '}
                <strong className="text-[#0B1B3E]">200-500 RON/lună</strong> prin refinanțare!
              </p>

              <div className="bg-[#00D186] bg-opacity-10 rounded-2xl p-8 mt-12 border-2 border-[#00D186] border-opacity-20">
                <h4 className="text-xl font-bold text-[#0B1B3E] mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Sfat util: Compară mai mult decât dobânda!
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Când alegi un <strong>credit pentru apartament sau casă</strong>, <em>nu te uita doar la dobândă</em>.{' '}
                  Verifică și <strong className="text-[#0B1B3E]">comisioanele</strong> (administrare, rambursare anticipată),{' '}
                  <strong className="text-[#0B1B3E]">asigurările obligatorii</strong> și{' '}
                  <strong className="text-[#0B1B3E]"><u>DAE-ul</u></strong> (Dobânda Anuală Efectivă), 
                  care îți arată <em>costul real total</em> al creditului. Mai multe detalii găsești în{' '}
                  <Link href="/blog/ghid-complet-credit-ipotecar-2026" className="text-[#00D186] hover:underline font-semibold">
                    ghidul nostru complet despre credite ipotecare
                  </Link>.
                </p>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="inline-flex items-center gap-2 text-[#00D186] hover:text-[#00b874] font-semibold transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 12.5L10 7.5L5 12.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Ascunde conținutul</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
