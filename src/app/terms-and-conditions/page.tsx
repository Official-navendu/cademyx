import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Mail, Clock, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CONTACT_INFO } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Terms & Conditions — CademyX Academic Advisory',
  description:
    'Review the official terms and conditions governing the use of CademyX’s educational advisory, consultation scheduling, and academic pathway services.',
  canonical: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
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
              alt="CademyX Governance & Terms of Service"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#182A9A]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182A9A]/40 border border-[#DCE3FF]/30 text-[#DCE3FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <FileText className="h-4 w-4" />
              <span>Institutional Governance Framework</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3FF]/90 leading-relaxed">
              These terms govern your access to and use of CademyX’s digital catalog, consultation scheduling system, and academic advisory services. Please read these terms carefully before scheduling advisory sessions or utilizing our curriculum resources.
            </p>
            <p className="text-xs text-[#DCE3FF]/70 mt-5">
              Effective Date: {lastUpdated} • Version 2.1 • Applicable across all CademyX digital advisory operations
            </p>
          </div>
        </div>

        {/* Document Content - 15 Comprehensive Sections */}
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-[#101F70] prose-headings:font-bold prose-p:text-[#26345C] prose-p:leading-relaxed prose-strong:text-[#101F70] space-y-10">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the website located at <Link href="/" className="font-semibold text-[#182A9A] hover:underline">cademyx.com</Link> (the &ldquo;Platform&rdquo;), booking academic consultation sessions, submitting educational inquiry forms, or engaging with any advisory services provided by CademyX (&ldquo;CademyX,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you expressly agree to be bound by these Terms &amp; Conditions and our{' '}
              <Link href="/privacy-policy" className="font-semibold text-[#182A9A] hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree with all of these terms, you are expressly prohibited from using the platform and must discontinue access immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              2. Educational Advisory Services Scope
            </h2>
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 not-prose mb-4">
              <p className="text-xs sm:text-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                Essential Institutional Clarification
              </p>
              <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                CademyX is an independent academic guidance and advisory platform. CademyX is <strong>not an accredited university, college, or degree-granting institution</strong>. All academic degrees, diplomas, doctoral titles, and formal transcripts are awarded exclusively by autonomous, accredited partner colleges and universities. CademyX does not issue degrees, confer doctoral awards, or grant collegiate academic credits directly.
              </p>
            </div>
            <p>
              Our role is strictly consultative: we evaluate academic prerequisites, map curriculum tracks, clarify institutional admission criteria, provide career relevance analyses, and coordinate transparent candidate advisory roadmaps.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              3. User Eligibility &amp; Accounts
            </h2>
            <p>
              To access advisory scheduling and submit consultation inquiries, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>You are at least 18 years of age, or have reached the legal age of majority in your jurisdiction, or have explicit parental/guardian consent if seeking undergraduate guidance.</li>
              <li>You possess the legal capacity to enter into binding agreements.</li>
              <li>All information submitted by you during registration, diagnostic assessment, or inquiry booking is accurate, current, and truthful.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              4. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the Platform, its underlying software, design systems, algorithms, text, graphics, logos, curriculum matrices, program comparison frameworks, and advisory documentation are proprietary to CademyX and are protected by applicable intellectual property laws.
            </p>
            <p>
              You are granted a limited, revocable, non-exclusive license to view and print individual curriculum summaries strictly for personal, non-commercial educational decision-making. No portion of the platform may be scraped, copied, republished, distributed, or commercially exploited without our express prior written authorization.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              5. User Conduct &amp; Acceptable Use
            </h2>
            <p>You agree not to engage in any prohibited activities on the platform, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>Submitting fraudulent academic transcripts, counterfeit certificates, or misrepresenting prerequisite credentials.</li>
              <li>Attempting to bypass security controls, inject malicious scripts, or probe system vulnerabilities.</li>
              <li>Using automated crawlers, bots, or harvesting tools to extract candidate databases or proprietary program listings.</li>
              <li>Using the platform to send unsolicited spam, promotional pitches, or harassing communications to advisory personnel.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              6. Consultation Booking &amp; Cancellation Terms
            </h2>
            <p>
              CademyX offers direct 1-on-1 academic advisory consultations (such as our 30-minute structured dialogues) to evaluate candidate objectives. When reserving a consultation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li><strong>Time Commitment:</strong> We allocate dedicated academic advisors for each scheduled slot. Candidates are expected to join punctually.</li>
              <li><strong>Rescheduling &amp; Cancellations:</strong> If you cannot attend your scheduled consultation, please use the reschedule link provided in your email confirmation at least 12 hours in advance.</li>
              <li><strong>No-Show Policy:</strong> Repeated unexplained absences may result in temporary suspension of automated self-scheduling privileges.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              7. Accuracy of Information &amp; Disclaimer
            </h2>
            <p>
              Program details, eligibility guidelines, syllabi outlines, fees, and admission criteria displayed on CademyX are curated from accredited institutions and verified academic sources. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>Higher education institutions continuously update their curricula, fee schedules, faculty rosters, and admission cutoffs.</li>
              <li>All published information is subject to change by partner institutions without prior notice.</li>
              <li>Candidates are strongly advised to verify final institutional prerequisites directly with their assigned advisor or the degree-granting institution.</li>
              <li>CademyX <strong>does not guarantee university admission, visa approvals, academic pass rates, or specific employment outcomes</strong>.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall CademyX, its officers, directors, employees, or educational advisors be liable for any indirect, consequential, exemplary, incidental, or punitive damages, including loss of profits, academic delays, institutional rejection decisions, or third-party visa outcomes arising from your use of the platform or advisory guidance.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              9. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless CademyX and its affiliates, directors, officers, agents, and employees from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or in any way connected with your breach of these Terms, misrepresentation of educational credentials, or violation of third-party intellectual property rights.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              10. Third-Party Links &amp; Content
            </h2>
            <p>
              The Platform may contain hyperlinks to third-party websites, universities, educational portals, or payment gateways. Such external links are provided solely for user convenience. CademyX does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              11. Modification of Services &amp; Terms
            </h2>
            <p>
              We reserve the right to amend, update, or replace these Terms &amp; Conditions at our sole discretion. Any changes will take effect immediately upon posting to the Platform with an updated effective date. Your continued use of CademyX following the posting of changes constitutes acceptance of those revisions.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              12. Termination
            </h2>
            <p>
              CademyX reserves the right, without prior notice and at its sole discretion, to terminate or suspend your access to the platform or decline consultation requests if you violate these Terms, provide falsified credentials, or engage in abusive conduct toward our advisory staff.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              13. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions and any disputes arising out of or related to your use of CademyX shall be governed by and construed in accordance with the substantive laws of India. Any legal action or proceeding shall be brought exclusively in the competent courts having jurisdiction in Ghaziabad / Uttar Pradesh, India.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              14. Severability &amp; Entire Agreement
            </h2>
            <p>
              If any provision of these Terms is deemed unlawful, void, or for any reason unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of any remaining provisions. These Terms, along with the Privacy Policy and Cookie Policy, constitute the entire agreement between you and CademyX regarding platform usage.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              15. Contact Information
            </h2>
            <p>
              For legal inquiries, terms interpretation, or administrative clarifications regarding CademyX services, please reach out to our institutional administrative office:
            </p>
            <div className="not-prose p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] space-y-3 text-sm text-[#101F70]">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#182A9A] shrink-0 mt-0.5" />
                <span>
                  <strong>CademyX Administrative Headquarters:</strong> {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#182A9A] shrink-0" />
                <span>
                  <strong>Official Legal Desk:</strong>{' '}
                  <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-[#182A9A] font-semibold hover:underline">
                    {CONTACT_INFO.primaryEmail}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#182A9A] shrink-0" />
                <span>
                  <strong>Administrative Hours:</strong> {CONTACT_INFO.businessHours}
                </span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
