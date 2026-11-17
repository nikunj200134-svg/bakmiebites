'use client';

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselControlsProps {
  scrollProgress: number; // 0 to 100
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onScrub: (ratio: number) => void;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

export function CarouselControls({
  scrollProgress,
  canScrollLeft,
  canScrollRight,
  onScrollLeft,
  onScrollRight,
  onScrub,
  leftLabel = 'Previous slide',
  rightLabel = 'Next slide',
  className = '',
}: CarouselControlsProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();

    const updateFromPosition = (clientX: number) => {
      const rawRatio = (clientX - rect.left) / rect.width;
      const clamped = Math.max(0, Math.min(1, rawRatio));
      onScrub(clamped);
    };

    updateFromPosition(e.clientX);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      updateFromPosition(moveEvent.clientX);
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <div
      className={`flex items-center justify-between gap-6 mt-7 md:mt-8 pt-2 select-none ${className}`}
    >
      {/* Progress Track (6px high, rounded track, clickable/draggable scrub) */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        role="slider"
        aria-label="Carousel scroll position"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        className="flex-1 max-w-xs sm:max-w-sm md:max-w-md h-[6px] bg-[var(--ink)]/20 rounded-full cursor-pointer relative overflow-hidden touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
      >
        <div
          className="h-[6px] bg-[var(--ink)] rounded-full transition-all duration-100 ease-out pointer-events-none"
          style={{ width: `${Math.max(8, Math.min(100, scrollProgress))}%` }}
        />
      </div>

      {/* Arrow Buttons (52-56px circles, same size, 3px ink border, white fill) */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={onScrollLeft}
          disabled={!canScrollLeft}
          aria-disabled={!canScrollLeft}
          aria-label={leftLabel}
          className={`w-[52px] h-[52px] md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] ${
            canScrollLeft
              ? 'bg-white border-3 border-[var(--ink)] text-[var(--ink)] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 cursor-pointer'
              : 'bg-[var(--ink)]/10 border-3 border-[var(--ink)]/35 text-[var(--ink)]/35 cursor-not-allowed pointer-events-none'
          }`}
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
        </button>

        <button
          type="button"
          onClick={onScrollRight}
          disabled={!canScrollRight}
          aria-disabled={!canScrollRight}
          aria-label={rightLabel}
          className={`w-[52px] h-[52px] md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] ${
            canScrollRight
              ? 'bg-white border-3 border-[var(--ink)] text-[var(--ink)] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 cursor-pointer'
              : 'bg-[var(--ink)]/10 border-3 border-[var(--ink)]/35 text-[var(--ink)]/35 cursor-not-allowed pointer-events-none'
          }`}
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
