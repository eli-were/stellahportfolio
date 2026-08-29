'use client';

import React, { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ['Python', 'Arduino', 'HTML', 'Scratch'],
  },
  {
    category: 'Emerging Technologies',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    skills: ['Internet of Things (IoT)', 'Generative AI', 'Robotics', 'Arduino Programming'],
  },
  {
    category: 'Data Analytics & Management',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    skills: ['Google Analytics', 'SEMrush', 'MySQL', 'Google Sheets', 'Sprout Social'],
  },
  {
    category: 'Pedagogical Tools & Platforms',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    skills: ['Google Classroom', 'Curipod', 'Zeraki Analytics', 'CBC Curriculum', 'Inquiry-Based Learning'],
  },
];

export default function SkillsGrid() {
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
              if (el) {
                el.classList.add('skill-card-visible');
              }
            }, i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  return (
    <section className="py-20 px-4 sm:px-6 bg-background" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Technical Skills</p>
        <h2 id="skills-heading" className="font-display text-section-xl font-bold text-foreground tracking-tight mb-12">
          Competencies &{' '}
          <span className="italic font-normal text-primary">Expertise.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              ref={(el) => { refs.current[i] = el; }}
              className={`bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 hover-lift skill-card${mounted ? '' : ' skill-card-visible'}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/15">
                {cat.icon}
              </div>
              {/* Category */}
              <h3 className="font-semibold text-foreground text-sm leading-tight">{cat.category}</h3>
              {/* Skills list */}
              <div className="flex flex-col gap-2 flex-1">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}