import React from 'react';

export default function ExperienceHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-secondary" aria-label="Experience page header">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Professional History
        </p>
        <h1 className="font-display text-section-xl font-bold text-foreground tracking-tight max-w-3xl mb-6">
          Where Every Lesson{' '}
          <span className="italic font-normal text-primary">Left a Mark.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Over 4 years across Kenya&apos;s leading secondary schools — building STEM clubs, achieving
          perfect exam scores, and training the next generation of innovators.
        </p>
      </div>
    </section>
  );
}