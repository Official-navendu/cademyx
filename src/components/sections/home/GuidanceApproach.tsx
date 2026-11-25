'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Compass,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Calendar,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface AdvisoryFrameworkItem {
  id: string;
  number: string;
  stage: string;
  phaseTag: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: Array<{
    title: string;
    description: string;
  }>;
  icon: LucideIcon;
  ctaText: string;
  ctaHref: string;
}

const advisoryServices: AdvisoryFrameworkItem[] = [
  {
    id: 'serv-profile-eval',
    number: '01',
    stage: 'FRAMEWORK 01',
    phaseTag: 'Diagnostic Phase',
    title: 'Academic Profile Evaluation',
    shortDescription:
      'A thorough review of your educational credentials, coursework history, and professional background to identify suitable academic disciplines.',
    detailedDescription:
      'Our academic advisors perform an in-depth diagnostic review of your previous academic records, standardized coursework, and career milestones. We evaluate your intellectual strengths and identify target institutions and degree curricula where your profile holds the highest competitive positioning.',
    deliverables: [
      {
        title: 'Credential & Coursework Assessment',
        description: 'Systematic audit of past transcripts, academic prerequisites, and subject-matter prerequisites.',
      },
      {
        title: 'Discipline Alignment Review',
        description: 'Analytical matching of your scholastic strengths to undergraduate, postgraduate, or doctoral pathways.',
      },
      {
        title: 'Curricular Pathway Recommendations',
        description: 'Tailored shortlist of target programs with strategic bridging advice to satisfy admissions requirements.',
      },
    ],
    icon: Target,
    ctaText: 'Inquire About Profile Evaluation',
    ctaHref: '/contact?service=Academic%20Profile%20Evaluation',
  },
  {
    id: 'serv-prog-compare',
    number: '02',
    stage: 'FRAMEWORK 02',
    phaseTag: 'Comparative Phase',
    title: 'Degree & Program Comparison',
    shortDescription:
      'Detailed comparison of programme structures, curriculum depth, delivery modes, and duration to help you make an informed choice.',
    detailedDescription:
      'Selecting an academic pathway requires evaluating more than just university names. We compare curriculum depths, faculty research domains, study formats (full-time, cohort-based, or executive), and graduation milestones across multiple institutions to ensure an optimal academic fit.',
    deliverables: [
      {
        title: 'Curriculum & Syllabi Depth Analysis',
        description: 'Side-by-side examination of core subjects, elective specializations, and capstone requirements.',
      },
      {
        title: 'Study Mode & Delivery Evaluation',
        description: 'Objective appraisal of campus-based, cohort-based, executive, and hybrid learning formats.',
      },
      {
        title: 'Prerequisite & Eligibility Benchmarks',
        description: 'Clear breakdown of standardized testing, admissions thresholds, and minimum entry criteria.',
      },
    ],
    icon: Compass,
    ctaText: 'Explore Academic Programs',
    ctaHref: '/programs',
  },
  {
    id: 'serv-app-support',
    number: '03',
    stage: 'FRAMEWORK 03',
    phaseTag: 'Admissions Execution',
    title: 'Application & Documentation Support',
    shortDescription:
      'Clear guidance on assembling required application documents, statements of purpose, transcripts, and submission timelines.',
    detailedDescription:
      'Admissions committees expect rigorous, well-structured dossiers that demonstrate genuine academic intent. We guide candidates through assembling official paperwork, structuring persuasive statements of purpose, requesting faculty letters, and adhering to strict institutional deadlines.',
    deliverables: [
      {
        title: 'Comprehensive Dossier Checklist',
        description: 'Systematic document checklist covering official transcripts, credentials, and verification guidelines.',
      },
      {
        title: 'Statement of Purpose Review',
        description: 'Academic review, structural critique, and clarity coaching for personal statements and essays.',
      },
      {
        title: 'Milestone Application Calendar',
        description: 'Structured admissions calendar with critical submission milestones and review dates.',
      },
    ],
    icon: BookOpen,
    ctaText: 'Inquire About Application Support',
    ctaHref: '/contact?service=Application%20%26%20Documentation%20Support',
  },
  {
    id: 'serv-doc-advisory',
    number: '04',
    stage: 'FRAMEWORK 04',
    phaseTag: 'Scholarly Research',
    title: 'Doctoral & Advanced Research Advisory',
    shortDescription:
      'Dedicated support for prospective doctoral candidates navigating research proposal formulation, faculty alignment, and fellowship pathways.',
    detailedDescription:
      'Pursuing a doctoral degree demands clear alignment with faculty supervisors, defensible research methodologies, and institutional sponsorship. We mentor prospective PhD, DBA, and Honorary Doctorate candidates through topic scoping, literature review structuring, and supervisor correspondence.',
    deliverables: [
      {
        title: 'Research Area & Literature Scoping',
        description: 'Systematic exploration of dissertation questions, scholarly literature gaps, and research design.',
      },
      {
        title: 'Faculty & Supervisor Alignment',
        description: 'Strategic counsel on prospective research mentors, departmental specializations, and faculty outreach.',
      },
      {
        title: 'Doctoral Dossier Preparation',
        description: 'Specialized guidance for research proposals, academic CVs, writing samples, and committee review.',
      },
    ],
    icon: GraduationCap,
    ctaText: 'Explore Doctorate Pathways',
    ctaHref: '/programs?category=Doctorate',
  },
];

