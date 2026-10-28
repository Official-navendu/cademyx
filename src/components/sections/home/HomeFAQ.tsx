'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { homeFAQs } from '@/data/faqs';
import { fadeUp, defaultViewport } from '@/lib/motion';

export const HomeFAQ: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F5F7FB] border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F4B72F]/[0.05] to-[#061B35]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Questions About Our Academic Guidance"
          highlightWords="Academic Guidance"
          description="Clear answers regarding our curriculum tracks, mentorship structure, and admissions advisory process."
          align="center"
        />

        {/* 2-Column Desktop Grid, Single-Column Mobile */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start"
        >
          {/* Column 1 (Left 5 FAQs) */}
          <div>
            <Accordion items={homeFAQs.slice(0, 5)} defaultOpenId="faq-1" />
          </div>

          {/* Column 2 (Right 5 FAQs) */}
          <div>
            <Accordion items={homeFAQs.slice(5, 10)} defaultOpenId="" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
