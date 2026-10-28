import React from 'react';
import { RotateCcw } from 'lucide-react';
import { PROGRAM_CATEGORIES, getCategoryCounts, CATEGORY_META } from '@/data/programs';
import { cn } from '@/lib/utils';

export interface ProgramFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedFormat?: string;
  onSelectFormat?: (format: string) => void;
  hasActiveFilters: boolean;
  onReset: () => void;
  className?: string;
  totalCount?: number;
}

export const ProgramFilters: React.FC<ProgramFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  hasActiveFilters,
  onReset,
  className,
  totalCount = 12,
}) => {
  const categoryCounts = getCategoryCounts();

  return (
    <div className={cn('flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4', className)}>
      {/* Category Pills with Dynamic Counts */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
        <button
          type="button"
          onClick={() => onSelectCategory('All')}
          className={cn(
            'px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2',
            selectedCategory === 'All'
              ? 'bg-[#061B35] text-[#F4B72F] shadow-md border border-[#F4B72F]/60'
              : 'bg-white text-[#475569] hover:bg-white hover:text-[#061B35] hover:border-[#F4B72F]/40 border border-[#E2E8F0] shadow-2xs'
          )}
        >
          <span>All Programs</span>
          <span
            className={cn(
              'px-1.5 py-0.2 rounded-full text-[10px] font-extrabold',
              selectedCategory === 'All'
                ? 'bg-[#F4B72F]/25 text-[#F4B72F]'
                : 'bg-[#F1F5F9] text-[#64748B]'
            )}
          >
            {totalCount}
          </span>
        </button>

        {PROGRAM_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;
          const meta = CATEGORY_META[cat];

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2',
                isSelected
                  ? 'bg-[#061B35] text-[#F4B72F] shadow-md border border-[#F4B72F]/60'
                  : 'bg-white text-[#475569] hover:bg-white hover:text-[#061B35] hover:border-[#F4B72F]/40 border border-[#E2E8F0] shadow-2xs'
              )}
            >
              <span className={cn('w-2 h-2 rounded-full shrink-0', meta.dotClass)} />
              <span>{cat}</span>
              <span
                className={cn(
                  'px-1.5 py-0.2 rounded-full text-[10px] font-extrabold',
                  isSelected
                    ? 'bg-[#F4B72F]/25 text-[#F4B72F]'
                    : 'bg-[#F1F5F9] text-[#64748B]'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clear action */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs text-[#D99519] bg-gradient-to-r from-[#F4B72F]/15 to-[#F4B72F]/15 border border-[#F4B72F]/35 font-bold px-3.5 py-2 rounded-xl hover:bg-[#F4B72F]/25 transition-all cursor-pointer shadow-2xs"
            title="Reset all filters"
          >
            <RotateCcw className="h-3 w-3 text-[#F4B72F]" />
            <span>Clear Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
