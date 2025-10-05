import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 border-b border-gray-200 bg-white shadow-sm">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold font-display text-primary hover:text-purple-700 transition-colors">
          SpectrumAIReviews
        </Link>
      </nav>
    </header>
  );
};

export default Header;
