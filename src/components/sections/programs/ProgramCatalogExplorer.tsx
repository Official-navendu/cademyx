'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Award, BookOpen, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SUBJECT_CATEGORIES, DOCTORATE_TRACKS_META, CERTIFICATION_TRACKS_META } from '@/data/categories';

export const ProgramCatalogExplorer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Page Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#101F70] via-[#101F70] to-[#0A1445] text-white overflow-hidden">
        {/* Soft Ambient Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#182A9A]/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#182A9A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DCE3FF]/20" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#DCE3FF]/30 text-xs font-semibold text-[#DCE3FF] uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#DCE3FF]" />
              <span>Official Academic Portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Academic Programs &amp; Professional Pathways
            </h1>

            <p className="text-base sm:text-lg text-[#DCE3FF]/90 leading-relaxed mb-8">
              Explore CademyX’s approved academic portfolio structured across 15 subject disciplines, terminal research doctorates, and accelerated technical certifications.
            </p>

            {/* Quick Section Jump Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#disciplines"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#101F70] hover:bg-[#F3F5FF] font-semibold text-xs transition-all shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#182A9A]" />
                <span>15 Subject Disciplines</span>
              </a>
              <a
                href="#doctorate"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-[#DCE3FF]/30 text-white font-semibold text-xs transition-all"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#DCE3FF]" />
                <span>Doctorate (3 Tracks)</span>
              </a>
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-[#DCE3FF]/30 text-white font-semibold text-xs transition-all"
              >
                <Award className="w-3.5 h-3.5 text-[#DCE3FF]" />
                <span>Certifications (4 Tracks)</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Group A: Subject-Based Programme Categories (15 Disciplines) */}
      <section id="disciplines" className="py-20 lg:py-24 bg-white border-b border-[#DCE3FF]/40 scroll-mt-20">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-[11px] font-bold uppercase tracking-wider text-[#182A9A] mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Group A • 15 Disciplines</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101F70] tracking-tight">
                Subject-Based Programme Categories
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#26345C] max-w-2xl leading-relaxed">
                Choose from 15 academic disciplines spanning undergraduate and postgraduate degree pathways curated with accredited university partners.
              </p>
            </div>
          </div>

          {/* 15 Subject Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SUBJECT_CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/program-categories/${cat.slug}`}
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden focus-visible:outline-2 focus-visible:outline-[#182A9A]"
              >
                {/* Category Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101F70]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/80 via-[#101F70]/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#101F70]/80 backdrop-blur-sm border border-[#DCE3FF]/20 text-[10px] font-bold text-white tracking-wider uppercase">
                    Discipline #{idx + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-lg font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#26345C]/80 line-clamp-2 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Popular Courses Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {cat.popularCourses.slice(0, 3).map((pc) => (
                      <span
                        key={pc.slug}
                        className="px-2 py-0.5 rounded bg-[#F3F5FF] text-[#182A9A] text-[11px] font-semibold border border-[#DCE3FF]"
                      >
                        {pc.title}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-[#DCE3FF]/40 flex items-center justify-between text-xs font-bold text-[#182A9A]">
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Group B: Doctorate — 3 Tracks */}
      <section id="doctorate" className="py-20 lg:py-24 bg-[#F3F5FF] border-b border-[#DCE3FF]/60 scroll-mt-20">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE3FF] text-[11px] font-bold uppercase tracking-wider text-[#182A9A] mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Group B • 3 Approved Tracks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101F70] tracking-tight">
                Doctorate &amp; Terminal Research Programs
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#26345C] max-w-2xl leading-relaxed">
                Pioneering scholarly research, defensible dissertations, and distinguished academic recognitions structured for experienced researchers and corporate leaders.
              </p>
            </div>
          </div>

          {/* 3 Doctorate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {DOCTORATE_TRACKS_META.map((track) => (
              <div
                key={track.slug}
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Track Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101F70]">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/80 via-[#101F70]/20 to-transparent" />
                  
                  {/* Badge Label */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#182A9A] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                      {track.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors mb-2">
                    {track.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#26345C]/80 line-clamp-3 leading-relaxed mb-6">
                    {track.shortDescription}
                  </p>

                  <div className="space-y-2 mt-auto mb-6 text-xs text-[#26345C]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#182A9A]" />
                      <span className="font-semibold">{track.duration}</span>
                      <span className="text-[#6573A8]">• {track.format}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-[#6573A8] line-clamp-2">
                      <CheckCircle2 className="w-3 h-3 text-[#182A9A] shrink-0 mt-0.5" />
                      <span>{track.eligibility}</span>
                    </div>
                  </div>

                  {/* Direct Navigation Button */}
                  <Link
                    href={`/programs/${track.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#101F70] hover:bg-[#182A9A] text-white font-semibold text-xs tracking-wide transition-colors"
                  >
                    <span>View Track Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Group C: Certifications — 4 Tracks */}
      <section id="certifications" className="py-20 lg:py-24 bg-white border-b border-[#DCE3FF]/40 scroll-mt-20">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-[11px] font-bold uppercase tracking-wider text-[#182A9A] mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Group C • 4 Approved Tracks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101F70] tracking-tight">
                Professional Technical Certifications
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#26345C] max-w-2xl leading-relaxed">
                Hands-on practical credentials focused on production engineering, cloud architecture, cyber offensive defense, and data analytics.
              </p>
            </div>
          </div>

          {/* 4 Certification Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATION_TRACKS_META.map((track) => (
              <div
                key={track.slug}
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Track Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101F70]">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/80 via-[#101F70]/20 to-transparent" />
                  
                  {/* Badge Label */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#182A9A] text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                      {track.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-base font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors mb-2">
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#26345C]/80 line-clamp-2 leading-relaxed mb-4">
                    {track.shortDescription}
                  </p>

                  <div className="space-y-1.5 mt-auto mb-5 text-[11px] text-[#26345C]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3 h-3 text-[#182A9A]" />
                      <span>{track.duration} • {track.format}</span>
                    </div>
                  </div>

                  {/* Direct Navigation Button */}
                  <Link
                    href={`/programs/${track.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#F3F5FF] hover:bg-[#182A9A] text-[#182A9A] hover:text-white font-semibold text-xs tracking-wide transition-all border border-[#DCE3FF] hover:border-[#182A9A]"
                  >
                    <span>View Certification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Advisory Consultation Banner */}
      <section className="py-16 bg-[#101F70] text-white">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#182A9A]/40 to-transparent border border-[#DCE3FF]/20">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Unsure Which Discipline Aligns with Your Career?
              </h3>
              <p className="text-sm text-[#DCE3FF]/90 leading-relaxed">
                Connect with our senior academic counselors for a comprehensive profile evaluation, credential mapping, and university selection advisory.
              </p>
            </div>
            <Link
              href="/schedule-a-consultation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#101F70] hover:bg-[#F3F5FF] font-bold text-sm tracking-wide transition-all shrink-0 shadow-lg"
            >
              <span>Schedule 1-on-1 Advisory</span>
              <ArrowRight className="w-4 h-4 text-[#182A9A]" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
