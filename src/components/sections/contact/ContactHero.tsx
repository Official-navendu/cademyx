'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, CheckCircle2, ShieldCheck, Compass, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { contactPageData } from '@/data/contact';
import { staggerContainer, fadeUp, scaleReveal, pulseGlow } from '@/lib/motion';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#101F70] py-6 sm:py-8 lg:py-10 border-b border-[#DCE3FF]/20 bg-grain text-white">
      {/* Background Illumination & Academic Lighting */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#182A9A]/30 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#182A9A]/30 blur-2xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-academic-grid-dark opacity-45 pointer-events-none" />

      {/* Top Hairline Sheen */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DCE3FF]/30 to-transparent pointer-events-none" />

      <Container size="default" className="relative z-10">
        <Breadcrumbs
          items={[{ label: 'Contact Us' }]}
          className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#DCE3FF] [&_span]:text-slate-100"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Heading, Subheading & Reassuring Guidance */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1959]/90 border border-[#DCE3FF]/30 text-xs font-bold mb-3 shadow-xs backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DCE3FF]" />
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#DCE3FF]">
                {contactPageData.hero.eyebrow}
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              variants={fadeUp}
              className="hero-headline text-white font-extrabold tracking-tight leading-[1.1]"
            >
              Let&apos;s Talk About Your{' '}
              <span className="text-[#DCE3FF] relative inline-block">
                Next Academic Step
                <span
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#182A9A] via-[#DCE3FF] to-[#182A9A] rounded-full"
                  aria-hidden="true"
                />
              </span>
              .
            </motion.h1>

            {/* Short Supporting Copy */}
            <motion.p
              variants={fadeUp}
              className="mt-3 sm:mt-3.5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl font-normal"
            >
              {contactPageData.hero.subheading}
            </motion.p>

            {/* Concise Advisory Guidance Points */}
            <motion.div
              variants={fadeUp}
              className="mt-4 sm:mt-5 space-y-2.5 w-full max-w-lg text-xs sm:text-sm text-slate-200"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DCE3FF] shrink-0" />
                <span>Tailored guidance for Doctorates, Masters, and Certifications</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#DCE3FF] shrink-0" />
                <span>Transparent academic roadmap with zero sales pressure</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#DCE3FF] shrink-0" />
                <span>Evaluation of eligibility, research interests, and milestones</span>
              </div>
            </motion.div>

            {/* Action CTA: Scroll to Consultation Form */}
            <motion.div variants={fadeUp} className="mt-5 sm:mt-6 flex items-center gap-4">
              <Button
                href="#consultation-form"
                variant="primary"
                size="lg"
                trailingIcon={<ArrowDown className="h-4 w-4" />}
                className="font-extrabold shadow-xl hover:shadow-2xl"
              >
                Send an Inquiry
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Premium Sculpted Consultation Lounge Visual */}
          <motion.div
            variants={scaleReveal}
            className="lg:col-span-5 relative flex items-center justify-center pt-2 sm:pt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-[460px]">
              {/* Backlight Glow */}
              <motion.div
                variants={pulseGlow}
                animate="animate"
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#182A9A]/30 via-[#101F70]/40 to-transparent blur-2xl pointer-events-none"
              />

              {/* Offset Frame */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-2xl border border-[#DCE3FF]/30 pointer-events-none transition-transform duration-500" />

              {/* Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCE3FF]/40 shadow-2xl bg-[#101F70] p-1.5 group">
                <div className="aspect-[4/3] relative w-full rounded-xl overflow-hidden bg-[#101F70]">
                  <Image
                    src="/assets/images/hero/contact-hero.jpg"
                    alt="CademyX Welcoming Modern Academic Consultation Lounge and Advisory Setting"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark Navy Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/90 via-[#101F70]/25 to-transparent pointer-events-none" />

                  {/* Corner Accent L-bracket marks */}
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#DCE3FF]/80 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#DCE3FF]/80 pointer-events-none" />
                </div>

                {/* Floating Academic Advisory Micro-Panel */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#101F70]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#DCE3FF]/30 shadow-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#182A9A] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold text-white leading-tight">1-on-1 Advisory</p>
                      <p className="text-[10px] text-[#DCE3FF]">100% Confidential Consultation</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300 bg-white/10 px-2 py-0.5 rounded-md border border-white/15">
                    Fast Response
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
