'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const highlights = [
{
  tag: 'Achievement',
  tagVariant: 'accent',
  title: 'Perfect KCSE Score',
  description:
  'Produced an A grade 12.00 in KCSE 2023 with 30 Computer Studies candidates at Starehe Boys Centre — through inquiry-based learning and data-driven personalized feedback.',
  image: '/assets/images/highlight-kcse.jpeg',
  imageAlt: 'Stellah receiving a certificate of merit at Starehe Boys Centre',
  link: '/experience',
  linkLabel: 'See Experience'
},
{
  tag: 'STEM Leadership',
  tagVariant: 'primary',
  title: 'IoT & Robotics Trainer',
  description:
  'Launched and spearheaded the Internet of Things club at Starehe Boys, delivering hands-on robotics sessions and fostering critical thinking across STEM technologies.',
  image: '/assets/images/highlight-robotic.jpeg',
  imageAlt: 'Student building and programming a robotics project in a computer lab',
  link: '/skills-certifications',
  linkLabel: 'View Skills'
},
{
  tag: 'Community',
  tagVariant: 'primary',
  title: 'Walimu-Tech Member',
  description:
  'Active member of the Walimu-Tech Platform by Chipurobo — a national community of teachers integrating Robotics, AI, and coding in Kenyan schools.',
  image: '/assets/images/highlight-community.jpeg',
  imageAlt: 'Stellah celebrating with students and fellow community members',
  link: '/contact',
  linkLabel: 'Connect'
}];


export default function FeaturedHighlights() {
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
            }, i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 bg-background" aria-labelledby="highlights-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Featured Work
            </p>
            <h2
              id="highlights-heading"
              className="font-display text-section-xl font-bold text-foreground tracking-tight">

              Where Expertise{' '}
              <span className="italic font-normal text-primary">Meets Impact.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
            A dual-certified educator whose classroom results speak louder than credentials.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) =>
          <div
            key={item.title}
            ref={(el) => {refs.current[i] = el;}}
            className="group flex flex-col rounded-3xl overflow-hidden bg-card border border-border hover-lift"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span
                className={`absolute top-4 left-4 ${
                item.tagVariant === 'accent' ? 'tag-accent' : 'tag-pill'}`
                }>

                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <h3 className="font-display text-xl font-semibold text-card-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
                <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2">

                  {item.linkLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
