/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable modern features
  experimental: {
    optimizeCss: true,
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [
      'logo.clearbit.com',
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'via.placeholder.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  
  // Performance optimizations
  compress: true,
  swcMinify: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/deals',
        destination: '/categories',
        permanent: true,
      },
      {
        source: '/coupons',
        destination: '/stores',
        permanent: true,
      }
    ]
  },
  
  // Environment variables for build
  env: {
    CUSTOM_KEY: 'coupon-website',
  },
  
  // Output configuration for static export if needed
  trailingSlash: false,
  
  // Bundle analyzer for performance monitoring
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
    
    return config
  },
}

module.exports = nextConfig
