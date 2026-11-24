'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F3F5FF] border-b border-[#DCE3FF] overflow-hidden bg-grain">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-r from-[#182A9A]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#182A9A]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="SCHOLAR PERSPECTIVES"
            title="Reflections on the CademyX Experience"
            highlightWords="CademyX Experience"
            description="Read feedback from candidates and families on our structured guidance, academic roadmaps, and advisory support."
            align="center"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Blue Hover Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#182A9A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] group-hover:bg-[#101F70] group-hover:text-white transition-colors">
                    <Quote className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-1 text-[#182A9A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#182A9A] text-[#182A9A]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#26345C] leading-relaxed italic font-normal">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#DCE3FF]/40 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#101F70]">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm text-[#6573A8] mt-0.5">{testimonial.role}</p>
                  {testimonial.institution && (
                    <p className="text-xs text-[#182A9A] font-semibold mt-1">
                      {testimonial.institution}
                    </p>
                  )}
                </div>
                {testimonial.cohortYear && (
                  <span className="shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F3F5FF] text-[#6573A8] border border-[#DCE3FF]">
                    {testimonial.cohortYear}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
