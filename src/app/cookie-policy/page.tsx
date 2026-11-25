import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, ArrowLeft, Cookie, CheckCircle2, Sliders, Info } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/metadata';
import { CookiePreferencesButton } from '@/components/cookies/CookiePreferencesButton';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata = constructMetadata({
  title: 'Cookie Policy — CademyX Academic Guidance',
  description:
    'Learn how CademyX uses essential and optional cookies, inspect our complete cookie inventory table, and manage your cookie consent preferences.',
  canonical: '/cookie-policy',
});

export default function CookiePolicyPage() {
  const lastUpdated = 'November 24, 2026';

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 lg:py-20">
      <Container size="default">
        {/* Breadcrumb / Return Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#182A9A] hover:text-[#101F70] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Page Header Banner with Legal Hero Image */}
        <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#101F70] via-[#0D1959] to-[#101F70] text-white overflow-hidden mb-12 shadow-xl border border-[#DCE3FF]/20">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
            <Image
              src="/assets/images/hero/legal-hero.jpg"
              alt="CademyX Digital Privacy & Cookie Governance"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#182A9A]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182A9A]/40 border border-[#DCE3FF]/30 text-[#DCE3FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Cookie className="h-4 w-4" />
              <span>Transparency &amp; Privacy Standards</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3FF]/90 leading-relaxed">
              This Cookie Policy explains how CademyX uses cookies and similar storage technologies when you explore our academic advisory portal. We believe in clear disclosure, minimal tracking, and giving you full control over your digital preferences.
            </p>
            <p className="text-xs text-[#DCE3FF]/70 mt-5">
              Effective Date: {lastUpdated} • Version 2.2 • Applicable across all CademyX public portals
            </p>
          </div>
        </div>

        {/* Quick Preferences Callout Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#101F70]">
              Looking to adjust your cookie preferences?
            </h2>
            <p className="text-xs sm:text-sm text-[#26345C] mt-1">
              You can review, enable, or withdraw consent for optional cookie categories at any time on our dedicated preferences page.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/cookie-preferences"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#101F70] text-white hover:bg-[#182A9A] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Sliders className="w-4 h-4" />
              <span>Manage Preferences</span>
            </Link>
            <CookiePreferencesButton variant="secondary" />
          </div>
        </div>

        {/* Policy Document Body - 11 Comprehensive Sections */}
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-[#101F70] prose-headings:font-bold prose-p:text-[#26345C] prose-p:leading-relaxed prose-strong:text-[#101F70] space-y-10">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small data files placed on your computer, tablet, or mobile phone by websites that you visit. They are standard across modern web platforms, allowing web applications to remember your actions, retain essential session security, store your preferences (such as your cookie consent choices), and deliver interactive features like appointment booking calendars.
            </p>
            <p>
              Cookies can be classified by lifespan: <strong>session cookies</strong> exist only while your browser is open and are deleted automatically when you close it, whereas <strong>persistent cookies</strong> remain on your device for a defined expiry duration or until manually erased.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              2. How CademyX Uses Cookies
            </h2>
            <p>
              CademyX uses cookies strictly to deliver an authentic, seamless, and secure educational advisory service. We do not use cookies to sell candidate leads or profile users across third-party websites. Specifically, we use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>Maintain safe browsing sessions and prevent cross-site request forgery on academic enquiry forms.</li>
              <li>Record your cookie consent choices so you are not confronted with repetitive consent banners.</li>
              <li>Power our embedded 30-minute academic consultation scheduler via Calendly.</li>
              <li>Gather aggregated, non-personally identifiable metrics on which program disciplines receive the highest engagement to enhance educational content quality.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              3. Types of Cookies We Use
            </h2>
            <p>
              We categorize cookies on CademyX into four distinct operational classes:
            </p>

            {/* Strictly Necessary */}
            <div className="p-5 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] space-y-2 mt-4 not-prose">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#101F70]" />
                <h3 className="text-base font-bold text-[#101F70]">
                  A. Strictly Necessary Cookies (Always Active)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                Fundamental for website security, routing, and CSRF protection. Without these cookies, basic page transitions, inquiry form validations, and consent recording cannot function.
              </p>
            </div>

            {/* Performance & Analytics */}
            <div className="p-5 rounded-2xl bg-white border border-[#DCE3FF] space-y-2 mt-4 not-prose">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[#182A9A]" />
                <h3 className="text-base font-bold text-[#101F70]">
                  B. Performance &amp; Analytics Cookies (Optional)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                Collect aggregated, anonymized insights regarding page load speeds, popular program specializations, and navigation flows. No candidate profiling or identity tracking is performed.
              </p>
            </div>

            {/* Functional */}
            <div className="p-5 rounded-2xl bg-white border border-[#DCE3FF] space-y-2 mt-4 not-prose">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#182A9A]" />
                <h3 className="text-base font-bold text-[#101F70]">
                  C. Functional Cookies (Optional)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                Enhance your experience by caching selected advisory timezones and facilitating direct consultation booking through third-party scheduler widgets.
              </p>
            </div>

            {/* Marketing & Advertising */}
            <div className="p-5 rounded-2xl bg-white border border-[#DCE3FF] space-y-2 mt-4 not-prose">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#182A9A]" />
                <h3 className="text-base font-bold text-[#101F70]">
                  D. Marketing &amp; Outreach Cookies (Optional)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                Ensure that informational academic cohort announcements are not shown repetitively to candidates who have already initiated a consultation.
              </p>
            </div>
          </section>

          {/* Section 4 - Detailed Cookie Inventory Table */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              4. Detailed Cookie Inventory Table
            </h2>
            <p>
              Below is the comprehensive, transparent inventory of cookies currently deployed across CademyX:
            </p>
            <div className="overflow-x-auto not-prose my-4">
              <table className="w-full text-left text-xs border border-[#DCE3FF] rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#101F70] text-white font-bold">
                  <tr>
                    <th className="p-3 border-b border-[#182A9A]">Cookie Name</th>
                    <th className="p-3 border-b border-[#182A9A]">Provider</th>
                    <th className="p-3 border-b border-[#182A9A]">Purpose</th>
                    <th className="p-3 border-b border-[#182A9A]">Expiry</th>
                    <th className="p-3 border-b border-[#182A9A]">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCE3FF] text-[#26345C] bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-[#101F70]">cademyx_cookie_consent_v1</td>
                    <td className="p-3">CademyX First-Party</td>
                    <td className="p-3">Stores your verified cookie category consent settings</td>
                    <td className="p-3">12 Months</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-[#101F70] text-white font-bold text-[10px]">Strictly Necessary</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-[#101F70]">cademyx_welcome_popup_dismissed_v1</td>
                    <td className="p-3">CademyX First-Party</td>
                    <td className="p-3">Prevents repeated greeting dialogs for returning visitors</td>
                    <td className="p-3">180 Days</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-[#101F70] text-white font-bold text-[10px]">Strictly Necessary</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-[#101F70]">_csrf_token</td>
                    <td className="p-3">CademyX First-Party</td>
                    <td className="p-3">Cross-Site Request Forgery security on contact forms</td>
                    <td className="p-3">Session</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-[#101F70] text-white font-bold text-[10px]">Strictly Necessary</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-[#101F70]">calendly_session</td>
                    <td className="p-3">Calendly LLC</td>
                    <td className="p-3">Retains booking calendar step and regional timezone</td>
                    <td className="p-3">30 Days</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Functional</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-[#101F70]">__cf_bm</td>
                    <td className="p-3">Cloudflare</td>
                    <td className="p-3">Bot management and automated DDoS mitigation</td>
                    <td className="p-3">30 Minutes</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-[#101F70] text-white font-bold text-[10px]">Strictly Necessary</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-[#101F70]">_ga / _gid</td>
                    <td className="p-3">Google Analytics (opt-in)</td>
                    <td className="p-3">Aggregated anonymous usage metrics and page performance</td>
                    <td className="p-3">Up to 24 Months</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">Analytics</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              5. Third-Party Cookies
            </h2>
            <p>
              Certain pages may feature integrated third-party tools to facilitate consultation scheduling or media delivery:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>
                <strong>Calendly LLC:</strong> On <Link href="/schedule-a-consultation" className="font-semibold text-[#182A9A]">/schedule-a-consultation</Link>, the Calendly widget uses functional cookies to retain candidate availability selections across timezones.
              </li>
              <li>
                <strong>Cloudflare Infrastructure:</strong> Deployed at our network edge to provide DDoS protection and bot filtering, utilizing lightweight security tokens.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              6. How to Control Cookies via Browser Settings
            </h2>
            <p>
              In addition to our on-site <Link href="/cookie-preferences" className="font-semibold text-[#182A9A] hover:underline">Cookie Preferences</Link> tool, you can manage or delete cookies via your web browser settings. Follow the official guides for your browser:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose my-4">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-[#DCE3FF] bg-[#F3F5FF] hover:bg-[#DCE3FF]/40 text-xs font-semibold text-[#101F70] transition-colors flex items-center justify-between"
              >
                <span>Google Chrome Cookie Guide</span>
                <span className="text-[#182A9A]">&rarr;</span>
              </a>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-[#DCE3FF] bg-[#F3F5FF] hover:bg-[#DCE3FF]/40 text-xs font-semibold text-[#101F70] transition-colors flex items-center justify-between"
              >
                <span>Apple Safari Cookie Guide</span>
                <span className="text-[#182A9A]">&rarr;</span>
              </a>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-[#DCE3FF] bg-[#F3F5FF] hover:bg-[#DCE3FF]/40 text-xs font-semibold text-[#101F70] transition-colors flex items-center justify-between"
              >
                <span>Mozilla Firefox Cookie Guide</span>
                <span className="text-[#182A9A]">&rarr;</span>
              </a>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-[#DCE3FF] bg-[#F3F5FF] hover:bg-[#DCE3FF]/40 text-xs font-semibold text-[#101F70] transition-colors flex items-center justify-between"
              >
                <span>Microsoft Edge Cookie Guide</span>
                <span className="text-[#182A9A]">&rarr;</span>
              </a>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              7. Consent Management
            </h2>
            <p>
              When you first access CademyX, our interactive Cookie Consent Banner allows you to accept all cookies, reject optional cookies, or configure specific categories. Your preference is safely stored in local browser storage under <code>cademyx_cookie_consent_v1</code>.
            </p>
            <p>
              You can change or withdraw your consent at any time by clicking the &ldquo;Cookie Preferences&rdquo; link in the website footer or navigating directly to <Link href="/cookie-preferences" className="font-semibold text-[#182A9A]">/cookie-preferences</Link>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              8. &ldquo;Do Not Track&rdquo; (DNT) Signals
            </h2>
            <p>
              Some browsers broadcast automated &ldquo;Do Not Track&rdquo; (DNT) or Global Privacy Control (GPC) headers. Because CademyX operates on a strict consent-first principle—where optional analytics and marketing cookies remain disabled until explicit user consent is granted—our default configuration automatically respects the intent of DNT and GPC requests.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              9. Impact of Disabling Cookies
            </h2>
            <p>
              If you configure your browser to block all cookies (including strictly necessary ones), you may experience reduced functionality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>The cookie banner will reappear on every page transition because your preference cannot be stored.</li>
              <li>Interactive consultation booking widgets may require opening Calendly in a new external browser tab.</li>
              <li>Advisory inquiry forms may fail CSRF integrity validation.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              10. Updates to This Cookie Policy
            </h2>
            <p>
              We may revise this Cookie Policy periodically to accommodate emerging technical features, new advisory tools, or updated privacy regulations. Any updates will be published here with a revised effective date. Material alterations will be brought to your attention through an updated consent prompt.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              11. Contact Information for Cookie Queries
            </h2>
            <p>
              For any questions, feedback, or requests regarding our cookie practices, please contact our privacy compliance team:
            </p>
            <div className="not-prose p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] space-y-3 text-sm text-[#101F70]">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#182A9A] shrink-0" />
                <span>
                  <strong>Cookie &amp; Privacy Desk:</strong>{' '}
                  <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-[#182A9A] font-semibold hover:underline">
                    {CONTACT_INFO.primaryEmail}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Info className="h-4 w-4 text-[#182A9A] shrink-0" />
                <span>
                  <strong>Interactive Settings:</strong>{' '}
                  <Link href="/cookie-preferences" className="text-[#182A9A] font-semibold hover:underline">
                    cademyx.com/cookie-preferences
                  </Link>
                </span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
