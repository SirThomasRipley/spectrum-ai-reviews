import { services, locations, config } from '../../../../data/content';
import Icon from '../../../../components/Icon';

export const revalidate = 3600;

export async function generateStaticParams() {
  const params = [];
  for (const lang of config.locales) {
    for (const service of services) {
      for (const location of locations) {
        params.push({
          lang: lang,
          service: service[lang].slug,
          location: location[lang].slug,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const service = services.find(s => s[params.lang].slug === params.service);
  const location = locations.find(l => l[params.lang].slug === params.location);

  const title = `Best ${service[params.lang].name} in ${location[params.lang].name} | SpectrumAIReviews`;
  const description = `Find the top-rated ${service[params.lang].name} for users in ${location[params.lang].name}. In-depth, unbiased reviews and rankings.`;
  const keywords = `${service[params.lang].keywords}, ${location[params.lang].name}`;

  return {
    title,
    description,
    keywords,
  };
}

export default function ServiceLocationPage({ params }) {
  const { lang, service: serviceSlug, location: locationSlug } = params;
  const service = services.find(s => s[lang].slug === serviceSlug);
  const location = locations.find(l => l[lang].slug === locationSlug);

  if (!service || !location) return <div>Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Block 1: Main Header */}
      <header className="text-center">
        <Icon name={service.icon} className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-display">
          {service[lang].name} in <span className="text-primary">{location[lang].name}</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-secondary-foreground">
          Your expert guide to the best AI tools for {service[lang].name.toLowerCase()} available to users in {location[lang].name}.
        </p>
      </header>

      {/* Block 2: Top 3 Ranked List */}
      <section>
        <h2 className="text-3xl font-bold font-display mb-6">Top 3 Tools for {location[lang].name}</h2>
        <div className="space-y-4">
          <div className="p-4 bg-secondary rounded-lg">#1 Tool Name - 9.8/10</div>
          <div className="p-4 bg-secondary rounded-lg">#2 Tool Name - 9.5/10</div>
          <div className="p-4 bg-secondary rounded-lg">#3 Tool Name - 9.2/10</div>
        </div>
      </section>

      {/* Block 3: Feature Comparison Table */}
      <section>
        <h2 className="text-3xl font-bold font-display mb-6">Feature Comparison</h2>
        <p className="text-secondary-foreground">This block would contain a detailed comparison table relevant to {service[lang].name}.</p>
      </section>

      {/* Block 4: Local Relevance / Use Case */}
      <section className="p-8 bg-secondary rounded-lg">
        <h2 className="text-3xl font-bold font-display mb-4">Why This Matters for {location[lang].name}</h2>
        <p className="text-secondary-foreground">This block contains generated text discussing the specific benefits or trends of {service[lang].name.toLowerCase()} for professionals and businesses in {location[lang].name}. This is a key block for SEO uniqueness.</p>
      </section>

      {/* Block 5: Frequently Asked Questions (FAQ) */}
      <section>
        <h2 className="text-3xl font-bold font-display mb-6">FAQs for {service[lang].name}</h2>
        <div className="space-y-4">
          <details className="p-4 bg-secondary rounded-lg"><summary className="font-bold cursor-pointer">What is the best {service[lang].name.toLowerCase()} for beginners in {location[lang].name}?</summary><p className="mt-2 text-secondary-foreground">Answer text here.</p></details>
          <details className="p-4 bg-secondary rounded-lg"><summary className="font-bold cursor-pointer">How much do these tools cost?</summary><p className="mt-2 text-secondary-foreground">Answer text here.</p></details>
        </div>
      </section>

      {/* Block 6: Get Started CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold font-display">Ready to Choose?</h2>
        <p className="mt-2 text-secondary-foreground">Explore our full in-depth reviews to find the perfect tool for your needs.</p>
      </section>
    </div>
  );
}
