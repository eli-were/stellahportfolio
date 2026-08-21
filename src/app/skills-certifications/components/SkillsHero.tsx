import React from 'react';

export default function SkillsHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-secondary" aria-label="Skills page header">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Skills & Credentials
        </p>
        <h1 className="font-display text-section-xl font-bold text-foreground tracking-tight max-w-3xl mb-6">
          Tools of the Trade —{' '}
          <span className="italic font-normal text-primary">and the Proof.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          From Python and Arduino to CBC curriculum mastery — a technical and pedagogical skill set
          built for the modern Kenyan classroom and beyond.
        </p>
      </div>
    </section>
  );
}