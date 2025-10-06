import { services, categories } from '@/data/content';
import fs from 'fs';
import path from 'path';

/**
 * Auto-discover all review pages by scanning the reviews directory
 * This ensures new reviews are automatically added to the sitemap
 */
function discoverReviewPages() {
  const reviewPages = [];
  const reviewsDir = path.join(process.cwd(), 'app', 'reviews');

  try {
    // Check if reviews directory exists
    if (!fs.existsSync(reviewsDir)) {
      console.warn('Reviews directory not found, skipping review discovery');
      return reviewPages;
    }

    // Scan service directories (e.g., ai-art-generators, ai-assistants, etc.)
    const serviceDirs = fs.readdirSync(reviewsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    serviceDirs.forEach(serviceDir => {
      const servicePath = path.join(reviewsDir, serviceDir);

      // Scan category directories (e.g., content-creation, productivity, etc.)
      const categoryDirs = fs.readdirSync(servicePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      categoryDirs.forEach(categoryDir => {
        const categoryPath = path.join(servicePath, categoryDir);

        // Scan product directories (e.g., zebracat, genspark, etc.)
        const productDirs = fs.readdirSync(categoryPath, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);

        productDirs.forEach(productDir => {
          const productPath = path.join(categoryPath, productDir);

          // Check if page.js exists (indicating a valid review page)
          const pageJsPath = path.join(productPath, 'page.js');
          if (fs.existsSync(pageJsPath)) {
            reviewPages.push({
              url: `https://spectrumaireviews.com/reviews/${serviceDir}/${categoryDir}/${productDir}`,
              lastModified: fs.statSync(pageJsPath).mtime,
              changeFrequency: 'monthly',
              priority: 0.95, // Reviews are high-value content
            });
          }
        });
      });
    });

    console.log(`✅ Auto-discovered ${reviewPages.length} review pages for sitemap`);
  } catch (error) {
    console.error('Error discovering review pages:', error);
  }

  return reviewPages;
}

export default function sitemap() {
  const baseUrl = 'https://spectrumaireviews.com';

  // Static pages with strategic priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage gets highest priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Service pages (main category pages)
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Category pages (service + category combinations)
  const categoryPages = [];
  services.forEach((service) => {
    categories.forEach((category) => {
      categoryPages.push({
        url: `${baseUrl}/${service.slug}/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Auto-discover all review pages (NEW REVIEWS AUTOMATICALLY INCLUDED!)
  const reviewPages = discoverReviewPages();

  // Combine all pages
  const allPages = [...staticPages, ...servicePages, ...categoryPages, ...reviewPages];

  console.log(`📊 Sitemap generated with ${allPages.length} total URLs`);
  console.log(`   - ${staticPages.length} static pages`);
  console.log(`   - ${servicePages.length} service pages`);
  console.log(`   - ${categoryPages.length} category pages`);
  console.log(`   - ${reviewPages.length} review pages`);

  return allPages;
}
