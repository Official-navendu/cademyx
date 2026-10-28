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
      <section className="relative overflow-hidden bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 border-b border-[#F1F5F9]">
        {/* Subtle Architectural Texture & Ambient Lighting Behind Hero Content */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle Base Tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FCFEFF] to-[#F6F9FD]/70" />

          {/* Architectural Fine Grid Pattern */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 27, 53, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 27, 53, 0.04) 1px, transparent 1px)
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
              backgroundImage: 'radial-gradient(circle, rgba(7, 90, 200, 0.16) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              maskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, black 25%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, black 25%, transparent 90%)',
            }}
          />

          {/* Tasteful Ambient Lighting */}
          <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#075AC8]/7 via-[#F4B72F]/5 to-transparent blur-3xl" />
          <div className="absolute -bottom-20 left-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#F4B72F]/8 via-[#075AC8]/4 to-transparent blur-3xl" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Eyebrow, Heading, Subtitle, Exactly Two CTAs, and Statistics */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left pl-2 sm:pl-4 lg:pl-2">
              {/* 1. Small Eyebrow Label */}
              <div className="text-[11px] sm:text-xs font-bold text-[#061B35] uppercase tracking-[0.18em] mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F4B72F]" />
                <span>YOUR PARTNER IN A BRIGHTER TOMORROW</span>
              </div>

              {/* 2. Static Majestic Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#061B35] tracking-tight leading-[1.12]">
                Shape Your <br />
                <span className="text-[#F4B72F]">Academic Future</span> <br />
                With Clarity and <br />
                Confidence.
              </h1>

              {/* 3. Subtitle Description */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#152C45] leading-relaxed max-w-xl font-normal">
                CademyX helps you discover the right programs, get expert guidance, and
                achieve your true academic potential — all in one place.
              </p>

              {/* 4. Action Row: Exactly TWO Primary Hero CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                {/* Primary CTA: Opens Accessible Enquiry Modal */}
                <button
                  type="button"
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4B72F] to-[#D99519] hover:from-[#E5A00F] hover:to-[#C68000] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Get Expert Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary CTA: Explore Full Catalog */}
                <Link
                  href="/programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#94A3B8] text-[#061B35] font-semibold text-sm sm:text-base shadow-2xs hover:shadow-sm transition-all"
                >
                  <span>Explore Programs</span>
                </Link>
              </div>

              {/* 5. Metric Statistics Row */}
              <div className="mt-9 sm:mt-11 pt-6 border-t border-[#EDF2F7] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
                {/* Stat 1: 2K+ */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF8E9] border border-[#FDE6B0] flex items-center justify-center text-[#F4B72F] shrink-0 shadow-2xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#061B35] leading-none">
                      2K+
                    </div>
                    <div className="text-[11px] text-[#152C45]/70 font-medium mt-1">
                      Students Guided
                    </div>
                  </div>
                </div>

                {/* Stat 2: 150+ */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF8E9] border border-[#FDE6B0] flex items-center justify-center text-[#F4B72F] shrink-0 shadow-2xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#061B35] leading-none">
                      150+
                    </div>
                    <div className="text-[11px] text-[#152C45]/70 font-medium mt-1">
                      Academic Programs
                    </div>
                  </div>
                </div>

                {/* Stat 3: 98% */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF8E9] border border-[#FDE6B0] flex items-center justify-center text-[#F4B72F] shrink-0 shadow-2xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#061B35] leading-none">
                      98%
                    </div>
                    <div className="text-[11px] text-[#152C45]/70 font-medium mt-1">
                      Success Rate
                    </div>
                  </div>
                </div>

                {/* Stat 4: 50+ */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF8E9] border border-[#FDE6B0] flex items-center justify-center text-[#F4B72F] shrink-0 shadow-2xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#061B35] leading-none">
                      50+
                    </div>
                    <div className="text-[11px] text-[#152C45]/70 font-medium mt-1">
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
