import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | BakmieBites',
  description: 'Terms of Service and legal terms for BakmieBites gourmet popcorn showcase website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[1000px] w-full mx-auto px-4 md:px-8 py-10 md:py-16">
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
            <span className="text-[var(--ink)]">Terms of Service</span>
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
            <strong>DRAFT:</strong> review with a legal professional before publishing.
          </div>

          <h1 className="font-display text-[32px] md:text-[44px] text-[var(--ink)] uppercase leading-tight mb-6">
            TERMS OF SERVICE
          </h1>

          <div className="space-y-6 font-body text-base text-[var(--ink)]/85 leading-relaxed">
            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                1. Overview
              </h2>
              <p>
                Welcome to BakmieBites. This website is owned and operated by BakmieBites as a brand
                showcase. By accessing or browsing our website, you agree to be bound by the
                following terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                2. Brand Showcase Only
              </h2>
              <p>
                The information, imagery, and product descriptions provided on this website are for
                promotional and informational showcase purposes. Features, flavours, and
                availability are subject to change without prior notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                3. Intellectual Property
              </h2>
              <p>
                All trademarks, logos, brand names, product packaging visuals, and content displayed
                on this website are the proprietary property of BakmieBites. Unauthorized copying,
                modification, distribution, or reproduction is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                4. Inquiries &amp; Communications
              </h2>
              <p>
                When you contact us via WhatsApp or Email regarding trade inquiries, retail
                distribution, or feedback, you agree to provide truthful and accurate information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                5. Governing Law
              </h2>
              <p>
                These terms shall be governed and interpreted in accordance with the laws of India.
                Any disputes arising out of the use of this website shall be subject to the
                exclusive jurisdiction of the competent courts in India.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
