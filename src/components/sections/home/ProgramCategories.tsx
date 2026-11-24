'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { academicCategoriesData } from '@/data/home';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion';

export const ProgramCategories: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-white border-b border-[#DCE3FF]/40 overflow-hidden">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-[#182A9A]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-[#101F70]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="ACADEMIC DISCIPLINES"
            title="Browse Guidance by Academic Category"
            highlightWords="Academic Category"
            description="Explore specialized pathways structured around distinct scholastic objectives, from foundational undergraduate degrees to advanced doctoral research."
            className="mb-0"
          />

          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#101F70] hover:text-[#182A9A] transition-colors shrink-0 pb-1"
          >
            <span>Explore All 15 Disciplines</span>
            <ArrowRight className="h-4 w-4 text-[#182A9A] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Tiles Grid with Framer Motion Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {academicCategoriesData.map((item) => {
            const categoryUrl =
              item.slug === 'doctorate'
                ? '/programs#doctorate'
                : item.slug === 'certifications'
                ? '/programs#certifications'
                : `/program-categories/${item.slug}`;

            return (
              <motion.div key={item.id} variants={staggerItem} className="h-full">
                <Link
                  href={categoryUrl}
                  className="group relative flex flex-col h-full rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#182A9A] hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Clean Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101F70]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                    />
                  </div>

                  {/* Card Content Area Below Image */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      {/* Category Label & Track Count Pill */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold text-[#182A9A] uppercase tracking-wider">
                          {item.category} Track
                        </span>
                        <span className="text-[10px] font-extrabold text-[#101F70] bg-[#DCE3FF] px-2.5 py-0.5 rounded-full border border-[#DCE3FF]">
                          {item.trackCount}
                        </span>
                      </div>

                      {/* Category Title */}
                      <h3 className="text-lg font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed line-clamp-3 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Navigation Affordance */}
                    <div className="mt-5 pt-3 border-t border-[#DCE3FF]/40 flex items-center justify-between text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                      <span className="group-hover:text-[#182A9A] transition-colors">
                        Explore {item.category}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#F3F5FF] text-[#182A9A] group-hover:bg-[#182A9A] group-hover:text-white flex items-center justify-center transition-all border border-[#DCE3FF]">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
