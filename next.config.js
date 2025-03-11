/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  // Add output configuration to reduce build size
  output: 'standalone',
  // Disable source maps in production to reduce build size
  productionBrowserSourceMaps: false,
  // Minimize the output
  swcMinify: true,
};

module.exports = nextConfig; 