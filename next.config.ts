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
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/calculator-test',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
