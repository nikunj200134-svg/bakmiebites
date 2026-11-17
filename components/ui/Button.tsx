import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'yellow';
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  href,
  icon,
  children,
  className = '',
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-display text-[18px] md:text-[20px] uppercase tracking-wide transition-all duration-200 border-3 border-[var(--ink)] shadow-xs hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20 cursor-pointer select-none';

  const variants = {
    primary: 'bg-[var(--ink)] text-[var(--white)] hover:bg-[var(--orange-red)] hover:text-white',
    secondary: 'bg-[var(--orange-red)] text-[var(--white)] hover:bg-[var(--ink)]',
    outline: 'bg-[var(--white)] text-[var(--ink)] hover:bg-[var(--yellow)]',
    yellow: 'bg-[var(--yellow)] text-[var(--ink)] hover:bg-[var(--orange-red)] hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (href.startsWith('http') || target === '_blank') {
      return (
        <a
          href={href}
          target={target}
          rel={rel || 'noopener noreferrer'}
          className={combinedClasses}
        >
          {icon}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
