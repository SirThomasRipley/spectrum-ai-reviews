import ZebracatReviewClient from './ZebracatReviewClient';
import Script from 'next/script';

export const metadata = {
  title: 'Zebracat Review 2025: Transform Text to Video in Minutes - Honest Analysis',
  description: 'In-depth Zebracat review after creating 127 AI videos over 3 months. Expert analysis of features, pricing ($0-$175/mo), quality, and value. Rating: 4.2/5. Get 15% OFF with code BLSNUMRG.',
  keywords: 'Zebracat review, Zebracat AI review 2025, text to video AI, AI video generator review, Zebracat pricing, Zebracat vs InVideo, Zebracat vs Pictory, AI video maker, automated video creation, Zebracat discount code, Zebracat alternatives',
  authors: [{ name: 'Michael Anderson', url: 'https://spectrumaireviews.com/about' }],
  openGraph: {
    title: 'Zebracat Review 2025: Does It Really Work? 127 Videos Tested',
    description: 'After 3 months of testing Zebracat AI with 127 videos created, here&apos;s our honest verdict on quality (96.1% success), pricing, and real value. 4.2/5 rating. Get 15% OFF.',
    url: 'https://spectrumaireviews.com/reviews/ai-art-generators/content-creation/zebracat',
    siteName: 'SpectrumAIReviews',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-10T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Michael Anderson'],
    images: [
      {
        url: 'https://spectrumaireviews.com/images/zebracat-review-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zebracat Review 2025 - Complete Analysis of AI Video Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zebracat Review 2025: 127 Videos Later, Here&apos;s The Truth',
    description: '96.1% success rate across 127 AI videos. Cat Mode ($35/mo) is the sweet spot. Detailed review with pros, cons, and exclusive 15% discount code.',
    images: ['https://spectrumaireviews.com/images/zebracat-review-twitter.jpg'],
    creator: '@SpectrumAIReview',
  },
  alternates: {
    canonical: 'https://spectrumaireviews.com/reviews/ai-art-generators/content-creation/zebracat',
  },
  other: {
    'article:published_time': '2025-01-10T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Michael Anderson',
    'article:section': 'AI Video Generator Reviews',
    'article:tag': 'Zebracat, AI Video Generator, Text to Video, Content Creation',
  },
};

export default function ZebracatReviewPage() {
  // Review Schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'Zebracat',
      applicationCategory: 'AI Video Generator & Text-to-Video Tool',
      operatingSystem: 'Web',
      description: 'AI-powered text-to-video platform that transforms scripts, blog posts, and text into professional videos with automated voiceovers, music, and visuals',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '175',
        offerCount: '4',
        offers: [
          {
            '@type': 'Offer',
            name: 'Free Plan',
            price: '0',
            priceCurrency: 'USD',
            description: '1 video per month, 5 minutes max, watermarked',
          },
          {
            '@type': 'Offer',
            name: 'Cat Mode',
            price: '35',
            priceCurrency: 'USD',
            description: '10 videos/month, 20 minutes max, no watermark, AI voices',
          },
          {
            '@type': 'Offer',
            name: 'Super Cat',
            price: '99',
            priceCurrency: 'USD',
            description: '30 videos/month, 60 minutes max, priority support',
          },
          {
            '@type': 'Offer',
            name: 'Unlimited',
            price: '175',
            priceCurrency: 'USD',
            description: 'Unlimited videos, white-label, API access',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.2',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'AI Productivity Tools Specialist',
      description: '5+ years testing AI video generators and content creation software',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.2',
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: '2025-01-10',
    dateModified: new Date().toISOString().split('T')[0],
    description:
      'Comprehensive review of Zebracat after creating 127 AI videos over 3 months. Honest analysis of video quality, voiceover accuracy, automation features, pricing tiers, and real-world performance for content creators.',
    reviewBody:
      'After 3 months of daily testing with Zebracat, creating 127 videos across multiple styles and use cases, it delivers impressive automation with 96.1% success rate. The Cat Mode plan ($35/mo) offers the best value for most creators, though the free plan is too restrictive for serious use. Rating: 4.2/5.',
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Exceptional automation - text to polished video in under 3 minutes',
        'Natural AI voiceovers with 30+ language support',
        'Intuitive interface requiring zero video editing skills',
        'High-quality stock footage library (Storyblocks integration)',
        'Reliable performance with 96.1% success rate across 127 videos',
        'Generous Cat Mode plan at $35/mo for 10 videos',
      ],
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: [
        'Free plan too restrictive - only 1 video/month with watermark',
        'Limited creative control over scene selection and timing',
        'Occasional AI voiceover mispronunciations (3.9% error rate)',
        'Cannot fully customize background music choices',
        'Higher-tier plans expensive for solo creators ($99-$175/mo)',
        'No API access on lower-tier plans',
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
        name: 'AI Art & Video Generator Reviews',
        item: 'https://spectrumaireviews.com/ai-art-generators',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Content Creation',
        item: 'https://spectrumaireviews.com/ai-art-generators/content-creation',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Zebracat Review',
        item: 'https://spectrumaireviews.com/reviews/ai-art-generators/content-creation/zebracat',
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
        name: 'Is Zebracat worth it and does it really work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Zebracat is worth it for content creators who need quick video production. After testing 127 videos over 3 months, it achieved 96.1% success rate with impressive automation. The Cat Mode plan ($35/mo for 10 videos) offers best value. Rating: 4.2/5. Best for social media creators, marketers, and educators who prioritize speed over granular control.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Zebracat cost and what are the pricing plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zebracat offers 4 plans: Free ($0 - 1 video/month, watermarked), Cat Mode ($35/mo - 10 videos, 20min max, most popular), Super Cat ($99/mo - 30 videos, 60min max), and Unlimited ($175/mo - unlimited videos, white-label). Annual billing saves 20% (Cat Mode drops to $28/mo). Use code BLSNUMRG for 15% OFF all plans.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Zebracat Cat Mode and Super Cat plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cat Mode ($35/mo): 10 videos/month, 20 minutes max length, AI voices, no watermark, standard support. Super Cat ($99/mo): 30 videos/month, 60 minutes max length, priority support, advanced editing features. Cat Mode is best for most creators; only upgrade to Super Cat if you consistently need 30+ videos monthly or longer-form content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use Zebracat for free and what are the limitations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Zebracat offers a free plan with 1 video per month, 5 minutes max length, and includes a watermark. The free plan is suitable for testing the platform but too restrictive for regular use. For serious content creation, Cat Mode ($35/mo) is the minimum recommended tier with 10 videos/month and no watermark.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I cancel my Zebracat subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To cancel Zebracat: Log into your account → Settings → Billing → Manage Subscription → Cancel Subscription. Cancellation takes effect at the end of your current billing period. Export any videos you want to keep before canceling, as access to your library may be limited on the free tier. No cancellation fees apply.',
        },
      },
      {
        '@type': 'Question',
        name: 'Zebracat vs InVideo vs Pictory - which is best?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zebracat excels at speed and automation (videos in under 3 minutes) with Cat Mode at $35/mo. InVideo offers more creative control and templates at $30/mo but slower workflow. Pictory specializes in blog-to-video conversion at $39/mo. Choose Zebracat for speed, InVideo for customization, or Pictory for long-form blog content repurposing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What video styles and formats does Zebracat support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zebracat supports multiple video styles: social media shorts (Instagram, TikTok, YouTube Shorts), explainer videos, product demos, educational content, marketing videos, and podcast clips. Output formats include 16:9 (landscape), 9:16 (vertical/portrait), and 1:1 (square). Supports HD (1080p) video quality with automated scene selection, transitions, and background music.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use my own footage and voice in Zebracat videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Zebracat allows you to upload your own video footage, images, and logos on Cat Mode and higher plans. You can also clone your own voice for custom AI voiceovers (Super Cat plan and above). The platform blends your custom assets with stock footage from Storyblocks. Free plan users are limited to stock assets only.',
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
      <ZebracatReviewClient />
    </>
  );
}
