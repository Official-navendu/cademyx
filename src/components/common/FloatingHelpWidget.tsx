'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MessageSquare, HelpCircle, X, Mail, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { EnquiryModal } from './EnquiryModal';

export const FloatingHelpWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <aside
        ref={widgetRef}
        aria-label="CademyX Quick Assistance and Advisory Help"
        className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 select-none print:hidden flex flex-col items-end max-w-[calc(100vw-1.5rem)]"
      >
        {/* Expanded Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mb-3 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-[#DCE3FF] overflow-hidden"
              role="dialog"
              aria-label="Advisory Help Menu"
            >
              <div className="p-3.5 space-y-2.5">
                <div className="px-2 py-1 flex items-center justify-between border-b border-[#DCE3FF]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#101F70]">
                    Connect With CademyX
                  </span>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-[#6573A8] hover:text-[#101F70] p-1 rounded-md transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 1. Query Action: Direct Profile Review & Roadmap Request */}
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    setIsQueryModalOpen(true);
                  }}
                  className="w-full group flex items-center gap-3 p-2.5 rounded-xl bg-[#F3F5FF] hover:bg-[#DCE3FF]/50 border border-[#DCE3FF] hover:border-[#182A9A]/40 transition-all cursor-pointer text-left"
                  aria-label="Submit an academic profile query"
                >
                  <div className="w-10 h-10 rounded-full bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                        Submit Query
                      </span>
                      <span className="text-[9px] font-extrabold uppercase text-white bg-[#182A9A] px-1.5 py-0.2 rounded">
                        Form
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6573A8] truncate">Profile review &amp; roadmap request</p>
                  </div>
                </button>

                {/* 2. Schedule Consultation: 1-on-1 Meeting */}
                <Link
                  href="/schedule-a-consultation"
                  onClick={handleClose}
                  className="group flex items-center gap-3 p-2.5 rounded-xl bg-[#F3F5FF] hover:bg-[#DCE3FF]/40 border border-[#DCE3FF] hover:border-[#182A9A]/40 transition-all cursor-pointer text-left"
                  aria-label="Schedule an academic consultation meeting"
                >
                  <div className="w-10 h-10 rounded-full bg-[#182A9A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                        Book Consultation
                      </span>
                      <span className="text-[9px] font-bold uppercase text-[#101F70] bg-[#DCE3FF] px-1.5 py-0.2 rounded">
                        1-on-1
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6573A8] truncate">Reserve personalized advisory meeting</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6573A8] group-hover:text-[#182A9A] shrink-0 transition-colors" />
                </Link>

                {/* 3. Email Advisory Action */}
                <a
                  href={`mailto:${CONTACT_INFO.primaryEmail}`}
                  onClick={handleClose}
                  className="group flex items-center gap-3 p-2.5 rounded-xl bg-[#F3F5FF] hover:bg-[#DCE3FF]/40 border border-[#DCE3FF] hover:border-[#182A9A]/40 transition-all cursor-pointer text-left"
                  aria-label={`Send email to ${CONTACT_INFO.primaryEmail}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#26345C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                        Email Advisory
                      </span>
                      <span className="text-[9px] font-mono text-[#6573A8]">
                        Verified
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6573A8] truncate">{CONTACT_INFO.primaryEmail}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6573A8] group-hover:text-[#182A9A] shrink-0 transition-colors" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small Floating Pill Label: "We're here to help" with Live Indicator */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(true)}
              className="mb-2 px-3 py-1 rounded-full bg-[#101F70] text-white border border-[#DCE3FF]/40 shadow-lg text-[11px] font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer hover:border-[#DCE3FF] max-w-[calc(100vw-2.5rem)] truncate"
            >
              {/* Green Live Indicator (decorative availability signal) */}
              <span className="relative flex h-2 w-2 shrink-0">
                {!prefersReducedMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 duration-1000" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="truncate">We&apos;re here to help</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Circular Trigger Button */}
        <motion.button
          type="button"
          onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close advisory help menu' : 'Open advisory help options'}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#182A9A] hover:bg-[#101F70] text-white border-2 border-white/80 shadow-2xl flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-4 focus:ring-[#182A9A]/40 active:scale-95"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageSquare className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </aside>

      {/* Query Modal Popup triggered from Floating Widget */}
      <EnquiryModal
        isOpen={isQueryModalOpen}
        onClose={() => setIsQueryModalOpen(false)}
      />
    </>
  );
};
