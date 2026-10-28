'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { missionVisionData } from '@/data/about';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-18 sm:py-24 bg-[#F5F7FB] border-b border-[#E2E8F0]/80 relative overflow-hidden bg-academic-grid">
      <Container size="default" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {/* Mission Block - Crisp Light Card with Gold Polish */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top gold bar */}
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#F4B72F]" />

            <div className="flex items-center gap-3.5 mb-6">
              <div className="h-12 w-12 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center border border-[#061B35] shadow-sm group-hover:scale-105 transition-transform">
                <Target className="h-6 w-6 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs font-bold gold-gradient-text uppercase tracking-wider">
                  {missionVisionData.mission.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061B35]">
                  {missionVisionData.mission.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-[#5A6A85] leading-relaxed mb-6">
              {missionVisionData.mission.description}
            </p>

            <ul className="space-y-3 mt-auto pt-6 border-t border-[#F1F5F9]">
              {missionVisionData.mission.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision Block - Cinematic Deep Navy Card */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#061B35] via-[#061B35] to-[#101E3B] text-white border border-[#F4B72F]/30 shadow-2xl relative overflow-hidden group"
          >
            {/* Top glowing gold bar */}
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#F4B72F] via-[#F4B72F] to-[#F4B72F]" />
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#F4B72F]/10 blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-6 relative z-10">
              <div className="h-12 w-12 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center border border-[#F4B72F]/40 shadow-sm group-hover:scale-105 transition-transform">
                <Eye className="h-6 w-6 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#F4B72F] uppercase tracking-wider">
                  {missionVisionData.vision.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {missionVisionData.vision.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-[#BACCE4] leading-relaxed mb-6 relative z-10">
              {missionVisionData.vision.description}
            </p>

            <ul className="space-y-3 mt-auto pt-6 border-t border-white/10 relative z-10">
              {missionVisionData.vision.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
