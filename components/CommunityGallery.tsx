'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { INSTAGRAM_URL } from '@/lib/siteConfig';

const TILES = [
  {
    src: '/images/gallery/pexels-odin-reyna-383507-7669407.webp',
    alt: 'Snack lovers enjoying BakmieBites',
    caption: 'Everyday street style & bold snacks',
  },
  {
    src: '/images/gallery/pexels-75310099-10233958.webp',
    alt: 'Crunchy artisanal popcorn moments',
    caption: 'Artisanal popcorn moments',
  },
  {
    src: '/images/gallery/pexels-cottonbro-3843284.webp',
    alt: 'Movie night popcorn sharing',
    caption: 'Movie night & crunchy snacking',
  },
  {
    src: '/images/gallery/pexels-elsa-olofsson-3357043-5331317.webp',
    alt: 'Fresh gourmet popcorn bowl',
    caption: 'Fresh whole-grain bowl',
  },
];

export function CommunityGallery() {
  return (
    <section
      id="community"
      className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16"
    >
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-10">
        <h2 className="section-headline text-[var(--ink)] m-0">POWER TO THE SNACKERS</h2>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--white)] font-display text-[18px] md:text-[20px] uppercase hover:scale-105 active:scale-95 transition-all shadow-sm w-fit"
        >
          <InstagramIcon className="w-5 h-5 text-[var(--yellow)]" />
          <span>FOLLOW @BAKMIEBITES</span>
          <ArrowUpRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
        </a>
      </div>

      {/* 4 Equal-Width Rounded Image Tiles (~4:5 portrait ratio) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {TILES.map((tile, idx) => (
          <a
            key={idx}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${tile.alt} on Instagram`}
            className="group relative rounded-[24px] border-3 border-[var(--ink)] overflow-hidden aspect-[4/5] bg-[var(--yellow)]/20 shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:z-10 cursor-pointer block"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay & Hover Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="font-display text-xs md:text-sm text-white uppercase tracking-wider leading-tight">
                {tile.caption}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
