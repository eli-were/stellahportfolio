'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [badgeRef?.current, titleRef?.current, subtitleRef?.current, ctaRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = `opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)`;
        el.style.transitionDelay = `${i * 150}ms`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/hero-classroom.jpeg"
          alt="Stellah supporting students during a computer lesson"
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw" />

        {/* Scrim: dark on bottom-left where text lives, fades up */}
        <div className="absolute inset-0 scrim-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,25,23,0.75) 0%, rgba(28,25,23,0.2) 60%, rgba(45,80,22,0.35) 100%)' }} />
      </div>

      {/* Atmospheric blobs */}
      <div ref={overlayRef} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 blob-accent animate-float-slow" />
      </div>

      {/* Nav spacer */}
      <div className="h-28" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 pb-24 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 glass-card border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white/90 mb-8 w-fit">

          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          Nairobi, Kenya · Available for Engagements
        </div>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="font-display text-hero-xl font-bold text-white tracking-tight max-w-4xl mb-6">

          Mathematics.{' '}
          <span className="italic font-normal" style={{ color: 'var(--accent)' }}>ICT.</span>
          <br />
          Robotics.{' '}
          <span className="italic font-normal text-white/80">Results.</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subtitleRef}
          className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10">

          Educator, STEM trainer, and tech advocate with 4+ years shaping Kenya&apos;s next generation — from Starehe Boys to IoT clubs to a{' '}
          <span className="text-white font-semibold">perfect KCSE score.</span>
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/experience"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5">

            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">

            Partner With Me
          </Link>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
        </div>
      </div>
    </section>);

}
