'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, ArrowDown, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { aboutHeroData } from '@/data/about';
import { staggerContainer, fadeUp, scaleReveal } from '@/lib/motion';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FB] via-white to-white py-6 sm:py-8 lg:py-10 border-b border-[#E2E8F0] bg-grain">
      {/* Ambient background illumination & Gold Wash */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-[#F4B72F]/12 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-[#061B35]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-academic-grid opacity-40 pointer-events-none" />

      {/* Decorative Golden Geometry & Rule */}
      <div className="absolute top-0 left-1/3 w-px h-24 bg-gradient-to-b from-[#F4B72F]/40 to-transparent pointer-events-none hidden lg:block" />

      <Container size="default" className="relative z-10">
        <Breadcrumbs items={[{ label: 'About Us' }]} className="py-1" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Editorial Storytelling */}
          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F4B72F]/15 to-[#F4B72F]/15 border border-[#F4B72F]/35 text-[#D99519] mb-3 shadow-xs backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B72F]" />
              <span className="text-xs font-bold tracking-wider uppercase">
                {aboutHeroData.eyebrow}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="hero-headline text-[#061B35] font-extrabold tracking-tight">
              An Academic Journey{' '}
              <span className="gold-gradient-text relative inline-block">
                Built Around
                <span
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#F4B72F] to-[#F4B72F] rounded-full"
                  aria-hidden="true"
                />
              </span>{' '}
              Your Ambitions.
            </h1>

            {/* Supporting Introduction */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5A6A85] leading-relaxed max-w-xl font-normal">
              {aboutHeroData.subheading}
            </p>

            {/* Editorial Core Quote with Fine Gold Vertical Rule */}
            <div className="mt-4 pl-3.5 border-l-2 border-[#F4B72F] bg-[#F8FAFC]/90 py-2 pr-3.5 rounded-r-xl max-w-xl">
              <p className="text-xs sm:text-sm font-medium text-[#1E293B] italic">
                “Academic guidance must be rigorous, objective, and deeply aligned with each scholar&apos;s genuine intellectual potential.”
              </p>
            </div>

            {/* Action Group: Explore Our Approach & View Programs */}
            <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button
                href="#approach"
                variant="primary"
                size="md"
                trailingIcon={<ArrowDown className="h-4 w-4" />}
                className="font-bold shadow-md hover:shadow-lg"
              >
                Explore Our Approach
              </Button>
              <Button
                href="/programs"
                variant="outline"
                size="md"
                trailingIcon={<BookOpen className="h-4 w-4" />}
                className="font-bold border-[#E2E8F0] hover:border-[#F4B72F] text-[#061B35]"
              >
                Explore Catalogue
              </Button>
            </div>

            {/* Trust Anchors */}
            <div className="mt-5 pt-3.5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-5 w-full">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#061B35] text-[#F4B72F] flex items-center justify-center shadow-xs">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#061B35]">Evidence-Based</div>
                  <div className="text-[11px] text-[#5A6A85]">Advisory Framework</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#061B35] text-[#F4B72F] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#061B35]">Scholarly Integrity</div>
                  <div className="text-[11px] text-[#5A6A85]">Zero Bias Standards</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Editorial Image Framing with Sculpted Geometry */}
          <motion.div variants={scaleReveal} className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-[460px]">
              {/* Backlight glow */}
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#F4B72F]/20 via-[#061B35]/10 to-transparent blur-xl opacity-75"
                aria-hidden="true"
              />

              {/* Offset Geometric Gold Border */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-2xl border border-[#F4B72F]/40 pointer-events-none" />

              {/* Editorial Frame with Consistent Rounded Corners */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F4B72F]/50 via-[#E2E8F0] to-[#061B35]/30 shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative w-full rounded-xl overflow-hidden bg-[#061B35]">
                  <Image
                    src={aboutHeroData.image}
                    alt="CademyX Academic Steering Group and University Seminar Mentorship"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/75 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Gold Accent L-bracket marks */}
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#F4B72F]/80 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#F4B72F]/80 pointer-events-none" />
                </div>

                {/* Corner Academic Seal */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F4B72F]/40 shadow-md">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#061B35]">
                    CademyX Standard
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
