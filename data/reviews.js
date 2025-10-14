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

  {
    // Basic Information
    title: 'Cognitia AI',
    slug: 'cognitia',

    // Classification
    service: 'ai-assistant-agent-reviews', // Must match service slug from content.js
    category: 'productivity', // Must match category slug from content.js

    // Rating & Scoring
    rating: 9.1,
    displayRating: '4.55/5', // Converted from 9.1/10
    reviewCount: '1',

    // Summary
    summary: 'AI assistant with persistent memory that actually remembers context across sessions. Deep email and financial integrations via Plaid, plus multi-agent orchestration for complex workflows.',

    // Detailed Assessment
    pros: [
      'Persistent memory that actually works - remembers context across months',
      'Seamless email integration handling multiple accounts effortlessly',
      'Financial intelligence with bank-level security via Plaid',
      'Lightning-fast performance with 2.3s average response time',
      'Intuitive interface with clean, professional design',
      '94% query accuracy rate across all interactions',
    ],
    cons: [
      'Premium pricing at $83/month is significantly more expensive than basic AI assistants',
      'Limited mobile app - only mobile-responsive web interface available',
      'Integration learning curve - takes time to master multi-agent workflows',
      'No dark mode option available yet',
      'Limited free tier compared to competitors like ChatGPT',
      'Some advanced features buried in menus',
    ],

    // Pricing
    price: {
      starter: {
        name: 'Basic',
        cost: 17,
        period: 'month',
        features: ['Advanced AI chat', 'Basic memory', 'Email integration (Gmail/Outlook)', 'File processing', 'Web search'],
      },
      pro: {
        name: 'Premium',
        cost: 83,
        period: 'month',
        features: ['Everything in Basic', 'Multi-agent orchestration', 'Financial intelligence (Plaid)', 'Social media management', 'Calendar & contacts sync', 'Advanced analytics'],
      },
    },

    // Best For
    bestFor: [
      'Busy executives managing multiple projects and email accounts',
      'Email power users processing 100+ emails daily',
      'Financial professionals needing integrated insights',
      'Knowledge workers requiring persistent context across projects',
    ],

    // Not Recommended For
    notFor: [
      'Budget-conscious users ($17-83/month may be expensive)',
      'Mobile-first users (no dedicated mobile app yet)',
      'Privacy-paranoid users uncomfortable with AI accessing email/financial data',
      'Casual AI users who just need basic chat',
    ],

    // Key Features
    keyFeatures: [
      'Unlimited persistent memory across sessions',
      'Email integration (Gmail, Outlook)',
      'Financial data access via Plaid banking',
      'Multi-agent orchestration',
      'Calendar & contacts sync (Google, iCloud)',
      'GPT-5 and Claude Opus 4 AI models',
    ],

    // Performance Metrics
    performance: {
      successRate: '94%',
      averageRenderTime: '2.3 seconds',
      contextRetention: '87%',
      uptime: '99.9%',
    },

    // Display Options
    featured: true, // Show this review prominently
    badge: 'Editor\'s Choice', // Optional badge text

    // Links
    reviewUrl: '/reviews/ai-assistants/productivity/cognitia',
    affiliateUrl: 'https://www.cognitia-ai.com?via=SpectrumAIReviews',

    // Metadata
    lastUpdated: '2025-10-06',
    author: 'Michael Anderson',
    testingPeriod: '60 days',
    emailsProcessed: '500+ daily',
  },

  {
    // Basic Information
    title: 'Genspark AI',
    slug: 'genspark',

    // Classification
    service: 'ai-assistant-agent-reviews',
    category: 'productivity',

    // Rating & Scoring
    rating: 7.3,
    displayRating: '3.65/5', // Converted from 7.3/10
    reviewCount: '1',

    // Summary
    summary: 'AI-powered search and assistant platform with autonomous agent capabilities. Features Super Agent that can make phone calls, book appointments, and handle complex multi-step tasks.',

    // Detailed Assessment
    pros: [
      'Innovative Super Agent can make actual phone calls autonomously',
      'Multi-step task automation with intelligent planning',
      'Clean, intuitive interface with visual dashboards',
      'Real-time search with AI-generated summaries',
      'Custom agent creation for specific workflows',
      'Integration with external services and APIs',
    ],
    cons: [
      'Phone calling feature limited to US numbers only',
      'Super Agent can be unreliable for complex tasks',
      'Expensive compared to traditional search/AI tools',
      'Limited voice quality for phone interactions',
      'Requires significant setup for custom agents',
      'Privacy concerns with autonomous calling capability',
    ],

    // Pricing
    price: {
      free: {
        cost: 0,
        period: 'forever',
        features: ['Basic AI search', 'Standard summaries', 'Limited queries per day'],
      },
      starter: {
        name: 'Pro',
        cost: 20,
        period: 'month',
        features: ['Unlimited AI search', 'Super Agent access', 'Phone calling (50 minutes/month)', 'Custom agents', 'API access'],
      },
    },

    // Best For
    bestFor: [
      'Professionals needing AI-powered research assistance',
      'Sales teams automating appointment scheduling',
      'Entrepreneurs managing multiple communication channels',
      'Power users wanting custom AI agent workflows',
    ],

    // Not Recommended For
    notFor: [
      'International users (phone calling US-only)',
      'Privacy-focused users uncomfortable with autonomous calling',
      'Users seeking simple, straightforward AI chat',
      'Budget-conscious individuals',
    ],

    // Key Features
    keyFeatures: [
      'Super Agent with phone calling capabilities',
      'AI-powered search with real-time summaries',
      'Custom agent creation tools',
      'Multi-step task automation',
      'Visual dashboard and analytics',
      'API integrations for third-party services',
    ],

    // Performance Metrics
    performance: {
      successRate: '73%',
      averageRenderTime: 'N/A',
      callQuality: '7/10',
      uptime: '98.5%',
    },

    // Display Options
    featured: false,
    badge: 'Innovative',

    // Links
    reviewUrl: '/reviews/ai-assistants/productivity/genspark',
    affiliateUrl: 'https://www.genspark.ai/?via=SpectrumAIReviews',

    // Metadata
    lastUpdated: '2025-10-05',
    author: 'Michael Anderson',
    testingPeriod: '30 days',
    callsMade: '47',
  },

  {
    // Basic Information
    title: 'GetGenie AI',
    slug: 'getgenie',

    // Classification
    service: 'ai-writing-tool-reviews',
    category: 'content-creation',

    // Rating & Scoring
    rating: 8.5,
    displayRating: '4.25/5', // Converted from 8.5/10
    reviewCount: '1',

    // Summary
    summary: 'WordPress-native AI writing assistant with 33-language support and advanced SEO optimization. Seamlessly integrates into WordPress editor with Elementor compatibility.',

    // Detailed Assessment
    pros: [
      'Deep WordPress integration with native editor support',
      '33 languages with high translation quality',
      'Advanced SEO analysis and optimization tools',
      'Elementor page builder compatibility',
      'Affordable pricing with generous free plan',
      'One-click content generation for blog posts',
    ],
    cons: [
      'WordPress-only (no standalone version)',
      'Occasional plugin conflicts with other WordPress tools',
      'Limited image generation capabilities',
      'API rate limits on free plan',
      'Learning curve for advanced SEO features',
      'No dark mode in dashboard',
    ],

    // Pricing
    price: {
      free: {
        cost: 0,
        period: 'forever',
        features: ['1,500 words/month', '5 AI images/month', 'Basic templates', 'SEO analysis'],
      },
      starter: {
        name: 'Personal',
        cost: 19,
        period: 'month',
        annualCost: 190,
        features: ['50,000 words/month', '50 AI images/month', 'All templates', 'Advanced SEO', 'Elementor support'],
      },
      pro: {
        name: 'Agency',
        cost: 49,
        period: 'month',
        annualCost: 490,
        features: ['Unlimited words', 'Unlimited images', 'White-label', 'Team collaboration', 'Priority support'],
      },
    },

    // Best For
    bestFor: [
      'WordPress bloggers needing content automation',
      'SEO professionals optimizing WordPress sites',
      'Agencies managing multiple WordPress client sites',
      'Multilingual content creators',
    ],

    // Not Recommended For
    notFor: [
      'Non-WordPress users',
      'Advanced fiction/creative writers',
      'Users needing standalone desktop app',
      'Teams not using WordPress ecosystem',
    ],

    // Key Features
    keyFeatures: [
      'WordPress native integration',
      '33 languages support',
      'Advanced SEO analysis',
      'Elementor compatibility',
      '37+ content templates',
      'One-click blog post generation',
    ],

    // Performance Metrics
    performance: {
      successRate: '94%',
      averageRenderTime: '3-5 seconds',
      contentQuality: '8.5/10',
      uptime: '99.2%',
    },

    // Display Options
    featured: false,
    badge: 'WordPress Exclusive',

    // Links
    reviewUrl: '/reviews/ai-writing-tool-reviews/content-creation/getgenie',
    affiliateUrl: 'https://getgenie.ai/?via=SpectrumAIReviews',

    // Metadata
    lastUpdated: '2025-10-05',
    author: 'Michael Anderson',
    testingPeriod: '3 months',
    articlesGenerated: '150+',
  },

  {
    // Basic Information
    title: 'OpenArt AI',
    slug: 'openart',

    // Classification
    service: 'ai-art-generator-reviews', // Must match service slug from content.js
    category: 'content-creation', // Must match category slug from content.js

    // Rating & Scoring
    rating: 4.3,
    displayRating: '4.3/5', // Based on extensive testing
    reviewCount: '1',

    // Summary
    summary: 'Versatile multi-model AI art platform aggregating 15+ AI engines including FLUX, Imagen, and SDXL. Offers image and video generation with comprehensive built-in editing tools and innovative FLUX Kontext character technology.',

    // Detailed Assessment
    pros: [
      'Access to 15+ AI models (FLUX, Imagen, SDXL) in one platform',
      'Comprehensive editing suite eliminates need for external software',
      'Innovative video generation with one-click story templates',
      'Generous free tier with substantial credits for testing',
      'Regular updates with new models and features',
      'Built-in upscaling, inpainting, and background removal tools',
    ],
    cons: [
      'Character consistency technology actively evolving with FLUX Kontext updates',
      'Flexible credit system requires understanding usage patterns for optimal budgeting',
      'Learning curve for advanced features as documentation expands with platform growth',
      'Best suited for creators prioritizing model variety over single-engine specialization',
      'Video generation times vary based on complexity and selected quality settings',
      'Subscription management follows standard practices; monitoring first month recommended',
    ],

    // Pricing
    price: {
      free: {
        cost: 0,
        period: 'forever',
        features: ['Limited daily credits', 'Basic models (SDXL)', '512×512 resolution', '25 steps max', 'Public generations'],
      },
      starter: {
        name: 'Essential',
        cost: 7,
        period: 'month',
        annualCost: 84,
        features: ['4,000 monthly credits', 'All basic models', 'Higher resolution', 'Private generations', 'Priority support'],
      },
      pro: {
        name: 'Pro',
        cost: 20,
        period: 'month',
        annualCost: 240,
        features: ['12,000 monthly credits', 'Premium models', 'FLUX Kontext access', 'Video generation', 'Custom model training'],
      },
      enterprise: {
        name: 'Studio',
        cost: 40,
        period: 'month',
        annualCost: 480,
        features: ['25,000 monthly credits', 'All premium features', 'Team collaboration', 'API access', 'Advanced editing tools'],
      },
    },

    // Best For
    bestFor: [
      'Content creators wanting access to multiple AI models',
      'Users needing variety over consistency',
      'Video generation enthusiasts experimenting with AI',
      'Beginners learning AI art generation',
      'Small teams needing collaborative features',
    ],

    // Not Recommended For
    notFor: [
      'Professional studios requiring consistent character generation',
      'Users needing predictable, transparent billing',
      'Enterprise teams requiring SLAs and reliability guarantees',
      'High-volume production workflows',
      'Users uncomfortable with subscription management issues',
    ],

    // Key Features
    keyFeatures: [
      '15+ AI models (FLUX, Imagen, SDXL, DALL-E)',
      'Video generation up to 60 seconds',
      'FLUX Kontext for character consistency',
      'Built-in editing suite (inpainting, upscaling)',
      'Character model training capabilities',
      'Story templates and brain rot video creation',
    ],

    // Performance Metrics
    performance: {
      successRate: '85%',
      imageQuality: '85/100',
      characterConsistency: '70/100',
      videoQuality: '85/100',
    },

    // Display Options
    featured: false,
    badge: 'Multi-Model Platform',

    // Links
    reviewUrl: '/reviews/ai-art-generators/content-creation/openart',
    affiliateUrl: 'https://openart.ai/home/?via=michael6m',

    // Metadata
    lastUpdated: '2025-10-13',
    author: 'Michael Anderson',
    testingPeriod: '6 months',
    imagesGenerated: '500+',
    videosCreated: '50+',
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
 * Get all reviews for a specific service (across all categories)
 */
export function getReviewsByService(serviceSlug) {
  return reviews
    .filter(review => review.service === serviceSlug)
    .sort((a, b) => b.rating - a.rating); // Sort by rating, highest first
}

/**
 * Get reviews count for a service/category combination
 */
export function getReviewCount(serviceSlug, categorySlug) {
  return reviews.filter(
    review => review.service === serviceSlug && review.category === categorySlug
  ).length;
}
