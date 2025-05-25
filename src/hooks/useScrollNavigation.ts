
import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollNavigationOptions {
  offset?: number;
  smooth?: boolean;
  updateHash?: boolean;
  throttleMs?: number;
}

export const useScrollNavigation = (options: ScrollNavigationOptions = {}) => {
  const { offset = 80, smooth = true, updateHash = true, throttleMs = 16 } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolling, setIsScrolling] = useState(false);
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Enhanced scroll to section with easing
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    isUserScrollingRef.current = true;
    setIsScrolling(true);
    
    const elementPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = Math.min(Math.abs(distance) / 2, 1000); // Dynamic duration based on distance
    let start: number;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isUserScrollingRef.current = false;
        setIsScrolling(false);
        
        if (updateHash && !window.location.hash.includes(sectionId)) {
          window.history.pushState({}, '', `#${sectionId}`);
        }
      }
    };

    if (smooth) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, elementPosition);
      isUserScrollingRef.current = false;
      setIsScrolling(false);
      
      if (updateHash) {
        window.history.pushState({}, '', `#${sectionId}`);
      }
    }
  }, [offset, smooth, updateHash]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (isUserScrollingRef.current || isScrolling) return;

    const scrollPosition = window.scrollY + offset + 100;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Handle edge case for bottom of page
    if (scrollPosition + viewportHeight >= documentHeight - 50) {
      const lastSection = sections[sections.length - 1];
      if (lastSection && activeSection !== lastSection.id) {
        setActiveSection(lastSection.id);
        if (updateHash) {
          window.history.replaceState(null, '', `#${lastSection.id}`);
        }
      }
      return;
    }

    // Find active section
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Check if section is in viewport
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        if (activeSection !== section.id) {
          setActiveSection(section.id);
          if (updateHash && !window.location.hash.includes(section.id)) {
            window.history.replaceState(null, '', `#${section.id}`);
          }
        }
        break;
      }
    }
  }, [sections, activeSection, offset, isScrolling, updateHash]);

  // Throttled scroll handler
  const throttledScrollHandler = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(handleScroll, throttleMs);
  }, [handleScroll, throttleMs]);

  // Initialize sections and handle URL hash
  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    setSections(sectionElements);

    // Handle initial hash
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionElements.find(s => s.id === hash)) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 500);
    } else if (sectionElements.length > 0) {
      // Set first section as active if no hash
      setActiveSection(sectionElements[0].id);
    }
  }, [scrollToSection]);

  // Attach scroll listener
  useEffect(() => {
    if (sections.length === 0) return;

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sections, throttledScrollHandler, handleScroll]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sections.find(s => s.id === hash)) {
        scrollToSection(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [sections, scrollToSection]);

  return {
    activeSection,
    scrollToSection,
    isScrolling,
    sections: sections.map(s => s.id),
  };
};
