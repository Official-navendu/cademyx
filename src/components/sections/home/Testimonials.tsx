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
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#FAFCFF] border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-r from-[#F4B72F]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#075AC8]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="SCHOLAR PERSPECTIVES"
            title="Reflections on the CademyX Experience"
            highlightWords="CademyX Experience"
            description="Read how our structured guidance, research mentorship, and advisory milestones empower learners."
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
              className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#F4B72F]/70 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Gold Hover Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#061B35]/5 border border-[#061B35]/10 flex items-center justify-center text-[#061B35] group-hover:bg-[#061B35] group-hover:text-[#F4B72F] transition-colors">
                    <Quote className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-1 text-[#F4B72F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#F4B72F] text-[#F4B72F]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#152C45] leading-relaxed italic font-normal">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#EDF2F7] flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#061B35]">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm text-[#5A6A85] mt-0.5">{testimonial.role}</p>
                  {testimonial.institution && (
                    <p className="text-xs text-[#075AC8] font-semibold mt-1">
                      {testimonial.institution}
                    </p>
                  )}
                </div>
                {testimonial.cohortYear && (
                  <span className="shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F8FAFC] text-[#5A6A85] border border-[#E2E8F0]">
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
