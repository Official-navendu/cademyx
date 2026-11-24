'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { headerNavigation } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { ProgramsMegaMenu } from './ProgramsMegaMenu';
import { cn } from '@/lib/utils';

export const DesktopNavigation: React.FC = () => {
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu when route changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMegaMenuOpen(false);
  }

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Dedicated handlers scoped strictly to Programs trigger
  const handleProgramsTriggerEnter = () => {
    cancelClose();
    setIsMegaMenuOpen(true);
  };

  const handleProgramsTriggerLeave = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  // Handlers for the Mega Menu itself
  const handleMenuEnter = () => {
    cancelClose();
  };

  const handleMenuLeave = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  // When hovering or clicking ANY unrelated item, immediately close the Programs menu
  const handleUnrelatedItemEnter = () => {
    cancelClose();
    setIsMegaMenuOpen(false);
  };

  return (
    <div className="hidden lg:flex items-center">
      <nav aria-label="Main Navigation" className="flex items-center gap-1 xl:gap-2">
        {headerNavigation.links.map((link) => {
          const isPrograms = link.href === '/programs';
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);

          if (isPrograms) {
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={handleProgramsTriggerEnter}
                onMouseLeave={handleProgramsTriggerLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    cancelClose();
                    setIsMegaMenuOpen((prev) => !prev);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsMegaMenuOpen((prev) => !prev);
                    }
                  }}
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="menu"
                  className={cn(
                    'px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 relative inline-flex items-center gap-1 cursor-pointer',
                    isActive || isMegaMenuOpen
                      ? 'text-[#182A9A] font-bold bg-[#F3F5FF]'
                      : 'text-[#26345C] hover:text-[#182A9A] hover:bg-[#F3F5FF]',
                    'focus-visible:outline-2 focus-visible:outline-[#182A9A]'
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 text-[#182A9A] transition-transform duration-200',
                      isMegaMenuOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2.5px] bg-gradient-to-r from-[#182A9A] to-[#101F70] rounded-full shadow-xs"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={handleUnrelatedItemEnter}
              onClick={handleUnrelatedItemEnter}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 relative',
                isActive
                  ? 'text-[#182A9A] font-bold bg-[#F3F5FF]'
                  : 'text-[#26345C] hover:text-[#182A9A] hover:bg-[#F3F5FF]',
                'focus-visible:outline-2 focus-visible:outline-[#182A9A]'
              )}
            >
              {link.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2.5px] bg-gradient-to-r from-[#182A9A] to-[#101F70] rounded-full shadow-xs"
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}

        <div
          className="ml-2 xl:ml-4 pl-2 xl:pl-4 border-l border-[#DCE3FF]"
          onMouseEnter={handleUnrelatedItemEnter}
        >
          <Button
            href={headerNavigation.ctaButton.href}
            variant="gold"
            size="sm"
            className="shadow-sm font-bold text-xs xl:text-sm px-3 py-1.5 xl:px-4 xl:py-2"
            onClick={handleUnrelatedItemEnter}
          >
            {headerNavigation.ctaButton.label}
          </Button>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <div
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMenuLeave}
      >
        <ProgramsMegaMenu
          isOpen={isMegaMenuOpen}
          onClose={handleUnrelatedItemEnter}
        />
      </div>
    </div>
  );
};
