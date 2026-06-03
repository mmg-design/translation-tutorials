import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Sanity Studio to be embedded at /studio
  // and allow Sanity CDN images
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
