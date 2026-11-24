'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { missionVisionData } from '@/data/about';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-18 sm:py-24 bg-[#F3F5FF] border-b border-[#DCE3FF] relative overflow-hidden bg-academic-grid">
      <Container size="default" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {/* Mission Block - Crisp Light Card */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col p-8 sm:p-10 rounded-2xl bg-white border border-[#DCE3FF] shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top brand blue bar */}
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />

            <div className="flex items-center gap-3.5 mb-6">
              <div className="h-12 w-12 rounded-xl bg-[#101F70] text-[#DCE3FF] flex items-center justify-center border border-[#182A9A] shadow-sm group-hover:scale-105 transition-transform">
                <Target className="h-6 w-6 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#182A9A] uppercase tracking-wider">
                  {missionVisionData.mission.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101F70]">
                  {missionVisionData.mission.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-[#26345C] leading-relaxed mb-6">
              {missionVisionData.mission.description}
            </p>

            <ul className="space-y-3 mt-auto pt-6 border-t border-[#DCE3FF]/40">
              {missionVisionData.mission.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#26345C]">
                  <CheckCircle2 className="h-4 w-4 text-[#182A9A] shrink-0 mt-0.5" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision Block - Deep Navy Card */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#101F70] via-[#101F70] to-[#0D1959] text-white border border-[#DCE3FF]/20 shadow-2xl relative overflow-hidden group"
          >
            {/* Top glowing blue bar */}
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#182A9A] via-[#DCE3FF] to-[#182A9A]" />
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#182A9A]/20 blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-6 relative z-10">
              <div className="h-12 w-12 rounded-xl bg-[#0D1959] text-[#DCE3FF] flex items-center justify-center border border-[#DCE3FF]/40 shadow-sm group-hover:scale-105 transition-transform">
                <Eye className="h-6 w-6 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#DCE3FF] uppercase tracking-wider">
                  {missionVisionData.vision.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {missionVisionData.vision.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-[#DCE3FF]/90 leading-relaxed mb-6 relative z-10">
              {missionVisionData.vision.description}
            </p>

            <ul className="space-y-3 mt-auto pt-6 border-t border-white/10 relative z-10">
              {missionVisionData.vision.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="h-4 w-4 text-[#DCE3FF] shrink-0 mt-0.5" />
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
