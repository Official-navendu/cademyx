'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

const WELCOME_POPUP_STORAGE_KEY = 'cademyx_welcome_popup_dismissed_v1';

export const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    try {
      localStorage.setItem(WELCOME_POPUP_STORAGE_KEY, new Date().toISOString());
    } catch (err) {
      console.warn('[CademyX Welcome Popup Save Error]:', err);
    }
  }, []);

  useEffect(() => {
    // Check if user has already dismissed or interacted with the welcome popup
    try {
      const dismissed = localStorage.getItem(WELCOME_POPUP_STORAGE_KEY);
      if (!dismissed) {
        // Delay appearance by 1.8 seconds so the initial page render is completely unhindered
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1800);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.warn('[CademyX Welcome Popup Storage Error]:', err);
    }
  }, []);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keyboard Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleDismiss]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-popup-heading"
        className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto"
      >
        {/* Subtle Backdrop with slight blur so underlying page context remains visible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#061B35]/65 backdrop-blur-[2px] transition-opacity"
          onClick={handleDismiss}
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl lg:max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_24px_50px_-12px_rgba(6,27,53,0.35)] border border-[#E2E8F0] overflow-hidden my-auto max-h-[92vh] flex flex-col z-10 text-[#152C45]"
        >
          {/* Top Gold Glowing Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#061B35] via-[#075AC8] to-[#F4B72F] z-20" />

          {/* Close Button */}
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Close welcome popup"
            className="absolute top-3.5 right-3.5 z-30 min-h-[38px] min-w-[38px] p-2 rounded-full bg-white/90 hover:bg-slate-100 text-[#061B35] border border-slate-200/90 shadow-xs flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#F4B72F]"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
            {/* Left Column: Brand & Editorial Guidance */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                {/* Official CademyX Header Logo */}
                <div className="mb-5 sm:mb-6">
                  <div className="inline-block p-1">
                    <Image
                      src="/assets/logo.png"
                      alt="CademyX"
                      width={180}
                      height={55}
                      priority
                      className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Eyebrow Text */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99519]" />
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#D99519]">
                    YOUR ACADEMIC JOURNEY STARTS HERE
                  </p>
                </div>

                {/* Main Heading */}
                <h2
                  id="welcome-popup-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#061B35] tracking-tight leading-tight mb-3"
                >
                  Welcome to CademyX
                </h2>

                {/* Supporting Text */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mb-5">
                  Explore academic pathways and discover the right direction for your future with
                  personalized academic guidance.
                </p>

                {/* Key Pillars */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#075AC8] shrink-0 mt-0.5" />
                    <span>Curated Bachelor, Master, Executive MBA &amp; Doctorate roadmaps</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#075AC8] shrink-0 mt-0.5" />
                    <span>One-on-one advisory tailored to your academic background</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Micro-line */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  {/* Primary CTA: Explore Programs */}
                  <Link
                    href="/programs"
                    onClick={handleDismiss}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F4B72F] to-[#D99519] hover:from-[#E5A00F] hover:to-[#C68000] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98] text-center"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Secondary CTA: Schedule a Consultation */}
                  <Link
                    href="/schedule-a-consultation"
                    onClick={handleDismiss}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#061B35] font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-colors text-center"
                  >
                    <Calendar className="w-4 h-4 text-[#075AC8]" />
                    <span>Schedule a Consultation</span>
                  </Link>
                </div>

                {/* Supporting Micro-line */}
                <div className="mt-4 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] sm:text-xs text-[#64748B]">
                  <span className="font-medium">Thoughtful guidance. Clearer academic decisions.</span>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="text-[#64748B] hover:text-[#061B35] hover:underline transition-colors cursor-pointer"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Academic Advisory Imagery */}
            <div className="md:col-span-5 relative bg-[#061B35] hidden md:block min-h-[420px]">
              <Image
                src="/assets/images/hero/hero-slide-3.jpg"
                alt="Academic mentor advising a student during a personal consultation at CademyX"
                fill
                priority
                sizes="(max-width: 1024px) 42vw, 380px"
                className="object-cover object-center"
              />
              {/* Subtle gradient vignette to blend with CademyX navy theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/85 via-[#061B35]/20 to-transparent" />

              {/* Floating editorial caption at bottom of image */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#061B35]/85 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-1.5 text-[#F4B72F] text-[10px] font-bold uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Strategic Mentorship</span>
                </div>
                <p className="text-xs text-white/90 font-medium leading-snug">
                  Personalized consultation to align your career ambitions with global academic standards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

