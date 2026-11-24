'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  GraduationCap,
  Briefcase,
  Users,
  Compass,
  FileText,
  Layers,
  Award,
} from 'lucide-react';
import { Program } from '@/types/program';
import { FAQItem } from '@/types/common';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { EnquiryModal } from '@/components/common/EnquiryModal';
import { getRelatedPrograms } from '@/data/programs';
import { ProgramDetailHero } from './ProgramDetailHero';
import {
  isFormSubmittedInSession,
  isProgramPopupDismissed,
  dismissProgramPopup,
  isAnyModalActive,
} from '@/lib/enquirySession';

export interface ProgramDetailsProps {
  program: Program;
}

export const ProgramDetails: React.FC<ProgramDetailsProps> = ({ program }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const relatedPrograms = getRelatedPrograms(program.slug, 3);

  const handleCloseEnquiry = useCallback(() => {
    setIsEnquiryOpen(false);
    dismissProgramPopup(program.slug);
  }, [program.slug]);

  // 20-Second Program-Specific Popup Timer
  useEffect(() => {
    // 1. Check session suppression states
    if (isFormSubmittedInSession() || isProgramPopupDismissed(program.slug)) {
      return;
    }

    // 2. Listen for form submissions anywhere on the website to cancel timer
    const handleFormSubmitted = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsEnquiryOpen(false);
    };

    window.addEventListener('cademyx:form-submitted', handleFormSubmitted);

    // 3. Start 20-second timer
    timerRef.current = setTimeout(() => {
      // Re-verify conditions when timer fires
      if (isFormSubmittedInSession() || isProgramPopupDismissed(program.slug)) {
        return;
      }

      // Do not interrupt user if another modal is already active
      if (isAnyModalActive()) {
        return;
      }

      setIsEnquiryOpen(true);
    }, 20000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener('cademyx:form-submitted', handleFormSubmitted);
    };
  }, [program.slug]);

  // Category-specific profile audience & considerations
  const getAudienceContent = () => {
    switch (program.category) {
      case 'Doctorate':
        return {
          audienceTitle: 'Scholars, University Faculty & Senior R&D Researchers',
          audienceDescription: `The ${program.title} pathway caters to dedicated scholars committed to original scholarly research, thesis publication, and theoretical breakthrough in ${program.discipline || 'the field'}.`,
          idealCandidates: [
            'Master’s degree holders with a verified aptitude for rigorous scholarly investigation',
            'University lecturers and faculty aiming for academic tenure and research funding',
            'Corporate researchers, policy strategists, and laboratory investigators',
            'Scholars aiming to produce peer-reviewed publications and methodological contributions',
          ],
          considerations: [
            'Doctoral work requires sustained, self-directed commitment spanning multiple academic years.',
            'Securing a qualified faculty research supervisor and formulating an original thesis question are essential.',
            'Institutional residency, coursework examinations, and ethics clearance must precede final dissertation submission.',
          ],
        };
      case 'Certifications':
        return {
          audienceTitle: 'Practitioners, Technologists & Skill-Focused Specialists',
          audienceDescription: `This ${program.title} certification program is designed for practitioners seeking verifiable technical competencies, hands-on tool mastery, and accelerated portfolio readiness in ${program.discipline || 'applied technologies'}.`,
          idealCandidates: [
            'Working developers, analysts, and managers seeking immediate skill upgrades',
            'Professionals transitioning into new technical or operational functions',
            'Practitioners who prioritize hands-on sandbox labs over multi-year academic degrees',
            'Candidates preparing for high-demand industry assessments and portfolio defense',
          ],
          considerations: [
            'Certifications are highly intensive, hands-on, and project-evaluated rather than examination-heavy.',
            'Students must dedicate regular weekly laboratory hours for code implementation and project review.',
            'Industry credentials complement rather than substitute for foundational degree requirements.',
          ],
        };
      default:
        return {
          audienceTitle: `Aspirants & Scholars in ${program.category}`,
          audienceDescription: `This ${program.title} curriculum is designed for ambitious candidates seeking accredited academic credentials, theoretical rigor, and practical industry expertise in ${program.discipline || program.category}.`,
          idealCandidates: [
            `Candidates seeking accredited university credentials in ${program.category}`,
            'Scholars aiming to combine foundational principles with industry-aligned capstone projects',
            'Learners looking for structured academic counseling, mentorship, and career pathway planning',
            'Aspirants preparing for competitive national examinations and global credential alignment',
          ],
          considerations: [
            'Curricula emphasize both conceptual fundamentals and applied problem-solving.',
            'Maintaining strong scholastic standing across core prerequisites ensures eligibility for higher academic or leadership roles.',
            'Students should balance academic coursework with hands-on technical and case-study seminars.',
          ],
        };
    }
  };

  const audience = getAudienceContent();

  // Program-specific FAQs based on verified metadata
  const programFaqs: FAQItem[] = [
    {
      id: `${program.slug}-faq-eligibility`,
      question: `What are the eligibility requirements for the ${program.title} track?`,
      answer: program.eligibility
        ? `${program.eligibility}. CademyX advisors perform a preliminary diagnostic review of prior transcripts, prerequisite subject marks, and extracurricular portfolios to evaluate applicant positioning.`
        : `Applicants must satisfy recognized academic qualifications for ${program.category} tracks in ${program.discipline || 'this field'}. Our advisors review candidate transcripts during scheduled diagnostic sessions.`,
    },
    {
      id: `${program.slug}-faq-duration`,
      question: `What is the duration, format, and study pacing for ${program.title}?`,
      answer: `This track is offered as a ${program.format || 'Structured Academic Track'} with an estimated duration of ${program.duration || 'standard curriculum pacing'}. Pacing is designed to accommodate scholastic benchmarks with scheduled faculty feedback milestones.`,
    },
    {
      id: `${program.slug}-faq-curriculum`,
      question: `What core topics and practical skills are covered in ${program.title}?`,
      answer:
        program.curriculumHighlights && program.curriculumHighlights.length > 0
          ? `Key subjects include ${program.curriculumHighlights.join(', ')}. Students engage in applied semester practicums, laboratory assignments, and capstone project defense.`
          : `The syllabus covers fundamental theories, applied methodologies, and contemporary case studies in ${program.discipline || program.title}, culminating in an evaluative project.`,
    },
    {
      id: `${program.slug}-faq-advisory`,
      question: `How does CademyX assist prospective scholars during admission for ${program.title}?`,
      answer:
        'CademyX provides independent educational guidance: we assist with university program benchmarking, entrance prerequisite planning, statement of purpose formulation, and timeline milestone management with zero sales pressure.',
    },
    {
      id: `${program.slug}-faq-career`,
      question: `What are the typical academic and career progression pathways after completing ${program.title}?`,
      answer: `Graduates commonly pursue specialized roles in ${program.discipline || 'industry'}, advance into higher ${program.category === 'Bachelor' ? 'Master’s or MBA' : program.category === 'Masters' ? 'Doctoral (PhD) research or senior leadership' : 'academic tenure and R&D'} tracks, or lead functional initiatives within competitive organizations.`,
    },
  ];

  // 4-Step Application & Advisory Framework
  const advisorySteps = [
    {
      step: '01',
      title: 'Scholastic Profile Audit',
      description:
        'Detailed evaluation of your past transcripts, coursework depth, standardized scores, and academic strengths.',
    },
    {
      step: '02',
      title: 'Curriculum & Track Alignment',
      description:
        'Filtering program syllabi, institutional requirements, and study formats that precisely match your target career ambitions.',
    },
    {
      step: '03',
      title: 'Application Dossier Advisory',
      description:
        'Strategic review of your statement of purpose, research proposal, curriculum vitae, and recommendation frameworks.',
    },
    {
      step: '04',
      title: 'Milestone Execution & Support',
      description:
        'Month-by-month deadline tracking, interview simulation, and enrollment readiness under the CademyX Academic Standard.',
    },
  ];

  return (
    <article className="relative bg-white">
      {/* 1. Dedicated Program Detail Hero with popup enquiry trigger */}
      <ProgramDetailHero
        program={program}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* 2. Main Body Content */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white bg-grain">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sticky Sidebar (4 cols on lg, ordered 1st on desktop, 2nd on mobile) */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 max-h-[calc(100vh-6.5rem)] lg:overflow-y-auto no-scrollbar space-y-6">
                {/* Factsheet Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DCE3FF] shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />

                  <h3 className="text-base sm:text-lg font-bold text-[#101F70] pb-3 border-b border-[#DCE3FF] mb-4 flex items-center justify-between">
                    <span>Program Factsheet</span>
                    <Sparkles className="w-4 h-4 text-[#182A9A]" />
                  </h3>

                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold text-[#6573A8] uppercase tracking-wider">
                        Academic Category
                      </dt>
                      <dd className="font-bold text-[#101F70] mt-0.5">{program.category} Programs</dd>
                    </div>

                    {program.discipline && (
                      <div>
                        <dt className="text-xs font-semibold text-[#6573A8] uppercase tracking-wider">
                          Discipline / Domain
                        </dt>
                        <dd className="font-bold text-[#101F70] mt-0.5">{program.discipline}</dd>
                      </div>
                    )}

                    {program.format && (
                      <div>
                        <dt className="text-xs font-semibold text-[#6573A8] uppercase tracking-wider">
                          Study Format
                        </dt>
                        <dd className="font-bold text-[#101F70] mt-0.5">{program.format}</dd>
                      </div>
                    )}

                    {program.duration && (
                      <div>
                        <dt className="text-xs font-semibold text-[#6573A8] uppercase tracking-wider">
                          Duration &amp; Pacing
                        </dt>
                        <dd className="font-bold text-[#101F70] mt-0.5">{program.duration}</dd>
                      </div>
                    )}

                    {program.eligibility && (
                      <div>
                        <dt className="text-xs font-semibold text-[#6573A8] uppercase tracking-wider">
                          Eligibility Criteria
                        </dt>
                        <dd className="font-medium text-[#26345C] mt-0.5 text-xs leading-relaxed">
                          {program.eligibility}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <div className="mt-6 pt-5 border-t border-[#DCE3FF] space-y-2.5">
                    <Button
                      type="button"
                      onClick={() => setIsEnquiryOpen(true)}
                      variant="primary"
                      size="md"
                      className="w-full font-bold shadow-md cursor-pointer justify-center"
                    >
                      Inquire About This Track
                    </Button>

                    <Button
                      href="/schedule-a-consultation"
                      variant="outline"
                      size="md"
                      className="w-full font-bold text-[#101F70] border-[#DCE3FF] hover:border-[#182A9A] justify-center"
                    >
                      Schedule Advisory Call
                    </Button>
                  </div>
                </div>

                {/* Mentorship Inclusion Card */}
                <div className="p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] text-sm shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#101F70] font-bold">
                    <ShieldCheck className="h-4 w-4 text-[#182A9A]" />
                    <span className="text-sm font-bold">CademyX Guidance Inclusion</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#26345C]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#182A9A] font-bold">•</span>
                      <span>Transcript &amp; entrance diagnostic evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#182A9A] font-bold">•</span>
                      <span>University specialization &amp; curriculum alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#182A9A] font-bold">•</span>
                      <span>Statement of Purpose &amp; dossier strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#182A9A] font-bold">•</span>
                      <span>1-on-1 consultation and milestone support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content Column (8 cols on lg, ordered 2nd on desktop, 1st on mobile) */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-12 sm:space-y-16">
              {/* Section 1: Program Overview */}
              <section id="program-overview" aria-labelledby="program-overview-heading">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Compass className="w-4 h-4 text-[#182A9A]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                    Scholastic Profile &amp; Focus
                  </span>
                </div>
                <h2
                  id="program-overview-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-4"
                >
                  Program Overview
                </h2>
                <div className="prose prose-slate max-w-none text-base sm:text-lg text-[#26345C] leading-relaxed space-y-4">
                  <p>{program.description}</p>
                  <p className="text-sm sm:text-base text-[#6573A8]">
                    As higher education evolves rapidly, choosing a specialized track in{' '}
                    <strong className="text-[#101F70] font-semibold">
                      {program.discipline || program.title}
                    </strong>{' '}
                    requires evaluating curriculum rigor, practical laboratory immersion, and institutional credibility. CademyX provides structured guidance to help scholars navigate admission requirements, academic milestones, and career trajectory mapping.
                  </p>
                </div>
              </section>

              {/* Section 2: Who Should Consider This Program? */}
              <section aria-labelledby="target-scholars-heading" className="pt-2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[#182A9A]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                    Candidate Suitability
                  </span>
                </div>
                <h2
                  id="target-scholars-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-3"
                >
                  Who Should Consider This Program?
                </h2>
                <p className="text-sm sm:text-base text-[#26345C] mb-5 leading-relaxed">
                  {audience.audienceDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {audience.idealCandidates.map((candidate, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF] flex items-start gap-3 hover:border-[#182A9A]/60 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#182A9A] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#101F70] leading-snug">
                        {candidate}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Learning Objectives & Expected Outcomes */}
              {program.learningOutcomes && program.learningOutcomes.length > 0 && (
                <section aria-labelledby="learning-outcomes-heading" className="pt-2">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-[#182A9A]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                      Core Competencies
                    </span>
                  </div>
                  <h2
                    id="learning-outcomes-heading"
                    className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-4"
                  >
                    Learning Objectives &amp; Expected Outcomes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {program.learningOutcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F3F5FF] text-[#182A9A] flex items-center justify-center shrink-0 border border-[#DCE3FF] group-hover:scale-105 transition-transform">
                          <CheckCircle2 className="h-4 w-4 text-[#182A9A]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#26345C] leading-relaxed font-medium">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 4: Curriculum, Subjects & Learning Areas */}
              {program.curriculumHighlights && program.curriculumHighlights.length > 0 && (
                <section aria-labelledby="curriculum-heading" className="pt-2">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-[#182A9A]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                      Syllabus Framework
                    </span>
                  </div>
                  <h2
                    id="curriculum-heading"
                    className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-4"
                  >
                    Curriculum, Subjects &amp; Learning Areas
                  </h2>
                  <div className="space-y-3">
                    {program.curriculumHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#DCE3FF] hover:border-[#182A9A]/60 transition-colors shadow-2xs"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#101F70] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-[#101F70]">
                            {highlight}
                          </p>
                          <p className="text-xs text-[#6573A8] mt-0.5">
                            Structured subject module incorporating seminars, laboratory defense, and independent analytical deliverables.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 5: Structured Application & Advisory Process */}
              <section aria-labelledby="advisory-process-heading" className="pt-2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-[#182A9A]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                    CademyX Roadmap
                  </span>
                </div>
                <h2
                  id="advisory-process-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-2"
                >
                  Application &amp; Admission Advisory Process
                </h2>
                <p className="text-sm text-[#26345C] mb-6">
                  Our structured 4-phase advisory methodology ensures that your candidacy is strategically planned and competitively positioned.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advisorySteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-2xl bg-white border border-[#DCE3FF] shadow-xs relative overflow-hidden group hover:border-[#182A9A] transition-all"
                    >
                      <div className="text-2xl font-black text-[#182A9A]/30 group-hover:text-[#182A9A] transition-colors mb-1 font-mono">
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold text-[#101F70] mb-1.5">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Potential Career Pathways & Progression */}
              <section aria-labelledby="career-progression-heading" className="pt-2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-[#182A9A]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                    Growth Horizons
                  </span>
                </div>
                <h2
                  id="career-progression-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-4"
                >
                  Potential Career Pathways &amp; Progression Opportunities
                </h2>
                <div className="p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] space-y-4">
                  <p className="text-sm sm:text-base text-[#26345C] leading-relaxed">
                    Completing a program in <strong className="text-[#101F70] font-semibold">{program.title}</strong> unlocks both operational industry trajectories and higher academic qualifications. Rather than relying on speculative placement guarantees, scholars achieve long-term mobility through durable discipline mastery.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-[#DCE3FF] shadow-2xs">
                      <strong className="block text-sm font-bold text-[#101F70] mb-1">
                        Domain Leadership
                      </strong>
                      <span className="text-[#6573A8]">
                        Specialized analyst, developer, or functional managerial appointments.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#DCE3FF] shadow-2xs">
                      <strong className="block text-sm font-bold text-[#101F70] mb-1">
                        Scholarly Advancement
                      </strong>
                      <span className="text-[#6573A8]">
                        Eligibility for advanced postgraduate or doctoral research programs.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#DCE3FF] shadow-2xs">
                      <strong className="block text-sm font-bold text-[#101F70] mb-1">
                        Consulting &amp; Enterprise
                      </strong>
                      <span className="text-[#6573A8]">
                        Advisory stewardship, startup innovation, and executive operations.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Program Benefits & Strategic Considerations */}
              <section aria-labelledby="strategic-considerations-heading" className="pt-2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[#182A9A]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                    Scholastic Evaluation
                  </span>
                </div>
                <h2
                  id="strategic-considerations-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-4"
                >
                  Program Benefits &amp; Important Considerations
                </h2>
                <div className="p-6 rounded-2xl bg-[#101F70] text-white border border-[#DCE3FF]/20 relative overflow-hidden space-y-4">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#182A9A]/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DCE3FF] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CademyX Transparency Standard</span>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#DCE3FF]/90">
                    {audience.considerations.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#DCE3FF] font-bold mt-0.5">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DCE3FF] font-bold mt-0.5">•</span>
                      <span>
                        CademyX provides independent mentorship; final admission decisions, credit conferral, and degree awards rest exclusively with authorized partner universities.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Frequently Asked Questions Specific to this Program */}
              <section aria-labelledby="program-faqs-heading" className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-5 h-5 text-[#182A9A]" />
                  <span className="text-xs font-bold text-[#182A9A] uppercase tracking-wider">
                    Program-Specific Inquiries
                  </span>
                </div>
                <h2
                  id="program-faqs-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-6"
                >
                  Frequently Asked Questions
                </h2>
                <Accordion items={programFaqs} allowMultiple />
              </section>

              {/* Section 9: Contextual Consultation CTA Banner */}
              <section
                aria-label="Academic consultation banner"
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#101F70] via-[#0D1959] to-[#101F70] text-white border border-[#DCE3FF]/20 shadow-xl relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#182A9A]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl space-y-4">
                  <span className="px-3 py-1 rounded-full bg-[#182A9A]/30 border border-[#DCE3FF]/30 text-[#DCE3FF] text-xs font-bold uppercase tracking-wider inline-block">
                    1-on-1 Academic Advisory
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Discuss Your {program.title} Pathway with a Mentor
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DCE3FF]/90 leading-relaxed">
                    Have questions regarding entrance eligibility, prerequisite transcripts, or syllabus modules? Book a 30-minute diagnostic session with our academic steering team.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Button
                      href="/schedule-a-consultation"
                      variant="primary"
                      size="lg"
                      className="font-bold shadow-lg"
                      trailingIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Book 30-Min Consultation
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setIsEnquiryOpen(true)}
                      variant="outline-light"
                      size="lg"
                      className="font-bold border-white/30 text-white hover:border-[#DCE3FF]"
                    >
                      Direct Program Inquiry
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Section 11: Related Programs with Internal Links */}
          {relatedPrograms.length > 0 && (
            <div className="mt-20 pt-16 border-t border-[#DCE3FF]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#182A9A]">
                    COMPLEMENTARY PATHWAYS
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight">
                    Related Academic Programs
                  </h2>
                </div>
                <Link
                  href="/programs"
                  className="text-sm font-bold text-[#182A9A] hover:text-[#101F70] hidden sm:inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>View Complete Catalogue</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#182A9A]" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPrograms.map((related) => (
                  <ProgramCard key={related.id} program={related} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>

      {/* Contextual Modal Preselected with this Program */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialProgramSlug={program.slug}
        initialCategory={program.category}
        title={`Interested in ${program.title}?`}
        subtitle="Have questions about eligibility, program details or your next academic step? Send us your enquiry."
        eyebrow={`${program.category} Admissions Desk`}
        source={`Program Detail Popup — ${program.title} (${program.slug})`}
      />
    </article>
  );
};
