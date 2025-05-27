
// Design tokens for consistent sizing and typography with mobile-first approach
export const designTokens = {
  // Typography scale - fluid responsive sizing with improved mobile ranges
  typography: {
    scale: {
      xs: 'clamp(0.75rem, 2vw, 0.875rem)',
      sm: 'clamp(0.875rem, 2.5vw, 1rem)',
      base: 'clamp(1rem, 3vw, 1.125rem)',
      lg: 'clamp(1.125rem, 3.5vw, 1.25rem)',
      xl: 'clamp(1.25rem, 4vw, 1.5rem)',
      '2xl': 'clamp(1.5rem, 5vw, 2rem)',
      '3xl': 'clamp(1.875rem, 6vw, 2.5rem)',
      '4xl': 'clamp(2.25rem, 7vw, 3rem)',
      '5xl': 'clamp(2.5rem, 8vw, 4rem)',
      '6xl': 'clamp(3rem, 10vw, 5rem)',
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
export const getFluidSize = (min: number, max: number, minVw = 320, maxVw = 1200) => {
  const slope = (max - min) / (maxVw - minVw);
  const yAxisIntersection = -minVw * slope + min;
  return `clamp(${min}px, ${yAxisIntersection}px + ${slope * 100}vw, ${max}px)`;
};

export const getResponsiveValue = (values: Record<string, string | number>) => {
  return Object.entries(values)
    .map(([breakpoint, value]) => {
      if (breakpoint === 'base') return value;
      return `@screen ${breakpoint} { ${value} }`;
    })
    .join(' ');
};

// Mobile-first helper functions
export const getMobileFluidSize = (mobile: number, desktop: number) => {
  return `clamp(${mobile}px, ${mobile}px + (${desktop - mobile}) * ((100vw - 320px) / (1200 - 320)), ${desktop}px)`;
};

export const getTouchTarget = (size: 'min' | 'recommended' | 'comfortable' = 'min') => {
  return designTokens.touch[`${size}Size`];
};
