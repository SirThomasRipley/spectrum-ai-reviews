import Link from 'next/link';
import { services } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-24 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-display text-primary mb-3">SpectrumAIReviews</h3>
            <p className="text-secondary-foreground text-sm mb-4">
              Expert AI tool reviews based on rigorous testing and real-world experience.
              Trusted by 50,000+ professionals.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-foreground">
              <span className="text-primary">✓</span>
              <span>100% Editorial Independence</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-secondary-foreground mt-1">
              <span className="text-primary">✓</span>
              <span>Hands-On Testing Since 2021</span>
            </div>
          </div>

          {/* Review Categories */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4">Review Categories</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-secondary-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Review Methodology
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:contact@spectrumaireviews.com" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Editorial Team
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4">Legal & Trust</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <a href="mailto:corrections@spectrumaireviews.com" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                  Report an Error
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Signals Bar */}
        <div className="border-t border-gray-300 pt-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">🔒</div>
              <div className="text-xs font-semibold text-foreground">SSL Secured</div>
              <div className="text-xs text-secondary-foreground">Privacy Protected</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">✍️</div>
              <div className="text-xs font-semibold text-foreground">Expert Reviews</div>
              <div className="text-xs text-secondary-foreground">8+ Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">🔄</div>
              <div className="text-xs font-semibold text-foreground">Updated Quarterly</div>
              <div className="text-xs text-secondary-foreground">Fresh Content</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-xs font-semibold text-foreground">50,000+ Users</div>
              <div className="text-xs text-secondary-foreground">Trusted Worldwide</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground text-center md:text-left">
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
                className="text-secondary-foreground hover:text-primary transition-colors"
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
                className="text-secondary-foreground hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-xs text-secondary-foreground text-center max-w-4xl mx-auto leading-relaxed">
            <strong>Disclosure:</strong> SpectrumAIReviews maintains editorial independence. While we may earn affiliate commissions
            from some links on this site, our reviews are based solely on hands-on testing and expert analysis. We only recommend
            products we have personally tested and believe offer genuine value. Our review methodology and scoring criteria remain
            consistent regardless of affiliate relationships. For more information, see our{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-primary">
              Affiliate Disclosure Policy
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
