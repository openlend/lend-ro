import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // SSR enabled - Vercel handles everything
  
  // Allow external images from Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  async redirects() {
    return [
      {
        source: '/blog/credit-prima-casa-vs-credit-ipotecar-clasic',
        destination: '/blog/prima-casa-vs-credit',
        permanent: true,
      },
      {
        source: '/blog/ghid-complet-credit-ipotecar-2026',
        destination: '/blog/ghid-ipotecar-2026',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
