import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NATS_JWT: process.env.NEXT_PUBLIC_NATS_JWT,
    NEXT_PUBLIC_NATS_NKEY: process.env.NEXT_PUBLIC_NATS_NKEY,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { ...config.resolve.fallback, dgram: false };
    }
    return config;
  },
};

export default nextConfig;