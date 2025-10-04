import Link from 'next/link';
import { services } from '../data/content';

const Footer = ({ lang }) => {
  return (
    <footer className="bg-secondary mt-24 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold font-display text-primary">SpectrumAIReviews</h3>
          <p className="text-secondary-foreground mt-2">Your #1 trusted resource for AI product reviews.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-foreground">Our Services</h4>
          <ul className="mt-4 space-y-2">
            {services.map(service => (
              <li key={service.id}>
                <Link href={`/${lang}/${service[lang].slug}`} className="text-secondary-foreground hover:text-primary transition-colors">
                  {service[lang].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg text-foreground">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
