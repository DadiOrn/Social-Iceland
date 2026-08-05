import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://hare-media-cdn.tripadvisor.com/**")],
  },
};

export default nextConfig;
