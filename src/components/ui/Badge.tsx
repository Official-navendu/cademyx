import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    gold: 'bg-gradient-to-r from-[#F4B72F]/20 via-[#F4B72F]/15 to-[#D99519]/20 text-[#D99519] border border-[#F4B72F]/50 font-semibold shadow-xs',
    navy: 'bg-gradient-to-r from-[#061B35] via-[#061B35] to-[#075AC8] text-white border border-[#075AC8]/40 shadow-xs',
    neutral: 'bg-[#F1F5F9] text-[#152C45] border border-[#E2E8F0]',
    outline: 'bg-transparent text-[#152C45] border border-[#C5D0E3] hover:border-[#F4B72F]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 rounded',
    md: 'text-xs px-2.5 py-1 rounded-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium select-none tracking-wide',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
