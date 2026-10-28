import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading academic resources...',
  className,
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex flex-col items-center justify-center py-16 px-4 text-center',
        className
      )}
    >
      <div className="relative mb-4">
        <div className="h-12 w-12 rounded-full border-2 border-[#E2E8F0] border-t-[#F4B72F] animate-spin" />
        <Loader2 className="h-6 w-6 text-[#061B35] absolute top-3 left-3 animate-pulse" />
      </div>
      <p className="text-sm font-semibold text-[#061B35]">{message}</p>
      <span className="sr-only">Loading</span>
    </div>
  );
};
