
import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/ThemeProvider';

// Container Component
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className,
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  };

  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
};

// Section Component
interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  spacing = 'lg',
  className,
}) => {
  const variantClasses = {
    default: 'bg-background',
    accent: 'bg-royal-50 dark:bg-royal-950/20',
    muted: 'bg-muted/30',
  };

  const spacingClasses = {
    sm: 'py-fluid-md',
    md: 'py-fluid-lg',
    lg: 'py-fluid-xl',
    xl: 'py-fluid-2xl',
  };

  return (
    <section className={cn(
      variantClasses[variant],
      spacingClasses[spacing],
      className
    )}>
      {children}
    </section>
  );
};

// Grid Component
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  gap = 'md',
  responsive = true,
  className,
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
    6: responsive ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-6',
    12: 'grid-cols-12',
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div className={cn(
      'grid',
      colClasses[cols],
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
};

// Stack Component
interface StackProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
}) => {
  const directionClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  };

  const spacingClasses = {
    xs: direction === 'horizontal' ? 'gap-1' : 'space-y-1',
    sm: direction === 'horizontal' ? 'gap-2' : 'space-y-2',
    md: direction === 'horizontal' ? 'gap-4' : 'space-y-4',
    lg: direction === 'horizontal' ? 'gap-6' : 'space-y-6',
    xl: direction === 'horizontal' ? 'gap-8' : 'space-y-8',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  return (
    <div className={cn(
      'flex',
      directionClasses[direction],
      spacingClasses[spacing],
      alignClasses[align],
      justifyClasses[justify],
      wrap && 'flex-wrap',
      className
    )}>
      {children}
    </div>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  className,
}) => {
  const variantClasses = {
    default: 'bg-card border border-border',
    elevated: 'bg-card shadow-lg border border-border/50',
    outline: 'border-2 border-border bg-transparent',
    ghost: 'bg-transparent',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const radiusClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  return (
    <div className={cn(
      variantClasses[variant],
      paddingClasses[padding],
      radiusClasses[radius],
      'transition-all duration-200',
      className
    )}>
      {children}
    </div>
  );
};
