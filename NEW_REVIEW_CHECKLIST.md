# New Review Checklist - SpectrumAIReviews

## ✅ Pre-Creation Checklist

Before creating a new review, gather this information:

- [ ] Product name: `_______________________`
- [ ] Testing period: `______ days/months`
- [ ] Units tested: `______ [videos/articles/images/etc.]`
- [ ] Success rate: `______%`
- [ ] Overall rating: `_____ / 5` (always use 5-star scale)
- [ ] Pricing tiers: `$_____ - $_____/mo`
- [ ] Discount code (if any): `_______________`

---

## 📁 Step 1: Create Directory Structure

### Determine Correct Paths

**Service Directory vs Slug Reference**:
| Service | Directory Name | Slug (for breadcrumbs) |
|---------|----------------|------------------------|
| AI Writing Tools | `ai-writing-tool-reviews` | `ai-writing-tool-reviews` |
| AI Art Generators | `ai-art-generators` | `ai-art-generator-reviews` |
| AI SEO Tools | `ai-seo-tools` | `ai-seo-tool-reviews` |
| AI Assistants | `ai-assistants` | `ai-assistant-agent-reviews` |

**Create directories**:
```bash
mkdir -p app/reviews/[service-directory]/[category]/[product-slug]
cd app/reviews/[service-directory]/[category]/[product-slug]
```

**Example**:
```bash
mkdir -p app/reviews/ai-writing-tool-reviews/content-creation/jasper
cd app/reviews/ai-writing-tool-reviews/content-creation/jasper
```

---

## 📄 Step 2: Create page.js (Server Component)

Create `page.js` with the following checklist:

### ✅ Metadata Section
- [ ] Title (50-60 characters)
- [ ] Description (150-155 characters)
- [ ] Keywords (10-15 relevant keywords)
- [ ] Authors (Michael Anderson)
- [ ] OpenGraph title, description, images
- [ ] Twitter card title, description, images
- [ ] Canonical URL
- [ ] Article metadata (published/modified dates)

### ✅ Review Schema
- [ ] Product name
- [ ] Application category
- [ ] Description (1-2 sentences)
- [ ] ALL pricing tiers as offers
- [ ] Rating value (convert to 5-star if needed)
- [ ] Pros (positiveNotes) - 6 items
- [ ] Cons (negativeNotes) - 6 items
- [ ] Author information
- [ ] Review body summary

### ✅ Breadcrumb Schema
- [ ] Position 1: Home
- [ ] Position 2: Service (use slug from data/content.js)
- [ ] Position 3: Category
- [ ] Position 4: Review page (use actual directory path)

**Critical**: Verify breadcrumb URLs match:
- Position 2 & 3: Use service slug from `data/content.js`
- Position 4: Use actual file directory path

### ✅ FAQ Schema
- [ ] "Is [Product] worth it?" question
- [ ] Pricing plans question
- [ ] Plan comparison question
- [ ] Cancellation instructions
- [ ] Vs competitors question
- [ ] 3-5 additional strategic questions

---

## 🎨 Step 3: Create [ProductName]ReviewClient.js

### ✅ Required Imports
```javascript
import Breadcrumbs from '@/components/Breadcrumbs';  // ✅ Must include
import { linkMap } from '@/utils/linkMap';            // ✅ Must include
import AuthorBio from '@/components/AuthorBio';
import Emoji from '@/components/Emoji';
```

### ✅ Breadcrumbs Implementation
Add immediately after hero section:
```javascript
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
  <Breadcrumbs items={[
    { name: '[Service Name]', href: '/[service-slug-from-data.js]' },
    { name: '[Category]', href: '/[service-slug]/[category-slug]' },
    { name: '[Product] Review', href: '/reviews/[directory-path]' },
  ]} />
</div>
```

### ✅ Required Sections
- [ ] Hero section with 4-stat metrics box
- [ ] Breadcrumb navigation (right after hero)
- [ ] Affiliate disclosure banner
- [ ] Table of contents sidebar (sticky)
- [ ] Introduction section with author/date
- [ ] Product overview
- [ ] Performance analysis
- [ ] Pros and cons section
- [ ] Pricing breakdown (all tiers)
- [ ] Final verdict with rating
- [ ] Author bio component at end

---

## 🔗 Step 4: Internal Linking

### ✅ Use linkMap for All Internal Links
```javascript
import { linkMap, anchorText } from '@/utils/linkMap';

// Static links
<Link href={linkMap.home}>Home</Link>
<Link href={linkMap.methodology}>Our Methodology</Link>

// Service pages
<Link href={linkMap.aiWritingTools}>AI Writing Tools</Link>

// Dynamic review links
<Link href={linkMap.reviews.zebracat}>
  {anchorText.readFullReview('Zebracat')}
</Link>
```

### ✅ Add Related Reviews Section (Optional but Recommended)
```javascript
<section className="bg-gray-50 rounded-xl p-8 mt-12">
  <h3 className="text-2xl font-bold mb-6">Related Reviews</h3>
  <div className="grid md:grid-cols-3 gap-6">
    <Link href={linkMap.reviews.[product]}>
      {/* Related review card */}
    </Link>
  </div>
</section>
```

---

## 🎯 Step 5: SEO Validation

### ✅ Pre-Build Checks
- [ ] All HTML entities escaped (`&apos;` not `'`)
- [ ] No ESLint errors
- [ ] Images have alt text
- [ ] Breadcrumbs component included
- [ ] Affiliate disclosure visible
- [ ] Author bio at end
- [ ] Last updated date shows dynamically

