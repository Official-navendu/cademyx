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
    <section className="relative py-20 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden bg-grain">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-[#F4B72F]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-[#061B35]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

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
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#061B35] hover:text-[#075AC8] transition-colors shrink-0 pb-1"
          >
            <span className="gold-gradient-text">Explore All 4 Categories</span>
            <ArrowRight className="h-4 w-4 text-[#F4B72F] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Category Tiles Grid with Framer Motion Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {academicCategoriesData.map((item) => {
            const categoryUrl = `/program-categories/${item.slug}`;

            return (
              <motion.div key={item.id} variants={staggerItem} className="h-full">
                <Link
                  href={categoryUrl}
                  className="group relative flex flex-col h-full rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F4B72F] hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#F4B72F] hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Completely Clean Image Header — No overlaid text or badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#061B35]">
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
                        <span className="text-[11px] font-bold text-[#075AC8] uppercase tracking-wider">
                          {item.category} Track
                        </span>
                        <span className="text-[10px] font-extrabold text-[#D99519] bg-[#FEF8E9] px-2.5 py-0.5 rounded-full border border-[#F4B72F]/30">
                          {item.trackCount}
                        </span>
                      </div>

                      {/* Category Title */}
                      <h3 className="text-lg font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#152C45] leading-relaxed line-clamp-3 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Navigation Affordance */}
                    <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors">
                      <span className="group-hover:text-[#F4B72F] transition-colors">
                        Explore {item.category}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#FEF8E9] text-[#D99519] group-hover:bg-[#F4B72F] group-hover:text-white flex items-center justify-center transition-all">
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
