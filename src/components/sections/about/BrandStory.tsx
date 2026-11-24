'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { brandStoryData } from '@/data/about';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const BrandStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-18 sm:py-24 bg-white border-b border-[#DCE3FF] bg-grain">
      {/* Decorative ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#182A9A]/5 blur-3xl"
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-[#182A9A] mb-3 text-xs font-bold tracking-widest uppercase"
          >
            <Sparkles className="w-3 h-3 text-[#182A9A]" />
            <span>{brandStoryData.eyebrow}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="section-headline text-[#101F70] font-extrabold tracking-tight"
          >
            Transforming Academic Ambition Into{' '}
            <span className="text-[#182A9A]">Purposeful Direction</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-6 text-base sm:text-lg text-[#26345C] leading-relaxed"
        >
          {brandStoryData.paragraphs.map((para, index) => (
            <motion.p key={index} variants={fadeUp} className="text-justify sm:text-left">
              {para}
            </motion.p>
          ))}
        </motion.div>

        {/* Featured Philosophy Callout Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#101F70] via-[#101F70] to-[#0D1959] text-white border border-[#DCE3FF]/20 shadow-2xl overflow-hidden"
        >
          {/* Subtle blue line & watermark */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#182A9A] via-[#DCE3FF] to-[#182A9A]" />
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#182A9A]/20 blur-2xl pointer-events-none" />
          <Quote
            className="absolute right-6 top-6 h-24 w-24 text-white/[0.04] stroke-[1] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#182A9A] text-white flex items-center justify-center shrink-0 shadow-md">
              <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-medium text-white/95 italic leading-relaxed">
                {brandStoryData.quote}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-gradient-to-r from-[#182A9A] to-[#DCE3FF]" />
                <p className="text-xs sm:text-sm font-bold tracking-wider text-[#DCE3FF] uppercase">
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
