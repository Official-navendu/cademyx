'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Search, X, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PROGRAM_CATEGORIES, getCategoryCounts, CATEGORY_META } from '@/data/programs';
import { staggerContainer, fadeUp, scaleReveal, pulseGlow } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface ProgramsHeroProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onClearSearch?: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  totalCount?: number;
  filteredCount?: number;
}

export const ProgramsHero: React.FC<ProgramsHeroProps> = ({
  searchQuery = '',
  onSearchChange,
  onClearSearch,
  selectedCategory = 'All',
  onSelectCategory,
  totalCount = 12,
  filteredCount = 12,
}) => {
  const categoryCounts = getCategoryCounts();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#061B35] via-[#061B35] to-[#061B35] py-6 sm:py-8 lg:py-10 border-b border-[#075AC8]/60 bg-grain text-white">
      {/* Background Illumination & Academic Atmospheric Lighting */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#F4B72F]/14 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#075AC8]/35 blur-2xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-academic-grid-dark opacity-45 pointer-events-none" />

      {/* Top Hairline Sheen */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4B72F]/40 to-transparent pointer-events-none" />

      <Container size="default" className="relative z-10">
        <Breadcrumbs
          items={[{ label: 'Programs' }]}
          className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#F4B72F] [&_span]:text-slate-100"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Heading, Description, and Live Search */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061B35]/90 border border-[#F4B72F]/40 text-xs font-bold mb-3 shadow-xs backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F4B72F] animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-wider uppercase gold-gradient-text">
                Academic Catalogue • {totalCount} Specialized Tracks
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              variants={fadeUp}
              className="hero-headline text-white font-extrabold tracking-tight leading-[1.1]"
            >
              Find the Program That{' '}
              <span className="gold-gradient-text relative inline-block">
                Moves You Forward
                <span
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#F4B72F] to-[#F4B72F] rounded-full"
                  aria-hidden="true"
                />
              </span>
              .
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={fadeUp}
              className="mt-3 sm:mt-3.5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl font-normal"
            >
              Explore bachelor&apos;s degrees, master&apos;s programs, doctorate pathways, and professional certifications across the CademyX catalogue.
            </motion.p>

            {/* Interactive Search Input Box in Hero */}
            <motion.div variants={fadeUp} className="mt-5 w-full max-w-xl">
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#F4B72F]">
                  <Search className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  placeholder="Search by program title, category, or focus area..."
                  aria-label="Search academic programs"
                  className="w-full rounded-xl bg-[#061B35]/95 border-2 border-[#F4B72F]/50 py-3 pl-11 pr-11 text-sm sm:text-base text-white placeholder-slate-400 backdrop-blur-md shadow-xl transition-all focus:border-[#F4B72F] focus:bg-[#061B35] focus:ring-4 focus:ring-[#F4B72F]/20 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={onClearSearch}
                    aria-label="Clear program search"
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Category Navigation Badges in Hero */}
            <motion.div variants={fadeUp} className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectCategory?.('All')}
                className={cn(
                  'px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  selectedCategory === 'All'
                    ? 'bg-[#F4B72F] text-[#061B35] shadow-md border border-[#F4B72F]'
                    : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/15'
                )}
              >
                <span>All Programs</span>
                <span className="text-[10px] opacity-80 font-mono">
                  ({filteredCount !== totalCount ? `${filteredCount}/${totalCount}` : totalCount})
                </span>
              </button>

              {PROGRAM_CATEGORIES.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isSelected = selectedCategory === cat;
                const meta = CATEGORY_META[cat];
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onSelectCategory?.(cat)}
                    className={cn(
                      'px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                      isSelected
                        ? 'bg-[#F4B72F] text-[#061B35] shadow-md border border-[#F4B72F]'
                        : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/15'
                    )}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        backgroundColor:
                          cat === 'Bachelor'
                            ? '#F59E0B'
                            : cat === 'Doctorate'
                            ? '#C084FC'
                            : cat === 'Masters'
                            ? '#60A5FA'
                            : '#34D399',
                      }}
                      aria-hidden="true"
                    />
                    <span>{meta.name}</span>
                    <span className="text-[10px] opacity-80 font-mono">({count})</span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Premium Sculpted Academic Library Visual */}
          <motion.div
            variants={scaleReveal}
            className="lg:col-span-5 relative flex items-center justify-center pt-2 sm:pt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-[460px]">
              {/* Backlight Glow */}
              <motion.div
                variants={pulseGlow}
                animate="animate"
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#F4B72F]/25 via-[#075AC8]/30 to-transparent blur-2xl pointer-events-none"
              />

              {/* Offset Gold Frame */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-2xl border border-[#F4B72F]/40 pointer-events-none transition-transform duration-500" />

              {/* Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#F4B72F]/60 shadow-2xl bg-[#061B35] p-1.5 group">
                <div className="aspect-[4/3] relative w-full rounded-xl overflow-hidden bg-[#061B35]">
                  <Image
                    src="/assets/images/hero/programs-hero.jpg"
                    alt="CademyX Contemporary Academic Library and University Program Discovery"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark Navy Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/90 via-[#061B35]/25 to-transparent pointer-events-none" />

                  {/* Corner Gold Accent L-bracket marks */}
                  <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#F4B72F]/80 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#F4B72F]/80 pointer-events-none" />
                </div>

                {/* Floating Academic Badges Micro-Strip */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#061B35]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#F4B72F]/40 shadow-lg flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-200">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                    <span>Bachelors</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-blue-400" />
                    <span>Masters</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5 text-purple-400" />
                    <span>Doctorates</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
