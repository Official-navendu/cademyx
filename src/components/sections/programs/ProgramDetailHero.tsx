'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Program } from '@/types/program';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CATEGORY_META } from '@/data/programs';
import { staggerContainer, fadeUp, scaleReveal, pulseGlow } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface ProgramDetailHeroProps {
  program: Program;
  onOpenEnquiry?: () => void;
}

export const ProgramDetailHero: React.FC<ProgramDetailHeroProps> = ({
  program,
  onOpenEnquiry,
}) => {
  const catMeta = CATEGORY_META[program.category] || CATEGORY_META.Doctorate;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#061B35] via-[#061B35] to-[#061B35] py-6 sm:py-8 lg:py-10 border-b border-[#075AC8]/60 bg-grain text-white">
      {/* Dynamic Category Ambient Glow */}
      <div
        className={cn(
          'pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-25',
          program.category === 'Bachelor'
            ? 'bg-amber-500'
            : program.category === 'Doctorate'
            ? 'bg-purple-600'
            : program.category === 'Masters'
            ? 'bg-blue-600'
            : 'bg-emerald-600'
        )}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#F4B72F]/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-academic-grid-dark opacity-45 pointer-events-none" />

      {/* Top Hairline Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4B72F]/40 to-transparent pointer-events-none" />

      <Container size="default" className="relative z-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Programs', href: '/programs' },
            { label: program.title },
          ]}
          className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#F4B72F] [&_span]:text-slate-100"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Program Identity, Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Category Pill & Status Badge */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border backdrop-blur-md shadow-xs',
                  program.category === 'Bachelor'
                    ? 'bg-amber-950/80 text-amber-200 border-amber-400/50'
                    : program.category === 'Doctorate'
                    ? 'bg-purple-950/80 text-purple-200 border-purple-400/50'
                    : program.category === 'Masters'
                    ? 'bg-blue-950/80 text-blue-200 border-blue-400/50'
                    : 'bg-emerald-950/80 text-emerald-200 border-emerald-400/50'
                )}
              >
                {catMeta.name}
              </span>

              {program.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase bg-[#F4B72F] text-[#061B35] border border-[#F4B72F] shadow-md flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  {program.badge}
                </span>
              )}

              {program.format && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/20">
                  {program.format}
                </span>
              )}
            </motion.div>

            {/* Program Title */}
            <motion.h1
              variants={fadeUp}
              className="hero-headline text-white font-extrabold tracking-tight leading-[1.12]"
            >
              {program.title}
            </motion.h1>

            {/* Short Description */}
            <motion.p
              variants={fadeUp}
              className="mt-3 sm:mt-3.5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl font-normal"
            >
              {program.shortDescription}
            </motion.p>

            {/* Metadata Factsheet Chips */}
            <motion.div
              variants={fadeUp}
              className="mt-5 pt-3.5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg text-xs sm:text-sm"
            >
              {program.duration && (
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#061B35] to-[#075AC8] text-[#F4B72F] flex items-center justify-center shrink-0 border border-[#075AC8]">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Duration</span>
                    <strong className="text-white font-bold">{program.duration}</strong>
                  </div>
                </div>
              )}

              {program.format && (
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#061B35] to-[#075AC8] text-[#F4B72F] flex items-center justify-center shrink-0 border border-[#075AC8]">
                    <Users className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Learning Format</span>
                    <strong className="text-white font-bold">{program.format}</strong>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              {onOpenEnquiry ? (
                <Button
                  type="button"
                  onClick={onOpenEnquiry}
                  variant="gold"
                  size="lg"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                  className="font-extrabold shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  Inquire About This Track
                </Button>
              ) : (
                <Button
                  href={`/contact?program=${program.slug}`}
                  variant="gold"
                  size="lg"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                  className="font-extrabold shadow-xl hover:shadow-2xl"
                >
                  Inquire About This Track
                </Button>
              )}

              <Button
                href="#program-overview"
                variant="outline-light"
                size="lg"
                trailingIcon={<BookOpen className="h-4 w-4" />}
                className="font-bold border-white/30 hover:border-[#F4B72F] text-white"
              >
                Program Overview
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Sculpted Visual Representation with Category Tint */}
          <motion.div variants={scaleReveal} className="lg:col-span-5 relative flex items-center justify-center pt-2 sm:pt-0">
            <div className="relative w-full max-w-md lg:max-w-[460px]">
              {/* Category Backlight Glow */}
              <motion.div
                variants={pulseGlow}
                animate="animate"
                className={cn(
                  'absolute -inset-4 rounded-3xl blur-2xl opacity-40',
                  program.category === 'Doctorate'
                    ? 'bg-purple-600'
                    : program.category === 'Masters'
                    ? 'bg-blue-600'
                    : 'bg-emerald-600'
                )}
                aria-hidden="true"
              />

              {/* Offset Decorative Gold Frame */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-2xl border border-[#F4B72F]/40 pointer-events-none transition-transform duration-500" />

              {/* Editorial Frame with Consistent Rounded Corners */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F4B72F]/60 via-[#075AC8]/40 to-[#061B35] shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative w-full rounded-xl overflow-hidden bg-[#061B35]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Gold Accent L-bracket marks */}
                  <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#F4B72F]/80 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#F4B72F]/80 pointer-events-none" />
                </div>

                {/* Floating Academic Standard Badge */}
                <div className="absolute bottom-3 left-3 bg-[#061B35]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F4B72F]/40 shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B72F]" />
                  <span className="text-[11px] font-bold text-white tracking-wide">
                    {program.category} Pathway
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
