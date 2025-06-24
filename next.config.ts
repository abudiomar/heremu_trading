import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally disable TypeScript type checking during builds too
    ignoreBuildErrors: false, // Set to true if you want to disable TypeScript errors as well
  },
};

export default nextConfig;
