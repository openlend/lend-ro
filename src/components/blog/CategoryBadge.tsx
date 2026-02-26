import { categoryLabels } from '@/data/blog-demo-articles';

interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-block bg-mint text-white text-xs font-bold px-3 py-1 rounded-full">
      {categoryLabels[category] || category}
    </span>
  );
}
