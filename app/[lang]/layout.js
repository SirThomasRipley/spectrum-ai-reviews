import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { config } from '../../data/content';

export function generateStaticParams() {
  return config.locales.map((lang) => ({ lang }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
