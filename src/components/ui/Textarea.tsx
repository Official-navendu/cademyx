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
          'bg-white text-[#101F70] placeholder:text-[#6573A8]',
          'border shadow-2xs',
          hasError
            ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/25'
            : 'border-[#DCE3FF] hover:border-[#182A9A]/60 focus:border-[#182A9A] focus:ring-2 focus:ring-[#182A9A]/20',
          'focus:outline-none',
          disabled && 'bg-[#F3F5FF] text-[#6573A8] cursor-not-allowed border-[#DCE3FF]',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
