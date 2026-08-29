import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutBio() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-background" aria-labelledby="bio-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Photo + Quote card */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/10">
            <AppImage
              src="/assets/images/about-portrait.jpg"
              alt="Stellah Akuku Were at a community event in Nairobi"
              fill
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
        <div className="flex flex-col justify-between gap-10">
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
                Stellah is a Mathematics and Computer Science teacher with over 4 years of experience working
                with Form 1–4 (Year 9–12) learners in Kenya&apos;s top secondary schools. She holds
                a <strong className="text-foreground">Bachelor of Education in Computer Science & Mathematics</strong> from
                the University of Nairobi.
              </p>
              <p>
                Her work combines Mathematics with practical Computer Science skills, including
                Python, Arduino, IoT, and generative AI. She works within Kenya&apos;s{' '}
                <strong className="text-foreground">Competence-Based Education (CBC)</strong> curriculum and has
                supported an IoT club and IBM SkillsBuild sessions.
              </p>
              <p>
                In 2023, her 30 Computer Studies candidates at Starehe Boys Centre achieved a{' '}
                <strong className="text-foreground">perfect KCSE score of A grade 12.00</strong> — earning her the
                Teacher of the Year award. She is a certified member of the Kenya Teachers Service
                Commission and an active advocate for child online protection and digital literacy.
              </p>
              <p>
                Stellah is open to international school and NGO roles where she can support
                students and strengthen STEM programmes.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
            { label: 'Location', value: 'Nairobi, Kenya' },
            { label: 'Curriculum', value: 'KCSE & CBC' },
            { label: 'Subjects', value: 'Mathematics & Computer Science' },
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
