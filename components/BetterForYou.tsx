'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Zap, Heart } from 'lucide-react';

const BENEFITS = [
  {
    icon: Sparkles,
    headingLine1: 'HIGH IN',
    headingLine2: 'DIETARY FIBRE',
    body: 'Made from whole-grain corn kernels packed with natural fiber that supports comfortable digestion and keeps you full between meals.',
    accentColor: '#FFC800',
  },
  {
    icon: Zap,
    headingLine1: 'PLANT-POWERED',
    headingLine2: 'CLEAN ENERGY',
    body: 'Wholesome fuel from real grain and pantry spices without the midday sugar crashes or sluggish heavy feeling of deep-fried chips.',
    accentColor: '#F04A23',
  },
  {
    icon: Heart,
    headingLine1: 'HEART-FRIENDLY',
    headingLine2: 'GUILT-FREE CRUNCH',
    body: 'Popped hot with zero trans fats, zero cholesterol, and zero artificial preservatives. A clean crunch you can genuinely enjoy every day.',
    accentColor: '#7CB82F',
  },
];

export function BetterForYou() {
  return (
    <section
      id="benefits"
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10 md:py-20 overflow-hidden rounded-[28px] md:rounded-[32px] border-3 border-[var(--ink)] shadow-sm"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/better-for-you-bg.webp"
          alt="Wholesome ingredients background"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />
        {/* Soft overlay so yellow heading and cards remain crisp and legible */}
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10">
        {/* Mega Heading spanning full width */}
        <div className="w-full select-none mb-8 md:mb-16">
          <h2 className="mega-headline text-[var(--yellow)] stroke-[var(--ink)] flex items-center justify-between sm:justify-start gap-2 transition-transform duration-500 hover:scale-[1.01] m-0">
            <span className="drop-shadow-[3px_3px_0px_var(--ink)] md:drop-shadow-[4px_4px_0px_var(--ink)]">
              BETTER FOR YOU
            </span>
            <span className="drop-shadow-[3px_3px_0px_var(--ink)] md:drop-shadow-[4px_4px_0px_var(--ink)]">
              ✦
            </span>
          </h2>
        </div>

        {/* 3 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-8 rounded-[28px] bg-[var(--white)] border-3 border-[var(--ink)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl shadow-xs cursor-pointer select-none"
              >
                {/* Custom Icon in Yellow with Ink Outline and smooth hover bounce */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] mb-6 shadow-sm transition-all duration-300 group-hover:scale-115 group-hover:rotate-6"
                  style={{ backgroundColor: b.accentColor }}
                >
                  <Icon className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2.4} />
                </div>

                {/* Heading in display caps (2 lines) */}
                <h3 className="font-display text-[24px] md:text-[28px] text-[var(--ink)] uppercase leading-tight m-0 mb-3 group-hover:text-[var(--orange-red)] transition-colors">
                  <span className="block">{b.headingLine1}</span>
                  <span className="block">{b.headingLine2}</span>
                </h3>

                {/* 3-line body text */}
                <p className="font-body text-[16px] md:text-[17px] text-[var(--ink)]/85 leading-relaxed max-w-sm">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
