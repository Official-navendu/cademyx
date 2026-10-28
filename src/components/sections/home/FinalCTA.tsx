'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { homeFinalCTA } from '@/data/home';
import { fadeUp, defaultViewport } from '@/lib/motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-atmospheric text-white overflow-hidden bg-grain border-t border-[#075AC8]">
      {/* Top Luminous Section Divider Glow */}
      <div className="section-divider-glow absolute top-0 left-0 right-0 z-10" />

      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-academic-grid-dark opacity-40 pointer-events-none" />

      {/* Atmospheric Decorative Geometric Orbit Rings */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#F4B72F]/20 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full border border-[#F4B72F]/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-[#F4B72F]/10 pointer-events-none hidden md:block" />

      <Container size="narrow" className="relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B72F]/15 border border-[#F4B72F]/40 text-xs font-bold text-[#F4B72F] mb-7 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F4B72F]" aria-hidden="true" />
            <span className="tracking-widest uppercase text-xs font-extrabold gold-gradient-text">
              Begin Your Advisory
            </span>
          </div>

          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Ready to Setup the Matrix of{' '}
            <span className="gold-gradient-text">Your True Aim?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#BACCE4] leading-relaxed max-w-2xl mx-auto font-normal">
            {homeFinalCTA.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={homeFinalCTA.primaryCta.href}
              variant="gold"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-extrabold shadow-xl hover:shadow-2xl"
            >
              {homeFinalCTA.primaryCta.label}
            </Button>

            <Button
              href={homeFinalCTA.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white/25 hover:border-[#F4B72F] hover:bg-white/10 font-bold"
            >
              {homeFinalCTA.secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
