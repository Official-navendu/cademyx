import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[] | readonly string[];
  placeholder?: string;
  error?: string;
  isInvalid?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, error, isInvalid, disabled, ...props }, ref) => {
    const hasError = Boolean(error || isInvalid);

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          aria-invalid={hasError ? 'true' : undefined}
          className={cn(
            'w-full appearance-none px-4 py-2.5 pr-10 rounded-xl text-sm transition-all duration-200',
            'bg-white text-[#061B35]',
            'border shadow-2xs',
            hasError
              ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/25'
              : 'border-[#CBD5E1] hover:border-[#075AC8]/60 focus:border-[#075AC8] focus:ring-2 focus:ring-[#075AC8]/20',
            'focus:outline-none cursor-pointer',
            disabled && 'bg-[#F8FAFC] text-[#94A3B8] cursor-not-allowed border-[#E2E8F0]',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="text-gray-400">
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            const isObj = typeof opt === 'object';
            const value = isObj ? opt.value : opt;
            const label = isObj ? opt.label : opt;
            const isDisabled = isObj ? opt.disabled : false;

            return (
              <option key={value} value={value} disabled={isDisabled}>
                {label}
              </option>
            );
          })}
        </select>
        <ChevronDown
          className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#152C45]/70 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    );
  }
);

Select.displayName = 'Select';
