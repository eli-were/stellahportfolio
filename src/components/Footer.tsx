import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2.5">
              <AppLogo size={36} />
              <span className="font-display font-semibold text-lg text-foreground tracking-tight">
                Stellah<span className="italic text-primary font-normal"> Were</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mathematics & ICT Teacher · Tech & Robotics Trainer · Nairobi, Kenya
            </p>
            {/* Social icons via Cloudflare CDN (iconify) */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground">

                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_19c09b672-1772782286092.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="opacity-70" />

              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground">

                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_15ac45d49-1772389102891.png"
                  alt="X / Twitter"
                  width={16}
                  height={16}
                  className="opacity-70" />

              </a>
              <a
                href="mailto:stellahakuku@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 text-muted-foreground">

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Links compact */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Navigate</span>
              <div className="flex flex-col gap-2">
                {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Experience', href: '/experience' },
                { label: 'Skills', href: '/skills-certifications' },
                { label: 'Contact', href: '/contact' }]?.
                map((l) =>
                <Link
                  key={l?.href}
                  href={l?.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">

                    {l?.label}
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</span>
              <div className="flex flex-col gap-2">
                <a href="mailto:stellahakuku@gmail.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  stellahakuku@gmail.com
                </a>
                <a href="tel:+254799070299" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  +254 7990 70 299
                </a>
                <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Stellah Akuku Were. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}