import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  author: string;
  published: string;
  updated: string;
  category: string;
  readingTime: string;
  featured: boolean;
  content: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const post = await getBlogPostBySlug(slug);
        return post;
      })
  );

  return allPostsData.filter((post): post is BlogPost => post !== null);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      keywords: data.keywords || '',
      author: data.author || 'lend.ro',
      published: data.published || '',
      updated: data.updated || data.published || '',
      category: data.category || 'Uncategorized',
      readingTime: data.readingTime || '5 min',
      featured: data.featured || false,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}
