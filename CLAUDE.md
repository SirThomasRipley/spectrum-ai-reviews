# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SpectrumAIReviews is a Next.js 14 static site for AI product reviews, built for deployment on Cloudflare Pages. The site uses static export (`output: 'export'`) and generates all pages at build time.

## Key Commands

```bash
# Development
npm run dev              # Start development server on port 3000
npm run clean           # Clean build artifacts (.next and out directories)

# Building
npm run build           # Standard Next.js build with static export
npm run build:cloudflare # Clean and build for Cloudflare deployment

# Deployment
npm run deploy          # Deploy to Cloudflare Pages (production)
npm run deploy:preview  # Deploy to preview branch

# Code Quality
npm run lint            # Run Next.js linter
npm run format          # Prettier formatting
npm run check-types     # TypeScript type checking
```

## Architecture & Routing

### Static Site Generation
- **All pages are statically generated** at build time using `output: 'export'`
- No server-side rendering or API routes
- Deployed as static HTML/CSS/JS to Cloudflare Pages

### Route Structure
```
/                                           # Homepage
/about                                      # About page
/methodology                                # Methodology page
/[service]/                                # Service category pages (dynamic)
/[service]/[category]/                     # Service subcategory pages (dynamic)
/reviews/[service]/[category]/[product]/   # Individual product review pages (static)
```

### Key Architectural Decisions

1. **No Internationalization Middleware**: The middleware.js file exists but i18n features described in README are not implemented. The site is English-only.

2. **Component Structure**:
   - `app/layout.js` provides global Header and Footer
   - Individual pages should NOT import Header/Footer (causes duplication)
   - All pages inherit from root layout automatically

3. **Data Management**:
   - Service and category data lives in `data/content.js`
   - No database or external API calls
   - Review pages are manually created as individual components

4. **Styling Approach**:
   - Tailwind CSS with custom configuration
   - Dark theme with purple accent colors (#6A0DAD)
   - Uses Inter and Poppins fonts
   - Emoji component handles cross-platform emoji rendering

## Important Implementation Notes

### Review Pages
Individual review pages (like Zebracat) are created as full React components in:
```
app/reviews/[service-slug]/[category-slug]/[product-slug]/page.js
```
These are NOT dynamically generated from data but manually created with rich content.

### SEO & Metadata
- Each page exports metadata object for SEO
- Schema.org structured data implemented via Script components
- Organization and Website schemas in root layout
- Individual review pages include Review schema

### Cloudflare Pages Specific
- Static export configuration in `next.config.js`
- Build output goes to `out/` directory
- Wrangler configuration in `wrangler.toml`
- No Node.js runtime features available in production

### Common Pitfall: Header/Footer Duplication
The root layout (`app/layout.js`) already includes Header and Footer components. Individual pages should NOT import these components as it causes visual duplication.

## Development Workflow

1. Add new review: Create component in `app/reviews/[service]/[category]/[product]/page.js`
2. Update navigation: Modify `data/content.js` if adding new categories
3. Build locally: `npm run build` to test static generation
4. Deploy: `npm run deploy` pushes to Cloudflare Pages

## Project Status Notes

- The README mentions i18n support but it's not implemented
- Dynamic service/category pages exist but most content is in static review pages
- Affiliate links and coupon codes are embedded in review pages
- Author bio component shows "Michael Anderson" as the reviewer