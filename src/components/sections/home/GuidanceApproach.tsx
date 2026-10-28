'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Target,
  Microscope,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { guidanceServicesData } from '@/data/home';
import { fadeUp, defaultViewport } from '@/lib/motion';

const serviceIcons: Record<string, LucideIcon> = {
  Target,
  Microscope,
  BookOpen,
  GraduationCap,
};

const phaseLabels = ['PHASE 01', 'PHASE 02', 'PHASE 03', 'PHASE 04'];

export const GuidanceApproach: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* Subtle Warm Backdrop Glow */}
      <div
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-b from-[#FEF8E9] via-[#F4B72F]/[0.05] to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gradient-to-t from-[#EBF3FF] via-[#075AC8]/[0.04] to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Section Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#F4B72F]/15 to-[#D99519]/15 border border-[#F4B72F]/35 text-[#D99519]">
            <Sparkles className="h-3 w-3 text-[#F4B72F]" aria-hidden="true" />
            <span>ADVISORY FRAMEWORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#061B35] tracking-tight leading-tight">
            Academic Guidance &amp; Mentorship Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#152C45] leading-relaxed font-normal">
            How CademyX guides scholars: through rigorous diagnostic evaluations, scholarly research
            methodologies, narrative editorial support, and postgraduate strategy.
          </p>
        </div>

        {/* Alternating Zigzag Editorial Rows */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {guidanceServicesData.map((service, index) => {
            const Icon = serviceIcons[service.iconName] || Target;
            const phase = phaseLabels[index] || `PHASE 0${index + 1}`;
            const isEven = index % 2 === 0;

            const rowVariants = {
              hidden: {
                opacity: 0,
                x: shouldReduceMotion ? 0 : isEven ? -24 : 24,
                y: shouldReduceMotion ? 0 : 20,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            };

            return (
              <motion.article
                key={service.id}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="group relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#FAFCFF] border border-[#E2E8F0] hover:border-[#F4B72F]/70 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Top Gold Highlight Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Narrative Block */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-center order-1 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-widest uppercase bg-[#061B35] text-[#F4B72F] border border-white/10 shadow-2xs">
                        {phase}
                      </span>
                      <div className="h-1 w-8 bg-[#F4B72F]/40 rounded-full" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061B35] group-hover:text-[#075AC8] transition-colors tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base sm:text-lg text-[#152C45] leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-[#EDF2F7]">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#061B35] hover:text-[#075AC8] transition-colors group/link"
                      >
                        <span>Inquire About {service.title.split(' ')[0]} Framework</span>
                        <ArrowRight className="h-4 w-4 text-[#F4B72F] transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Deliverables Card Block */}
                  <div
                    className={`lg:col-span-5 order-2 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm group-hover:border-[#F4B72F]/40 transition-colors">
                      <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-[#EDF2F7]">
                        <div className="h-12 w-12 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center shrink-0 border border-white/10 shadow-sm group-hover:scale-105 group-hover:bg-[#075AC8] group-hover:text-white transition-all duration-300">
                          <Icon className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#D99519]">
                            Methodology Standard
                          </p>
                          <h4 className="text-base font-bold text-[#061B35]">
                            Core Deliverables
                          </h4>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {service.deliverables.map((deliv, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-2.5 rounded-lg bg-[#FAFCFF] border border-[#F1F5F9]"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-[#061B35]">
                              {deliv}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Trust & Consultation Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#061B35] text-white border border-[#F4B72F]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F4B72F] border border-white/15 flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Begin with an Objective Diagnostic Review
              </h4>
              <p className="text-xs sm:text-sm text-[#BACCE4] mt-0.5">
                Every advisory engagement is student-centered and calibrated to your authentic goals.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Button
              href="/schedule-a-consultation"
              variant="gold"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="font-bold shadow-md"
            >
              Consult With An Academic Advisor
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
