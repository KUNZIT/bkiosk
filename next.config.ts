import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. **Crucial Fix:** Explicitly set the experimental builder to Webpack.
  // This tells Next.js 16 to bypass Turbopack for the build command.
  experimental: {
    // Setting `builder` to 'webpack' is the direct way to resolve the "This build is using Turbopack, with a `webpack` config" error.
    builder: 'webpack',
  },

  // 2. Dependency Fix (for pino/thread-stream): 
  // This prevents the bundler from trying to analyze test files inside these modules.
  serverExternalPackages: ["pino", "pino-pretty", "thread-stream"],

  // 3. Clean up deprecated Next.js 16 options:
  // The following settings are no longer placed directly in next.config.ts.
  // We'll keep `typescript` but remove `eslint` as suggested by the warning.
  typescript: {
    // Keep ignoring build errors due to React 19 vs. older library versions.
    ignoreBuildErrors: true,
  },
  
  // NOTE: 'eslint' configuration in next.config.ts is no longer supported (as per log).
  // We remove it entirely to comply with Next.js 16 changes.
  // The same applies to `webpack` if `builder: 'webpack'` handles the externals.

  // 4. Webpack externals for Node modules (only if needed by webpack build):
  // Since we explicitly chose Webpack, we re-add the necessary externals.
  webpack: (config, { isServer }) => {
    if (isServer) {
      // These are often missing in Next.js server build for these types of packages
      config.externals.push("pino-pretty", "lokijs", "encoding");
    }
    return config;
  },
};

export default nextConfig;
