import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CONTACT_INFO } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Privacy Policy — CademyX Academic Advisory',
  description:
    'Read CademyX’s official privacy policy. Learn how we safeguard candidate information, handle academic inquiry data, and protect student confidentiality.',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 28, 2026';

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 lg:py-20">
      <Container size="default">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#075AC8] hover:text-[#061B35] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061B35] via-[#0A2244] to-[#152C45] text-white overflow-hidden mb-12 shadow-xl border border-[#075AC8]/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B72F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B72F]/15 border border-[#F4B72F]/30 text-[#F4B72F] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Academic Data Integrity</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-[#BACCE4] leading-relaxed">
              At CademyX, we hold candidate confidentiality and academic privacy to the highest standard. This policy outlines how your personal and educational information is collected, safeguarded, and utilized.
            </p>
            <p className="text-xs text-[#7E96B8] mt-4">
              Effective Date: {lastUpdated} • Applicable to all prospective and enrolled candidates
            </p>
          </div>
        </div>

        {/* Document Content */}
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-[#061B35] prose-headings:font-bold prose-p:text-[#475569] prose-p:leading-relaxed prose-strong:text-[#061B35] space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              1. Overview &amp; Commitment
            </h2>
            <p>
              CademyX (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates educational guidance, admission pathways advisory, and academic consulting services. We believe that every student, researcher, and working professional has a fundamental right to the security and privacy of their academic aspirations, records, and contact details.
            </p>
            <p>
              We do not sell, rent, trade, or broadcast candidate information to external advertisers or unsolicited third-party lead brokers. All information shared with us is used exclusively to facilitate academic advisory, program evaluation, and consultation requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              2. Information We Collect
            </h2>
            <p>We collect information that you knowingly and voluntarily provide when you interact with our website, request a consultation, submit an inquiry form, or communicate with our advisory office:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#475569]">
              <li>
                <strong>Contact Identifiers:</strong> Your full name, email address, telephone / WhatsApp number.
              </li>
              <li>
                <strong>Academic Interests:</strong> Selected programs of interest (Bachelor, Master, Doctorate, or Certification tracks), educational history, target institutions, and intended career objectives.
              </li>
              <li>
                <strong>Advisory Notes:</strong> Any specific questions, eligibility criteria, or contextual notes submitted via our inquiry dialogs.
              </li>
              <li>
                <strong>Technical Diagnostics:</strong> Standard web analytics (such as browser type, general geographical region, and pages visited) collected in aggregated form to ensure platform security and performance.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              3. How We Use Your Information
            </h2>
            <p>Your information is used strictly for legitimate educational advisory purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#475569]">
              <li>Scheduling, coordinating, and conducting requested academic consultations.</li>
              <li>Reviewing your educational background against institutional admission prerequisites.</li>
              <li>Providing customized syllabus outlines, course schedules, and curriculum recommendations.</li>
              <li>Dispatching administrative confirmation emails, appointment reminders, and advisory replies.</li>
              <li>Maintaining operational compliance and safeguarding against fraudulent submissions.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              4. Communications &amp; Consent
            </h2>
            <p>
              When you submit a consultation form or reach out through our verified communication widgets (including email, telephone, or WhatsApp), you consent to receiving direct communications from our academic advisory team regarding your inquiry.
            </p>
            <p>
              You may opt out of further communications at any time by replying &ldquo;STOP&rdquo; on WhatsApp or by contacting us via email at{' '}
              <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-[#075AC8] font-semibold hover:underline">
                {CONTACT_INFO.primaryEmail}
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              5. Data Protection &amp; Retention
            </h2>
            <p>
              CademyX implements robust technical and organizational safeguards, including SSL/TLS encryption for all data in transit, restricted role-based internal access, and secure email server infrastructure. Inquiry records are retained only for the duration necessary to satisfy your academic consultation lifecycle or comply with legal requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              6. Candidate Rights
            </h2>
            <p>Depending on your jurisdiction, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#475569]">
              <li>Request a copy of the personal information we maintain concerning your inquiries.</li>
              <li>Request correction or rectification of any incomplete or inaccurate data.</li>
              <li>Request the complete deletion or erasure of your consultation records from our active repositories.</li>
              <li>Withdraw your consent to ongoing advisory communications.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              7. Contact Our Advisory Center
            </h2>
            <p>
              For privacy-related inquiries, data requests, or academic guidance verification, please reach out directly to our dedicated advisory center:
            </p>
            <div className="not-prose p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 text-sm text-[#061B35]">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" />
                <span>
                  <strong>CademyX Advisory Center:</strong> {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#F4B72F] shrink-0" />
                <span>
                  <strong>Official Emails:</strong>{' '}
                  <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-[#075AC8] hover:underline">
                    {CONTACT_INFO.primaryEmail}
                  </a>{' '}
                  |{' '}
                  <a href={`mailto:${CONTACT_INFO.secondaryEmail}`} className="text-[#075AC8] hover:underline">
                    {CONTACT_INFO.secondaryEmail}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#F4B72F] shrink-0" />
                <span>
                  <strong>Advisory Desk:</strong>{' '}
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-[#075AC8] hover:underline">
                    {CONTACT_INFO.phone}
                  </a>{' '}
                  ({CONTACT_INFO.businessHours})
                </span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
