import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "efficient-goshawk-493.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
