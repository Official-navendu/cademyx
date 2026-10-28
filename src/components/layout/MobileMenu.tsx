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
import { programs, PROGRAM_CATEGORIES, CATEGORY_META } from '@/data/programs';
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
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    Bachelor: true,
    Masters: false,
    Doctorate: false,
    Certifications: false,
  });

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

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
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
            className="fixed inset-0 bg-[#061B35]/75 backdrop-blur-sm touch-none"
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
            className="fixed inset-y-0 right-0 max-w-sm sm:max-w-md w-full bg-white shadow-2xl flex flex-col z-[71] border-l border-[#E2E8F0] pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] overscroll-contain"
          >
            {/* Header: Logo and Close Button */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#F1F5F9] bg-white sticky top-0 z-10">
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
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-[#061B35] hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#F4B72F] flex items-center justify-center cursor-pointer active:scale-95 transition-all"
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
                            ? 'bg-[#061B35] text-[#F4B72F] shadow-sm border border-[#F4B72F]/50'
                            : 'text-[#152C45] hover:bg-[#F5F7FB] hover:text-[#061B35]',
                          'focus-visible:outline-2 focus-visible:outline-[#F4B72F]'
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span>{link.label}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F4B72F]/20 text-[#F4B72F]">
                            All Degrees
                          </span>
                        </span>

                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-200 text-[#F4B72F]',
                            isProgramsExpanded && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Programs Accordion Body */}
                      {isProgramsExpanded && (
                        <div
                          id="mobile-programs-accordion"
                          className="pl-2 sm:pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#F4B72F]/50 ml-3 sm:ml-4 my-2"
                        >
                          {/* Direct Link to Programs Landing Page */}
                          <Link
                            href="/programs"
                            onClick={onClose}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#FEF8E9] to-amber-50 border border-[#F4B72F]/40 text-[#061B35] text-xs font-bold hover:bg-[#F4B72F]/20 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#D99519]" />
                              <span>Explore Programs Landing Page</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#D99519]" />
                          </Link>

                          {/* 4 Category Submenu Accordions */}
                          {PROGRAM_CATEGORIES.map((category) => {
                            const catPrograms = programs.filter((p) => p.category === category);
                            const meta = CATEGORY_META[category];
                            const isCatOpen = Boolean(openCategories[category]);

                            return (
                              <div key={category} className="space-y-1">
                                <button
                                  type="button"
                                  onClick={() => toggleCategory(category)}
                                  aria-expanded={isCatOpen}
                                  className="w-full min-h-[44px] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#152C45]/85 hover:text-[#061B35] px-3 py-2 rounded-lg hover:bg-[#F5F7FB] transition-colors cursor-pointer"
                                >
                                  <div className="flex items-center gap-1.5">
                                    <span className={cn('w-2 h-2 rounded-full', meta.dotClass)} />
                                    <span>{category}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-mono text-[#152C45]/70 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">
                                      {catPrograms.length}
                                    </span>
                                    <ChevronDown
                                      className={cn(
                                        'w-3.5 h-3.5 text-slate-400 transition-transform duration-200',
                                        isCatOpen && 'rotate-180'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                </button>

                                {isCatOpen && (
                                  <div className="pl-3 space-y-1 py-1">
                                    {catPrograms.map((p) => (
                                      <Link
                                        key={p.id}
                                        href={`/programs/${p.slug}`}
                                        onClick={onClose}
                                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[#152C45] hover:bg-[#F5F7FB] hover:text-[#061B35] transition-colors"
                                      >
                                        <span className="truncate pr-2">{p.title}</span>
                                        {p.badge && (
                                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#F4B72F]/15 text-[#D99519] border border-[#F4B72F]/30 shrink-0">
                                            {p.badge}
                                          </span>
                                        )}
                                      </Link>
                                    ))}

                                    <Link
                                      href={`/programs?category=${encodeURIComponent(category)}`}
                                      onClick={onClose}
                                      className="flex items-center gap-1.5 text-xs font-bold text-[#D99519] hover:text-[#061B35] px-2.5 py-1.5 transition-colors"
                                    >
                                      <span>View all {catPrograms.length} {category} in catalogue</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            );
                          })}

                          {/* View All Programs Catalogue Link */}
                          <Link
                            href="/programs"
                            onClick={onClose}
                            className="inline-flex items-center justify-between gap-1 text-xs font-bold text-[#061B35] hover:text-[#075AC8] px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200/80 w-full transition-colors mt-2"
                          >
                            <span>View All {programs.length} Programs Catalogue</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#F4B72F]" />
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
                        ? 'bg-[#061B35] text-[#F4B72F] shadow-sm border border-[#F4B72F]/50'
                        : 'text-[#152C45] hover:bg-[#F5F7FB] hover:text-[#061B35]'
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      className={cn(
                        'h-4 w-4 transition-transform',
                        isActive ? 'text-[#F4B72F]' : 'text-[#94A3B8]'
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}

              {/* Consultation CTA Button */}
              <div className="pt-4 mt-4 border-t border-[#F1F5F9]">
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
              <div className="pt-5 mt-4 border-t border-[#F1F5F9] space-y-2.5 text-xs text-[#152C45]/80">
                <p className="font-bold text-[#061B35] uppercase tracking-wider text-[11px] gold-gradient-text">
                  Direct Advisory Contact
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-[#152C45] hover:text-[#075AC8] py-1 transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#F4B72F] shrink-0" />
                  <span className="truncate">{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2.5 text-[#152C45] hover:text-[#075AC8] py-1 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#F4B72F] shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </div>
            </nav>

            {/* Footer Info in Drawer */}
            <div className="p-4 sm:p-5 border-t border-[#F1F5F9] bg-[#F8FAFC] text-[11px] text-[#152C45]/70 flex items-center justify-between">
              <span>CademyX Academic Guidance</span>
              <span className="font-semibold text-[#061B35]">Est. {BRAND.foundingYear}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

