'use client';

import React, { useEffect, useRef, useState } from 'react';

const awards = [
  {
    title: 'Teacher of the Year',
    year: '2023',
    description:
      'Awarded for producing a perfect score — A grade 12.00 — in KCSE 2023 with 30 Computer Studies candidates at Starehe Boys Centre.',
    highlight: true,
  },
  {
    title: 'Facilitator Lead — IBM SkillsBuild',
    year: '2021',
    description:
      'Lead facilitator for Foundational Digital Skills and Entrepreneurship using IBM SkillsBuild for Students — all 19 students certified in cybersecurity, AI, and IT project management.',
    highlight: false,
  },
  {
    title: 'Youth Advocate',
    year: '2021',
    description:
      'Recognised as a Youth Advocate for Sexual Reproductive Health, Family Planning, Advocacy, and the Kenyan Budget Cycle.',
    highlight: false,
  },
];

export default function AwardsSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (el) { el.classList.add('skill-card-visible'); }
            }, i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.05 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary" aria-labelledby="awards-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Recognition</p>
        <h2 id="awards-heading" className="font-display text-section-xl font-bold text-foreground tracking-tight mb-12">
          Awards &{' '}
          <span className="italic font-normal text-primary">Achievements.</span>
        </h2>

        <div className="flex flex-col gap-6 max-w-3xl">
          {awards.map((award, i) => (
            <div
              key={award.title}
              ref={(el) => { refs.current[i] = el; }}
              className={`rounded-2xl p-6 md:p-8 border flex flex-col sm:flex-row gap-5 hover-lift skill-card${mounted ? '' : ' skill-card-visible'} ${
                award.highlight
                  ? 'bg-accent/8 border-accent/25' : 'bg-card border-border'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                award.highlight
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-primary/10 text-primary border border-primary/15'
              }`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-foreground tracking-tight">
                    {award.title}
                  </h3>
                  <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border flex-shrink-0">
                    {award.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}