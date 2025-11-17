import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const isProduction = process.env.VERCEL_ENV === "production";
// Vercel automatically sets this environment variable during builds
const isVercel = !!process.env.VERCEL;

// Bundle analyzer for performance optimization
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const baseConfig: NextConfig = {
  reactStrictMode: true,
  // Only use standalone output for non-Vercel deployments (e.g., Docker/self-hosting)
  // Vercel has its own optimized build system and doesn't support standalone mode
  // This will automatically be omitted when building on Vercel
  ...(isVercel ? {} : { output: "standalone" }),
  trailingSlash: true,
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "notion.so",
      },
      {
        protocol: "https",
        hostname: "media-bucket24.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ipapi.co",
      },
    ],
    unoptimized: false, // Enable image optimization
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"],
  },
  // Security and performance headers
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
      // HTML pages - no cache in dev, proper cache in production
      // Note: Removed this header rule as it might interfere with client-side navigation
      // Next.js handles caching internally for client-side navigation
      ...(isProduction
        ? [
            {
              source: "/(.*\\.html|/|/about|/contact|/services|/blog|/agent|/ai-clarity-workshop)",
              headers: [
                {
                  key: "Cache-Control",
                  value:
                    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=31536000",
                },
              ],
            },
          ]
        : []),
      // Static assets - long cache (production only)
      ...(isProduction
        ? [
            {
              source: "/_next/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            {
              source: "/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            // Font files - long cache
            {
              source: "/(.*\\.woff2|.*\\.woff|.*\\.ttf|.*\\.otf)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            // Images - long cache
            {
              source:
                "/(.*\\.jpg|.*\\.jpeg|.*\\.png|.*\\.gif|.*\\.webp|.*\\.avif|.*\\.svg)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            // JavaScript and CSS - long cache with versioning
            {
              source: "/(.*\\.js|.*\\.css)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]
        : []),
      // API routes - no cache
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];

    // Add noindex headers for non-production environments
    // if (!isProduction) {
    //   headers.push({
    //     source: "/(.*)",
    //     headers: [
    //       {
    //         key: "X-Robots-Tag",
    //         value: "noindex, nofollow",
    //       },
    //     ],
    //   });
    // }

    return headers;
  },
  // Webpack optimizations
  // webpack: (config, { dev, isServer }) => {
  //   // Optimize bundle size
  //   if (!dev && !isServer) {
  //     config.optimization.splitChunks = {
  //       chunks: "all",
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: "vendors",
  //           chunks: "all",
  //           priority: 10,
  //         },
  //         framer: {
  //           test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
  //           name: "framer-motion",
  //           chunks: "all",
  //           priority: 20,
  //         },
  //         react: {
  //           test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
  //           name: "react",
  //           chunks: "all",
  //           priority: 30,
  //         },
  //         icons: {
  //           test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
  //           name: "icons",
  //           chunks: "all",
  //           priority: 25,
  //         },
  //         common: {
  //           name: "common",
  //           minChunks: 2,
  //           chunks: "all",
  //           priority: 5,
  //           reuseExistingChunk: true,
  //         },
  //       },
  //     };

  //     // Enable tree shaking
  //     config.optimization.usedExports = true;
  //     config.optimization.sideEffects = false;

  //     // Enable module concatenation
  //     config.optimization.concatenateModules = true;

  //     // Optimize module resolution
  //     config.resolve.modules = ["node_modules"];
  //     config.resolve.extensions = [".tsx", ".ts", ".jsx", ".js"];

  //     // Remove unused code
  //     config.optimization.minimize = true;
  //   }

  //   // Optimize SVG handling
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
  // Redirects to avoid multiple page redirects
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  // Rewrites for external API calls and Partytown
  async rewrites() {
    return [
      {
        source: "/api/geolocation",
        destination: "https://ipapi.co/json/",
      },
      // Partytown web worker files
      {
        source: "/~partytown/:path*",
        destination: "/node_modules/@builder.io/partytown/lib/:path*",
      },
    ];
  },
  // Modern JavaScript target
  compiler: {
    removeConsole: isProduction,
  },
  // Webpack optimizations for bundle size reduction
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size in production
    if (!dev && !isServer) {
      // Enable aggressive code splitting
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework bundle (React/Next.js core)
          framework: {
            name: "framework",
            chunks: "all",
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-sync-external-store)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Large libraries get their own chunk
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
            priority: 35,
            enforce: true,
          },
          // Icon libraries
          icons: {
            test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
            name: "icons",
            chunks: "async",
            priority: 30,
          },
          // Radix UI components
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: "radix-ui",
            chunks: "async",
            priority: 28,
          },
          // React Query
          query: {
            test: /[\\/]node_modules[\\/]@tanstack[\\/]react-query[\\/]/,
            name: "react-query",
            chunks: "all",
            priority: 26,
          },
          // Common vendor chunks
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: "lib",
            chunks: "all",
            priority: 20,
            minChunks: 2,
          },
          // Common code shared between pages
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      };

      // Enable tree shaking
      config.optimization.usedExports = true;

      // Enable module concatenation (scope hoisting)
      config.optimization.concatenateModules = true;
    }

    return config;
  },
};

// Wrap with bundle analyzer
export default withBundleAnalyzer(baseConfig);
