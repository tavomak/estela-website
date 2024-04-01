import nextTranslate from 'next-translate-plugin';
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const config = {
  ...nextConfig,
  ...nextTranslate(),
};

export default config;
