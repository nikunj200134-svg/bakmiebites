# BakmieBites

Brand showcase website for **BakmieBites** gourmet popcorn, handcrafted with whole-grain corn and refined sunflower oil with zero palm oil. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install     # Install dependencies
npm run dev     # Start local development server on port 3000
npm run build   # Build production bundle
npm run start   # Run production server
npm run lint    # Run ESLint validation
```

## Deployment

Deploy directly to **Vercel** or any Node.js hosting platform with:
- Build command: `npm run build`
- Output directory: `.next`

## Content & Configuration

- **Brand & Contact Info**: Edit `config/site.ts` for WhatsApp number, contact email, and Instagram profile.
- **Product Catalog**: Edit `data/products.ts` for flavour names, descriptions, tags, ingredients, and nutrition facts.
- **FAQs**: Edit `data/faqs.ts` to add or update question-and-answer pairs.
- **Design Tokens**: Edit CSS variables in `app/globals.css` and `lib/tokens.ts`.

## Adding Products & Swapping Images

1. Add optimised WebP images to `public/images/products/` (max 800px width, <=60 KB).
2. Append a new product item in `data/products.ts` with a unique `slug`, `flavour`, `bgColor`, and image paths.
3. The dynamic page `/products/[slug]` and all flavour carousels will update automatically.
