import { services, categories } from '../../../data/content';
import Icon from '../../../components/Icon';

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
        <h2 className="text-3xl font-bold font-display mb-6">Top 3 Recommended Tools</h2>
        <div className="space-y-4">
          <div className="p-6 bg-secondary rounded-lg border border-primary">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">#1 Tool Name</h3>
                <p className="text-secondary-foreground mt-2">Best overall for {category.name.toLowerCase()}. Offers comprehensive features and excellent value.</p>
              </div>
              <div className="text-primary font-bold text-2xl">9.8/10</div>
            </div>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">#2 Tool Name</h3>
                <p className="text-secondary-foreground mt-2">Great alternative with unique features perfect for {category.name.toLowerCase()}.</p>
              </div>
              <div className="text-primary font-bold text-2xl">9.5/10</div>
            </div>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">#3 Tool Name</h3>
                <p className="text-secondary-foreground mt-2">Budget-friendly option that still delivers quality for {category.name.toLowerCase()}.</p>
              </div>
              <div className="text-primary font-bold text-2xl">9.2/10</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-display mb-6">Key Features Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-secondary rounded-lg">
            <thead>
              <tr className="border-b border-background">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Tool #1</th>
                <th className="p-4 text-center">Tool #2</th>
                <th className="p-4 text-center">Tool #3</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-background">
                <td className="p-4">Ease of Use</td>
                <td className="p-4 text-center text-primary">✓</td>
                <td className="p-4 text-center text-primary">✓</td>
                <td className="p-4 text-center">○</td>
              </tr>
              <tr className="border-b border-background">
                <td className="p-4">Advanced Features</td>
                <td className="p-4 text-center text-primary">✓</td>
                <td className="p-4 text-center text-primary">✓</td>
                <td className="p-4 text-center text-primary">✓</td>
              </tr>
              <tr>
                <td className="p-4">Price Value</td>
                <td className="p-4 text-center text-primary">✓</td>
                <td className="p-4 text-center">○</td>
                <td className="p-4 text-center text-primary">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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

      <section className="text-center bg-gradient-to-r from-primary/20 to-purple-900/20 p-12 rounded-lg">
        <h2 className="text-3xl font-bold font-display">Ready to Get Started?</h2>
        <p className="mt-2 text-secondary-foreground">Explore our full in-depth reviews to find the perfect tool for your {category.name.toLowerCase()} needs.</p>
      </section>
    </div>
  );
}
