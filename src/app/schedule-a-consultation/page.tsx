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
  image: '/assets/og.png',
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
    <main className="min-h-screen bg-[#FDFDFE]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#061B35] text-white pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#075AC8] bg-grain">
        {/* Glow auroras */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#F4B72F]/[0.08] to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-gradient-to-t from-[#075AC8]/[0.2] to-transparent blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#BACCE4]">
              <li>
                <Link href="/" className="hover:text-[#F4B72F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#F4B72F]" />
              </li>
              <li className="text-[#F4B72F] font-semibold" aria-current="page">
                Schedule a Consultation
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#F4B72F]/30 text-[#F4B72F] text-xs font-bold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#F4B72F]" />
                <span>Personalized 1-on-1 Academic Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Schedule Your Dedicated{' '}
                <span className="gold-gradient-text">Academic Consultation</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#BACCE4] leading-relaxed max-w-2xl font-normal">
                Meet directly with seasoned academic mentors to diagnose your scholastic standing,
                explore tailored degree pathways, and construct an actionable roadmap toward your
                highest academic ambitions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-[#BACCE4] border-t border-[#075AC8]/60 pt-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-[#F4B72F]" />
                  <span>30-Minute In-Depth Session</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#F4B72F]" />
                  <span>Confidential &amp; Independent Counsel</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-[#F4B72F]" />
                  <span>Flexible Video Conferencing</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column — Consultation Hero Image (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#075AC8]/60 shadow-2xl bg-[#061B35] group">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Thin gold accent border line */}
                <div className="h-1 bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#075AC8]" />
              </div>

              {/* Decorative accent glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#F4B72F]/20 to-[#075AC8]/20 blur-xl -z-10 opacity-70 pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: Consultation Pillars & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4B72F]">
                  What the Consultation Covers
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061B35] mt-2 tracking-tight">
                  Comprehensive Clarity for Every Stage of Your Education
                </h2>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
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
                      className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-[#F4B72F]/50 transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center shrink-0 border border-[#075AC8] shadow-xs group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#061B35] group-hover:text-[#D99519] transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Advisory Guarantee Box */}
              <div className="p-6 rounded-2xl bg-[#061B35] text-white border border-[#075AC8] space-y-3 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F4B72F]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[#F4B72F]">
                  <ShieldCheck className="w-4 h-4 text-[#F4B72F]" />
                  <span>CademyX Advisory Standard</span>
                </div>
                <p className="text-xs sm:text-sm text-[#BACCE4] leading-relaxed">
                  Our advisors provide transparent, realistic guidance grounded in institutional
                  benchmarks and empirical student outcomes. We uphold absolute scholastic
                  integrity.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B72F] hover:text-white transition-colors"
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
          <div className="mt-20 pt-16 border-t border-[#E2E8F0]">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4B72F]">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061B35] mt-2 tracking-tight">
                Preparing for Your Consultation
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
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
