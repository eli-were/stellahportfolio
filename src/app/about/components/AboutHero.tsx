import React from 'react';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-secondary" aria-label="About page header">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">About</p>
        <h1 className="font-display text-section-xl font-bold text-foreground tracking-tight max-w-3xl mb-6">
          Bridging the Classroom{' '}
          <span className="italic font-normal text-primary">with the Real World.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Stellah Akuku Were is a Mathematics & ICT teacher and Tech & Robotics Trainer based in
          Nairobi, Kenya — dedicated to empowering students through practical, technology-integrated
          education.
        </p>
      </div>
    </section>
  );
}