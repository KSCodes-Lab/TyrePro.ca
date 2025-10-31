import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
  images: {
    domains: ["api.ridestyler.net"], // add any external domains you need
  },
};

export default nextConfig;
