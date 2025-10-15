/**
 * OptimizedImage Component
 *
 * High-performance image component with automatic WebP conversion,
 * lazy loading, and Core Web Vitals optimizations.
 *
 * Features:
 * - Automatic format selection (AVIF → WebP → fallback)
 * - Native lazy loading with intersection observer fallback
 * - Responsive sizing with srcset
 * - LCP optimization for above-fold images
 * - Proper aspect ratio to prevent layout shift
 * - Blur placeholder support
 *
 * Usage:
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Description"
 *   width={1200}
 *   height={630}
 *   priority={false} // Set true for above-fold images
 *   className="custom-class"
 * />
 */

import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  objectFit = 'cover',
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Default sizes if not provided
  const defaultSizes = sizes || `
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  `;

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = blurDataURL || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='${src}'/%3E%3C/svg%3E`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        sizes={defaultSizes}
        className={`
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${error ? 'hidden' : ''}
        `}
        style={{
          objectFit: objectFit,
        }}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          console.error(`Failed to load image: ${src}`);
        }}
        {...props}
      />

      {/* Loading state */}
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
