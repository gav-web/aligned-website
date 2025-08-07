# ALIGNED Website Deployment Guide

## Quick Setup

Since there might be npm permission issues on some systems, here's how to get the website running:

### Option 1: Using npm (Recommended)
```bash
cd aligned-website
npm install
npm run dev
```

### Option 2: Using yarn
```bash
cd aligned-website
yarn install
yarn dev
```

### Option 3: Using pnpm
```bash
cd aligned-website
pnpm install
pnpm dev
```

## Production Build

```bash
npm run build
npm start
```

## Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js and deploy
3. Environment variables can be set in Vercel dashboard

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Other Hosting
The website generates static files that can be hosted anywhere supporting Node.js.

## Environment Variables

For production, you may want to add:
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact form email endpoint
- `NEXT_PUBLIC_APP_STORE_URL` - iOS app download link
- `NEXT_PUBLIC_GOOGLE_PLAY_URL` - Android app download link

## Performance Optimizations

The website is built with performance in mind:
- Next.js 14 with App Router
- Tailwind CSS for optimized styling
- Framer Motion with optimized animations
- Responsive images ready
- SEO meta tags included

## Browser Support

- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

All modern browsers with ES2015+ support.