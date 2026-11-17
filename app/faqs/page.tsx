'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useContact } from '@/components/ContactContext';
import { Accordion } from '@/components/ui/Accordion';
import { FAQS } from '@/data/faqs';

export default function FAQsPage() {
  const { openContact } = useContact();

  const accordionItems = FAQS.map((faq, i) => ({
    id: `faq-${i}`,
    title: faq.q,
    content: (
      <p className="font-body text-base text-[var(--ink)]/85 leading-relaxed pt-2">{faq.a}</p>
    ),
  }));

  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-[960px] mx-auto px-4 md:px-8 py-10 md:py-16 w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display text-sm uppercase text-[var(--ink)]/70 hover:text-[var(--orange-red)] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--yellow)] border-2 border-[var(--ink)] text-[var(--ink)] font-display text-xs uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h1 className="section-headline text-[var(--ink)] m-0">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="font-body text-base md:text-lg text-[var(--ink)]/80 mt-3 max-w-xl mx-auto">
            Everything you need to know about BakmieBites ingredients, sourcing, quality, and
            ordering.
          </p>
        </div>

        {/* Accordions */}
        <div className="mb-12">
          <Accordion items={accordionItems} defaultOpenId="faq-0" />
        </div>

        {/* Still Have Questions CTA */}
        <div className="rounded-[28px] border-3 border-[var(--ink)] bg-[var(--yellow)] p-8 text-center shadow-sm">
          <h2 className="font-display text-2xl md:text-3xl text-[var(--ink)] uppercase m-0">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="font-body text-base text-[var(--ink)]/85 mt-2 max-w-md mx-auto">
            Our team is active on WhatsApp and Email to answer questions about flavours, wholesale,
            or distribution.
          </p>
          <button
            type="button"
            onClick={() => openContact()}
            className="mt-6 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[var(--ink)] text-white font-display text-lg uppercase hover:bg-[var(--orange-red)] transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            <span>TALK TO US</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
