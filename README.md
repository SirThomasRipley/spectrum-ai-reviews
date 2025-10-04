# SpectrumAIReviews.com

A beautiful, modern, and contemporary website for AI product reviews built with Next.js 14, Tailwind CSS, and full internationalization support.

## 🚀 Features

- **Next.js 14.2.23** with App Router and JavaScript
- **Tailwind CSS** with custom dark theme and modern color scheme
- **Full i18n Support** for English and French with translated URL slugs
- **Static Site Generation (SSG)** with Incremental Static Regeneration (ISR)
- **Programmatic SEO** generating pages for every service + location combination
- **Modular Design** with reusable components
- **Modern UI** with custom fonts (Inter & Poppins)

## 📁 Project Structure

```
spectrumAIReviews/
├── app/
│   ├── [lang]/
│   │   ├── [service]/
│   │   │   ├── [location]/
│   │   │   │   └── page.js          # Service + Location pages (SEO optimized)
│   │   │   └── page.js              # Service landing pages
│   │   ├── layout.js                # Root layout with Header & Footer
│   │   └── page.js                  # Homepage
│   └── globals.css                  # Global styles with Tailwind
├── components/
│   ├── Icon.js                      # SVG icon component
│   ├── Header.js                    # Site header with language switcher
│   └── Footer.js                    # Site footer
├── data/
│   └── content.js                   # All business logic and content
├── middleware.js                    # i18n middleware for language detection
├── tailwind.config.js               # Custom Tailwind configuration
└── package.json
```

## 🎨 Design

- **Dark Theme**: Modern dark background (#0A0A0A) with vibrant purple accents (#6A0DAD)
- **Typography**: Inter for body text, Poppins for display headings
- **Responsive**: Mobile-first design with responsive grid layouts
- **Accessibility**: Semantic HTML and proper heading hierarchy

## 🌐 Internationalization

The site supports English (en) and French (fr) with:
- Automatic language detection and redirection via middleware
- Translated URL slugs (e.g., `/en/ai-writing-tool-reviews` vs `/fr/avis-outils-ecriture-ia`)
- Language switcher in the header

## 📄 Generated Pages

With 3 services and 4 locations in 2 languages, the site generates:
- **2** homepage variations (one per language)
- **6** service landing pages (3 services × 2 languages)
- **24** service + location pages (3 services × 4 locations × 2 languages)

Total: **32 unique, SEO-optimized pages**

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Adding Content

Edit `data/content.js` to:
- Add new services
- Add new locations
- Update translations
- Modify site configuration

The pages will automatically regenerate with your changes.

## 🔧 Configuration

- **ISR Revalidation**: Pages revalidate every 3600 seconds (1 hour)
- **Default Locale**: English (en)
- **Supported Locales**: English (en), French (fr)

## 📦 Dependencies

- next: ^14.2.23
- react: ^18
- react-dom: ^18
- tailwindcss: ^3.4.1
- autoprefixer: ^10.4.20
- postcss: ^8

## 🎯 Next Steps

1. Add more services and locations in `data/content.js`
2. Enhance SEO metadata with Open Graph tags
3. Add actual review data and ratings
4. Implement search functionality
5. Add more content blocks to pages
6. Set up analytics
7. Deploy to Vercel or your preferred hosting platform
