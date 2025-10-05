import GensparkReviewClient from './GensparkReviewClient';
import Script from 'next/script';

export const metadata = {
  title: 'Genspark AI Review 2025: Complete Analysis & Honest Verdict',
  description: 'In-depth Genspark AI review after 30 days of testing. Expert analysis of phone calling, Super Agent, Sparkpages, and pricing ($24.99/mo). Rating: 7.3/10. Read our honest verdict.',
  keywords: 'Genspark AI review, Genspark review 2025, AI assistant review, AI phone calling, Super Agent AI, Sparkpages review, Genspark pricing, AI research tool, Genspark vs ChatGPT, Genspark vs Perplexity',
  authors: [{ name: 'Michael Anderson', url: 'https://spectrumaireviews.com/about' }],
  openGraph: {
    title: 'Genspark AI Review 2025: Does It Really Work? Honest Analysis',
    description: 'After 30 days of testing Genspark AI, here is our honest verdict on phone calling (83% success rate), research quality, and real pricing. 7.3/10 rating.',
    url: 'https://spectrumaireviews.com/reviews/ai-assistants/productivity/genspark',
    siteName: 'SpectrumAIReviews',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Michael Anderson'],
    images: [
      {
        url: 'https://spectrumaireviews.com/images/genspark-review-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Genspark AI Review 2025 - Complete Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genspark AI Review 2025: Honest Analysis After 30 Days',
    description: 'Phone calling really works (83% success), but expect credit limits fast. Detailed review with pros, cons, and real testing data.',
    images: ['https://spectrumaireviews.com/images/genspark-review-twitter.jpg'],
    creator: '@SpectrumAIReview',
  },
  alternates: {
    canonical: 'https://spectrumaireviews.com/reviews/ai-assistants/productivity/genspark',
  },
  other: {
    'article:published_time': '2025-01-15T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Michael Anderson',
    'article:section': 'AI Assistant Reviews',
    'article:tag': 'Genspark AI, AI Assistant, Phone Calling AI, Research Tool',
  },
};

export default function GensparkReviewPage() {
  // Review Schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'Genspark AI',
      applicationCategory: 'AI Assistant & Agent',
      operatingSystem: 'Web, iOS, Android',
      description: 'AI-powered search engine and autonomous agent platform with phone calling capabilities',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '249.99',
        offerCount: '3',
        offers: [
          {
            '@type': 'Offer',
            name: 'Free Plan',
            price: '0',
            priceCurrency: 'USD',
            description: '200 daily credits',
          },
          {
            '@type': 'Offer',
            name: 'Plus Plan',
            price: '24.99',
            priceCurrency: 'USD',
            description: '10,000 credits per month',
          },
          {
            '@type': 'Offer',
            name: 'Pro Plan',
            price: '249.99',
            priceCurrency: 'USD',
            description: 'Unlimited features',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '7.3',
        bestRating: '10',
        worstRating: '1',
        ratingCount: '1',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'AI Productivity Tools Specialist',
      description: '5+ years testing AI assistants and productivity software',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '7.3',
      bestRating: '10',
      worstRating: '1',
    },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    description:
      'Comprehensive review of Genspark AI after 30 days of daily testing. Honest analysis of phone calling features, Super Agent capabilities, research quality, pricing, and real-world performance.',
    reviewBody:
      'After 30 days of testing Genspark AI, it delivers genuinely innovative features particularly the phone calling capability (83% success rate) and comprehensive research synthesis. However, reliability issues and opaque billing practices prevent it from being a wholehearted recommendation. Rating: 7.3/10.',
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Revolutionary phone calling capability - first AI that makes real calls',
        'Exceptional research synthesis with Sparkpages',
        'True multi-step automation with Super Agent',
        'Real-time web data access with citations',
        'Generous free tier (200 daily credits)',
      ],
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Inconsistent reliability - 15-20% failure rate in phone calls',
        'Opaque credit system - unpredictable consumption',
        'Limited support options - slow email response',
        'Subscription cancellation difficulties',
        'Missing enterprise features and compliance tools',
      ],
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://spectrumaireviews.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Assistant & Agent Reviews',
        item: 'https://spectrumaireviews.com/ai-assistant-agent-reviews',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Productivity',
        item: 'https://spectrumaireviews.com/ai-assistant-agent-reviews/productivity',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Genspark AI Review',
        item: 'https://spectrumaireviews.com/reviews/ai-assistants/productivity/genspark',
      },
    ],
  };

  // FAQ Schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can Genspark AI make phone calls that actually work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, after testing 25 phone calls, Genspark successfully completed 83% of basic tasks like reservation bookings and information gathering. However, complex conversations or noisy environments cause frequent failures.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Genspark AI cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genspark AI offers three plans: Free (200 daily credits), Plus ($24.99/month, 10,000 credits), and Pro ($249.99/month, unlimited features).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Genspark AI worth it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genspark AI is worth it for small business owners, content creators, and professionals who need phone assistance and can tolerate occasional failures with backup plans. Rating: 7.3/10. Not recommended for enterprise teams or mission-critical applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many credits does Genspark AI use per task?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Credit consumption varies unpredictably by task complexity. Based on testing: simple searches (10-25 credits), Sparkpages (40-200 credits), phone calls (100-250 credits), and image/video generation (200-500 credits). The 200 daily free credits typically last 3-4 hours of moderate use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Genspark AI not working and showing error messages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common error is "Error generating response" which occurred 3-5 times daily during testing. Solutions: refresh the page (works 80% of the time), clear browser cache, try a different browser, or wait 5-10 minutes. For persistent issues, check status.genspark.ai or their Twitter for service updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I cancel my Genspark AI subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no self-service cancellation button in account settings. You must email support@genspark.ai with your cancellation request. Include your account email, subscription plan, and request written confirmation. Expect 48-72 hour response time and 3-5 business days for processing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Genspark AI safe and secure for business use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genspark claims GDPR-level compliance with data encryption and anonymization. However, official security documentation is limited. Safe for general research and non-confidential tasks. Use with caution for client information or financial data. Avoid using for healthcare data (HIPAA), legal documents, or passwords.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to my data after canceling Genspark AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based on industry standards, data is likely retained for 30-90 days after cancellation before permanent deletion. Backups may persist for 12+ months. Users have GDPR rights to request data export or immediate deletion by emailing privacy@genspark.ai or support@genspark.ai. Export all Sparkpages and important content before canceling.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GensparkReviewClient />
    </>
  );
}
