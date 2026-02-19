import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Credit Ipotecar | Ghiduri și Sfaturi lend.ro',
  description: 'Ghiduri complete despre credite ipotecare în România: rate, dobânzi, bănci, Prima Casă. Sfaturi de la experți financiari.',
  alternates: {
    canonical: 'https://lend.ro/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
