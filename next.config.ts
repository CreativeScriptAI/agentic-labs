import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,
  images: {
    domains: ["www.notion.so", "notion.so"],
    unoptimized: true,
  },
  // Ensure proper CSS handling
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
