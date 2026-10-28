'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Award, Compass, ArrowUpRight, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { programs, getProgramBySlug } from '@/data/programs';
import { Program, ProgramCategory } from '@/types/program';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem, fadeUp, defaultViewport } from '@/lib/motion';

type FilterTab = 'All' | ProgramCategory;

export const FeaturedPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const prefersReducedMotion = useReducedMotion();

  // Curated 6 flagship programs across all four academic categories
  const curatedList: (Program | undefined)[] = [
    getProgramBySlug('phd-admission-program'),
    getProgramBySlug('b-tech-cse'),
    getProgramBySlug('mba-ai-automation') || getProgramBySlug('mba'),
    getProgramBySlug('master-data-science'),
    getProgramBySlug('dba-program') || getProgramBySlug('honorary-doctorate'),
    getProgramBySlug('full-stack-development'),
  ];

  const featuredPrograms = curatedList.filter(Boolean) as Program[];

  // Filter based on active tab
  const displayedPrograms =
    activeTab === 'All'
      ? featuredPrograms
      : programs.filter((p) => p.category === activeTab).slice(0, 6);

  const filterTabs: { label: string; value: FilterTab; icon: React.ElementType }[] = [
    { label: 'All Disciplines', value: 'All', icon: Compass },
    { label: 'Doctorate', value: 'Doctorate', icon: GraduationCap },
    { label: 'Masters', value: 'Masters', icon: Sparkles },
    { label: 'Bachelor', value: 'Bachelor', icon: BookOpen },
    { label: 'Certifications', value: 'Certifications', icon: Award },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#061B35] border-y border-white/10 text-white overflow-hidden">
      {/* Restrained Subsurface Depth Accents */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#075AC8]/15 via-[#F4B72F]/[0.05] to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#075AC8]/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Section Heading Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#F4B72F]/15 border border-[#F4B72F]/35 text-[#F4B72F]">
              <Sparkles className="h-3.5 w-3.5 text-[#F4B72F]" aria-hidden="true" />
              <span>ACADEMIC CURRICULA</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Featured Academic Programs
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-[#BACCE4] leading-relaxed font-normal">
              An authoritative preview of accredited Bachelor degrees, specialized Master’s tracks, doctoral research fellowships, and industry credentials.
            </p>
          </div>

          {/* Quick Action Button */}
          <div className="shrink-0">
            <Button
              href="/programs"
              variant="outline"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="border-white/20 text-white hover:border-[#F4B72F] hover:bg-white/10 font-bold shadow-sm"
            >
              Explore All {programs.length} Programs
            </Button>
          </div>
        </div>

        {/* Category Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border',
                  isActive
                    ? 'bg-[#F4B72F] text-[#061B35] border-[#F4B72F] shadow-md shadow-[#F4B72F]/20'
                    : 'bg-[#081F3D] text-[#BACCE4] border-white/10 hover:border-white/30 hover:text-white'
                )}
              >
                <Icon className={cn('w-4 h-4', isActive ? 'text-[#061B35]' : 'text-[#F4B72F]')} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6-Card Academic Grid (Light surfaces with verified contrast) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
          >
            {displayedPrograms.map((program) => (
              <motion.article
                key={program.id}
                variants={prefersReducedMotion ? undefined : staggerItem}
                className="group flex flex-col h-full bg-white rounded-2xl border border-white/10 hover:border-[#F4B72F]/80 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* 1. Program Image Header - 100% Clean Image, NO Text Overlays */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                  />
                </div>

                {/* 2. Structured Content Body Below Image */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
                  <div>
                    {/* Category Tag & Duration in clean content area */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={cn(
                          'px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase border',
                          program.category === 'Bachelor'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : program.category === 'Doctorate'
                            ? 'bg-purple-50 text-purple-800 border-purple-200'
                            : program.category === 'Masters'
                            ? 'bg-blue-50 text-[#075AC8] border-blue-200'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        )}
                      >
                        {program.category}
                      </span>

                      {program.duration && (
                        <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#94A3B8]" />
                          <span>{program.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Program Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors leading-snug line-clamp-2">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded-xs"
                      >
                        {program.title}
                      </Link>
                    </h3>

                    {/* Program Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3 font-normal">
                      {program.shortDescription || program.description}
                    </p>

                    {/* Highlights Pills */}
                    {program.highlights && program.highlights.length > 0 && (
                      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {program.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-[#1E293B] bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-md"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Actions: View Program Details + Inquire */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded-xs"
                    >
                      <span>View Program Details</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#075AC8]" />
                    </Link>

                    <Link
                      href={`/contact?program=${program.slug}`}
                      className="text-xs font-bold text-[#061B35] bg-[#FEF8E9] hover:bg-[#F4B72F] border border-[#F4B72F]/50 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                      title={`Inquire about ${program.title}`}
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Bespoke Catalog Discovery Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#081F3D] via-[#0B254A] to-[#081F3D] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-[#F4B72F] uppercase tracking-wider block mb-1">
              Full Program Directory
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Looking for a tailored curriculum or specific specialization?
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-[#BACCE4]">
              Explore our full catalog across Management, Computing, Engineering, Health Sciences, Law, and Research.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="/programs"
              variant="gold"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="font-bold shadow-md"
            >
              Browse All {programs.length} Programs
            </Button>
            <Button
              href="/schedule-a-consultation"
              variant="outline"
              size="md"
              className="border-white/20 text-white hover:border-[#F4B72F] hover:bg-white/10"
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

