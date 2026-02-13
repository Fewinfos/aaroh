import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Fix the multiple lockfiles warning
  outputFileTracingRoot: "c:\\Users\\Naveenraj.T\\Desktop\\multiverse",
};

export default nextConfig;
