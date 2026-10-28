import React from 'react';
import Link from 'next/link';
import { FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CONTACT_INFO } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Terms & Conditions — CademyX Academic Advisory',
  description:
    'Review the terms and conditions governing the use of CademyX’s educational advisory, consultation scheduling, and academic pathway services.',
  canonical: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
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
              <FileText className="h-3.5 w-3.5" />
              <span>Advisory Service Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-[#BACCE4] leading-relaxed">
              These terms govern your access to and use of CademyX’s digital catalog, consultation scheduling system, and academic advisory services.
            </p>
            <p className="text-xs text-[#7E96B8] mt-4">
              Last Updated: {lastUpdated} • Please review carefully prior to scheduling advisory sessions
            </p>
          </div>
        </div>

        {/* Document Content */}
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:text-[#061B35] prose-headings:font-bold prose-p:text-[#475569] prose-p:leading-relaxed prose-strong:text-[#061B35] space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the CademyX website (the &ldquo;Platform&rdquo;), submitting consultation inquiries, or utilizing any guidance services provided by CademyX. (&ldquo;CademyX,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you acknowledge and agree to be bound by these Terms &amp; Conditions and our Privacy Policy.
            </p>
            <p>
              If you do not agree with any part of these terms, you must discontinue your use of our platform and advisory services immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              2. Nature of Advisory Services
            </h2>
            <p>
              CademyX is an independent educational guidance consultancy. Our mission is to empower candidates with structured learning roadmaps, eligibility evaluations, and strategic academic counseling across undergraduate, graduate, doctoral, and professional certification pathways.
            </p>
            <p>
              <strong>Important Notice:</strong> While CademyX assists candidates in preparing high-quality applications and choosing optimal academic pathways, the ultimate admission, credit transfer, and degree-granting decisions reside solely with the respective colleges, universities, or certifying bodies. CademyX does not guarantee admission into any external institution.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              3. Candidate Responsibilities
            </h2>
            <p>When interacting with CademyX, candidates agree to:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#475569]">
              <li>Provide truthful, accurate, and up-to-date educational history, transcripts, and contact details.</li>
              <li>Refrain from submitting falsified documents, plagiarized personal statements, or fraudulent credentials.</li>
              <li>Respect scheduled consultation times and provide at least 24 hours advance notice for cancellations or rescheduling.</li>
              <li>Maintain professional and courteous communication with all assigned advisors and coordinators.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              4. Intellectual Property Rights
            </h2>
            <p>
              All curriculum matrices, pathway diagrams, advisory materials, website layouts, graphics, branding, and written content published on CademyX are the exclusive intellectual property of CademyX. or licensed appropriately.
            </p>
            <p>
              You may not reproduce, redistribute, republish, or commercially exploit any proprietary materials without prior written consent from CademyX.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              5. Program Catalog &amp; Syllabus Changes
            </h2>
            <p>
              Information regarding university programs, fees, durations, and eligibility prerequisites is compiled from academic partners and authoritative public resources. While CademyX makes every effort to ensure timely updates, academic institutions periodically alter their syllabi, fees, and admission criteria. We encourage candidates to verify final institutional guidelines with their assigned advisor during diagnostic sessions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, CademyX, its directors, employees, and advisors shall not be liable for any indirect, incidental, or consequential damages resulting from institutional rejection, academic disqualification, curriculum changes by third-party universities, or temporary unavailability of our scheduling platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any legal disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Ghaziabad / Uttar Pradesh, India.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#061B35] border-b border-[#E2E8F0] pb-2">
              8. Contacting CademyX
            </h2>
            <p>For questions or clarifications regarding these terms, please contact our legal and administrative desk:</p>
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
