import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import AboutBio from '@/app/about/components/AboutBio';
import AboutValues from '@/app/about/components/AboutValues';

export const metadata: Metadata = {
  title: 'About Stellah Akuku Were — Educator & Robotics Trainer',
  description:
    'Learn about Stellah Akuku Were — a Mathematics and ICT teacher with 4+ years experience, dual expertise, and a passion for bridging classroom learning with real-life STEM application.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Stellah Akuku Were',
    description: 'Mathematics & ICT educator based in Nairobi, Kenya. Dual expertise, proven results.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutBio />
        <AboutValues />
      </main>
      <Footer />
    </>
  );
}