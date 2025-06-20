import nextTranslate from 'next-translate-plugin';
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [768, 1440],
    imageSizes: [32, 128],
    domains: ['us-west-2.graphassets.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

const config = {
  ...nextConfig,
  ...nextTranslate(),
};

export default config;
