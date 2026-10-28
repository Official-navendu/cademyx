'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { learningJourneySteps } from '@/data/home';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const LearningJourney: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F5F7FB] border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F4B72F]/[0.05] via-[#061B35]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <SectionHeading
          eyebrow="YOUR MILESTONES"
          title="The Four Stages of Your Learning Journey"
          highlightWords="Learning Journey"
          description="A transparent, measured progression that transforms academic ambition into measurable achievement."
          align="center"
        />

        {/* Steps Grid with Horizontal Connecting Line */}
        <div className="relative">
          {/* Subtle Desktop Connecting Progression Line */}
          <div className="hidden lg:block absolute top-[45px] left-12 right-12 h-[2px] bg-gradient-to-r from-[#F4B72F]/20 via-[#F4B72F]/50 to-[#F4B72F]/20 z-0 pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {learningJourneySteps.map((step) => (
              <motion.div key={step.step} variants={staggerItem} className="h-full">
                <div className="group relative flex flex-col h-full p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#F4B72F] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 gold-glow-card overflow-hidden">
                  {/* Top Gold Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="h-13 w-13 rounded-2xl bg-gradient-to-br from-[#061B35] via-[#061B35] to-[#075AC8] text-[#F4B72F] font-extrabold text-lg flex items-center justify-center border border-[#075AC8] shadow-xs group-hover:scale-105 group-hover:border-[#F4B72F]/50 transition-all duration-300">
                      0{step.step}
                    </span>
                    {step.actionText && (
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D99519] bg-gradient-to-r from-[#F4B72F]/15 to-[#F4B72F]/20 px-3 py-1 rounded-full border border-[#F4B72F]/35 shadow-2xs">
                        {step.actionText}
                      </span>
                    )}
                  </div>

                  <h3 className="card-headline font-bold text-[#061B35] mb-2 leading-snug group-hover:text-[#061B35] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#5A6A85] leading-relaxed flex-1 font-normal">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#F4B72F]">
                    <span>Phase {step.step} of 4</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F4B72F]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
