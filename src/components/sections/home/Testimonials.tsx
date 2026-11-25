'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Auto-advance mobile slider every 3.5s unless paused or prefers-reduced-motion is active
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) {
      // Swipe left -> Next
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    } else if (diff < -40) {
      // Swipe right -> Prev
      setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    }
    setTouchStart(null);
  };

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

        {/* Desktop View: 3-Column Grid (Unchanged) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
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

        {/* Mobile View: Smooth Touch Auto-Slider */}
        <div
          className="block md:hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialsData[activeIndex].id}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -25 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#DCE3FF] shadow-sm overflow-hidden min-h-[300px]"
              >
                {/* Top Blue Indicator Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-9 w-9 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A]">
                      <Quote className="h-4.5 w-4.5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="flex items-center gap-1 text-[#182A9A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#182A9A] text-[#182A9A]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#26345C] leading-relaxed italic font-normal">
                    &ldquo;{testimonialsData[activeIndex].quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE3FF]/40 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#101F70]">
                      {testimonialsData[activeIndex].author}
                    </h4>
                    <p className="text-xs text-[#6573A8] mt-0.5">
                      {testimonialsData[activeIndex].role}
                    </p>
                    {testimonialsData[activeIndex].institution && (
                      <p className="text-[11px] text-[#182A9A] font-semibold mt-0.5">
                        {testimonialsData[activeIndex].institution}
                      </p>
                    )}
                  </div>
                  {testimonialsData[activeIndex].cohortYear && (
                    <span className="shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F3F5FF] text-[#6573A8] border border-[#DCE3FF]">
                      {testimonialsData[activeIndex].cohortYear}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtle Mobile Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 bg-[#182A9A]'
                    : 'w-2 bg-[#DCE3FF] hover:bg-[#6573A8]'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
