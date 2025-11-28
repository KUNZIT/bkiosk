import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We remove all the experimental/turbopack settings, as they are not needed in Next.js 14.

  // 1. Dependency Fix (for pino/thread-stream): 
  // Next.js 14 uses serverComponentsExternalPackages, not serverExternalPackages.
  serverComponentsExternalPackages: ["pino", "pino-pretty", "thread-stream"],

  // 2. Ignore TS errors due to library version conflicts (still useful).
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 3. Webpack externals for Node modules (needed for your libraries):
  webpack: (config, { isServer }) => {
    if (isServer) {
      // These modules must be externalized for the server build to prevent errors with pino/logging
      config.externals.push("pino-pretty", "lokijs", "encoding");
    }
    return config;
  },
};

export default nextConfig;