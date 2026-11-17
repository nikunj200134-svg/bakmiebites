'use client';

import React from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { ProductCarousel } from '@/components/ProductCarousel';
import { BetterForYou } from '@/components/BetterForYou';
import { FeatureSplit } from '@/components/FeatureSplit';
import { Testimonials } from '@/components/Testimonials';
import { CommunityGallery } from '@/components/CommunityGallery';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--white)] flex flex-col justify-between selection:bg-[var(--yellow)] selection:text-[var(--ink)]">
      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. HEADER */}
      <Header />

      <main className="flex-1 space-y-12 md:space-y-16 lg:space-y-20">
        {/* 3. HERO */}
        <Hero onShopClick={() => {}} />

        {/* 4. TRUST BADGES ROW */}
        <TrustBadges />

        {/* 5. PRODUCT CAROUSEL ("SNACK WITH BAKMIEBITES") */}
        <ProductCarousel />

        {/* 6. "BETTER FOR YOU" BENEFITS */}
        <BetterForYou />

        {/* 7. FEATURE SPLIT */}
        <FeatureSplit />

        {/* 8. TESTIMONIALS */}
        <Testimonials />

        {/* 9. COMMUNITY GALLERY */}
        <CommunityGallery />
      </main>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
}
