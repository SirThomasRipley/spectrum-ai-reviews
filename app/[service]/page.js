import { services, categories } from '../../data/content';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.service);
  
  return {
    title: `${service.name} | SpectrumAIReviews`,
    description: service.description,
    keywords: service.keywords,
  };
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.service);

  if (!service) return <div>Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold font-display">{service.name}</h1>
        <p className="mt-4 text-lg text-secondary-foreground">{service.description}</p>
      </header>

      <section className="mt-16">
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
    </div>
  );
}
