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
    gold: 'bg-[#F3F5FF] text-[#182A9A] border border-[#DCE3FF] font-semibold shadow-xs',
    navy: 'bg-[#101F70] text-white border border-[#182A9A]/40 shadow-xs',
    neutral: 'bg-[#F3F5FF] text-[#26345C] border border-[#DCE3FF]',
    outline: 'bg-transparent text-[#26345C] border border-[#DCE3FF] hover:border-[#182A9A]',
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
