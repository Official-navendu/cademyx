'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, TrendingUp, Building2, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { HeroEnquiryModal } from './HeroEnquiryModal';
import { HomeHeroSlider } from './HomeHeroSlider';

export const HomeHero: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 border-b border-[#DCE3FF]/40">
        {/* Subtle Architectural Texture & Ambient Lighting Behind Hero Content */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle Base Tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F3F5FF]/40 to-[#F3F5FF]/80" />

          {/* Architectural Fine Grid Pattern */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 31, 112, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 31, 112, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px',
              maskImage: 'radial-gradient(ellipse 90% 80% at 50% 35%, black 35%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 35%, black 35%, transparent 95%)',
            }}
          />

          {/* Micro Geometric Dot Intersections */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(24, 42, 154, 0.16) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              maskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, black 25%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, black 25%, transparent 90%)',
            }}
          />

          {/* Tasteful Ambient Lighting */}
          <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#182A9A]/10 via-[#101F70]/5 to-transparent blur-3xl" />
          <div className="absolute -bottom-20 left-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#182A9A]/8 via-[#DCE3FF]/40 to-transparent blur-3xl" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Eyebrow, Heading, Subtitle, Exactly Two CTAs, and Statistics */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left pl-2 sm:pl-4 lg:pl-2">
              {/* 1. Small Eyebrow Label */}
              <div className="text-[11px] sm:text-xs font-bold text-[#182A9A] uppercase tracking-[0.18em] mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#182A9A]" />
                <span>YOUR PARTNER IN A BRIGHTER TOMORROW</span>
              </div>

              {/* 2. Static Majestic Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#101F70] tracking-tight leading-[1.12]">
                Shape Your <br className="hidden sm:inline" />
                <span className="text-[#182A9A]">Academic Future</span> <br className="hidden sm:inline" />
                With Clarity and Confidence.
              </h1>

              {/* 3. Subtitle Description */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#26345C] leading-relaxed max-w-xl font-normal">
                CademyX helps you discover the right academic programs, make informed decisions, and move forward with confidence through personalized academic guidance and expert support.
              </p>

              {/* 4. Action Row: Exactly TWO Primary Hero CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                {/* Primary CTA: Schedule a Consultation */}
                <Link
                  href="/schedule-a-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#182A9A] to-[#101F70] hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>Get Expert Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary CTA: Explore Full Catalog */}
                <Link
                  href="/programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3F5FF] border border-[#DCE3FF] hover:border-[#182A9A] text-[#101F70] font-semibold text-sm sm:text-base shadow-2xs hover:shadow-sm transition-all"
                >
                  <span>Explore Programs</span>
                </Link>
              </div>

              {/* 5. Metric Statistics Row */}
              <div className="mt-9 sm:mt-11 pt-6 border-t border-[#DCE3FF]/40 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
                {/* Stat 1: 2K+ */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] shrink-0 shadow-2xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#101F70] leading-none">
                      2K+
                    </div>
                    <div className="text-[11px] text-[#6573A8] font-medium mt-1">
                      Students Guided
                    </div>
                  </div>
                </div>

                {/* Stat 2: 150+ */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] shrink-0 shadow-2xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#101F70] leading-none">
                      150+
                    </div>
                    <div className="text-[11px] text-[#6573A8] font-medium mt-1">
                      Academic Programs
                    </div>
                  </div>
                </div>

                {/* Stat 3: 98% */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] shrink-0 shadow-2xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#101F70] leading-none">
                      98%
                    </div>
                    <div className="text-[11px] text-[#6573A8] font-medium mt-1">
                      Success Rate
                    </div>
                  </div>
                </div>

                {/* Stat 4: 50+ */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] shrink-0 shadow-2xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#101F70] leading-none">
                      50+
                    </div>
                    <div className="text-[11px] text-[#6573A8] font-medium mt-1">
                      Partner Universities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Four-Image Slider */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex justify-center lg:justify-end">
              <HomeHeroSlider />
            </div>
          </div>
        </Container>
      </section>

      {/* Enquiry Modal Component */}
      <HeroEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
};
