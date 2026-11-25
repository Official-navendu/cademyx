'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { learningJourneySteps } from '@/data/home';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const LearningJourney: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F3F5FF] border-b border-[#DCE3FF] overflow-hidden bg-grain">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#182A9A]/[0.05] via-[#101F70]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <SectionHeading
          eyebrow="YOUR MILESTONES"
          title="Four Stages of Your Academic Guidance Journey"
          highlightWords="Academic Guidance Journey"
          description="A structured, transparent progression designed to help you navigate from initial exploration to confident application."
          align="center"
        />

        {/* Steps Grid with Horizontal Connecting Line */}
        <div className="relative">
          {/* Subtle Desktop Connecting Progression Line */}
          <div className="hidden lg:block absolute top-[45px] left-12 right-12 h-[2px] bg-gradient-to-r from-[#182A9A]/10 via-[#182A9A]/30 to-[#182A9A]/10 z-0 pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative z-10"
          >
            {learningJourneySteps.map((step) => (
              <motion.div key={step.step} variants={staggerItem} className="h-full">
                <div className="group relative flex flex-col h-full p-3.5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white border border-[#DCE3FF] shadow-sm hover:border-[#182A9A] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  {/* Top Blue Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#182A9A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <span className="h-9 w-9 sm:h-12 sm:w-12 lg:h-13 lg:w-13 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#101F70] via-[#101F70] to-[#182A9A] text-white font-extrabold text-sm sm:text-base lg:text-lg flex items-center justify-center border border-[#182A9A] shadow-xs group-hover:scale-105 group-hover:border-[#DCE3FF] transition-all duration-300">
                      0{step.step}
                    </span>
                    {step.actionText && (
                      <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#182A9A] bg-[#F3F5FF] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#DCE3FF] shadow-2xs truncate">
                        {step.actionText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#101F70] mb-1 sm:mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs lg:text-sm text-[#26345C] leading-relaxed flex-1 font-normal">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-[#DCE3FF]/40 flex items-center justify-between text-[10px] sm:text-xs font-bold text-[#182A9A]">
                    <span>Phase {step.step} of 4</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#182A9A]" />
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
