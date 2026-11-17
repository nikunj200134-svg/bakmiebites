'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Pause, Play } from 'lucide-react';
import { ProductItem } from '@/lib/tokens';

interface TastesFeelsDoesProps {
  product: ProductItem;
}

export function TastesFeelsDoes({ product }: TastesFeelsDoesProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [sliderPos, setSliderPos] = useState(50); // Split slider position percentage

  const tfd = product.tastesFeelsDoes;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-12">
      <div
        className="rounded-[32px] border-3 border-[var(--ink)] p-6 md:p-10 lg:p-12 shadow-sm"
        style={{ backgroundColor: product.accentTint || '#FFF9EB' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 cols): 3 Stacked Outlined Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Card 1: TASTES */}
            <div className="rounded-[22px] border-3 border-[var(--ink)] bg-[var(--yellow)] p-5 shadow-[4px_4px_0px_var(--ink)] flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[20px] md:text-[22px] text-[var(--ink)] uppercase leading-none m-0">
                  {tfd.tastesTitle}
                </h3>
                <p className="font-body text-sm md:text-base text-[var(--ink)]/85 mt-2 leading-snug">
                  {tfd.tastesDesc}
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl border-2 border-[var(--ink)] bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-6 h-6 text-[var(--ink)]" strokeWidth={3} />
              </div>
            </div>

            {/* Card 2: FEELS */}
            <div className="rounded-[22px] border-3 border-[var(--ink)] bg-white p-5 shadow-[4px_4px_0px_var(--ink)] flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[20px] md:text-[22px] text-[var(--ink)] uppercase leading-none m-0">
                  {tfd.feelsTitle}
                </h3>
                <p className="font-body text-sm md:text-base text-[var(--ink)]/85 mt-2 leading-snug">
                  {tfd.feelsDesc}
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl border-2 border-[var(--ink)] bg-[var(--yellow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-6 h-6 text-[var(--ink)]" strokeWidth={3} />
              </div>
            </div>

            {/* Card 3: DOES */}
            <div className="rounded-[22px] border-3 border-[var(--ink)] bg-[var(--white)] p-5 shadow-[4px_4px_0px_var(--ink)] flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[20px] md:text-[22px] text-[var(--ink)] uppercase leading-none m-0">
                  {tfd.doesTitle}
                </h3>
                <p className="font-body text-sm md:text-base text-[var(--ink)]/85 mt-2 leading-snug">
                  {tfd.doesDesc}
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl border-2 border-[var(--ink)] bg-[var(--green)] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-6 h-6" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Big Rounded Split Image Panel */}
          <div className="lg:col-span-7 relative">
            <div
              className={`relative rounded-[28px] border-3 border-[var(--ink)] overflow-hidden aspect-[4/3] md:aspect-[16/11] bg-amber-500 shadow-sm ${
                isPlaying ? 'transition-all duration-700' : ''
              }`}
            >
              {/* Left Image: Crunchy seasoned popped corn */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/hero/pexels-jadesandra-34024765.webp"
                  alt="Crunchy seasoned popcorn close-up"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] text-[var(--ink)] font-display text-xs uppercase shadow-xs">
                    POPPED CRUNCH
                  </span>
                </div>
              </div>

              {/* Right Image: Raw whole corn grain & spice explosion (Clipped by sliderPos) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
                }}
              >
                <Image
                  src="/images/hero/pexels-helloaesthe-8652508.webp"
                  alt="Whole corn grains and natural spices"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-[var(--white)] border-2 border-[var(--ink)] text-[var(--ink)] font-display text-xs uppercase shadow-xs">
                    100% WHOLE GRAIN
                  </span>
                </div>
              </div>

              {/* Center Vertical Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[var(--white)] shadow-md pointer-events-none z-20 flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-[var(--ink)] text-white border-2 border-white flex items-center justify-center shadow-lg text-xs font-bold">
                  ⇄
                </div>
              </div>

              {/* Subtle Interactive Range input over the image */}
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Adjust before and after popcorn split slider"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

              {/* Pause/Play Button for animation */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
                className="absolute bottom-4 right-4 z-30 w-10 h-10 rounded-full bg-[var(--white)] border-2 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] hover:bg-[var(--yellow)] transition-colors shadow-sm cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" strokeWidth={2.5} />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
                )}
              </button>
            </div>

            <p className="text-center font-display text-xs uppercase tracking-wider text-[var(--ink)]/60 mt-2">
              ← Drag slider to view whole grain vs. seasoned popcorn →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
