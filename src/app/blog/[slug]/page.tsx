import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Articol negăsit | lend.ro',
    };
  }

  return {
    title: `${post.title} | lend.ro`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://lend.ro/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Schema for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'lend.ro',
      url: 'https://lend.ro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'lend.ro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lend.ro/logo.png',
      },
    },
    datePublished: post.published,
    dateModified: post.updated,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lend.ro/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#0A2F2F] to-[#0A2F2F]/95 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Acasă
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-white/80">{post.title}</span>
              </div>

              {/* Category & Meta */}
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#FF6B2C] text-white text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-white/60 text-sm">{post.published}</span>
                <span className="text-white/60 text-sm">📖 {post.readingTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-white/80 leading-relaxed">
                {post.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Blog Content */}
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-[#0A2F2F]
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#FF6B2C] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#0A2F2F] prose-strong:font-bold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:mb-2 prose-li:text-gray-700
                prose-blockquote:border-l-4 prose-blockquote:border-[#FF6B2C] prose-blockquote:pl-4 prose-blockquote:italic
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg
                prose-table:w-full prose-table:border-collapse
                prose-th:bg-[#0A2F2F] prose-th:text-white prose-th:p-3 prose-th:text-left
                prose-td:border prose-td:border-gray-200 prose-td:p-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-[#0A2F2F] to-[#0A2F2F]/90 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Gata să Calculezi Rata Ta Lunară?
              </h2>
              <p className="text-xl mb-8 text-white/80">
                Calculator gratuit, rezultate personalizate în 30 secunde. Compară 12 bănci.
              </p>
              <Link
                href="/calculator"
                className="inline-block bg-[#FF6B2C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF8C5C] transition-all shadow-lg"
              >
                📊 Calculează Acum
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#0A2F2F] hover:text-[#FF6B2C] transition-colors font-semibold"
              >
                ← Înapoi la Blog
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
