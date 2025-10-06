import Link from 'next/link';
import { services } from '../data/content';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden mt-24">
      {/* Gradient Top Border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-blue-600"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content - Card-based Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              SpectrumAIReviews
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Expert AI tool reviews based on rigorous testing and real-world experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="text-primary">✓</span>
                <span>100% Editorial Independence</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="text-primary">✓</span>
                <span>Hands-On Testing Since 2021</span>
              </div>
            </div>
          </div>

          {/* Review Categories */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
            <h4 className="font-bold text-lg mb-4">Review Categories</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Review Methodology
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:contact@spectrumaireviews.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Editorial Team
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
            <h4 className="font-bold text-lg mb-4">Legal & Trust</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <a href="mailto:corrections@spectrumaireviews.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Report an Error
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl mb-2">🔒</div>
            <div className="text-sm font-semibold">SSL Secured</div>
            <div className="text-xs text-gray-400 mt-1">Privacy Protected</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl mb-2">✍️</div>
            <div className="text-sm font-semibold">Expert Reviews</div>
            <div className="text-xs text-gray-400 mt-1">8+ Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl mb-2">🔄</div>
            <div className="text-sm font-semibold">Updated Quarterly</div>
            <div className="text-xs text-gray-400 mt-1">Fresh Content</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-sm font-semibold">Editorial Excellence</div>
            <div className="text-xs text-gray-400 mt-1">Award-Winning</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} SpectrumAIReviews. All rights reserved.
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline mt-1 md:mt-0">
                Independent AI Tool Reviews & Comparisons
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/spectrumaireviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/spectrumaireviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
              <strong className="text-gray-300">Disclosure:</strong> SpectrumAIReviews maintains editorial independence. While we may earn affiliate commissions
              from some links on this site, our reviews are based solely on hands-on testing and expert analysis. We only recommend
              products we have personally tested and believe offer genuine value. Our review methodology and scoring criteria remain
              consistent regardless of affiliate relationships. For more information, see our{' '}
              <Link href="/affiliate-disclosure" className="underline hover:text-white transition-colors">
                Affiliate Disclosure Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
