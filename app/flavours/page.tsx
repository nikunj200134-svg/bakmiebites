import React from 'react';
import type { Metadata } from 'next';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

export const metadata: Metadata = {
  title: 'All Flavours | BakmieBites Gourmet Popcorn',
  description:
    'Explore our full lineup of artisanal popcorn flavours: Peri Peri, Tangy Tomato, and Cheddar Cheese. Popped in refined sunflower oil with natural protein and zero palm oil.',
};

export default function AllFlavoursPage() {
  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16 w-full">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] font-display text-xs uppercase tracking-wider text-[var(--ink)] mb-3">
            Handcrafted In India
          </span>
          <h1 className="section-headline text-[var(--ink)] m-0">OUR SIGNATURE FLAVOURS</h1>
          <p className="font-body text-base md:text-lg text-[var(--ink)]/80 mt-3">
            Every batch is popped in pure refined sunflower oil and generously dusted with bold
            kitchen spices. 100% whole grain, natural protein, and zero palm oil.
          </p>
        </div>

        {/* Flavours Grid using shared ProductCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} className="h-[480px]" />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
