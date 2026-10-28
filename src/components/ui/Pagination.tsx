'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  // Generate numbered pages array with smart ellipsis
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always include page 1
    pages.push(1);

    if (currentPage > 3) {
      pages.push('ellipsis');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis');
    }

    // Always include last page
    pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Academic programs pagination"
      className={cn('flex flex-col sm:flex-row items-center justify-between gap-4 pt-8', className)}
    >
      {/* Mobile-friendly page indicator */}
      <div className="text-xs text-[#5A6A85] sm:hidden font-medium">
        Page <span className="font-bold text-[#061B35]">{currentPage}</span> of{' '}
        <span className="font-bold text-[#061B35]">{totalPages}</span>
      </div>

      {/* Main Controls Wrapper */}
      <div className="flex items-center gap-1 sm:gap-2 mx-auto sm:mx-0 max-w-full overflow-x-auto py-1 px-1">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
          className={cn(
            'inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-200 border',
            currentPage <= 1
              ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
              : 'bg-white text-[#061B35] border-[#E2E8F0] hover:border-[#F4B72F] hover:bg-[#FEF8E9] hover:text-[#061B35] cursor-pointer shadow-2xs hover:shadow-sm'
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Numbered Buttons */}
        <div className="flex items-center gap-1">
          {pages.map((item, idx) => {
            if (item === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-5 sm:w-8 h-8 sm:h-9 flex items-center justify-center text-xs text-[#94A3B8] select-none font-bold shrink-0"
                  aria-hidden="true"
                >
                  •••
                </span>
              );
            }

            const isCurrent = item === currentPage;

            return (
              <button
                key={item}
                type="button"
                onClick={() => handlePageClick(item)}
                aria-label={`Page ${item}`}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-200 flex items-center justify-center cursor-pointer',
                  isCurrent
                    ? 'bg-[#061B35] text-[#F4B72F] border-2 border-[#F4B72F] shadow-md scale-105'
                    : 'bg-white text-[#152C45] border border-[#E2E8F0] hover:border-[#F4B72F]/60 hover:bg-[#F8FAFC] hover:text-[#075AC8] shadow-2xs'
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
          className={cn(
            'inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-200 border',
            currentPage >= totalPages
              ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
              : 'bg-white text-[#061B35] border-[#E2E8F0] hover:border-[#F4B72F] hover:bg-[#FEF8E9] hover:text-[#061B35] cursor-pointer shadow-2xs hover:shadow-sm'
          )}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Desktop Page summary */}
      <div className="hidden sm:block text-xs text-[#5A6A85] font-medium">
        Page <span className="font-bold text-[#061B35]">{currentPage}</span> of{' '}
        <span className="font-bold text-[#061B35]">{totalPages}</span>
      </div>
    </nav>
  );
};
