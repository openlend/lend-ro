import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export const revalidate = 3600; // refresh hourly

export default async function BlogPage() {
  const posts = (await getAllBlogPosts())
    .slice()
    .sort((a, b) => (b.published || '').localeCompare(a.published || ''));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A2F2F] to-[#0A2F2F]/95 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog lend.ro
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Știri, explicații și ghiduri despre credite ipotecare, bănci și piața imobiliară.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-10">
        {posts.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h2 className="text-xl font-bold text-[#0B1B3E] mb-2">Nu avem încă articole aici.</h2>
            <p className="text-gray-600">Revin-o în curând.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="font-semibold text-[#0B1B3E]">{post.category}</span>
                    <span>•</span>
                    <span>{post.published}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B1B3E] leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="text-[#00D186] font-semibold">Citește →</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-bold text-[#0B1B3E] mb-2">Newsletter</h3>
          <p className="text-gray-700">
            Vrei să știi când scade dobânda sau când o bancă vine cu o ofertă bună? Îți trimitem doar ce merită.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (Formularul de abonare îl conectăm la pipeline-ul de știri.)
          </p>
        </div>
      </div>
    </main>
  );
}
