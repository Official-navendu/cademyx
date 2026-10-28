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
    <section className="relative py-12 sm:py-16 bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4B72F]/[0.03] to-transparent pointer-events-none" />

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
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F4B72F] hover:bg-[#061B35] hover:shadow-2xl focus:border-[#F4B72F] focus:bg-[#061B35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B72F] transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-default select-none"
              >
                <div>
                  {/* Icon badge with responsive contrast */}
                  <div className="h-12 w-12 rounded-xl bg-[#061B35] text-[#F4B72F] border border-[#075AC8]/40 flex items-center justify-center shrink-0 mb-5 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F4B72F] group-hover:text-[#061B35] group-hover:border-[#F4B72F] group-focus:bg-[#F4B72F] group-focus:text-[#061B35]">
                    <IconComponent className="h-6 w-6 stroke-[1.9]" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#061B35] group-hover:text-white group-focus:text-white transition-colors duration-300 leading-snug">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#152C45] group-hover:text-white/90 group-focus:text-white/90 transition-colors duration-300 leading-relaxed font-normal">
                    {highlight.description}
                  </p>
                </div>

                {/* Subtle bottom decorative accent on hover */}
                <div className="mt-5 pt-3 border-t border-slate-200/60 group-hover:border-[#F4B72F]/30 group-focus:border-[#F4B72F]/30 flex items-center gap-1.5 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#075AC8] group-hover:bg-[#F4B72F] group-focus:bg-[#F4B72F] transition-colors duration-300" />
                  <span className="text-[11px] font-bold text-[#152C45]/70 group-hover:text-[#F4B72F] group-focus:text-[#F4B72F] uppercase tracking-wider transition-colors duration-300">
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
