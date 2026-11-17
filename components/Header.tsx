'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, MapPin, Mail } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useContact } from '@/components/ContactContext';
import { MobileDrawer } from '@/components/MobileDrawer';

interface HeaderProps {
  onOpenContact?: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [flavoursOpen, setFlavoursOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContact();

  const handleContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      openContact();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[var(--white)] transition-shadow duration-200 ${
        scrolled ? 'shadow-md border-b border-[var(--ink)]/10' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-[90px] md:h-[100px] px-4 md:px-10 flex items-center justify-between">
        {/* Left Navigation: FLAVOURS, LEARN */}
        <nav className="hidden lg:flex items-center gap-8 text-[var(--ink)] font-display text-[20px] md:text-[22px] tracking-tight uppercase">
          {/* FLAVOURS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFlavoursOpen(true)}
            onMouseLeave={() => setFlavoursOpen(false)}
          >
            <button
              onClick={() => setFlavoursOpen(!flavoursOpen)}
              className="flex items-center gap-1.5 hover:text-[var(--orange-red)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] rounded-md px-1 py-1 cursor-pointer"
              aria-expanded={flavoursOpen}
            >
              <span>FLAVOURS</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${flavoursOpen ? 'rotate-180' : ''}`}
                strokeWidth={3}
              />
            </button>

            {flavoursOpen && (
              <div className="absolute top-full left-0 pt-2 w-72 z-50">
                <div className="bg-[var(--white)] border-3 border-[var(--ink)] rounded-[20px] p-3 shadow-lg flex flex-col gap-1">
                  {PRODUCTS.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      onClick={() => setFlavoursOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-[12px] hover:bg-[var(--yellow)] transition-colors font-display text-[18px] text-[var(--ink)]"
                    >
                      <span>{prod.flavour}</span>
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-[var(--ink)]"
                        style={{ backgroundColor: prod.bgColor }}
                      />
                    </Link>
                  ))}
                  <div className="h-px bg-[var(--ink)]/10 my-1" />
                  <Link
                    href="/flavours"
                    onClick={() => setFlavoursOpen(false)}
                    className="px-4 py-2 rounded-[12px] font-display text-[15px] text-[var(--orange-red)] hover:bg-[var(--yellow)] transition-colors"
                  >
                    ALL FLAVOURS →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* LEARN Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button
              onClick={() => setLearnOpen(!learnOpen)}
              className="flex items-center gap-1.5 hover:text-[var(--orange-red)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] rounded-md px-1 py-1 cursor-pointer"
              aria-expanded={learnOpen}
            >
              <span>LEARN</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${learnOpen ? 'rotate-180' : ''}`}
                strokeWidth={3}
              />
            </button>

            {learnOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-[var(--white)] border-3 border-[var(--ink)] rounded-[20px] p-3 shadow-lg flex flex-col gap-1">
                  <Link
                    href="/ingredients"
                    onClick={() => setLearnOpen(false)}
                    className="px-4 py-2.5 rounded-[12px] hover:bg-[var(--yellow)] transition-colors font-display text-[17px] text-[var(--ink)]"
                  >
                    ABOUT INGREDIENTS
                  </Link>
                  <Link
                    href="/find-a-store"
                    onClick={() => setLearnOpen(false)}
                    className="px-4 py-2.5 rounded-[12px] hover:bg-[var(--yellow)] transition-colors font-display text-[17px] text-[var(--ink)]"
                  >
                    FIND A STORE
                  </Link>
                  <Link
                    href="/faqs"
                    onClick={() => setLearnOpen(false)}
                    className="px-4 py-2.5 rounded-[12px] hover:bg-[var(--yellow)] transition-colors font-display text-[17px] text-[var(--ink)]"
                  >
                    FAQS
                  </Link>
                  <Link
                    href="/sustainability"
                    onClick={() => setLearnOpen(false)}
                    className="px-4 py-2.5 rounded-[12px] hover:bg-[var(--yellow)] transition-colors font-display text-[17px] text-[var(--ink)]"
                  >
                    SUSTAINABILITY
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Center: Brand Logo Wordmark */}
        <div className="flex-1 lg:flex-none flex justify-center items-center">
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] rounded-xl px-2"
          >
            <span className="font-display text-[32px] md:text-[40px] text-[var(--ink)] tracking-tight uppercase group-hover:text-[var(--orange-red)] transition-colors">
              BAKMIEBITES
            </span>
            <span className="w-3 h-3 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] inline-block -mt-3 group-hover:bg-[var(--orange-red)] transition-colors" />
          </Link>
        </div>

        {/* Right Navigation: FIND A STORE, CONTACT */}
        <div className="hidden lg:flex items-center gap-7 text-[var(--ink)] font-display text-[20px] md:text-[22px] tracking-tight uppercase">
          <Link
            href="/find-a-store"
            className="flex items-center gap-1.5 hover:text-[var(--orange-red)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] rounded-md px-1 py-1 cursor-pointer"
          >
            <MapPin className="w-5 h-5" strokeWidth={2.5} />
            <span>FIND A STORE</span>
          </Link>

          <button
            onClick={handleContact}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-full border-3 border-[var(--ink)] bg-[var(--yellow)] hover:bg-[var(--orange-red)] hover:text-white transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] cursor-pointer"
          >
            <Mail className="w-5 h-5" strokeWidth={2.5} />
            <span>CONTACT</span>
          </button>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={handleContact}
            aria-label="Contact BakmieBites"
            className="p-2 text-[var(--ink)] hover:text-[var(--orange-red)] transition-colors cursor-pointer"
          >
            <Mail className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 text-[var(--ink)] focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" strokeWidth={2.5} />
            ) : (
              <Menu className="w-7 h-7" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={handleContact}
      />
    </header>
  );
}
