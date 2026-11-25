import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, Clock, MapPin, ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CONTACT_INFO } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Privacy Policy — CademyX Academic Advisory',
  description:
    'Read CademyX’s official privacy policy. Learn how we safeguard candidate information, handle academic inquiry data, and protect student confidentiality across all advisory programs.',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
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

        {/* Page Header Banner with Unique Legal Hero Image */}
        <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#101F70] via-[#0D1959] to-[#101F70] text-white overflow-hidden mb-12 shadow-xl border border-[#DCE3FF]/20">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
            <Image
              src="/assets/images/hero/legal-hero.jpg"
              alt="CademyX Institutional Governance & Data Privacy"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#182A9A]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182A9A]/40 border border-[#DCE3FF]/30 text-[#DCE3FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Institutional Governance &amp; Data Ethics</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3FF]/90 leading-relaxed">
              At CademyX, we hold candidate confidentiality and academic privacy to the highest standard. This policy provides full transparency into how your personal and educational information is collected, safeguarded, processed, and maintained across all advisory interactions.
            </p>
            <p className="text-xs text-[#DCE3FF]/70 mt-5">
              Effective Date: {lastUpdated} • Version 2.4 • Applicable to all prospective candidates and advisory participants
            </p>
          </div>
        </div>

        {/* Document Content - 15 Comprehensive Sections */}
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-[#101F70] prose-headings:font-bold prose-p:text-[#26345C] prose-p:leading-relaxed prose-strong:text-[#101F70] space-y-10">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              1. Introduction &amp; Overview
            </h2>
            <p>
              CademyX (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates an academic guidance, educational counselling, and curriculum advisory platform. We believe that every student, researcher, scholar, and working professional has a fundamental right to the absolute privacy and security of their academic aspirations, qualification records, and contact details.
            </p>
            <p>
              This Privacy Policy describes our practices regarding the collection, handling, storage, and protection of information obtained through <Link href="/" className="font-semibold text-[#182A9A] hover:underline">cademyx.com</Link>, our direct 1-on-1 consultation scheduling forms, advisory diagnostic assessments, and official email correspondence. We are committed to processing your personal data lawfully, fairly, and with complete institutional transparency.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you knowingly and voluntarily provide, as well as limited technical diagnostics necessary for network delivery and session security. This data falls into three categories:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-4">
              <div className="p-4 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF]">
                <h3 className="font-bold text-[#101F70] text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#182A9A]" />
                  Personal Identifiers
                </h3>
                <p className="text-xs text-[#26345C] leading-relaxed">
                  Full name, verified email address, optional contact preferences, and country/region of residence.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF]">
                <h3 className="font-bold text-[#101F70] text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#182A9A]" />
                  Academic Profile
                </h3>
                <p className="text-xs text-[#26345C] leading-relaxed">
                  Educational background, degree level sought (Doctorate, Master&apos;s, Bachelor&apos;s, Certification), current occupation, and academic objectives.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF]">
                <h3 className="font-bold text-[#101F70] text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#182A9A]" />
                  Usage &amp; Diagnostics
                </h3>
                <p className="text-xs text-[#26345C] leading-relaxed">
                  Browser type, device classification, IP address (anonymized), session timestamps, and curriculum page discovery pathways.
                </p>
              </div>
            </div>
            <p>
              We do not collect sensitive demographic attributes, financial account credentials, credit card numbers, or biometric records on this platform.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              3. How We Collect Information
            </h2>
            <p>Information is gathered through two direct mechanisms:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>
                <strong>Direct Interactions:</strong> You provide information directly when submitting consultation booking forms, registering for specialized academic advisory sessions (such as our 30-minute 1-on-1 Calendly dialogue), requesting curriculum guides, or corresponding via email.
              </li>
              <li>
                <strong>Automated Technologies:</strong> As you navigate our website, basic technical server logs and essential cookies record system performance, route stability, and aggregate traffic patterns to ensure high availability and prevent malicious form abuse.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              4. Purpose of Data Processing
            </h2>
            <p>
              We process candidate information strictly for legitimate educational advisory purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>Reviewing academic credentials against accredited university prerequisites and admission frameworks.</li>
              <li>Scheduling, coordinating, and delivering requested academic advisory sessions.</li>
              <li>Synthesizing personalized curriculum outlines, credit transfer evaluations, and program roadmaps.</li>
              <li>Communicating administrative appointment confirmations, consultation reschedule requests, and follow-up guidance notes.</li>
              <li>Safeguarding our web services against unauthorized access, automated spam, and cyber threats.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              5. Legal Basis for Processing
            </h2>
            <p>
              Under international data protection regulations (including the EU GDPR and relevant global frameworks), CademyX processes personal information under the following lawful grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li>
                <strong>Consent:</strong> When you voluntarily submit an enquiry form or consultation request, you provide explicit consent for our advisors to review your academic information and reach out.
              </li>
              <li>
                <strong>Contractual Necessity:</strong> Processing is required to perform our preliminary advisory obligations and schedule consultation sessions requested by you.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To maintain website security, optimize curriculum discoverability, prevent fraudulent submissions, and enhance the quality of our educational advisory workflows.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              6. Data Retention Policy
            </h2>
            <p>
              We retain candidate information only for as long as necessary to satisfy the educational advisory purpose for which it was originally collected:
            </p>
            <div className="overflow-x-auto not-prose my-4">
              <table className="w-full text-left text-xs border border-[#DCE3FF] rounded-xl overflow-hidden">
                <thead className="bg-[#F3F5FF] text-[#101F70] font-bold">
                  <tr>
                    <th className="p-3 border-b border-[#DCE3FF]">Data Classification</th>
                    <th className="p-3 border-b border-[#DCE3FF]">Retention Period</th>
                    <th className="p-3 border-b border-[#DCE3FF]">Disposal Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCE3FF] text-[#26345C]">
                  <tr>
                    <td className="p-3 font-semibold text-[#101F70]">Consultation Enquiries</td>
                    <td className="p-3">24 Months from last active communication</td>
                    <td className="p-3">Automated database purge and archival de-identification</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#101F70]">Cookie Consent Logs</td>
                    <td className="p-3">12 Months from user consent selection</td>
                    <td className="p-3">Browser cache expiry and periodic log rotation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#101F70]">Server Diagnostics Logs</td>
                    <td className="p-3">90 Days</td>
                    <td className="p-3">Automated rolling deletion</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              You may request earlier erasure of your academic inquiry records at any time by emailing <a href="mailto:info@cademyx.com" className="font-semibold text-[#182A9A] hover:underline">info@cademyx.com</a>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              7. Data Security Measures
            </h2>
            <p>
              CademyX enforces rigorous organizational, administrative, and technical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of candidate data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li><strong>Transport Security:</strong> 100% of website communications are encrypted in transit using industry-standard Transport Layer Security (TLS 1.3 / SSL).</li>
              <li><strong>Access Control:</strong> Strict role-based permissions ensure that only qualified educational advisors directly assigned to your inquiry can review your submitted academic materials.</li>
              <li><strong>Hosting Infrastructure:</strong> Deployed on resilient cloud edge infrastructure featuring distributed denial-of-service (DDoS) mitigation and continuous uptime monitoring.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              8. Third-Party Sharing &amp; Disclosure
            </h2>
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 not-prose mb-4">
              <p className="text-xs sm:text-sm font-bold flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-700 shrink-0" />
                Explicit Guarantee: CademyX NEVER Sells Your Personal Data
              </p>
              <p className="text-xs text-amber-800 mt-1">
                We do not sell, rent, lease, trade, or broadcast candidate information to external marketing agencies, advertising aggregators, or third-party lead brokers under any circumstances.
              </p>
            </div>
            <p>We share information solely with verified operational service providers under binding confidentiality agreements:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li><strong>Calendly LLC:</strong> To facilitate live 30-minute academic consultation scheduling on <Link href="/schedule-a-consultation" className="text-[#182A9A] font-semibold">/schedule-a-consultation</Link>.</li>
              <li><strong>Transactional Email Services (Resend):</strong> To dispatch automated appointment confirmations and itinerary details.</li>
              <li><strong>Legal Compliance:</strong> If required by valid court order, subpoena, or statutory regulation.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              9. International Data Transfers
            </h2>
            <p>
              As an international academic guidance platform assisting students and scholars globally, candidate information may be processed across secure servers located in multiple jurisdictions. Where data transfers occur across borders, CademyX ensures standard contractual clauses (SCCs) and adequate data protection equivalents are maintained.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              10. Your Candidate Rights
            </h2>
            <p>Regardless of your geographic location, CademyX honors comprehensive privacy rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#26345C]">
              <li><strong>Right to Access:</strong> Request a full copy of the personal and academic inquiry data we hold regarding you.</li>
              <li><strong>Right to Rectification:</strong> Request prompt correction of inaccurate or incomplete contact or academic records.</li>
              <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request the permanent deletion of your inquiry profile from our active systems.</li>
              <li><strong>Right to Restrict Processing:</strong> Request temporary or permanent limitation on how your data is evaluated.</li>
              <li><strong>Right to Data Portability:</strong> Receive your submitted educational information in a structured, commonly used digital format.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke consent for advisory communications at any time without affecting prior lawful processing.</li>
            </ul>
            <p>To exercise any of these rights, email our privacy desk at <a href="mailto:info@cademyx.com" className="font-semibold text-[#182A9A] hover:underline">info@cademyx.com</a>. We respond within 30 days without charge.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              11. Children&apos;s Privacy
            </h2>
            <p>
              CademyX services are intended for prospective undergraduate, postgraduate, doctoral, and executive professional candidates. We do not knowingly solicit or collect personal information from individuals under the age of 16 without parental or guardian guidance. If we become aware that an individual under 16 has submitted personal information without verified consent, we will promptly delete such records.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              12. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              CademyX uses cookies to guarantee platform stability, retain your privacy selections, and measure anonymous website performance. For comprehensive details on the specific cookies used, storage durations, and how to configure your settings, please inspect our dedicated{' '}
              <Link href="/cookie-policy" className="font-bold text-[#182A9A] hover:underline">
                Cookie Policy
              </Link>{' '}
              or adjust your selections on our interactive{' '}
              <Link href="/cookie-preferences" className="font-bold text-[#182A9A] hover:underline">
                Cookie Preferences
              </Link>{' '}
              page.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              13. Third-Party Links &amp; Partner Sites
            </h2>
            <p>
              Our website may contain references or links to accredited partner universities, degree-granting bodies, or external scholarly publications. Clicking on these external links directs you to third-party domains governed by their own independent privacy terms. We recommend reviewing the privacy notices of any external site you visit.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              14. Changes to This Privacy Policy
            </h2>
            <p>
              We periodically review and enhance this policy to align with evolving institutional advisory standards, updated security practices, and statutory developments. Any updates will be published on this page with an updated &ldquo;Effective Date.&rdquo; Material revisions will be prominently highlighted across our platform.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F70] border-b border-[#DCE3FF] pb-2">
              15. Data Protection Officer &amp; Contact Information
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your candidate information is managed, please contact our institutional privacy office:
            </p>
            <div className="not-prose p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] space-y-3 text-sm text-[#101F70]">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#182A9A] shrink-0" />
                <span>
                  <strong>Official Privacy Desk:</strong>{' '}
                  <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-[#182A9A] font-semibold hover:underline">
                    {CONTACT_INFO.primaryEmail}
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#182A9A] shrink-0 mt-0.5" />
                <span>
                  <strong>CademyX Advisory Headquarters:</strong> {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#182A9A] shrink-0" />
                <span>
                  <strong>Advisory Desk Hours:</strong> {CONTACT_INFO.businessHours}
                </span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
