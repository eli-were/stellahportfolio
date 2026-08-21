'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '4+', label: 'Years Experience', sub: 'Form 1–4 learners' },
  { value: '160+', label: 'Students Trained', sub: 'IoT & Robotics' },
  { value: 'A 12.00', label: 'KCSE 2023 Score', sub: '30 candidates, perfect grade' },
  { value: '3', label: 'Schools Served', sub: 'Nairobi & Kiambu' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs?.observe(el);
    return () => obs?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-primary py-12 px-4 sm:px-6"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/10">
          {stats?.map((stat, i) => (
            <div
              key={stat?.label}
              className={`text-center md:text-left md:px-10 first:pl-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
                {stat?.value}
              </div>
              <div className="text-sm font-semibold text-white/90 mb-0.5">{stat?.label}</div>
              <div className="text-xs text-white/55">{stat?.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}