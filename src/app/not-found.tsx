import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Compass, ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Page Not Found',
  description: 'The page you’re looking for may have moved or no longer exists.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 min-h-[65vh] flex items-center justify-center bg-white">
      {/* Subtle Atmospheric Ambient Lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-gradient-to-b from-[#F3F5FF] via-[#DCE3FF]/40 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-academic-grid opacity-35 -z-10"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10 text-center">
        {/* Academic Icon Emblem */}
        <div className="relative mx-auto mb-6 inline-flex items-center justify-center">
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-[#101F70] text-[#DCE3FF] border-2 border-[#182A9A] shadow-xl flex items-center justify-center">
            <Compass className="w-10 h-10 sm:w-11 sm:h-11 animate-pulse" aria-hidden="true" />
          </div>
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#182A9A] text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Status Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-[#182A9A] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-2xs">
          <span>Error 404</span>
          <span className="w-1 h-1 rounded-full bg-[#182A9A]" />
          <span>CademyX Advisory</span>
        </div>

        {/* Clear Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F70] tracking-tight leading-tight">
          Page Not Found
        </h1>

        {/* Short Helpful Message */}
        <p className="mt-4 text-base sm:text-lg text-[#26345C] max-w-md mx-auto leading-relaxed font-normal">
          The page you’re looking for may have moved or no longer exists.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-sm sm:max-w-md mx-auto">
          {/* Primary CTA: Back to Home */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#182A9A] hover:bg-[#101F70] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#182A9A]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Secondary CTA: Explore Programs */}
          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3F5FF] border border-[#DCE3FF] hover:border-[#182A9A] text-[#101F70] font-semibold text-sm shadow-2xs hover:shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#182A9A]"
          >
            <BookOpen className="w-4 h-4 text-[#182A9A]" />
            <span>Explore Programs</span>
          </Link>
        </div>

        {/* Helpful Quick Links Footer */}
        <div className="mt-12 pt-6 border-t border-[#DCE3FF] text-xs text-[#6573A8] flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
          <Link href="/about" className="hover:text-[#182A9A] transition-colors">
            About CademyX
          </Link>
          <span>•</span>
          <Link href="/schedule-a-consultation" className="hover:text-[#182A9A] transition-colors">
            Book Consultation
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-[#182A9A] transition-colors">
            Contact Advisory Desk
          </Link>
        </div>
      </Container>
    </section>
  );
}
