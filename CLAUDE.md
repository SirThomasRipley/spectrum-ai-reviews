# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SpectrumAIReviews is a Next.js 14 static site for AI product reviews, built for deployment on Cloudflare Pages. The site uses static export (`output: 'export'`) and generates all pages at build time.

## Key Commands

```bash
# Development
npm run dev              # Start development server on port 3000
npm run clean           # Clean build artifacts (.next and out directories)

# Building
npm run build           # Standard Next.js build with static export
npm run build:cloudflare # Clean and build for Cloudflare deployment

# Deployment
npm run deploy          # Deploy to Cloudflare Pages (production)
npm run deploy:preview  # Deploy to preview branch

# Code Quality
npm run lint            # Run Next.js linter
npm run format          # Prettier formatting
npm run check-types     # TypeScript type checking
```

## Architecture & Routing

### Static Site Generation
- **All pages are statically generated** at build time using `output: 'export'`
- No server-side rendering or API routes
- Deployed as static HTML/CSS/JS to Cloudflare Pages

### Route Structure
```
/                                           # Homepage
/about                                      # About page
/methodology                                # Methodology page
/[service]/                                # Service category pages (dynamic)
/[service]/[category]/                     # Service subcategory pages (dynamic)
/reviews/[service]/[category]/[product]/   # Individual product review pages (static)
```

### Key Architectural Decisions

1. **No Internationalization Middleware**: The middleware.js file exists but i18n features described in README are not implemented. The site is English-only.

2. **Component Structure**:
   - `app/layout.js` provides global Header and Footer
   - Individual pages should NOT import Header/Footer (causes duplication)
   - All pages inherit from root layout automatically

3. **Data Management**:
   - Service and category data lives in `data/content.js`
   - No database or external API calls
   - Review pages are manually created as individual components

