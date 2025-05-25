
import React from 'react';
import { cn } from '@/lib/utils';

interface FluidTypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white' | 'royal' | 'golden';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const FluidTypography: React.FC<FluidTypographyProps> = ({
  children,
  variant = 'body',
  size,
  weight,
  color = 'primary',
  align = 'left',
  className,
  as,
}) => {
  // Default element mapping
  const elementMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    caption: 'span',
    overline: 'span',
  };

  // Default size mapping
  const sizeMap = {
    h1: '5xl',
    h2: '4xl',
    h3: '3xl',
    h4: '2xl',
    h5: 'xl',
    h6: 'lg',
    body: 'base',
    caption: 'sm',
    overline: 'xs',
  };

  // Default weight mapping
  const weightMap = {
    h1: 'bold',
    h2: 'bold',
    h3: 'semibold',
    h4: 'semibold',
    h5: 'medium',
    h6: 'medium',
    body: 'normal',
    caption: 'normal',
    overline: 'medium',
  };

  const Component = as || elementMap[variant] as keyof JSX.IntrinsicElements;
  const finalSize = size || sizeMap[variant];
  const finalWeight = weight || weightMap[variant];

  const sizeClasses = {
    xs: 'text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)]',
    sm: 'text-[clamp(0.875rem,0.8rem+0.375vw,1rem)]',
    base: 'text-[clamp(1rem,0.9rem+0.5vw,1.125rem)]',
    lg: 'text-[clamp(1.125rem,1rem+0.625vw,1.25rem)]',
    xl: 'text-[clamp(1.25rem,1.1rem+0.75vw,1.5rem)]',
    '2xl': 'text-[clamp(1.5rem,1.3rem+1vw,2rem)]',
    '3xl': 'text-[clamp(1.875rem,1.6rem+1.375vw,2.5rem)]',
    '4xl': 'text-[clamp(2.25rem,1.9rem+1.75vw,3rem)]',
    '5xl': 'text-[clamp(3rem,2.5rem+2.5vw,4rem)]',
    '6xl': 'text-[clamp(3.75rem,3rem+3.75vw,5rem)]',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const colorClasses = {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    accent: 'text-royal-800',
    muted: 'text-gray-600',
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

  return (
    <Component
      className={cn(
        // Font family based on variant
        variant.startsWith('h') ? 'font-playfair' : 'font-sans',
        // Size
        sizeClasses[finalSize as keyof typeof sizeClasses],
        // Weight
        weightClasses[finalWeight as keyof typeof weightClasses],
        // Color
        colorClasses[color],
        // Alignment
        alignClasses[align],
        // Line height
        variant.startsWith('h') ? 'leading-tight' : 'leading-relaxed',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default FluidTypography;
