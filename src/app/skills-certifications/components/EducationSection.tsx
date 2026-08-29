'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('skill-card-visible');
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs?.observe(el);
    return () => obs?.disconnect();
  }, [mounted]);

  return (
    <section className="py-20 px-4 sm:px-6 bg-background" aria-labelledby="edu-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Education</p>
        <h2 id="edu-heading" className="font-display text-section-xl font-bold text-foreground tracking-tight mb-12">
          Academic{' '}
          <span className="italic font-normal text-primary">Foundation.</span>
        </h2>

        <div
          ref={ref}
          className={`bg-card rounded-2xl border border-border p-8 md:p-12 max-w-2xl hover-lift skill-card${mounted ? '' : ' skill-card-visible'}`}
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Bachelor of Education
              </p>
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-1">
                Computer Science &amp; Mathematics
              </h3>
              <p className="text-sm font-semibold text-primary mb-1">University of Nairobi</p>
              <p className="text-xs text-muted-foreground mb-4">Nairobi, Kenya · September 2017</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dual-major education degree combining Information and Communication Technology with
                Mathematics — providing a strong foundation for integrated STEM teaching at secondary
                school level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
