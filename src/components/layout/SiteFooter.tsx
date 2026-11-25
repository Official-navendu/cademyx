'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CONTACT_INFO } from '@/lib/constants';
const FOOTER_PROGRAMS_LEFT = [
  { title: 'Honorary Doctorate', href: '/programs/honorary-doctorate' },
  { title: 'PhD Admission Program', href: '/programs/phd-admission-program' },
  { title: 'DBA Program', href: '/programs/dba-program' },
  { title: 'Management & Business', href: '/program-categories/management-business' },
  { title: 'Computer Science & IT', href: '/program-categories/computer-science-it' },
  { title: 'Artificial Intelligence', href: '/program-categories/artificial-intelligence' },
  { title: 'Data Science & Analytics', href: '/program-categories/data-science-analytics' },
  { title: 'Commerce & Finance', href: '/program-categories/commerce-finance' },
  { title: 'Business Analytics', href: '/program-categories/business-analytics' },
  { title: 'Economics', href: '/program-categories/economics' },
  { title: 'Psychology', href: '/program-categories/psychology' },
  { title: 'Digital Marketing', href: '/program-categories/digital-marketing' },
];

const FOOTER_PROGRAMS_RIGHT = [
  { title: 'Cybersecurity', href: '/program-categories/cybersecurity' },
  { title: 'Engineering & Technology', href: '/program-categories/engineering-technology' },
  { title: 'Law', href: '/program-categories/law' },
  { title: 'Media & Communication', href: '/program-categories/media-communication' },
  { title: 'Design & Creative Technology', href: '/program-categories/design-creative-technology' },
  { title: 'Hospitality & Tourism', href: '/program-categories/hospitality-tourism' },
  { title: 'Full Stack Development', href: '/programs/full-stack-development' },
  { title: 'Cloud Computing & DevOps', href: '/programs/cloud-computing-devops' },
  { title: 'Cyber Security Certification', href: '/programs/cyber-security-certification' },
  { title: 'Data Science Certification', href: '/programs/data-science-certification' },
];

const emptySubscribe = () => () => {};
const getYearSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 2026;

export const SiteFooter: React.FC = () => {
  const currentYear = React.useSyncExternalStore(
    emptySubscribe,
    getYearSnapshot,
    getServerSnapshot
  );

  return (
    <footer className="relative bg-[#101F70] text-white border-t border-[#DCE3FF]/20 mt-auto overflow-hidden">
      {/* Top Section Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#182A9A] via-[#DCE3FF]/40 to-[#182A9A] z-10" />

      {/* Ambient Lighting */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-[#182A9A]/25 to-transparent rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-t from-[#182A9A]/15 to-transparent rounded-full blur-2xl"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Main Grid: Brand, Explore, Programs, Support + Contact */}
        <div className="pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* ========================================================= */}
          {/* Column 1 — Brand (lg:col-span-4)                          */}
          {/* ========================================================= */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#DCE3FF] rounded-lg transition-transform hover:opacity-95 w-fit"
              aria-label="CademyX Home"
            >
              <Image
                src="/assets/logo-white.png"
                alt="CademyX — Academic Guidance & Advisory"
                width={180}
                height={52}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#DCE3FF]/90 leading-relaxed font-normal max-w-sm">
              CademyX is an academic guidance and advisory platform helping students and prospective candidates understand academic programmes, evaluate options, and make informed educational decisions.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#DCE3FF]/80 pt-1">
              <ShieldCheck className="h-4 w-4 text-[#DCE3FF] shrink-0" aria-hidden="true" />
              <span className="font-medium">Ethical academic guidance &amp; structured advisement</span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#DCE3FF]/70 block mb-2.5">
                Official Channels
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook (CademyX updates)"
                  title="Facebook: CademyX"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram (CademyX academic life)"
                  title="Instagram: CademyX"
                  className="w-9 h-9 rounded-xl text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn (CademyX Network)"
                  title="LinkedIn: CademyX"
                  className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit X (CademyX announcements)"
                  title="X: CademyX"
                  className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs border border-white/10"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Column 2 — Explore (lg:col-span-2)                        */}
          {/* ========================================================= */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#DCE3FF] mb-3 sm:mb-4">
              Explore
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================================= */}
          {/* Column 3 — Programs (lg:col-span-3)                       */}
          {/* Divided into two equal-width sub-columns (50%–50%)        */}
          {/* ========================================================= */}
          <div className="lg:col-span-3">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#DCE3FF] mb-3 sm:mb-4">
              Programs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-0">
              {/* Left Sub-Column (50%) — 12 Items */}
              <ul className="space-y-1.5 text-xs">
                {FOOTER_PROGRAMS_LEFT.map((program) => (
                  <li key={program.href}>
                    <Link
                      href={program.href}
                      className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5 leading-snug"
                    >
                      {program.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Sub-Column (50%) — 10 Items */}
              <ul className="space-y-1.5 text-xs">
                {FOOTER_PROGRAMS_RIGHT.map((program) => (
                  <li key={program.href}>
                    <Link
                      href={program.href}
                      className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5 leading-snug"
                    >
                      {program.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Column 4 & 5 — Support & Contact (lg:col-span-3)          */}
          {/* Contact moved immediately below Support                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 space-y-7">
            {/* Support */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#DCE3FF] mb-3 sm:mb-4">
                Support
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-preferences"
                    className="text-[#DCE3FF]/80 hover:text-white transition-colors inline-block py-0.5"
                  >
                    Cookie Preferences
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact (Immediately below Support) */}
            <div className="pt-6 border-t border-[#DCE3FF]/20">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#DCE3FF] mb-3 sm:mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#DCE3FF]/85">
                {/* Verified Email Options */}
                <li className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-[#DCE3FF] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col gap-1 min-w-0">
                    <a
                      href={`mailto:${CONTACT_INFO.primaryEmail}`}
                      className="hover:text-white transition-colors truncate underline-offset-4 hover:underline font-medium"
                    >
                      {CONTACT_INFO.primaryEmail}
                    </a>
                  </div>
                </li>

                {/* Business Address */}
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#DCE3FF] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed text-xs text-[#DCE3FF]/80">
                    {CONTACT_INFO.address}
                  </span>
                </li>

                {/* Business Hours */}
                <li className="flex items-start gap-2.5 text-[11px] text-[#DCE3FF]/60 pt-0.5">
                  <Clock className="h-3.5 w-3.5 text-[#DCE3FF] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{CONTACT_INFO.businessHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Footer Watermark: Complete "CADEMYX" centered & scaled    */}
        {/* ========================================================= */}
        <div
          className="relative w-full overflow-hidden flex items-center justify-center select-none pointer-events-none py-1 sm:py-2 my-0"
          aria-hidden="true"
        >
          <span
            style={{ fontSize: 'clamp(2.75rem, 8.2vw, 6.75rem)' }}
            className="font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/[0.04] leading-none whitespace-nowrap text-center font-sans max-w-full"
          >
            CADEMYX
          </span>
        </div>

        {/* ========================================================= */}
        {/* Copyright Section (Below Watermark)                       */}
        {/* ========================================================= */}
        <div className="py-5 sm:py-6 border-t border-[#DCE3FF]/15 text-center">
          <p className="text-xs text-[#DCE3FF]/70" suppressHydrationWarning>
            © {currentYear} CademyX. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
