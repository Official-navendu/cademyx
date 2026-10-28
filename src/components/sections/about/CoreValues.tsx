'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValueCard } from '@/components/cards/ValueCard';
import { coreValuesData } from '@/data/about';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const CoreValues: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F5F7FB] border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-l from-[#F4B72F]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <SectionHeading
          eyebrow="GUIDING PRINCIPLES"
          title="Core Values That Shape Our Guidance"
          highlightWords="Core Values"
          description="Every strategic decision, student evaluation, and institutional recommendation is governed by these core tenets."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {coreValuesData.map((val) => (
            <motion.div key={val.id} variants={staggerItem} className="h-full">
              <ValueCard value={val} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
