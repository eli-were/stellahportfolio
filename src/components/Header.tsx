'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills-certifications' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep the primary destinations ready before visitors select a navigation link.
  useEffect(() => {
    navLinks.forEach(({ href }) => router.prefetch(href));
  }, [router]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`glass-nav rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'shadow-lg shadow-primary/5' : ''
            }`}
          >
            {/* Logo */}
            <Link href="/" prefetch className="flex items-center gap-2.5 group">
              <AppLogo
                size={36}
                onClick={() => {}}
              />
              <span className="font-display font-semibold text-lg text-foreground tracking-tight hidden sm:block">
                Stellah<span className="italic text-primary font-normal"> Were</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  prefetch
                  className="hover:text-primary transition-colors duration-200 relative group"
                >
                  {link?.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                prefetch
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20"
              >
                Get in Touch
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(247,245,240,0.96)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              prefetch
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            prefetch
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:bg-primary/90 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
