import React from 'react';

const stats = [
  { value: '4+', label: 'Years Experience', sub: 'Form 1–4 learners' },
  { value: '160+', label: 'Students Trained', sub: 'IoT & Robotics' },
  { value: 'A 12.00', label: 'KCSE 2023 Score', sub: '30 candidates, perfect grade' },
  { value: '4', label: 'Schools Served', sub: 'Nairobi County' },
];

export default function StatsBar() {
  return (
    <section
      className="bg-primary py-12 px-4 sm:px-6"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/10">
          {stats?.map((stat, i) => (
            <div
              key={stat?.label}
              className="text-center md:text-left md:px-10 first:pl-0"
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
