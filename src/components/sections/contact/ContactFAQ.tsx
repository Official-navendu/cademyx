'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { contactFAQs } from '@/data/faqs';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const ContactFAQ: React.FC = () => {
  return (
    <section className="py-18 sm:py-24 bg-[#F5F7FB] border-t border-[#E2E8F0]/80 relative overflow-hidden bg-academic-grid">
      <Container size="narrow" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <SectionHeading
            eyebrow="INQUIRY QUESTIONS"
            title="What to Expect Next"
            highlightWords="Expect"
            description="Answers to common questions regarding consultation scheduling, advisor reviews, and international availability."
            align="center"
          />

          <motion.div variants={fadeUp} className="mt-8">
            <Accordion items={contactFAQs} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
