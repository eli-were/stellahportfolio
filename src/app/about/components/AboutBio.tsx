'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutBio() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
    { el: leftRef?.current, dir: 'left' },
    { el: rightRef?.current, dir: 'right' }];

    items?.forEach(({ el, dir }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = dir === 'left' ? 'translateX(-28px)' : 'translateX(28px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs?.observe(el);
    });
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 bg-background" aria-labelledby="bio-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Photo + Quote card */}
        <div ref={leftRef} className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/10">
            <AppImage
              src="/assets/images/about-portrait.webp"
              alt="Professional female educator in a bright office setting, confident and authoritative pose, warm natural light"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />

          </div>
          {/* Floating quote card */}
          <div className="absolute -bottom-6 -right-4 md:-right-8 glass-card rounded-2xl p-6 max-w-xs shadow-xl border border-border hidden md:block">
            <p className="font-display italic text-base text-foreground mb-3">
              &ldquo;Bridging classroom learning with real-life application is not just my goal — it&apos;s my method.&rdquo;
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              — Stellah Akuku Were
            </p>
          </div>
        </div>

        {/* Right: Bio text */}
        <div ref={rightRef} className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Professional Bio
            </p>
            <h2
              id="bio-heading"
              className="font-display text-card-lg font-bold text-foreground tracking-tight mb-6">

              Stellah Akuku Were
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Stellah is a Mathematics and ICT teacher with over 4 years of experience working
                with Form 1–4 (Year 9–12) learners in Kenya&apos;s top secondary schools. She holds
                a <strong className="text-foreground">Bachelor of Education in ICT & Mathematics</strong> from
                the University of Nairobi.
              </p>
              <p>
                Her rare dual expertise spans both the analytical rigor of Mathematics and the
                practical innovation of ICT — including Python, Arduino, IoT, and Generative AI.
                She is deeply versed in Kenya&apos;s <strong className="text-foreground">Competence-Based Education (CBC)</strong> curriculum
                and has led transformative initiatives including an IoT club and IBM SkillsBuild
                facilitation.
              </p>
              <p>
                In 2023, her 30 Computer Studies candidates at Starehe Boys Centre achieved a{' '}
                <strong className="text-foreground">perfect KCSE score of A grade 12.00</strong> — earning her the
                Teacher of the Year award. She is a certified member of the Kenya Teachers Service
                Commission and an active advocate for child online protection and digital literacy.
              </p>
              <p>
                Stellah seeks to advance her career in an international or NGO setting where she can
                leverage her expertise to make a profound impact on students&apos; lives and
                institutional STEM outcomes.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
            { label: 'Location', value: 'Nairobi, Kenya' },
            { label: 'Curriculum', value: 'KCSE & CBC' },
            { label: 'Subjects', value: 'Mathematics & ICT' },
            { label: 'Specialisation', value: 'IoT & Robotics' }]?.
            map((fact) =>
            <div key={fact?.label} className="bg-secondary rounded-xl p-4 border border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  {fact?.label}
                </p>
                <p className="font-semibold text-foreground text-sm">{fact?.value}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
