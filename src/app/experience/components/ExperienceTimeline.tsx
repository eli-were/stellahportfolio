import React from 'react';

const experiences = [
  {
    id: 1,
    school: 'Riara Springs Girls High School',
    location: 'Imara Daima, Nairobi',
    role: 'Teacher of Mathematics · Computer Studies · Tech & Robotics Trainer',
    period: 'May 2026 – Present',
    current: true,
    color: 'primary',
    responsibilities: [
      'Started a Mathematics club that gives students more opportunities to solve problems and explore technology.',
      'Teaching Computer Studies and Mathematics to Form 1–4 learners within the CBC curriculum framework.',
      'Delivering Tech & Robotics training sessions to develop critical thinking and STEM skills.',
    ],
    tags: ['Mathematics', 'Computer Studies', 'Robotics', 'CBC'],
  },
  {
    id: 2,
    school: 'Starehe Boys Centre & School',
    location: 'General Waruinge Street, Starehe, Nairobi',
    role: 'Head of Studies — Computer Science Department & Teacher of Mathematics F1–F4',
    period: 'August 2022 – 2025',
    current: false,
    color: 'accent',
    highlight: 'Perfect KCSE Score — A grade 12.00 (2023)',
    responsibilities: [
      'Produced a perfect score — A grade 12.00 — in KCSE 2023 with 30 Computer Studies candidates through inquiry-based learning and data-driven personalized feedback.',
      'Started the Internet of Things (IoT) club and introduced students to emerging technologies.',
      'Delivered hands-on robotics and IoT training sessions, fostering critical thinking and problem-solving skills across STEM technologies.',
      'Provided inquiry-based learning opportunities with personalized feedback through continuous assessment techniques.',
    ],
    tags: ['Head of Department', 'IoT Club', 'KCSE', 'Mathematics', 'Computer Science'],
  },
  {
    id: 3,
    school: "Mang'u High School",
    location: 'Thika, Kiambu',
    role: 'Mathematics and Computer Studies Teacher F1–F4',
    period: 'May 2021 – January 2022',
    current: false,
    color: 'primary',
    responsibilities: [
      'Took 19 students to the Brookside Mathlete Contest organized by Brookside Company and Strathmore University — equipping learners with cybersecurity, AI, and IT project management skills.',
      'Trained 19 students on IBM SkillsBuild for Students focusing on cybersecurity, AI, and IT project management — all 19 achieved certification.',
      'Implemented graphic analysis tools like Zeraki in the Mathematics club to enhance results analysis and effective parent communication.',
    ],
    tags: ['IBM SkillsBuild', 'Mathematics', 'Cybersecurity', 'AI'],
  },
  {
    id: 4,
    school: 'Reaction Power',
    location: 'Nairobi, Kenya',
    role: 'Data Analyst Intern',
    period: 'March 2021 – June 2021',
    current: false,
    color: 'muted',
    responsibilities: [
      'Used APIs to collect data from social media platforms; performed data entry, enrichment, and management using Google Sheets.',
      'Organised data in databases for management and further analysis using MySQL.',
      'Generated insights to improve optimization, understand content trends, performance, and competitive pacing.',
    ],
    tags: ['Google Analytics', 'MySQL', 'SEMrush', 'Sprout Social'],
  },
  {
    id: 5,
    school: 'Home-School Tutor',
    location: 'Nairobi, Kenya',
    role: 'Maths & Computer Science Tutor — K10–K12 (IGCSE & KCSE Preparation)',
    period: 'September – December 2018',
    current: false,
    color: 'muted',
    responsibilities: [
      'Leveraged AI tools like Curipod for online questions and Google Classroom for assignments to support teaching and learning of mathematics.',
      'Developed individualised learning plans for students preparing for national (KCSE) and international (IGCSE) curricula.',
    ],
    tags: ['IGCSE', 'KCSE', 'Curipod', 'Google Classroom'],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-background" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="experience-heading" className="sr-only">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 top-5 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center ${
                    exp.current
                      ? 'bg-primary border-primary' : 'bg-card border-border'
                  }`}
                  style={{ zIndex: 1 }}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>

                {/* Card */}
                <article className="bg-card rounded-2xl border border-border p-6 md:p-8 hover-lift">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                          {exp.school}
                        </h3>
                        {exp.current && (
                          <span className="tag-pill text-xs">Current</span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-primary mb-1">{exp.role}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full border border-border whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlight badge */}
                  {exp.highlight && (
                    <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-sm font-semibold text-accent">{exp.highlight}</span>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
