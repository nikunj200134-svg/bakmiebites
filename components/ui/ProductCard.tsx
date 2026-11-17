import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProductItem } from '@/data/products';

interface ProductCardProps {
  product: ProductItem;
  priority?: boolean;
  className?: string;
}

export function ProductCard({ product, priority = false, className = '' }: ProductCardProps) {
  return (
    <div
      className={`bg-[var(--white)] rounded-[24px] border-3 border-[var(--ink)] overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-2 group shadow-sm select-none ${className}`}
    >
      {/* Top ~72%: Coloured Background + Swirl Pattern */}
      <Link
        href={`/products/${product.slug}`}
        className="relative h-[72%] min-h-[300px] w-full overflow-hidden flex items-center justify-center p-6 focus:outline-none cursor-pointer"
        style={{ backgroundColor: product.bgColor }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="40" stroke="white" strokeWidth="8" />
          <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="8" />
          <circle cx="150" cy="150" r="120" stroke="white" strokeWidth="8" />
          <circle cx="150" cy="150" r="160" stroke="white" strokeWidth="8" />
          <circle cx="150" cy="150" r="200" stroke="white" strokeWidth="8" />
        </svg>

        {/* Tilted Tag Top-Right */}
        <div className="absolute top-4 right-4 z-20 transform rotate-6">
          <span className="px-3 py-1 rounded-lg bg-[var(--ink)] text-[var(--white)] font-display text-xs tracking-wider uppercase shadow-sm">
            {product.tag}
          </span>
        </div>

        {/* Centered Product Photo with Rounded Frame */}
        <div className="relative z-10 w-full h-full max-h-[240px] max-w-[280px] rounded-2xl border-3 border-[var(--ink)] overflow-hidden shadow-sm flex items-center justify-center bg-white">
          <Image
            src={product.image}
            alt={`${product.flavour} Popcorn`}
            fill
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Bottom White Strip */}
      <div className="h-[28%] bg-[var(--white)] border-t-3 border-[var(--ink)] px-5 py-4 flex flex-col justify-between">
        <Link href={`/products/${product.slug}`} className="block">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-[19px] md:text-[21px] text-[var(--ink)] uppercase leading-none m-0 hover:text-[var(--orange-red)] transition-colors">
                {product.name}
              </h3>
              <p className="font-display text-[17px] text-[var(--orange-red)] tracking-wide mt-1 uppercase">
                {product.flavour}
              </p>
            </div>
          </div>
        </Link>

        {/* SEE FLAVOUR button */}
        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 py-2.5 px-4 rounded-full border-2 border-[var(--ink)] bg-[var(--ink)] hover:bg-[var(--orange-red)] text-white font-display text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <span>SEE FLAVOUR</span>
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
