'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { MobileMenu } from './MobileMenu';

export const MobileNavigation: React.FC = () => {
  const { isOpen, closeMenu, toggleMenu } = useMobileMenu();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      closeMenu();
    }
  };

  return (
    <div className="lg:hidden flex items-center">
      <button
        type="button"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-[#061B35] hover:bg-[#F1F5F9] transition-colors focus-visible:outline-2 focus-visible:outline-[#F4B72F] flex items-center justify-center cursor-pointer active:scale-95"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-[#061B35]" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6 text-[#061B35]" aria-hidden="true" />
        )}
      </button>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </div>
  );
};

