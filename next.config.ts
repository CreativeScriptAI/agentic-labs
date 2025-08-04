import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "www.notion.so",
      "lh5.googleusercontent.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
