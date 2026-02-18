/**
 * Structured Data (Schema.org JSON-LD) Component
 * Improves SEO with rich snippets in Google Search
 */

interface StructuredDataProps {
  type: 'website' | 'article' | 'organization' | 'breadcrumb' | 'faq' | 'financialService';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let schema: any = {};

  switch (type) {
    case 'website':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'lend.ro',
        url: 'https://lend.ro',
        description: 'Platformă #1 pentru compararea creditelor ipotecare în România',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://lend.ro/#calculator?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        ...data,
      };
      break;

    case 'organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'lend.ro',
        url: 'https://lend.ro',
        logo: 'https://lend.ro/logo.png',
        description: 'Platformă de comparare credite ipotecare în România. Compară oferte de la 12+ bănci și primești oferte personalizate gratuit.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RO',
          addressRegion: 'București',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'contact@lend.ro',
          availableLanguage: ['Romanian'],
        },
        sameAs: [
          'https://lend.ro',
        ],
        areaServed: 'RO',
        ...data,
      };
      break;

    case 'article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
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
        image: data.image || 'https://lend.ro/logo.png',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      };
      break;

    case 'faq':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
      };
      break;

    case 'breadcrumb':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      break;

    case 'financialService':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialProduct',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: data.bankName,
        },
        interestRate: data.interestRate,
        feesAndCommissionsSpecification: data.fees,
        ...data.extra,
      };
      break;

    default:
      schema = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
