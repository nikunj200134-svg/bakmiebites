'use client';

import React from 'react';

const MESSAGES = [
  'TRY OUR NEW BAKMIEBITES PERI PERI POPCORN!',
  '100% WHOLE GRAIN CRUNCH',
  'NATURAL PROTEIN & FIBRE',
  'NO PALM OIL • REFINED SUNFLOWER OIL',
  'EXPLORE PERI PERI, TANGY TOMATO & CHEDDAR CHEESE!',
];

export function AnnouncementBar() {
  return (
    <div
      className="marquee-container w-full h-[64px] bg-[var(--yellow)] overflow-hidden flex items-center border-b border-[var(--ink)]/10 select-none"
      role="region"
      aria-label="Announcement banner"
    >
      <div className="animate-marquee flex items-center gap-8 text-[var(--ink)] font-display text-xl md:text-2xl tracking-wide uppercase">
        {/* Render twice for continuous infinite scroll */}
        {[...MESSAGES, ...MESSAGES, ...MESSAGES, ...MESSAGES].map((msg, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span>{msg}</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink)] inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
