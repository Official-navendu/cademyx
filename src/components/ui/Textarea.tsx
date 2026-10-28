import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  isInvalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, isInvalid, disabled, rows = 4, ...props }, ref) => {
    const hasError = Boolean(error || isInvalid);

    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        aria-invalid={hasError ? 'true' : undefined}
        className={cn(
          'w-full px-4 py-2.5 rounded-xl text-sm transition-all duration-200 resize-y min-h-[110px]',
          'bg-white text-[#061B35] placeholder:text-[#94A3B8]',
          'border shadow-2xs',
          hasError
            ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/25'
            : 'border-[#CBD5E1] hover:border-[#075AC8]/60 focus:border-[#075AC8] focus:ring-2 focus:ring-[#075AC8]/20',
          'focus:outline-none',
          disabled && 'bg-[#F8FAFC] text-[#94A3B8] cursor-not-allowed border-[#E2E8F0]',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
