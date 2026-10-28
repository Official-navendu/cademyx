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
        'flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC]',
        className
      )}
    >
      <div className="h-16 w-16 rounded-full bg-[#061B35]/5 border border-[#061B35]/10 flex items-center justify-center text-[#061B35] mb-4">
        <SearchX className="h-8 w-8 text-[#061B35]" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-[#061B35]">{title}</h3>
      <p className="mt-2 text-sm text-[#5A6A85] max-w-md">{description}</p>
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
