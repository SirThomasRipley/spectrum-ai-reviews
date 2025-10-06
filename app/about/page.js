import Link from 'next/link';

export const metadata = {
  title: 'About SpectrumAIReviews - Expert AI Tool Testing & Reviews',
  description: 'Learn about our rigorous AI tool testing methodology, expert review team, and commitment to providing unbiased, experience-based reviews for AI products.',
  keywords: 'about SpectrumAIReviews, AI tool testing, expert reviews, review methodology',
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About SpectrumAIReviews
      </h1>

      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Your trusted source for comprehensive, hands-on AI tool reviews based on real-world testing and expert analysis.
      </p>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Our Mission
        </h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-primary mb-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            At SpectrumAIReviews, we are dedicated to providing authentic, experience-based reviews of AI tools
            that help professionals, creators, and businesses make informed decisions. We believe in transparency,
            rigorous testing, and honest assessments backed by real-world usage.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          What Makes Us Different
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-4xl mb-3">🧪</div>
            <h3 className="font-bold text-lg mb-2">Hands-On Testing</h3>
            <p className="text-gray-700">
              Every tool we review undergoes a minimum 30-day testing period with real-world use cases.
              We do not write reviews based on marketing materials or brief demos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2">Data-Driven Analysis</h3>
            <p className="text-gray-700">
              Our reviews include quantitative performance metrics, comparative benchmarks, and documented
              testing scenarios to provide objective assessments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Practical Expertise</h3>
            <p className="text-gray-700">
              Our review team brings practical experience in digital marketing,
              content creation, and AI technology implementation across various use cases and industries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-4xl mb-3">💎</div>
            <h3 className="font-bold text-lg mb-2">Editorial Independence</h3>
            <p className="text-gray-700">
              While we may earn affiliate commissions, our reviews are never influenced by compensation.
              We maintain strict editorial independence and disclose all partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Review Team */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Our Review Team
        </h2>

        <div className="space-y-6 mb-8">
          {/* Lead Reviewer */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                MA
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900">Michael Anderson</h3>
                <p className="text-primary font-semibold mb-2">Lead Reviewer & Content Strategist</p>

                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Experience & Testing Approach:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>Extensive hands-on testing of AI tools across multiple categories</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>Focus on real-world use cases and practical applications</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>Minimum 30-day testing period for each reviewed tool</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>Data-driven analysis with quantified results and metrics</div>
                    </li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Review Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-primary text-primary">AI Video Generators</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-primary text-primary">Content Creation Tools</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-primary text-primary">Marketing Automation</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-primary text-primary">AI Writing Assistants</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 italic">
                  &quot;My goal is to cut through the marketing hype and provide honest, practical insights based on
                  extensive hands-on testing. Every review comes from weeks of real-world usage and documented results.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Team Approach */}
          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-bold text-lg mb-4">Our Collaborative Approach</h3>
            <p className="text-gray-700 mb-4">
              SpectrumAIReviews is supported by a team of researchers, writers, and testers who contribute to our review process.
              We work collaboratively to ensure comprehensive coverage of each tool&apos;s features, use cases, and performance.
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Research Team:</strong> Conducts market analysis, competitive research,
                  and feature comparisons to provide context for each review.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Testing Team:</strong> Performs hands-on testing across multiple use cases,
                  documenting performance metrics and real-world results.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Editorial Team:</strong> Ensures accuracy, clarity, and consistency across
                  all published reviews while maintaining editorial independence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Process Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Our Review Process
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Every AI tool review on SpectrumAIReviews follows a rigorous, standardized testing methodology
          to ensure consistency, accuracy, and practical value. Learn more about our detailed process on our{' '}
          <Link href="/methodology" className="text-primary hover:underline font-semibold">
            Review Methodology page
          </Link>.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-sm text-gray-600">Days minimum testing period</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-gray-600">Test cases per tool</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-gray-600">Evaluation criteria</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-gray-600">Expert reviewers minimum</div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
          <h3 className="font-bold text-lg mb-3">Our Testing Standards Include:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>Comprehensive feature evaluation across multiple real-world scenarios</div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>Performance benchmarking with quantitative metrics</div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>User experience assessment from beginner to advanced perspectives</div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>Pricing analysis and value-for-money evaluation</div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>Customer support testing and documentation review</div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>Comparative analysis against competing solutions</div>
            </li>
          </ul>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Trust & Transparency
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-gray-900">Editorial Independence</h3>
            <p className="text-gray-700 mb-3">
              Our reviews are written independently and are not influenced by affiliate relationships or sponsorships.
              We test tools using our own accounts and resources whenever possible.
            </p>
            <p className="text-gray-700">
              When we include affiliate links, we clearly disclose them. Our ratings and recommendations are based
              solely on our testing experience and expert analysis.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-gray-900">Continuous Updates</h3>
            <p className="text-gray-700">
              AI tools evolve rapidly. We commit to reviewing and updating our content quarterly to ensure accuracy.
              Each review includes a &quot;Last Updated&quot; date and testing period timeline for full transparency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-gray-900">Correction Policy</h3>
            <p className="text-gray-700">
              If we make an error, we correct it promptly and transparently. Significant corrections are noted
              at the top of the affected review with the date of correction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-gray-900">Reader Privacy</h3>
            <p className="text-gray-700">
              We respect your privacy and do not sell your data. See our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>{' '}
              for complete details on how we handle information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Contact Us
        </h2>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-primary">
          <p className="text-gray-700 mb-4">
            We welcome feedback, questions, and suggestions from our readers. Your insights help us improve our reviews
            and coverage.
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>General Inquiries:</strong> contact@spectrumaireviews.com</p>
            <p><strong>Review Corrections:</strong> corrections@spectrumaireviews.com</p>
            <p><strong>Partnership Inquiries:</strong> partnerships@spectrumaireviews.com</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Our Commitment to Quality
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-700">SSL encrypted, privacy-first approach</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-4xl mb-3">✍️</div>
            <h3 className="font-bold mb-2">Expert Written</h3>
            <p className="text-sm text-gray-700">All content by industry professionals</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-bold mb-2">Regularly Updated</h3>
            <p className="text-sm text-gray-700">Quarterly review updates minimum</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Start Exploring Our Reviews</h3>
        <p className="text-lg mb-6">
          Discover honest, experience-based reviews of the best AI tools available today
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
        >
          Browse AI Tool Reviews
        </Link>
      </div>
    </article>
  );
}
