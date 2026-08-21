'use client';

import React, { useEffect, useRef } from 'react';

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Dual Expertise',
    desc: 'One of the few educators certified in both Mathematics and ICT — bridging analytical thinking and digital innovation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Proven Results',
    desc: 'A perfect KCSE score of A grade 12.00 with 30 candidates — achieved through data-driven, personalized teaching methods.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community Builder',
    desc: 'From launching IoT clubs to joining Walimu-Tech — actively growing Kenya\'s STEM teaching ecosystem.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Real-World Application',
    desc: 'Integrates tools like Curipod, Google Classroom, and Zeraki to connect classroom learning with industry-relevant skills.',
  },
];

export default function AboutValues() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }
            }, i * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What I Bring</p>
        <h2
          id="values-heading"
          className="font-display text-section-xl font-bold text-foreground tracking-tight mb-12"
        >
          Core <span className="italic font-normal text-primary">Strengths.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { refs.current[i] = el; }}
              className="bg-card rounded-2xl p-6 border border-border hover-lift flex flex-col gap-4"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/15">
                {v.icon}
              </div>
              <h3 className="font-semibold text-foreground text-base">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}