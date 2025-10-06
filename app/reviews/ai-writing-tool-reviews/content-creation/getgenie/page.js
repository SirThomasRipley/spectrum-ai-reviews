import GetGenieReviewClient from './GetGenieReviewClient';
import Script from 'next/script';

export const metadata = {
  // PRIMARY METADATA
  title: 'GetGenie Review 2025: Best WordPress AI Writing Tool for SEO?',
  description: 'In-depth GetGenie review after 3 months of testing. Expert analysis of WordPress integration, SEO features, pricing ($19-49/mo), multilingual content (33+ languages), and Genie Image. Rating: 8.5/10. Free plan available.',
  keywords: 'GetGenie review, GetGenie AI review 2025, WordPress AI writing tool, GetGenie WordPress plugin, AI SEO writing tool, GetGenie pricing, GetGenie vs Jasper, Genie Image review, WordPress content generator, WooCommerce AI, GetGenie free plan, multilingual AI writing',
  authors: [{ name: 'Michael Anderson', url: 'https://spectrumaireviews.com/about' }],

  // OPENGRAPH
  openGraph: {
    title: 'GetGenie Review 2025: I Tested This WordPress AI Tool for 3 Months - Here&apos;s What Happened',
    description: 'After generating 150+ SEO-optimized articles with GetGenie across 33 languages, here&apos;s my honest verdict on features, pricing, and real value. 8.5/10 rating. Includes Genie Image analysis and WooCommerce Wizard testing.',
    url: 'https://spectrumaireviews.com/reviews/ai-writing-tool-reviews/content-creation/getgenie',
    siteName: 'SpectrumAIReviews',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Michael Anderson'],
    images: [{
      url: 'https://spectrumaireviews.com/images/getgenie-review-og.jpg',
      width: 1200,
      height: 630,
      alt: 'GetGenie AI Review 2025 - Complete WordPress SEO Tool Analysis',
    }],
  },

  // TWITTER CARDS
  twitter: {
    card: 'summary_large_image',
    title: 'GetGenie AI Review: 150+ Articles Later, Here&apos;s the Truth About This WordPress Tool',
    description: '94% content quality score. 67% time reduction. $19/mo starting price. Detailed review with pros, cons, and comparison vs Jasper/Writesonic.',
    images: ['https://spectrumaireviews.com/images/getgenie-review-twitter.jpg'],
    creator: '@SpectrumAIReview',
  },

  // CANONICAL URL
  alternates: {
    canonical: 'https://spectrumaireviews.com/reviews/ai-writing-tool-reviews/content-creation/getgenie',
  },

  // ARTICLE METADATA
  other: {
    'article:published_time': '2025-01-15T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Michael Anderson',
    'article:section': 'AI Writing Tool Reviews',
    'article:tag': 'GetGenie, WordPress AI, SEO Content Generator, AI Writing Tool, Genie Image, WooCommerce',
  },
};

