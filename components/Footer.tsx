'use client';

import React from 'react';
import Link from 'next/link';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/Icons';
import { useContact } from '@/components/ContactContext';
import { INSTAGRAM_URL } from '@/lib/siteConfig';

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const { openContact } = useContact();

  const handleContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      openContact();
    }
  };

  return (
    <footer
      id="newsletter"
      className="w-full bg-[var(--teal)] text-[var(--ink)] mt-16 md:mt-24 border-t-3 border-[var(--ink)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (4 cols): Logo + Tagline + Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <Link href="/" className="group flex items-center gap-2">
              <span className="font-display text-[34px] md:text-[38px] text-[var(--ink)] tracking-tight uppercase group-hover:text-[var(--orange-red)] transition-colors">
                BAKMIEBITES
              </span>
              <span className="w-3.5 h-3.5 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] inline-block -mt-3 group-hover:bg-[var(--orange-red)] transition-colors" />
            </Link>

            <p className="font-body text-[16px] text-[var(--ink)]/85 max-w-sm leading-relaxed">
              Handcrafted gourmet popcorn popped with whole-grain corn, refined sunflower oil, and
              bold kitchen spices. Zero palm oil.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-[var(--white)] border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] hover:bg-[var(--yellow)] transition-all hover:scale-105 shadow-xs"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[var(--white)] border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] hover:bg-[var(--yellow)] transition-all hover:scale-105 shadow-xs"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-11 h-11 rounded-full bg-[var(--white)] border-3 border-[var(--ink)] flex items-center justify-center text-[var(--ink)] hover:bg-[var(--yellow)] transition-all hover:scale-105 shadow-xs"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Columns (5 cols): Three Link Columns with Display Caps Headings */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* FLAVOURS column */}
            <div>
              <h3 className="font-display text-[18px] md:text-[20px] text-[var(--ink)] uppercase mb-4 tracking-wide">
                FLAVOURS
              </h3>
              <ul className="space-y-2.5 font-body text-[15px] md:text-[16px] text-[var(--ink)]/85">
                <li>
                  <Link
                    href="/products/peri-peri"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Peri Peri Popcorn
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tangy-tomato"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Tangy Tomato Popcorn
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/cheddar-cheese"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Cheddar Cheese
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/variety-trio"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Variety 3-Pack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flavours"
                    className="hover:underline hover:text-[var(--orange-red)] font-bold transition-colors"
                  >
                    All Flavours →
                  </Link>
                </li>
              </ul>
            </div>

            {/* SUPPORT column */}
            <div>
              <h3 className="font-display text-[18px] md:text-[20px] text-[var(--ink)] uppercase mb-4 tracking-wide">
                SUPPORT
              </h3>
              <ul className="space-y-2.5 font-body text-[15px] md:text-[16px] text-[var(--ink)]/85">
                <li>
                  <button
                    onClick={handleContact}
                    className="hover:underline hover:text-[var(--orange-red)] text-left cursor-pointer transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEARN column */}
            <div>
              <h3 className="font-display text-[18px] md:text-[20px] text-[var(--ink)] uppercase mb-4 tracking-wide">
                LEARN
              </h3>
              <ul className="space-y-2.5 font-body text-[15px] md:text-[16px] text-[var(--ink)]/85">
                <li>
                  <Link
                    href="/ingredients"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    About Ingredients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-a-store"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Find a Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sustainability"
                    className="hover:underline hover:text-[var(--orange-red)] transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (3 cols): Clean STAY IN THE LOOP text */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-display text-[28px] sm:text-[34px] md:text-[38px] text-[var(--ink)] uppercase leading-[1.02] m-0">
              <span className="block">STAY IN</span>
              <span className="block text-white drop-shadow-sm">THE LOOP</span>
            </h3>

            <p className="font-body text-[15px] text-[var(--ink)]/85 leading-relaxed">
              Be the first to know about new flavours, local pop-ups, and launches.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-14 pt-8 border-t-2 border-[var(--ink)]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-sm text-[var(--ink)]/75">
          <p>© {new Date().getFullYear()} BakmieBites. All rights reserved.</p>
          <p>Handcrafted with ❤️ in India | Non-GMO &amp; Whole Grain Popcorn</p>
        </div>
      </div>
    </footer>
  );
}
