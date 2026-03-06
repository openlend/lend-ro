import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

// Canonical blog articles live at /blog/[slug] and are sourced from /content/blog.
// This route exists for backwards compatibility with older category-based URLs.
export default async function CategorySlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
