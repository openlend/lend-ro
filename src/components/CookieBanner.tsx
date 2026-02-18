'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-white border-t-2 border-gray-200 shadow-2xl">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🍪 Folosim cookie-uri pentru a-ți îmbunătăți experiența
            </h3>
            <p className="text-gray-600 text-sm">
              Utilizăm cookie-uri și tehnologii similare pentru a personaliza conținutul, a analiza traficul și a oferi funcționalități de social media. 
              Citește <a href="/politica-cookies" className="text-primary-500 underline hover:text-primary-600">Politica de Cookies</a> pentru mai multe detalii.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={declineCookies}
              className="px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              Refuz
            </button>
            <button
              onClick={acceptCookies}
              className="px-8 py-3 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
