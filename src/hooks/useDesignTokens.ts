
import { useTheme } from '@/providers/ThemeProvider';

export const useDesignTokens = () => {
  const { tokens, actualTheme } = useTheme();
  
  return {
    ...tokens,
    currentTheme: actualTheme,
    
    // Helper functions for common patterns
    getSpacing: (size: keyof typeof tokens.spacing.component) => tokens.spacing.component[size],
    getTypography: (size: keyof typeof tokens.typography.scale) => tokens.typography.scale[size],
    getBreakpoint: (bp: keyof typeof tokens.breakpoints) => tokens.breakpoints[bp],
    
    // Responsive helpers
    mobile: (styles: string) => `@media (max-width: ${tokens.breakpoints.md}) { ${styles} }`,
    tablet: (styles: string) => `@media (min-width: ${tokens.breakpoints.md}) and (max-width: ${tokens.breakpoints.lg}) { ${styles} }`,
    desktop: (styles: string) => `@media (min-width: ${tokens.breakpoints.lg}) { ${styles} }`,
  };
};
