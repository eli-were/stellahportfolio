'use client';

import React, { useEffect, useRef, useState } from 'react';

const community = [
  {
    org: 'Walimu-Tech Platform by Chipurobo',
    role: 'Member',
    description:
      'A national community of teachers passionate about integrating Robotics, AI, and coding in Kenyan schools. Active participant in workshops and peer learning.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    org: 'Kenya Science and Engineering Fair',
    role: 'Member',
    description:
      "Active member supporting Kenya's premier platform for student innovation in science and engineering — promoting STEM participation at the national level.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    org: 'Youth Advocate — Reproductive Health',
    role: 'Advocate',
    description:
      'Recognised advocate for Sexual Reproductive Health, Family Planning, and the Kenyan Budget Cycle — bridging education and youth empowerment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function CommunitySection() {
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
    <section className="py-20 px-4 sm:px-6 bg-secondary" aria-labelledby="community-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
          Professional Community
        </p>
        <h2 id="community-heading" className="font-display text-section-xl font-bold text-foreground tracking-tight mb-12">
          Beyond the{' '}
          <span className="italic font-normal text-primary">Classroom.</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {community.map((item, i) => (
            <div
              key={item.org}
              ref={(el) => { refs.current[i] = el; }}
              className={`bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 hover-lift skill-card${mounted ? '' : ' skill-card-visible'}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">
                  {item.role}
                </span>
                <h3 className="font-semibold text-foreground text-base leading-snug mb-2">
                  {item.org}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}