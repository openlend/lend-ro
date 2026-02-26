'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { demoArticles, categoryLabels, getFeaturedArticle } from '@/data/blog-demo-articles';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import CategoryBadge from '@/components/blog/CategoryBadge';

const ARTICLES_PER_PAGE = 9;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('toate');
  const [currentPage, setCurrentPage] = useState(1);

  const featuredArticle = getFeaturedArticle();

  // Filter articles
  const filteredArticles = useMemo(() => {
    let filtered = demoArticles.filter(article => !article.featured);

    // Category filter
    if (selectedCategory !== 'toate') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-navy to-sage text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Știri Credite & Piață Imobiliară
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Ultimele noutăți despre credite ipotecare, bănci și piață imobiliară în România
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Caută articole..."
                className="w-full px-6 py-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-mint shadow-lg"
              />
              <svg
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex gap-3 py-4 overflow-x-auto">
            <button
              onClick={() => handleFilterChange('toate')}
              className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === 'toate'
                  ? 'bg-mint text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toate
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleFilterChange(key)}
                className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === key
                    ? 'bg-mint text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-8">
            {/* Featured Article */}
            {featuredArticle && selectedCategory === 'toate' && !searchQuery && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⭐</span>
                  <h2 className="text-2xl font-bold text-navy">Articol Recomandat</h2>
                </div>
                <Link href={`/blog/${featuredArticle.category}/${featuredArticle.slug}`}>
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2 relative h-64 md:h-auto">
                        <img
                          src={featuredArticle.featuredImage}
                          alt={featuredArticle.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <CategoryBadge category={featuredArticle.category} />
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 hover:text-mint transition-colors">
                          {featuredArticle.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span>{featuredArticle.publishedAt}</span>
                          <span>📖 {featuredArticle.readingTime}</span>
                        </div>
                        <div className="text-mint font-bold text-lg">
                          Citește articolul →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
              <>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  {searchQuery
                    ? `Rezultate pentru "${searchQuery}" (${filteredArticles.length})`
                    : selectedCategory === 'toate'
                    ? 'Toate Articolele'
                    : categoryLabels[selectedCategory]}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {paginatedArticles.map((article) => (
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
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Nu am găsit articole
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery
                    ? `Nu există articole pentru "${searchQuery}"`
                    : 'Nu există articole în această categorie'}
                </p>
                {searchQuery && (
                  <div className="text-sm text-gray-500">
                    Încearcă: <span className="font-semibold">credite</span>, <span className="font-semibold">bănci</span>, <span className="font-semibold">IRCC</span>, <span className="font-semibold">Prima Casă</span>
                  </div>
                )}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('toate');
                    setCurrentPage(1);
                  }}
                  className="mt-6 px-6 py-3 bg-mint text-white font-bold rounded-lg hover:bg-mint/90 transition-colors"
                >
                  ← Înapoi la Blog
                </button>
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-mint to-green-500 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculează Rata Ta Lunară
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Calculator gratuit, rezultate în 30 secunde. Compară 12 bănci.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-white text-mint px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            📊 Calculează Acum
          </Link>
        </div>
      </div>
    </main>
  );
}
