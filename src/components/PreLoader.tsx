import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreLoaderProps {
  minDisplayTime?: number;
}

const PreLoader = ({ minDisplayTime = 1500 }: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const preloadImages = [
      '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
      '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
    ];
    Promise.all(
      preloadImages.map(src => new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      }))
    ).catch(err => console.error('Image preloading error:', err));

    const handleLoad = () => {
      const remainingTime = Math.max(0, minDisplayTime - (Date.now() - startTime));
      setTimeout(() => setIsLoading(false), remainingTime);
    };

    if (document.readyState === 'complete') handleLoad();
    else window.addEventListener('load', handleLoad);

    const fallback = setTimeout(() => setIsLoading(false), 3500);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
    };
  }, [minDisplayTime]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.img
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
            alt="P.T. Abdul Rahman"
            className="h-20 md:h-24 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="w-40 h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-golden-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            className="mt-6 text-muted-foreground text-xs tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Scholar · Educator · Community Leader
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
