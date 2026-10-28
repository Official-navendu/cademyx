'use client';

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { Calendar, ShieldCheck, Clock, ExternalLink, RefreshCw, AlertCircle, Zap } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export interface CalendlySchedulerProps {
  calendlyUrl?: string;
  className?: string;
}

const DEFAULT_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/cademyxedu/30min';

const noopSubscribe = () => () => {};

export const CalendlyScheduler: React.FC<CalendlySchedulerProps> = ({
  calendlyUrl = DEFAULT_CALENDLY_URL,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const isMounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  const cleanUrl = (calendlyUrl || DEFAULT_CALENDLY_URL).trim();

  // Programmatic Calendly inline widget initialization
  const initCalendlyWidget = useCallback(() => {
    if (typeof window === 'undefined') return;

    const calendlyGlobal = (window as unknown as { Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement | null }) => void } }).Calendly;

    if (calendlyGlobal && containerRef.current) {
      try {
        containerRef.current.innerHTML = '';
        calendlyGlobal.initInlineWidget({
          url: cleanUrl,
          parentElement: containerRef.current,
        });
        setScriptLoaded(true);
        setIsInitializing(false);
        setLoadError(false);
      } catch (err) {
        console.error('[CademyX Calendly Init Error]:', err);
        setLoadError(true);
        setIsInitializing(false);
      }
    }
  }, [cleanUrl]);

  useEffect(() => {
    if (!isMounted) return;

    // Check if Calendly was already injected on a previous client navigation
    const win = window as unknown as { Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement | null }) => void } };
    if (win.Calendly && containerRef.current) {
      initCalendlyWidget();
    }

    // Safety timeout: If third-party script is blocked by an adblocker (uBlock, Brave, Privacy Badger)
    // after 7 seconds, display the direct booking fallback without leaving user stranded.
    const timeoutTimer = setTimeout(() => {
      if (!scriptLoaded && isInitializing) {
        // Check if an iframe was mounted inside the container
        const hasIframe = containerRef.current?.querySelector('iframe');
        if (!hasIframe) {
          setLoadError(true);
          setIsInitializing(false);
        } else {
          setScriptLoaded(true);
          setIsInitializing(false);
        }
      }
    }, 7000);

    return () => clearTimeout(timeoutTimer);
  }, [isMounted, initCalendlyWidget, scriptLoaded, isInitializing]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* High-priority resource preconnects for Calendly CDN */}
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />

      {/* Official Calendly script with afterInteractive strategy for fast initial load */}
      <Script
        id="calendly-widget-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          initCalendlyWidget();
        }}
        onError={() => {
          setLoadError(true);
          setIsInitializing(false);
        }}
      />

      {/* Main Scheduler Container */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden relative">
        {/* Top Gold Accent Ribbon */}
        <div className="h-1.5 bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#D99519]" />

        {/* Security & Header Meta Bar */}
        <div className="px-5 py-3.5 sm:px-7 sm:py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#061B35] font-bold">
            <Calendar className="w-4 h-4 text-[#F4B72F]" />
            <span>Direct Advisory Calendar</span>
          </div>

          <div className="flex items-center gap-4 text-[#5A6A85]">
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Direct Scheduling</span>
            </div>
            <a
              href={cleanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#075AC8] hover:text-[#061B35] font-semibold transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Widget Content Area with Guaranteed Fixed Height (Zero Layout Shift) */}
        <div className="p-2 sm:p-4 lg:p-6 relative min-h-[720px]">
          {loadError ? (
            /* Adblocker / Network Fallback */
            <div className="p-8 sm:p-12 text-center space-y-5 rounded-2xl bg-[#FEF8E9] border border-[#FDE6B0] my-8 max-w-xl mx-auto shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#F4B72F]/20 text-[#061B35] flex items-center justify-center mx-auto border border-[#F4B72F]/40">
                <AlertCircle className="w-7 h-7 text-[#D99519]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#061B35]">
                  Instant Direct Booking Portal
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Your browser or privacy extension may have restricted third-party widget loading. You can access the official CademyX 30-minute calendar directly:
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={cleanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#061B35] text-[#F4B72F] font-bold text-sm shadow-md hover:bg-[#0A2244] transition-all hover:scale-[1.02]"
                >
                  <Zap className="w-4 h-4 text-[#F4B72F]" />
                  <span>Book on Calendly (30 Min)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setLoadError(false);
                    setIsInitializing(true);
                    initCalendlyWidget();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs text-[#5A6A85] hover:text-[#061B35] font-semibold transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Embed</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#FDE6B0] text-xs text-[#64748B]">
                Need immediate assistance? Contact our advisory desk at{' '}
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-bold text-[#061B35] hover:underline">
                  {CONTACT_INFO.phone}
                </a>{' '}
                or email{' '}
                <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="font-bold text-[#075AC8] hover:underline">
                  {CONTACT_INFO.primaryEmail}
                </a>
                .
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[720px]">
              {/* Branded Loading Skeleton Overlay */}
              {(!scriptLoaded || isInitializing) && (
                <div
                  className="absolute inset-0 z-10 w-full h-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col items-center justify-center space-y-4 p-6 text-center animate-pulse"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4B72F]/20 flex items-center justify-center text-[#F4B72F]">
                    <Clock className="w-6 h-6 animate-spin text-[#D99519]" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm font-bold text-[#061B35]">
                      Connecting to CademyX Advisory Calendar...
                    </p>
                    <p className="text-xs text-[#64748B] max-w-sm">
                      Loading real-time availability and timezones directly from Calendly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={cleanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#075AC8] hover:text-[#061B35] inline-flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>Direct booking link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Official Inline Widget Target Container */}
              <div
                ref={containerRef}
                className="calendly-inline-widget w-full max-w-full h-[720px] rounded-2xl overflow-hidden"
                data-url={cleanUrl}
                style={{ width: '100%', height: '720px' }}
              />
            </div>
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="px-5 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC]/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
          <span>Timezone automatically adjusts to your regional location.</span>
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#075AC8] hover:text-[#061B35] inline-flex items-center gap-1 transition-colors"
          >
            <span>Open in full window</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
