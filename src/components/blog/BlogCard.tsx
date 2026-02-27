import Link from 'next/link';
import Image from 'next/image';
import { DemoArticle, getFeaturedImage } from '@/data/blog-demo-articles';
import CategoryBadge from './CategoryBadge';

interface BlogCardProps {
  article: DemoArticle;
}

export default function BlogCard({ article }: BlogCardProps) {
  const imageSrc = getFeaturedImage(article);

  return (
    <Link href={`/blog/${article.category}/${article.slug}`}>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {/* Featured Image */}
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={article.category} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 hover:text-mint transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3">
            <span>{article.publishedAt}</span>
            <span>📖 {article.readingTime}</span>
          </div>

          {/* CTA */}
          <div className="mt-4 text-mint font-semibold text-sm flex items-center">
            Citește →
          </div>
        </div>
      </div>
    </Link>
  );
}
