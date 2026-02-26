'use client';

import Link from 'next/link';
import { categoryLabels, demoArticles } from '@/data/blog-demo-articles';
import { useState } from 'react';

export default function BlogSidebar() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Count articles per category
  const categoryCounts = Object.keys(categoryLabels).reduce((acc, key) => {
    acc[key] = demoArticles.filter(article => article.category === key).length;
    return acc;
  }, {} as Record<string, number>);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement newsletter subscription
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <aside className="space-y-6">
      {/* Calculator CTA */}
      <div className="bg-mint text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">Calculează Rata</h3>
        <p className="text-sm mb-4 text-white/90">
          Află în 30 secunde cât vei plăti lunar pentru creditul tău ipotecar.
        </p>
        <Link
          href="/calculator"
          className="block w-full bg-white text-mint text-center font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          📊 Calculator Credit
        </Link>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-navy mb-4">Categorii Populare</h3>
        <ul className="space-y-2">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <li key={key}>
              <Link
                href={`/blog/${key}`}
                className="flex items-center justify-between text-gray-700 hover:text-mint transition-colors py-2 border-b border-gray-100 last:border-0"
              >
                <span>{label}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
                  {categoryCounts[key] || 0}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-navy mb-3">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">
          Primește săptămânal cele mai bune sfaturi despre credite ipotecare.
        </p>
        
        {subscribed ? (
          <div className="bg-mint/10 text-mint text-sm font-semibold p-3 rounded-lg text-center">
            ✓ Te-ai abonat cu succes!
          </div>
        ) : (
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email-ul tău"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-mint"
              required
            />
            <button
              type="submit"
              className="w-full bg-navy text-white font-bold py-2 px-4 rounded-lg hover:bg-navy/90 transition-colors"
            >
              Abonează-te
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
