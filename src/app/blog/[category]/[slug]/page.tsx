'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { demoArticles, categoryLabels, getRelatedArticles, getFeaturedImage } from '@/data/blog-demo-articles';
import CategoryBadge from '@/components/blog/CategoryBadge';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default function ArticlePage({ params }: PageProps) {
  const { category, slug } = use(params);

  // Find the article
  const article = demoArticles.find(
    a => a.category === category && a.slug === slug
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.id, article.category, 3);
  const articleUrl = `https://lend.ro/blog/${category}/${slug}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-navy to-sage text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 overflow-x-auto pb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">
              Acasă
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors whitespace-nowrap">
              Blog
            </Link>
            <span>/</span>
            <Link href={`/blog/${category}`} className="hover:text-white transition-colors whitespace-nowrap">
              {categoryLabels[category]}
            </Link>
          </nav>

          {/* Category Badge & Meta */}
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap">
            <CategoryBadge category={article.category} />
            <span className="text-white/70 text-xs md:text-sm">{article.publishedAt}</span>
            <span className="text-white/70 text-xs md:text-sm">📖 {article.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={getFeaturedImage(article)}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
                onError={(e) => {
                  // Fallback to placeholder SVG on error
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-bank.svg';
                }}
              />
            </div>

            {/* Share Buttons (top) */}
            <div className="mb-8 pb-6 border-b">
              <ShareButtons url={articleUrl} title={article.title} />
            </div>

            {/* Article Body - Demo Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Introducere</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Context și Detalii</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                În piața creditelor ipotecare din România, este esențial să înțelegi toate aspectele înainte de a lua o decizie. 
                Fie că vorbim despre dobânzi, condiții de eligibilitate sau strategii de optimizare, informarea corectă face diferența 
                între o alegere bună și una excelentă.
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Analizează toate opțiunile disponibile pe piață</li>
                <li className="text-gray-700">Compară ofertele de la mai multe bănci</li>
                <li className="text-gray-700">Verifică comisioanele ascunse și costurile reale</li>
                <li className="text-gray-700">Calculează capacitatea ta reală de plată</li>
              </ul>

              <blockquote className="border-l-4 border-mint pl-4 italic text-gray-600 my-8 bg-gray-50 p-4 rounded">
                "Cea mai bună investiție pe care o poți face este în educația ta financiară. 
                Un credit ipotecar bine negociat poate economisi zeci de mii de euro pe durata împrumutului."
              </blockquote>

              <h3 className="text-2xl font-bold text-navy mt-8 mb-4">Puncte Cheie de Reținut</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Verifică IRCC-ul curent și tendințele sale</li>
                <li className="text-gray-700">Negociază dobânda cu banca - este posibil!</li>
                <li className="text-gray-700">Ia în calcul toate costurile, nu doar rata lunară</li>
                <li className="text-gray-700">Păstrează o rezervă de siguranță (3-6 luni)</li>
              </ol>

              <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Concluzie</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Decizia de a contracta un credit ipotecar nu trebuie luată în grabă. Informează-te, compară, 
                calculează și alege varianta care se potrivește cel mai bine situației tale financiare pe termen lung. 
                Utilizează calculatorul nostru gratuit pentru a vedea exact ce rate vei plăti.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-mint to-green-500 rounded-2xl p-8 md:p-12 text-center text-white mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Gata să Calculezi Rata Ta Lunară?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Calculator gratuit, rezultate personalizate în 30 secunde. Compară 12 bănci.
              </p>
              <Link
                href="/calculator"
                className="inline-block bg-white text-mint px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                📊 Calculează Acum
              </Link>
            </div>

            {/* Tags */}
            <div className="mb-12 pb-6 border-b">
              <h3 className="text-lg font-bold text-navy mb-4">Etichete:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-mint hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mb-12 pb-6 border-b">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  L
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">{article.author}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experți în credite ipotecare și piață imobiliară din România. 
                    Oferim informații verificate și sfaturi practice pentru a te ajuta să iei cele mai bune decizii financiare.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Buttons (bottom) */}
            <div className="mb-12">
              <ShareButtons url={articleUrl} title={article.title} />
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Citește Mai Departe</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <BlogCard key={relatedArticle.id} article={relatedArticle} />
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-navy hover:text-mint transition-colors font-semibold"
              >
                ← Înapoi la Blog
              </Link>
            </div>
          </article>

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
