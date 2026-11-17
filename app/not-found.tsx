import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[800px] mx-auto px-4 md:px-8 py-16 md:py-24 text-center flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-[var(--yellow)] border-3 border-[var(--ink)] flex items-center justify-center text-4xl shadow-md mb-6 rotate-12">
          🍿
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--orange-red)] text-white font-display text-xs uppercase tracking-wider mb-4 shadow-xs">
          404 - Page Not Found
        </span>

        <h1 className="section-headline text-[var(--ink)] m-0 leading-tight">
          POPPED OUT OF BOUNDS!
        </h1>

        <p className="font-body text-base md:text-lg text-[var(--ink)]/80 mt-4 max-w-md">
          Looks like this snack was so crunchy it disappeared. Don&apos;t worry, all our signature
          flavours are safe and fresh on the home page.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--ink)] text-white font-display text-base md:text-lg uppercase hover:bg-[var(--orange-red)] transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>BACK TO HOME</span>
          </Link>
          <Link
            href="/flavours"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-3 border-[var(--ink)] bg-[var(--yellow)] text-[var(--ink)] font-display text-base md:text-lg uppercase hover:bg-[var(--orange-red)] hover:text-white transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-5 h-5" />
            <span>EXPLORE FLAVOURS</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
