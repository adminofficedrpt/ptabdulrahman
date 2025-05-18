
import { useEffect, useState, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SocialLinks from './SocialLinks';

const ModernHero = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png')`,
          scale
        }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/90 via-royal-800/80 to-royal-700/70"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <motion.div 
            className="lg:col-span-7 text-left lg:pr-12"
            style={{ opacity, y }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-golden-500/20 text-golden-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-sm font-medium">Islamic Scholar & Humanitarian</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-playfair leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Dr. P.T. Abdul Rahman
            </motion.h1>
            
            <motion.div
              className="max-w-2xl mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
                A visionary Malayali scholar and educator with over three decades of
                service across UAE and India, bridging cultures through scholarship,
                humanitarian work, and educational innovation.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a 
                href="#about" 
                className="px-8 py-3 bg-gradient-to-r from-golden-500 to-golden-600 text-white rounded-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 shadow-lg hover:shadow-golden-500/20 font-medium flex items-center"
              >
                Discover His Story
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              </a>
              <SocialLinks />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 hidden lg:block"
            style={{ opacity, y: useTransform(scrollYProgress, [0, 0.5], [0, 200]) }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative mx-auto">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-golden-300/20 to-royal-300/30 blur-lg"></div>
              <img 
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" 
                alt="Dr. P.T. Abdul Rahman Portrait" 
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in' }}
                onLoad={() => setLoading(false)}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white/20 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-white/90 font-light italic text-sm">
                  "Education is not just about acquiring knowledge, but about spreading wisdom that can transform society."
                </p>
                <p className="text-golden-300 text-xs mt-2">— Dr. P.T. Abdul Rahman</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a 
            href="#about" 
            className="text-golden-300 hover:text-golden-200 transition-colors duration-300" 
            aria-label="Scroll down to learn more"
          >
            <ArrowDownIcon size={36} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
