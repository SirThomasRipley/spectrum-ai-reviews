/**
 * Centralized Link Management for SEO (2025 Best Practice)
 *
 * This file is the SINGLE SOURCE OF TRUTH for all internal URLs on SpectrumAIReviews.
 *
 * 🎯 WHY USE THIS:
 * - Easy to update URLs site-wide from one location
 * - Prevents broken internal links (404 errors hurt SEO)
 * - Consistent URL structure across all pages
 * - SEO-friendly anchor text templates included
 * - Type-safe with JSDoc annotations
 *
 * 📚 HOW TO USE:
 *
 * **In Client Components**:
 * ```javascript
 * import { linkMap, anchorText } from '@/utils/linkMap';
 *
 * // Static links
 * <Link href={linkMap.home}>Home</Link>
 * <Link href={linkMap.methodology}>Our Methodology</Link>
 *
 * // Service pages
 * <Link href={linkMap.aiWritingTools}>Browse AI Writing Tools</Link>
 *
 * // Review pages
 * <Link href={linkMap.reviews.zebracat}>
 *   {anchorText.readFullReview('Zebracat')}
 * </Link>
 *
 * // Dynamic links
 * <Link href={linkMap.review('ai-art-generators', 'content-creation', 'midjourney')}>
 *   Midjourney Review
 * </Link>
 * ```
 *
 * 📖 COMPLETE USAGE GUIDE: See NEW_REVIEW_CHECKLIST.md Step 4
 */

export const linkMap = {
  // Core pages
  home: '/',
  about: '/about',
  methodology: '/methodology',

  // Service pages (from data/content.js)
  aiWritingTools: '/ai-writing-tool-reviews',
  aiArtGenerators: '/ai-art-generator-reviews',
  aiSeoTools: '/ai-seo-tool-reviews',
  aiAssistants: '/ai-assistant-agent-reviews',

  // Category pages - AI Writing Tools
  aiWritingToolsProductivity: '/ai-writing-tool-reviews/productivity',
  aiWritingToolsContent: '/ai-writing-tool-reviews/content-creation',
  aiWritingToolsBusiness: '/ai-writing-tool-reviews/business-marketing',
  aiWritingToolsCreative: '/ai-writing-tool-reviews/creative-design',

  // Category pages - AI Art Generators
  aiArtGeneratorsProductivity: '/ai-art-generator-reviews/productivity',
  aiArtGeneratorsContent: '/ai-art-generator-reviews/content-creation',
  aiArtGeneratorsBusiness: '/ai-art-generator-reviews/business-marketing',
  aiArtGeneratorsCreative: '/ai-art-generator-reviews/creative-design',

  // Category pages - AI SEO Tools
  aiSeoToolsProductivity: '/ai-seo-tool-reviews/productivity',
  aiSeoToolsContent: '/ai-seo-tool-reviews/content-creation',
  aiSeoToolsBusiness: '/ai-seo-tool-reviews/business-marketing',
  aiSeoToolsCreative: '/ai-seo-tool-reviews/creative-design',

  // Category pages - AI Assistants
  aiAssistantsProductivity: '/ai-assistant-agent-reviews/productivity',
  aiAssistantsContent: '/ai-assistant-agent-reviews/content-creation',
  aiAssistantsBusiness: '/ai-assistant-agent-reviews/business-marketing',
  aiAssistantsCreative: '/ai-assistant-agent-reviews/creative-design',

  // Review pages
  reviews: {
    zebracat: '/reviews/ai-art-generators/content-creation/zebracat',
    genspark: '/reviews/ai-assistants/productivity/genspark',
    getgenie: '/reviews/ai-writing-tool-reviews/content-creation/getgenie',
  },

  // Dynamic link generators
  /**
   * Generate service page URL
   * @param {string} serviceSlug - Service slug from data/content.js
   * @returns {string} Service page URL
   */
  service: (serviceSlug) => `/${serviceSlug}`,

  /**
   * Generate category page URL
   * @param {string} serviceSlug - Service slug from data/content.js
   * @param {string} categorySlug - Category slug from data/content.js
   * @returns {string} Category page URL
   */
  category: (serviceSlug, categorySlug) => `/${serviceSlug}/${categorySlug}`,

  /**
   * Generate review page URL
   * @param {string} serviceDir - Service directory name (e.g., 'ai-art-generators')
   * @param {string} categorySlug - Category slug
   * @param {string} productSlug - Product slug
   * @returns {string} Review page URL
   */
  review: (serviceDir, categorySlug, productSlug) =>
    `/reviews/${serviceDir}/${categorySlug}/${productSlug}`,
};

/**
 * Get full absolute URL for a path
 * @param {string} path - Relative path
 * @returns {string} Absolute URL
 */
export const getAbsoluteUrl = (path) => {
  const baseUrl = 'https://spectrumaireviews.com';
  return `${baseUrl}${path}`;
};

/**
 * Common anchor text patterns for internal linking
 * Use these for consistent, SEO-friendly anchor text
 */
export const anchorText = {
  // Review-specific
  readFullReview: (productName) => `Read our full ${productName} review`,
  viewReview: (productName) => `View ${productName} review`,

  // Service-specific
  browseCategory: (categoryName) => `Browse ${categoryName} reviews`,
  viewAllReviews: (serviceName) => `View all ${serviceName}`,

  // Comparison
  compareWith: (product1, product2) => `Compare ${product1} vs ${product2}`,

  // Methodology
  reviewProcess: 'Learn about our review process',
  methodology: 'Our testing methodology',
};
