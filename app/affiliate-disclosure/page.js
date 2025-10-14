import Link from 'next/link';

export const metadata = {
  title: 'Affiliate Disclosure & Review Independence Policy | SpectrumAIReviews',
  description: 'Complete transparency about how SpectrumAIReviews earns money through affiliate links, our rigorous testing methodology, and why our affiliate relationships don&apos;t compromise our honest reviews.',
  keywords: 'affiliate disclosure, FTC compliance, review independence, honest reviews, affiliate marketing transparency, AI tool reviews',

  openGraph: {
    title: 'Affiliate Disclosure & Review Independence Policy',
    description: 'How SpectrumAIReviews earns money through affiliate links while maintaining editorial independence and honest, unbiased reviews.',
    url: 'https://spectrumaireviews.com/affiliate-disclosure',
    siteName: 'SpectrumAIReviews',
    locale: 'en_US',
    type: 'article',
  },

  twitter: {
    card: 'summary',
    title: 'Affiliate Disclosure & Review Independence Policy',
    description: 'Complete transparency about how we earn money and maintain review independence.',
  },

  alternates: {
    canonical: 'https://spectrumaireviews.com/affiliate-disclosure',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Affiliate Disclosure & Review Independence Policy
          </h1>
          <p className="text-xl text-white/90">
            Complete transparency about how we earn money, test products, and maintain editorial independence
          </p>
          <p className="mt-4 text-sm text-white/80">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">

          {/* Commitment to Transparency */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Commitment to Transparency</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-semibold text-gray-900">
                SpectrumAIReviews.com participates in affiliate marketing programs. This means when you purchase products through links on our site, we may earn a commission at no additional cost to you. This disclosure explains exactly how we earn money, how we test products, and why our affiliate relationships don&apos;t compromise the integrity of our reviews.
              </p>
              <p className="text-lg mt-4">
                <strong>Here&apos;s the simple truth:</strong> We&apos;re not a marketing company pretending to review products. We&apos;re product reviewers who use affiliate links to fund our testing. There&apos;s a big difference.
              </p>
            </div>
          </section>

          {/* What Are Affiliate Links */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Are Affiliate Links? (Plain English Explanation)</h2>
            <div className="prose prose-lg max-w-none">
              <p>If you&apos;re not familiar with affiliate marketing, here&apos;s how it works:</p>
              <p>
                When you click a link on our site to a product like <strong>Zebracat</strong> or <strong>Genspark AI</strong> and make a purchase, the company pays us a commission—typically between 10-30% of the sale price. <strong>The price you pay is exactly the same</strong> whether you use our link or go directly to their website.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Example:</h3>
                <ul className="space-y-2">
                  <li>You read our Zebracat review and decide to purchase the Pro plan ($83/month)</li>
                  <li>You click our affiliate link and complete your purchase</li>
                  <li>Zebracat pays us approximately $16-25 as a commission</li>
                  <li>Your price remains $83/month—no markup, no hidden fees</li>
                </ul>
              </div>

              <p className="font-semibold">You are never obligated to use our links.</p>
              <p>You can:</p>
              <ul>
                <li>Go directly to the vendor&apos;s website</li>
                <li>Compare prices elsewhere</li>
                <li>Use a different review site&apos;s links</li>
                <li>Negotiate your own deal with the vendor</li>
              </ul>
              <p>Our reviews remain valuable whether you purchase through our links or not.</p>
            </div>
          </section>

          {/* Editorial Independence */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">How We Maintain Editorial Independence</h2>

            <h3 className="text-2xl font-bold mb-3 text-gray-700 mt-6">Our Testing Comes First, Commissions Come Second</h3>
            <div className="prose prose-lg max-w-none">
              <p>
                Here&apos;s the critical part: <strong>We don&apos;t choose which products to test based on commission rates.</strong> We test products our readers care about, regardless of whether they have affiliate programs.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                <h4 className="text-lg font-bold mb-2">Real examples of our independence:</h4>
                <ul className="space-y-2">
                  <li><strong>OpenArt AI</strong> pays us a commission but received a <strong>4.3/5 rating</strong> because that&apos;s what it earned after testing</li>
                  <li><strong>GetGenie AI</strong> received <strong>8.5/10</strong> despite offering competitive commissions—we documented limitations in WordPress-only compatibility</li>
                  <li>We&apos;ve turned down partnership opportunities for products that didn&apos;t meet our quality standards</li>
                  <li>We regularly include &quot;cons&quot; sections with 6 negative points even for high-commission products</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-gray-700 mt-6">We Give Honest Ratings, Even When It Costs Us Money</h3>
            <div className="prose prose-lg max-w-none">
              <p>Our ratings are based on <strong>quantified testing data</strong>, not marketing relationships:</p>
              <ul>
                <li><strong>Zebracat:</strong> 4.2/5 stars after creating 127 videos across 5 content types over 3 months</li>
                <li><strong>Genspark AI:</strong> 7.3/10 after making 47 real phone calls and testing the Super Agent feature</li>
                <li><strong>GetGenie AI:</strong> 8.5/10 after generating 150+ articles across 33 languages</li>
              </ul>
              <p>When a product underperforms, we say so—even if it means losing potential commission income.</p>
            </div>
          </section>

          {/* Review Process */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Comprehensive Review Process</h2>
            <h3 className="text-2xl font-bold mb-3 text-gray-700">How We Actually Test Products</h3>
            <div className="prose prose-lg max-w-none">
              <p>Every review on SpectrumAIReviews follows the same rigorous process:</p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">1. Product Acquisition</h4>
                  <ul>
                    <li>We purchase products with our own money, OR</li>
                    <li>We receive review units from vendors (always disclosed on the specific review page)</li>
                    <li>Free products don&apos;t receive preferential treatment</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">2. Testing Period</h4>
                  <ul>
                    <li><strong>Minimum testing period:</strong> 30 days</li>
                    <li><strong>Typical testing period:</strong> 60-90 days</li>
                    <li><strong>Extended tests:</strong> Some products tested for 3+ months</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">3. Quantified Testing Methodology</h4>
                  <p>We don&apos;t rely on vague impressions. Every review includes specific metrics:</p>
                  <ul>
                    <li>Number of units created (emails, videos, articles, images)</li>
                    <li>Success rate percentages (quality scores, accuracy rates)</li>
                    <li>Time tracking (hours of active use, setup time)</li>
                    <li>Multiple use case testing (business, personal, creative)</li>
                    <li>Performance benchmarks (speed, reliability, feature depth)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">4. Expert Analysis</h4>
                  <ul>
                    <li><strong>Author:</strong> Michael Anderson, AI Productivity Tools Specialist</li>
                    <li><strong>Experience:</strong> 5+ years testing AI software, 50+ products reviewed</li>
                    <li><strong>Credentials:</strong> Former content strategist, published industry expert</li>
                    <li><strong>Approach:</strong> Balanced analysis with 6 pros and 6 cons for every product</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">5. Verification & Updates</h4>
                  <ul>
                    <li>Pricing verified against official vendor websites</li>
                    <li>Features tested in real-world scenarios</li>
                    <li>Screenshots and data capture for evidence</li>
                    <li>Regular updates when products change significantly</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4">
                <strong>Learn more about our methodology:</strong>{' '}
                <Link href="/methodology" className="text-blue-600 hover:underline font-semibold">
                  Review Methodology Page
                </Link>
              </p>
            </div>
          </section>

          {/* What We Disclose */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What We Disclose (FTC Compliance)</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The <strong>Federal Trade Commission (FTC)</strong> requires us to clearly disclose material connections with vendors. Here&apos;s what we always disclose:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-bold mb-3">On Every Review Page</h3>
                <p>You&apos;ll see a prominent blue disclosure banner at the top of every review that contains affiliate links:</p>
                <blockquote className="bg-white p-4 rounded border-l-4 border-blue-600 mt-4">
                  <p className="text-sm italic">
                    &quot;<strong>Transparency Notice:</strong> This review contains affiliate links. We may earn a commission if you purchase through our links at no additional cost to you. We purchased a [Product] [Plan] subscription for this review and tested it for [X timeframe] across [Y projects]. <Link href="/methodology" className="underline">Learn more about our review process</Link>&quot;
                  </p>
                </blockquote>
              </div>

              <h3 className="text-xl font-bold mb-2 mt-6">In Our Content</h3>
              <ul>
                <li><strong>Affiliate commissions:</strong> When we earn money from product sales</li>
                <li><strong>Free products:</strong> When vendors provide review units at no cost</li>
                <li><strong>Sponsored content:</strong> Rare, always clearly labeled as &quot;Sponsored&quot; or &quot;Paid Partnership&quot;</li>
                <li><strong>Brand partnerships:</strong> Any ongoing relationships beyond one-time reviews</li>
                <li><strong>Referral bonuses:</strong> If we receive additional compensation for signups</li>
              </ul>

              <h3 className="text-xl font-bold mb-2 mt-6">Material Connections</h3>
              <p>We disclose ALL material connections as defined by the FTC, including:</p>
              <ul>
                <li>Financial relationships (commissions, fees, payments)</li>
                <li>Free or discounted products provided for review</li>
                <li>Business relationships (consulting, advisory roles)</li>
                <li>Personal relationships (if reviewing a friend&apos;s product)</li>
              </ul>
              <p className="font-semibold">
                If there&apos;s any relationship that could affect how readers perceive our review, we disclose it.
              </p>
            </div>
          </section>

          {/* Trust & E-E-A-T */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why You Can Trust Our Reviews</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-2">E-E-A-T Principles</h3>
              <p>Our reviews follow Google&apos;s <strong>E-E-A-T</strong> quality guidelines:</p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Experience</h4>
                  <p className="text-sm">First-hand testing with real data, quantified results, screenshots, and usage examples</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expertise</h4>
                  <p className="text-sm">5+ years testing AI tools, qualified reviewers with industry knowledge</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Authoritativeness</h4>
                  <p className="text-sm">Published reviews, cited by industry publications, growing reputation</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Trustworthiness</h4>
                  <p className="text-sm">Complete transparency, balanced reviews, affiliate relationships don&apos;t influence ratings</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 mt-6">Balanced Reviews, Always</h3>
              <p>Every SpectrumAIReviews product review includes:</p>
              <ul>
                <li>✅ <strong>6 Pros:</strong> Genuine strengths we discovered during testing</li>
                <li>✅ <strong>6 Cons:</strong> Real limitations, frustrations, and weaknesses</li>
                <li>✅ <strong>Pricing breakdown:</strong> All tiers with honest value assessments</li>
                <li>✅ <strong>Who should buy:</strong> Specific recommendations for target users</li>
                <li>✅ <strong>Who should NOT buy:</strong> Honest assessment of poor fits</li>
                <li>✅ <strong>Alternatives:</strong> Competing products that might work better</li>
              </ul>
              <p className="font-semibold">
                We never write purely promotional reviews. If a product has 6 cons, we list them—even if it costs us commission income.
              </p>
            </div>
          </section>

          {/* Products We Don't Promote */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Products We DON&apos;T Promote</h2>
            <div className="prose prose-lg max-w-none">
              <p>To maintain credibility, we have strict policies about what we won&apos;t do:</p>
              <ul className="space-y-2">
                <li>❌ <strong>We don&apos;t review products we haven&apos;t tested</strong> – No &quot;research-based&quot; reviews</li>
                <li>❌ <strong>We don&apos;t accept payment for positive reviews</strong> – Vendors cannot buy ratings</li>
                <li>❌ <strong>We don&apos;t suppress negative findings</strong> – If a product fails, we document it</li>
                <li>❌ <strong>We don&apos;t recommend products solely for high commissions</strong> – Our recommendations ignore commission rates</li>
                <li>❌ <strong>We don&apos;t create fake comparison content</strong> – Our comparisons test real features</li>
                <li>❌ <strong>We don&apos;t use deceptive tactics</strong> – No fake countdown timers or false scarcity</li>
              </ul>
            </div>
          </section>

          {/* Affiliate Programs */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Specific Affiliate Programs We Participate In</h2>
            <div className="prose prose-lg max-w-none">
              <p>SpectrumAIReviews is a participant in the following affiliate programs:</p>

              <h3 className="text-xl font-bold mb-2 mt-4">Standard Affiliate Networks</h3>
              <ul>
                <li><strong>Amazon Associates:</strong> Earns from qualifying purchases (AI books, hardware)</li>
                <li><strong>ShareASale:</strong> Multiple AI software vendors</li>
                <li><strong>Impact:</strong> Partnership platform for AI tools</li>
                <li><strong>CJ Affiliate (Commission Junction):</strong> Various technology products</li>
                <li><strong>PartnerStack:</strong> SaaS and AI software partnerships</li>
              </ul>

              <h3 className="text-xl font-bold mb-2 mt-4">Direct Affiliate Programs</h3>
              <p>We maintain direct affiliate relationships with vendors including:</p>
              <ul>
                <li>AI writing tools (Jasper, GetGenie, etc.)</li>
                <li>AI art generators (Midjourney, Zebracat, OpenArt, etc.)</li>
                <li>AI SEO tools (Surfer SEO, etc.)</li>
                <li>AI assistants and agents (Genspark, Cognitia, etc.)</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6">
                <h3 className="text-lg font-bold mb-2">Amazon Associates Specific Disclosure</h3>
                <p className="text-sm">
                  SpectrumAIReviews.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                </p>
              </div>
            </div>
          </section>

          {/* Reader Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Rights as a Reader</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-2">You Are Always in Control</h3>
              <p><strong>You have the right to:</strong></p>
              <ul>
                <li>✅ <strong>Choose not to use our affiliate links</strong> – Navigate directly to vendor websites</li>
                <li>✅ <strong>Comparison shop elsewhere</strong> – Check other review sites or Reddit discussions</li>
                <li>✅ <strong>Question our recommendations</strong> – Email us with concerns or disagreements</li>
                <li>✅ <strong>Know how we&apos;re compensated</strong> – This disclosure provides full transparency</li>
                <li>✅ <strong>Request corrections</strong> – If you find errors, we&apos;ll investigate and correct them</li>
                <li>✅ <strong>Understand our testing</strong> – Our <Link href="/methodology" className="text-blue-600 hover:underline">Methodology page</Link> explains everything</li>
              </ul>

              <h3 className="text-xl font-bold mb-2 mt-4">No Pressure, No Obligation</h3>
              <p>We want you to make informed decisions, not rushed purchases:</p>
              <ul>
                <li>We don&apos;t use fake countdown timers or artificial urgency</li>
                <li>We don&apos;t claim &quot;exclusive&quot; deals that aren&apos;t actually exclusive</li>
                <li>We present alternatives and competing products</li>
                <li>We clearly state who should NOT buy each product</li>
              </ul>
              <p className="font-semibold">
                Our goal: Help you find the right AI tool for your needs, regardless of whether you purchase through our links.
              </p>
            </div>
          </section>

          {/* Our Promise */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Promise to You</h2>
            <div className="prose prose-lg max-w-none">
              <p><strong>We promise to:</strong></p>
              <ul className="space-y-2">
                <li>✅ Always disclose affiliate relationships prominently on every review page</li>
                <li>✅ Test products thoroughly with quantified, real-world data</li>
                <li>✅ Provide balanced reviews with pros and cons</li>
                <li>✅ Never accept payment for positive reviews</li>
                <li>✅ Update this disclosure when our practices or partnerships change</li>
                <li>✅ Respond to reader questions about our affiliate relationships</li>
                <li>✅ Prioritize your interests over commission income</li>
              </ul>

              <p className="mt-4"><strong>What we ask from you:</strong></p>
              <ul>
                <li>Understand that affiliate commissions help us fund thorough product testing</li>
                <li>Trust that our ratings reflect actual testing data, not financial incentives</li>
                <li>Use our links when our reviews help you make a decision (but you&apos;re never obligated)</li>
                <li>Contact us if you have concerns about any review or partnership</li>
              </ul>
            </div>
          </section>

          {/* Legal Compliance */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Legal Compliance Statement</h2>
            <div className="prose prose-lg max-w-none">
              <p>This disclosure is designed to comply with:</p>
              <ul>
                <li><strong>FTC 16 CFR Part 255</strong> (Endorsements and Testimonials)</li>
                <li><strong>FTC Truth in Advertising regulations</strong></li>
                <li><strong>State consumer protection laws</strong></li>
                <li><strong>Platform-specific disclosure requirements</strong> (Amazon Associates, etc.)</li>
              </ul>
              <p className="text-sm mt-4 italic">
                <strong>Disclaimer:</strong> This disclosure is not legal advice. It reflects our understanding of FTC guidelines and our commitment to transparency with our readers.
              </p>
            </div>
          </section>

          {/* Contact & Questions */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Questions About This Disclosure</h2>
            <div className="prose prose-lg max-w-none">
              <p>If you have questions about our affiliate relationships, review process, or this disclosure:</p>
              <ul>
                <li><strong>Email:</strong> contact@spectrumaireviews.com</li>
                <li><strong>Response time:</strong> Within 48 hours</li>
                <li><strong>Subject line:</strong> &quot;Affiliate Disclosure Question&quot;</li>
              </ul>

              <h3 className="text-xl font-bold mb-2 mt-6">Learn More About FTC Guidelines</h3>
              <p>This disclosure complies with the Federal Trade Commission&apos;s 16 CFR Part 255.</p>
              <p><strong>Want to learn more about FTC affiliate disclosure requirements?</strong></p>
              <ul>
                <li>
                  <a
                    href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    FTC Endorsement Guides
                  </a> (Official FTC resource)
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-2 mt-6">Additional Resources on Our Site</h3>
              <ul>
                <li><Link href="/methodology" className="text-blue-600 hover:underline">Review Methodology</Link> – How we test products and calculate ratings</li>
                <li><Link href="/about" className="text-blue-600 hover:underline">About Us</Link> – Meet our team and learn our story</li>
              </ul>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Final Thoughts: Why Transparency Matters</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Affiliate marketing gets a bad reputation because many sites hide their financial relationships or write purely promotional &quot;reviews&quot; designed to maximize commissions.
              </p>
              <p className="font-semibold">We chose a different path.</p>
              <p>
                We believe transparency builds trust. We believe honest reviews—with real pros and cons—serve our readers better than promotional fluff. We believe disclosing our affiliate relationships upfront makes our recommendations MORE credible, not less.
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-4">
                Bottom line: We earn money when you purchase products through our links. But we earn your trust by being honest about what works, what doesn&apos;t, and how we actually tested each product.
              </p>
              <p>
                Thank you for reading SpectrumAIReviews and trusting us to help you navigate the rapidly evolving world of AI tools.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
