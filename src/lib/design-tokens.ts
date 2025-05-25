
// Design tokens for consistent sizing and typography
export const designTokens = {
  // Typography scale - fluid responsive sizing
  typography: {
    scale: {
      xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
      sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
      base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
      lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
      xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
      '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
      '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
      '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
      '6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5rem)',
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
  
  // Consistent spacing system
  spacing: {
    section: {
      xs: 'clamp(2rem, 4vw, 3rem)',
      sm: 'clamp(3rem, 5vw, 4rem)',
      md: 'clamp(4rem, 6vw, 6rem)',
      lg: 'clamp(6rem, 8vw, 8rem)',
      xl: 'clamp(8rem, 10vw, 12rem)',
    },
    container: {
      xs: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem',
    },
    component: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
  },
  
  // Responsive breakpoints
  breakpoints: {
    xs: '475px',
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
  
  // Layout constraints
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
      minHeight: '100vh',
      maxHeight: '120vh',
    },
    section: {
      minHeight: '60vh',
    },
  },
  
  // Z-index scale
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
