
import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
}

/**
 * Responsive container component optimized for mobile-first design
 */
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  size = 'xl',
  padding = 'responsive',
  className,
  as: Component = 'div',
  fluid = false,
}) => {
  // Enhanced size classes with better mobile support
  const sizeClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1280px]',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full',
  };

  // Enhanced padding classes with mobile-first approach
  const paddingClasses = {
    none: '',
    sm: 'px-3 sm:px-4',
    md: 'px-4 sm:px-6',
    lg: 'px-4 sm:px-8 lg:px-12',
    xl: 'px-4 sm:px-8 md:px-12 lg:px-16',
    // Responsive padding that adapts to container size
    responsive: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full',
        // Apply max-width only for non-fluid containers
        !fluid && sizeClasses[size],
        // Apply padding
        paddingClasses[padding],
        // Additional safe area insets for modern mobile browsers
        'sm:safe-left sm:safe-right',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ResponsiveContainer;
