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
          className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6573A8] group-focus-within:text-[#182A9A] transition-colors pointer-events-none"
          aria-hidden="true"
        />
        <input
          id="program-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by title, topic, or keyword..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm bg-white border border-[#DCE3FF] text-[#101F70] placeholder:text-[#6573A8] shadow-xs hover:border-[#182A9A]/50 focus:border-[#182A9A] focus:ring-2 focus:ring-[#182A9A]/20 focus:outline-none transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search query"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6573A8] hover:text-[#101F70] hover:bg-[#F3F5FF] rounded-md transition-colors"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
