'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ShieldCheck, Lock, CheckCircle2, Sliders, Info } from 'lucide-react';
import { CookieCategories } from '@/types/cookie';
import { getStoredConsent, saveConsentPreferences } from '@/lib/cookieConsent';

export interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return <CookiePreferencesDialogContent onClose={onClose} />;
};

const CookiePreferencesDialogContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [categories, setCategories] = useState<CookieCategories>(() => {
    const stored = getStoredConsent();
    if (stored) {
      return {
        essential: true,
        analytics: Boolean(stored.analytics),
        functional: Boolean(stored.functional),
        marketing: Boolean(stored.marketing),
      };
    }
    return {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
  });

  // Lock background scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const toggleCategory = (cat: keyof CookieCategories) => {
    if (cat === 'essential') return; // Essential cannot be toggled off
    setCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const handleSave = () => {
    saveConsentPreferences(categories);
    onClose();
  };

  const handleAcceptAll = () => {
    saveConsentPreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
    onClose();
  };

  const handleRejectAll = () => {
    saveConsentPreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#101F70]/70 backdrop-blur-xs transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DCE3FF] overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
        >
          {/* Top Blue Glowing Accent Hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-[#DCE3FF] flex items-center justify-between gap-4 shrink-0 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] shrink-0 shadow-2xs">
                <Sliders className="w-5 h-5 text-[#182A9A]" />
              </div>
              <div>
                <h2
                  id="cookie-preferences-title"
                  className="text-lg sm:text-xl font-extrabold text-[#101F70]"
                >
                  Cookie Preferences
                </h2>
                <p className="text-xs text-[#6573A8]">
                  Manage your data and privacy preferences on CademyX
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close preferences"
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-[#6573A8] hover:text-[#101F70] hover:bg-[#F3F5FF] transition-colors flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body / Category List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
              Cookies are small files stored on your device that help us provide a secure and reliable experience. You can choose which optional cookie categories you wish to allow. Essential cookies are required for the website to function.
            </p>

            <div className="space-y-3 pt-2">
              {/* Category 1: Essential Cookies */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#101F70]" />
                      <h3 className="text-sm font-bold text-[#101F70]">
                        Essential Cookies
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#101F70] text-white">
                        <Lock className="w-2.5 h-2.5" />
                        <span>Always Active</span>
                      </span>
                    </div>
                    <p className="text-xs text-[#26345C] mt-1.5 leading-relaxed">
                      Necessary for basic website security, form submission verification, anti-spam validation, session navigation, and keeping the website operational. These cannot be switched off.
                    </p>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <span className="text-xs font-bold text-[#6573A8] px-2.5 py-1 rounded-lg bg-[#DCE3FF]/60 cursor-not-allowed select-none">
                      Required
                    </span>
                  </div>
                </div>
              </div>

              {/* Category 2: Functional Cookies */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#182A9A]" />
                      <h3 className="text-sm font-bold text-[#101F70]">
                        Functional Cookies
                      </h3>
                      <span className="text-[10px] font-bold text-[#182A9A] bg-[#F3F5FF] border border-[#DCE3FF] px-2 py-0.5 rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-[#26345C] mt-1.5 leading-relaxed">
                      Enable enhanced website personalization, remembering your dismissals, and seamless operation of interactive tools such as the Calendly advisory consultation calendar.
                    </p>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={categories.functional}
                      aria-label="Toggle Functional Cookies"
                      onClick={() => toggleCategory('functional')}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#182A9A] ${
                        categories.functional ? 'bg-[#182A9A]' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          categories.functional ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Category 3: Analytics Cookies */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#182A9A]" />
                      <h3 className="text-sm font-bold text-[#101F70]">
                        Analytics Cookies
                      </h3>
                      <span className="text-[10px] font-bold text-[#182A9A] bg-[#F3F5FF] border border-[#DCE3FF] px-2 py-0.5 rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-[#26345C] mt-1.5 leading-relaxed">
                      Allow us to understand aggregate visitor counts, popular academic programs, and page load performance. All statistical metrics are strictly anonymized.
                    </p>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={categories.analytics}
                      aria-label="Toggle Analytics Cookies"
                      onClick={() => toggleCategory('analytics')}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#182A9A] ${
                        categories.analytics ? 'bg-[#182A9A]' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          categories.analytics ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Category 4: Marketing Cookies */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#182A9A]" />
                      <h3 className="text-sm font-bold text-[#101F70]">
                        Marketing &amp; Targeting Cookies
                      </h3>
                      <span className="text-[10px] font-bold text-[#182A9A] bg-[#F3F5FF] border border-[#DCE3FF] px-2 py-0.5 rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-[#26345C] mt-1.5 leading-relaxed">
                      Used only if promotional campaigns are active, to present relevant higher-education guidance and avoid showing repetitive announcements.
                    </p>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={categories.marketing}
                      aria-label="Toggle Marketing Cookies"
                      onClick={() => toggleCategory('marketing')}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#182A9A] ${
                        categories.marketing ? 'bg-[#182A9A]' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          categories.marketing ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 sm:p-6 border-t border-[#DCE3FF] bg-[#F3F5FF] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#DCE3FF] text-xs font-bold text-[#26345C] hover:bg-white transition-colors cursor-pointer"
              >
                Reject All Optional
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#182A9A] text-xs font-bold text-[#182A9A] bg-white hover:bg-[#DCE3FF]/40 transition-colors cursor-pointer"
              >
                Accept All
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-[#6573A8] hover:text-[#101F70] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#182A9A] to-[#101F70] hover:brightness-110 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
