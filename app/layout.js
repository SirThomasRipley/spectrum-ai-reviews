import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://spectrumaireviews.com'),
  title: {
    default: 'SpectrumAIReviews - Expert AI Tool Reviews & Comparisons',
    template: '%s | SpectrumAIReviews'
  },
  description: 'Trusted AI tool reviews by expert testers with 8+ years of experience. Rigorous hands-on testing, unbiased analysis, and comprehensive comparisons of the best AI software.',
  keywords: 'AI tool reviews, AI software comparison, expert AI reviews, unbiased AI product reviews, AI tool testing, best AI software',
  authors: [{ name: 'Michael Anderson', url: 'https://spectrumaireviews.com/about' }],
  creator: 'SpectrumAIReviews Editorial Team',
  publisher: 'SpectrumAIReviews',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spectrumaireviews.com',
    siteName: 'SpectrumAIReviews',
    title: 'SpectrumAIReviews - Expert AI Tool Reviews & Comparisons',
    description: 'Trusted AI tool reviews by expert testers. Rigorous testing, unbiased analysis, comprehensive comparisons.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SpectrumAIReviews - Expert AI Tool Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpectrumAIReviews - Expert AI Tool Reviews',
    description: 'Trusted AI tool reviews by expert testers. Rigorous testing & unbiased analysis.',
    creator: '@spectrumaireviews',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  // Organization Schema for E-E-A-T
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SpectrumAIReviews',
    url: 'https://spectrumaireviews.com',
    logo: 'https://spectrumaireviews.com/logo.png',
    description: 'Expert AI tool reviews and comparisons based on rigorous testing and real-world experience',
    foundingDate: '2021',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@spectrumaireviews.com',
      contactType: 'Editorial',
    },
    sameAs: [
      'https://twitter.com/spectrumaireviews',
      'https://linkedin.com/company/spectrumaireviews',
    ],
    founder: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'Senior Digital Marketing Specialist',
      description: '8+ years of experience in AI content creation and digital marketing',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'AI Software Reviews',
      'Machine Learning Tools',
      'Content Creation AI',
      'AI Video Generators',
      'AI Writing Tools',
      'AI Art Generators',
      'SEO Tools',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'Certified Digital Marketing Professional',
    },
  };

  // WebSite Schema for search
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SpectrumAIReviews',
    url: 'https://spectrumaireviews.com',
    description: 'Expert AI tool reviews and comparisons',
    publisher: {
      '@type': 'Organization',
      name: 'SpectrumAIReviews',
      logo: {
        '@type': 'ImageObject',
        url: 'https://spectrumaireviews.com/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://spectrumaireviews.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Fallback emoji rendering solution using Twemoji */}
        <Script
          id="twemoji-fallback"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Test if emojis render properly
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                ctx.textBaseline = 'top';
                ctx.font = '32px Arial';
                ctx.fillText('😀', 0, 0);
                const imageData = ctx.getImageData(16, 16, 1, 1).data;
                const isEmojiSupported = imageData[0] !== 0 || imageData[1] !== 0 || imageData[2] !== 0;
                
                // If emojis don't render properly, load Twemoji as fallback
                if (!isEmojiSupported) {
                  const script = document.createElement('script');
                  script.src = 'https://unpkg.com/twemoji@latest/dist/twemoji.min.js';
                  script.onload = function() {
                    if (window.twemoji) {
                      twemoji.parse(document.body, {
                        folder: 'svg',
                        ext: '.svg'
                      });
                    }
                  };
                  document.head.appendChild(script);
                }
              }
            `
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
