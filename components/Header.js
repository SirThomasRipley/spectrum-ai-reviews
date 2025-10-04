import Link from 'next/link';
import { config } from '../data/content';

const Header = ({ lang }) => {
  return (
    <header className="py-6 border-b border-secondary">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href={`/${lang}`} className="text-2xl font-bold font-display text-primary">
          SpectrumAIReviews
        </Link>
        <div className="flex items-center space-x-4">
          <Link href={`/en`} className={`text-sm ${lang === 'en' ? 'text-primary font-bold' : 'text-secondary-foreground'}`}>EN</Link>
          <span className="text-secondary-foreground">/</span>
          <Link href={`/fr`} className={`text-sm ${lang === 'fr' ? 'text-primary font-bold' : 'text-secondary-foreground'}`}>FR</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
