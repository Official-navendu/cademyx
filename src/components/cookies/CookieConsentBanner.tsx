'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Sliders, X } from 'lucide-react';
import {
  getStoredConsent,
  saveConsentPreferences,
} from '@/lib/cookieConsent';
import { OPEN_COOKIE_PREFERENCES_EVENT, COOKIE_CONSENT_EVENT } from '@/types/cookie';
import { CookiePreferencesModal } from './CookiePreferencesModal';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // On mount, check if consent is already recorded in storage
  useEffect(() => {
    // Delay presentation slightly so it doesn't fight with initial page render
    const timer = setTimeout(() => {
      const existing = getStoredConsent();
      if (!existing) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for global open preferences event (e.g. from footer link or Cookie Policy page)
  useEffect(() => {
    const handleOpenPreferences = () => {
      setIsPreferencesOpen(true);
    };

    const handleConsentUpdated = () => {
      setIsVisible(false);
    };

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentUpdated);

    return () => {
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentUpdated);
    };
  }, []);

  const handleAcceptAll = () => {
    saveConsentPreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
    setIsVisible(false);
  };

  const handleRejectOptional = () => {
    saveConsentPreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
    setIsVisible(false);
  };

  const handleOpenPreferences = () => {
    setIsPreferencesOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            role="region"
            aria-label="Cookie consent banner"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-40 select-none print:hidden"
          >
            <div className="relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-[#DCE3FF] shadow-2xl text-[#26345C] overflow-hidden">
              {/* Top Blue Glowing Hairline */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />

              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F5FF] border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] shrink-0 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-[#182A9A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#101F70] tracking-tight">
                      Your Privacy Matters
                    </h3>
                  </div>
                </div>

                {/* Dismiss banner icon does not imply consent */}
                <button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  aria-label="Dismiss banner"
                  className="p-1 rounded-md text-[#6573A8] hover:text-[#101F70] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                CademyX uses essential cookies to keep this website working. With your permission, we may also use optional cookies to understand website usage and improve your experience.{' '}
                <Link
                  href="/cookie-policy"
                  className="font-bold text-[#182A9A] hover:text-[#101F70] underline underline-offset-2 transition-colors inline-block"
                >
                  Read Cookie Policy
                </Link>
                .
              </p>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-[#DCE3FF] flex flex-wrap items-center gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#182A9A] to-[#101F70] hover:brightness-110 text-white font-extrabold text-xs shadow-xs hover:shadow-sm transition-all active:scale-[0.98] cursor-pointer text-center"
                >
                  Accept All
                </button>

                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-[#F3F5FF] border border-[#DCE3FF] text-xs font-bold text-[#26345C] transition-all cursor-pointer text-center"
                >
                  Reject Optional
                </button>

                <button
                  type="button"
                  onClick={handleOpenPreferences}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#182A9A] hover:bg-[#F3F5FF] transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Cookie Preferences</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Global Preferences Dialog */}
      <CookiePreferencesModal
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
      />
    </>
  );
};
