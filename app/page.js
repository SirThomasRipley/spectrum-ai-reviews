import Link from 'next/link';
import { services } from '../data/content';
import Icon from '../components/Icon';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
          Unbiased Reviews of the Latest AI Tools
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-secondary-foreground">
          We test, review, and rank the best AI software on the market so you can make informed decisions. Welcome to your trusted resource in the age of AI.
        </p>
        <div className="mt-8">
          <Link href={`/${services[0].slug}`} className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-4xl font-bold font-display text-center mb-12">Explore Our Review Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <Link key={service.id} href={`/${service.slug}`} className="block p-8 bg-secondary rounded-lg border border-transparent hover:border-primary transition-colors">
              <Icon name={service.icon} className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold font-display">{service.name}</h3>
              <p className="mt-2 text-secondary-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
