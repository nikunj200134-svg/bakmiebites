import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductHero } from '@/components/pdp/ProductHero';
import { InsideThePopcorn } from '@/components/pdp/InsideThePopcorn';
import { TastesFeelsDoes } from '@/components/pdp/TastesFeelsDoes';
import { RelatedCarousel } from '@/components/pdp/RelatedCarousel';
import { PRODUCTS, getProductBySlug } from '@/lib/tokens';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: 'Flavour Not Found | BakmieBites',
    };
  }

  return {
    title: `${product.flavour} Popcorn | BakmieBites`,
    description: `${product.description} Popped in refined sunflower oil with natural protein, high fibre, and zero palm oil.`,
    openGraph: {
      title: `${product.flavour} Popcorn | BakmieBites`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: `${product.name} - ${product.flavour}`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Brand showcase JSON-LD structured data (no commercial offers)
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} - ${product.flavour}`,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'BakmieBites',
    },
  };

  // If showPrice is ever enabled in the data file:
  if (product.showPrice && product.numericPrice) {
    jsonLd.offers = {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.numericPrice,
      availability: 'https://schema.org/InStock',
      url: `https://bakmiebites.vercel.app/products/${product.slug}`,
    };
  }

  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Header */}
      <Header />

      <main className="flex-1 pb-16">
        {/* A. Top Container: Gallery + New Info Box */}
        <ProductHero product={product} />

        {/* B. Trust Row: Character Signboard + Badges */}
        <InsideThePopcorn />

        {/* C. Tastes / Feels / Does Split Section */}
        <TastesFeelsDoes product={product} />

        {/* D. You May Also Like Carousel */}
        <RelatedCarousel currentSlug={product.slug} accentTint={product.accentTint} />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
