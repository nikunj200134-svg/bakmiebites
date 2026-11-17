'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick?: () => void;
}

export function Hero({ onShopClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 mt-6 md:mt-8">
      {/* Big Rounded Card */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-[32px] overflow-hidden border-3 border-[var(--ink)] bg-[var(--yellow)] shadow-sm transition-all duration-300"
      >
        {/* Two-tone background: Top Yellow, Bottom Orange-Red with Smooth Wavy SVG Curve */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top Yellow half */}
          <div className="w-full h-[55%] md:h-[50%] bg-[var(--yellow)]" />
          {/* Transition wave SVG */}
          <div className="w-full h-16 md:h-28 -mt-1 relative overflow-hidden">
            <svg
              viewBox="0 0 1440 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full preserve-3d"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C320,130 540,0 880,70 C1140,120 1340,30 1440,50 L1440,160 L0,160 Z"
                fill="var(--orange-red)"
              />
            </svg>
          </div>
          {/* Bottom Orange-Red */}
          <div className="w-full h-full bg-[var(--orange-red)]" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-16 min-h-[580px] lg:min-h-[640px]">
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 max-w-2xl">
            {/* Huge 2-line headline */}
            <h1 className="hero-headline font-display m-0">
              <span className="block text-[var(--white)] drop-shadow-sm transition-transform duration-300 hover:translate-x-1">
                POPCORN CRUNCH:
              </span>
              <span className="block text-[var(--ink)] transition-transform duration-300 hover:translate-x-1">
                THE POWER SNACK YOUR PANTRY IS MISSING.
              </span>
            </h1>

            {/* Bold 2-line subheading in var(--ink) caps */}
            <p className="font-display text-[18px] md:text-[22px] lg:text-[24px] text-[var(--ink)] tracking-normal uppercase leading-tight max-w-xl">
              CRAFTED WITH 100% WHOLE-GRAIN CORN, POPPED IN REFINED SUNFLOWER OIL AND TOSSED IN
              FIERY BOLD SEASONING.
            </p>

            {/* Dark pill CTA with interactive hover shine & pulse */}
            <a
              href="#snack-section"
              onClick={onShopClick}
              className="group relative mt-2 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[var(--ink)] text-[var(--white)] font-display text-[20px] md:text-[22px] tracking-wide uppercase hover:bg-[var(--white)] hover:text-[var(--ink)] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md border-3 border-[var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <span>EXPLORE FLAVOURS</span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={3}
              />
            </a>
          </div>

          {/* Right Column (5 Cols): Overlapping product packs with interactive 3D parallax */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[460px] perspective-1000">
            {/* Soft decorative glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[var(--yellow)]/35 blur-3xl pointer-events-none" />

            {/* Floating Popcorn Pieces around packs */}
            {/* Floating kernel 1 */}
            <div
              className="absolute -top-4 left-4 md:left-8 z-30 pointer-events-none float-item-1 transition-transform duration-300"
              style={{ transform: `translate3d(${tilt.x * 1.5}px, ${tilt.y * 1.5}px, 20px)` }}
            >
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] text-[var(--ink)] font-display text-sm uppercase shadow-sm rotate-[-12deg] hover:rotate-0 transition-transform">
                🍿 CRUNCH!
              </span>
            </div>

            {/* Floating kernel 2 */}
            <div
              className="absolute bottom-6 right-2 md:right-6 z-30 pointer-events-none float-item-2 transition-transform duration-300"
              style={{ transform: `translate3d(${tilt.x * -1.2}px, ${tilt.y * -1.2}px, 30px)` }}
            >
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[var(--white)] border-2 border-[var(--ink)] text-[var(--ink)] font-display text-sm uppercase shadow-sm rotate-[14deg] hover:rotate-0 transition-transform">
                ✨ 100% NON-GMO
              </span>
            </div>

            {/* Floating kernel 3 */}
            <div
              className="absolute top-1/2 -left-6 z-30 pointer-events-none float-item-3 transition-transform duration-300"
              style={{ transform: `translate3d(${tilt.x * 2}px, ${tilt.y * 2}px, 40px)` }}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] flex items-center justify-center text-xl shadow-sm rotate-12 hover:rotate-0 transition-transform">
                🌶️
              </div>
            </div>

            {/* Two overlapping product packs with interactive 3D parallax tilt */}
            <div
              className="relative flex items-center justify-center w-full max-w-[420px] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Back Card (Tangy Tomato Popcorn visual) */}
              <div className="relative z-10 w-[200px] md:w-[240px] lg:w-[260px] aspect-[4/5] rounded-[24px] border-3 border-[var(--ink)] overflow-hidden transform -rotate-12 translate-x-4 translate-y-3 filter drop-shadow-xl hover:rotate-[-6deg] hover:scale-105 transition-all duration-300 cursor-pointer bg-[var(--yellow)]">
                <Image
                  src="/images/hero/pexels-yann-rimaz-2150970240-31427398.webp"
                  alt="BakmieBites Tangy Tomato Popcorn"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Front Card (Peri Peri Crunch visual) - LCP Image */}
              <div className="relative z-20 w-[220px] md:w-[260px] lg:w-[280px] aspect-[4/5] rounded-[24px] border-3 border-[var(--ink)] overflow-hidden transform rotate-6 -translate-x-6 -translate-y-4 filter drop-shadow-2xl hover:rotate-[9deg] hover:scale-105 transition-all duration-300 cursor-pointer bg-[var(--orange-red)]">
                <Image
                  src="/images/hero/pexels-electra-studio-32883186-30925503.webp"
                  alt="BakmieBites Peri Peri Popcorn"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
