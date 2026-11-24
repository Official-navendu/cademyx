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
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-[#DCE3FF] overflow-hidden bg-grain">
      {/* Decorative Brand Ambient Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-[#182A9A]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />

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
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-full min-h-[460px] lg:min-h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#DCE3FF] bg-[#101F70] group">
              <Image
                src="/assets/images/about/about-cademyx-editorial.jpg"
                alt="CademyX Academic Mentorship & Strategic Counseling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/90 via-[#101F70]/20 to-transparent pointer-events-none" />

              {/* Floating Editorial Badge positioned over image */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#101F70]/95 backdrop-blur-md border border-[#DCE3FF]/20 text-white flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#DCE3FF] font-bold">
                    Mentorship Standard
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white mt-0.5">Objective, Student-First Guidance</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-[#182A9A] shadow-sm shrink-0 ring-4 ring-[#DCE3FF]/30" />
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
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-xs font-bold tracking-widest uppercase shadow-2xs self-start text-[#182A9A]">
              <Sparkles className="h-3.5 w-3.5 text-[#182A9A]" />
              <span>{homeIntroductionData.eyebrow}</span>
            </div>

            <h2 className="section-headline font-extrabold text-[#101F70] tracking-tight">
              {homeIntroductionData.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#26345C] leading-relaxed font-normal">
              {homeIntroductionData.description}
            </p>

            {/* Three Supporting Benefits */}
            <div className="mt-7 space-y-3.5">
              {homeIntroductionData.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF]/60 hover:bg-[#F3F5FF]/90 hover:border-[#DCE3FF] transition-all"
                >
                  <div className="h-7 w-7 rounded-full bg-[#182A9A]/15 text-[#182A9A] flex items-center justify-center shrink-0 mt-0.5 border border-[#DCE3FF] shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-[#182A9A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#101F70]">{benefit.title}</h3>
                    <p className="mt-0.5 text-sm text-[#26345C] leading-relaxed">
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
