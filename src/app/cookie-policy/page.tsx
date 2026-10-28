import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, ArrowLeft, Cookie, CheckCircle2, Sliders, Info } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/metadata';
import { CookiePreferencesButton } from '@/components/cookies/CookiePreferencesButton';

export const metadata = constructMetadata({
  title: 'Cookie Policy — CademyX Academic Guidance',
  description:
    'Learn how CademyX uses essential and optional cookies, how your preferences are stored, and how to manage your cookie consent settings.',
  canonical: '/cookie-policy',
});

export default function CookiePolicyPage() {
  const lastUpdated = 'October 28, 2026';

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 lg:py-20">
      <Container size="default">
        {/* Breadcrumb / Return Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#075AC8] hover:text-[#061B35] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Page Header Banner */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061B35] via-[#0A2244] to-[#152C45] text-white overflow-hidden mb-12 shadow-xl border border-[#075AC8]/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B72F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B72F]/15 border border-[#F4B72F]/30 text-[#F4B72F] text-xs font-bold uppercase tracking-wider mb-4">
              <Cookie className="h-3.5 w-3.5" />
              <span>Transparency &amp; Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm sm:text-base text-[#BACCE4] leading-relaxed">
              This Cookie Policy explains how CademyX uses cookies and similar storage technologies when you visit our website. We believe in clear disclosure, minimal tracking, and giving you full control over your digital preferences.
            </p>
            <p className="text-xs text-[#7E96B8] mt-4">
              Effective Date: {lastUpdated} • Version 1.0 • Applicable across all CademyX public portals
            </p>
          </div>
        </div>

        {/* Quick Management Callout Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#FEF8E9] border border-[#FDE6B0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#061B35]">
              Looking to adjust your cookie preferences?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              You can review, enable, or withdraw consent for optional cookie categories at any time.
            </p>
          </div>
          <div className="shrink-0">
            <CookiePreferencesButton variant="primary" />
          </div>
        </div>

        {/* Policy Document Body */}
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-[#061B35] prose-headings:font-bold prose-p:text-[#475569] prose-p:leading-relaxed prose-strong:text-[#061B35] space-y-10">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              1. Introduction
            </h2>
            <p>
              CademyX (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring transparency in all our educational advisory operations. This Cookie Policy works in conjunction with our{' '}
              <Link href="/privacy-policy" className="font-bold text-[#075AC8] hover:underline">
                Privacy Policy
              </Link>{' '}
              to explain how, why, and when cookies and similar browser storage mechanisms are utilized on our domain.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              2. What Cookies Are
            </h2>
            <p>
              Cookies are small text files placed on your computer, tablet, or smartphone by websites that you visit. They are widely used across the modern web to ensure websites function properly, retain essential session security, remember user preferences between page transitions, and provide aggregated analytics to website operators.
            </p>
            <p>
              Cookies may be &ldquo;session cookies&rdquo; (which expire automatically when you close your web browser) or &ldquo;persistent cookies&rdquo; (which remain stored on your device for a specified retention period or until manually cleared).
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              3. Why CademyX Uses Cookies
            </h2>
            <p>
              Our primary goal is to provide a reliable, frictionless educational advisory experience. We use cookies and browser storage strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#475569]">
              <li>Maintain session integrity and prevent cross-site request forgery during consultation form submissions.</li>
              <li>Remember your privacy and cookie preferences so you do not encounter repeated banners on every visit.</li>
              <li>Deliver interactive academic advisory scheduling tools (such as our direct 30-minute Calendly consultation interface).</li>
              <li>Understand aggregated, non-personally identifiable traffic patterns to improve program curriculum discovery.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              4. Types of Cookies Implemented
            </h2>

            {/* Essential */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#061B35]" />
                <h3 className="text-base font-bold text-[#061B35]">
                  A. Strictly Essential Cookies (Always Active)
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                These cookies are necessary for core site operations, network routing, and security. They cannot be deactivated without fundamentally breaking basic website navigation and lead submission verification.
              </p>
              <ul className="list-disc pl-6 text-xs text-[#5A6A85] space-y-1 pt-1">
                <li><strong>cademyx_cookie_consent_v1</strong>: Stores your verified cookie consent selections (Retention: 1 year).</li>
                <li><strong>cademyx_welcome_popup_dismissed_v1</strong>: Remembers if you dismissed the welcome dialogue so you are not disrupted repeatedly (Retention: 180 days).</li>
                <li><strong>Security &amp; Rate-Limiting Tokens</strong>: Session cookies to prevent automated spam on contact forms.</li>
              </ul>
            </div>

            {/* Functional */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#075AC8]" />
                <h3 className="text-base font-bold text-[#061B35]">
                  B. Functional Cookies (Optional)
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                Functional cookies allow enhanced usability, regional timezone detection for appointment scheduling, and preserving your preferred viewing state. If disabled, third-party scheduler embeds will offer direct link alternatives instead.
              </p>
            </div>

            {/* Analytics */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#D99519]" />
                <h3 className="text-base font-bold text-[#061B35]">
                  C. Analytics Cookies (Optional)
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                These collect anonymized information regarding which degree programs receive the highest interest, average session durations, and server load speeds. No personally identifiable profiling is performed.
              </p>
            </div>

            {/* Marketing */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#8B5CF6]" />
                <h3 className="text-base font-bold text-[#061B35]">
                  D. Marketing &amp; Outreach Cookies (Optional)
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                Used exclusively if targeted enrollment announcements or educational campaigns are active, preventing you from receiving redundant recommendations across external channels.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              5. Third-Party Services
            </h2>
            <p>
              To deliver specialized academic services, CademyX interfaces with trusted service providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#475569]">
              <li>
                <strong>Calendly LLC</strong>: Powering our direct 30-minute academic consultation booking portal on <Link href="/schedule-a-consultation" className="font-bold text-[#075AC8]">/schedule-a-consultation</Link>. When the scheduler widget initializes, Calendly may set functional cookies to maintain time slot selection.
              </li>
              <li>
                <strong>Resend Technologies</strong>: Handling administrative notification dispatch server-side. Resend operates strictly through server-to-server API endpoints and does not place client-side tracking cookies on your device.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              6. Cookie Storage and Duration
            </h2>
            <p>
              Cookies placed by CademyX adhere strictly to defined lifetimes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#475569]">
              <li><strong>Session Cookies</strong>: Cleared immediately when you terminate your browser session.</li>
              <li><strong>Preference Cookies</strong>: Stored for a maximum of 12 months, after which you will be invited to refresh your choices.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              7. How to Manage Cookie Preferences
            </h2>
            <p>
              You maintain persistent control over your cookie settings. You can reopen the consent manager at any time by clicking the button below or using the &ldquo;Cookie Preferences&rdquo; link located in the website footer on any page:
            </p>
            <div className="py-2">
              <CookiePreferencesButton variant="secondary" />
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              8. How to Change or Withdraw Consent
            </h2>
            <p>
              Consent is voluntary and may be withdrawn at any point without prejudice to your access to CademyX academic guidance. When you open the preference dialog and click &ldquo;Reject All Optional&rdquo; or toggle individual categories off and click &ldquo;Save Preferences,&rdquo; CademyX immediately stops optional tracking for all subsequent page actions.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              9. Browser Cookie Controls
            </h2>
            <p>
              In addition to our on-site controls, all major web browsers allow you to inspect, restrict, or block cookies through browser settings. For detailed instructions, refer to your browser’s official documentation:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs text-[#075AC8]">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Chrome Cookie Settings</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Safari Cookie Settings</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="hover:underline">Mozilla Firefox Privacy Settings</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="hover:underline">Microsoft Edge Cookie Management</a></li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              10. Updates to This Policy
            </h2>
            <p>
              We periodically update this policy to reflect enhancements in our advisory services, infrastructure, or regulatory guidelines. Any material modifications will be noted on this page with a revised effective date. If cookie requirements change fundamentally, we will prompt visitors to review their preferences upon their next visit.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              11. Contact Information
            </h2>
            <p>
              For inquiries regarding this Cookie Policy or our data protection practices, please contact our academic privacy officers:
            </p>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4B72F]" />
                <span className="font-bold text-[#061B35]">Primary Inquiries:</span>
                <a href="mailto:info@cademyx.com" className="text-[#075AC8] hover:underline">
                  info@cademyx.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4B72F]" />
                <span className="font-bold text-[#061B35]">Alternative Advisory:</span>
                <a href="mailto:hello@cademyx.com" className="text-[#075AC8] hover:underline">
                  hello@cademyx.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
