/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a minimal standalone server bundle for small Docker images.
  output: "standalone",
  reactStrictMode: true,
};

module.exports = nextConfig;
