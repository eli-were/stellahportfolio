import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactContent from '@/app/contact/components/ContactContent';
import CommunitySection from '@/app/contact/components/CommunitySection';

export const metadata: Metadata = {
  title: 'Contact Stellah Akuku Were — Partner or Enquire',
  description:
    'Get in touch with Stellah Akuku Were for teaching positions, training engagements, speaking opportunities, or NGO partnerships. Based in Nairobi, Kenya.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Stellah Akuku Were',
    description: 'Available for teaching, training, and consulting engagements in Nairobi and internationally.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}