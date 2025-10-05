/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Cloudflare Pages
  output: 'standalone',

  // Optimize for production
  swcMinify: true,

  // Image optimization
  images: {
    domains: ['localhost', 'your-domain.pages.dev'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Strict mode for better debugging
  reactStrictMode: true,

  // Trailing slashes for consistent URLs
  trailingSlash: false,

  // Environment variables
  env: {
    NEXT_PUBLIC_CLOUDFLARE: 'true',
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Optimizations for Cloudflare Pages
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
      };
    }

    // Add any custom webpack config here
    return config;
  },

  // Headers configuration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
        ],
      },
    ];
  },

  // Redirects configuration
  async redirects() {
    return [
      // Add any redirects here if needed
    ];
  },

  // Rewrites configuration
  async rewrites() {
    return [
      // Add any rewrites here if needed
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;