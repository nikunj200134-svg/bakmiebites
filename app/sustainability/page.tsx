import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Leaf, Heart, Recycle } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sustainability & Sourcing | BakmieBites',
  description:
    'Our mindful approach to sourcing, eco-conscious oil selection, and plant-powered snacking.',
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[960px] w-full mx-auto px-4 md:px-8 py-10 md:py-16">
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
            <span className="text-[var(--ink)]">Sustainability</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-wider text-[var(--ink)] hover:text-[var(--orange-red)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-[var(--white)] rounded-[28px] border-3 border-[var(--ink)] p-6 md:p-12 shadow-sm">
          {/* Draft Notice */}
          <div className="mb-6 p-4 rounded-2xl bg-[var(--yellow)]/30 border-2 border-[var(--ink)] text-xs md:text-sm font-body text-[var(--ink)]">
            <strong>TODO:</strong> Review and verify all environmental metrics with final production
            specifications before marketing claims are published.
          </div>

          <h1 className="font-display text-[32px] md:text-[44px] text-[var(--ink)] uppercase leading-tight mb-4">
            SUSTAINABILITY &amp; MINDFUL SNACKING
          </h1>

          <p className="font-body text-base md:text-lg text-[var(--ink)]/80 leading-relaxed mb-8">
            At BakmieBites, snacking better means making conscious choices from our crop sourcing to
            our kitchen processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl border-2 border-[var(--ink)] bg-[var(--green)]/15 flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-[var(--ink)] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[var(--ink)]" />
              </div>
              <h3 className="font-display text-lg text-[var(--ink)] uppercase">NO PALM OIL</h3>
              <p className="font-body text-sm text-[var(--ink)]/80 leading-snug">
                We refuse palm oil to support deforestation-free, conscious ingredient sourcing.
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-[var(--ink)] bg-[var(--yellow)]/20 flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-[var(--ink)] flex items-center justify-center">
                <Heart className="w-6 h-6 text-[var(--ink)]" />
              </div>
              <h3 className="font-display text-lg text-[var(--ink)] uppercase">100% WHOLE GRAIN</h3>
              <p className="font-body text-sm text-[var(--ink)]/80 leading-snug">
                Whole corn requires fewer intensive processing stages than ultra-refined synthetic
                snacks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-[var(--ink)] bg-[var(--teal)]/20 flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-[var(--ink)] flex items-center justify-center">
                <Recycle className="w-6 h-6 text-[var(--ink)]" />
              </div>
              <h3 className="font-display text-lg text-[var(--ink)] uppercase">BATCH POPPING</h3>
              <p className="font-body text-sm text-[var(--ink)]/80 leading-snug">
                Crafted in calculated small batches to minimize food waste and optimize energy
                efficiency.
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--ink)]/15 pt-6 text-xs text-[var(--ink)]/65 font-body">
            * Note: Formal lifecycle assessments and packaging recyclability details will be
            published following certification.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
