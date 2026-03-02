import { getFluidSize } from "@/lib/utils";

// Design tokens for consistent sizing and typography with mobile-first approach
export const designTokens = {
  // Unified Color Palette: Deep Purple/Blue, Gold, and White - Refined for Dignified Aesthetic
  colors: {
    primary: {
      DEFAULT: '#1A1F2C', // Deep Purple/Blue - Main background, strong elements
      50: '#F5F7FA', // Very light for subtle backgrounds
      100: '#E0E1E6', // Light grey for borders, subtle accents
      200: '#C1C3CC',
      300: '#838699',
      400: '#646880',
      500: '#454A66',
      600: '#363B52',
      700: '#272C3D',
      800: '#1A1F2C',
      900: '#0B0F1A', // Darkest for text on light backgrounds, deep shadows
    },
    accent: {
      DEFAULT: '#D4AF37', // Gold - Key highlights, interactive elements, subtle branding
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
      DEFAULT: '#FFFFFF', // White - Main text on dark backgrounds, clean sections
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280', // Muted text, secondary information
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    // Semantic colors for text, ensuring contrast
    text: {
      DEFAULT: '#1A1F2C', // Dark text for light backgrounds
      light: '#FFFFFF', // Light text for dark backgrounds
      muted: '#6B7280', // Subtler text
      accent: '#D4AF37', // Accent text
    }
  },

  // Typography scale - fluid responsive sizing with improved mobile ranges
  typography: {
    fontFamily: {
      heading: ["Playfair Display", "serif"], // For a premium, editorial feel
      body: ["Inter", "sans-serif"], // Clean and readable
    },
    scale: {
      xs: getFluidSize(12, 14), 
      sm: getFluidSize(14, 16), 
      base: getFluidSize(16, 18), 
      lg: getFluidSize(18, 20), 
      xl: getFluidSize(20, 24), 
      '2xl': getFluidSize(24, 30), 
      '3xl': getFluidSize(30, 36), 
      '4xl': getFluidSize(36, 48), 
      '5xl': getFluidSize(48, 64), 
      '6xl': getFluidSize(60, 80), 
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
  
  // Mobile-first spacing system - refined for breathing room and dignity
  spacing: {
    section: {
      xs: 'clamp(2rem, 5vw, 3rem)', // Increased base for more breathing room
      sm: 'clamp(3rem, 6vw, 4rem)',
      md: 'clamp(4rem, 8vw, 6rem)',
      lg: 'clamp(6rem, 10vw, 8rem)',
      xl: 'clamp(8rem, 12vw, 10rem)',
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
  
  // Animation durations and easings - subtle and calm
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
