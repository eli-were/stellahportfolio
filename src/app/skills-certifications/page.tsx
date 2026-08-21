import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkillsHero from '@/app/skills-certifications/components/SkillsHero';
import SkillsGrid from '@/app/skills-certifications/components/SkillsGrid';
import CertificationsSection from '@/app/skills-certifications/components/CertificationsSection';
import EducationSection from '@/app/skills-certifications/components/EducationSection';
import AwardsSection from '@/app/skills-certifications/components/AwardsSection';

export const metadata: Metadata = {
  title: 'Skills, Certifications & Awards — Stellah Akuku Were',
  description:
    'Technical skills (Python, Arduino, IoT, AI), certifications (TSC, Child Online Protection, IoT Robotics), and awards including Teacher of the Year 2023.',
  alternates: { canonical: '/skills-certifications' },
  openGraph: {
    title: 'Skills & Certifications — Stellah Akuku Were',
    description: 'Python, Arduino, IoT, AI, CBC curriculum, and Teacher of the Year 2023.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function SkillsCertificationsPage() {
  return (
    <>
      <Header />
      <main>
        <SkillsHero />
        <SkillsGrid />
        <CertificationsSection />
        <EducationSection />
        <AwardsSection />
      </main>
      <Footer />
    </>
  );
}