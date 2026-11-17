'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '@/data/testimonials';
import { CarouselControls } from './CarouselControls';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const scrollByReview = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
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
    <section
      id="testimonials"
      className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16"
    >
      {/* Rounded Yellow Container with overflow-hidden */}
      <div className="bg-[var(--yellow)] rounded-[32px] border-3 border-[var(--ink)] p-6 md:p-10 lg:p-14 overflow-hidden shadow-sm">
        {/* Centered Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-headline text-[var(--ink)] m-0">WHAT THEY&apos;RE SAYING...</h2>
          <p className="font-body text-xs text-[var(--ink)]/60 uppercase tracking-widest mt-2">
            [ Verified Customer Reviews / Feedback ]
          </p>
        </div>

        {/* Horizontal Row of Review Cards */}
        <div
          ref={scrollRef}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') scrollByReview('left');
            if (e.key === 'ArrowRight') scrollByReview('right');
          }}
          className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-8 pb-4 -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
          aria-label="Customer testimonials"
        >
          {TESTIMONIALS.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="relative snap-start flex-shrink-0 w-[300px] sm:w-[350px] md:w-[390px] bg-[var(--white)] rounded-[24px] border-3 border-[var(--ink)] p-6 md:p-8 flex flex-col justify-between shadow-sm transition-transform duration-200 hover:-translate-y-1.5"
            >
              {/* Product Thumbnail overlapping top-right edge */}
              <div className="absolute -top-6 -right-4 w-18 h-18 md:w-20 md:h-20 rounded-2xl border-3 border-[var(--ink)] overflow-hidden bg-[var(--yellow)] filter drop-shadow-md z-20 pointer-events-none transform rotate-6">
                <Image
                  src={item.thumbnail}
                  alt={item.flavour}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top-Left: 5 Ink Stars + First Name Below */}
              <div>
                <div className="flex items-center gap-1 text-[var(--ink)] mb-2">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--ink)] text-[var(--ink)]"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <span className="font-display text-[19px] md:text-[21px] text-[var(--ink)] uppercase">
                  {item.name}
                </span>

                {/* Quote in Body Font */}
                <p className="font-body text-[18px] md:text-[21px] text-[var(--ink)] leading-snug mt-4 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom-Right: Underlined Bold Link */}
              <div className="pt-6 mt-4 border-t border-[var(--ink)]/10 flex items-center justify-between">
                <span className="text-xs font-display text-[var(--ink)]/70 uppercase">
                  {item.flavour}
                </span>

                <Link
                  href={`/products/${item.slug || 'peri-peri'}`}
                  className="inline-flex items-center gap-1 font-display text-[16px] md:text-[18px] text-[var(--ink)] uppercase underline underline-offset-4 hover:text-[var(--orange-red)] transition-colors"
                >
                  <span>SEE FLAVOUR</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Progress Bar (Left) + Circular Buttons (Right) */}
        <CarouselControls
          scrollProgress={scrollProgress}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onScrollLeft={() => scrollByReview('left')}
          onScrollRight={() => scrollByReview('right')}
          onScrub={handleScrub}
          leftLabel="Previous review"
          rightLabel="Next review"
        />
      </div>
    </section>
  );
}
