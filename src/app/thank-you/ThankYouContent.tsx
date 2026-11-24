'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Mail,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { sanitizeReturnUrl } from '@/lib/enquirySession';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';

export const ThankYouContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Safely parse & validate originating return URL (defaults to '/' if missing or invalid)
  const rawReturnUrl = searchParams.get('returnUrl');
  const safeReturnUrl = useMemo(() => sanitizeReturnUrl(rawReturnUrl), [rawReturnUrl]);

  const [secondsLeft, setSecondsLeft] = useState<number>(5);
  const hasRedirectedRef = useRef<boolean>(false);

  // Return handler: Navigates immediately to originating page
  const handleReturn = useCallback(() => {
    if (hasRedirectedRef.current) return;
    hasRedirectedRef.current = true;

    // Release any lingering document scroll lock
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    try {
      router.push(safeReturnUrl);
    } catch {
      window.location.assign(safeReturnUrl);
    }
  }, [router, safeReturnUrl]);

  // 5-second countdown timer with auto-return on expiry
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleReturn();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [handleReturn]);

  // Format return target label for clarity
  const returnTargetLabel = useMemo(() => {
    if (safeReturnUrl === '/') return 'homepage';
    if (safeReturnUrl.startsWith('/programs/')) return 'program details';
    if (safeReturnUrl.startsWith('/programs')) return 'academic programs';
    if (safeReturnUrl.startsWith('/contact')) return 'contact page';
    if (safeReturnUrl.startsWith('/about')) return 'about page';
    if (safeReturnUrl.startsWith('/blog')) return 'blog';
    return 'previous page';
  }, [safeReturnUrl]);

  return (
    <div className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#F3F5FF] via-white to-[#F3F5FF]/60 min-h-[75vh] flex items-center">
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#182A9A]/10 via-[#101F70]/5 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 31, 112, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 31, 112, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container size="default">
        <div className="max-w-2xl mx-auto">
          {/* Main Thank You Card */}
          <div className="relative bg-white rounded-3xl border border-[#DCE3FF] shadow-2xl p-6 sm:p-10 md:p-12 text-center overflow-hidden">
            {/* Top Brand Blue Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />

            {/* Success Icon Seal */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-200/80 shadow-inner">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-[#182A9A] text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Submission Received</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101F70] tracking-tight mb-3">
              Thank You for Your Enquiry!
            </h1>

            {/* Core Message */}
            <p className="text-base sm:text-lg text-[#26345C] font-semibold leading-relaxed max-w-xl mx-auto mb-2">
              Your information has been submitted successfully. Thank you for contacting CademyX.
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#6573A8] leading-relaxed max-w-lg mx-auto mb-8">
              You’ll be redirected to the page you were viewing in a few seconds.
            </p>

            {/* Dynamic Countdown & Auto-Return Status Box */}
            <div
              className="p-4 sm:p-5 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] mb-8"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#182A9A] uppercase tracking-wider">
                      Auto-Redirecting
                    </div>
                    <div className="text-sm font-extrabold text-[#101F70]">
                      {secondsLeft > 0 ? (
                        <span>
                          Returning in{' '}
                          <strong className="text-[#182A9A] font-mono text-base">
                            {secondsLeft}
                          </strong>{' '}
                          {secondsLeft === 1 ? 'second' : 'seconds'}...
                        </span>
                      ) : (
                        <span>Redirecting now...</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Return Now Button */}
                <Button
                  type="button"
                  onClick={handleReturn}
                  variant="gold"
                  size="md"
                  className="w-full sm:w-auto font-bold shadow-md cursor-pointer whitespace-nowrap"
                  leadingIcon={<ArrowLeft className="w-4 h-4" />}
                >
                  Return Now
                </Button>
              </div>

              {/* Visual Countdown Progress Indicator */}
              <div className="mt-4 w-full bg-[#DCE3FF] h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#182A9A] to-[#101F70] transition-all duration-1000 ease-linear"
                  style={{ width: `${(secondsLeft / 5) * 100}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-[#6573A8]">
                <span>Destination: {returnTargetLabel}</span>
                {safeReturnUrl !== '/' && (
                  <Link
                    href="/"
                    onClick={() => {
                      hasRedirectedRef.current = true;
                    }}
                    className="text-[#182A9A] hover:text-[#101F70] font-semibold underline transition-colors"
                  >
                    Or return to Homepage
                  </Link>
                )}
              </div>
            </div>

            {/* Advisory Next Steps Reassurance */}
            <div className="text-left pt-2 border-t border-[#DCE3FF]">
              <h2 className="text-xs font-bold text-[#101F70] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#182A9A]" />
                <span>What Happens Next</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#26345C]">
                <div className="p-3 rounded-xl bg-white border border-[#DCE3FF]">
                  <div className="font-bold text-[#101F70] mb-1">1. Advisor Review</div>
                  <p>Our educational committee reviews your academic background and goals.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#DCE3FF]">
                  <div className="font-bold text-[#101F70] mb-1">2. Direct Contact</div>
                  <p>An academic advisor responds to your enquiry within 1 business day.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#DCE3FF]">
                  <div className="font-bold text-[#101F70] mb-1">3. Guided Pathway</div>
                  <p>Receive curriculum details, eligibility evaluation, and timelines.</p>
                </div>
              </div>
            </div>

            {/* Direct Support Contact Strip */}
            <div className="mt-8 pt-6 border-t border-[#DCE3FF] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#6573A8]">
              <span className="font-medium">Need immediate assistance?</span>
              <a
                href={`mailto:${CONTACT_INFO.primaryEmail}`}
                className="inline-flex items-center gap-1.5 text-[#101F70] hover:text-[#182A9A] font-bold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#182A9A]" />
                <span>{CONTACT_INFO.primaryEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
