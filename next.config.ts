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
    ];
  },
};

export default nextConfig;
