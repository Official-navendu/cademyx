'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { aboutFinalCTA } from '@/data/about';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const AboutCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-atmospheric text-white">
      {/* Top Gold Glowing Divider */}
      <div className="section-divider-glow absolute top-0 left-0 right-0 z-10" />

      {/* Atmospheric lighting accents */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#F4B72F]/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-academic-grid-dark opacity-30 pointer-events-none" />

      <Container size="narrow" className="relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#F4B72F]/40 text-[#F4B72F] mb-5 shadow-xs text-xs font-bold tracking-wider uppercase backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72F] animate-pulse" />
            <span>Begin With Confidence</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="section-headline text-white font-extrabold tracking-tight"
          >
            {aboutFinalCTA.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg text-[#BACCE4] max-w-xl mx-auto leading-relaxed"
          >
            {aboutFinalCTA.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href={aboutFinalCTA.primaryCta.href}
              variant="gold"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-bold shadow-xl"
            >
              {aboutFinalCTA.primaryCta.label}
            </Button>

            <Button
              href={aboutFinalCTA.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white/25 hover:border-[#F4B72F] hover:bg-white/10"
            >
              {aboutFinalCTA.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
