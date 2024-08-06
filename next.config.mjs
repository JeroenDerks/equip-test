/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: process.env.BUILD_SETTING || "standalone",
};

export default nextConfig;
