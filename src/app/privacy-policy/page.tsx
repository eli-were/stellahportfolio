import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from '@/app/privacy-policy/components/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy — Stellah Akuku Were Portfolio',
  description:
    'Privacy policy for the professional portfolio of Stellah Akuku Were. Covers data collection, contact form usage, cookies, and user rights.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}