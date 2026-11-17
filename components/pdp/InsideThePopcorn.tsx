'use client';

import React from 'react';
import { ShieldCheck, Leaf, Sparkles, HeartPulse, Shield } from 'lucide-react';

export function InsideThePopcorn() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-14">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6 border-y-3 border-[var(--ink)]">
        {/* Playful Original "Inside the popcorn" Signboard Sticker */}
        <div className="flex items-center gap-4 flex-shrink-0 select-none">
          {/* Original Flat Popcorn Character SVG holding signboard */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full filter drop-shadow-md overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Signboard Pole */}
              <rect
                x="78"
                y="32"
                width="6"
                height="60"
                rx="3"
                fill="#8B4513"
                stroke="var(--ink)"
                strokeWidth="2.5"
              />

              {/* Signboard Board */}
              <g transform="rotate(-6 75 30)">
                <rect
                  x="36"
                  y="8"
                  width="80"
                  height="34"
                  rx="8"
                  fill="var(--yellow)"
                  stroke="var(--ink)"
                  strokeWidth="3"
                />
                <text
                  x="76"
                  y="24"
                  textAnchor="middle"
                  fontFamily="var(--font-display)"
                  fontSize="9"
                  fontWeight="bold"
                  fill="var(--ink)"
                >
                  INSIDE THE
                </text>
                <text
                  x="76"
                  y="34"
                  textAnchor="middle"
                  fontFamily="var(--font-display)"
                  fontSize="10"
                  fontWeight="bold"
                  fill="var(--ink)"
                >
                  POPCORN
                </text>
              </g>

              {/* Popcorn Character Body (Cloud-like fluffy shape) */}
              <path
                d="M32 90 C18 90 12 76 16 66 C10 56 18 42 30 42 C34 32 46 28 54 34 C62 26 76 30 78 40 C88 44 92 56 86 68 C92 78 84 90 70 90 Z"
                fill="#FFF4D0"
                stroke="var(--ink)"
                strokeWidth="3.2"
                strokeLinejoin="round"
              />

              {/* Golden kernel base */}
              <path
                d="M38 88 C44 98 58 98 64 88 Z"
                fill="var(--yellow)"
                stroke="var(--ink)"
                strokeWidth="2"
              />

              {/* Happy Eyes */}
              <circle cx="38" cy="60" r="3.5" fill="var(--ink)" />
              <circle cx="58" cy="60" r="3.5" fill="var(--ink)" />
              {/* Eye highlights */}
              <circle cx="39" cy="59" r="1.2" fill="white" />
              <circle cx="59" cy="59" r="1.2" fill="white" />

              {/* Cute Smile */}
              <path
                d="M42 68 Q48 76 54 68"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* Rosy Cheeks */}
              <circle cx="33" cy="68" r="3" fill="var(--orange-red)" opacity="0.6" />
              <circle cx="63" cy="68" r="3" fill="var(--orange-red)" opacity="0.6" />

              {/* Character Left Arm holding pole */}
              <path
                d="M68 66 Q74 58 80 52"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Character Right Waving Arm */}
              <path
                d="M22 66 Q14 58 16 50"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Character Shoes */}
              <ellipse
                cx="40"
                cy="98"
                rx="7"
                ry="4"
                fill="var(--orange-red)"
                stroke="var(--ink)"
                strokeWidth="2"
              />
              <ellipse
                cx="60"
                cy="98"
                rx="7"
                ry="4"
                fill="var(--orange-red)"
                stroke="var(--ink)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="hidden sm:block">
            <span className="font-display text-[19px] md:text-[22px] text-[var(--ink)] uppercase leading-none block">
              REAL INGREDIENTS ONLY
            </span>
            <span className="font-body text-xs md:text-sm text-[var(--ink)]/70">
              Clean label • Non-GMO grain
            </span>
          </div>
        </div>

        {/* Monochrome Badge Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center w-full lg:w-auto justify-items-center">
          {/* Badge 1: NON-GMO */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] mb-2">
              <Sparkles className="w-6 h-6" strokeWidth={2.4} />
            </div>
            <span className="font-display text-xs md:text-sm uppercase text-[var(--ink)]">
              Non-GMO Corn
            </span>
          </div>

          {/* Badge 2: GLUTEN FREE */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] mb-2">
              <ShieldCheck className="w-6 h-6" strokeWidth={2.4} />
            </div>
            <span className="font-display text-xs md:text-sm uppercase text-[var(--ink)]">
              Gluten Free
            </span>
          </div>

          {/* Badge 3: VEGAN */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] mb-2">
              <Leaf className="w-6 h-6" strokeWidth={2.4} />
            </div>
            <span className="font-display text-xs md:text-sm uppercase text-[var(--ink)]">
              100% Vegan
            </span>
          </div>

          {/* Badge 4: NO PALM OIL */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] mb-2">
              <Shield className="w-6 h-6" strokeWidth={2.4} />
            </div>
            <span className="font-display text-xs md:text-sm uppercase text-[var(--ink)]">
              No Palm Oil
            </span>
          </div>

          {/* Badge 5: HIGH FIBRE */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] mb-2">
              <HeartPulse className="w-6 h-6" strokeWidth={2.4} />
            </div>
            <span className="font-display text-xs md:text-sm uppercase text-[var(--ink)]">
              High Fibre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
