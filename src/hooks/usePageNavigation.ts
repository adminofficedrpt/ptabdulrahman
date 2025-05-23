
import { useState, useEffect } from 'react';

export const usePageNavigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Detect hash from URL for direct section navigation
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      // Smooth scroll to the section after a brief delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
    
    // Setup intersection observer for section detection
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return { activeSection };
};
