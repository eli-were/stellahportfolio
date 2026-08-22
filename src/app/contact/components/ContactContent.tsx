'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
    { el: leftRef.current, dir: 'left' },
    { el: rightRef.current, dir: 'right' }];

    items.forEach(({ el, dir }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = dir === 'left' ? 'translateX(-24px)' : 'translateX(24px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio] ${formData.subject || 'General Enquiry'} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.organisation || 'N/A'}\nSubject: ${formData.subject}\n\n${formData.message}`
    );
    window.open(`mailto:stellahakuku@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  const inputClass =
  'w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200';

  return (
    <section className="py-20 px-4 sm:px-6 bg-background" aria-labelledby="contact-form-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Contact details */}
        <div ref={leftRef} className="flex flex-col gap-8">
          <div>
            <h2 id="contact-form-heading" className="font-display text-card-lg font-bold text-foreground tracking-tight mb-4">
              Direct Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reach out directly or use the form. Response time is typically within 24 hours on
              working days.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            {[
            {
              icon:
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>,

              label: 'Email',
              value: 'stellahakuku@gmail.com',
              href: 'mailto:stellahakuku@gmail.com'
            },
            {
              icon:
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>,

              label: 'Phone',
              value: '+254 799 070 299',
              href: 'tel:+254799070299'
            },
            {
              icon:
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>,

              label: 'Location',
              value: 'Nairobi, Kenya',
              href: null
            }].
            map((item) =>
            <div key={item.label} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/15 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                    {item.label}
                  </p>
                  {item.href ?
                <a href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a> :

                <p className="text-sm font-semibold text-foreground">{item.value}</p>
                }
                </div>
              </div>
            )}
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Connect Online
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:stellahakuku@gmail.com"
                aria-label="Email"
                className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
              <a
                href="https://wa.me/254799070299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[#25D366]/40 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/stellah.were"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[#1877F2]/40 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/stellah-were"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[#0A66C2]/40 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Availability note */}
          <div className="bg-primary/8 border border-primary/15 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Current Availability
            </p>
            <p className="text-sm text-foreground font-medium leading-relaxed">
              Open to international teaching roles, NGO partnerships, trainer/consultant engagements, and speaker invitations. Based in Nairobi — available for remote or in-person.
            </p>
          </div>
        </div>

        {/* Right: Contact form */}
        <div ref={rightRef}>
          {submitted ?
          <div className="bg-primary/8 border border-primary/15 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thank you for reaching out. Stellah will respond within 24 hours on working days.
              </p>
            </div> :

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-1">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass} />

                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass} />

                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="organisation" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Organisation / Institution
                </label>
                <input
                id="organisation"
                name="organisation"
                type="text"
                placeholder="School, NGO, or organisation name"
                value={formData.organisation}
                onChange={handleChange}
                className={inputClass} />

              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Subject / Enquiry Type *
                </label>
                <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}>

                  <option value="">Select a subject</option>
                  <option value="teaching-role">Teaching Role / Position</option>
                  <option value="training-engagement">Training or Workshop Engagement</option>
                  <option value="speaking">Speaking / Conference Invitation</option>
                  <option value="ngo-partnership">NGO / Partnership Inquiry</option>
                  <option value="consulting">Curriculum Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell Stellah about your opportunity or enquiry..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`} />

              </div>

              <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5 mt-2">

                Send Message
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          }
        </div>
      </div>
    </section>);

}