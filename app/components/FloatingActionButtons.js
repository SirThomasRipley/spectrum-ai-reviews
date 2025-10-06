'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Star, Share2 } from 'lucide-react';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SpectrumAIReviews - Honest AI Product Reviews',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share or share failed
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.log('Failed to copy link');
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Top Reviews */}
      <a
        href="/reviews/ai-art-generators/content-creation/zebracat"
        className="w-14 h-14 bg-white/90 backdrop-blur-md text-primary rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Top reviews"
      >
        <Star className="w-6 h-6" />
      </a>

      {/* Share */}
      <button
        onClick={handleShare}
        className="w-14 h-14 bg-white/90 backdrop-blur-md text-primary rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Share"
      >
        <Share2 className="w-6 h-6" />
      </button>
    </div>
  );
}
