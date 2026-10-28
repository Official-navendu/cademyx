import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  as?: React.ElementType;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  size = 'default',
  as: Component = 'div',
}) => {
  return (
    <Component className={cn('py-10 sm:py-14 lg:py-18', className)}>
      <Container size={size}>{children}</Container>
    </Component>
  );
};
