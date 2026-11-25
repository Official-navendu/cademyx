'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { SUBJECT_CATEGORIES, DOCTORATE_TRACKS_META, CERTIFICATION_TRACKS_META } from '@/data/categories';

export interface ProgramsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramsMegaMenu: React.FC<ProgramsMegaMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-0 right-0 w-full bg-white border-b border-[#DCE3FF] shadow-2xl z-50 overflow-hidden"
          role="region"
          aria-label="Academic Programs Navigation"
        >
          {/* Subtle top hairline */}
          <div className="h-1 w-full bg-gradient-to-r from-[#182A9A] via-[#101F70] to-[#182A9A]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* ========================================================= */}
            {/* FIRST: Doctorate Programs (Visually Prominent Highlight) */}
            {/* ========================================================= */}
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F3F5FF] via-white to-[#F3F5FF] border border-[#182A9A]/25 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#182A9A]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 pl-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#182A9A] text-white shadow-2xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#101F70]">
                        Doctorate Programs
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#182A9A] text-white text-[9px] font-extrabold uppercase tracking-wider shadow-2xs">
                        Featured &amp; Prestigious
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6573A8]">
                      Distinguished terminal doctorates, honorary recognitions, and executive research tracks
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#182A9A] bg-white px-2.5 py-1 rounded-full border border-[#DCE3FF] hidden sm:inline-block">
                  3 Terminal Tracks
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-2">
                {DOCTORATE_TRACKS_META.map((track) => (
                  <Link
                    key={track.slug}
                    href={`/programs/${track.slug}`}
                    onClick={onClose}
                    className="group flex items-center justify-between p-3 rounded-xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-md transition-all duration-200"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors block truncate">
                        {track.title}
                      </span>
                      <span className="text-[10px] text-[#6573A8]">View Doctoral Track</span>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#182A9A] text-white uppercase tracking-wider shrink-0 shadow-2xs">
                      {track.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ========================================================= */}
            {/* SECOND & THIRD: Subject-Based Programs & Certifications   */}
            {/* ========================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* SECOND: 15 Subject-Based Programme Categories (8 of 12 columns) */}
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DCE3FF]/60">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#F3F5FF] text-[#182A9A]">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#101F70]">
                        Subject-Based Programs
                      </h4>
                      <p className="text-[11px] text-[#6573A8]">
                        15 academic disciplines spanning comprehensive degree pathways
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/programs"
                    onClick={onClose}
                    className="text-xs font-bold text-[#182A9A] hover:text-[#101F70] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View All 15 Disciplines</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 15 Categories Grid (3 columns x 5 rows) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {SUBJECT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/program-categories/${cat.slug}`}
                      onClick={onClose}
                      className="group p-2.5 rounded-xl hover:bg-[#F3F5FF] border border-transparent hover:border-[#DCE3FF] transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors line-clamp-1">
                          {cat.name}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#6573A8] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <span className="text-[11px] text-[#6573A8] line-clamp-1 mt-0.5">
                        {cat.popularCourses.map((c) => c.title).slice(0, 2).join(' • ')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* THIRD: Certifications (4 of 12 columns) */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-[#F3F5FF]/80 p-5 border border-[#DCE3FF]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DCE3FF]/60">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#182A9A]" />
                      <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#101F70]">
                        Certifications
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#182A9A]/10 text-[#182A9A] text-[10px] font-extrabold uppercase tracking-wider">
                      4 Tracks
                    </span>
                  </div>

                  <div className="space-y-2">
                    {CERTIFICATION_TRACKS_META.map((track) => (
                      <Link
                        key={track.slug}
                        href={`/programs/${track.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#F3F5FF] border border-[#DCE3FF] hover:border-[#182A9A] transition-all"
                      >
                        <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors truncate pr-1">
                          {track.title}
                        </span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#101F70] text-white uppercase tracking-wider shrink-0">
                          {track.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#DCE3FF]/60 text-center">
                  <Link
                    href="/programs#certifications"
                    onClick={onClose}
                    className="text-xs font-bold text-[#182A9A] hover:text-[#101F70] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Explore Certification Syllabi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Clean CTAs */}
            <div className="mt-8 pt-5 border-t border-[#DCE3FF]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#6573A8]">
                <Sparkles className="w-3.5 h-3.5 text-[#182A9A]" />
                <span>15 Subject Categories • 3 Doctorate Tracks • 4 Professional Certifications</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/programs"
                  onClick={onClose}
                  className="text-xs font-bold text-[#101F70] hover:text-[#182A9A] transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Full Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/schedule-a-consultation"
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-xl bg-[#101F70] hover:bg-[#182A9A] text-white text-xs font-semibold transition-colors"
                >
                  Book Advisory Session
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
