
import { useState, useEffect, useCallback } from 'react';

interface ScrollNavigationOptions {
  offset?: number;
  smooth?: boolean;
  updateHash?: boolean;
}

export const useScrollNavigation = (options: ScrollNavigationOptions = {}) => {
  const { offset = 80, smooth = true, updateHash = true } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setIsScrolling(true);
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: smooth ? 'smooth' : 'auto',
    });

    if (updateHash) {
      // Update URL hash without triggering scroll
      window.history.pushState({}, '', `#${sectionId}`);
    }

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), smooth ? 1000 : 100);
  }, [offset, smooth, updateHash]);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + offset + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const throttledScrollHandler = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [offset, isScrolling]);

  return {
    activeSection,
    scrollToSection,
    isScrolling,
  };
};

// Throttle utility function
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
