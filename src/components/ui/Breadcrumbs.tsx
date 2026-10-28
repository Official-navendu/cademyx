import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '@/types/common';
import { cn } from '@/lib/utils';

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-xs sm:text-sm py-3', className)}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[#152C45]/80">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-[#152C45]/80 hover:text-[#075AC8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#F4B72F] rounded-sm"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-[#94A3B8] shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="font-semibold text-[#061B35] truncate max-w-[200px] sm:max-w-md"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#152C45]/80 hover:text-[#075AC8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#F4B72F] rounded-sm"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
