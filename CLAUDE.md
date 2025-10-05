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

## Creating a New SEO-Optimized Review Page

### Step 1: Create Directory Structure

```bash
# Example: Creating a review for "Jasper AI" in ai-writing-tools/content-creation
mkdir -p app/reviews/ai-writing-tools/content-creation/jasper
cd app/reviews/ai-writing-tools/content-creation/jasper
```

### Step 2: Create Server Component (page.js)

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

### Step 3: Create Client Component ([ProductName]ReviewClient.js)

**File**: `app/reviews/[service]/[category]/[product]/[ProductName]ReviewClient.js`

```javascript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
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

      {/* 3. AFFILIATE DISCLOSURE BANNER (Required for FTC compliance) */}
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

      {/* 4. MAIN CONTENT WITH STICKY SIDEBAR */}
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
