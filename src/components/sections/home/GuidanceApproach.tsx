'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
import { staggerContainer, staggerItem, fadeUp, defaultViewport } from '@/lib/motion';

const serviceIcons: Record<string, LucideIcon> = {
  Target,
  Microscope,
  BookOpen,
  GraduationCap,
};

const phaseLabels = ['PHASE 01', 'PHASE 02', 'PHASE 03', 'PHASE 04'];

export const GuidanceApproach: React.FC = () => {
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
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
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

        {/* 4 Bespoke Service Cards in a 2x2 Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {guidanceServicesData.map((service, index) => {
            const Icon = serviceIcons[service.iconName] || Target;
            const phase = phaseLabels[index] || `PHASE 0${index + 1}`;

            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="group relative flex flex-col p-8 sm:p-9 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] hover:border-[#F4B72F] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle Top Gold Highlight Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Header: Phase Tag + Icon Box */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center shrink-0 border border-white/10 shadow-md group-hover:scale-105 group-hover:bg-[#075AC8] group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#D99519] block mb-1">
                        {phase}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-[#152C45] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Core Deliverables Checklist */}
                <div className="mt-auto pt-6 border-t border-[#EDF2F7]">
                  <p className="text-xs font-bold text-[#061B35] uppercase tracking-wider mb-3">
                    Core Deliverables
                  </p>
                  <div className="space-y-2.5">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#152C45]">
                        <CheckCircle2 className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" />
                        <span className="font-medium">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Affordance Link */}
                  <div className="mt-6 pt-4 border-t border-[#EDF2F7] flex items-center justify-between">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#061B35] hover:text-[#075AC8] transition-colors group/link"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-4 w-4 text-[#F4B72F] transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

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
