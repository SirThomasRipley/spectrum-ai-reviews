import { services, categories } from '../../../data/content';
import { getReviewsByServiceAndCategory } from '../../../data/reviews';
import Icon from '../../../components/Icon';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const category of categories) {
      params.push({
        service: service.slug,
        category: category.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.service);
  const category = categories.find(c => c.slug === params.category);

  const title = `Best ${service.name} for ${category.name} | SpectrumAIReviews`;
  const description = `Find the top-rated ${service.name} for ${category.name}. In-depth, unbiased reviews and rankings.`;
  const keywords = `${service.keywords}, ${category.name}`;

  return {
    title,
    description,
    keywords,
  };
}

export default function ServiceCategoryPage({ params }) {
  const service = services.find(s => s.slug === params.service);
  const category = categories.find(c => c.slug === params.category);
  const categoryReviews = getReviewsByServiceAndCategory(params.service, params.category);

  if (!service || !category) return <div>Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <header className="text-center">
        <Icon name={service.icon} className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-display">
          {service.name} for <span className="text-primary">{category.name}</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-secondary-foreground">
          {category.description} Discover the best AI tools in this category.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold font-display mb-6">
          {categoryReviews.length > 0 ? 'Top Recommended Tools' : 'Reviews Coming Soon'}
        </h2>

        {categoryReviews.length > 0 ? (
          <div className="space-y-4">
            {categoryReviews.slice(0, 3).map((review, index) => (
              <Link
                key={review.slug}
                href={review.reviewUrl}
                className="block p-6 bg-secondary rounded-lg hover:border hover:border-primary transition-all"
                style={index === 0 ? { borderWidth: '1px', borderColor: 'var(--primary)' } : {}}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">#{index + 1} {review.title}</h3>
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
                  <div className="text-primary font-bold text-2xl ml-4">{review.rating}/10</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 bg-secondary rounded-lg border-2 border-dashed text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold mb-4">Reviews Coming Soon</h3>
            <p className="text-secondary-foreground max-w-2xl mx-auto">
              We are currently working on comprehensive reviews for {service.name} in the {category.name} category.
              Our team is thoroughly testing and evaluating the top tools to provide you with detailed, unbiased reviews.
              Check back soon!
            </p>
          </div>
        )}
      </section>

      {categoryReviews.length > 1 && (
        <section>
          <h2 className="text-3xl font-bold font-display mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-secondary rounded-lg">
              <thead>
                <tr className="border-b border-background">
                  <th className="p-4 text-left">Tool</th>
                  <th className="p-4 text-center">Rating</th>
                  <th className="p-4 text-center">Starting Price</th>
                  <th className="p-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                {categoryReviews.slice(0, 3).map((review, index) => (
                  <tr key={review.slug} className={index !== categoryReviews.slice(0, 3).length - 1 ? 'border-b border-background' : ''}>
                    <td className="p-4">
                      <Link href={review.reviewUrl} className="font-bold text-primary hover:underline">
                        {review.title}
                      </Link>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-primary font-bold">{review.rating}/10</span>
                    </td>
                    <td className="p-4 text-center">
                      {review.price.free?.cost === 0 && 'Free'}
                      {review.price.starter && review.price.free?.cost !== 0 && `$${review.price.starter.cost}/${review.price.starter.period}`}
                    </td>
                    <td className="p-4 text-center text-sm">
                      {review.bestFor && review.bestFor[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="p-8 bg-secondary rounded-lg">
        <h2 className="text-3xl font-bold font-display mb-4">Why {category.name} Matters</h2>
        <p className="text-secondary-foreground leading-relaxed">
          In today&apos;s fast-paced digital landscape, {category.name.toLowerCase()} tools have become essential for professionals and businesses alike. 
          These AI-powered solutions can significantly enhance your workflow by automating repetitive tasks, providing intelligent insights, 
          and enabling you to focus on what matters most. Our comprehensive reviews help you choose the perfect tool for your specific needs.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-display mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="p-4 bg-secondary rounded-lg">
            <summary className="font-bold cursor-pointer">What is the best {service.name.toLowerCase()} for {category.name.toLowerCase()}?</summary>
            <p className="mt-2 text-secondary-foreground">Based on our testing, the top-rated tool offers the best combination of features, ease of use, and value for {category.name.toLowerCase()} applications.</p>
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

      {categoryReviews.length > 0 && (
        <section className="text-center bg-gradient-to-r from-primary/20 to-purple-900/20 p-12 rounded-lg">
          <h2 className="text-3xl font-bold font-display">Ready to Get Started?</h2>
          <p className="mt-2 text-secondary-foreground mb-6">
            Explore our full in-depth reviews to find the perfect tool for your {category.name.toLowerCase()} needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categoryReviews.slice(0, 3).map(review => (
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
  );
}
