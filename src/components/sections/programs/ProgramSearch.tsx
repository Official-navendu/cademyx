import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProgramSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  className?: string;
}

export const ProgramSearch: React.FC<ProgramSearchProps> = ({
  value,
  onChange,
  onClear,
  className,
}) => {
  return (
    <div className={cn('relative w-full max-w-md', className)}>
      <label htmlFor="program-search" className="sr-only">
        Search academic programs
      </label>
      <div className="relative group">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B] group-focus-within:text-[#F4B72F] transition-colors pointer-events-none"
          aria-hidden="true"
        />
        <input
          id="program-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by title, topic, or keyword..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm bg-white border border-[#CBD5E1] text-[#061B35] placeholder:text-[#94A3B8] shadow-xs hover:border-[#94A3B8] focus:border-[#F4B72F] focus:ring-2 focus:ring-[#F4B72F]/25 focus:outline-none transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search query"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#94A3B8] hover:text-[#061B35] hover:bg-[#F1F5F9] rounded-md transition-colors"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
