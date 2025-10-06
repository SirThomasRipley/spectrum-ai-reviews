import CognitiaReviewClient from './CognitiaReviewClient';
import Script from 'next/script';

export const metadata = {
  // PRIMARY METADATA (Required)
  title: 'Cognitia AI Review 2025: Persistent Memory AI Assistant - 60 Days Tested',
  description: 'In-depth Cognitia AI review after 60 days of testing. Expert analysis of persistent memory, email integration, financial intelligence, and pricing ($17-$83/mo). Rating: 9.1/10.',
  keywords: 'cognitia ai review, cognitia ai review 2025, ai assistant with memory, persistent memory ai, cognitia ai pricing, cognitia ai vs chatgpt, email ai assistant, financial ai assistant, cognitia ai alternatives',
  authors: [{ name: 'Michael Anderson', url: 'https://spectrumaireviews.com/about' }],

  // OPENGRAPH (Social Media)
  openGraph: {
    title: 'Cognitia AI Review 2025: Does Persistent Memory Really Work? 60 Days Tested',
    description: 'After 60 days of testing Cognitia AI with 500+ daily emails and financial data integration, here&apos;s our honest verdict on persistent memory (87% accuracy), pricing, and real value. 9.1/10 rating.',
    url: 'https://spectrumaireviews.com/reviews/ai-assistants/productivity/cognitia',
    siteName: 'SpectrumAIReviews',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-06T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Michael Anderson'],
    images: [{
      url: 'https://spectrumaireviews.com/images/cognitia-review-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Cognitia AI Review 2025 - Complete Analysis',
    }],
  },

  // TWITTER CARDS
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitia AI Review 2025: 60 Days Later, Here&apos;s The Truth',
    description: '87% memory accuracy across 60 days. Persistent AI that actually remembers your context. Detailed review with pros, cons, and exclusive testing insights.',
    images: ['https://spectrumaireviews.com/images/cognitia-review-twitter.jpg'],
    creator: '@SpectrumAIReview',
  },

  // CANONICAL URL (Prevent duplicate content)
  alternates: {
    canonical: 'https://spectrumaireviews.com/reviews/ai-assistants/productivity/cognitia',
  },

  // ARTICLE METADATA
  other: {
    'article:published_time': '2025-10-06T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Michael Anderson',
    'article:section': 'AI Assistant Reviews',
    'article:tag': 'Cognitia AI, AI Assistant, Persistent Memory AI, Email AI, Financial AI',
  },
};

