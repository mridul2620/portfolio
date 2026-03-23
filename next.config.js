/** @type {import('next').NextConfig} */

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (cfg) => cfg

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Static export can't use the built-in image optimizer server, so we keep
  // unoptimized:true here. All project images now use lazy loading manually.
  images: { unoptimized: true },

  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],

  compiler: {
    // Strip console.* calls from the production bundle
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    // Shake dead exports from these large icon/animation packages
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)