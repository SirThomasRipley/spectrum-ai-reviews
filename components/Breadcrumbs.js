'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';

export default function Breadcrumbs({ items }) {
  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://spectrumaireviews.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://spectrumaireviews.com${item.href}`,
      })),
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
          {/* Home */}
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:text-primary transition-colors"
              aria-label="Home"
            >
              <Home size={16} className="mr-1" />
              <span>Home</span>
            </Link>
          </li>

          {/* Dynamic breadcrumb items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-1" />
              {index === items.length - 1 ? (
                // Last item (current page) - no link
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                // Intermediate items - with link
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
