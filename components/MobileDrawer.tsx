'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { InstagramIcon } from '@/components/Icons';
import { INSTAGRAM_URL } from '@/config/site';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function MobileDrawer({ isOpen, onClose, onOpenContact }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-[var(--white)] border-b-3 border-[var(--ink)] px-6 py-6 flex flex-col gap-4 font-display text-[20px] uppercase text-[var(--ink)] animate-in slide-in-from-top-4 duration-200">
      <div className="text-xs font-bold text-[var(--ink)]/50 tracking-wider">OUR FLAVOURS</div>
      {PRODUCTS.map((p) => (
        <Link
          key={p.slug}
          href={`/products/${p.slug}`}
          onClick={onClose}
          className="py-1 border-b border-[var(--ink)]/10 flex justify-between items-center"
        >
          <span>{p.flavour}</span>
          <span
            className="w-3.5 h-3.5 rounded-full border border-[var(--ink)]"
            style={{ backgroundColor: p.bgColor }}
          />
        </Link>
      ))}
      <Link
        href="/flavours"
        onClick={onClose}
        className="py-1 text-[var(--orange-red)] border-b border-[var(--ink)]/10"
      >
        ALL FLAVOURS →
      </Link>

      <div className="text-xs font-bold text-[var(--ink)]/50 tracking-wider mt-2">LEARN MORE</div>
      <Link href="/ingredients" onClick={onClose} className="py-1 border-b border-[var(--ink)]/10">
        ABOUT INGREDIENTS
      </Link>
      <Link href="/find-a-store" onClick={onClose} className="py-1 border-b border-[var(--ink)]/10">
        FIND A STORE
      </Link>
      <Link href="/faqs" onClick={onClose} className="py-1 border-b border-[var(--ink)]/10">
        FAQS
      </Link>
      <Link
        href="/sustainability"
        onClick={onClose}
        className="py-1 border-b border-[var(--ink)]/10"
      >
        SUSTAINABILITY
      </Link>

      <button
        onClick={() => {
          onClose();
          onOpenContact();
        }}
        className="w-full py-3.5 mt-3 bg-[var(--ink)] text-[var(--white)] hover:bg-[var(--orange-red)] transition-colors rounded-full text-center font-display text-[18px] cursor-pointer"
      >
        CONTACT US
      </button>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="w-full py-3 border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--yellow)] transition-colors rounded-full text-center font-display text-[16px] flex items-center justify-center gap-2 cursor-pointer"
      >
        <InstagramIcon className="w-5 h-5 text-[var(--ink)]" />
        <span>FOLLOW @BAKMIEBITES</span>
      </a>
    </div>
  );
}
