import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  resetLabel?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Programs Found',
  description = 'We could not find any academic tracks matching your current search criteria or category filter.',
  onReset,
  resetLabel = 'Clear All Filters',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-2xl border border-dashed border-[#DCE3FF] bg-[#F3F5FF]',
        className
      )}
    >
      <div className="h-16 w-16 rounded-full bg-white border border-[#DCE3FF] flex items-center justify-center text-[#182A9A] mb-4 shadow-xs">
        <SearchX className="h-8 w-8 text-[#182A9A]" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-[#101F70]">{title}</h3>
      <p className="mt-2 text-sm text-[#6573A8] max-w-md">{description}</p>
      {onReset && (
        <div className="mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            leadingIcon={<RotateCcw className="h-3.5 w-3.5" />}
          >
            {resetLabel}
          </Button>
        </div>
      )}
    </div>
  );
};
