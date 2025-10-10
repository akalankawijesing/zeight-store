import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.desinelle.com",
      "n.nordstrommedia.com",
      "images.unsplash.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