4. **Styling Approach**:
   - Tailwind CSS with custom configuration
   - Dark theme with purple accent colors (#6A0DAD)
   - Uses Inter and Poppins fonts
   - Emoji component handles cross-platform emoji rendering

## Review Page Architecture (SEO-Optimized)

### Overview
All review pages MUST follow the server/client component split architecture to support Next.js 14 metadata exports and Schema.org structured data for optimal SEO performance.

### File Structure
```
app/reviews/[service-slug]/[category-slug]/[product-slug]/
├── page.js                      # Server component (metadata + schemas)
└── [ProductName]ReviewClient.js # Client component (interactive UI)
```

**Example**:
```
app/reviews/ai-assistants/productivity/genspark/
├── page.js                   # Exports metadata, Review/FAQ/Breadcrumb schemas
└── GensparkReviewClient.js   # 'use client' component with interactive UI
```

### Why This Architecture?
- **Next.js 14 Requirement**: Metadata can only be exported from Server Components
- **SEO Benefits**: Enables Review schema (★ ratings in Google), FAQ schema (featured snippets), Breadcrumb schema
- **Performance**: Server-side metadata improves initial page load and crawler indexing
- **Best Practices**: Separates concerns (data/SEO vs. interactivity)

---

## 🚀 AUTOMATED SEO SYSTEM (2025)

### ✅ What Happens Automatically When You Add a New Review:

1. **Sitemap Auto-Discovery**: The sitemap.js automatically scans `app/reviews/` and adds ALL review pages
2. **No Manual Updates Needed**: Just create the review directory and files - that's it!
3. **SEO Validation**: Build process ensures all pages have proper structure

### 🎯 Quick Add Review Checklist

When adding a new review, you ONLY need to:
- [ ] Create directory: `app/reviews/[service-dir]/[category]/[product]/`
- [ ] Create `page.js` (server component with metadata + schemas)
- [ ] Create `[ProductName]ReviewClient.js` (client component with UI)
- [ ] Add breadcrumbs using `<Breadcrumbs />` component
- [ ] Use `linkMap.js` for internal links
- [ ] Run `npm run build` to verify

**That's it!** The review will automatically:
- ✅ Appear in sitemap.xml
- ✅ Be crawled by Google
- ✅ Generate Schema.org markup
- ✅ Have proper SEO structure

---

## Creating a New SEO-Optimized Review Page

### Step 1: Create Directory Structure

```bash
# Example: Creating a review for "Jasper AI" in ai-writing-tool-reviews/content-creation
mkdir -p app/reviews/ai-writing-tool-reviews/content-creation/jasper
cd app/reviews/ai-writing-tools/content-creation/jasper
```

### Step 2: Determine Correct Directory Path

**CRITICAL**: Use the correct service directory name (NOT the slug):

| Service Type | Directory Name (use this) | Slug (from data/content.js) |
|--------------|---------------------------|------------------------------|
| AI Writing Tools | `ai-writing-tool-reviews` | `ai-writing-tool-reviews` ✅ Same |
| AI Art Generators | `ai-art-generators` | `ai-art-generator-reviews` ⚠️ Different |
| AI SEO Tools | `ai-seo-tools` | `ai-seo-tool-reviews` ⚠️ Different |
| AI Assistants | `ai-assistants` | `ai-assistant-agent-reviews` ⚠️ Different |

**Example Paths**:
- ✅ `/reviews/ai-art-generators/content-creation/midjourney/` (directory)
- ✅ Breadcrumb uses: `/ai-art-generator-reviews` (slug from data/content.js)

### Step 3: Create Server Component (page.js)

**File**: `app/reviews/[service]/[category]/[product]/page.js`

```javascript
import [ProductName]ReviewClient from './[ProductName]ReviewClient';
import Script from 'next/script';

export const metadata = {
  // PRIMARY METADATA (Required)
  title: '[Product Name] Review 2025: [Key Benefit] - Honest Analysis',
  description: 'In-depth [Product] review after [X days/months] of testing. Expert analysis of features, pricing ($X-$Y/mo), quality, and value. Rating: X.X/5. [Key offer/discount].',
  keywords: '[product] review, [product] AI review 2025, [main keyword], [feature 1], [product] pricing, [product] vs [competitor], AI [category], [product] alternatives',
  authors: [{ name: 'Michael Anderson', url: 'https://spectrumaireviews.com/about' }],

  // OPENGRAPH (Social Media)
  openGraph: {
    title: '[Product Name] Review 2025: Does It Really Work? [X] [Units] Tested',
    description: 'After [timeframe] of testing [Product] with [X units] created, here&apos;s our honest verdict on quality ([X]% success), pricing, and real value. X.X/5 rating. [Offer].',
    url: 'https://spectrumaireviews.com/reviews/[service]/[category]/[product]',
    siteName: 'SpectrumAIReviews',
    locale: 'en_US',
    type: 'article',
    publishedTime: '[YYYY-MM-DD]T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Michael Anderson'],
    images: [{
      url: 'https://spectrumaireviews.com/images/[product]-review-og.jpg',
      width: 1200,
      height: 630,
      alt: '[Product Name] Review 2025 - Complete Analysis',
    }],
  },

  // TWITTER CARDS
  twitter: {
    card: 'summary_large_image',
    title: '[Product Name] Review 2025: [X] [Units] Later, Here&apos;s The Truth',
    description: '[X]% success rate across [X] [units]. [Key finding]. Detailed review with pros, cons, and [exclusive offer].',
    images: ['https://spectrumaireviews.com/images/[product]-review-twitter.jpg'],
    creator: '@SpectrumAIReview',
  },

  // CANONICAL URL (Prevent duplicate content)
  alternates: {
    canonical: 'https://spectrumaireviews.com/reviews/[service]/[category]/[product]',
  },

  // ARTICLE METADATA
  other: {
    'article:published_time': '[YYYY-MM-DD]T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Michael Anderson',
    'article:section': '[Category] Reviews',
    'article:tag': '[Product Name], [Tag 1], [Tag 2], [Tag 3]',
  },
};

export default function [ProductName]ReviewPage() {
  // REVIEW SCHEMA (Shows ★ rating in Google search results)
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: '[Product Name]',
      applicationCategory: '[Category description]',
      operatingSystem: 'Web',
      description: '[1-2 sentence product description]',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '[lowest price]',
        highPrice: '[highest price]',
        offerCount: '[number of plans]',
        offers: [
          {
            '@type': 'Offer',
            name: '[Plan 1 Name]',
            price: '[price]',
            priceCurrency: 'USD',
            description: '[plan features summary]',
          },
          // Add more pricing tiers...
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '[X.X]',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'AI Productivity Tools Specialist',
      description: '5+ years testing [category] software',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '[X.X]',
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: '[YYYY-MM-DD]',
    dateModified: new Date().toISOString().split('T')[0],
    description: 'Comprehensive review of [Product] after [timeframe]. Honest analysis of [feature 1], [feature 2], pricing tiers, and real-world performance.',
    reviewBody: 'After [timeframe] of testing with [Product], creating [X units] across multiple use cases, it delivers [key finding] with [X]% success rate. The [plan name] ($X/mo) offers best value. Rating: X.X/5.',
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: [
        '[Pro 1]',
        '[Pro 2]',
        '[Pro 3]',
        '[Pro 4]',
        '[Pro 5]',
        '[Pro 6]',
      ],
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: [
        '[Con 1]',
        '[Con 2]',
        '[Con 3]',
        '[Con 4]',
        '[Con 5]',
        '[Con 6]',
      ],
    },
  };

  // BREADCRUMB SCHEMA (Shows navigation path in Google)
  // CRITICAL: URLs must match exact slugs from data/content.js
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spectrumaireviews.com' },
      { '@type': 'ListItem', position: 2, name: '[Service Name]', item: 'https://spectrumaireviews.com/[service-slug-from-data/content.js]' },
      { '@type': 'ListItem', position: 3, name: '[Category Name]', item: 'https://spectrumaireviews.com/[service-slug]/[category-slug]' },
      { '@type': 'ListItem', position: 4, name: '[Product] Review', item: 'https://spectrumaireviews.com/reviews/[service-slug]/[category-slug]/[product-slug]' },
    ],
  };

  // EXAMPLES:
  // AI Assistants: slug = "ai-assistant-agent-reviews" (NOT "ai-assistants")
  // AI Art Generators: slug = "ai-art-generator-reviews" (NOT "ai-art-generators")
  // Productivity: slug = "productivity"
  // Content Creation: slug = "content-creation"

  // FAQ SCHEMA (Targets featured snippets in Google)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is [Product] worth it and does it really work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '[Answer with rating, key stats, and recommendation. 2-3 sentences.]',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does [Product] cost and what are the pricing plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '[List all plans with prices and features. Include discount codes if available.]',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between [Plan 1] and [Plan 2]?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '[Compare plans with specific features and recommendations.]',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I cancel my [Product] subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '[Step-by-step cancellation instructions.]',
        },
      },
      {
        '@type': 'Question',
        name: '[Product] vs [Competitor 1] vs [Competitor 2] - which is best?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '[Comparison with specific use case recommendations.]',
        },
      },
      // Add 3-5 more strategic questions targeting zero-competition queries
    ],
  };

  return (
    <>
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <[ProductName]ReviewClient />
    </>
  );
}
```

### Step 4: Create Client Component ([ProductName]ReviewClient.js)

**File**: `app/reviews/[service]/[category]/[product]/[ProductName]ReviewClient.js`

**🚨 IMPORTANT - Always Import These:**
```javascript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import Breadcrumbs from '@/components/Breadcrumbs';  // ✅ NEW: For breadcrumb navigation
import { linkMap } from '@/utils/linkMap';            // ✅ NEW: For internal links
import Emoji from '@/components/Emoji';
import {
  // Import relevant icons from lucide-react
  Zap, Star, Phone, TrendingUp, Users, Shield,
  AlertTriangle, CheckCircle, XCircle, Clock, Info,
  // Add more as needed...
} from 'lucide-react';

const [ProductName]Review = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Scroll spy for sidebar navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. HERO SECTION (Required) */}
      <section className="bg-gradient-to-r from-[color1] via-[color2] to-[color3] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                {/* Add 2-3 relevant icons */}
                <Icon1 className="w-8 h-8" />
                <Icon2 className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                [Product Name] Review 2025: [Key Benefit/Hook]
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                [Subheading with testing timeframe and key stat]
              </p>
            </div>

            {/* Stats Box - 4 key metrics */}
            <div className="bg-gradient-to-br from-[accent-color] to-[accent-color-dark] rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-900">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">[X.X/10]</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">Overall Rating</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">[X]</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">[Metric 2]</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">[X%]</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">[Metric 3]</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">[X%]</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">[Metric 4]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIAL OFFER BANNER (If applicable) */}
      {/* Include discount code if available */}

      {/* 3. BREADCRUMB NAVIGATION (✅ REQUIRED for SEO) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[
          {
            name: '[Service Name]',
            href: linkMap.service('[service-slug-from-data.js]')  // Use linkMap helpers
          },
          {
            name: '[Category Name]',
            href: linkMap.category('[service-slug]', '[category-slug]')
          },
          {
            name: '[Product] Review',
            href: linkMap.review('[service-directory]', '[category-slug]', '[product-slug]')
          },
        ]} />
      </div>

      {/* REAL EXAMPLE - Zebracat Review Breadcrumbs: */}
      {/*
      <Breadcrumbs items={[
        { name: 'AI Art Generators', href: '/ai-art-generator-reviews' },
        { name: 'Content Creation', href: '/ai-art-generator-reviews/content-creation' },
        { name: 'Zebracat Review', href: '/reviews/ai-art-generators/content-creation/zebracat' },
      ]} />
      */}

      {/* 4. AFFILIATE DISCLOSURE BANNER (Required for FTC compliance) */}
      <div className="bg-blue-50 border-l-4 border-blue-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-start space-x-3">
            <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-blue-900">
                <strong className="font-semibold">Transparency Notice:</strong> This review contains affiliate links.
                We may earn a commission if you purchase through our links at no additional cost to you.
                Our reviews remain objective and based on [X days/months] of hands-on testing.
                <Link href="/methodology" className="underline ml-1 hover:text-blue-700">
                  Learn more about our review process
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. MAIN CONTENT WITH STICKY SIDEBAR */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* STICKY TABLE OF CONTENTS SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="font-bold text-xl mb-6 text-gray-800">Table of Contents</h3>
              <nav className="space-y-1">
                {[
                  { id: 'introduction', label: '1. Introduction & First Impressions' },
                  { id: 'overview', label: '2. Product Overview & Specifications' },
                  { id: 'design', label: '3. Design & User Interface' },
                  { id: 'performance', label: '4. Performance Analysis' },
                  { id: 'experience', label: '5. User Experience Deep Dive' },
                  { id: 'competition', label: '6. Competitive Analysis' },
                  { id: 'proscons', label: '7. Pros and Cons' },
                  { id: 'pricing', label: '8. Pricing & Plans' },
                  { id: 'recommendations', label: '9. Recommendations' },
                  { id: 'verdict', label: '10. Final Verdict' },
                  // Add custom sections as needed (troubleshooting, security, etc.)
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md transform scale-105'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-9 space-y-8">

            {/* SECTION 1: INTRODUCTION (Required) */}
            <section id="introduction" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Introduction & First Impressions</h2>

              {/* Author & Last Updated (Required for E-E-A-T) */}
              <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-l-4 border-purple-600">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <span className="font-semibold">By Michael Anderson</span>
                  <span>•</span>
                  <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  [Introduction paragraph with hook and testing credentials]
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  [Second paragraph with key findings preview]
                </p>
              </div>

              {/* First Impressions Content */}
            </section>

            {/* ADDITIONAL SECTIONS */}
            {/* Add sections: overview, design, performance, experience, competition, proscons, pricing, etc. */}
            {/* Each section should have id attribute for scroll navigation */}

            {/* AUTHOR BIO (Required at end) */}
            <div className="mt-8">
              <AuthorBio />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default [ProductName]Review;
```

---

## SEO Best Practices Checklist

### ✅ Required Elements for Every Review

**Metadata (page.js)**:
- [ ] Complete `metadata` export with title, description, keywords
- [ ] OpenGraph metadata for social sharing
- [ ] Twitter card metadata
- [ ] Canonical URL to prevent duplicate content
- [ ] Article metadata (published/modified time, author, section, tags)

**Schema.org Structured Data (page.js)**:
- [ ] Review schema with `@type: 'Review'` and `itemReviewed: SoftwareApplication`
- [ ] `aggregateRating` with `ratingValue` (shows ★ in Google)
- [ ] All pricing tiers as `offers` array
- [ ] Pros and cons as `positiveNotes` and `negativeNotes`
- [ ] Breadcrumb schema with full navigation hierarchy
- [ ] FAQ schema with 6-10 strategic questions targeting featured snippets

**UI Components (Client Component)**:
- [ ] Hero section with gradient background and 4-stat metrics box
- [ ] Affiliate disclosure banner (FTC compliance)
- [ ] Author byline: "By Michael Anderson"
- [ ] Last updated date: `{new Date().toLocaleDateString()}`
- [ ] Sticky table of contents sidebar
- [ ] All sections have unique `id` attributes for navigation

**Content Sections**:
- [ ] Introduction with author credentials and testing timeline
- [ ] Product overview with specifications
- [ ] Performance analysis with real data
- [ ] Pros and cons section
- [ ] Pricing breakdown with all tiers
- [ ] Final verdict with rating explanation
- [ ] Author bio component at end
- [ ] **High-Value Additions** (for competitive keywords):
  - [ ] Troubleshooting guide (targets "why is [product] not working")
  - [ ] Cancellation guide (targets "how to cancel [product]")
  - [ ] Security/privacy section (targets "is [product] safe")
  - [ ] Comparison tables vs competitors
  - [ ] Credit/usage calculator (for credit-based products)

### ✅ HTML Entity Escaping

**CRITICAL**: Use HTML entities for quotes/apostrophes in JSX to avoid ESLint errors:
- `&apos;` for apostrophes (')
- `&ldquo;` for left double quotes (")
- `&rdquo;` for right double quotes (")
- `&lsquo;` for left single quotes (')
- `&rsquo;` for right single quotes (')

### ✅ Naming Conventions

**Files**:
- `page.js` (server component, lowercase)
- `[ProductName]ReviewClient.js` (PascalCase, descriptive)

**Directories**:
- Use lowercase with hyphens: `ai-writing-tools/content-creation/jasper`
- Match service slugs from `data/content.js`

### ✅ SEO Targeting Strategy

**Primary Keywords** (Title):
- `[Product] review 2025`
- `[Product] AI review`
- `[Product] honest analysis`

**Long-Tail Keywords** (Description & FAQ):
- `Is [Product] worth it`
- `How much does [Product] cost`
- `[Product] vs [Competitor]`
- `How to cancel [Product]`
- `[Product] pricing plans`

**Zero-Competition Queries** (Content Sections):
- `Why is [Product] not working today and how do I fix common errors`
- `How many credits does [Product] actually use per task`
- `Can [Product] be trusted with sensitive business data`
- `What happens to my [Product] data if I stop paying`

---

## Testing & Validation

### Build Testing
```bash
npm run build  # Must pass with zero errors
```

### Schema Validation
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. Test all three schemas: Review, Breadcrumb, FAQ

### Pre-Deployment Checklist
- [ ] Build passes without errors
- [ ] No ESLint warnings for unescaped entities
- [ ] All internal links work (methodology page exists)
- [ ] Hero gradient renders correctly
- [ ] Table of contents scroll navigation works
- [ ] All section IDs match TOC navigation items
- [ ] Author bio displays at end
- [ ] Affiliate disclosure visible above fold
- [ ] Last updated date renders dynamically

---

## Common Pitfalls to Avoid

1. **Header/Footer Duplication**: Root layout (`app/layout.js`) already includes Header and Footer. Never import them in review pages.

2. **Client Component Metadata**: Cannot export `metadata` from `'use client'` components. Always use server/client split.

3. **Missing Schemas**: Reviews without Review schema won't show ★ ratings in Google. Always include all three schemas.

4. **Unescaped Entities**: Use `&apos;` not `'` in JSX text to avoid ESLint errors.

5. **Incorrect Breadcrumb URLs**: Breadcrumb schema URLs must match slugs from `data/content.js` EXACTLY. Always verify:
   - Check `data/content.js` for the correct service slug (e.g., `ai-art-generator-reviews` NOT `ai-art-generators`)
   - Position 2: `https://spectrumaireviews.com/[service-slug-from-data.js]`
   - Position 3: `https://spectrumaireviews.com/[service-slug]/[category-slug]`
   - Position 4: `https://spectrumaireviews.com/reviews/[service-slug]/[category-slug]/[product-slug]`
   - Example: Zebracat uses `/ai-art-generator-reviews/content-creation/` NOT `/ai-art-generators/content-creation/`

6. **Dynamic Date in Schema**: Use `new Date().toISOString()` for `modifiedTime` to show freshness.

7. **Missing Affiliate Disclosure**: FTC requires clear disclosure. Always include the banner.

8. **No Last Updated Date**: Google prioritizes fresh content. Always show dynamic update date.

---

## SEO Performance Expectations

**Properly implemented reviews should achieve**:
- ⭐ **Rich Snippets**: Star ratings visible in Google search results (3-7 days after indexing)
- 📌 **Featured Snippets**: FAQ schema questions appear in "People Also Ask" (1-2 weeks)
- 🎯 **Breadcrumb Display**: Navigation path shows in search results (immediate)
- 📈 **Higher CTR**: Enhanced metadata improves click-through rates by 20-40%
- 🔍 **Voice Search**: FAQ schema optimizes for voice queries ("Hey Google, is [Product] worth it?")

**Reference Examples**:
- Genspark review: 9.5/10 SEO score (full implementation)
- Zebracat review: 9.5/10 SEO score (full implementation)
- GetGenie review: 9.0/10 SEO score (full implementation)

---

## SEO Audit Findings & Critical Issues to Avoid

**Last Audit**: October 2025
**Reviews Audited**: Zebracat (8.5/10), Genspark AI (9.5/10), GetGenie AI (9.0/10)

This section documents common SEO issues discovered during comprehensive audits and provides solutions to ensure all future reviews achieve 9.5/10+ SEO scores.

---

### 🔴 **CRITICAL ISSUES** (Must Fix Immediately)

#### 1. **Breadcrumb URL Directory vs Slug Mismatch**

**Problem**: The biggest SEO killer across reviews is when breadcrumb schema URLs don't match the actual file directory structure.

**Example of the Issue**:
```javascript
// ❌ WRONG - Zebracat had this error
breadcrumbSchema = {
  itemListElement: [
    { position: 2, item: 'https://spectrumaireviews.com/ai-art-generator-reviews' }, // ✅ Correct (from data/content.js)
    { position: 4, item: 'https://spectrumaireviews.com/reviews/ai-art-generator-reviews/...' } // ❌ WRONG!
  ]
}

// Actual file path: /reviews/ai-art-generators/content-creation/zebracat/
// This mismatch breaks breadcrumbs in Google search results!
```

**The Root Cause**:
- **Directory names** (physical folders): `ai-art-generators`, `ai-assistants`, `ai-writing-tools`
- **Service slugs** (from data/content.js): `ai-art-generator-reviews`, `ai-assistant-agent-reviews`, `ai-writing-tool-reviews`
- Developers confuse which one to use in breadcrumb Position 4

**✅ SOLUTION - Follow This Rule**:

```javascript
// BREADCRUMB SCHEMA STRUCTURE (Use this template)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://spectrumaireviews.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '[Service Name]',
      // ✅ USE SERVICE SLUG FROM data/content.js
      item: 'https://spectrumaireviews.com/[SERVICE-SLUG-FROM-DATA.JS]'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '[Category Name]',
      // ✅ USE SERVICE SLUG + CATEGORY SLUG
      item: 'https://spectrumaireviews.com/[SERVICE-SLUG]/[category-slug]'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '[Product] Review',
      // ✅ USE ACTUAL FILE PATH (directory structure)
      item: 'https://spectrumaireviews.com/reviews/[ACTUAL-DIRECTORY]/[category]/[product]'
    },
  ],
};
```

**Reference data/content.js for Service Slugs**:
```javascript
// FROM data/content.js - THESE ARE THE OFFICIAL SLUGS

services = [
  { id: 'ai-writing-tools', slug: 'ai-writing-tool-reviews' },     // NOT "ai-writing-tools"
  { id: 'ai-art-generators', slug: 'ai-art-generator-reviews' },   // NOT "ai-art-generators"
  { id: 'ai-seo-tools', slug: 'ai-seo-tool-reviews' },             // NOT "ai-seo-tools"
  { id: 'ai-assistants', slug: 'ai-assistant-agent-reviews' },     // NOT "ai-assistants"
];
```

**Actual File Paths** (directories):
- `/reviews/ai-art-generators/` (NOT ai-art-generator-reviews)
- `/reviews/ai-assistants/` (NOT ai-assistant-agent-reviews)
- `/reviews/ai-writing-tool-reviews/` (matches slug - only exception!)

**VALIDATION CHECKLIST** (Run this for every review):
1. ✅ Open `data/content.js` and find your service's `slug` value
2. ✅ Use that slug for breadcrumb Position 2 and 3
3. ✅ For Position 4, use the **actual directory path** where the review file lives
4. ✅ Test breadcrumb URLs manually - every URL should load without 404

**Impact of Getting This Wrong**:
- 🚨 Breadcrumbs won't display in Google search results
- 🚨 Schema validation fails
- 🚨 Lost 15-25% CTR from missing breadcrumb navigation
- 🚨 Potential 404 errors if users click broken links

---

#### 2. **Rating Scale Inconsistency (Google Prefers 5-Star System)**

**Problem**: Some reviews use `/10` rating scales but Google strongly prefers `/5` for rich snippet display.

**Examples Found**:
- ✅ **Zebracat**: Uses 4.2/5 (correct)
- ✅ **Genspark**: Uses 7.3/10 but normalized to 3.65/5 in schema (correct)
- ⚠️ **GetGenie**: Uses 8.5/10 in schema `bestRating: '10'` (should be converted)

**✅ SOLUTION**:

**If you rate products on a /10 scale**:
```javascript
// Your internal rating: 8.5/10
// Convert to 5-star for Google:

aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.25',  // 8.5/10 = 4.25/5
  bestRating: '5',      // ✅ Always use 5 for Google
  worstRating: '1',
  ratingCount: '1',
},
```

**Conversion Formula**:
```
Google Rating (out of 5) = (Your Rating / Your Max Rating) × 5
Example: (8.5 / 10) × 5 = 4.25/5 stars
```

**If you rate products on a /5 scale** (recommended):
```javascript
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.2',   // Direct 5-star rating
  bestRating: '5',
  worstRating: '1',
  ratingCount: '1',
},
```

**Why This Matters**:
- ⭐ Google displays star ratings more prominently with 5-star scale
- ⭐ Voice assistants read ratings correctly ("4.2 out of 5 stars")
- ⭐ Matches user expectations (most review sites use 5-star)

---

#### 3. **Meta Description Length Optimization**

**Problem**: Several reviews have meta descriptions exceeding Google's 155-160 character display limit.

**Examples Found**:
- ❌ **Zebracat**: 172 characters (truncated in SERPs)
- ❌ **Genspark**: 179 characters (truncated in SERPs)
- ✅ **GetGenie**: 152 characters (optimal)

**✅ SOLUTION**:

**Length Guidelines**:
- **Target**: 150-155 characters (safe zone)
- **Maximum**: 160 characters (hard cutoff)
- **Mobile**: Shows even fewer characters (~120)

**Template for Perfect Meta Descriptions**:
```javascript
description: '[Product] review after [X timeframe]: [key stats]. Expert analysis, pricing ($X-$Y/mo), [metric 1], [metric 2]. Rating: X.X/5. [Offer/CTA].',
// Example: 152 characters
description: 'GetGenie AI review after 3 months: 94% quality, 67% time saved. Expert analysis, pricing ($19-49/mo), WordPress integration. Rating: 8.5/10. Free plan available.',
```

**What to Include** (priority order):
1. **Product name + "review"** (first 10-15 chars)
2. **Testing timeframe** ("after 3 months", "127 videos tested")
3. **1-2 key metrics** (94% success, $19/mo pricing)
4. **Rating** (4.2/5 or 8.5/10)
5. **Call to action** (discount code, free trial, special offer)

**What to Remove** (if over limit):
- Unnecessary adjectives ("comprehensive", "detailed")
- Duplicate information already in title
- Overly long feature lists

---

#### 4. **Title Tag Length Optimization**

**Problem**: Title tags exceeding 60 characters get truncated in Google search results.

**Examples Found**:
- ❌ **Zebracat**: 82 characters (truncated)
- ✅ **Genspark**: 59 characters (optimal)
- ✅ **GetGenie**: 60 characters (optimal)

**✅ SOLUTION**:

**Length Guidelines**:
- **Target**: 50-60 characters
- **Maximum**: 60 characters (hard cutoff)
- **Mobile**: Shows even fewer (~50 characters)

**Formula for Perfect Titles**:
```
[Product Name] Review 2025: [Key Benefit] - [Hook]
```

**Examples**:
```javascript
// ✅ GOOD - 56 characters
title: 'Zebracat Review 2025: Text to Video AI - 127 Tests',

// ✅ GOOD - 59 characters
title: 'Genspark AI Review 2025: AI Agent That Makes Phone Calls',

// ✅ GOOD - 60 characters
title: 'GetGenie Review 2025: Best WordPress AI Writing Tool for SEO?',

// ❌ BAD - 82 characters (truncated)
title: 'Zebracat Review 2025: Transform Text to Video in Minutes - Honest Analysis',
```

**What Gets Truncated**:
- Desktop: After ~60 characters (shows "...")
- Mobile: After ~50 characters (shows "...")
- SERP features: Even less if rich snippets present

**Pro Tips**:
- ✅ Put most important keywords first
- ✅ Include "2025" for freshness signal
- ✅ Use numbers when possible (127 Tests, 94% Success)
- ❌ Avoid filler words ("complete", "ultimate", "comprehensive")

---

### 🟡 **HIGH PRIORITY ISSUES** (Fix Within 1 Week)

#### 5. **Social Sharing Image Verification**

**Problem**: OpenGraph/Twitter images specified in metadata but files may not exist, causing broken social cards.

**Common Missing Images**:
```javascript
// Specified in metadata but may not exist:
'https://spectrumaireviews.com/images/zebracat-review-og.jpg'      // 1200x630
'https://spectrumaireviews.com/images/zebracat-review-twitter.jpg' // 1200x630
'https://spectrumaireviews.com/images/genspark-review-og.jpg'      // 1200x630
'https://spectrumaireviews.com/images/getgenie-review-og.jpg'      // 1200x630
```

**✅ SOLUTION**:

**Before deploying any review**:
1. ✅ Create social sharing images (1200x630 recommended)
2. ✅ Save to `/public/images/[product]-review-og.jpg`
3. ✅ Test URLs manually to confirm images load
4. ✅ Use tools like [OpenGraph Debugger](https://www.opengraph.xyz/) to verify

**If images don't exist yet**:
```javascript
// Option 1: Remove image metadata until ready
openGraph: {
  title: '...',
  description: '...',
  // Don't include images: [...] until files exist
},

// Option 2: Use a generic fallback image
images: [{
  url: 'https://spectrumaireviews.com/images/default-review-og.jpg', // Generic image
  width: 1200,
  height: 630,
  alt: 'SpectrumAIReviews - AI Product Reviews 2025',
}],
```

**Image Requirements**:
- **Size**: 1200x630 pixels (exact)
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **File size**: < 1MB (< 500KB ideal)
- **Alt text**: Always include descriptive alt text

---

#### 6. **Free Plan / Pricing Data Consistency**

**Problem**: Pricing information conflicts between schema and client component content.

**Example Found - Zebracat**:
```javascript
// ❌ In page.js schema:
offers: [{
  name: 'Free Plan',
  price: '0',
  description: '1 video per month',  // ❌ Says 1 video
}]

// ❌ In ZebracatReviewClient.js:
<p>Free Plan: 3 videos/month with watermarks</p>  // ❌ Says 3 videos

// Result: Contradictory information damages E-E-A-T credibility
```

**✅ SOLUTION**:

**Pricing Verification Protocol**:
1. ✅ Research actual current pricing on product's official website
2. ✅ Screenshot pricing page for reference
3. ✅ Update **both** schema AND client component with identical data
4. ✅ Include last verified date in comment

**Template**:
```javascript
// page.js schema
// Pricing verified: 2025-10-06 via [product].com/pricing
offers: [
  {
    '@type': 'Offer',
    name: 'Free Plan',
    price: '0',
    priceCurrency: 'USD',
    description: '3 videos/month with watermarks, 720p max',  // ✅ Exact details
  },
  // ... other tiers
],

// Client component (must match exactly)
<div className="border-l-4 border-green-500">
  <h4>Free Plan</h4>
  <p className="text-2xl font-bold">$0</p>
  <p>3 videos/month with watermarks, 720p max</p>  // ✅ Same as schema
</div>
```

**Where to Verify Pricing**:
- Official product website /pricing page
- Product Hunt listing
- G2 / Capterra reviews (check date)
- Direct product signup flow

**Common Pricing Changes to Watch**:
- Free plan limits (videos, words, credits per month)
- Mid-tier pricing ($19 → $24.99 common)
- Feature restrictions per tier
- Annual discount percentages

---

#### 7. **FAQ Schema Quality - Best Practices**

**Problem**: FAQ schemas with generic questions miss featured snippet opportunities.

**Examples of Quality Differences**:

**❌ Generic FAQ (Low Value)**:
```javascript
{
  name: 'What is GetGenie?',
  acceptedAnswer: { text: 'GetGenie is an AI writing tool.' }
  // Problem: Too basic, already in title/meta
}
```

**✅ High-Value FAQ (Featured Snippet Target)**:
```javascript
{
  name: 'Why is GetGenie not showing in my WordPress editor and how do I fix it?',
  acceptedAnswer: {
    text: 'If GetGenie doesn\'t appear: 1) Verify plugin is activated, 2) Clear browser cache and refresh editor, 3) Check API key is entered correctly, 4) Ensure WordPress is 5.0+ and PHP 7.4+, 5) Disable conflicting plugins. Most issues resolve with cache clearing and API key re-activation.'
  }
  // ✅ Targets zero-competition troubleshooting query with actionable steps
}
```

**✅ FAQ SCHEMA STRATEGY**:

**Required Questions** (Include in ALL reviews):
1. **"Is [Product] worth it and does it really work?"**
   - Answer with rating, key stats, target audience
2. **"How much does [Product] cost and what are the pricing plans?"**
   - List all tiers with prices and features
3. **"How do I cancel my [Product] subscription?"**
   - Step-by-step cancellation instructions (builds trust)

**High-Value Questions** (Choose 3-5 based on product):
4. **Comparison**: "[Product] vs [Competitor 1] vs [Competitor 2] - which is best?"
5. **Troubleshooting**: "Why is [Product] not working and how do I fix it?"
6. **Security**: "Is [Product] safe for business use? Privacy and data security."
7. **Feature-Specific**: "What is [Unique Feature] and is it worth the extra cost?"
8. **Platform-Specific**: "Does [Product] work with [Platform/Tool]?"

**Zero-Competition Queries** (Pick 2-3):
9. **Credit/Usage**: "How many credits does [Product] use per [unit]?"
10. **Data Handling**: "What happens to my [Product] data if I cancel?"
11. **Limits**: "What are the actual limits of [Product]'s free plan?"

**FAQ Quality Checklist**:
- [ ] 6-10 questions total (sweet spot: 8 questions)
- [ ] Each answer is 50-150 words (detailed but concise)
- [ ] Questions use natural language (how people actually search)
- [ ] Answers include specific numbers/stats when possible
- [ ] At least 3 questions target long-tail queries (7+ words)
- [ ] Troubleshooting question included (high engagement)
- [ ] Cancellation question included (trust signal)

---

### 🟢 **MEDIUM PRIORITY** (Fix Within 1 Month)

#### 8. **Affiliate Disclosure Banner Verification**

**Requirement**: FTC requires clear affiliate disclosure on all review pages with affiliate links.

**✅ Required Disclosure Template**:
```javascript
<div className="bg-blue-50 border-l-4 border-blue-500 py-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div className="flex items-start space-x-3">
      <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-sm text-blue-900">
          <strong className="font-semibold">Transparency Notice:</strong> This review contains affiliate links.
          We may earn a commission if you purchase through our links at no additional cost to you.
          We purchased a [Product] [Plan] subscription for this review and tested it for [X timeframe] across [Y projects/units].
          <Link href="/methodology" className="underline ml-1 hover:text-blue-700">
            Learn more about our review process
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
```

**Placement Requirements**:
- ✅ **Above the fold** (visible without scrolling)
- ✅ **Before first affiliate link**
- ✅ **After hero section, before main content**
- ❌ NOT in footer (FTC requires prominence)

**Content Requirements**:
- ✅ Clear statement of affiliate relationship
- ✅ Mention that it's at no additional cost to user
- ✅ State that review is based on actual testing
- ✅ Link to /methodology page for transparency
- ✅ Specific testing details (timeframe, scope)

---

#### 9. **E-E-A-T Signal Enhancement**

**E-E-A-T** = Experience, Expertise, Authoritativeness, Trustworthiness

**Current E-E-A-T Scores** (from audits):
- Genspark: 9.5/10 (excellent)
- Zebracat: 9.0/10 (excellent)
- GetGenie: 9.0/10 (excellent)

**How to Achieve 9.5/10+ E-E-A-T**:

**Experience Signals** (First-Hand Testing):
```javascript
// ✅ Include in introduction section
<p className="text-lg">
  After {testingPeriod} of intensive testing with {productName}, creating {quantityTested}
  across {numberOfProjects} client projects, here's my honest verdict based on real-world data.
</p>

// Examples from high-scoring reviews:
"After 3 months of testing GetGenie, generating 150+ articles across 33 languages and 5 client websites..."
"After 30 days with Genspark AI, making 47 real phone calls and testing the Super Agent..."
"127 videos created over 3 months across 5 content types..."
```

**Expertise Signals** (Credentials):
```javascript
// ✅ In schema author object
author: {
  '@type': 'Person',
  name: 'Michael Anderson',
  jobTitle: 'AI [Category] Specialist',  // Be specific
  description: '[X]+ years testing [category] software and reviewing [Y]+ products',
},

// Examples:
"AI Writing Tools Specialist - 8+ years testing WordPress SEO software"
"AI Productivity Tools Specialist - 5+ years testing AI video generators"
"Senior Digital Marketing Specialist - Former content strategist for Fortune 500"
```

**Authority Signals** (Industry Recognition):
```javascript
// ✅ Add to content when available
- Industry certifications (WordPress Certified Developer)
- Published articles on topic
- Speaking engagements
- Featured in industry publications
- Links to other authoritative reviews on your site
```

**Trust Signals** (Transparency):
```javascript
// ✅ Must-haves for trust
- Detailed testing methodology
- Specific quantified results (not vague claims)
- Balanced pros AND cons (6 of each)
- Honest disclosure of limitations
- Cancellation instructions (shows you're not just selling)
- "Last Updated" date (proves content is maintained)
- Clear affiliate disclosure
```

**Quantified Testing Template**:
```
[X] [units] tested over [Y timeframe]
[Z]% success rate / quality score
Tested across [N] use cases / projects / scenarios
[M] hours of total testing time
Specific dates (January-March 2025)
```

---

### 📊 **SEO AUDIT SCORING SYSTEM**

Use this checklist to audit your reviews before publishing:

**Metadata (20 points)**
- [ ] Title tag 50-60 characters (5 pts)
- [ ] Meta description 150-155 characters (5 pts)
- [ ] Keywords naturally integrated (3 pts)
- [ ] OpenGraph complete + images exist (4 pts)
- [ ] Twitter cards complete (3 pts)

**Schema.org (30 points)**
- [ ] Review schema with all required fields (10 pts)
- [ ] Rating uses 5-star scale (5 pts)
- [ ] Breadcrumb URLs match data/content.js (10 pts) ⚠️ CRITICAL
- [ ] FAQ schema with 6-10 questions (5 pts)

**E-E-A-T Signals (25 points)**
- [ ] Quantified testing (X units, Y timeframe) (8 pts)
- [ ] Author credentials in schema (5 pts)
- [ ] Balanced pros/cons (6 of each) (4 pts)
- [ ] Affiliate disclosure banner (4 pts)
- [ ] Last updated date dynamic (4 pts)

**Content Quality (15 points)**
- [ ] Troubleshooting section (5 pts)
- [ ] Cancellation guide in FAQ (3 pts)
- [ ] Comparison tables (4 pts)
- [ ] Real testing data/screenshots (3 pts)

**Technical (10 points)**
- [ ] Social images exist and load (3 pts)
- [ ] Pricing consistent (schema + UI) (4 pts)
- [ ] Build passes with zero errors (3 pts)

**Scoring**:
- **95-100 points**: World-class SEO (9.5/10 or 10/10)
- **85-94 points**: Excellent SEO (8.5-9.0/10)
- **75-84 points**: Good SEO (7.5-8.0/10)
- **Below 75 points**: Needs improvement (< 7.5/10)

---

### 🎯 **QUICK REFERENCE: Common Fixes**

**Before you publish ANY review, verify**:

1. ✅ **Breadcrumb URLs**:
   ```bash
   # Check data/content.js for service slug
   # Use slug for Position 2 and 3
   # Use actual directory for Position 4
   ```

2. ✅ **Rating Scale**:
   ```javascript
   bestRating: '5'  // Always 5, never 10
   ratingValue: '4.25'  // Convert if needed
   ```

3. ✅ **Title + Description Length**:
   ```bash
   # Title: 50-60 chars
   # Description: 150-155 chars
   ```

4. ✅ **Images Exist**:
   ```bash
   ls public/images/[product]-review-og.jpg  # Should exist
   ```

5. ✅ **Pricing Matches**:
   ```bash
   # Compare schema offers vs client component pricing
   # Must be identical
   ```

6. ✅ **FAQ Quality**:
   ```bash
   # 6-10 questions
   # Include: worth it, pricing, cancel, troubleshoot
   ```

7. ✅ **Affiliate Disclosure**:
   ```bash
   # Must be above fold
   # Must be before first affiliate link
   ```

---

## Development Workflow

1. **Research Phase**:
   - Use Jina MCP to research product features, pricing, common issues
   - Identify zero-competition keyword opportunities
   - Gather real user pain points for FAQ schema

2. **Content Creation**:
   - Create directory structure
   - Write `page.js` with complete metadata + schemas
   - Build `[ProductName]ReviewClient.js` with hero, sections, UI
   - Include troubleshooting, security, cancellation sections for competitive keywords

3. **Quality Assurance**:
   - Run `npm run build` and fix all errors
   - Validate schemas with Google Rich Results Test
   - Check affiliate disclosure visibility
   - Verify all internal links work

4. **Deployment**:
   - Commit with descriptive message
   - Push to GitHub
   - Cloudflare Pages auto-deploys from `main` branch
   - Monitor indexing in Google Search Console

---

## Project Status Notes

- The README mentions i18n support but it's not implemented
- Dynamic service/category pages exist but most content is in static review pages
- Affiliate links and coupon codes are embedded in review pages
- Author bio component shows "Michael Anderson" as the reviewer
- All reviews use server/client split architecture for optimal SEO
