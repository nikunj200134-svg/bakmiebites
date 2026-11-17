import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PRODUCTS } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'About Our Ingredients | BakmieBites',
  description:
    'Pure whole grain corn, refined sunflower oil, and bold natural spices. Zero palm oil, gluten-free, and vegan gourmet popcorn.',
};

export default function IngredientsPage() {
  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between mb-8">
          <nav
            aria-label="Breadcrumb"
            className="text-xs md:text-sm font-display uppercase tracking-wider text-[var(--ink)]/60"
          >
            <Link href="/" className="hover:text-[var(--orange-red)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)]">Ingredients</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-wider text-[var(--ink)] hover:text-[var(--orange-red)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--yellow)] rounded-[32px] border-3 border-[var(--ink)] p-8 md:p-14 text-center mb-12 shadow-sm">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--white)] border-2 border-[var(--ink)] font-display text-xs md:text-sm uppercase tracking-wide mb-4 text-[var(--ink)]">
            PURE &amp; REAL INGREDIENTS
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] md:text-[60px] text-[var(--ink)] uppercase leading-[1.02] max-w-3xl mx-auto">
            POPPED WITH INTEGRITY, SEASONED WITH PASSION
          </h1>
          <p className="font-body text-base md:text-lg text-[var(--ink)]/85 max-w-2xl mx-auto mt-4 leading-relaxed">
            Every batch of BakmieBites starts with 100% whole-grain corn kernels popped in pure
            refined sunflower oil. Zero palm oil, zero artificial colours, zero trans fats.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border-2 border-[var(--ink)]">
              <span className="font-display text-base text-[var(--ink)] uppercase block">
                100% WHOLE GRAIN
              </span>
              <span className="font-body text-xs text-[var(--ink)]/70">Butterfly corn kernels</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border-2 border-[var(--ink)]">
              <span className="font-display text-base text-[var(--ink)] uppercase block">
                SUNFLOWER OIL
              </span>
              <span className="font-body text-xs text-[var(--ink)]/70">Pure refined oil only</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border-2 border-[var(--ink)]">
              <span className="font-display text-base text-[var(--ink)] uppercase block">
                ZERO PALM OIL
              </span>
              <span className="font-body text-xs text-[var(--ink)]/70">Heart-conscious choice</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border-2 border-[var(--ink)]">
              <span className="font-display text-base text-[var(--ink)] uppercase block">
                NATURAL PROTEIN
              </span>
              <span className="font-body text-xs text-[var(--ink)]/70">Plant-powered fuel</span>
            </div>
          </div>
        </div>

        {/* Flavour-by-Flavour Ingredients List */}
        <div className="space-y-8">
          <h2 className="font-display text-[26px] md:text-[34px] text-[var(--ink)] uppercase text-center mb-8">
            FLAVOUR INGREDIENT BREAKDOWNS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.slug}
                className="rounded-[28px] border-3 border-[var(--ink)] bg-[var(--white)] overflow-hidden flex flex-col justify-between shadow-sm"
              >
                {/* Header */}
                <div
                  className="p-6 border-b-3 border-[var(--ink)] flex items-center justify-between"
                  style={{ backgroundColor: prod.bgColor }}
                >
                  <div>
                    <span className="font-display text-xs uppercase px-3 py-1 rounded-md bg-[var(--ink)] text-white inline-block mb-1">
                      {prod.tag}
                    </span>
                    <h3 className="font-display text-2xl text-[var(--ink)] uppercase leading-none m-0">
                      {prod.flavour}
                    </h3>
                  </div>

                  <div className="w-16 h-16 relative rounded-xl border-2 border-[var(--ink)] overflow-hidden shadow-xs">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover filter drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-xs text-[var(--ink)] uppercase tracking-wider mb-2">
                      INGREDIENTS LIST:
                    </h4>
                    <p className="font-body text-sm text-[var(--ink)]/85 leading-relaxed bg-[var(--ink)]/5 p-4 rounded-2xl border border-[var(--ink)]/15">
                      {prod.ingredients}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xs text-[var(--ink)] uppercase tracking-wider mb-2">
                      KEY HIGHLIGHTS:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prod.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--yellow)]/20 text-[var(--ink)] font-display text-xs uppercase"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--ink)]/10 flex items-center justify-between">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="font-display text-xs text-[var(--ink)] uppercase hover:text-[var(--orange-red)] underline underline-offset-4"
                    >
                      View Product Page →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
