'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, MessageSquare, HelpCircle, X, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { EnquiryModal } from './EnquiryModal';

interface WhatsAppShortcut {
  id: string;
  title: string;
  subtitle: string;
  message: string;
}

const WHATSAPP_SHORTCUTS: WhatsAppShortcut[] = [
  {
    id: 'programs',
    title: 'Program Information',
    subtitle: 'Explore degree pathways & curriculum details',
    message: "Hi, I'd like to know more about CademyX academic programs.",
  },
  {
    id: 'guidance',
    title: 'Academic Guidance',
    subtitle: 'Personalized advice on majors & career tracks',
    message: "Hi, I'd like help choosing a suitable academic pathway.",
  },
  {
    id: 'eligibility',
    title: 'Program Eligibility',
    subtitle: 'Verify prerequisites & admission criteria',
    message: "Hi, I'd like to enquire about program eligibility and requirements.",
  },
  {
    id: 'fees-duration',
    title: 'Fees and Duration',
    subtitle: 'Tuition structures, duration & schedules',
    message: "Hi, I'd like to know about program fees and duration.",
  },
  {
    id: 'consultation',
    title: 'Book a Consultation',
    subtitle: 'Schedule a 1-on-1 session with an advisor',
    message: "Hi, I'd like to discuss scheduling an academic consultation.",
  },
];

