import { services, locations, config } from '../../../data/content';
import Link from 'next/link';

export async function generateStaticParams() {
  const params = [];
  for (const lang of config.locales) {
    for (const service of services) {
      params.push({
        lang: lang,
        service: service[lang].slug,
      });
    }
  }
  return params;
}

export default function ServicePage({ params }) {
  const { lang, service: serviceSlug } = params;
  const service = services.find(s => s[lang].slug === serviceSlug);

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold font-display">{service[lang].name}</h1>
        <p className="mt-4 text-lg text-secondary-foreground">{service[lang].description}</p>
      </header>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Find Reviews by Location
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {locations.map(location => (
            <Link key={location.id} href={`/${lang}/${service[lang].slug}/${location[lang].slug}`} className="text-center p-6 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-bold">
              {location[lang].name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
