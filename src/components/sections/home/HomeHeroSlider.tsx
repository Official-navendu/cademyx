'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlide {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    src: '/assets/images/hero/hero-slide-1.jpg',
    alt: 'Confident university student on historic collegiate campus holding academic materials',
    caption: 'Campus Excellence & Collegiate Admissions',
  },
  {
    id: 2,
    src: '/assets/images/hero/hero-slide-2.jpg',
    alt: 'Scholar exploring research and academic opportunities in modern university library',
    caption: 'Scholarly Research & Academic Literature',
  },
  {
    id: 3,
    src: '/assets/images/hero/hero-slide-3.jpg',
    alt: 'One-on-one academic mentoring and advisory consultation in a professional study',
    caption: 'Personalized Mentorship & Strategic Guidance',
  },
  {
    id: 4,
    src: '/assets/images/hero/hero-slide-4.jpg',
    alt: 'Diverse collaborative group of students discussing academic projects in campus atrium',
    caption: 'Collaborative Learning & Cohort Success',
  },
];

export const HomeHeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll-linked progress for the layered stack animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll transformations for the main card and background stack
  const mainCardY = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const mainCardScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  const stackCard1Y = useTransform(scrollYProgress, [0, 1], [14, -8]);
  const stackCard1Scale = useTransform(scrollYProgress, [0, 1], [0.94, 0.98]);
  const stackCard1Rotate = useTransform(scrollYProgress, [0, 1], [-1.8, 0.8]);

  const stackCard2Y = useTransform(scrollYProgress, [0, 1], [24, -14]);
  const stackCard2Scale = useTransform(scrollYProgress, [0, 1], [0.89, 0.94]);
  const stackCard2Rotate = useTransform(scrollYProgress, [0, 1], [2.2, -1]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay timer with pause on hover & pause on document hidden
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5200);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation when slider is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Indices for background stack preview cards
  const nextIdx1 = (current + 1) % HERO_SLIDES.length;
  const nextIdx2 = (current + 2) % HERO_SLIDES.length;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="CademyX Campus Life and Mentorship Highlights"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-[620px] lg:max-w-[640px] xl:max-w-[670px] mx-auto group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B72F] rounded-2xl sm:rounded-3xl pt-3 pb-2"
    >
      {/* Scroll-Linked Stack Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
        {/* Layer 2: Deepest Stack Card (Hidden on reduced motion) */}
        {!prefersReducedMotion && (
          <motion.div
            style={{
              y: stackCard2Y,
              scale: stackCard2Scale,
              rotate: stackCard2Rotate,
            }}
            className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm pointer-events-none -z-20 hidden md:block select-none"
            aria-hidden="true"
          >
            <Image
              src={HERO_SLIDES[nextIdx2].src}
              alt=""
              fill
              sizes="300px"
              className="object-cover opacity-50 filter blur-[1px]"
            />
          </motion.div>
        )}

        {/* Layer 1: Mid Stack Card (Hidden on reduced motion) */}
        {!prefersReducedMotion && (
          <motion.div
            style={{
              y: stackCard1Y,
              scale: stackCard1Scale,
              rotate: stackCard1Rotate,
            }}
            className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md pointer-events-none -z-10 hidden sm:block select-none"
            aria-hidden="true"
          >
            <Image
              src={HERO_SLIDES[nextIdx1].src}
              alt=""
              fill
              sizes="400px"
              className="object-cover opacity-70 filter blur-[0.5px]"
            />
          </motion.div>
        )}

        {/* Top Active Card with Scroll Lift & Smooth Bright Crossfade */}
        <motion.div
          style={prefersReducedMotion ? {} : { y: mainCardY, scale: mainCardScale }}
          className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200/90"
        >
          {/* Seamless Crossfade Image Stack — No Dark Overlays, No Black Gaps */}
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${HERO_SLIDES.length}: ${slide.caption}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 670px"
                  className="object-cover object-center select-none"
                />
              </div>
            );
          })}

          {/* Clean Floating Caption Pill on Bright Background (No dark image overlay) */}
          <div className="absolute bottom-4 left-4 right-20 sm:bottom-6 sm:left-6 z-20 pointer-events-none select-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-[#061B35]">
              <span className="w-2 h-2 rounded-full bg-[#F4B72F] shrink-0" />
              <span className="text-xs font-bold truncate max-w-[240px] sm:max-w-sm">
                {HERO_SLIDES[current].caption}
              </span>
            </div>
          </div>

          {/* Previous Arrow Control */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#061B35] hover:text-[#075AC8] flex items-center justify-center shadow-xl backdrop-blur-xs transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#F4B72F] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          </button>

          {/* Next Arrow Control */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#061B35] hover:text-[#075AC8] flex items-center justify-center shadow-xl backdrop-blur-xs transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#F4B72F] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      {/* Restrained Slide Pagination Indicators */}
      <div
        className="flex items-center justify-center gap-2 mt-4"
        role="tablist"
        aria-label="Hero slider pagination"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B72F] cursor-pointer ${
                isActive
                  ? 'w-8 bg-[#F4B72F] shadow-xs'
                  : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
