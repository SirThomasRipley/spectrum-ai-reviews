import Link from 'next/link';

export const metadata = {
  title: 'Our Review Methodology - How We Test AI Tools | SpectrumAIReviews',
  description: 'Detailed explanation of our rigorous AI tool testing methodology, evaluation criteria, scoring system, and quality standards that ensure honest, comprehensive reviews.',
  keywords: 'AI tool testing methodology, review process, evaluation criteria, testing standards, quality assurance',
};

export default function MethodologyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Review Methodology
      </h1>

      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Transparency in how we test and evaluate AI tools to ensure you get reliable, actionable insights.
      </p>

      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-primary mb-8">
          <h2 className="font-bold text-xl mb-3">Our Commitment to Quality</h2>
          <p className="text-gray-700 leading-relaxed">
            Every AI tool review on SpectrumAIReviews follows a standardized, rigorous testing methodology designed
            to provide you with accurate, unbiased, and practical insights. We do not publish reviews based on brief demos
            or marketing materials. Each review represents extensive hands-on testing in real-world scenarios.
          </p>
        </div>
      </section>

      {/* The Review Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          The 7-Phase Review Process
        </h2>

        <p className="text-gray-700 mb-6">
          Our comprehensive review process typically spans 30-90 days and involves multiple team members to ensure
          thorough evaluation and eliminate individual bias.
        </p>

        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Initial Research & Setup</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 2-3 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Create accounts using multiple plan tiers (free, mid-tier, premium)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Review official documentation, tutorials, and support resources</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Analyze competitor landscape and positioning</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Establish testing baseline and success criteria</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Core Functionality Testing</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 7-14 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Systematic testing of all advertised features and capabilities</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Execution of 100+ standardized test cases across use cases</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Performance benchmarking (speed, accuracy, output quality)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>User interface and user experience evaluation</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Documentation of bugs, limitations, and unexpected behaviors</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Real-World Application Testing</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 14-21 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Integration into actual workflows and production environments</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Testing across multiple realistic use cases and scenarios</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Evaluation of workflow efficiency and time savings</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Assessment of learning curve for different skill levels</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Testing integration capabilities with other tools</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Performance & Reliability Analysis</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 7-14 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Platform uptime and reliability monitoring</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Processing speed and response time measurements</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Consistency testing across multiple sessions</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Error rate documentation and failure scenario analysis</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Load testing and peak performance evaluation</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Support & Documentation Evaluation</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 3-5 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Customer support responsiveness testing (email, chat, phone)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Quality assessment of help documentation and tutorials</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Community resources and forum activity evaluation</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Troubleshooting effectiveness and problem resolution</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Knowledge base completeness and accuracy</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 6 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Comparative Analysis</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 5-7 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Side-by-side comparison with direct competitors</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Pricing and value-for-money evaluation</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Feature parity analysis and unique selling points identification</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Market positioning and target audience fit assessment</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Industry trends and future-proofing evaluation</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 7 */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                7
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Review Writing & Editorial Process</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Duration:</strong> 3-5 days
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Comprehensive review drafting with all testing data</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Peer review by secondary expert reviewer</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Editorial review for accuracy, clarity, and completeness</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Fact-checking of all claims and statistics</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>Final scoring and recommendation formulation</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Evaluation Criteria
        </h2>

        <p className="text-gray-700 mb-6">
          We evaluate every AI tool across 15 core criteria, weighted by importance to typical users.
          Our scoring system uses a 10-point scale for each criterion.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Performance & Reliability (20%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Output quality and accuracy</li>
              <li>• Processing speed and efficiency</li>
              <li>• Platform uptime and stability</li>
              <li>• Consistency of results</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Features & Capabilities (18%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Feature completeness</li>
              <li>• Advanced functionality</li>
              <li>• Customization options</li>
              <li>• Integration capabilities</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Ease of Use (15%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• User interface design</li>
              <li>• Learning curve</li>
              <li>• Workflow efficiency</li>
              <li>• Accessibility features</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Value for Money (15%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Pricing structure fairness</li>
              <li>• ROI potential</li>
              <li>• Plan flexibility</li>
              <li>• Free tier adequacy</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Customer Support (12%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Response time</li>
              <li>• Support quality</li>
              <li>• Available channels</li>
              <li>• Problem resolution rate</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Documentation & Resources (10%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Documentation quality</li>
              <li>• Tutorial availability</li>
              <li>• Community resources</li>
              <li>• Best practices guides</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-primary">Innovation & Updates (10%)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Feature update frequency</li>
              <li>• Innovation leadership</li>
              <li>• Roadmap transparency</li>
              <li>• Beta feature access</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
          <h3 className="font-bold text-lg mb-3">Additional Assessment Factors</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <strong>Security & Privacy</strong>
              <p className="text-xs mt-1">Data handling, encryption, compliance</p>
            </div>
            <div>
              <strong>Scalability</strong>
              <p className="text-xs mt-1">Team collaboration, enterprise features</p>
            </div>
            <div>
              <strong>Mobile Experience</strong>
              <p className="text-xs mt-1">App quality, responsive design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Our Scoring System
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500 text-center">
            <div className="text-3xl font-bold text-green-700 mb-1">9.0-10</div>
            <div className="text-sm font-semibold text-green-800">Outstanding</div>
            <p className="text-xs text-gray-600 mt-2">Industry-leading, highly recommended</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500 text-center">
            <div className="text-3xl font-bold text-blue-700 mb-1">7.5-8.9</div>
            <div className="text-sm font-semibold text-blue-800">Excellent</div>
            <p className="text-xs text-gray-600 mt-2">Strong choice, recommended</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-500 text-center">
            <div className="text-3xl font-bold text-yellow-700 mb-1">6.0-7.4</div>
            <div className="text-sm font-semibold text-yellow-800">Good</div>
            <p className="text-xs text-gray-600 mt-2">Solid option with some limitations</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-500 text-center">
            <div className="text-3xl font-bold text-orange-700 mb-1">4.0-5.9</div>
            <div className="text-sm font-semibold text-orange-800">Average</div>
            <p className="text-xs text-gray-600 mt-2">Use with caution, limited cases</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-500 text-center">
            <div className="text-3xl font-bold text-red-700 mb-1">Below 4.0</div>
            <div className="text-sm font-semibold text-red-800">Poor</div>
            <p className="text-xs text-gray-600 mt-2">Not recommended</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-primary">
          <h3 className="font-bold mb-3">How We Calculate Final Scores</h3>
          <p className="text-gray-700 mb-3">
            Our final score is a weighted average of all evaluation criteria. We round to one decimal place
            to provide precision while maintaining readability. Each score represents the consensus of our
            review team, not a single reviewer&apos;s opinion.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> Scores are reassessed during quarterly updates. Tools that significantly
            improve or decline in quality will have their scores adjusted accordingly.
          </p>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Quality Standards & Ethics
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3">Editorial Independence</h3>
            <p className="text-gray-700">
              Our reviews are never influenced by affiliate relationships, sponsorships, or advertising.
              Review scores and recommendations are determined solely by our testing experience and analysis.
              We purchase or use trial versions of tools whenever possible to ensure unbiased evaluation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3">Disclosure Policy</h3>
            <p className="text-gray-700">
              When reviews include affiliate links, we clearly disclose this at the top of the article.
              We only recommend tools we have genuinely tested and would personally use or recommend to colleagues.
              We decline to review products that do not meet our minimum quality standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3">Update Commitment</h3>
            <p className="text-gray-700 mb-3">
              AI tools evolve rapidly. We commit to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>Quarterly reviews and updates for all published content</div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>Immediate updates when major features or pricing changes occur</div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>Clear display of &quot;Last Updated&quot; dates on all reviews</div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>Archiving outdated reviews rather than leaving incorrect information</div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-3">Correction Policy</h3>
            <p className="text-gray-700">
              If errors are discovered in our reviews, we correct them promptly. Significant corrections
              are noted at the top of the article with the date and nature of the correction. Minor corrections
              (typos, formatting) are made silently.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Environment */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-primary">
          Testing Environment & Tools
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-bold mb-3">Hardware & Software</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <strong className="text-gray-900">Desktop Testing:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• Windows 11 Pro (Dell XPS 15)</li>
                <li>• macOS Sonoma (MacBook Pro M3)</li>
                <li>• Ubuntu 22.04 LTS (ThinkPad X1)</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Mobile Testing:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• iOS 17 (iPhone 15 Pro)</li>
                <li>• Android 14 (Samsung Galaxy S24)</li>
                <li>• iPad Pro 12.9&quot; (iPadOS 17)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold mb-3">Browsers & Network</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <strong className="text-gray-900">Browsers Tested:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• Chrome (latest version)</li>
                <li>• Firefox (latest version)</li>
                <li>• Safari (latest version)</li>
                <li>• Edge (latest version)</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Network Conditions:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• High-speed fiber (1 Gbps)</li>
                <li>• Standard broadband (100 Mbps)</li>
                <li>• Mobile 4G/5G connections</li>
                <li>• Throttled connections (testing)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Methodology?</h2>
          <p className="text-lg mb-6">
            We welcome feedback and questions about our testing process
          </p>
          <div className="space-y-2">
            <p className="text-sm">Contact us: methodology@spectrumaireviews.com</p>
            <p className="text-sm opacity-90">
              Learn more about our team on our{' '}
              <Link href="/about" className="underline hover:opacity-80">About page</Link>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
