import type { NextConfig } from "next";

const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,
  images: {
    domains: ["www.notion.so", "notion.so"],
    unoptimized: true,
  },
  // Security headers
  async headers() {
    const headers = [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];

    // Add noindex headers for non-production environments
    if (!isProduction) {
      headers.push({
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      });
    }

    return headers;
  },
  // Ensure proper CSS handling
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
