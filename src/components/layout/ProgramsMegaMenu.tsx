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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Group A: 15 Subject-Based Programme Categories (8 of 12 columns) */}
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DCE3FF]/60">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#F3F5FF] text-[#182A9A]">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#101F70]">
                        Subject-Based Categories
                      </h3>
                      <p className="text-xs text-[#6573A8]">
                        15 academic disciplines spanning undergraduate &amp; postgraduate degrees
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/programs#disciplines"
                    onClick={onClose}
                    className="text-xs font-bold text-[#182A9A] hover:text-[#101F70] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View All 15</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 15 Categories Grid (3 columns x 5 rows) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
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
                        {cat.popularCourses.map((c) => c.title).slice(0, 3).join(' • ')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar: Group B (Doctorate) & Group C (Certifications) (4 of 12 columns) */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-[#F3F5FF]/80 p-6 border border-[#DCE3FF]">
                
                {/* Group B: Doctorate — 3 Tracks */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DCE3FF]/60">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#182A9A]" />
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#101F70]">
                        Doctorate
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#182A9A]/10 text-[#182A9A] text-[10px] font-extrabold uppercase tracking-wider">
                      3 Tracks
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {DOCTORATE_TRACKS_META.map((track) => (
                      <Link
                        key={track.slug}
                        href={`/programs/${track.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-[#DCE3FF] transition-all"
                      >
                        <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                          {track.title}
                        </span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#182A9A] text-white uppercase tracking-wider">
                          {track.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Group C: Certifications — 4 Tracks */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DCE3FF]/60">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#182A9A]" />
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#101F70]">
                        Certifications
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#182A9A]/10 text-[#182A9A] text-[10px] font-extrabold uppercase tracking-wider">
                      4 Tracks
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {CERTIFICATION_TRACKS_META.map((track) => (
                      <Link
                        key={track.slug}
                        href={`/programs/${track.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-[#DCE3FF] transition-all"
                      >
                        <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                          {track.title}
                        </span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#101F70] text-white uppercase tracking-wider">
                          {track.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
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
