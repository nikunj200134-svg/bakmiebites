import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/flavours',
        permanent: true,
      },
      {
        source: '/buy',
        destination: '/find-a-store',
        permanent: true,
      },
      {
        source: '/order',
        destination: '/find-a-store',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/ingredients',
        permanent: true,
      },
      {
        source: '/nutrition',
        destination: '/ingredients',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
