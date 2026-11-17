import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  tag?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  children,
  subtitle,
  tag,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {tag && (
        <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] text-[var(--ink)] font-display text-xs uppercase tracking-wider mb-2 shadow-xs">
          {tag}
        </span>
      )}
      <h2 className="section-headline text-[var(--ink)] m-0 leading-tight">{children}</h2>
      {subtitle && (
        <p className="font-body text-[18px] md:text-[20px] text-[var(--ink)]/80 mt-2 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
