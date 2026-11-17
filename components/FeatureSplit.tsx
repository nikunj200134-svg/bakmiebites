'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, ArrowDown, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/tokens';

const LIFESTYLE_IMAGES = [
  {
    src: '/images/lifestyle/popcorn-bowl-crunch.webp',
    alt: 'Gourmet popcorn crunch with BakmieBites',
  },
  {
    src: '/images/lifestyle/crispy-snack-moment.webp',
    alt: 'Crispy plant-powered snacking moments',
  },
  {
    src: '/images/lifestyle/corn-cobs-harvest.webp',
    alt: 'Fresh whole-grain corn cobs in wooden harvest crate',
  },
  {
    src: '/images/lifestyle/fresh-popcorn-enjoyment.webp',
    alt: 'Fresh whole-grain popcorn enjoyment',
  },
  {
    src: '/images/lifestyle/fresh-wholegrain-snack.webp',
    alt: 'Golden popped corn crunch enjoyment',
  },
  {
    src: '/images/lifestyle/artisanal-lifestyle.webp',
    alt: 'Artisanal popcorn snacking lifestyle',
  },
];

export function FeatureSplit() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const currentProduct = PRODUCTS[activeProductIndex];

  // Automatic slideshow transition every 3 seconds with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % LIFESTYLE_IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <section
      id="feature"
      className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (55% / 7 cols): Large rounded image with heart-shaped NEW sticker + automatic crossfade transition */}
        <div
          className="lg:col-span-7 relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-[24px] border-3 border-[var(--ink)] bg-[var(--green)] overflow-hidden aspect-[4/3] md:aspect-[16/11] flex items-center justify-center shadow-sm select-none">
            {/* Stacked images with smooth cinematic crossfade & Ken Burns zoom transition */}
            {LIFESTYLE_IMAGES.map((img, idx) => {
              const isActive = idx === activeImageIndex;
              return (
                <div
                  key={img.src}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isActive
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 pointer-events-none z-0'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
              );
            })}

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent pointer-events-none z-10" />

            {/* Small Carousel Dots at the bottom centre */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
              {LIFESTYLE_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 border-2 border-[var(--ink)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    i === activeImageIndex
                      ? 'w-8 bg-[var(--yellow)] shadow-xs'
                      : 'w-3 bg-white hover:bg-[var(--yellow)]/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Heart-Shaped Yellow "NEW" Sticker overlapping top-right edge with gentle hover wobble */}
          <div className="absolute -top-6 -right-4 md:-top-8 md:-right-6 z-30 transform rotate-12 drop-shadow-lg pointer-events-none select-none transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-[var(--yellow)] stroke-[var(--ink)] stroke-[4]"
              >
                <path d="M50,85 C20,60 5,40 5,25 C5,10 20,5 35,15 C45,22 50,30 50,30 C50,30 55,22 65,15 C80,5 95,10 95,25 C95,40 80,60 50,85 Z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[20px] md:text-[24px] text-[var(--ink)] uppercase tracking-wider transform -rotate-12">
                  NEW!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (45% / 5 cols): Heading + Subtext + Single Product Card with Stacked Nav */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="section-headline text-[var(--ink)] m-0 leading-tight">
            <span className="block">BIG FLAVOUR</span>
            <span className="block text-[var(--orange-red)]">ENERGY.</span>
          </h2>

          <p className="font-body text-[18px] md:text-[20px] text-[var(--ink)]/80 mt-3 mb-6">
            Handcrafted in small batches with refined sunflower oil, real kitchen spices, and
            explosive crunch.
          </p>

          {/* Featured Product Card with Two Stacked Circular Buttons on its Right */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-[340px] md:max-w-[360px] h-[460px] bg-[var(--white)] rounded-[24px] border-3 border-[var(--ink)] overflow-hidden flex flex-col justify-between shadow-sm group">
              {/* Top ~72%: Coloured background + concentric circles */}
              <Link
                href={`/products/${currentProduct.slug}`}
                className="relative h-[72%] w-full overflow-hidden flex items-center justify-center p-6 transition-colors duration-500 cursor-pointer"
                style={{ backgroundColor: currentProduct.bgColor }}
              >
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                  viewBox="0 0 300 300"
                  fill="none"
                >
                  <circle cx="150" cy="150" r="50" stroke="white" strokeWidth="8" />
                  <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="8" />
                  <circle cx="150" cy="150" r="150" stroke="white" strokeWidth="8" />
                </svg>

                <div className="absolute top-4 right-4 z-20 transform rotate-6">
                  <span className="px-3 py-1 rounded-lg bg-[var(--ink)] text-[var(--white)] font-display text-xs tracking-wider uppercase">
                    {currentProduct.tag}
                  </span>
                </div>

                {/* Pouch Image with lively bounce transition on flavour change */}
                <div
                  key={currentProduct.slug}
                  className="relative z-10 w-full h-full flex items-center justify-center animate-in zoom-in-95 fade-in duration-300"
                >
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    width={240}
                    height={300}
                    className="max-h-[220px] w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Bottom White Strip */}
              <div className="h-[28%] bg-[var(--white)] border-t-3 border-[var(--ink)] px-5 py-4 flex flex-col justify-between">
                <Link href={`/products/${currentProduct.slug}`} className="block">
                  <h3 className="font-display text-[18px] md:text-[20px] text-[var(--ink)] uppercase leading-none m-0 hover:text-[var(--orange-red)] transition-colors">
                    {currentProduct.name}
                  </h3>
                  <p
                    className="font-display text-[15px] md:text-[17px] uppercase leading-tight mt-1"
                    style={{ color: currentProduct.textColor }}
                  >
                    {currentProduct.flavour}
                  </p>
                </Link>

                <div className="flex items-center justify-between pt-1 border-t border-[var(--ink)]/10">
                  <span className="font-body text-xs text-[var(--ink)]/70">100% whole grain</span>
                  <Link
                    href={`/products/${currentProduct.slug}`}
                    className="font-display text-xs uppercase tracking-wider text-[var(--ink)] hover:text-[var(--orange-red)] underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>SEE FLAVOUR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Stacked Circular Prev/Next Buttons on the right side */}
            <div className="flex flex-col gap-3">
              <button
                onClick={prevProduct}
                aria-label="Previous flavour"
                className="w-[52px] h-[52px] md:w-14 md:h-14 rounded-full border-3 border-[var(--ink)] bg-[var(--white)] flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 transition-all text-[var(--ink)] shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
              >
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </button>

              <button
                onClick={nextProduct}
                aria-label="Next flavour"
                className="w-[52px] h-[52px] md:w-14 md:h-14 rounded-full border-3 border-[var(--ink)] bg-[var(--white)] flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 transition-all text-[var(--ink)] shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
              >
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
