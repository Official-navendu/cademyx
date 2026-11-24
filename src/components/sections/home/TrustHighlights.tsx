'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Compass, Target, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { trustHighlights } from '@/data/home';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

const iconMap = {
  UserCheck: UserCheck,
  Compass: Compass,
  Target: Target,
  GraduationCap: GraduationCap,
};

export const TrustHighlights: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-white border-b border-[#DCE3FF]/40 overflow-hidden">
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#182A9A]/[0.03] to-transparent pointer-events-none" />

      <Container size="default" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustHighlights.map((highlight) => {
            const IconComponent =
              iconMap[highlight.iconName as keyof typeof iconMap] || Compass;

            return (
              <motion.div
                key={highlight.id}
                variants={staggerItem}
                tabIndex={0}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] hover:border-[#182A9A] hover:bg-[#101F70] hover:shadow-2xl focus:border-[#182A9A] focus:bg-[#101F70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#182A9A] transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-default select-none"
              >
                <div>
                  {/* Icon badge with responsive contrast */}
                  <div className="h-12 w-12 rounded-xl bg-white text-[#182A9A] border border-[#DCE3FF] flex items-center justify-center shrink-0 mb-5 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#182A9A] group-hover:text-white group-hover:border-[#182A9A] group-focus:bg-[#182A9A] group-focus:text-white">
                    <IconComponent className="h-6 w-6 stroke-[1.9]" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#101F70] group-hover:text-white group-focus:text-white transition-colors duration-300 leading-snug">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#26345C] group-hover:text-[#DCE3FF] group-focus:text-[#DCE3FF] transition-colors duration-300 leading-relaxed font-normal">
                    {highlight.description}
                  </p>
                </div>

                {/* Subtle bottom decorative accent on hover */}
                <div className="mt-5 pt-3 border-t border-[#DCE3FF] group-hover:border-[#DCE3FF]/20 group-focus:border-[#DCE3FF]/20 flex items-center gap-1.5 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#182A9A] group-hover:bg-[#DCE3FF] group-focus:bg-[#DCE3FF] transition-colors duration-300" />
                  <span className="text-[11px] font-bold text-[#6573A8] group-hover:text-[#DCE3FF] group-focus:text-[#DCE3FF] uppercase tracking-wider transition-colors duration-300">
                    CademyX Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
