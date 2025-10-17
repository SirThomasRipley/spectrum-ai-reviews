/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Cloudflare Pages
  output: 'export',

  // Optimize for production
  swcMinify: true,

  // Image optimization - 2025 Core Web Vitals best practices
  images: {
    // Modern remotePatterns for external CDN images (Next.js 14+)
    remotePatterns: [
      // Local and own domain images
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'spectrumaireviews.com',
      },
      {
        protocol: 'https',
        hostname: 'your-domain.pages.dev',
      },
      // External CDN domains for review images
      {
        protocol: 'https',
        hostname: 'getgenie.ai',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.analyticsvidhya.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'bestfreeaitools.io',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cognitia-ai.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        pathname: '/image/fetch/**',
      },
      {
        protocol: 'https',
        hostname: 'substack-post-media.s3.amazonaws.com',
        pathname: '/public/images/**',
      },
      {
        protocol: 'https',
        hostname: 'skywork-blog-image.oss-us-east-1.aliyuncs.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'images.saasworthy.com',
        pathname: '/tr:*/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'fal.ai',
        pathname: '/landing/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false, // Ensure image optimization is enabled
    loader: 'default',
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

  // Headers configuration for SEO and performance
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
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
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

  // Experimental features for better performance (2025 optimizations)
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
    // Enable server actions for better interactivity
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Compiler optimizations for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;