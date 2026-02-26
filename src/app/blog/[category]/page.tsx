'use client';

import { use, useState, useMemo } from 'react';
import Link from 'next/link';
import { getArticlesByCategory, categoryLabels } from '@/data/blog-demo-articles';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { notFound } from 'next/navigation';

const ARTICLES_PER_PAGE = 9;

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = use(params);
  const [currentPage, setCurrentPage] = useState(1);

  // Validate category
  if (!categoryLabels[category]) {
    notFound();
  }

  const articles = useMemo(() => getArticlesByCategory(category), [category]);
  
  // Pagination
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = articles.slice(
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
            <span className="text-white">{categoryLabels[category]}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryLabels[category]} - Articole lend.ro
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {articles.length} {articles.length === 1 ? 'articol' : 'articole'} în această categorie
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-8">
            {paginatedArticles.length > 0 ? (
              <>
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
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Nu există articole în această categorie
                </h3>
                <Link
                  href="/blog"
                  className="inline-block mt-6 px-6 py-3 bg-mint text-white font-bold rounded-lg hover:bg-mint/90 transition-colors"
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
