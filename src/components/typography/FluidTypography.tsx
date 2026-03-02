import React from 'react';
import { cn } from '@/lib/utils';
import { designTokens } from '@/lib/design-tokens';

interface FluidTypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'caption' | 'overline' | 'display';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'primary' | 'accent' | 'neutral' | 'muted';
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

  const sizeClasses = {
    xs: `text-[${designTokens.typography.scale.xs}]`,
    sm: `text-[${designTokens.typography.scale.sm}]`,
    base: `text-[${designTokens.typography.scale.base}]`,
    lg: `text-[${designTokens.typography.scale.lg}]`,
    xl: `text-[${designTokens.typography.scale.xl}]`,
    '2xl': `text-[${designTokens.typography.scale['2xl']}]`,
    '3xl': `text-[${designTokens.typography.scale['3xl']}]`,
    '4xl': `text-[${designTokens.typography.scale['4xl']}]`,
    '5xl': `text-[${designTokens.typography.scale['5xl']}]`,
    '6xl': `text-[${designTokens.typography.scale['6xl']}]`,
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
    primary: `text-${designTokens.colors.primary.DEFAULT}`,
    accent: `text-${designTokens.colors.accent.DEFAULT}`,
    neutral: `text-${designTokens.colors.neutral.DEFAULT}`,
    muted: `text-${designTokens.colors.neutral[500]}`, // Using a neutral shade for muted
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
        variant === 'display' || variant.startsWith('h') ? designTokens.typography.fontFamily.heading.map(f => `font-[${f}]`).join(' ') : designTokens.typography.fontFamily.body.map(f => `font-[${f}]`).join(' '),
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