### ✅ Build Test
```bash
npm run build
```

Check build output for:
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Page appears in build manifest
- [ ] Sitemap auto-discovery message: "✅ Auto-discovered X review pages"

### ✅ Verify Generated Files
```bash
# Check sitemap includes your new review
cat out/sitemap.xml | grep "[product-slug]"

# Expected: <loc>https://spectrumaireviews.com/reviews/.../[product-slug]</loc>
```

---

## 📊 Step 6: Post-Creation Validation

### ✅ Schema Validation
Test with Google tools:
1. **Rich Results Test**: https://search.google.com/test/rich-results
   - Enter URL: `https://spectrumaireviews.com/reviews/.../[product]`
   - Check for: Review schema ★, Breadcrumb schema, FAQ schema

2. **Schema.org Validator**: https://validator.schema.org/
   - Paste full HTML or URL
   - Verify no errors

### ✅ Manual Checks
Visit the page and verify:
- [ ] Breadcrumbs display correctly
- [ ] Breadcrumb links work
- [ ] Sticky TOC navigation works
- [ ] All internal links work
- [ ] Hero gradient displays
- [ ] Stats box renders
- [ ] Author bio shows at end
- [ ] Affiliate disclosure above fold
- [ ] Last updated date is current

---

## 🚀 Step 7: Deployment

### ✅ Pre-Deployment
- [ ] Run `npm run build` with zero errors
- [ ] Verify sitemap includes new review
- [ ] Test page locally at http://localhost:3000

### ✅ Deploy
```bash
npm run deploy
```

### ✅ Post-Deployment (24 hours)
- [ ] Verify page loads at production URL
- [ ] Test sitemap.xml at https://spectrumaireviews.com/sitemap.xml
- [ ] Submit sitemap to Google Search Console (if first review)
- [ ] Check robots.txt at https://spectrumaireviews.com/robots.txt

### ✅ Post-Deployment (1 week)
- [ ] Check Google Search Console for indexing
- [ ] Verify rich results show in GSC
- [ ] Check for any crawl errors
- [ ] Monitor Core Web Vitals

---

## 🎨 Optional Enhancements

### High-Value Additions
- [ ] Troubleshooting section (targets "not working" queries)
- [ ] Security/privacy section (targets "is [product] safe")
- [ ] Comparison table vs competitors
- [ ] Video walkthrough (future)
- [ ] User testimonials (future)
- [ ] Credit/usage calculator (for credit-based products)

### Social Sharing Images
- [ ] Create OG image (1200x630): `/public/images/[product]-review-og.jpg`
- [ ] Create Twitter image (1200x630): `/public/images/[product]-review-twitter.jpg`
- [ ] Verify images load in metadata

---

## 📋 Common Mistakes to Avoid

### ❌ Don't Do This:
- Use directory name in breadcrumbs instead of slug
- Forget to import Breadcrumbs component
- Hardcode internal links instead of using linkMap
- Use `/10` rating scale instead of `/5`
- Include fake credentials or made-up testing data
- Forget affiliate disclosure
- Use `'` instead of `&apos;` in JSX
- Import Header/Footer in review pages (layout already includes them)

### ✅ Do This:
- Use slug from `data/content.js` for breadcrumb Position 2-3
- Always import and use Breadcrumbs component
- Use linkMap for all internal links
- Convert ratings to 5-star scale for Google
- Only include honest, real testing data
- Include clear affiliate disclosure above fold
- Escape all quotes: `&apos;` `&ldquo;` `&rdquo;`
- Let root layout handle Header/Footer

---

## 🏆 Success Criteria

Your review is ready when:
- ✅ Build passes with zero errors
- ✅ Sitemap auto-includes the review
- ✅ Google Rich Results Test shows Review + Breadcrumb + FAQ schemas
- ✅ Breadcrumbs render and navigate correctly
- ✅ All internal links use linkMap
- ✅ Page loads fast (< 2.5s LCP)
- ✅ No layout shifts (CLS < 0.1)
- ✅ Mobile-responsive
- ✅ Affiliate disclosure clear
- ✅ Author bio at end

**Expected SEO Score**: 9.5/10

**Time to Create**: 2-3 hours for comprehensive review

---

## 🆘 Troubleshooting

### Issue: Review not in sitemap
- **Cause**: Missing `page.js` or incorrect directory structure
- **Fix**: Ensure `page.js` exists at exact path

### Issue: Breadcrumb URLs 404
- **Cause**: Using directory name instead of slug
- **Fix**: Check `data/content.js` for correct slug, use in Position 2-3

### Issue: Build fails with ESLint errors
- **Cause**: Unescaped quotes in JSX
- **Fix**: Replace `'` with `&apos;`, `"` with `&ldquo;`/`&rdquo;`

### Issue: Images broken in metadata
- **Cause**: OG images don't exist
- **Fix**: Create images or remove image metadata until ready

### Issue: Schema validation fails
- **Cause**: Incorrect schema structure or missing fields
- **Fix**: Compare with working review (Zebracat, Genspark, GetGenie)

---

## 📞 Need Help?

Reference these working examples:
- `/app/reviews/ai-art-generators/content-creation/zebracat/` (9.5/10 SEO)
- `/app/reviews/ai-assistants/productivity/genspark/` (9.5/10 SEO)
- `/app/reviews/ai-writing-tool-reviews/content-creation/getgenie/` (9.0/10 SEO)

Check the comprehensive guides:
- `CLAUDE.md` - Full architecture and component templates
- `SEO_OPTIMIZATION_GUIDE.md` - SEO best practices and monitoring
