'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowRight, Phone, Mail, ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { headerNavigation } from '@/data/navigation';
import { BRAND, CONTACT_INFO } from '@/lib/constants';
import { SUBJECT_CATEGORIES, DOCTORATE_TRACKS_META, CERTIFICATION_TRACKS_META } from '@/data/categories';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [isProgramsExpanded, setIsProgramsExpanded] = useState(false);
  const [openSection, setOpenSection] = useState<'disciplines' | 'doctorate' | 'certifications' | null>('disciplines');

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-focus close button when modal opens for keyboard users
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleSection = (sec: 'disciplines' | 'doctorate' | 'certifications') => {
    setOpenSection((prev) => (prev === sec ? null : sec));
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-[70] lg:hidden"
        >
          {/* Backdrop with click-to-dismiss and touch isolation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#101F70]/75 backdrop-blur-sm touch-none"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
            animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-y-0 right-0 max-w-sm sm:max-w-md w-full bg-white shadow-2xl flex flex-col z-[71] border-l border-[#DCE3FF] pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] overscroll-contain"
          >
            {/* Header: Logo and Close Button */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#DCE3FF] bg-white sticky top-0 z-10">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <Image
                  src="/assets/logo.png"
                  alt="CademyX"
                  width={180}
                  height={55}
                  priority
                  className="h-8.5 sm:h-9.5 w-auto object-contain"
                />
              </Link>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-[#101F70] hover:bg-[#F3F5FF] focus-visible:outline-2 focus-visible:outline-[#182A9A] flex items-center justify-center cursor-pointer active:scale-95 transition-all"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <nav
              aria-label="Mobile Navigation"
              className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 sm:py-6 space-y-2.5 overscroll-contain"
            >
              {headerNavigation.links.map((link) => {
                const isPrograms = link.href === '/programs';
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                if (isPrograms) {
                  return (
                    <div key={link.href} className="space-y-1.5">
                      {/* Programs Accordion Header */}
                      <button
                        type="button"
                        onClick={() => setIsProgramsExpanded((prev) => !prev)}
                        aria-expanded={isProgramsExpanded}
                        aria-controls="mobile-programs-accordion"
                        className={cn(
                          'w-full min-h-[46px] flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-bold transition-all cursor-pointer',
                          isActive || isProgramsExpanded
                            ? 'bg-[#101F70] text-white shadow-sm border border-[#182A9A]'
                            : 'text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A]',
                          'focus-visible:outline-2 focus-visible:outline-[#182A9A]'
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span>{link.label}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F3F5FF] text-[#182A9A]">
                            All Degrees
                          </span>
                        </span>

                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-200',
                            isActive || isProgramsExpanded ? 'text-white' : 'text-[#6573A8]',
                            isProgramsExpanded && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Programs Accordion Body */}
                      {isProgramsExpanded && (
                        <div
                          id="mobile-programs-accordion"
                          className="pl-2 sm:pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#182A9A] ml-3 sm:ml-4 my-2"
                        >
                          {/* Direct Link to Programs Landing Page */}
                          <Link
                            href="/programs"
                            onClick={onClose}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF] text-[#101F70] text-xs font-bold hover:bg-[#DCE3FF]/40 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#182A9A]" />
                              <span>Explore Programs Landing Page</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#182A9A]" />
                          </Link>

                          {/* Group A: 15 Subject Disciplines */}
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() => toggleSection('disciplines')}
                              aria-expanded={openSection === 'disciplines'}
                              className="w-full min-h-[44px] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#26345C] hover:text-[#182A9A] px-3 py-2 rounded-lg hover:bg-[#F3F5FF] transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#182A9A]" />
                                <span>15 Subject Disciplines</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-[#182A9A] font-semibold bg-[#F3F5FF] border border-[#DCE3FF] px-1.5 py-0.5 rounded-full">
                                  15
                                </span>
                                <ChevronDown
                                  className={cn(
                                    'w-3.5 h-3.5 text-[#6573A8] transition-transform duration-200',
                                    openSection === 'disciplines' && 'rotate-180'
                                  )}
                                  aria-hidden="true"
                                />
                              </div>
                            </button>

                            {openSection === 'disciplines' && (
                              <div className="pl-3 space-y-1 py-1">
                                {SUBJECT_CATEGORIES.map((cat) => (
                                  <Link
                                    key={cat.slug}
                                    href={`/program-categories/${cat.slug}`}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A] transition-colors"
                                  >
                                    <span className="truncate pr-2">{cat.name}</span>
                                    <ArrowRight className="w-3 h-3 text-[#6573A8] shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Group B: Doctorate — 3 Tracks */}
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() => toggleSection('doctorate')}
                              aria-expanded={openSection === 'doctorate'}
                              className="w-full min-h-[44px] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#26345C] hover:text-[#182A9A] px-3 py-2 rounded-lg hover:bg-[#F3F5FF] transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#182A9A]" />
                                <span>Doctorate</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-[#182A9A] font-semibold bg-[#F3F5FF] border border-[#DCE3FF] px-1.5 py-0.5 rounded-full">
                                  3 Tracks
                                </span>
                                <ChevronDown
                                  className={cn(
                                    'w-3.5 h-3.5 text-[#6573A8] transition-transform duration-200',
                                    openSection === 'doctorate' && 'rotate-180'
                                  )}
                                  aria-hidden="true"
                                />
                              </div>
                            </button>

                            {openSection === 'doctorate' && (
                              <div className="pl-3 space-y-1 py-1">
                                {DOCTORATE_TRACKS_META.map((track) => (
                                  <Link
                                    key={track.slug}
                                    href={`/programs/${track.slug}`}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A] transition-colors"
                                  >
                                    <span className="truncate pr-2">{track.title}</span>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#182A9A] text-white shrink-0 uppercase">
                                      {track.badge}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Group C: Certifications — 4 Tracks */}
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() => toggleSection('certifications')}
                              aria-expanded={openSection === 'certifications'}
                              className="w-full min-h-[44px] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#26345C] hover:text-[#182A9A] px-3 py-2 rounded-lg hover:bg-[#F3F5FF] transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#182A9A]" />
                                <span>Certifications</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-[#182A9A] font-semibold bg-[#F3F5FF] border border-[#DCE3FF] px-1.5 py-0.5 rounded-full">
                                  4 Tracks
                                </span>
                                <ChevronDown
                                  className={cn(
                                    'w-3.5 h-3.5 text-[#6573A8] transition-transform duration-200',
                                    openSection === 'certifications' && 'rotate-180'
                                  )}
                                  aria-hidden="true"
                                />
                              </div>
                            </button>

                            {openSection === 'certifications' && (
                              <div className="pl-3 space-y-1 py-1">
                                {CERTIFICATION_TRACKS_META.map((track) => (
                                  <Link
                                    key={track.slug}
                                    href={`/programs/${track.slug}`}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A] transition-colors"
                                  >
                                    <span className="truncate pr-2">{track.title}</span>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#101F70] text-white shrink-0 uppercase">
                                      {track.badge}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* View All Programs Catalogue Link */}
                          <Link
                            href="/programs"
                            onClick={onClose}
                            className="inline-flex items-center justify-between gap-1 text-xs font-bold text-[#101F70] hover:text-[#182A9A] px-3 py-2.5 rounded-lg bg-[#F3F5FF] border border-[#DCE3FF] w-full transition-colors mt-2"
                          >
                            <span>Explore All Academic Programs</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#182A9A]" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between min-h-[46px] px-4 py-2.5 rounded-xl text-base font-bold transition-all',
                      isActive
                        ? 'bg-[#101F70] text-white shadow-sm border border-[#182A9A]'
                        : 'text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A]'
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      className={cn(
                        'h-4 w-4 transition-transform',
                        isActive ? 'text-white' : 'text-[#6573A8]'
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}

              {/* Consultation CTA Button */}
              <div className="pt-4 mt-4 border-t border-[#DCE3FF]">
                <Button
                  href={headerNavigation.ctaButton.href}
                  variant="gold"
                  size="lg"
                  className="w-full font-bold shadow-md rounded-xl min-h-[46px] flex items-center justify-center gap-2"
                  onClick={onClose}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{headerNavigation.ctaButton.label}</span>
                </Button>
              </div>

              {/* Quick Advisory Contact Info */}
              <div className="pt-5 mt-4 border-t border-[#DCE3FF] space-y-2.5 text-xs text-[#26345C]">
                <p className="font-bold text-[#101F70] uppercase tracking-wider text-[11px]">
                  Direct Advisory Contact
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-[#26345C] hover:text-[#182A9A] py-1 transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#182A9A] shrink-0" />
                  <span className="truncate">{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2.5 text-[#26345C] hover:text-[#182A9A] py-1 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#182A9A] shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </div>
            </nav>

            {/* Footer Info in Drawer */}
            <div className="p-4 sm:p-5 border-t border-[#DCE3FF] bg-[#F3F5FF] text-[11px] text-[#6573A8] flex items-center justify-between">
              <span>CademyX Academic Guidance</span>
              <span className="font-semibold text-[#101F70]">Est. {BRAND.foundingYear}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

