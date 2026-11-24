'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, Globe, GraduationCap, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whoWeServeAudiences } from '@/data/about';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

const audienceIcons: Record<string, LucideIcon> = {
  BookOpen,
  Microscope,
  Globe,
  GraduationCap,
};

export const WhoWeServe: React.FC = () => {
  return (
    <section className="py-18 sm:py-24 bg-white border-b border-[#DCE3FF] relative overflow-hidden bg-grain">
      <Container size="default" className="relative z-10">
        <SectionHeading
          eyebrow="AUDIENCE & SCOPE"
          title="Who We Guide"
          highlightWords="Guide"
          description="Our advisory frameworks support ambitious learners across crucial scholastic inflection points."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whoWeServeAudiences.map((aud) => {
            const IconComponent = audienceIcons[aud.iconName] || BookOpen;

            return (
              <motion.div
                key={aud.title}
                variants={fadeUp}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] hover:border-[#182A9A] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Blue hairline indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#182A9A] to-[#182A9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#101F70] to-[#182A9A] text-white flex items-center justify-center mb-5 border border-[#182A9A] shadow-sm group-hover:scale-108 transition-transform">
                  <IconComponent className="h-5 w-5" />
                </div>

                <span className="text-xs font-bold text-[#182A9A] bg-[#F3F5FF] px-2.5 py-0.5 rounded-full border border-[#DCE3FF] tracking-wider uppercase mb-3 inline-block w-fit">
                  {aud.focus}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#101F70] mb-2 leading-snug">
                  {aud.title}
                </h3>

                <p className="text-sm text-[#26345C] leading-relaxed flex-1">
                  {aud.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