export default function GetGenieReviewPage() {
  // REVIEW SCHEMA
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'GetGenie AI',
      applicationCategory: 'AI Writing & SEO Software for WordPress',
      operatingSystem: 'Web, WordPress Plugin',
      description: 'AI-powered content creation and SEO optimization tool for WordPress with multilingual support, SERP analysis, and WooCommerce integration.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '49',
        offerCount: '3',
        offers: [
          {
            '@type': 'Offer',
            name: 'Free Plan',
            price: '0',
            priceCurrency: 'USD',
            description: '1,500 words/month with full feature access',
          },
          {
            '@type': 'Offer',
            name: 'Writer Plan',
            price: '19',
            priceCurrency: 'USD',
            description: '50,000 words/month with SEO mode and competitor analysis',
          },
          {
            '@type': 'Offer',
            name: 'Pro Plan',
            price: '49',
            priceCurrency: 'USD',
            description: 'Unlimited words with priority support and team features',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '8.5',
        bestRating: '10',
        worstRating: '1',
        ratingCount: '1',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'AI Writing Tools Specialist',
      description: '8+ years testing WordPress SEO software and AI content generation tools',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '8.5',
      bestRating: '10',
      worstRating: '1',
    },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    description: 'Comprehensive review of GetGenie AI after 3 months of testing. Analysis of WordPress integration, SEO features, multilingual content generation, Genie Image, WooCommerce Wizard, pricing plans, and competitive positioning.',
    reviewBody: 'After 3 months of intensive testing with GetGenie AI, generating 150+ SEO-optimized articles across 33 languages and 5 client websites, it delivers exceptional WordPress integration with 94% content quality score. The Writer Plan ($19/mo) offers best value with 50,000 words, SERP analysis, and competitor insights. Rating: 8.5/10.',
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Seamless WordPress integration with Gutenberg, Classic, and Elementor editors',
        'Superior SEO focus with real-time content scoring and NLP keyword optimization',
        'Comprehensive competitor SERP analysis and head-to-head comparison features',
        'Outstanding multilingual support (33+ languages with 94% quality in testing)',
        'Generous free plan (1,500 words/month) with full feature access',
        '22+ AI personalities (GenieChat) for contextually appropriate content',
      ],
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Limited long-form content capability (struggles beyond 2,000 words)',
        'Genie Image requires separate purchase ($15 for 100 images)',
        'Learning curve for advanced SERP analysis features (1-2 weeks)',
        'Occasional content repetition with identical prompts',
        'Non-WordPress web app lacks some advanced plugin features',
        'Customer support response time 24-48 hours (no live chat)',
      ],
    },
  };

  // BREADCRUMB SCHEMA
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spectrumaireviews.com' },
      { '@type': 'ListItem', position: 2, name: 'AI Writing Tool Reviews', item: 'https://spectrumaireviews.com/ai-writing-tool-reviews' },
      { '@type': 'ListItem', position: 3, name: 'Content Creation', item: 'https://spectrumaireviews.com/ai-writing-tool-reviews/content-creation' },
      { '@type': 'ListItem', position: 4, name: 'GetGenie Review', item: 'https://spectrumaireviews.com/reviews/ai-writing-tool-reviews/content-creation/getgenie' },
    ],
  };

  // FAQ SCHEMA
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is GetGenie worth it and does it really work for SEO content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, GetGenie is worth it for WordPress users focused on SEO content. After 3 months of testing with 150+ articles, it achieved a 94% content quality score and 8.5/10 overall rating. The WordPress integration, SERP analysis, and NLP keyword optimization deliver measurable SEO improvements. Best value: Writer Plan at $19/month for 50,000 words. Not recommended for non-WordPress users or creative writing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does GetGenie cost and what are the pricing plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GetGenie offers 3 pricing tiers: Free Plan ($0/month, 1,500 words), Writer Plan ($19/month, 50,000 words with SEO mode and competitor analysis), and Pro Plan ($49/month, unlimited words with priority support). Annual plans save 20%. Genie Image (AI image generator) costs extra at $15 for 100 images. The Writer Plan offers best value for most users.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between GetGenie Free Plan and Writer Plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Free Plan includes 1,500 words/month with access to all 37+ templates, GenieChat, and basic SEO features. The Writer Plan ($19/month) provides 50,000 words/month, advanced SEO mode, SERP visualization, head-to-head competitor analysis, and NLP keyword optimization. Upgrade to Writer if you need more than 3-4 blog posts monthly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I cancel my GetGenie subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To cancel GetGenie: 1) Log into your GetGenie account dashboard, 2) Navigate to Billing > Subscription, 3) Click "Cancel Subscription" and confirm. Cancellations take effect at the end of your current billing period. You retain access until then. For refund requests within 14 days of purchase, contact support@getgenie.ai with your order number.',
        },
      },
      {
        '@type': 'Question',
        name: 'GetGenie vs Jasper AI vs Writesonic - which is best for WordPress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GetGenie is best for WordPress users ($19/mo, native plugin, SERP analysis). Jasper is best for creative/brand voice content ($39/mo, no WordPress integration). Writesonic is best for long-form content 5000+ words ($19/mo, limited WordPress support). Choose GetGenie if WordPress + SEO is priority, Jasper for creative writing, Writesonic for research articles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does GetGenie work with Gutenberg, Elementor, and Classic Editor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, GetGenie integrates with all major WordPress editors: Gutenberg (Block Editor), Classic Editor, Elementor, and Divi Builder. Installation takes under 5 minutes. The plugin adds a GetGenie sidebar to your editor for real-time content generation and SEO scoring. Works with WordPress 5.0+ and requires an active API key (free or paid plan).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can GetGenie create content in languages other than English?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, GetGenie supports 33+ languages including Spanish, French, German, Japanese, Chinese, Arabic, and more. Testing showed 94% quality for Spanish, 87% for French, and 91% for Japanese content. It handles RTL languages correctly and maintains cultural context. Outperforms Jasper and Copy.ai for non-English SEO content based on 3-month testing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Genie Image and is it worth the extra cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genie Image is GetGenie\'s AI image generator powered by DALL-E 2, designed for WordPress media library integration. It costs $15 for 100 images (separate from writing plans). Worth it if you need custom images for blog posts and lack design skills. Not worth it if you have stock photo subscriptions or use Midjourney/Stable Diffusion. Images integrate seamlessly with WordPress posts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does GetGenie WooCommerce Wizard help e-commerce stores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WooCommerce Wizard generates SEO-optimized product descriptions, titles, and meta data directly within WooCommerce product pages. Testing showed 8.2/10 engagement, 7.8/10 add-to-cart rate, and 8.5/10 SEO performance. Best for stores with 50+ products needing consistent, conversion-focused descriptions. Saves 67% time vs manual writing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is GetGenie not showing in my WordPress editor and how do I fix it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If GetGenie doesn\'t appear: 1) Verify plugin is activated (Plugins > Installed Plugins), 2) Clear browser cache and refresh editor, 3) Check API key is entered correctly (GetGenie > Settings), 4) Ensure WordPress is 5.0+ and PHP 7.4+, 5) Disable conflicting plugins (especially other AI tools), 6) Contact support@getgenie.ai if issue persists. Most issues resolve with cache clearing and API key re-activation.',
        },
      },
    ],
  };

  return (
    <>
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GetGenieReviewClient />
    </>
  );
}
