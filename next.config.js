/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    optimizeCss: false,
  },
  // Disable static optimization for now
  staticPageGenerationTimeout: 1000,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 