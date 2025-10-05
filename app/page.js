import Link from 'next/link';
import { services } from '../data/content';
import Icon from '../components/Icon';
import Emoji from '../components/Emoji';
import Script from 'next/script';

export const metadata = {
  title: 'AI Tool Reviews 2025 | Best AI Software Reviews & Ratings - SpectrumAIReviews',
  description: 'Expert AI tool reviews 2025. Compare the best AI software with in-depth analysis, real user ratings, and unbiased testing. Find your perfect AI solution today.',
  keywords: 'AI tool reviews, best AI software 2025, AI product reviews, artificial intelligence tools comparison, AI software ratings',
  openGraph: {
    title: 'AI Tool Reviews 2025 | Expert Analysis of Best AI Software',
    description: 'Trusted AI tool reviews and comparisons. Get expert insights on the best AI software for content creation, SEO, writing, and more.',
    type: 'website',
    url: 'https://spectrumaireviews.com',
    siteName: 'SpectrumAIReviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tool Reviews 2025 | Best AI Software Reviews',
    description: 'Expert AI tool reviews & comparisons. Find the perfect AI solution for your needs.',
  },
  alternates: {
    canonical: 'https://spectrumaireviews.com',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SpectrumAIReviews',
    description: 'Expert reviews and comparisons of the best AI tools and software in 2025',
    url: 'https://spectrumaireviews.com',
    publisher: {
      '@type': 'Organization',
      name: 'SpectrumAIReviews',
      logo: {
        '@type': 'ImageObject',
        url: 'https://spectrumaireviews.com/logo.png',
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://spectrumaireviews.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Review',
            name: 'Zebracat AI Review 2025',
            url: 'https://spectrumaireviews.com/reviews/ai-art-generators/content-creation/zebracat',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.6',
              bestRating: '5',
              worstRating: '1'
            }
          }
        }
      ]
    }
  };

  const featuredReviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'Zebracat AI',
      applicationCategory: 'AI Video Generator',
      operatingSystem: 'Web',
    },
    author: {
      '@type': 'Person',
      name: 'Michael Anderson',
      jobTitle: 'Senior Digital Marketing Specialist',
    },
    datePublished: '2025-01-15',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.6',
      bestRating: '5',
      worstRating: '1'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SpectrumAIReviews'
    }
  };

  return (
    <>
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="json-ld-featured-review"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredReviewJsonLd) }}
      />

      <div className="container mx-auto px-4">
        {/* Hero Section with SEO-Optimized Content */}
        <section className="text-center py-20">
          <header>
            <h1 className="text-5xl md:text-7xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
              AI Tool Reviews 2025: Best AI Software Tested & Rated
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-secondary-foreground">
              <strong>Expert-tested AI tool reviews</strong> you can trust. We rigorously test and compare the best AI software
              to help you make informed decisions with our unbiased AI product reviews.
            </p>

            {/* Trust Signals */}
            <div className="mt-6 flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl"><Emoji label="checkmark">✅</Emoji></span>
                <span className="text-sm font-semibold">100% Unbiased</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl"><Emoji label="microscope">🔬</Emoji></span>
                <span className="text-sm font-semibold">Expert Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl"><Emoji label="chart">📊</Emoji></span>
                <span className="text-sm font-semibold">Data-Driven Analysis</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-center flex-wrap">
              <Link
                href="/reviews/ai-art-generators/content-creation/zebracat"
                className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity inline-block"
              >
                Read Featured Review <Emoji label="arrow right">→</Emoji>
              </Link>
              <Link
                href="#categories"
                className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all inline-block"
              >
                Browse All Reviews
              </Link>
            </div>
          </header>
        </section>

        {/* Featured Review Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl mb-20">
          <div className="px-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">FEATURED REVIEW</span>
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">EDITOR&apos;S CHOICE</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <Emoji label="clapper board">🎬</Emoji> Zebracat AI: Top-Rated AI Video Generator of 2025
            </h2>

            <article className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Why Zebracat Stands Out</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl"><Emoji label="checkmark">✔️</Emoji></span>
                      <span><strong>AI-Powered Excellence:</strong> Transform text to professional videos in minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl"><Emoji label="checkmark">✔️</Emoji></span>
                      <span><strong>30,000+ Active Users:</strong> Trusted by content creators worldwide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl"><Emoji label="checkmark">✔️</Emoji></span>
                      <span><strong>4.6/5 Rating:</strong> Based on 292+ verified user reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl"><Emoji label="checkmark">✔️</Emoji></span>
                      <span><strong>Cost-Effective:</strong> Save 70% compared to traditional video production</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold">Overall Rating</h4>
                      <div className="flex text-yellow-400 text-xl">
                        <Emoji label="5 star rating">⭐⭐⭐⭐⭐</Emoji>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Ease of Use</span>
                          <span>4.8/5</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div className="bg-primary rounded-full h-2" style={{width: '96%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Features</span>
                          <span>4.7/5</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div className="bg-primary rounded-full h-2" style={{width: '94%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Value for Money</span>
                          <span>4.5/5</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div className="bg-primary rounded-full h-2" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/reviews/ai-art-generators/content-creation/zebracat"
                      className="mt-6 block text-center bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Read Full Zebracat Review <Emoji label="arrow right">→</Emoji>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>Expert Verdict:</strong> &ldquo;After testing 20+ AI video generators, Zebracat consistently delivers
                  the best balance of quality, speed, and affordability. Perfect for content creators and marketers.&rdquo;
                  - <em>Michael Anderson, Senior Digital Marketing Specialist</em>
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Categories Section with Better SEO */}
        <section id="categories" className="py-20">
          <header>
            <h2 className="text-4xl font-bold font-display text-center mb-4">
              Browse AI Tool Reviews by Category
            </h2>
            <p className="text-center text-lg text-secondary-foreground max-w-3xl mx-auto mb-12">
              Find the perfect AI software for your needs. Each review includes detailed testing results,
              pricing comparisons, and real user feedback.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={service.id} className="group">
                <Link
                  href={`/${service.slug}`}
                  className="block p-8 bg-secondary rounded-lg border-2 border-transparent hover:border-primary transition-all hover:shadow-lg"
                >
                  <Icon name={service.icon} className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold font-display mb-2">{service.name}</h3>
                  <p className="text-secondary-foreground mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>Explore Reviews</span>
                    <Emoji
                      label="arrow right"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </Emoji>
                  </div>
                  {index === 1 && (
                    <div className="mt-4 text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                      <Emoji label="star">⭐</Emoji> Featured: Zebracat Review
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Trust and Authority Section */}
        <section className="py-16 bg-gray-50 rounded-2xl mb-20">
          <div className="px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Professionals Trust Our AI Tool Reviews
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white"><Emoji label="microscope">🔬</Emoji></span>
                </div>
                <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
                <p className="text-gray-600">
                  Each AI tool undergoes 40+ hours of hands-on testing across multiple use cases
                  before we publish our review.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white"><Emoji label="chart">📊</Emoji></span>
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven Analysis</h3>
                <p className="text-gray-600">
                  We benchmark performance, analyze pricing models, and compare features using
                  standardized testing protocols.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white"><Emoji label="people">👥</Emoji></span>
                </div>
                <h3 className="text-xl font-bold mb-2">Real User Insights</h3>
                <p className="text-gray-600">
                  Our reviews incorporate feedback from verified users and industry professionals
                  for balanced perspectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16">
          <article className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Your Complete Guide to AI Tool Reviews in 2025
            </h2>

            <p className="text-lg mb-6">
              The AI revolution has transformed how we work, create, and innovate. With thousands of
              <strong> AI tools and software solutions</strong> flooding the market in 2025, finding the right one
              for your specific needs has become increasingly challenging. That&apos;s where SpectrumAIReviews comes in.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              How We Review AI Software
            </h3>

            <p className="mb-6">
              Our <strong>AI tool review methodology</strong> is designed to provide you with comprehensive,
              unbiased insights. We evaluate each tool across multiple dimensions:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Performance Testing:</strong> Real-world benchmarks and speed tests</li>
              <li><strong>Feature Analysis:</strong> Deep dive into capabilities and limitations</li>
              <li><strong>User Experience:</strong> Interface design and learning curve assessment</li>
              <li><strong>Pricing Evaluation:</strong> Cost-benefit analysis and ROI calculations</li>
              <li><strong>Support Quality:</strong> Customer service responsiveness and documentation</li>
              <li><strong>Integration Capabilities:</strong> Compatibility with existing workflows</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Best AI Tools by Category in 2025
            </h3>

            <p className="mb-6">
              Our expert reviewers have identified the <strong>best AI software</strong> across key categories:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold mb-3"><Emoji label="clapper board">🎬</Emoji> AI Video Generation</h4>
              <p className="mb-2">
                Leading the pack is <strong>Zebracat AI</strong>, our top-rated video generation tool.
                With its intuitive text-to-video capabilities and professional-quality output, it&apos;s
                revolutionizing content creation for marketers and creators alike.
              </p>
              <Link href="/reviews/ai-art-generators/content-creation/zebracat" className="text-primary font-semibold hover:underline">
                Read our complete Zebracat review <Emoji label="arrow right">→</Emoji>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold mb-3"><Emoji label="writing hand">✍️</Emoji> AI Writing Tools</h4>
              <p>
                From blog posts to marketing copy, AI writing assistants are transforming content creation.
                Our reviews cover the latest GPT-4 powered tools and specialized writing software.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold mb-3"><Emoji label="artist palette">🎨</Emoji> AI Art Generators</h4>
              <p>
                Explore our in-depth reviews of Midjourney, DALL-E 3, Stable Diffusion, and emerging
                AI art platforms that are redefining creative possibilities.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Making Informed Decisions About AI Tools
            </h3>

            <p className="mb-6">
              Choosing the right <strong>AI product</strong> requires careful consideration of your specific needs,
              budget, and technical requirements. Our <strong>AI tool reviews</strong> provide you with:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Side-by-side comparisons of competing products</li>
              <li>Real user testimonials and case studies</li>
              <li>Free trial recommendations and discount codes</li>
              <li>Implementation guides and best practices</li>
              <li>Regular updates as tools evolve and improve</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h4 className="font-bold mb-2"><Emoji label="lightbulb">💡</Emoji> Pro Tip for Choosing AI Tools</h4>
              <p>
                Always start with a free trial when available. Our reviews indicate which tools offer
                risk-free trials, helping you test features before committing to a subscription.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Stay Updated with AI Innovation
            </h3>

            <p className="mb-6">
              The AI landscape evolves rapidly. New tools launch weekly, existing platforms add features
              monthly, and pricing models shift regularly. SpectrumAIReviews keeps you informed with:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Weekly updates on new AI tool releases</li>
              <li>Quarterly market analysis reports</li>
              <li>Breaking news on major AI developments</li>
              <li>Expert predictions on emerging trends</li>
            </ul>

            <p className="text-lg font-semibold">
              Ready to find your perfect AI solution? Explore our comprehensive reviews and make
              confident decisions backed by expert analysis and real-world testing.
            </p>
          </article>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl text-white text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect AI Tool Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 50,000+ professionals who rely on our expert reviews to choose the best AI software
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/reviews/ai-art-generators/content-creation/zebracat"
              className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Start with Our Top Pick <Emoji label="arrow right">→</Emoji>
            </Link>
            <Link
              href="#categories"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all inline-block"
            >
              Browse All Categories
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
