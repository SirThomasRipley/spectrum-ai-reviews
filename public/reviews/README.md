# Reviews Folder Structure

This directory contains detailed product reviews organized by service type and category.

## Structure

```
/public/reviews/
├── ai-art-generators/
│   ├── content-creation/
│   │   └── zebracat.html
│   ├── creative-design/
│   ├── productivity/
│   └── business-marketing/
├── ai-writing-tools/
│   ├── content-creation/
│   ├── creative-design/
│   ├── productivity/
│   └── business-marketing/
└── ai-seo-tools/
    ├── content-creation/
    ├── creative-design/
    ├── productivity/
    └── business-marketing/
```

## Accessing Reviews

Reviews can be accessed via: `/reviews/[service]/[category]/[product].html`

Example: `/reviews/ai-art-generators/content-creation/zebracat.html`

## Current Reviews

### AI Art Generators
- **Content Creation**
  - `zebracat.html` - Zebracat AI Review 2025: AI-Powered Video Creation Platform

## Adding New Reviews

When adding new reviews:
1. Determine the service type (ai-art-generators, ai-writing-tools, ai-seo-tools)
2. Choose the appropriate category (content-creation, creative-design, productivity, business-marketing)
3. Place the review file in: `/public/reviews/[service]/[category]/[product-name].html`
4. Update this README with the new review entry
