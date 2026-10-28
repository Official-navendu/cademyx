import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, disabled, ...props }, ref) => {
    const inputId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : 'checkbox');

    return (
      <div className={cn('flex flex-col gap-1', className)}>
        <label
          htmlFor={inputId}
          className={cn(
            'inline-flex items-start gap-3 cursor-pointer text-sm text-[#061B35] select-none',
            disabled && 'cursor-not-allowed opacity-60'
          )}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={inputId}
              disabled={disabled}
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                'h-5 w-5 rounded border transition-colors flex items-center justify-center',
                'bg-white border-[#CBD5E1]',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-[#F4B72F] peer-focus-visible:ring-offset-1',
                'peer-checked:bg-[#061B35] peer-checked:border-[#061B35]',
                error && 'border-red-500'
              )}
            >
              <Check className="h-3.5 w-3.5 text-[#F4B72F] opacity-0 peer-checked:opacity-100 stroke-[3]" />
            </div>
          </div>
          <span className="leading-snug text-[#152C45]">{label}</span>
        </label>
        {error && (
          <span className="text-xs text-red-600 pl-8" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
