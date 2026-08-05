import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sandbox and production Viator API responses serve images from
    // different TripAdvisor CDN subdomains — allow both.
    remotePatterns: [
      new URL("https://hare-media-cdn.tripadvisor.com/**"),
      new URL("https://media-cdn.tripadvisor.com/**"),
    ],
  },
};

export default nextConfig;
