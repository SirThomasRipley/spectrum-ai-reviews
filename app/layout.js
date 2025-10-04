import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'SpectrumAIReviews - Unbiased AI Tool Reviews',
  description: 'Your trusted resource for in-depth reviews of the latest AI products and tools.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
