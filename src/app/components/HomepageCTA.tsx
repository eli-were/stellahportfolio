import React from 'react';
import Link from 'next/link';

export default function HomepageCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-secondary" aria-label="Call to action">
      <div className="max-w-4xl mx-auto text-center">
        <div
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Open to Opportunities
          </p>
          <h2 className="font-display text-section-xl font-bold text-foreground tracking-tight mb-6">
            Ready to bring{' '}
            <span className="italic font-normal text-primary">STEM excellence</span>
            <br />
            to your institution?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re an international school, NGO, or training organization — let&apos;s
            discuss how Stellah can contribute as a teacher, trainer, or consultant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-secondary transition-all duration-300"
            >
              Read Full Bio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
