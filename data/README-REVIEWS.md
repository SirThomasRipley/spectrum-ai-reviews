# Review Management System

## Overview
This review management system provides a centralized data structure for all AI tool reviews on SpectrumAIReviews.com.

## How to Add a New Review

### Step 1: Create the Review Page
Create a new file at `/app/reviews/[service]/[category]/[tool-slug]/page.js`

Example path structure:
- Service: `ai-art-generator-reviews`
- Category: `content-creation`
- Tool: `zebracat`
- Full path: `/app/reviews/ai-art-generator-reviews/content-creation/zebracat/page.js`

### Step 2: Add Review Data
Open `/data/reviews.js` and add a new review object to the `reviews` array.

**Required Fields:**
- `title` - Tool name (e.g., "Zebracat AI")
- `slug` - URL-friendly version (e.g., "zebracat")
- `service` - Must match a service slug from `content.js`
- `category` - Must match a category slug from `content.js`
- `rating` - Numeric rating out of 10 (e.g., 9.2)
- `displayRating` - User review average (e.g., "4.6/5")
- `reviewCount` - Number of reviews (e.g., "292+")
- `summary` - Brief description of the tool
- `pros` - Array of positive aspects
- `cons` - Array of negative aspects
- `price` - Object with pricing tiers
- `bestFor` - Array of ideal use cases
- `notFor` - Array of scenarios to avoid
- `keyFeatures` - Array of main features
- `featured` - Boolean for prominent display
- `reviewUrl` - Path to review page
- `lastUpdated` - Date in YYYY-MM-DD format

**Example:**
```javascript
{
  title: 'New Tool AI',
  slug: 'new-tool',
  service: 'ai-writing-tool-reviews',
  category: 'productivity',
  rating: 8.5,
  displayRating: '4.2/5',
  reviewCount: '150+',
  summary: 'AI-powered writing assistant that helps create content faster.',
  pros: [
    'Fast content generation',
    'Multiple writing styles',
    'Affordable pricing'
  ],
  cons: [
    'Limited customization',
    'Occasional factual errors'
  ],
  price: {
    free: {
      cost: 0,
      period: 'forever',
      features: ['1000 words/month', 'Basic templates']
    },
    starter: {
      name: 'Pro',
      cost: 19.99,
      period: 'month',
      features: ['Unlimited words', 'All templates', 'Priority support']
    }
  },
  bestFor: [
    'Content creators needing quick drafts',
    'Bloggers with tight deadlines'
  ],
  notFor: [
    'Academic writing',
    'Technical documentation'
  ],
  keyFeatures: [
    'AI writing assistant',
    'Grammar checking',
    'Plagiarism detection'
  ],
  featured: true,
  reviewUrl: '/reviews/ai-writing-tool-reviews/productivity/new-tool',
  lastUpdated: '2025-10-05'
}
```

### Step 3: Verify Data
The system will automatically:
- Display the review on matching category pages
- Sort reviews by rating (highest first)
- Show featured reviews prominently
- Display "Coming Soon" for empty categories

## Available Services
Check `/data/content.js` for valid service slugs:
- `ai-writing-tool-reviews`
- `ai-art-generator-reviews`
- `ai-seo-tool-reviews`

## Available Categories
Check `/data/content.js` for valid category slugs:
- `productivity`
- `content-creation`
- `business-marketing`
- `creative-design`

## Helper Functions

### Get Reviews by Service/Category
```javascript
import { getReviewsByServiceAndCategory } from './data/reviews';

const reviews = getReviewsByServiceAndCategory('ai-art-generator-reviews', 'content-creation');
```

### Get Review Count
```javascript
import { getReviewCount } from './data/reviews';

const count = getReviewCount('ai-art-generator-reviews', 'content-creation');
```

### Get Featured Reviews
```javascript
import { getFeaturedReviews } from './data/reviews';

const featured = getFeaturedReviews('ai-art-generator-reviews', 'content-creation');
```

## Current Reviews
- **Zebracat AI** - AI Art Generator / Content Creation (Rating: 9.2)

## Notes
- All reviews are sorted by rating automatically
- Featured reviews appear with special badges
- Empty categories show "Coming Soon" message
- The system is fully production-ready and scalable
