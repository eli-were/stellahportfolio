import React from 'react';

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-secondary" aria-label="Contact page header">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Get in Touch
        </p>
        <h1 className="font-display text-section-xl font-bold text-foreground tracking-tight max-w-3xl mb-6">
          Let&apos;s Build Something{' '}
          <span className="italic font-normal text-primary">Remarkable Together.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Whether you&apos;re an educational institution, NGO, or training organisation — Stellah is
          open to teaching roles, training engagements, speaking opportunities, and consulting
          partnerships.
        </p>
      </div>
    </section>
  );
}