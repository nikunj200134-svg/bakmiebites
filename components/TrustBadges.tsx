'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Leaf, HeartPulse, Zap, Shield } from 'lucide-react';

const BADGES = [
  {
    title: 'No Artificial Colours',
    subtitle: '100% Pure Spices',
    icon: Sparkles,
    color: '#FFC800',
  },
  {
    title: 'Gluten Free',
    subtitle: 'Safe for Everyone',
    icon: ShieldCheck,
    color: '#5CCFDD',
  },
  {
    title: 'Vegan',
    subtitle: 'Plant-Based Goodness',
    icon: Leaf,
    color: '#7CB82F',
  },
  {
    title: 'High Fibre',
    subtitle: 'Whole Corn Kernel',
    icon: HeartPulse,
    color: '#F04A23',
  },
  {
    title: 'Natural Protein',
    subtitle: 'Plant-Powered Energy',
    icon: Zap,
    color: '#FFC800',
  },
  {
    title: 'No Palm Oil',
    subtitle: 'Pure Sunflower Oil',
    icon: Shield,
    color: '#66C5E0',
  },
];

export function TrustBadges() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 md:py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
        {BADGES.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2 select-none"
            >
              {/* Circular Icon Container with spring hover & icon wobble */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-[var(--ink)] bg-transparent flex items-center justify-center text-[var(--ink)] mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md"
                style={{
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = badge.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                <Icon
                  className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={2.2}
                />
              </div>

              {/* Label */}
              <span className="font-display text-[16px] md:text-[18px] text-[var(--ink)] uppercase leading-tight tracking-tight transition-colors duration-200 group-hover:text-[var(--orange-red)]">
                {badge.title}
              </span>

              {/* Sub-label */}
              <span className="font-body text-xs md:text-sm text-[var(--ink)]/70 mt-1 font-medium">
                {badge.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
