
export const designTokens = {
  // Color system with expanded Islamic-inspired palette
  colors: {
    primary: {
      50: '#fefdf7',
      100: '#fef7e0',
      200: '#fdecc4',
      300: '#fbdb9c',
      400: '#f7c572',
      500: '#D2A114', // Golden primary
      600: '#b8860b',
      700: '#9a6f09',
      800: '#7c5807',
      900: '#634605',
    },
    royal: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#1e3a8a', // Royal blue
      600: '#1e40af',
      700: '#1d4ed8',
      800: '#1e3a8a',
      900: '#1e293b',
    },
    accent: {
      emerald: '#10b981',
      amber: '#f59e0b',
      rose: '#f43f5e',
    }
  },
  
  // Typography scale
  typography: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Poppins', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    }
  },
  
  // Spacing system
  spacing: {
    section: '6rem',
    container: '1280px',
    contentWidth: '65ch',
  },
  
  // Animation system
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '750ms',
    },
    easing: {
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  },
  
  // Shadows for depth
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  }
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Islamic geometric patterns
export const islamicPatterns = {
  eightPointStar: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  arabesque: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
};