export const FloatingHelpWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsAppShortcuts, setShowWhatsAppShortcuts] = useState(false);
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Configurable WhatsApp and Phone with official constants as defaults
  const rawWhatsapp =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    CONTACT_INFO.whatsappNumber ||
    '918375897148';
  const whatsappNumber = rawWhatsapp.replace(/[^+\d]/g, '');

  const rawPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || CONTACT_INFO.phone;
  const telUrl = `tel:${CONTACT_INFO.phoneRaw}`;

  // Reset subview when widget closes
  const handleClose = () => {
    setIsOpen(false);
    setShowWhatsAppShortcuts(false);
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

  const handleShortcutSelect = (shortcut: WhatsAppShortcut) => {
    if (!whatsappNumber) {
      alert('WhatsApp advisory number is currently pending official configuration.');
      return;
    }
    const targetUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(shortcut.message)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  return (
    <>
      <aside
        ref={widgetRef}
        aria-label="CademyX Quick Assistance and Advisory Help"
        className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 select-none print:hidden flex flex-col items-end max-w-[calc(100vw-1.5rem)]"
      >
        {/* Expanded Menus */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mb-3 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
              role="dialog"
              aria-label="Advisory Help Menu"
            >
              {/* VIEW 1: WhatsApp Quick Message Shortcuts */}
              {showWhatsAppShortcuts ? (
                <div className="p-4 space-y-3">
                  {/* Shortcuts Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowWhatsAppShortcuts(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#061B35] hover:text-[#075AC8] cursor-pointer transition-colors"
                      aria-label="Back to channels"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                      <span className="text-[11px] font-bold text-[#061B35] uppercase tracking-wider">
                        WhatsApp Help
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#152C45]/80 font-medium leading-snug">
                    Select a topic to open WhatsApp with a prefilled message:
                  </p>

                  {/* 5 Shortcut Choices */}
                  <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
                    {WHATSAPP_SHORTCUTS.map((shortcut) => (
                      <button
                        key={shortcut.id}
                        type="button"
                        onClick={() => handleShortcutSelect(shortcut)}
                        className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-[#25D366]/10 border border-slate-200/80 hover:border-[#25D366]/50 transition-all cursor-pointer group flex items-start justify-between gap-2"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#061B35] group-hover:text-[#25D366] transition-colors leading-snug">
                            {shortcut.title}
                          </p>
                          <p className="text-[10px] text-[#152C45]/70 truncate mt-0.5">
                            {shortcut.subtitle}
                          </p>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366] shrink-0 mt-0.5 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* VIEW 2: 3 Primary Action Channels */
                <div className="p-3.5 space-y-2.5">
                  <div className="px-2 py-1 flex items-center justify-between border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#061B35]">
                      Connect With CademyX
                    </span>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-slate-400 hover:text-[#061B35] p-1 rounded-md transition-colors cursor-pointer"
                      aria-label="Close menu"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 1. WhatsApp Action (Reveals Shortcuts) */}
                  <button
                    type="button"
                    onClick={() => setShowWhatsAppShortcuts(true)}
                    className="w-full group flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-[#25D366]/10 border border-slate-200/80 hover:border-[#25D366]/40 transition-all cursor-pointer text-left"
                    aria-label="Open WhatsApp message choices"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      {/* Authentic WhatsApp SVG Logo */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.031 0C5.396 0 0 5.397 0 12.034c0 2.12.553 4.188 1.606 6.012L.065 24l6.126-1.607a11.968 11.968 0 005.84 1.503h.005c6.635 0 12.032-5.397 12.032-12.034 0-3.214-1.252-6.236-3.525-8.51A11.956 11.956 0 0012.031 0zm0 22.025h-.004a9.98 9.98 0 01-5.093-1.392l-.365-.216-3.785.993 1.01-3.69-.238-.378a9.983 9.983 0 01-1.533-5.308c0-5.525 4.495-10.02 10.02-10.02 2.676 0 5.192 1.043 7.084 2.937a9.972 9.972 0 012.934 7.087c0 5.525-4.494 10.02-10.02 10.02z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#061B35] group-hover:text-[#25D366] transition-colors">
                          WhatsApp Advisory
                        </span>
                        <span className="text-[9px] font-bold uppercase text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                          Quick Chat
                        </span>
                      </div>
                      <p className="text-[11px] text-[#152C45]/70 truncate">Choose predefined inquiry topic</p>
                    </div>
                  </button>

                  {/* 2. Call Action */}
                  <a
                    href={telUrl}
                    onClick={handleClose}
                    className="group flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-[#075AC8]/10 border border-slate-200/80 hover:border-[#075AC8]/40 transition-all cursor-pointer text-left"
                    aria-label={`Call advisory line at ${rawPhone}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#075AC8] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors">
                          Call Advisor
                        </span>
                        <span className="text-[9px] font-mono font-bold text-slate-500">
                          {rawPhone}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#152C45]/70 truncate">Direct telephone consultation</p>
                    </div>
                  </a>

                  {/* 3. Query Action */}
                  <button
                    type="button"
                    onClick={() => {
                      handleClose();
                      setIsQueryModalOpen(true);
                    }}
                    className="w-full group flex items-center gap-3 p-2.5 rounded-xl bg-[#FEF8E9] hover:bg-[#F4B72F]/20 border border-[#F4B72F]/40 transition-all cursor-pointer text-left"
                    aria-label="Submit an academic profile query"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#061B35] text-[#F4B72F] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#061B35] group-hover:text-[#D99519] transition-colors">
                          Submit Query
                        </span>
                        <span className="text-[9px] font-extrabold uppercase text-[#061B35] bg-[#F4B72F] px-1.5 py-0.2 rounded">
                          Form
                        </span>
                      </div>
                      <p className="text-[11px] text-[#152C45]/70 truncate">Profile review &amp; roadmap request</p>
                    </div>
                  </button>
                </div>
              )}
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
              className="mb-2 px-3 py-1 rounded-full bg-[#061B35] text-white border border-[#F4B72F]/50 shadow-lg text-[11px] font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer hover:border-[#F4B72F] max-w-[calc(100vw-2.5rem)] truncate"
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
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#061B35] hover:bg-[#092244] text-[#F4B72F] border-2 border-[#F4B72F] shadow-2xl flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-4 focus:ring-[#F4B72F]/40 active:scale-95"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#F4B72F]" />
          ) : (
            <MessageSquare className="w-6 h-6 text-[#F4B72F]" />
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
