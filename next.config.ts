import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/apply',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
