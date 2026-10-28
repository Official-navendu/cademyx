import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isInvalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, isInvalid, disabled, ...props }, ref) => {
    const hasError = Boolean(error || isInvalid);

    return (
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={hasError ? 'true' : undefined}
        className={cn(
          'w-full px-4 py-2.5 rounded-xl text-sm transition-all duration-200',
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

Input.displayName = 'Input';
