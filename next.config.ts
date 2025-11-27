import type { NextConfig } from "next";

// --- next.config.js ---
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use webpack to exclude Node.js-only packages
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // These packages contain Node.js-specific code (like fs, pino dependencies) 
      // that breaks the client build if not externalized.
      config.externals.push(
        'pino',
        'thread-stream',
        'fastbench',
        'desm'
      );
    }
    return config;
  },
};

module.exports = nextConfig;
