'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { impactStatements } from '@/data/home';
import { staggerContainer, staggerItem, fadeUp, defaultViewport } from '@/lib/motion';

export const ImpactStatistics: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-atmospheric text-white overflow-hidden bg-grain border-b border-[#075AC8]">
      {/* Top Luminous Gold Section Divider Glow */}
      <div className="section-divider-glow absolute top-0 left-0 right-0 z-10" />

      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-academic-grid-dark opacity-45 pointer-events-none" />

      <Container size="default" className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[#F4B72F]/15 border border-[#F4B72F]/35 text-xs font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B72F]" />
            <span className="gold-gradient-text">OUR ACADEMIC STANDARD</span>
          </div>

          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Commitment to Rigor, Depth, and <span className="gold-gradient-text">Integrity</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#BACCE4] leading-relaxed font-normal">
            Rather than relying on unverified placement claims, our foundation rests on proven educational principles, ethical guidance, and student-centered growth.
          </p>
        </motion.div>

        {/* 4 Impact Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {impactStatements.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="group relative p-7 rounded-2xl bg-[#061B35]/80 backdrop-blur-md border border-[#075AC8] hover:border-[#F4B72F]/70 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle top gold hover line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <span className="inline-block text-xs font-bold text-[#F4B72F] tracking-wider uppercase mb-3">
                  {item.label}
                </span>
                <h3 className="card-headline font-bold text-white leading-snug">
                  {item.statement}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-[#075AC8]/80 flex items-center justify-between text-xs sm:text-sm text-[#BACCE4]">
                <span className="font-semibold text-[#F4B72F]">{item.highlightText}</span>
                <Shield className="h-4 w-4 text-[#F4B72F] transition-transform duration-300 group-hover:scale-115" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Bottom Section Divider Glow */}
      <div className="section-divider-glow absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
};
