import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Customizações aqui
    return config;
  },
};

export default nextConfig;
