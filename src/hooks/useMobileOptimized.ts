
import { useState, useEffect } from 'react';

interface MobileOptimizedOptions {
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
  updateOnResize?: boolean;
}

interface MobileOptimizedResult {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  orientation: 'portrait' | 'landscape';
  deviceType: 'mobile' | 'tablet' | 'desktop';
  viewportWidth: number;
  viewportHeight: number;
}

/**
 * Enhanced mobile detection hook with optimizations for performance
 */
export const useMobileOptimized = ({
  mobileBreakpoint = 768,
  tabletBreakpoint = 1024,
  updateOnResize = true
}: MobileOptimizedOptions = {}): MobileOptimizedResult => {
  const [state, setState] = useState<MobileOptimizedResult>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouch: false,
    orientation: 'portrait',
    deviceType: 'desktop',
    viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1200,
    viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    // Initial detection
    const detectDevice = () => {
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isMobile = width < mobileBreakpoint;
      const isTablet = width >= mobileBreakpoint && width < tabletBreakpoint;
      const isDesktop = width >= tabletBreakpoint;
      
      // Detect touch capability
      const isTouch = 'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        (navigator as any).msMaxTouchPoints > 0;
      
      // Determine orientation
      const orientation = height > width ? 'portrait' : 'landscape';
      
      // Set device type
      let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (isMobile) deviceType = 'mobile';
      else if (isTablet) deviceType = 'tablet';
      
      setState({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        orientation,
        deviceType,
        viewportWidth: width,
        viewportHeight: height
      });
    };
    
    detectDevice();
    
    if (updateOnResize) {
      // Throttled resize handler for performance
      let timeoutId: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(detectDevice, 150);
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', detectDevice);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', detectDevice);
      };
    }
  }, [mobileBreakpoint, tabletBreakpoint, updateOnResize]);
  
  return state;
};
