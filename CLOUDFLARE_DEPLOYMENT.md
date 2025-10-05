# Cloudflare Pages Deployment Guide

## Automatic Deployment Setup

This project is configured for seamless deployment to Cloudflare Pages. When you push to GitHub, Cloudflare Pages will automatically build and deploy your site.

## Setup Instructions

### 1. Connect GitHub to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages**
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub repository
6. Select the `spectrum-ai-reviews` repository

### 2. Configure Build Settings

Use these settings in Cloudflare Pages:

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (leave blank)
- **Node version**: 20

### 3. Environment Variables

Add any necessary environment variables in the Cloudflare Pages dashboard:

1. Go to your project settings
2. Click on **Environment variables**
3. Add variables from `.env.example`

### 4. Deploy

Once configured, Cloudflare Pages will:
- Automatically build on every push to `main`
- Create preview deployments for pull requests
- Provide you with a `.pages.dev` URL

## Manual Deployment

If you need to deploy manually:

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build:cloudflare

# Deploy to production
npm run deploy

# Deploy to preview branch
npm run deploy:preview
```

## Build Scripts

The following npm scripts are available:

- `npm run build` - Standard Next.js build
- `npm run build:cloudflare` - Clean build optimized for Cloudflare
- `npm run build:static` - Build with static export
- `npm run clean` - Remove build artifacts
- `npm run preview` - Build and preview locally
- `npm run deploy` - Deploy to Cloudflare Pages (production)
- `npm run deploy:preview` - Deploy to preview branch

## Configuration Files

- **`wrangler.toml`** - Wrangler configuration for Cloudflare Pages
- **`cloudflare-pages.json`** - Build and deployment settings
- **`next.config.js`** - Next.js configuration optimized for Cloudflare
- **`.nvmrc`** - Node version specification (v20.11.0)
- **`.env.example`** - Environment variables template

## Troubleshooting

### Build Fails

1. Ensure Node version matches `.nvmrc` (20.11.0)
2. Check all environment variables are set
3. Run `npm run clean` and try again
4. Verify `next.config.js` output setting is `standalone`

### 404 Errors

- Check `wrangler.toml` redirect rules
- Verify `trailingSlash` setting in `next.config.js`

### Performance Issues

- Enable caching headers (already configured)
- Check image optimization settings
- Review bundle size with `npm run analyze`

## Monitoring

After deployment:

1. Check build logs in Cloudflare Pages dashboard
2. Monitor Web Analytics (free in Cloudflare)
3. Set up alerts for failed builds
4. Review Core Web Vitals metrics

## Custom Domain

To add a custom domain:

1. Go to your Pages project
2. Click **Custom domains**
3. Add your domain
4. Follow DNS configuration steps

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)