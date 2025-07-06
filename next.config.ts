import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        // (optional) pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        // (optional) pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "syd.cloud.appwrite.io",  // 👈 exact Appwrite endpoint
        pathname: "/**",                    // 👈 allow all paths under it
      },
    ],
  },
};

export default nextConfig;
