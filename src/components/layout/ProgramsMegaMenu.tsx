'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { programs } from '@/data/programs';
import { ProgramCategory } from '@/types/program';
import { cn } from '@/lib/utils';

export interface ProgramsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramsMegaMenu: React.FC<ProgramsMegaMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState<'All' | ProgramCategory>('All');
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setActiveCategoryTab('All');
    }
  }

  // Group programs by category
  const bachelorPrograms = programs.filter((p) => p.category === 'Bachelor');
  const mastersPrograms = programs.filter((p) => p.category === 'Masters');
  const doctoratePrograms = programs.filter((p) => p.category === 'Doctorate');
  const certPrograms = programs.filter((p) => p.category === 'Certifications');

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

  // Helper to chunk Bachelor programs into 4 balanced columns (16 each)
  const bachelorCol1 = bachelorPrograms.slice(0, 16);
  const bachelorCol2 = bachelorPrograms.slice(16, 32);
  const bachelorCol3 = bachelorPrograms.slice(32, 48);
  const bachelorCol4 = bachelorPrograms.slice(48, 64);

  // Helper to chunk Masters programs into 2 balanced columns (14 + 13)
  const mastersCol1 = mastersPrograms.slice(0, 14);
  const mastersCol2 = mastersPrograms.slice(14, 27);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          role="menu"
          aria-label="Academic Programs Mega Menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[min(1280px,calc(100vw-2rem))] max-h-[calc(100vh-5.5rem)] overflow-y-auto overflow-x-hidden flex flex-col bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] z-50 text-[#0F172A] select-none"
        >
          {/* Top Gold Glowing Accent Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#F4B72F] rounded-t-2xl z-30" />

          {/* 1. Category Switcher / Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-3 border-b border-[#F1F5F9] bg-[#F8FAFC]/95 backdrop-blur-md rounded-t-2xl flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B72F] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#061B35]">
                CademyX Academic Directory
              </span>
              <span className="text-[11px] text-[#64748B] font-medium hidden sm:inline">
                ({programs.length} total tracks across 4 degree levels)
              </span>
            </div>

            {/* Category Quick Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveCategoryTab('All')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeCategoryTab === 'All'
                    ? 'bg-[#061B35] text-[#F4B72F] shadow-xs'
                    : 'text-[#64748B] hover:text-[#061B35] hover:bg-white'
                )}
              >
                <span>All Categories</span>
                <span className="text-[10px] opacity-75 font-mono">({programs.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategoryTab('Bachelor')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeCategoryTab === 'Bachelor'
                    ? 'bg-[#FEF8E9] text-[#D99519] border border-[#F4B72F]/40 shadow-xs'
                    : 'text-[#64748B] hover:text-[#061B35] hover:bg-white'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Bachelor</span>
                <span className="text-[10px] opacity-75 font-mono">({bachelorPrograms.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategoryTab('Masters')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeCategoryTab === 'Masters'
                    ? 'bg-[#EFF6FF] text-[#1E40AF] border border-[#2563EB]/40 shadow-xs'
                    : 'text-[#64748B] hover:text-[#061B35] hover:bg-white'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Masters</span>
                <span className="text-[10px] opacity-75 font-mono">({mastersPrograms.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategoryTab('Doctorate')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeCategoryTab === 'Doctorate'
                    ? 'bg-[#F5F3FF] text-[#6B21A8] border border-[#7C3AED]/40 shadow-xs'
                    : 'text-[#64748B] hover:text-[#061B35] hover:bg-white'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Doctorate</span>
                <span className="text-[10px] opacity-75 font-mono">({doctoratePrograms.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategoryTab('Certifications')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeCategoryTab === 'Certifications'
                    ? 'bg-[#ECFDF5] text-[#065F46] border border-[#059669]/40 shadow-xs'
                    : 'text-[#64748B] hover:text-[#061B35] hover:bg-white'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Certifications</span>
                <span className="text-[10px] opacity-75 font-mono">({certPrograms.length})</span>
              </button>
            </div>
          </div>

          {/* 2. Main Programs Grid Container (NO INTERNAL SCROLLING) */}
          <div className="p-5 sm:p-6">
            {activeCategoryTab === 'All' ? (
              /* ========================================================= */
              /* ALL CATEGORIES VIEW: Every single program visible together */
              /* ========================================================= */
              <div className="grid grid-cols-12 gap-5 items-start">
                {/* A. Bachelor Programs (6 Columns: 4 Sub-Columns of 16 links each) */}
                <div className="col-span-12 xl:col-span-6 bg-[#FCFDFE] p-3.5 rounded-xl border border-[#E2E8F0]/80">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#F1F5F9]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#FEF8E9] text-[#F4B72F] flex items-center justify-center">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <Link
                        href="/programs?category=Bachelor"
                        onClick={onClose}
                        className="text-xs font-extrabold uppercase tracking-wider text-[#061B35] hover:text-[#F4B72F] transition-colors"
                      >
                        Bachelor Programs
                      </Link>
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.2 rounded-full font-mono">
                      {bachelorPrograms.length} Tracks
                    </span>
                  </div>

                  {/* 4 Balanced Sub-Columns */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-0.5">
                    {/* Sub-Col 1 */}
                    <div className="space-y-0.5">
                      {bachelorCol1.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          title={`${p.title} (${p.discipline})`}
                          className="px-1.5 py-0.5 rounded text-[11px] font-medium text-[#334155] hover:text-[#061B35] hover:font-bold hover:bg-[#FEF8E9] transition-colors truncate block"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>

                    {/* Sub-Col 2 */}
                    <div className="space-y-0.5">
                      {bachelorCol2.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          title={`${p.title} (${p.discipline})`}
                          className="px-1.5 py-0.5 rounded text-[11px] font-medium text-[#334155] hover:text-[#061B35] hover:font-bold hover:bg-[#FEF8E9] transition-colors truncate block"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>

                    {/* Sub-Col 3 */}
                    <div className="space-y-0.5">
                      {bachelorCol3.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          title={`${p.title} (${p.discipline})`}
                          className="px-1.5 py-0.5 rounded text-[11px] font-medium text-[#334155] hover:text-[#061B35] hover:font-bold hover:bg-[#FEF8E9] transition-colors truncate block"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>

                    {/* Sub-Col 4 */}
                    <div className="space-y-0.5">
                      {bachelorCol4.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          title={`${p.title} (${p.discipline})`}
                          className="px-1.5 py-0.5 rounded text-[11px] font-medium text-[#334155] hover:text-[#061B35] hover:font-bold hover:bg-[#FEF8E9] transition-colors truncate block"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* B. Masters Programs (3.5 Columns: 2 Sub-Columns of 14 links each) */}
                <div className="col-span-12 xl:col-span-3 bg-[#FCFDFE] p-3.5 rounded-xl border border-[#E2E8F0]/80">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#F1F5F9]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </div>
                      <Link
                        href="/programs?category=Masters"
                        onClick={onClose}
                        className="text-xs font-extrabold uppercase tracking-wider text-[#061B35] hover:text-[#2563EB] transition-colors"
                      >
                        Masters Programs
                      </Link>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2 py-0.2 rounded-full font-mono">
                      {mastersPrograms.length} Tracks
                    </span>
                  </div>

                  {/* 2 Balanced Sub-Columns */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                    {/* Sub-Col 1 */}
                    <div className="space-y-0.5">
                      {mastersCol1.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          title={`${p.title} (${p.discipline})`}
                          className="px-1.5 py-0.5 rounded text-[11px] font-medium text-[#334155] hover:text-[#061B35] hover:font-bold hover:bg-[#EFF6FF] transition-colors truncate block"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>

                    {/* Sub-Col 2 */}
                    <div className="space-y-0.5">
                      {mastersCol2.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          title={`${p.title} (${p.discipline})`}
                          className="px-1.5 py-0.5 rounded text-[11px] font-medium text-[#334155] hover:text-[#061B35] hover:font-bold hover:bg-[#EFF6FF] transition-colors truncate block"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* C. Doctorate & Certifications (2.5 Columns: Stacked Cleanly) */}
                <div className="col-span-12 xl:col-span-3 space-y-3.5">
                  {/* Doctorate */}
                  <div className="bg-[#FCFDFE] p-3.5 rounded-xl border border-[#E2E8F0]/80">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F1F5F9]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <Link
                          href="/programs?category=Doctorate"
                          onClick={onClose}
                          className="text-xs font-extrabold uppercase tracking-wider text-[#061B35] hover:text-[#7C3AED] transition-colors"
                        >
                          Doctorate
                        </Link>
                      </div>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200/60 px-2 py-0.2 rounded-full font-mono">
                        {doctoratePrograms.length} Tracks
                      </span>
                    </div>

                    <div className="space-y-1">
                      {doctoratePrograms.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          className="group flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-[#F5F3FF] transition-colors"
                        >
                          <span className="text-xs font-bold text-[#061B35] group-hover:text-[#7C3AED] transition-colors truncate">
                            {p.title}
                          </span>
                          {p.badge && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 shrink-0">
                              {p.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-[#FCFDFE] p-3.5 rounded-xl border border-[#E2E8F0]/80">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F1F5F9]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#ECFDF5] text-[#059669] flex items-center justify-center">
                          <Award className="w-3.5 h-3.5" />
                        </div>
                        <Link
                          href="/programs?category=Certifications"
                          onClick={onClose}
                          className="text-xs font-extrabold uppercase tracking-wider text-[#061B35] hover:text-[#059669] transition-colors"
                        >
                          Certifications
                        </Link>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.2 rounded-full font-mono">
                        {certPrograms.length} Tracks
                      </span>
                    </div>

                    <div className="space-y-1">
                      {certPrograms.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          className="group flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-[#ECFDF5] transition-colors"
                        >
                          <span className="text-xs font-bold text-[#061B35] group-hover:text-[#059669] transition-colors truncate">
                            {p.title}
                          </span>
                          {p.badge && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 shrink-0">
                              {p.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ========================================================= */
              /* SPOTLIGHT CATEGORY VIEW: Multi-Column Detailed Breakdown */
              /* ========================================================= */
              <div>
                {activeCategoryTab === 'Bachelor' && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div>
                        <h3 className="text-base font-extrabold text-[#061B35] flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F4B72F]" />
                          <span>Bachelor Degree Programs</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                            64 Programs across 15 Disciplines
                          </span>
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          Foundational undergraduate degrees engineered for academic excellence, technical mastery, and professional licensures.
                        </p>
                      </div>

                      <Link
                        href="/programs?category=Bachelor"
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B72F] hover:text-[#D99519] transition-colors"
                      >
                        <span>Explore full Bachelor catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 4 Spacious Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Column 1 */}
                      <div className="space-y-1">
                        {bachelorCol1.map((p) => (
                          <Link
                            key={p.id}
                            href={`/programs/${p.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between p-1.5 rounded-lg hover:bg-[#FEF8E9] transition-colors"
                          >
                            <div className="min-w-0 pr-2">
                              <span className="text-xs font-bold text-[#061B35] group-hover:text-[#F4B72F] truncate block">
                                {p.title}
                              </span>
                              <span className="text-[10px] text-[#64748B] block truncate">
                                {p.discipline}
                              </span>
                            </div>
                            {p.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 shrink-0">
                                {p.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-1">
                        {bachelorCol2.map((p) => (
                          <Link
                            key={p.id}
                            href={`/programs/${p.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between p-1.5 rounded-lg hover:bg-[#FEF8E9] transition-colors"
                          >
                            <div className="min-w-0 pr-2">
                              <span className="text-xs font-bold text-[#061B35] group-hover:text-[#F4B72F] truncate block">
                                {p.title}
                              </span>
                              <span className="text-[10px] text-[#64748B] block truncate">
                                {p.discipline}
                              </span>
                            </div>
                            {p.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 shrink-0">
                                {p.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      {/* Column 3 */}
                      <div className="space-y-1">
                        {bachelorCol3.map((p) => (
                          <Link
                            key={p.id}
                            href={`/programs/${p.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between p-1.5 rounded-lg hover:bg-[#FEF8E9] transition-colors"
                          >
                            <div className="min-w-0 pr-2">
                              <span className="text-xs font-bold text-[#061B35] group-hover:text-[#F4B72F] truncate block">
                                {p.title}
                              </span>
                              <span className="text-[10px] text-[#64748B] block truncate">
                                {p.discipline}
                              </span>
                            </div>
                            {p.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 shrink-0">
                                {p.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      {/* Column 4 */}
                      <div className="space-y-1">
                        {bachelorCol4.map((p) => (
                          <Link
                            key={p.id}
                            href={`/programs/${p.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between p-1.5 rounded-lg hover:bg-[#FEF8E9] transition-colors"
                          >
                            <div className="min-w-0 pr-2">
                              <span className="text-xs font-bold text-[#061B35] group-hover:text-[#F4B72F] truncate block">
                                {p.title}
                              </span>
                              <span className="text-[10px] text-[#64748B] block truncate">
                                {p.discipline}
                              </span>
                            </div>
                            {p.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 shrink-0">
                                {p.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeCategoryTab === 'Masters' && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div>
                        <h3 className="text-base font-extrabold text-[#061B35] flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                          <span>Masters & Postgraduate Degree Programs</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                            27 Programs across 10 Disciplines
                          </span>
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          Postgraduate and executive masters in management, technology, sciences, humanities, law, and design.
                        </p>
                      </div>

                      <Link
                        href="/programs?category=Masters"
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                      >
                        <span>Explore full Masters catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {mastersPrograms.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          className="group flex items-start justify-between p-2.5 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB]/50 hover:bg-[#EFF6FF] hover:shadow-xs transition-all"
                        >
                          <div className="min-w-0 pr-2">
                            <span className="text-xs font-bold text-[#061B35] group-hover:text-[#2563EB] truncate block">
                              {p.title}
                            </span>
                            <span className="text-[10px] text-[#64748B] block mt-0.5">
                              {p.discipline} • {p.duration}
                            </span>
                          </div>
                          {p.badge && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 shrink-0">
                              {p.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeCategoryTab === 'Doctorate' && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div>
                        <h3 className="text-base font-extrabold text-[#061B35] flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                          <span>Doctorate & Terminal Degree Pathways</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                            3 Premier Programs
                          </span>
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          Prestigious doctoral pathways, faculty research mentorship, and executive honorary recognitions.
                        </p>
                      </div>

                      <Link
                        href="/programs?category=Doctorate"
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
                      >
                        <span>Explore full Doctorate catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {doctoratePrograms.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          className="group p-4 rounded-xl border border-[#E2E8F0] hover:border-[#7C3AED]/50 hover:bg-[#F5F3FF] hover:shadow-xs transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                                {p.format}
                              </span>
                              {p.badge && (
                                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#F4B72F] text-[#061B35]">
                                  {p.badge}
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-extrabold text-[#061B35] group-hover:text-[#7C3AED] transition-colors">
                              {p.title}
                            </h4>
                            <p className="text-xs text-[#64748B] mt-1.5 line-clamp-2">
                              {p.shortDescription}
                            </p>
                          </div>
                          <span className="mt-3 text-xs font-bold text-[#7C3AED] inline-flex items-center gap-1">
                            <span>View Curriculum</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeCategoryTab === 'Certifications' && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div>
                        <h3 className="text-base font-extrabold text-[#061B35] flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
                          <span>Professional Industry Certifications</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                            4 Applied Credentials
                          </span>
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          High-impact practical certifications in full stack engineering, cloud infrastructure, and offensive security.
                        </p>
                      </div>

                      <Link
                        href="/programs?category=Certifications"
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:text-[#065F46] transition-colors"
                      >
                        <span>Explore full Certifications catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {certPrograms.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programs/${p.slug}`}
                          onClick={onClose}
                          className="group p-4 rounded-xl border border-[#E2E8F0] hover:border-[#059669]/50 hover:bg-[#ECFDF5] hover:shadow-xs transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                {p.duration}
                              </span>
                              {p.badge && (
                                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#F4B72F] text-[#061B35]">
                                  {p.badge}
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-extrabold text-[#061B35] group-hover:text-[#059669] transition-colors">
                              {p.title}
                            </h4>
                            <p className="text-xs text-[#64748B] mt-1.5 line-clamp-2">
                              {p.shortDescription}
                            </p>
                          </div>
                          <span className="mt-3 text-xs font-bold text-[#059669] inline-flex items-center gap-1">
                            <span>Explore Track</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 3. Bottom Action Strip */}
          <div className="sticky bottom-0 z-20 px-6 py-3 border-t border-[#F1F5F9] bg-[#F8FAFC]/95 backdrop-blur-md rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-2xs">
            <div className="flex items-center gap-2 text-[#64748B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B72F]" />
              <span>
                Personalized academic advisory with direct faculty mentorship &amp; ethical career mapping.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/programs"
                onClick={onClose}
                className="font-extrabold text-[#061B35] hover:text-[#F4B72F] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View Full Catalogue ({programs.length} Programs)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F4B72F]" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