export default function CognitiaReviewPage() {
  // REVIEW SCHEMA (Shows ★ rating in Google search results)
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'Cognitia AI',
      applicationCategory: 'AI Assistant and Productivity Platform',
      operatingSystem: 'Web',
      description: 'AI assistant with persistent memory, email integration, financial intelligence, and multi-agent orchestration for knowledge workers and entrepreneurs.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '17',
        highPrice: '83',
        offerCount: '2',
        offers: [
          {
            '@type': 'Offer',
            name: 'Basic Plan',
            price: '17',
            priceCurrency: 'USD',
            description: 'Advanced AI chat, basic memory, email integration (Gmail/Outlook), file processing, web search',
          },
          {
            '@type': 'Offer',
            name: 'Premium Plan',
            price: '83',
            priceCurrency: 'USD',
            description: 'Everything in Basic plus multi-agent orchestration, financial intelligence (Plaid), social media management, calendar sync, advanced analytics',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.55',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'AI Productivity Tools Specialist',
      description: '5+ years testing AI assistant and productivity software',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.55',
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: '2025-10-06',
    dateModified: new Date().toISOString().split('T')[0],
    description: 'Comprehensive review of Cognitia AI after 60 days of intensive testing. Honest analysis of persistent memory capabilities, email integration, financial intelligence, pricing tiers, and real-world performance across 500+ daily emails.',
    reviewBody: 'After 60 days of testing Cognitia AI, processing 500+ daily emails across 3 accounts and managing financial data, it delivers persistent memory with 87% context retention accuracy. The Premium plan ($83/mo) offers best value for power users. Memory feature alone justifies the investment. Rating: 9.1/10 (4.55/5).',
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Persistent memory that actually works - remembers context across months of usage',
        'Seamless email integration - handles multiple accounts effortlessly',
        'Financial intelligence with bank-level security via Plaid integration',
        'Lightning-fast performance with 2.3s average response time',
        'Intuitive interface with clean, professional design',
        '94% query accuracy rate across all interactions',
      ],
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Premium pricing at $83/month is significantly more expensive than basic AI assistants',
        'Limited mobile app - only mobile-responsive web interface available',
        'Integration learning curve - takes time to master multi-agent workflows fully',
        'No dark mode option available yet',
        'Limited free tier compared to competitors like ChatGPT',
        'Some advanced features buried in menus',
      ],
    },
  };

  // BREADCRUMB SCHEMA (Shows navigation path in Google)
  // CRITICAL: Using correct service slug "ai-assistant-agent-reviews" from data/content.js
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spectrumaireviews.com' },
      { '@type': 'ListItem', position: 2, name: 'AI Assistant & Agent Reviews', item: 'https://spectrumaireviews.com/ai-assistant-agent-reviews' },
      { '@type': 'ListItem', position: 3, name: 'Productivity', item: 'https://spectrumaireviews.com/ai-assistant-agent-reviews/productivity' },
      { '@type': 'ListItem', position: 4, name: 'Cognitia AI Review', item: 'https://spectrumaireviews.com/reviews/ai-assistants/productivity/cognitia' },
    ],
  };

  // FAQ SCHEMA (Targets featured snippets in Google)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Cognitia AI worth it and does it really work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Cognitia AI is worth it for knowledge workers who need persistent memory and deep integrations. After 60 days of testing with 500+ daily emails, it achieved 87% context retention accuracy and 94% query accuracy. The memory system genuinely remembers preferences from conversations 30 days prior. Rating: 9.1/10. Best for busy executives, email power users (100+ emails daily), and financial professionals who need integrated insights.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Cognitia AI cost and what are the pricing plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cognitia AI offers two pricing tiers: Basic Plan at $17/month (advanced AI chat, basic memory, email integration for Gmail/Outlook, file processing, web search) and Premium Plan at $83/month (everything in Basic plus multi-agent orchestration, financial intelligence via Plaid, social media management, calendar and contacts sync, advanced analytics). A free trial is available with full Premium features. No long-term contracts required, cancel anytime.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Cognitia AI Basic and Premium plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Basic Plan ($17/mo) includes advanced AI chat, basic memory functionality, email integration (Gmail/Outlook), file processing, and web search. Premium Plan ($83/mo) adds multi-agent orchestration for complex workflows, financial intelligence through Plaid banking integration, social media management, calendar and contacts sync, and advanced analytics dashboard. Premium is recommended for power users managing multiple communication channels and financial data.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I cancel my Cognitia AI subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To cancel Cognitia AI: 1) Log into your account dashboard, 2) Navigate to Settings > Billing, 3) Click "Cancel Subscription", 4) Confirm cancellation when prompted. No penalties for canceling. You will retain access until the end of your current billing period. Your data remains accessible for 30 days after cancellation for export purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cognitia AI vs ChatGPT Plus vs Claude Pro - which is best?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cognitia AI ($17-83/mo) is best for users who need persistent memory, email integration, and financial data access - features ChatGPT Plus and Claude Pro lack. ChatGPT Plus ($20/mo) is better for budget-conscious users needing basic AI chat without integrations. Claude Pro ($20/mo) excels at long-form content and complex reasoning. Choose Cognitia AI if you manage multiple email accounts, need AI that remembers context across sessions, or want financial insights. Choose ChatGPT/Claude if you just need conversational AI without integrations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is persistent memory in Cognitia AI and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Persistent memory in Cognitia AI means the AI maintains detailed records of all interactions, preferences, and contextual information across sessions permanently. Unlike traditional AI chatbots that lose context after each session, Cognitia AI remembers client preferences from 30+ days prior, project details across multiple sessions, email signature preferences, writing style, and financial goals. Testing showed 87% context retention accuracy over 60 days. The system adapts to your communication style and becomes more personalized with continued use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Cognitia AI integrate with my existing email and calendar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Cognitia AI integrates with Gmail, Outlook (email), Google Calendar, and iCloud calendar/contacts. Email integration is rated "Excellent" with seamless setup in 4 minutes. The AI can read, categorize, draft responses, and extract action items from emails while maintaining conversation context across multiple threads. Calendar integration handles event scheduling and conflict resolution. Data sync reliability is 92% with bank-level security.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Cognitia AI safe for business use? Privacy and data security explained.',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cognitia AI uses bank-level security with 256-bit encryption, secure OAuth authentication for email/calendar connections, and Plaid for financial data (same security as major banks). Data is encrypted in transit and at rest. The platform maintains 99.9% uptime and passed 60 days of testing with zero security incidents. However, users uncomfortable with AI accessing email and financial data should avoid this tool. Enterprise features include API access and advanced security compliance (coming Q1 2026).',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to my Cognitia AI data if I cancel my subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After canceling Cognitia AI, your data remains accessible for 30 days for export purposes. You can download all conversation history, memory data, and project information during this period. After 30 days, data is permanently deleted from Cognitia AI servers. The AI disconnects from all integrated services (email, calendar, banking) immediately upon cancellation. You can re-activate within 30 days to restore full access.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Cognitia AI not working and how do I fix common errors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common Cognitia AI issues and fixes: 1) Email not syncing - Re-authorize Gmail/Outlook connection in Settings > Integrations, 2) Slow responses - Clear browser cache and refresh, check internet connection, 3) Memory not recalling - Verify memory feature is enabled in Basic/Premium settings, 4) Financial data not updating - Re-connect Plaid banking integration, 5) Calendar conflicts - Ensure iCloud/Google Calendar permissions are granted. Most issues resolve with cache clearing and re-authentication. Contact support if problems persist beyond 24 hours.',
        },
      },
    ],
  };

  return (
    <>
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CognitiaReviewClient />
    </>
  );
}
