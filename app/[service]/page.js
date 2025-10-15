import { services, categories } from '../../data/content';
import { getReviewsByService } from '../../data/reviews';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Script from 'next/script';

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.service);

  return {
    title: `${service.name} | SpectrumAIReviews - Expert Reviews & Comparisons`,
    description: `${service.description}. Expert reviews, ratings, and comparisons of the best ${service.name.toLowerCase()} in 2025. Find the perfect tool for your needs.`,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} Reviews & Comparisons 2025`,
      description: service.description,
      type: 'website',
      url: `https://spectrumaireviews.com/${params.service}`,
    },
    alternates: {
      canonical: `https://spectrumaireviews.com/${params.service}`,
    },
  };
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.service);
  const serviceReviews = getReviewsByService(params.service);

  if (!service) return <div>Not Found</div>;

  // Group reviews by category for organized display
  const reviewsByCategory = {};
  categories.forEach(category => {
    const categoryReviews = serviceReviews.filter(review => review.category === category.slug);
    if (categoryReviews.length > 0) {
      reviewsByCategory[category.slug] = {
        category,
        reviews: categoryReviews
      };
    }
  });

  // ✅ MINIMAL SCHEMA: WebPage only (no ItemList, no Breadcrumb, no FAQ)
  // Reason: Prevents schema conflicts with homepage ItemList and review page breadcrumbs
  // Service pages are category/hub pages - they don't need heavy schema markup
  const servicePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: service.name,
    description: service.description,
    url: `https://spectrumaireviews.com/${params.service}`,
    about: {
      '@type': 'Thing',
      name: service.name,
      description: service.description,
    },
  };

  return (
    <>
      <Script
        id="service-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema) }}
      />
      <div className="container mx-auto px-4 py-16 space-y-16">
      <header className="text-center max-w-3xl mx-auto">
        <Icon name={service.icon} className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-bold font-display">{service.name}</h1>
        <p className="mt-4 text-lg text-secondary-foreground">{service.description}</p>
      </header>

      {/* Quick Category Navigation */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <Link
              key={category.id}
              href={`/${service.slug}/${category.slug}`}
              className="text-center p-6 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-bold"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      {/* All Reviews Section */}
      {serviceReviews.length > 0 ? (
        <section>
          <h2 className="text-3xl font-bold font-display mb-6">
            All {service.name}
          </h2>

          {Object.entries(reviewsByCategory).map(([categorySlug, data]) => (
            <div key={categorySlug} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">{data.category.name}</h3>
                <Link
                  href={`/${service.slug}/${categorySlug}`}
                  className="text-sm text-primary hover:underline"
                >
                  View All in {data.category.name} →
                </Link>
              </div>

              <div className="space-y-4">
                {data.reviews.map((review, index) => (
                  <Link
                    key={review.slug}
                    href={review.reviewUrl}
                    className="block p-6 bg-secondary rounded-lg hover:border hover:border-primary transition-all"
                    style={index === 0 ? { borderWidth: '1px', borderColor: 'var(--primary)' } : {}}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold">#{index + 1} {review.title}</h4>
                          {review.badge && (
                            <span className="text-xs bg-primary text-white px-2 py-1 rounded">
                              {review.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-secondary-foreground mt-2 mb-3">{review.summary}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-yellow-500">★ {review.displayRating}</span>
                          <span className="text-secondary-foreground">({review.reviewCount} Reviews)</span>
                          {review.price.starter && (
                            <span className="text-secondary-foreground">
                              From ${review.price.starter.cost}/{review.price.starter.period}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-primary font-bold text-2xl ml-4">{review.displayRating}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="p-12 bg-secondary rounded-lg border-2 border-dashed text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold mb-4">Reviews Coming Soon</h3>
          <p className="text-secondary-foreground max-w-2xl mx-auto">
            We are currently working on comprehensive reviews for {service.name}.
            Our team is thoroughly testing and evaluating the top tools to provide you with detailed, unbiased reviews.
            Check back soon!
          </p>
        </section>
      )}

      {/* Quick Comparison Table */}
      {serviceReviews.length > 1 && (
        <section>
          <h2 className="text-3xl font-bold font-display mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-secondary rounded-lg">
              <thead>
                <tr className="border-b border-background">
                  <th className="p-4 text-left">Tool</th>
                  <th className="p-4 text-center">Category</th>
                  <th className="p-4 text-center">Rating</th>
                  <th className="p-4 text-center">Starting Price</th>
                  <th className="p-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                {serviceReviews.slice(0, 5).map((review, index) => {
                  const category = categories.find(c => c.slug === review.category);
                  return (
                    <tr key={review.slug} className={index !== Math.min(4, serviceReviews.length - 1) ? 'border-b border-background' : ''}>
                      <td className="p-4">
                        <Link href={review.reviewUrl} className="font-bold text-primary hover:underline">
                          {review.title}
                        </Link>
                      </td>
                      <td className="p-4 text-center text-sm">
                        {category?.name || review.category}
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-primary font-bold">{review.displayRating}</span>
                      </td>
                      <td className="p-4 text-center">
                        {review.price.free?.cost === 0 && 'Free'}
                        {review.price.starter && review.price.free?.cost !== 0 && `$${review.price.starter.cost}/${review.price.starter.period}`}
                      </td>
                      <td className="p-4 text-center text-sm">
                        {review.bestFor && review.bestFor[0]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section>
        <h2 className="text-3xl font-bold font-display mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="p-4 bg-secondary rounded-lg">
            <summary className="font-bold cursor-pointer">What is the best {service.name.toLowerCase()}?</summary>
            <p className="mt-2 text-secondary-foreground">
              {serviceReviews.length > 0
                ? `Based on our testing, ${serviceReviews[0].title} ranks highest with a ${serviceReviews[0].displayRating} rating for overall quality and value.`
                : 'We are currently evaluating tools in this category. Check back soon for our recommendations!'}
            </p>
          </details>
          <details className="p-4 bg-secondary rounded-lg">
            <summary className="font-bold cursor-pointer">How much do these tools typically cost?</summary>
            <p className="mt-2 text-secondary-foreground">Pricing varies widely, from free tiers to enterprise solutions. Most tools offer monthly subscriptions ranging from $10 to $100+ depending on features and usage limits.</p>
          </details>
          <details className="p-4 bg-secondary rounded-lg">
            <summary className="font-bold cursor-pointer">Are there free alternatives available?</summary>
            <p className="mt-2 text-secondary-foreground">Yes, many tools offer free plans with limited features. These are great for testing and small-scale use before committing to a paid plan.</p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      {serviceReviews.length > 0 && (
        <section className="text-center bg-gradient-to-r from-primary/20 to-purple-900/20 p-12 rounded-lg">
          <h2 className="text-3xl font-bold font-display">Ready to Get Started?</h2>
          <p className="mt-2 text-secondary-foreground mb-6">
            Explore our full in-depth reviews to find the perfect tool for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceReviews.slice(0, 3).map(review => (
              <Link
                key={review.slug}
                href={review.reviewUrl}
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Read {review.title} Review
              </Link>
            ))}
          </div>
        </section>
      )}
      </div>
    </>
  );
}
