import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Compass,
  FileCheck2,
  GraduationCap,
  Milestone,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CalendlyScheduler } from '@/components/sections/consultation/CalendlyScheduler';
import { Accordion } from '@/components/ui/Accordion';
import { FAQItem } from '@/types/common';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Schedule a Consultation — 1-on-1 Academic Advisory',
  description:
    'Book a dedicated 1-on-1 academic consultation with CademyX advisors via our live Calendly portal. Get personalized degree selection, profile audits, and admission roadmaps.',
  canonical: '/schedule-a-consultation',
});

const consultationPillars = [
  {
    icon: Compass,
    title: 'Academic Profile Evaluation',
    description:
      'Rigorous audit of your transcripts, standardized coursework, and extracurricular portfolio to isolate genuine scholarly strengths and competitive positioning.',
  },
  {
    icon: GraduationCap,
    title: 'Degree & Program Selection',
    description:
      'Objective guidance filtering through hundreds of undergraduate, postgraduate, or doctoral pathways aligned with your intellectual and career vision.',
  },
  {
    icon: FileCheck2,
    title: 'Research & Admissions Roadmapping',
    description:
      'Formulation of strategic application timelines, personal statement themes, faculty outreach strategies, and fellowship preparation frameworks.',
  },
  {
    icon: Milestone,
    title: 'Step-by-Step Milestone Planning',
    description:
      'Actionable month-by-month execution plans with defined deliverables that replace academic ambiguity with systematic momentum.',
  },
];

const consultationFAQ: FAQItem[] = [
  {
    id: 'consult-prep-1',
    question: 'How long is the consultation session?',
    answer:
      'Advisory sessions run for 30 minutes, allowing ample time for diagnostic review, personalized pathway discussion, and a dedicated Q&A session.',
  },
  {
    id: 'consult-prep-2',
    question: 'What materials should I prepare in advance?',
    answer:
      'Having your latest academic transcripts, current CV or resume, and a short list of target degrees or institutions helps us maximize the value of your session.',
  },
  {
    id: 'consult-prep-3',
    question: 'Are consultation sessions virtual or in-person?',
    answer:
      'Sessions are conducted securely over high-definition video conferencing, accommodating domestic and international scholars across all time zones.',
  },
  {
    id: 'consult-prep-4',
    question: 'Is there any commitment required after the session?',
    answer:
      'None. Our initial consultation is designed to deliver immediate diagnostic value and clarity, with no obligation to enroll in extended mentorship packages.',
  },
];

export default function ScheduleAConsultationPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#101F70] text-white pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#DCE3FF]/20 bg-grain">
        {/* Glow auroras */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#182A9A]/30 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-gradient-to-t from-[#182A9A]/20 to-transparent blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#DCE3FF]/80">
              <li>
                <Link href="/" className="hover:text-[#DCE3FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#DCE3FF]" />
              </li>
              <li className="text-white font-semibold" aria-current="page">
                Schedule a Consultation
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#DCE3FF]/30 text-[#DCE3FF] text-xs font-bold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#DCE3FF]" />
                <span>ACADEMIC ROADMAPPING SESSION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Schedule Your Dedicated 1-on-1 Academic Consultation
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#DCE3FF]/90 leading-relaxed max-w-2xl font-normal">
                Meet directly with experienced academic advisors to evaluate your qualification profile, examine accredited degree options, and design a realistic timeline for your educational journey.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-[#DCE3FF] border-t border-[#DCE3FF]/20 pt-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-[#DCE3FF]" />
                  <span>30-Minute In-Depth Session</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#DCE3FF]" />
                  <span>Confidential &amp; Independent Counsel</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-[#DCE3FF]" />
                  <span>Flexible Video Conferencing</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column — Consultation Hero Image (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#DCE3FF]/30 shadow-2xl bg-[#101F70] group">
                <div className="aspect-[16/10] sm:aspect-[16/11] relative w-full overflow-hidden">
                  <Image
                    src="/assets/images/hero/consultation-hero.jpg"
                    alt="CademyX Senior Academic Advisor in 1-on-1 Consultation Session"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Thin blue accent border line */}
                <div className="h-1 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />
              </div>

              {/* Decorative accent glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#182A9A]/20 to-[#101F70]/20 blur-xl -z-10 opacity-70 pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: Consultation Pillars & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                  What the Consultation Covers
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] mt-2 tracking-tight">
                  Comprehensive Clarity for Every Stage of Your Education
                </h2>
                <p className="mt-3 text-sm text-[#26345C] leading-relaxed">
                  We don’t offer generic sales pitches. Every session is an analytical,
                  student-centric diagnostic designed to provide immediate clarity.
                </p>
              </div>

              {/* 4 Pillars */}
              <div className="space-y-5">
                {consultationPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-5 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] shadow-2xs hover:shadow-md hover:border-[#182A9A]/60 transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shrink-0 border border-[#182A9A] shadow-xs group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-[#26345C] leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Advisory Guarantee Box */}
              <div className="p-6 rounded-2xl bg-[#101F70] text-white border border-[#DCE3FF]/20 space-y-3 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#182A9A]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[#DCE3FF]">
                  <ShieldCheck className="w-4 h-4 text-[#DCE3FF]" />
                  <span>CademyX Advisory Standard</span>
                </div>
                <p className="text-xs sm:text-sm text-[#DCE3FF]/90 leading-relaxed">
                  Our advisors provide transparent, realistic guidance grounded in institutional
                  benchmarks and empirical student outcomes. We uphold absolute scholastic
                  integrity.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DCE3FF] hover:text-white transition-colors"
                  >
                    <span>Read Our Mentorship Philosophy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Scheduler Component (7 cols) */}
            <div className="lg:col-span-7">
              <CalendlyScheduler />
            </div>
          </div>

          {/* Consultation FAQ Section */}
          <div className="mt-20 pt-16 border-t border-[#DCE3FF]">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] mt-2 tracking-tight">
                Preparing for Your Consultation
              </h2>
              <p className="mt-2 text-sm text-[#26345C]">
                Everything you need to know about our 1-on-1 academic advisory sessions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion items={consultationFAQ} allowMultiple />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
