/**
 * Central reviews database for SpectrumAIReviews.com
 *
 * To add a new review:
 * 1. Create the review page in /app/reviews/[service]/[category]/[tool-slug]/page.js
 * 2. Add the review data to this array with all required fields
 * 3. The review will automatically appear in relevant category pages
 */

export const reviews = [
  {
    // Basic Information
    title: 'Zebracat AI',
    slug: 'zebracat',

    // Classification
    service: 'ai-art-generator-reviews', // Must match service slug from content.js
    category: 'content-creation', // Must match category slug from content.js

    // Rating & Scoring
    rating: 9.2,
    displayRating: '4.6/5', // Based on user reviews
    reviewCount: '292+',

    // Summary
    summary: 'AI-powered video creation platform that converts text prompts, blog posts, and scripts into professional-quality short-form videos in under 60 seconds.',

    // Detailed Assessment
    pros: [
      'Lightning-fast video generation (60-second videos in under 3 minutes)',
      'Exceptional AI quality with 96.1% success rate',
      'User-friendly interface requiring no technical skills',
      'Comprehensive voice library with 175+ languages',
      'No watermark on paid plans',
      'Excellent customer support (under 4-hour response times)',
    ],
    cons: [
      'Limited free plan (30-second video limit)',
      'Credit system can be complex to understand',
      'Advanced editing capabilities are limited',
      'Occasional processing delays during peak usage',
      'Export limited to MP4 format only',
    ],

    // Pricing
    price: {
      free: {
        cost: 0,
        period: 'forever',
        features: ['30-second videos', 'Standard AI voices', 'Zebracat watermark', 'Basic templates'],
      },
      starter: {
        name: 'Cat Mode',
        cost: 19.50,
        period: 'month',
        annualCost: 234,
        features: ['2-minute videos', 'No watermark', 'Ultra-realistic voices', 'Premium AI visuals', '1 Brand Kit'],
      },
      pro: {
        name: 'Super Cat',
        cost: 49,
        period: 'month',
        credits: '300 credits/month (~70 minutes)',
        features: ['5-minute videos', 'AI Avatars (120+)', 'Voice cloning', 'Custom AI styles', '10 Brand Kits'],
      },
    },

    // Best For
    bestFor: [
      'Content creators needing consistent video output',
      'Digital marketers creating video ads and campaigns',
      'Educators producing engaging learning materials',
      'Small businesses needing cost-effective video marketing',
    ],

    // Not Recommended For
    notFor: [
      'Users needing advanced frame-perfect editing control',
      'Long-form content creators (documentaries over 5 minutes)',
      'Users with very limited budgets',
    ],

    // Key Features
    keyFeatures: [
      '120+ realistic AI avatars',
      'Voice technology with 175+ languages',
      'Millions of premium stock assets',
      'Brand customization and kits',
      'Up to 1080p HD video output',
      'Platform-optimized exports',
    ],

    // Performance Metrics
    performance: {
      successRate: '96.1%',
      averageRenderTime: '2.3 seconds (for 60-second videos)',
      visualAccuracy: '89%',
      uptime: '99.7%',
    },

    // Display Options
    featured: true, // Show this review prominently
    badge: 'Highly Recommended', // Optional badge text

    // Links
    reviewUrl: '/reviews/ai-art-generators/content-creation/zebracat',
    affiliateUrl: 'http://studio.zebracat.ai/signup/?via=michael-anderson',

    // Metadata
    lastUpdated: '2025-10-05',
    author: 'Michael Anderson',
    testingPeriod: '3 months',
    videosCreated: '150+',
  },

  // Add more reviews here following the same structure
  // Example template (commented out):
  /*
  {
    title: 'Tool Name',
    slug: 'tool-slug',
    service: 'service-slug',
    category: 'category-slug',
    rating: 8.5,
    displayRating: '4.2/5',
    reviewCount: '150+',
    summary: 'Brief description of what the tool does...',
    pros: ['Pro 1', 'Pro 2', 'Pro 3'],
    cons: ['Con 1', 'Con 2', 'Con 3'],
    price: {
      free: { cost: 0, period: 'forever', features: [] },
      starter: { name: 'Basic', cost: 9.99, period: 'month', features: [] },
    },
    bestFor: ['User type 1', 'User type 2'],
    notFor: ['Not suitable for...'],
    keyFeatures: ['Feature 1', 'Feature 2'],
    featured: false,
    reviewUrl: '/reviews/service/category/slug',
    lastUpdated: '2025-10-05',
  },
  */
];

/**
 * Get all reviews for a specific service and category
 */
export function getReviewsByServiceAndCategory(serviceSlug, categorySlug) {
  return reviews.filter(
    review => review.service === serviceSlug && review.category === categorySlug
  ).sort((a, b) => b.rating - a.rating); // Sort by rating, highest first
}

/**
 * Get featured reviews for a specific service and category
 */
export function getFeaturedReviews(serviceSlug, categorySlug) {
  return reviews.filter(
    review =>
      review.service === serviceSlug &&
      review.category === categorySlug &&
      review.featured === true
  ).sort((a, b) => b.rating - a.rating);
}

/**
 * Get a single review by slug
 */
export function getReviewBySlug(slug) {
  return reviews.find(review => review.slug === slug);
}

/**
 * Get all reviews (for listing pages)
 */
export function getAllReviews() {
  return reviews.sort((a, b) => b.rating - a.rating);
}

/**
 * Get reviews count for a service/category combination
 */
export function getReviewCount(serviceSlug, categorySlug) {
  return reviews.filter(
    review => review.service === serviceSlug && review.category === categorySlug
  ).length;
}
