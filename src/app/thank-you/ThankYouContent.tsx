'use client';

import React, { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Mail,
  GraduationCap,
  Sparkles,
  Home,
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

  // Back button handler: Safely returns the visitor to their originating page
  const handleBack = useCallback(() => {
    // Release any lingering document scroll lock
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    // 1. If an explicit safe return URL exists and is not root
    if (safeReturnUrl && safeReturnUrl !== '/' && safeReturnUrl !== '/thank-you') {
      try {
        router.push(safeReturnUrl);
      } catch {
        window.location.assign(safeReturnUrl);
      }
      return;
    }

    // 2. Fall back to browser history if available
    if (typeof window !== 'undefined' && window.history.length > 1) {
      try {
        router.back();
        return;
      } catch {
        // Fall back to homepage
      }
    }

    // 3. Ultimate fallback: Homepage
    try {
      router.push('/');
    } catch {
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign('/');
    }
  }, [router, safeReturnUrl]);

  // Format return target label for clarity
  const returnTargetLabel = useMemo(() => {
    if (safeReturnUrl === '/') return 'Homepage';
    if (safeReturnUrl.startsWith('/programs/')) return 'Program Details';
    if (safeReturnUrl.startsWith('/programs')) return 'Academic Programs';
    if (safeReturnUrl.startsWith('/contact')) return 'Contact Page';
    if (safeReturnUrl.startsWith('/about')) return 'About Page';
    if (safeReturnUrl.startsWith('/blog')) return 'Blog';
    if (safeReturnUrl.startsWith('/schedule-a-consultation')) return 'Consultation Page';
    return 'Previous Page';
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

            {/* Supporting Advisory Text */}
            <p className="text-sm sm:text-base text-[#6573A8] leading-relaxed max-w-lg mx-auto mb-8">
              An academic guidance advisor will review your inquiry details and reach out within 1 business day.
            </p>

            {/* Navigation Action Box — Visible Back Button (Timer completely removed) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold text-[#182A9A] uppercase tracking-wider">
                    Ready to Continue?
                  </div>
                  <div className="text-sm font-semibold text-[#101F70] mt-0.5">
                    {safeReturnUrl !== '/' ? (
                      <span>Return to {returnTargetLabel}</span>
                    ) : (
                      <span>Return to the CademyX Homepage</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                  {/* Visible Back Button */}
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto font-bold shadow-md cursor-pointer whitespace-nowrap"
                    leadingIcon={<ArrowLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>

                  {/* Secondary Home Button if not returning to home */}
                  {safeReturnUrl !== '/' && (
                    <Button
                      href="/"
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto font-semibold border-[#DCE3FF] text-[#101F70] hover:bg-white"
                      leadingIcon={<Home className="w-4 h-4 text-[#182A9A]" />}
                    >
                      Home
                    </Button>
                  )}
                </div>
              </div>

              {safeReturnUrl !== '/' && (
                <div className="mt-3 pt-3 border-t border-[#DCE3FF]/60 text-center sm:text-left text-[11px] text-[#6573A8]">
                  <span>Originating pathway: </span>
                  <span className="font-semibold text-[#101F70]">{returnTargetLabel}</span>
                </div>
              )}
            </div>

            {/* Advisory Next Steps Reassurance */}
            <div className="text-left pt-2 border-t border-[#DCE3FF]">
              <h2 className="text-xs font-bold text-[#101F70] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#182A9A]" />
                <span>What Happens Next</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#26345C]">
                <div className="p-3.5 rounded-xl bg-white border border-[#DCE3FF]">
                  <div className="font-bold text-[#101F70] mb-1">1. Advisor Review</div>
                  <p>Our educational advisory team examines your background, requirements, and academic targets.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#DCE3FF]">
                  <div className="font-bold text-[#101F70] mb-1">2. Direct Contact</div>
                  <p>An advisor connects with you via email or phone within 1 business day.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#DCE3FF]">
                  <div className="font-bold text-[#101F70] mb-1">3. Guided Pathway</div>
                  <p>Receive comprehensive curricula details, admission roadmaps, and prerequisite guidance.</p>
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
