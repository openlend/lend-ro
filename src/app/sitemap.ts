import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lend.ro';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    '',
    '/blog',
    '/blog/ghid-credit-ipotecar-romania-2026',
    '/contact',
    '/despre',
    '/glosar',
    '/termeni-conditii',
    '/politica-confidentialitate',
    '/politica-cookies',
  ];

  // Bank pages
  const banks = [
    'bt', 'bcr', 'brd', 'ing', 'raiffeisen', 'garanti',
    'unicredit', 'libra', 'credit-europe', 'patria', 'exim', 'intesa'
  ];

  // Generate sitemap entries
  const entries: MetadataRoute.Sitemap = [
    // Homepage (highest priority)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Calculator section (high priority)
    {
      url: `${baseUrl}/#calculator`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Static pages
    ...staticPages.slice(1).map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: page.includes('blog') ? 0.8 : 0.7,
    })),
    // Bank pages (important for SEO)
    ...banks.map((bank) => ({
      url: `${baseUrl}/banci/${bank}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
