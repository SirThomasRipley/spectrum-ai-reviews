export const config = {
  siteName: 'SpectrumAIReviews.com',
  siteDescription: 'Your trusted resource for in-depth reviews of the latest AI products and tools.',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
};

export const services = [
  {
    id: 'ai-writing-tools',
    icon: 'pencil',
    en: {
      name: 'AI Writing Tool Reviews',
      description: 'Discover top-tier AI tools to enhance your writing, from content generation to grammar correction.',
      slug: 'ai-writing-tool-reviews',
      keywords: 'AI writing tools, GPT-4 review, content generation software',
    },
    fr: {
      name: 'Avis sur les Outils d\'Écriture IA',
      description: 'Découvrez les meilleurs outils d\'IA pour améliorer votre écriture, de la génération de contenu à la correction grammaticale.',
      slug: 'avis-outils-ecriture-ia',
      keywords: 'outils d\'écriture IA, avis GPT-4, logiciel de génération de contenu',
    }
  },
  {
    id: 'ai-art-generators',
    icon: 'palette',
    en: {
      name: 'AI Art Generator Reviews',
      description: 'Unleash your creativity with leading AI art generators. We review the best tools for stunning visual creation.',
      slug: 'ai-art-generator-reviews',
      keywords: 'AI art generators, Midjourney review, Stable Diffusion comparison',
    },
    fr: {
      name: 'Avis sur les Générateurs d\'Art IA',
      description: 'Libérez votre créativité avec les principaux générateurs d\'art IA. Nous examinons les meilleurs outils pour une création visuelle époustouflante.',
      slug: 'avis-generateurs-art-ia',
      keywords: 'générateurs d\'art IA, avis Midjourney, comparaison Stable Diffusion',
    }
  },
  {
    id: 'ai-seo-tools',
    icon: 'chart',
    en: {
      name: 'AI SEO Tool Reviews',
      description: 'Boost your search engine rankings with AI-powered SEO tools. In-depth reviews and comparisons.',
      slug: 'ai-seo-tool-reviews',
      keywords: 'AI SEO tools, SEO automation, ranking software',
    },
    fr: {
      name: 'Avis sur les Outils SEO IA',
      description: 'Améliorez votre classement sur les moteurs de recherche avec des outils SEO alimentés par l\'IA. Avis et comparaisons approfondis.',
      slug: 'avis-outils-seo-ia',
      keywords: 'outils SEO IA, automatisation SEO, logiciel de classement',
    }
  },
];

export const locations = [
  {
    id: 'usa',
    en: { name: 'USA', slug: 'usa' },
    fr: { name: 'États-Unis', slug: 'etats-unis' },
  },
  {
    id: 'uk',
    en: { name: 'United Kingdom', slug: 'uk' },
    fr: { name: 'Royaume-Uni', slug: 'royaume-uni' },
  },
  {
    id: 'canada',
    en: { name: 'Canada', slug: 'canada' },
    fr: { name: 'Canada', slug: 'canada' },
  },
  {
    id: 'france',
    en: { name: 'France', slug: 'france' },
    fr: { name: 'France', slug: 'france' },
  },
];
