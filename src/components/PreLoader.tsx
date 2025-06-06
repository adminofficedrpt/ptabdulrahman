
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreLoaderProps {
  minDisplayTime?: number;
}

const PreLoader = ({
  minDisplayTime = 1500
}: PreLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const startTime = Date.now();

    // Preload critical images
    const preloadImages = [
      '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
      '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
      '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg'
    ];
    
    Promise.all(
      preloadImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).catch(err => console.error('Image preloading error:', err));

    // Check when the window has fully loaded
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      // Ensure the loader displays for at least minDisplayTime
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Set a fallback timeout to hide loader even if load event never fires
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, [minDisplayTime]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            initial={{
              opacity: 0,
              y: 10
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.5
            }} 
            className="flex flex-col items-center"
          >
            <motion.img 
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
              alt="Dr. P.T. Abdul Rahman Logo" 
              className="h-24 md:h-32 mb-6" 
              animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1]
              }} 
              transition={{
                repeat: Infinity,
                duration: 2
              }}
            />
            
            <div className="w-48 h-[2px] bg-gray-100 rounded overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-royal-600 via-golden-500 to-royal-600" 
                initial={{
                  width: "0%"
                }} 
                animate={{
                  width: "100%"
                }} 
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <motion.p 
              className="mt-6 text-royal-800 text-sm font-light" 
              initial={{
                opacity: 0
              }} 
              animate={{
                opacity: 1
              }} 
              transition={{
                delay: 0.5
              }}
            >
              •Educator •Humanitarian •Author
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
