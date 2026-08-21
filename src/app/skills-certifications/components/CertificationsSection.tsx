'use client';

import React, { useEffect, useRef } from 'react';

const certifications = [
  {
    title: 'Teaching License',
    issuer: 'Kenya Teachers Service Commission (TSC)',
    date: 'Active',
    type: 'Professional License',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    accent: true,
  },
  {
    title: 'Child Online Protection Training',
    issuer: 'Communications Authority of Kenya',
    date: 'November 2024',
    type: 'Professional Certificate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: false,
  },
  {
    title: 'Professional Development: IoT & Robotics',
    issuer: 'Professional Development Training',
    date: '2023',
    type: 'Technical Certificate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    accent: false,
  },
];

export default function CertificationsSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
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
    <section className="py-20 px-4 sm:px-6 bg-secondary" aria-labelledby="certs-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Credentials</p>
        <h2 id="certs-heading" className="font-display text-section-xl font-bold text-foreground tracking-tight mb-12">
          Certifications &{' '}
          <span className="italic font-normal text-primary">Licences.</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              ref={(el) => { refs.current[i] = el; }}
              className={`rounded-2xl p-6 border flex flex-col gap-4 hover-lift ${
                cert.accent
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card border-border'
              }`}
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                  cert.accent
                    ? 'bg-white/15 border-white/20 text-white' :'bg-primary/10 border-primary/15 text-primary'
                }`}
              >
                {cert.icon}
              </div>
              <div className="flex-1">
                <span
                  className={`text-xs font-bold uppercase tracking-widest mb-2 block ${
                    cert.accent ? 'text-white/60' : 'text-muted-foreground'
                  }`}
                >
                  {cert.type}
                </span>
                <h3
                  className={`font-semibold text-base leading-snug mb-1 ${
                    cert.accent ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`text-sm ${cert.accent ? 'text-white/70' : 'text-muted-foreground'}`}
                >
                  {cert.issuer}
                </p>
              </div>
              <span
                className={`text-xs font-semibold ${cert.accent ? 'text-white/60' : 'text-muted-foreground'}`}
              >
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}