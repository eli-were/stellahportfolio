import React from 'react';

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Two Subjects, One Approach',
    desc: 'Teaching Mathematics alongside Computer Science, with lessons that make room for both clear thinking and practical work.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Proven Results',
    desc: 'Thirty Computer Studies candidates earned an A grade of 12.00 in National Examination 2023 through steady practice, feedback, and close support.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community Builder',
    desc: 'Supports clubs, workshops, and teacher communities that help more learners take part in STEM.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Real-World Application',
    desc: 'Uses tools such as Google Classroom, Curipod, and Zeraki where they make learning clearer and more useful.',
  },
];

export default function AboutValues() {
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
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-6 border border-border hover-lift flex flex-col gap-4"
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
