import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceHero from '@/app/experience/components/ExperienceHero';
import ExperienceTimeline from '@/app/experience/components/ExperienceTimeline';

export const metadata: Metadata = {
  title: 'Teaching Experience — Stellah Akuku Were',
  description:
    'Full teaching and professional history of Stellah Akuku Were — from Starehe Boys Centre to Riara Springs, with National Examination results and STEM training impact.',
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Teaching Experience — Stellah Akuku Were',
    description: 'Over 4 years of Mathematics & Computer Science teaching across top Kenyan secondary schools.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main>
        <ExperienceHero />
        <ExperienceTimeline />
      </main>
      <Footer />
    </>
  );
}
