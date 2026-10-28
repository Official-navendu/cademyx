import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'outline-gold' | 'gold' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leadingIcon,
  trailingIcon,
  children,
  className,
  ...rest
}) => {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-250 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4B72F] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-4 py-2 rounded-lg gap-2 shadow-xs',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2.5 shadow-sm',
    lg: 'text-base px-6 sm:px-7 py-3.5 rounded-xl gap-3 shadow-md font-extrabold',
  };

  const variantStyles: Record<ButtonVariant, string> = {
    // Primary: Midnight Navy to Royal Blue with subtle gold border on hover
    primary:
      'bg-gradient-to-r from-[#061B35] via-[#152C45] to-[#075AC8] text-white border border-[#075AC8]/60 hover:border-[#F4B72F] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    // Gold: Premium Gold to Deep Gold gradient with Midnight Navy text and light sweep
    gold:
      'bg-gradient-to-r from-[#F4B72F] via-[#F4B72F] to-[#D99519] text-[#061B35] border border-[#F4B72F] hover:from-[#F4B72F] hover:to-[#C4820E] hover:shadow-xl hover:-translate-y-0.5 btn-shine-sweep active:translate-y-0 font-extrabold',
    // Secondary: Midnight Navy base with gold accent border
    secondary:
      'bg-[#061B35] text-white hover:bg-[#152C45] border border-[#F4B72F]/40 hover:border-[#F4B72F] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    // Outline: Clean transparent background with Royal Blue hover
    outline:
      'bg-transparent text-[#061B35] border border-[#CBD5E1] hover:border-[#075AC8] hover:text-[#075AC8] hover:bg-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    // Outline Light: For dark navy backgrounds with gold hover
    'outline-light':
      'bg-white/5 text-white border border-white/25 hover:border-[#F4B72F] hover:bg-white/10 hover:text-[#F4B72F] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-xs',
    // Outline Gold: Crisp Premium Gold outline on dark backgrounds
    'outline-gold':
      'bg-transparent text-[#F4B72F] border border-[#F4B72F] hover:bg-[#F4B72F] hover:text-[#061B35] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    // Text: Minimal link button with Royal Blue hover
    text:
      'bg-transparent text-[#061B35] hover:text-[#075AC8] p-0 font-semibold underline-offset-4 hover:underline shadow-none',
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin text-current" aria-hidden="true" />
      ) : (
        leadingIcon && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:scale-105">{leadingIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {!isLoading && trailingIcon && (
        <span className="relative z-10 inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-1">
          {trailingIcon}
        </span>
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, isExternal, target, rel, ...linkProps } = rest as ButtonAsLink;
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
          {...linkProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button
      type={buttonProps.type || 'button'}
      disabled={isLoading || buttonProps.disabled}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
