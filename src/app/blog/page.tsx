import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Credit Ipotecar | Ghiduri și Sfaturi - lend.ro',
  description: 'Articole despre credite ipotecare, dobânzi, ghiduri complete pentru prima casă, refinanțare și tot ce trebuie să știi despre creditele imobiliare în România.',
  keywords: ['blog credit ipotecar', 'ghid prima casa', 'sfaturi credit imobiliar', 'dobânzi bănci', 'refinanțare credit'],
};

const blogPosts = [
  {
    slug: 'ghid-credit-ipotecar-romania-2026',
    title: 'Ghid Complet Credit Ipotecar România 2026',
    excerpt: 'Tot ce trebuie să știi despre creditele ipotecare în 2026: dobânzi, condiții, documente necesare, și cum să obții cele mai bune oferte de la bănci.',
    category: 'Ghiduri',
    readTime: '15 min citire',
    date: '18 februarie 2026',
    image: '/blog/credit-ipotecar-ghid.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage to-mint text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Blog Credit Ipotecar
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Ghiduri complete, sfaturi practice și ultimele noutăți despre creditele imobiliare în România
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-56 bg-gradient-to-br from-mint to-sage flex items-center justify-center">
                  <div className="text-white text-6xl">🏠</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Category + Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-mint transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Date + CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-mint font-bold group-hover:translate-x-2 transition-transform inline-block">
                      Citește →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculează-ți rata lunară acum
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Compară oferte de la 12+ bănci și primești 5 oferte competitive în 24 de ore
          </p>
          <Link 
            href="/#calculator" 
            className="inline-block bg-mint text-white px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl"
          >
            Începe calculul →
          </Link>
        </div>
      </section>
    </>
  );
}