export const GuidanceApproach: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const isManualScrollRef = useRef<boolean>(false);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth-scroll desktop right-side panel into view upon selecting a left card
  const handleSelectCard = useCallback((index: number) => {
    setActiveServiceIndex(index);
    isManualScrollRef.current = true;

    const targetPanel = panelRefs.current[index];
    if (targetPanel) {
      targetPanel.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    // Re-enable scroll spy after smooth scroll completes
    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 700);
  }, []);

  // Desktop Scroll-Spy: Tracks which right-side panel is in active reading view
  useEffect(() => {
    // Only run on desktop screens
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const observers: IntersectionObserver[] = [];

    panelRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isManualScrollRef.current) {
              setActiveServiceIndex(index);
            }
          });
        },
        {
          rootMargin: '-20% 0px -40% 0px',
          threshold: [0.2, 0.5],
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const activeService = advisoryServices[activeServiceIndex] || advisoryServices[0];
  const ActiveIcon = activeService.icon;

  return (
    <section
      id="advisory-frameworks"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-[#DCE3FF] overflow-visible"
    >
      {/* Subtle Brand Ambient Background Glows */}
      <div
        className="pointer-events-none absolute top-12 right-12 w-[420px] h-[420px] rounded-full bg-gradient-to-b from-[#F3F5FF] via-[#182A9A]/[0.03] to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 left-12 w-[420px] h-[420px] rounded-full bg-gradient-to-t from-[#F3F5FF] via-[#182A9A]/[0.03] to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Section Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#F3F5FF] border border-[#DCE3FF] text-[#182A9A] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#182A9A]" aria-hidden="true" />
            <span>ADVISORY FRAMEWORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101F70] tracking-tight leading-tight">
            Academic Guidance &amp; Mentorship Services
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#26345C] leading-relaxed font-normal">
            Structured academic guidance designed to help candidates evaluate disciplines, understand
            prerequisites, and plan their educational next steps with clarity.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP TWO-COLUMN INTERACTIVE LAYOUT (Sticky Left, Scroll Right) */}
        {/* ============================================================ */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-start relative">
          {/* Left Column — 4 Sticky Advisory Cards (5 cols) */}
          <div className="col-span-5 sticky top-28 self-start space-y-3.5 z-20">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#6573A8] px-1 mb-1">
              Select Advisory Framework
            </div>

            {advisoryServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeServiceIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`advisory-panel-${service.id}`}
                  onClick={() => handleSelectCard(index)}
                  className={`w-full text-left p-5 xl:p-6 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'bg-[#101F70] text-white border-[#101F70] shadow-xl ring-2 ring-[#182A9A]/30 translate-x-1.5'
                      : 'bg-white text-[#101F70] border-[#DCE3FF] hover:border-[#182A9A]/50 hover:bg-[#F3F5FF]/50 shadow-xs'
                  }`}
                >
                  {/* Left Active Accent Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DCE3FF]" />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon or Framework Number */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isActive
                          ? 'bg-white/10 text-[#DCE3FF] border-white/20'
                          : 'bg-[#F3F5FF] text-[#182A9A] border-[#DCE3FF] group-hover:bg-[#101F70] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isActive
                              ? 'bg-white/15 text-[#DCE3FF]'
                              : 'bg-[#F3F5FF] text-[#182A9A] border border-[#DCE3FF]'
                          }`}
                        >
                          {service.stage}
                        </span>

                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#DCE3FF] uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Active</span>
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-base font-bold leading-snug transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-[#101F70] group-hover:text-[#182A9A]'
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-xs leading-relaxed mt-1 line-clamp-2 ${
                          isActive ? 'text-[#DCE3FF]/90' : 'text-[#26345C]'
                        }`}
                      >
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Sticky Column Footer Reassurance */}
            <div className="pt-2 px-2 text-[11px] text-[#6573A8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#182A9A] shrink-0" />
              <span>Scroll to navigate through frameworks or select a card above.</span>
            </div>
          </div>

          {/* Right Column — 4 Detailed Content Panels (7 cols, Natural Scroll) */}
          <div className="col-span-7 space-y-16 xl:space-y-20">
            {advisoryServices.map((service, index) => {
              const Icon = service.icon;
              const isCurrent = activeServiceIndex === index;

              return (
                <div
                  key={service.id}
                  id={`advisory-panel-${service.id}`}
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className={`p-8 xl:p-10 rounded-3xl bg-white border transition-all duration-300 relative overflow-hidden ${
                    isCurrent
                      ? 'border-[#182A9A] shadow-xl ring-1 ring-[#182A9A]/20'
                      : 'border-[#DCE3FF] shadow-sm hover:border-[#182A9A]/40'
                  }`}
                >
                  {/* Top Gradient Blue Accent Strip */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 transition-opacity duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70] opacity-100'
                        : 'bg-transparent opacity-0'
                    }`}
                  />

                  {/* Header Meta: Framework Tag & Stage */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#F3F5FF] text-[#182A9A] border border-[#DCE3FF]">
                        {service.stage}
                      </span>
                      <span className="text-xs font-semibold text-[#6573A8]">
                        {service.phaseTag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shrink-0 shadow-sm border border-[#182A9A]">
                      <Icon className="w-6 h-6 stroke-[2]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Detailed Description */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#26345C] leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Deliverables / Key Points Container */}
                  <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF]">
                    <div className="text-xs font-bold text-[#182A9A] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#182A9A]" />
                      <span>Key Advisory Deliverables &amp; Outcomes</span>
                    </div>

                    <div className="space-y-3.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-left">
                          <CheckCircle2 className="w-4 h-4 text-[#182A9A] shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm">
                            <strong className="font-bold text-[#101F70] block sm:inline mr-1.5">
                              {deliv.title}:
                            </strong>
                            <span className="text-[#26345C] leading-relaxed">
                              {deliv.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Actions Bar */}
                  <div className="mt-8 pt-6 border-t border-[#DCE3FF] flex flex-wrap items-center justify-between gap-4">
                    <Button
                      href={service.ctaHref}
                      variant="primary"
                      size="md"
                      className="font-bold shadow-md hover:shadow-lg"
                      trailingIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {service.ctaText}
                    </Button>

                    <Link
                      href="/schedule-a-consultation"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101F70] hover:text-[#182A9A] transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-[#182A9A]" />
                      <span>Book 1-on-1 Consultation</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE LAYOUT (Clean Non-Sticky Tabs & Smooth Content Transition) */}
        {/* ============================================================ */}
        <div className="block lg:hidden space-y-6">
          {/* Mobile 4-Card Selector Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {advisoryServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeServiceIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceIndex(index)}
                  className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#101F70] text-white border-[#101F70] shadow-md ring-2 ring-[#182A9A]/30'
                      : 'bg-white text-[#101F70] border-[#DCE3FF] hover:border-[#182A9A]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-white/15 text-[#DCE3FF]'
                          : 'bg-[#F3F5FF] text-[#182A9A] border border-[#DCE3FF]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-white/20 text-[#DCE3FF]'
                          : 'bg-[#F3F5FF] text-[#182A9A]'
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h4
                    className={`text-xs sm:text-sm font-bold leading-tight ${
                      isActive ? 'text-white' : 'text-[#101F70]'
                    }`}
                  >
                    {service.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Detailed Content Panel with Smooth Fade/Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="p-5 sm:p-7 rounded-2xl bg-white border border-[#182A9A] shadow-xl overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F3F5FF] text-[#182A9A] border border-[#DCE3FF]">
                  {activeService.stage} • {activeService.phaseTag}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shrink-0 shadow-xs">
                  <ActiveIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#101F70] tracking-tight">
                {activeService.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-[#26345C] leading-relaxed">
                {activeService.detailedDescription}
              </p>

              {/* Deliverables Box */}
              <div className="mt-4 p-4 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF]">
                <div className="text-[11px] font-bold text-[#182A9A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Key Deliverables</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#26345C]">
                  {activeService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#182A9A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#101F70]">{deliv.title}: </strong>
                        <span>{deliv.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Row */}
              <div className="mt-5 pt-4 border-t border-[#DCE3FF] flex flex-col sm:flex-row gap-3">
                <Button
                  href={activeService.ctaHref}
                  variant="primary"
                  size="md"
                  className="w-full justify-center font-bold shadow-md"
                  trailingIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {activeService.ctaText}
                </Button>

                <Button
                  href="/schedule-a-consultation"
                  variant="outline"
                  size="md"
                  className="w-full justify-center font-semibold border-[#DCE3FF] text-[#101F70]"
                  leadingIcon={<Calendar className="w-4 h-4 text-[#182A9A]" />}
                >
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* Bottom Trust & Diagnostic Review Strip */}
        {/* ============================================================ */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#101F70] text-white border border-[#DCE3FF]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#DCE3FF] border border-white/15 flex items-center justify-center shrink-0 hidden sm:flex shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Begin with an Objective Diagnostic Review
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE3FF]/80 mt-0.5">
                Every advisory engagement is student-centered and calibrated to your authentic academic goals.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Button
              href="/schedule-a-consultation"
              variant="primary"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="font-bold shadow-md w-full sm:w-auto"
            >
              Consult With An Academic Advisor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
