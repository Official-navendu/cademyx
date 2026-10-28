'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { brandStoryData } from '@/data/about';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const BrandStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-18 sm:py-24 bg-white border-b border-[#E2E8F0]/80 bg-grain">
      {/* Decorative ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#F4B72F]/5 blur-3xl"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B72F]/10 border border-[#F4B72F]/30 text-[#D99519] mb-3 text-xs font-bold tracking-widest uppercase"
          >
            <Sparkles className="w-3 h-3 text-[#F4B72F]" />
            <span>{brandStoryData.eyebrow}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="section-headline text-[#061B35] font-extrabold tracking-tight"
          >
            Transforming Academic Ambition Into{' '}
            <span className="gold-gradient-text">Purposeful Direction</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-6 text-base sm:text-lg text-[#475569] leading-relaxed"
        >
          {brandStoryData.paragraphs.map((para, index) => (
            <motion.p key={index} variants={fadeUp} className="text-justify sm:text-left">
              {para}
            </motion.p>
          ))}
        </motion.div>

        {/* Featured Philosophy Callout Box with Luxury Styling */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#061B35] via-[#061B35] to-[#112347] text-white border border-[#F4B72F]/35 shadow-2xl overflow-hidden"
        >
          {/* Subtle gold line & watermark */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4B72F] via-[#F4B72F] to-[#F4B72F]" />
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#F4B72F]/10 blur-2xl pointer-events-none" />
          <Quote
            className="absolute right-6 top-6 h-24 w-24 text-white/[0.04] stroke-[1] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4B72F] to-[#B47B0B] text-[#061B35] flex items-center justify-center shrink-0 shadow-md">
              <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-medium text-white/95 italic leading-relaxed">
                {brandStoryData.quote}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-gradient-to-r from-[#F4B72F] to-[#F4B72F]" />
                <p className="text-xs sm:text-sm font-bold tracking-wider gold-gradient-text uppercase">
                  {brandStoryData.quoteAuthor}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
