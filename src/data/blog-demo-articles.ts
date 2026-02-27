export interface DemoArticle {
  id: string;
  slug: string;
  title: string;
  category: 'credite' | 'banci' | 'legislatie' | 'piata-imobiliara';
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  featuredImage?: string; // optional: can be provided in frontmatter or demo data
  tags: string[];
  featured?: boolean;
}

export const categoryLabels: Record<string, string> = {
  credite: 'Credite',
  banci: 'Bănci',
  legislatie: 'Legislație',
  'piata-imobiliara': 'Piață Imobiliară',
};

// Returns a featured image URL for an article: prefer explicit, fall back to category defaults
export function getFeaturedImage(article: DemoArticle) {
  if (article.featuredImage && article.featuredImage.length > 0) return article.featuredImage;
  const mapping: Record<string, string> = {
    credite: '/blog/default-credite.svg',
    banci: '/blog/default-banci.svg',
    legislatie: '/blog/default-legislatie.svg',
    'piata-imobiliara': '/blog/default-piata-imobiliara.svg',
  };
  return mapping[article.category] || '/blog/default-generic.svg';
}


export const demoArticles: DemoArticle[] = [
  // CREDITE (3 articles)
  {
    id: '001',
    slug: 'bnr-ircc-februarie-2026',
    title: 'BNR Menține IRCC la 5.68% - Ce Înseamnă pentru Rata Ta',
    category: 'legislatie',
    excerpt: 'Banca Națională a României a anunțat menținerea indicelui IRCC la 5.68% pentru trimestrul I 2026. Află cum te afectează și ce poți face pentru a-ți optimiza rata lunară.',
    publishedAt: '2026-02-25',
    readingTime: '5 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=675&fit=crop',
    tags: ['BNR', 'IRCC', 'dobanda', 'februarie'],
    featured: true,
  },
  {
    id: '002',
    slug: 'cum-scazi-dobanda-credit-ipotecar',
    title: 'Cum Scazi Dobânda la Credit Ipotecar - 3 Metode Eficiente',
    category: 'credite',
    excerpt: 'Descoperă cele 3 metode dovedite prin care poți reduce dobânda la creditul ipotecar: refinanțare, negociere și avans suplimentar. Economisești până la 15.000€ pe durata creditului.',
    publishedAt: '2026-02-23',
    readingTime: '7 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=675&fit=crop',
    tags: ['dobanda', 'refinantare', 'economii', 'negociere'],
  },
  {
    id: '003',
    slug: 'credit-prima-casa-vs-credit-ipotecar-clasic',
    title: 'Prima Casă 2026 vs Credit Ipotecar Clasic: Ce Alegi?',
    category: 'credite',
    excerpt: 'Comparație completă între programul Prima Casă și creditele ipotecare clasice în 2026: condiții, dobânzi, avantaje și dezavantaje. Află care variantă e mai bună pentru tine.',
    publishedAt: '2026-02-20',
    readingTime: '8 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=675&fit=crop',
    tags: ['prima casa', 'comparatie', 'credit clasic', '2026'],
  },

  // BĂNCI (3 articles)
  {
    id: '004',
    slug: 'top-banci-credite-ipotecare-2026',
    title: 'Top 5 Bănci pentru Credite Ipotecare în 2026',
    category: 'banci',
    excerpt: 'Clasamentul celor mai bune bănci pentru credite ipotecare în România: BCR, BRD, ING, Raiffeisen și Alpha Bank. Analiză dobânzi, comisioane și servicii oferite.',
    publishedAt: '2026-02-22',
    readingTime: '6 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=675&fit=crop',
    tags: ['banci', 'top 5', 'clasament', 'comparatie'],
  },
  {
    id: '005',
    slug: 'bcr-scade-dobanda-februarie-2026',
    title: 'BCR Scade Dobânda la Creditele Ipotecare cu 0.25%',
    category: 'banci',
    excerpt: 'BCR anunță reducerea dobânzii fixe la creditele ipotecare începând cu martie 2026. Află cine poate beneficia de noile condiții și cum te afectează dacă ai deja credit la BCR.',
    publishedAt: '2026-02-21',
    readingTime: '4 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?w=1200&h=675&fit=crop',
    tags: ['BCR', 'dobanda', 'reducere', 'stiri'],
  },
  {
    id: '006',
    slug: 'ing-lanseaza-campanie-promotionala-martie',
    title: 'ING Bank: 0% Comision Analiza Dosar în Martie 2026',
    category: 'banci',
    excerpt: 'ING Bank lansează o campanie promoțională pentru luna martie: 0% comision de analiză dosar și evaluare gratuită pentru creditele peste 150.000€. Economisești până la 1.500€.',
    publishedAt: '2026-02-19',
    readingTime: '5 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=675&fit=crop',
    tags: ['ING', 'promotie', 'comision zero', 'martie'],
  },

  // LEGISLAȚIE (3 articles)
  {
    id: '007',
    slug: 'noul-program-prima-casa-2026-modificari',
    title: 'Programul Prima Casă 2026: Noi Modificări Legislative',
    category: 'legislatie',
    excerpt: 'Guvernul a aprobat modificările la programul Prima Casă 2026: plafon majorat la 450.000 lei, condiții relaxate pentru tineri și posibilitatea cumpărării de la constructor. Detalii complete.',
    publishedAt: '2026-02-24',
    readingTime: '9 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1200&h=675&fit=crop',
    tags: ['prima casa', 'modificari', 'lege', '2026'],
  },
  {
    id: '008',
    slug: 'dae-credit-ipotecar-cum-se-calculeaza',
    title: 'DAE la Credit Ipotecar: Cum Se Calculează Corect în 2026',
    category: 'legislatie',
    excerpt: 'Află ce înseamnă DAE (Dobânda Anuală Efectivă), cum se calculează și de ce e mai importantă decât dobânda nominală când compari oferte de credit ipotecar.',
    publishedAt: '2026-02-18',
    readingTime: '6 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=675&fit=crop',
    tags: ['DAE', 'calcul', 'legislatie', 'dobanda'],
  },
  {
    id: '009',
    slug: 'ce-este-ipoteca-imobiliara-raspunderi-legale',
    title: 'Ce Este Ipoteca Imobiliară și Ce Responsabilități Ai',
    category: 'legislatie',
    excerpt: 'Ghid complet despre ipoteca imobiliară: ce înseamnă juridic, ce obligații ai față de bancă, ce se întâmplă dacă nu mai poți plăti rata și cum te protejezi legal.',
    publishedAt: '2026-02-17',
    readingTime: '10 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=675&fit=crop',
    tags: ['ipoteca', 'juridic', 'obligatii', 'protectie'],
  },

  // PIAȚĂ IMOBILIARĂ (3 articles)
  {
    id: '010',
    slug: 'preturile-apartamentelor-bucuresti-2026',
    title: 'Prețurile Apartamentelor în București Cresc cu 8% în 2026',
    category: 'piata-imobiliara',
    excerpt: 'Analiza pieței imobiliare din București: prețurile au crescut cu 8% în primul trimestru 2026. Zonele cu cea mai mare creștere, previziuni și sfaturi pentru cumpărători.',
    publishedAt: '2026-02-26',
    readingTime: '7 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=675&fit=crop',
    tags: ['bucuresti', 'preturi', 'piata', 'crestere'],
  },
  {
    id: '011',
    slug: 'cel-mai-bun-moment-cumparare-apartament',
    title: 'Când E Cel Mai Bun Moment să Cumperi Apartament în 2026?',
    category: 'piata-imobiliara',
    excerpt: 'Analiza sezonalității pieței imobiliare românești: când găsești cele mai bune oferte, când să negociezi prețul și care e strategia optimă pentru cumpărare.',
    publishedAt: '2026-02-16',
    readingTime: '6 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=675&fit=crop',
    tags: ['timing', 'cumparare', 'strategie', 'negociere'],
  },
  {
    id: '012',
    slug: 'apartament-vechi-vs-nou-ce-alegi',
    title: 'Apartament Vechi vs Nou: Avantaje, Dezavantaje, Costuri',
    category: 'piata-imobiliara',
    excerpt: 'Comparație completă între apartamentele vechi (construite înainte de 1990) și cele noi: prețuri, costuri renovare, utilități, potențial creștere valoare și ce se potrivește mai bine nevoilor tale.',
    publishedAt: '2026-02-15',
    readingTime: '8 min',
    author: 'Echipa lend.ro',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=675&fit=crop',
    tags: ['vechi vs nou', 'comparatie', 'renovare', 'investitie'],
  },
];

// Helper functions
export function getArticlesByCategory(category: string): DemoArticle[] {
  return demoArticles.filter(article => article.category === category);
}

export function getFeaturedArticle(): DemoArticle | undefined {
  return demoArticles.find(article => article.featured);
}

export function searchArticles(query: string): DemoArticle[] {
  const lowercaseQuery = query.toLowerCase();
  return demoArticles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRelatedArticles(currentArticleId: string, category: string, limit: number = 3): DemoArticle[] {
  return demoArticles
    .filter(article => article.id !== currentArticleId && article.category === category)
    .slice(0, limit);
}
