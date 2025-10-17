'use client';

import { getReviewsByServiceAndCategory, getReviewsByService, getAllReviews } from '@/data/reviews';
import Link from 'next/link';
import { Star, ArrowRight, TrendingUp } from 'lucide-react';

/**
 * RelatedReviews Component
 *
 * Displays related product reviews to improve internal linking and user engagement.
 *
 * @param {string} currentSlug - Slug of the current review to exclude from suggestions
 * @param {string} service - Service slug (e.g., 'ai-art-generator-reviews')
 * @param {string} category - Category slug (e.g., 'content-creation')
 * @param {number} limit - Maximum number of reviews to display (default: 3)
 *
 * Selection Algorithm:
 * 1. Prioritize reviews from same category + service
 * 2. If not enough, add reviews from same service (different category)
 * 3. If still not enough, add highly-rated reviews from all reviews
 * 4. Always exclude the current review
 * 5. Sort by rating (highest first)
 */
export default function RelatedReviews({ currentSlug, service, category, limit = 3 }) {
  // Step 1: Get reviews from same category and service
  let relatedReviews = getReviewsByServiceAndCategory(service, category)
    .filter(review => review.slug !== currentSlug);

  // Step 2: If we need more, add reviews from same service but different categories
  if (relatedReviews.length < limit) {
    const sameServiceReviews = getReviewsByService(service)
      .filter(review =>
        review.slug !== currentSlug &&
        !relatedReviews.some(r => r.slug === review.slug)
      );

    relatedReviews = [...relatedReviews, ...sameServiceReviews];
  }

  // Step 3: If still need more, add top-rated reviews from all reviews
  if (relatedReviews.length < limit) {
    const topReviews = getAllReviews()
      .filter(review =>
        review.slug !== currentSlug &&
        !relatedReviews.some(r => r.slug === review.slug)
      );

    relatedReviews = [...relatedReviews, ...topReviews];
  }

  // Step 4: Limit to requested number and ensure highest rated first
  const finalReviews = relatedReviews
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);

  // Don't render if we don't have enough reviews
  if (finalReviews.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 mb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-purple-600" />
        <h3 className="text-3xl font-bold text-gray-800">You May Also Like</h3>
      </div>

      <p className="text-gray-600 mb-8">
        Discover more AI tools we&apos;ve tested and reviewed to help you find the perfect solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {finalReviews.map((review) => (
          <Link
            key={review.slug}
            href={review.reviewUrl}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-400 hover:-translate-y-1"
          >
            <div className="p-6">
              {/* Badge */}
              {review.badge && (
                <div className="inline-block mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">
                    {review.badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {review.title}
              </h4>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-bold text-gray-800">{review.displayRating}</span>
                </div>
                <span className="text-gray-500 text-sm">
                  ({review.reviewCount} {review.reviewCount === '1' ? 'review' : 'reviews'})
                </span>
              </div>

              {/* Summary - limit to 2 lines */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {review.summary}
              </p>

              {/* Pricing */}
              {review.price && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  {review.price.free && (
                    <p className="text-sm text-green-600 font-semibold">
                      Free plan available
                    </p>
                  )}
                  {!review.price.free && review.price.starter && (
                    <p className="text-sm text-gray-700">
                      From <span className="font-bold text-purple-600">
                        ${review.price.starter.cost}/{review.price.starter.period}
                      </span>
                    </p>
                  )}
                </div>
              )}

              {/* CTA Button */}
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Read Full Review
                </span>
                <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO-friendly note */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          All reviews based on extensive hands-on testing by our editorial team.
        </p>
      </div>
    </section>
  );
}
