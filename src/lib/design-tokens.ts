import { getFluidSize } from "@/lib/utils";

// Design tokens for consistent sizing and typography with mobile-first approach
export const designTokens = {
  // Unified Color Palette: Deep Purple/Blue, Gold, and White
  colors: {
    primary: {
      DEFAULT: '#1A1F2C', // Deep Purple/Blue
      50: '#E0E1E6',
      100: '#C1C3CC',
      200: '#A2A4B3',
      300: '#838699',
      400: '#646880',
      500: '#454A66',
      600: '#363B52',
      700: '#272C3D',
      800: '#1A1F2C',
      900: '#0B0F1A',
    },
    accent: {
      DEFAULT: '#D4AF37', // Gold
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
    },
    neutral: {
      DEFAULT: '#FFFFFF', // White
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },

  // Typography scale - fluid responsive sizing with improved mobile ranges
  typography: {
    fontFamily: {
      heading: ["Playfair Display", "serif"], // For a premium, editorial feel
      body: ["Inter", "sans-serif"], // Clean and readable
    },
    scale: {
      xs: getFluidSize(12, 14), // clamp(0.75rem, 0.4vw + 0.6rem, 0.875rem)
      sm: getFluidSize(14, 16), // clamp(0.875rem, 0.5vw + 0.7rem, 1rem)
      base: getFluidSize(16, 18), // clamp(1rem, 0.6vw + 0.8rem, 1.125rem)
      lg: getFluidSize(18, 20), // clamp(1.125rem, 0.7vw + 0.9rem, 1.25rem)
      xl: getFluidSize(20, 24), // clamp(1.25rem, 0.8vw + 1rem, 1.5rem)
      '2xl': getFluidSize(24, 30), // clamp(1.5rem, 1vw + 1.2rem, 1.875rem)
      '3xl': getFluidSize(30, 36), // clamp(1.875rem, 1.2vw + 1.5rem, 2.25rem)
      '4xl': getFluidSize(36, 48), // clamp(2.25rem, 1.5vw + 1.8rem, 3rem)
      '5xl': getFluidSize(48, 64), // clamp(3rem, 2vw + 2.4rem, 4rem)
      '6xl': getFluidSize(60, 80), // clamp(3.75rem, 2.5vw + 3rem, 5rem)
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },
  },
  
  // Mobile-first spacing system
  spacing: {
    section: {
      xs: 'clamp(1.5rem, 4vw, 2rem)',
      sm: 'clamp(2rem, 5vw, 3rem)',
      md: 'clamp(3rem, 6vw, 4rem)',
      lg: 'clamp(4rem, 8vw, 6rem)',
      xl: 'clamp(5rem, 10vw, 8rem)',
    },
    container: {
      xs: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem',
    },
    component: {
      xs: 'clamp(0.5rem, 1vw, 0.75rem)',
      sm: 'clamp(0.75rem, 1.5vw, 1rem)',
      md: 'clamp(1rem, 2vw, 1.5rem)',
      lg: 'clamp(1.5rem, 3vw, 2rem)',
      xl: 'clamp(2rem, 4vw, 3rem)',
      '2xl': 'clamp(2.5rem, 5vw, 4rem)',
    },
  },
  
  // Mobile-optimized breakpoints
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Animation durations and easings
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  },
  
  // Mobile-optimized layout constraints
  layout: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      full: '100%',
    },
    hero: {
      minHeight: '100svh', // Use dynamic viewport height for mobile
      maxHeight: '120vh',
    },
    section: {
      minHeight: '50vh', // Reduced for mobile
    },
  },
  
  // Z-index scale with mobile considerations
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
    navigation: 1900, // High priority for mobile navigation
  },
  
  // Touch target sizes for mobile accessibility
  touch: {
    minSize: '44px', // iOS and Android minimum touch target
    recommendedSize: '48px',
    comfortableSize: '56px',
  },
  
  // Mobile-specific spacing
  mobile: {
    safeArea: {
      top: 'env(safe-area-inset-top)',
      bottom: 'env(safe-area-inset-bottom)',
      left: 'env(safe-area-inset-left)',
      right: 'env(safe-area-inset-right)',
    },
    padding: {
      xs: '0.75rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
    },
  },
};

// Helper functions for consistent styling
// The getFluidSize, getResponsiveValue, getMobileFluidSize, and getTouchTarget functions are assumed to be in utils.ts or similar
// and imported if needed. For direct usage in design-tokens, they would need to be defined here or imported.
// For this example, I'm assuming getFluidSize is available or will be added to utils.ts.
