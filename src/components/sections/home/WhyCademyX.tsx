'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { whyCademyXFeatures } from '@/data/home';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const WhyCademyX: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-academic-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-l from-[#F4B72F]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <SectionHeading
          eyebrow="THE CADEMYX ADVANTAGE"
          title="Why Scholars Choose Our Advisory Architecture"
          highlightWords="Advisory Architecture"
          description="We combine diagnostic depth, structured roadmaps, and dedicated mentorship to provide true academic direction."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {whyCademyXFeatures.map((feature) => (
            <motion.div key={feature.id} variants={staggerItem} className="h-full">
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
