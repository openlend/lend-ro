'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { searchArticles } from '@/data/blog-demo-articles';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';

const ARTICLES_PER_PAGE = 9;

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [currentPage, setCurrentPage] = useState(1);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchArticles(query);
  }, [query]);

  // Pagination
  const totalPages = Math.ceil(results.length / ARTICLES_PER_PAGE);
  const paginatedResults = results.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-navy to-sage text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">Căutare</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rezultate Căutare
            </h1>
            {query && (
              <p className="text-lg md:text-xl text-white/80">
                {results.length} {results.length === 1 ? 'rezultat' : 'rezultate'} pentru{' '}
                <span className="font-bold text-mint">"{query}"</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Results Section */}
          <div className="lg:col-span-8">
            {!query.trim() ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Introdu un termen de căutare
                </h3>
                <p className="text-gray-600 mb-6">
                  Folosește bara de căutare pentru a găsi articole
                </p>
                <Link
                  href="/blog"
                  className="inline-block px-6 py-3 bg-mint text-white font-bold rounded-lg hover:bg-mint/90 transition-colors"
                >
                  ← Înapoi la Blog
                </Link>
              </div>
            ) : paginatedResults.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {paginatedResults.map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ← Anterior
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === page
                            ? 'bg-mint text-white font-bold'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Următor →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Nu am găsit articole pentru "{query}"
                </h3>
                <p className="text-gray-600 mb-6">
                  Încearcă alt termen de căutare sau explorează categoriile noastre
                </p>
                
                {/* Suggestions */}
                <div className="max-w-md mx-auto mb-8">
                  <p className="text-sm text-gray-500 mb-3">Sugestii de căutare:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['credite', 'bănci', 'IRCC', 'Prima Casă', 'dobândă', 'refinanțare'].map((suggestion) => (
                      <Link
                        key={suggestion}
                        href={`/blog/search?q=${encodeURIComponent(suggestion)}`}
                        className="bg-mint text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-mint/90 transition-colors"
                      >
                        {suggestion}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/blog"
                  className="inline-block px-6 py-3 bg-navy text-white font-bold rounded-lg hover:bg-navy/90 transition-colors"
                >
                  ← Înapoi la Blog
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Se încarcă rezultatele...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
