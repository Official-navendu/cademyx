'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { homeIntroductionData } from '@/data/home';
import { fadeUp, scaleReveal, defaultViewport } from '@/lib/motion';

export const HomeIntroduction: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Decorative Warm Ambient Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-[#F4B72F]/[0.07] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Noticeably Larger Editorial Visual (50% desktop width) */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-6 order-2 lg:order-1 relative flex flex-col"
          >
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-full min-h-[460px] lg:min-h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] bg-[#061B35] group">
              <Image
                src="/assets/images/about/about-cademyx-editorial.jpg"
                alt="CademyX Academic Mentorship & Strategic Counseling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/90 via-[#061B35]/20 to-transparent pointer-events-none" />

              {/* Floating Editorial Badge positioned over image */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#061B35]/95 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#F4B72F] font-bold">
                    Mentorship Standard
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white mt-0.5">Objective, Student-First Guidance</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-[#F4B72F] shadow-sm shrink-0 ring-4 ring-[#F4B72F]/30" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative (50% desktop width) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#F4B72F]/15 to-[#F4B72F]/15 border border-[#F4B72F]/30 text-xs font-bold tracking-widest uppercase shadow-2xs self-start">
              <Sparkles className="h-3.5 w-3.5 text-[#F4B72F]" />
              <span className="gold-gradient-text">{homeIntroductionData.eyebrow}</span>
            </div>

            <h2 className="section-headline font-extrabold text-[#061B35] tracking-tight">
              {homeIntroductionData.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#152C45] leading-relaxed font-normal">
              {homeIntroductionData.description}
            </p>

            {/* Three Supporting Benefits */}
            <div className="mt-7 space-y-3.5">
              {homeIntroductionData.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC]/80 border border-[#E2E8F0]/60 hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all"
                >
                  <div className="h-7 w-7 rounded-full bg-[#F4B72F]/20 text-[#D99519] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4B72F]/40 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-[#F4B72F]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#061B35]">{benefit.title}</h3>
                    <p className="mt-0.5 text-sm text-[#152C45] leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={homeIntroductionData.cta.href}
                variant="primary"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
                className="font-bold shadow-md hover:shadow-lg"
              >
                {homeIntroductionData.cta.label}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
