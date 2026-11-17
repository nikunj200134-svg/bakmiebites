'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, MessageSquare } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useContact } from '@/components/ContactContext';

export default function FindAStorePage() {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[900px] w-full mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between mb-8">
          <nav
            aria-label="Breadcrumb"
            className="text-xs md:text-sm font-display uppercase tracking-wider text-[var(--ink)]/60"
          >
            <Link href="/" className="hover:text-[var(--orange-red)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)]">Find a Store</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-wider text-[var(--ink)] hover:text-[var(--orange-red)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Big Card */}
        <div className="bg-[var(--yellow)] rounded-[32px] border-3 border-[var(--ink)] p-8 md:p-14 text-center shadow-sm">
          <div className="w-20 h-20 rounded-full bg-white border-3 border-[var(--ink)] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <MapPin className="w-10 h-10 text-[var(--ink)]" strokeWidth={2.5} />
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--white)] border-2 border-[var(--ink)] font-display text-xs md:text-sm uppercase tracking-wide mb-4 text-[var(--ink)]">
            COMING SOON
          </span>

          <h1 className="font-display text-[36px] sm:text-[46px] md:text-[54px] text-[var(--ink)] uppercase leading-none max-w-xl mx-auto">
            STORE LOCATOR COMING SOON!
          </h1>

          <p className="font-body text-base md:text-lg text-[var(--ink)]/85 max-w-lg mx-auto mt-5 leading-relaxed">
            We are preparing to launch BakmieBites in premium gourmet food stores and local cafés
            across Gurgaon and Delhi NCR. Want BakmieBites at your local store, or looking for
            wholesale/bulk party orders?
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => openContact()}
              className="w-full sm:w-auto px-8 py-4 rounded-full border-3 border-[var(--ink)] bg-[var(--white)] hover:bg-[var(--orange-red)] hover:text-white text-[var(--ink)] font-display text-lg uppercase tracking-wide transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contact Us</span>
            </button>

            <Link
              href="/flavours"
              className="w-full sm:w-auto px-8 py-4 rounded-full border-3 border-[var(--ink)] bg-[var(--ink)] text-white hover:bg-[var(--orange-red)] font-display text-lg uppercase tracking-wide transition-all shadow-sm hover:scale-105 active:scale-95 text-center"
            >
              Explore Flavours
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
