'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
              SpectrumAIReviews
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/ai-writing-tool-reviews"
                className="text-sm hover:text-primary transition-colors font-medium"
              >
                Writing Tools
              </Link>
              <Link
                href="/ai-art-generator-reviews"
                className="text-sm hover:text-primary transition-colors font-medium"
              >
                Art Generators
              </Link>
              <Link
                href="/ai-seo-tool-reviews"
                className="text-sm hover:text-primary transition-colors font-medium"
              >
                SEO Tools
              </Link>
              <Link
                href="/ai-assistant-agent-reviews"
                className="text-sm hover:text-primary transition-colors font-medium"
              >
                AI Assistants
              </Link>

              <Link
                href="/reviews/ai-art-generators/content-creation/zebracat"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all text-sm"
              >
                Top Pick
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
