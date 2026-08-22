import React from 'react';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `This Privacy Policy describes how this website ("the Site"), the professional portfolio of Stellah Akuku Were, collects, uses, and protects information you provide when you visit or interact with the Site. By using the Site, you agree to the practices described in this policy. If you have any questions, please contact stellahakuku@gmail.com.`,
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: `We may collect the following types of information:\n\n• **Contact form data:** When you submit the contact form, we collect your name, email address, organisation name, subject of enquiry, and message content. This information is used solely to respond to your enquiry.\n\n• **Usage data:** We may collect non-personally identifiable information such as your browser type, pages visited, time spent on the Site, and referring URLs — through standard web analytics tools.\n\n• **Cookies:** The Site may use essential cookies to ensure proper functionality. We do not use tracking cookies for advertising purposes.`,
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: `Information collected through the contact form is used exclusively to:\n\n• Respond to your specific enquiry or message\n• Follow up on professional opportunities you have expressed interest in\n• Maintain records of professional correspondence\n\nWe do not sell, rent, or share your personal information with third parties for marketing purposes. We will not use your contact information to send unsolicited communications.`,
  },
  {
    id: 'cookies',
    title: '4. Cookies',
    content: `This Site may use minimal, essential cookies to support basic functionality such as navigation and session management. These cookies do not collect personal information and are not used for tracking or advertising.\n\nYou can control cookie settings through your browser preferences. Disabling cookies may affect certain site features. We do not use third-party advertising cookies or cross-site tracking technologies.`,
  },
  {
    id: 'third-party',
    title: '5. Third-Party Services',
    content: `The Site may load resources from third-party services including:\n\n• **Cloudflare CDN:** Used to serve static assets including social media icons. Cloudflare may collect standard web traffic data as part of their CDN service. Please refer to Cloudflare's Privacy Policy for details.\n\n• **Unsplash / Image services:** Background and illustrative images may be served from third-party image platforms.\n\nThese third-party services have their own privacy policies and we are not responsible for their data practices.`,
  },
  {
    id: 'data-retention',title: '6. Data Retention',
    content: `Contact form submissions are retained only as long as necessary to respond to your enquiry and maintain professional records. We do not retain personal data indefinitely. You may request deletion of your data at any time by contacting stellahakuku@gmail.com.`,
  },
  {
    id: 'your-rights',title: '7. Your Rights',
    content: `Under applicable data protection laws, you have the right to:\n\n• **Access** the personal data we hold about you\n• **Correct** inaccurate or incomplete data\n• **Request deletion** of your personal data\n• **Object** to processing of your personal data\n• **Withdraw consent** at any time where processing is based on consent\n\nTo exercise any of these rights, please contact us at stellahakuku@gmail.com. We will respond within 30 days.`,
  },
  {
    id: 'security',title: '8. Data Security',
    content: `We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse. However, no transmission over the internet is entirely secure, and we cannot guarantee absolute security of data transmitted to or from this Site.`,
  },
  {
    id: 'changes',title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date. We encourage you to review this page periodically.`,
  },
  {
    id: 'contact',title: '10. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact:\n\nStellah Akuku Were\nEmail: stellahakuku@gmail.com\nPhone: +254 799 070 299\nNairobi, Kenya`,
  },
];

export default function PrivacyContent() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Legal</p>
          <h1 className="font-display text-section-xl font-bold text-foreground tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-base">
            Effective date: 21 August 2026 · Last updated: 21 August 2026
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar TOC (desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-28">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Contents
            </p>
            <nav className="flex flex-col gap-1">
              {sections?.map((s) => (
                <a
                  key={s?.id}
                  href={`#${s?.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-border hover:border-primary pl-3"
                >
                  {s?.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <article className="flex-1 max-w-2xl">
            <div className="bg-primary/8 border border-primary/15 rounded-2xl p-5 mb-10">
              <p className="text-sm text-foreground leading-relaxed">
                This policy applies to the professional portfolio website of Stellah Akuku Were. It explains how personal data is collected, used, and protected. Please read it carefully before submitting any information.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {sections?.map((section) => (
                <div key={section?.id} id={section?.id} className="scroll-mt-28">
                  <h2 className="font-display text-xl font-bold text-foreground tracking-tight mb-4 pb-3 border-b border-border">
                    {section?.title}
                  </h2>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line space-y-3">
                    {section?.content?.split('\n\n')?.map((para, pi) => (
                      <p key={pi}>
                        {para?.split('**')?.map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i} className="text-foreground font-semibold">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}