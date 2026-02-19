import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Ghiduri Credit Ipotecar Romania',
  description: 'Ghiduri complete despre credite ipotecare: calculatoare, comparatii bănci, sfaturi negociere dobândă. Conținut verificat de experți.',
};

// Sample articles (replace with real data from content/blog/*.md)
const articles = [
  {
    slug: 'ghid-complet-credit-ipotecar-2026',
    title: 'Ghid Complet Credit Ipotecar 2026: Tot Ce Trebuie Să Știi',
    description: 'Ghid complet credit ipotecar în România 2026: tipuri de credite, condiții, rate, bănci, acte necesare.',
    date: '2026-02-24',
    readingTime: '12 min',
    category: 'Ghiduri',
    featured: true,
  },
];

export default function BlogPage() {
  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A2F2F] via-[#0A2F2F]/95 to-[#0A2F2F] text-white">
      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog Credit Ipotecar
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Ghiduri complete, sfaturi practice și analize de piață pentru credite ipotecare în România.
          </p>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featuredArticle.slug}`}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#FF6B2C] text-white text-sm px-3 py-1 rounded-full">
                    ⭐ Recomandat
                  </span>
                  <span className="text-white/60 text-sm">{featuredArticle.date}</span>
                  <span className="text-white/60 text-sm">📖 {featuredArticle.readingTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 hover:text-[#FF6B2C] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  {featuredArticle.description}
                </p>
                <div className="text-[#FF6B2C] font-semibold">
                  Citește articolul →
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Other Articles Grid */}
      {otherArticles.length > 0 && (
        <div className="container mx-auto px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Toate Articolele</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-white/60">{article.date}</span>
                      <span className="text-xs text-white/60">📖 {article.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-[#FF6B2C] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/70 mb-4 flex-grow line-clamp-3">
                      {article.description}
                    </p>
                    <div className="text-[#FF6B2C] font-semibold text-sm">
                      Citește mai mult →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#FF6B2C] to-[#FF8C5C] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Calculează Rata Ta Lunară
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Calculator gratuit, rezultate în 30 secunde. Compară 12 bănci.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-white text-[#0A2F2F] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-lg"
          >
            📊 Calculează Acum
          </Link>
        </div>
      </div>
    </main>
  );
}
