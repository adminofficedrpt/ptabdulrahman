
import React from 'react';
import { cn } from '@/lib/utils';

interface FluidTypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'caption' | 'overline' | 'display';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white' | 'royal' | 'golden';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  truncate?: boolean;
  lineClamp?: number;
}

/**
 * FluidTypography component for responsive text that scales beautifully across all devices
 * Enhanced with better mobile optimization and accessibility
 */
const FluidTypography: React.FC<FluidTypographyProps> = ({
  children,
  variant = 'body',
  size,
  weight,
  color = 'primary',
  align = 'left',
  className,
  as,
  truncate = false,
  lineClamp,
}) => {
  // Default element mapping based on semantic HTML
  const elementMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    lead: 'p',
    caption: 'span',
    overline: 'span',
    display: 'h1',
  };

  // Default size mapping - improved for mobile readability
  const sizeMap = {
    display: '6xl',
    h1: '5xl',
    h2: '4xl',
    h3: '3xl',
    h4: '2xl',
    h5: 'xl',
    h6: 'lg',
    lead: 'xl',
    body: 'base',
    caption: 'sm',
    overline: 'xs',
  };

  // Default weight mapping
  const weightMap = {
    display: 'bold',
    h1: 'bold',
    h2: 'bold',
    h3: 'semibold',
    h4: 'semibold',
    h5: 'medium',
    h6: 'medium',
    lead: 'normal',
    body: 'normal',
    caption: 'normal',
    overline: 'medium',
  };

  const Component = as || elementMap[variant] as keyof JSX.IntrinsicElements;
  const finalSize = size || sizeMap[variant];
  const finalWeight = weight || weightMap[variant];

  // Enhanced fluid typography with better mobile scaling
  const sizeClasses = {
    xs: 'text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)]',
    sm: 'text-[clamp(0.875rem,0.8rem+0.375vw,1rem)]',
    base: 'text-[clamp(1rem,0.9rem+0.5vw,1.125rem)]',
    lg: 'text-[clamp(1.125rem,1rem+0.625vw,1.25rem)]',
    xl: 'text-[clamp(1.25rem,1.125rem+0.75vw,1.5rem)]',
    '2xl': 'text-[clamp(1.5rem,1.25rem+1vw,1.875rem)]',
    '3xl': 'text-[clamp(1.75rem,1.5rem+1.25vw,2.25rem)]',
    '4xl': 'text-[clamp(2rem,1.75rem+1.5vw,2.75rem)]',
    '5xl': 'text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)]',
    '6xl': 'text-[clamp(2.75rem,2.25rem+3vw,4.5rem)]',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  // Enhanced color system with better accessibility and contrast
  const colorClasses = {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    accent: 'text-royal-800',
    muted: 'text-gray-600 dark:text-gray-400',
    white: 'text-white',
    royal: 'text-royal-800',
    golden: 'text-golden-600',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  // Create line clamp classes
  const getLineClampClass = () => {
    if (!lineClamp) return '';
    if (lineClamp <= 6) return `line-clamp-${lineClamp}`;
    return 'overflow-hidden';
  };

  return (
    <Component
      className={cn(
        // Font family based on variant
        variant === 'display' || variant.startsWith('h') ? 'font-playfair' : 'font-sans',
        // Size with mobile optimization
        sizeClasses[finalSize as keyof typeof sizeClasses],
        // Weight
        weightClasses[finalWeight as keyof typeof weightClasses],
        // Color
        colorClasses[color],
        // Alignment
        alignClasses[align],
        // Line height - improved for readability on mobile
        variant === 'display' ? 'leading-[1.1]' :
        variant === 'h1' ? 'leading-[1.15]' :
        variant === 'h2' ? 'leading-[1.2]' :
        variant === 'h3' ? 'leading-[1.25]' :
        variant.startsWith('h') ? 'leading-tight' : 
        variant === 'lead' ? 'leading-relaxed' : 'leading-normal',
        // Truncation
        truncate && 'truncate',
        // Line clamping
        getLineClampClass(),
        // Additional tracking adjustments for better readability
        (variant === 'overline' || variant === 'caption') && 'tracking-wide',
        variant === 'display' && 'tracking-tight',
        // Additional classes
        className
      )}
    >
      {children}
    </Component>
  );
};

export default FluidTypography;
