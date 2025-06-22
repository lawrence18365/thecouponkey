import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to ignore Eslint errors during the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // This tells Next.js to also ignore TypeScript errors during the build.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
