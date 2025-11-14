import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ✅ Disable ESLint only during production build
  },
};

export default nextConfig;
