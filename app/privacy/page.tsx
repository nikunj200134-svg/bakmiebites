import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | BakmieBites',
  description: 'Privacy Policy and information practices for the BakmieBites website.',
};

export default function PrivacyPage() {
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
            <span className="text-[var(--ink)]">Privacy Policy</span>
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
            PRIVACY POLICY
          </h1>

          <div className="space-y-6 font-body text-base text-[var(--ink)]/85 leading-relaxed">
            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                1. Information We Collect
              </h2>
              <p>
                BakmieBites operates this website primarily as a brand showcase. We do not process
                online transactions, collect credit card numbers, or maintain automated user
                accounts on this site. When you click to initiate a WhatsApp chat or send us an
                email, we receive only the message content and contact coordinates you choose to
                provide.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Any correspondence sent to us is used solely to respond to your questions, provide
                trade or retail availability updates, and improve our handcrafted snack recipes. We
                never sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                3. Cookies &amp; Analytics
              </h2>
              <p>
                We may use basic functional session cookies to optimize website performance and
                ensure proper page rendering across desktop and mobile devices.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[20px] text-[var(--ink)] uppercase mb-2">
                4. Contacting Us
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy or your personal
                information, you can get in touch with us directly using our Contact popup on
                WhatsApp or Email.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
