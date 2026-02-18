import Link from 'next/link';

/**
 * Internal Linking Component for SEO
 * Improves site architecture and helps Google crawl pages
 */

interface InternalLinksProps {
  variant?: 'banks' | 'resources' | 'legal' | 'all';
  className?: string;
}

export default function InternalLinks({ variant = 'all', className = '' }: InternalLinksProps) {
  const bankLinks = [
    { name: 'Banca Transilvania', slug: 'bt' },
    { name: 'BCR', slug: 'bcr' },
    { name: 'BRD', slug: 'brd' },
    { name: 'ING Bank', slug: 'ing' },
    { name: 'Raiffeisen Bank', slug: 'raiffeisen' },
    { name: 'Garanti BBVA', slug: 'garanti' },
  ];

  const resourceLinks = [
    { name: 'Calculator Credit Ipotecar', href: '/#calculator' },
    { name: 'Blog Credite', href: '/blog' },
    { name: 'Glosar Termeni Financiari', href: '/glosar' },
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Termeni și Condiții', href: '/termeni-conditii' },
    { name: 'Politica de Confidențialitate', href: '/politica-confidentialitate' },
    { name: 'Politica de Cookies', href: '/politica-cookies' },
  ];

  if (variant === 'banks') {
    return (
      <div className={`space-y-2 ${className}`}>
        <h3 className="font-bold text-gray-900 mb-3">Credite Ipotecare pe Bănci:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {bankLinks.map((bank) => (
            <Link
              key={bank.slug}
              href={`/banci/${bank.slug}`}
              className="text-mint hover:underline text-sm"
            >
              Credit {bank.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'resources') {
    return (
      <div className={`space-y-2 ${className}`}>
        <h3 className="font-bold text-gray-900 mb-3">Resurse Utile:</h3>
        <div className="flex flex-wrap gap-3">
          {resourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-mint hover:underline text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'legal') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex flex-wrap gap-3">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-mint text-xs"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // variant === 'all'
  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Credite Ipotecare pe Bănci:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {bankLinks.map((bank) => (
            <Link
              key={bank.slug}
              href={`/banci/${bank.slug}`}
              className="text-mint hover:underline text-sm"
            >
              Credit {bank.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 mb-3">Resurse:</h3>
        <div className="flex flex-wrap gap-3">
          {resourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-mint hover:underline text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
