'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Phone, Mail, ChevronDown } from 'lucide-react';
import { headerNavigation } from '@/data/navigation';
import { BRAND, CONTACT_INFO } from '@/lib/constants';
import { programs, PROGRAM_CATEGORIES, CATEGORY_META } from '@/data/programs';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isProgramsExpanded, setIsProgramsExpanded] = useState(true);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    Bachelor: true,
    Masters: false,
    Doctorate: false,
    Certifications: false,
  });

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#061B35]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-sm sm:max-w-md w-full bg-white shadow-2xl flex flex-col z-10 border-l border-[#E2E8F0] pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#F1F5F9]">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="CademyX"
              width={180}
              height={58}
              className="h-8.5 sm:h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-[#152C45]/80 hover:text-[#061B35] hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#F4B72F] flex items-center justify-center cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links Navigation */}
        <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 sm:py-6 space-y-2">
          {headerNavigation.links.map((link) => {
            const isPrograms = link.href === '/programs';
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            if (isPrograms) {
              return (
                <div key={link.href} className="space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <Link
                      href="/programs"
                      onClick={onClose}
                      className={cn(
                        'flex-1 min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-all',
                        isActive
                          ? 'bg-[#061B35] text-[#F4B72F] shadow-md border border-[#F4B72F]/60'
                          : 'text-[#152C45] hover:bg-[#F5F7FB] hover:text-[#061B35]'
                      )}
                    >
                      <span>{link.label}</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setIsProgramsExpanded((prev) => !prev)}
                      aria-expanded={isProgramsExpanded}
                      aria-label="Toggle programs submenu"
                      className="min-h-[44px] min-w-[44px] p-2.5 text-[#152C45]/70 hover:text-[#061B35] focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded-lg flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          isProgramsExpanded && 'rotate-180'
                        )}
                      />
                    </button>
                  </div>

                  {/* Submenu grouped under 4 categories */}
                  {isProgramsExpanded && (
                    <div className="pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#F4B72F]/40 ml-4 my-2">
                      {PROGRAM_CATEGORIES.map((category) => {
                        const catPrograms = programs.filter((p) => p.category === category);
                        const meta = CATEGORY_META[category];
                        const isCatOpen = Boolean(openCategories[category]);

                        return (
                          <div key={category} className="space-y-1">
                            <button
                              type="button"
                              onClick={() => toggleCategory(category)}
                              className="w-full min-h-[44px] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#152C45]/80 hover:text-[#061B35] px-3 py-2 rounded-lg hover:bg-[#F5F7FB] transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className={cn('w-1.5 h-1.5 rounded-full', meta.dotClass)} />
                                <span>{category}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-[#152C45]/70 font-semibold bg-slate-100 px-1.5 py-0.2 rounded-full">
                                  {catPrograms.length}
                                </span>
                                <ChevronDown
                                  className={cn(
                                    'w-3.5 h-3.5 text-slate-400 transition-transform duration-200',
                                    isCatOpen && 'rotate-180'
                                  )}
                                />
                              </div>
                            </button>

                            {isCatOpen && (
                              <div className="pl-2 space-y-1 py-1">
                                {catPrograms.map((p) => (
                                  <Link
                                    key={p.id}
                                    href={`/programs/${p.slug}`}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#152C45] hover:bg-[#F5F7FB] hover:text-[#061B35] transition-colors"
                                  >
                                    <span className="truncate pr-2">{p.title}</span>
                                    {p.badge && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#F4B72F]/15 text-[#D99519] border border-[#F4B72F]/30 shrink-0">
                                        {p.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}

                                <Link
                                  href={`/programs?category=${encodeURIComponent(category)}`}
                                  onClick={onClose}
                                  className="flex items-center gap-1 text-xs font-bold text-[#F4B72F] hover:text-[#D99519] px-2.5 py-1"
                                >
                                  <span>View all {catPrograms.length} {category} in catalogue</span>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      <Link
                        href="/programs"
                        onClick={onClose}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#061B35] hover:text-[#075AC8] px-2 pt-2 border-t border-[#E2E8F0] w-full"
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
                  'flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-xl text-base font-bold transition-all',
                  isActive
                    ? 'bg-[#061B35] text-[#F4B72F] shadow-md border border-[#F4B72F]/60'
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

          <div className="pt-6 mt-6 border-t border-[#F1F5F9]">
            <Button
              href={headerNavigation.ctaButton.href}
              variant="gold"
              size="lg"
              className="w-full font-bold shadow-md"
              onClick={onClose}
            >
              {headerNavigation.ctaButton.label}
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="pt-6 mt-4 border-t border-[#F1F5F9] space-y-3 text-xs text-[#152C45]/70">
            <p className="font-bold text-[#061B35] uppercase tracking-wider text-[11px] gold-gradient-text">
              Direct Contact
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2.5 text-[#152C45] hover:text-[#075AC8]"
            >
              <Mail className="h-4 w-4 text-[#F4B72F]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-2.5 text-[#152C45] hover:text-[#075AC8]"
            >
              <Phone className="h-4 w-4 text-[#F4B72F]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </nav>

        {/* Footer info in drawer */}
        <div className="p-5 border-t border-[#F1F5F9] bg-[#F8FAFC] text-[11px] text-[#152C45]/70 flex items-center justify-between">
          <span>CademyX Academic Guidance</span>
          <span className="font-semibold text-[#061B35]">Est. {BRAND.foundingYear}</span>
        </div>
      </div>
    </div>
  );
};
