'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { footerNavigation } from '@/data/navigation';
import { CONTACT_INFO } from '@/lib/constants';

export const SiteFooter: React.FC = () => {
  const currentYear = 2026;

  // Selected top program tracks derived from central catalog
  const topPrograms = [
    { label: 'B.Tech CSE', href: '/programs/b-tech-cse' },
    { label: 'MBA in AI & Automation', href: '/programs/mba-ai-automation' },
    { label: 'Master in Data Science', href: '/programs/master-data-science' },
    { label: 'PhD Admission Program', href: '/programs/phd-admission-program' },
    { label: 'Full Stack Development', href: '/programs/full-stack-development' },
  ];

  return (
    <footer className="relative bg-[#061B35] text-white border-t border-[#075AC8]/30 mt-auto overflow-hidden bg-grain">
      {/* Top Luminous Section Divider Glow */}
      <div className="section-divider-glow absolute top-0 left-0 right-0 z-10" />

      {/* Atmospheric Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-[#F4B72F]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-t from-[#075AC8]/[0.15] to-transparent rounded-full blur-2xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        {/* Main 5-Column Grid */}
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 — Brand & Social Channels (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link
              href="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded transition-transform hover:scale-[1.01]"
              aria-label="CademyX — We Setup the Academic Matrix of Your True Aim."
            >
              <Image
                src="/assets/logo-white.png"
                alt="CademyX — We Setup the Academic Matrix of Your True Aim."
                width={210}
                height={70}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#BACCE4] leading-relaxed max-w-sm font-normal">
              {footerNavigation.brandDescription}
            </p>

            <div className="flex items-center gap-2.5 text-xs text-[#F4B72F]">
              <ShieldCheck className="h-4 w-4 text-[#F4B72F] shrink-0" aria-hidden="true" />
              <span className="font-semibold">Ethical academic guidance &amp; structured mentorship</span>
            </div>

            {/* Official Social Media Channels with authentic SVGs and real brand colors */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E96B8] block mb-3">
                Official Channels &amp; Communities
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook (#1877F2) */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook (CademyX official updates)"
                  title="Facebook: CademyX Official"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram (Official Brand Gradient) */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram (CademyX campus & academic life)"
                  title="Instagram: CademyX Community"
                  className="w-9 h-9 rounded-xl text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn (#0A66C2) */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn (CademyX academic research & network)"
                  title="LinkedIn: CademyX Network"
                  className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* X / Twitter (#000000 / Dark) */}
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

                {/* WhatsApp (#25D366) */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on WhatsApp (Advisory assistance)"
                  title="WhatsApp: Direct Advisory"
                  className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 0C5.396 0 0 5.397 0 12.034c0 2.12.553 4.188 1.606 6.012L.065 24l6.126-1.607a11.968 11.968 0 005.84 1.503h.005c6.635 0 12.032-5.397 12.032-12.034 0-3.214-1.252-6.236-3.525-8.51A11.956 11.956 0 0012.031 0zm0 22.025h-.004a9.98 9.98 0 01-5.093-1.392l-.365-.216-3.785.993 1.01-3.69-.238-.378a9.983 9.983 0 01-1.533-5.308c0-5.525 4.495-10.02 10.02-10.02 2.676 0 5.192 1.043 7.084 2.937a9.972 9.972 0 012.934 7.087c0 5.525-4.494 10.02-10.02 10.02zm5.498-7.508c-.301-.15-1.783-.879-2.06-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.351.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.93-2.236-.245-.588-.494-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.909 1.23 3.11c.15.2 2.123 3.242 5.144 4.548.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.783-.728 2.034-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.352z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block"
                >
                  Contact &amp; Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Programs (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Programs
            </h3>

            {/* Category Page Links */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <Link
                  href="/program-categories/bachelor-programs"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block font-semibold"
                >
                  Bachelor Programs
                </Link>
              </div>
              <div>
                <Link
                  href="/program-categories/masters-programs"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block font-semibold"
                >
                  Masters Programs
                </Link>
              </div>
              <div>
                <Link
                  href="/program-categories/doctorate-programs"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block font-semibold"
                >
                  Doctorate Programs
                </Link>
              </div>
              <div>
                <Link
                  href="/program-categories/certification-programs"
                  className="text-[#BACCE4] hover:text-[#F4B72F] transition-colors inline-block font-semibold"
                >
                  Certifications
                </Link>
              </div>
            </div>

            {/* Selected Top Tracks */}
            <div className="pt-3 mt-3 border-t border-[#075AC8]/25">
              <span className="text-[10px] uppercase font-bold text-[#7E96B8] tracking-wider block mb-2">
                Featured Tracks
              </span>
              <ul className="space-y-1.5 text-xs">
                {topPrograms.slice(0, 3).map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-[#BACCE4]/80 hover:text-[#F4B72F] transition-colors line-clamp-1"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 — Resources (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#BACCE4]">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#F4B72F] transition-colors inline-block font-medium"
                >
                  Academic Pathways Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#F4B72F] transition-colors inline-block font-medium"
                >
                  Educational Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/about#faqs"
                  className="hover:text-[#F4B72F] transition-colors inline-block font-medium"
                >
                  Advisory FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-[#F4B72F] transition-colors inline-block font-medium"
                >
                  Course Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F4B72F] transition-colors inline-block font-medium"
                >
                  Advisory Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 — Advisory Office / Contact (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider gold-gradient-text mb-4">
              Advisory Office
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#BACCE4]">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#F4B72F] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`mailto:${CONTACT_INFO.primaryEmail}`}
                    className="hover:text-[#F4B72F] transition-colors underline-offset-4 hover:underline"
                  >
                    {CONTACT_INFO.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.secondaryEmail}`}
                    className="hover:text-[#F4B72F] transition-colors underline-offset-4 hover:underline text-[#BACCE4]/80"
                  >
                    {CONTACT_INFO.secondaryEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#F4B72F] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="hover:text-[#F4B72F] transition-colors font-medium"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-[11px] text-[#7E96B8]">
                <Clock className="h-3.5 w-3.5 text-[#F4B72F] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CONTACT_INFO.businessHours}</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#075AC8]/30">
              <Link
                href="/contact"
                className="text-xs font-bold text-[#F4B72F] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Advisory Inquiry</span>
                <ArrowRight className="h-3 w-3 text-[#F4B72F]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="py-7 border-t border-[#075AC8]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E96B8]">
          <p suppressHydrationWarning>© {currentYear} CademyX. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {footerNavigation.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#BACCE4] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('cademyx:open-cookie-preferences'));
                }
              }}
              className="hover:text-[#BACCE4] transition-colors cursor-pointer text-left"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
