'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { ProductItem, PRODUCTS } from '@/data/products';
import { useContact } from '@/components/ContactContext';
import { Accordion } from '@/components/ui/Accordion';

interface ProductHeroProps {
  product: ProductItem;
  showContactButton?: boolean;
  onOpenContact?: () => void;
}

export function ProductHero({
  product,
  showContactButton = true,
  onOpenContact,
}: ProductHeroProps) {
  const router = useRouter();
  const { openContact } = useContact();
  const [activeImage, setActiveImage] = useState<string>(product.images[0] || product.image);

  const alsoTryProduct = PRODUCTS.find((p) => p.slug !== product.slug) || PRODUCTS[0];

  const handleInquiry = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      openContact(product.flavour);
    }
  };

  const accordionItems = [
    {
      id: 'ingredients',
      title: 'INGREDIENTS',
      content: (
        <div className="space-y-2">
          <p>{product.ingredients}</p>
          <p className="text-xs font-semibold text-[var(--orange-red)]">
            [Note: Refined sunflower oil used. Free from artificial colors, preservatives, and palm
            oil.]
          </p>
        </div>
      ),
    },
    {
      id: 'nutrition',
      title: 'NUTRITION FACTS',
      content: (
        <div className="text-xs">
          <p className="font-bold mb-2">Serving Size: {product.nutrition.servingSize}</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--ink)] font-display text-xs">
                <th className="py-1">Nutrient</th>
                <th className="py-1">Per 100g</th>
                <th className="py-1">Per Serving</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--ink)]/10">
              {product.nutrition.items.map((row, i) => (
                <tr key={i}>
                  <td className="py-1.5 font-medium">{row.label}</td>
                  <td className="py-1.5">{row.per100g}</td>
                  <td className="py-1.5">{row.perServing}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[10px] text-[var(--ink)]/60">
            * Values are approximate. (TODO: Verify against final lab certificate)
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 pt-4 pb-8">
      {/* Hidden preloads for instant thumbnail swapping */}
      <div className="hidden" aria-hidden="true">
        {product.images.map((img) => (
          <Image key={img} src={img} alt="" width={10} height={10} priority />
        ))}
      </div>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 text-xs md:text-sm font-display uppercase tracking-wider text-[var(--ink)]/60"
      >
        <Link href="/" className="hover:text-[var(--orange-red)]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/flavours" className="hover:text-[var(--orange-red)]">
          Flavours
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{product.flavour}</span>
      </nav>

      {/* Main Container */}
      <div
        className="rounded-[32px] border-3 border-[var(--ink)] p-6 md:p-10 lg:p-12 shadow-sm"
        style={{ backgroundColor: product.accentTint || '#FFF5DB' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT COLUMN: Main Image + Badges + Thumbnails */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Large Main Image Tile */}
              <div
                className="relative flex-1 w-full rounded-[24px] border-3 border-[var(--ink)] overflow-hidden aspect-square flex items-center justify-center p-8 transition-colors duration-300 shadow-sm"
                style={{ backgroundColor: product.bgColor }}
              >
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                  viewBox="0 0 300 300"
                  fill="none"
                >
                  <circle cx="150" cy="150" r="50" stroke="white" strokeWidth="8" />
                  <circle cx="150" cy="150" r="90" stroke="white" strokeWidth="8" />
                  <circle cx="150" cy="150" r="130" stroke="white" strokeWidth="8" />
                  <circle cx="150" cy="150" r="170" stroke="white" strokeWidth="8" />
                </svg>

                <div className="relative z-10 w-full h-full rounded-2xl border-3 border-[var(--ink)] overflow-hidden flex items-center justify-center bg-white shadow-sm">
                  <Image
                    key={activeImage}
                    src={activeImage}
                    alt={`${product.name} - ${product.flavour}`}
                    fill
                    className="object-cover animate-in fade-in duration-200"
                    priority
                  />
                </div>
              </div>

              {/* Badges Stack */}
              <div className="flex sm:flex-col flex-row gap-3 sm:gap-4 flex-shrink-0 justify-center">
                {product.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-[var(--yellow)] border-3 border-[var(--ink)] flex flex-col items-center justify-center text-center p-2 shadow-sm transform transition-transform hover:scale-105 select-none"
                  >
                    <span className="font-display text-[10px] sm:text-xs text-[var(--ink)] uppercase leading-tight font-extrabold">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgSrc)}
                  aria-label={`View product image ${idx + 1}`}
                  className={`relative rounded-[18px] border-3 overflow-hidden aspect-square flex items-center justify-center p-2 bg-white transition-all cursor-pointer ${
                    activeImage === imgSrc
                      ? 'border-[var(--ink)] ring-3 ring-[var(--orange-red)] scale-[1.02]'
                      : 'border-[var(--ink)]/40 hover:border-[var(--ink)]'
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${product.flavour} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Info Box */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-28">
            <div>
              <h1 className="font-display text-[36px] sm:text-[44px] md:text-[50px] text-[var(--ink)] uppercase leading-[0.95] m-0">
                <span className="block">{product.name}</span>
                <span className="block" style={{ color: product.textColor }}>
                  {product.flavour}
                </span>
              </h1>
            </div>

            <div>
              <p className="font-display text-base md:text-lg text-[var(--ink)] uppercase tracking-wide mb-2">
                {product.tagline}
              </p>
              <p className="font-body text-[16px] md:text-[17px] text-[var(--ink)]/85 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Flavour Selector */}
            <div className="space-y-2">
              <label
                htmlFor="flavour-select"
                className="block font-display text-xs text-[var(--ink)] uppercase tracking-wide"
              >
                SELECT FLAVOUR:
              </label>
              <div className="relative">
                <select
                  id="flavour-select"
                  value={product.slug}
                  onChange={(e) => router.push(`/products/${e.target.value}`)}
                  className="w-full h-12 pl-10 pr-10 rounded-2xl border-3 border-[var(--ink)] bg-[var(--white)] font-display text-sm md:text-base text-[var(--ink)] uppercase appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] cursor-pointer"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.flavour} ({p.tag})
                    </option>
                  ))}
                </select>
                <span
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[var(--ink)] pointer-events-none"
                  style={{ backgroundColor: product.bgColor }}
                />
                <ChevronDown
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--ink)] pointer-events-none"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {product.highlights.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 border-[var(--ink)] bg-white text-[var(--ink)] font-display text-xs uppercase tracking-wide shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--orange-red)]" />
                  <span>{chip}</span>
                </span>
              ))}
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />

            {/* Contact Us Button */}
            {showContactButton && (
              <button
                type="button"
                onClick={handleInquiry}
                className="w-full py-4 rounded-full border-3 border-[var(--ink)] bg-[var(--yellow)] hover:bg-[var(--orange-red)] hover:text-white text-[var(--ink)] font-display text-[18px] md:text-[20px] uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-5 h-5" strokeWidth={2.4} />
                <span>Contact Us About {product.flavour}</span>
              </button>
            )}

            {/* Also Try Mini Card */}
            <div className="rounded-[20px] border-3 border-[var(--ink)] bg-white p-3.5 flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-14 h-14 relative rounded-xl border border-[var(--ink)]/20 overflow-hidden flex-shrink-0"
                  style={{ backgroundColor: alsoTryProduct.bgColor }}
                >
                  <Image
                    src={alsoTryProduct.image}
                    alt={alsoTryProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-display text-[var(--ink)]/60 uppercase">
                    ALSO TRY...
                  </span>
                  <Link
                    href={`/products/${alsoTryProduct.slug}`}
                    className="font-display text-sm text-[var(--ink)] uppercase truncate hover:text-[var(--orange-red)] block"
                  >
                    {alsoTryProduct.flavour}
                  </Link>
                </div>
              </div>
              <Link
                href={`/products/${alsoTryProduct.slug}`}
                className="px-3.5 py-1.5 rounded-full border-2 border-[var(--ink)] bg-[var(--yellow)] font-display text-xs uppercase hover:bg-[var(--ink)] hover:text-white transition-colors"
              >
                VIEW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
