'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getProgramBySlug, programs } from '@/data/programs';
import { Program } from '@/types/program';
import { staggerContainer, staggerItem, fadeUp, defaultViewport } from '@/lib/motion';

export const FeaturedPrograms: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Exactly 3 featured Doctorate tracks in approved sequence:
  // 1. Honorary Doctorate — PRESTIGIOUS
  // 2. PhD Admission Program — POPULAR
  // 3. DBA Program — EXECUTIVE
  const featuredPrograms: Program[] = [
    getProgramBySlug('honorary-doctorate'),
    getProgramBySlug('phd-admission-program'),
    getProgramBySlug('dba-program'),
  ].filter(Boolean) as Program[];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#101F70] border-y border-white/10 text-white overflow-hidden">
      {/* Restrained Subsurface Depth Accents */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#182A9A]/20 via-[#DCE3FF]/[0.05] to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#182A9A]/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Section Heading Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#182A9A]/30 border border-[#DCE3FF]/30 text-[#DCE3FF]">
              <Sparkles className="h-3.5 w-3.5 text-[#DCE3FF]" aria-hidden="true" />
              <span>ACADEMIC CURRICULA</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Featured Academic Programs
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-[#DCE3FF]/90 leading-relaxed font-normal">
              An authoritative showcase of terminal research doctorates, executive doctoral pathways, and prestigious academic honors.
            </p>
          </div>

          {/* Quick Action Button */}
          <div className="shrink-0">
            <Button
              href="/programs"
              variant="outline-light"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="border-white/20 text-white hover:border-[#DCE3FF] hover:bg-white/10 font-bold shadow-sm"
            >
              Explore All Programs
            </Button>
          </div>
        </div>

        {/* 3-Card Academic Grid */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {featuredPrograms.map((program) => (
            <motion.article
              key={program.id}
              variants={prefersReducedMotion ? undefined : staggerItem}
              className="group flex flex-col h-full bg-white rounded-2xl border border-white/10 hover:border-[#182A9A]/60 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              {/* 1. Program Image Header with Distinct Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                />
                {program.badge && (
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-extrabold tracking-wider uppercase bg-[#101F70]/90 text-white backdrop-blur-md border border-white/20 shadow-md">
                      {program.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* 2. Structured Content Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
                <div>
                  {/* Category Tag & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#F3F5FF] text-[#101F70] border border-[#DCE3FF]">
                      {program.category}
                    </span>

                    {program.duration && (
                      <span className="text-xs font-semibold text-[#6573A8] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#6573A8]" />
                        <span>{program.duration}</span>
                      </span>
                    )}
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors leading-snug">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="focus-visible:outline-2 focus-visible:outline-[#182A9A] rounded-xs"
                    >
                      {program.title}
                    </Link>
                  </h3>

                  {/* Program Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#26345C] leading-relaxed line-clamp-3 font-normal">
                    {program.description}
                  </p>

                  {/* Highlights Pills */}
                  {program.highlights && program.highlights.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-[#DCE3FF]/40 flex flex-wrap gap-1.5">
                      {program.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-[#26345C] bg-[#F3F5FF] border border-[#DCE3FF] px-2.5 py-0.5 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Actions: View Program Details + Inquire */}
                <div className="mt-6 pt-4 border-t border-[#DCE3FF]/40 flex items-center justify-between gap-3">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors focus-visible:outline-2 focus-visible:outline-[#182A9A] rounded-xs"
                  >
                    <span>View Program Details</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#182A9A]" />
                  </Link>

                  <Link
                    href={`/contact?program=${program.slug}`}
                    className="text-xs font-bold text-[#182A9A] bg-[#F3F5FF] hover:bg-[#182A9A] hover:text-white border border-[#DCE3FF] px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                    title={`Inquire about ${program.title}`}
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Bespoke Catalog Discovery Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D1959] via-[#101F70] to-[#0D1959] border border-[#DCE3FF]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-[#DCE3FF] uppercase tracking-wider block mb-1">
              Full Program Directory
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Looking for a tailored curriculum or specific specialization?
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-[#DCE3FF]/90">
              Explore our full catalog across 15 subject disciplines, doctorate pathways, and professional credentials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="/programs"
              variant="primary"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="font-bold shadow-md bg-[#182A9A] hover:bg-[#101F70] text-white"
            >
              Browse All {programs.length} Programs
            </Button>
            <Button
              href="/schedule-a-consultation"
              variant="outline-light"
              size="md"
              className="border-white/20 text-white hover:border-[#DCE3FF] hover:bg-white/10"
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
