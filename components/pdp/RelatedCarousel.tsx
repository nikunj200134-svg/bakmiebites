'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { CarouselControls } from '@/components/CarouselControls';

interface RelatedCarouselProps {
  currentSlug: string;
  accentTint?: string;
}

export function RelatedCarousel({ currentSlug, accentTint = '#FFF5DB' }: RelatedCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter out current product to ensure "Also try" never shows the current product
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== currentSlug);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 390;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const handleScrub = (ratio: number) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    scrollRef.current.scrollTo({
      left: ratio * maxScroll,
      behavior: 'auto',
    });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-14">
      {/* Container in product's accent tint */}
      <div
        className="rounded-[32px] border-3 border-[var(--ink)] p-6 md:p-10 lg:p-12 shadow-sm"
        style={{ backgroundColor: accentTint }}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-headline text-[var(--ink)] m-0">YOU MAY ALSO LIKE...</h2>

          <Link
            href="/flavours"
            className="flex items-center gap-2 group text-[var(--ink)] font-display text-[18px] md:text-[22px] uppercase hover:opacity-80 transition-opacity"
          >
            <span>ALL FLAVOURS</span>
            <span className="w-10 h-10 rounded-full bg-[var(--white)] border-3 border-[var(--ink)] flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shadow-sm">
              <ArrowUpRight className="w-5 h-5 text-[var(--ink)]" strokeWidth={3} />
            </span>
          </Link>
        </div>

        {/* Carousel Row */}
        <div
          ref={scrollRef}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') scrollByCard('left');
            if (e.key === 'ArrowRight') scrollByCard('right');
          }}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-6 md:-mx-10 lg:-mx-12 px-6 md:px-10 lg:px-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
          aria-label="Related flavours carousel"
        >
          {relatedProducts.map((prod, idx) => (
            <div
              key={prod.id}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[350px] md:w-[370px] h-[480px] md:h-[500px]"
            >
              <ProductCard product={prod} priority={idx < 2} className="h-full" />
            </div>
          ))}
        </div>

        {/* Unified Carousel Controls */}
        <CarouselControls
          scrollProgress={scrollProgress}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onScrollLeft={() => scrollByCard('left')}
          onScrollRight={() => scrollByCard('right')}
          onScrub={handleScrub}
        />
      </div>
    </section>
  );
}
