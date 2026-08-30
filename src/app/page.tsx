import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsBar from '@/app/components/StatsBar';
import FeaturedHighlights from '@/app/components/FeaturedHighlights';
import HomepageCTA from '@/app/components/HomepageCTA';

export const metadata: Metadata = {
  title: 'Stellah Akuku Were — Mathematics & Computer Science Teacher, Robotics Trainer',
  description:
    'Professional portfolio of Stellah Akuku Were — Mathematics, Computer Science, and Robotics educator with 4+ years experience in Nairobi, Kenya. Perfect National Examination score 2023.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Stellah Akuku Were — Mathematics & Computer Science Teacher',
    description: 'Mathematics, Computer Science & Robotics educator with proven National Examination results. Based in Nairobi, Kenya.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <FeaturedHighlights />
        <HomepageCTA />
      </main>
      <Footer />
    </>
  );
}