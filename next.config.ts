import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
