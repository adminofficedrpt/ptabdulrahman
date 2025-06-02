
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import FluidTypography from '@/components/typography/FluidTypography';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: Array<{
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
  }>;
}

interface HeroContentProps {
  currentSlide: HeroSlide;
  onVideoOpen: () => void;
  onScrollToContent: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ currentSlide, onVideoOpen, onScrollToContent }) => {
  return (
    <div className="lg:col-span-7 text-center lg:text-left">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-golden-400 text-sm md:text-base font-light tracking-[0.2em] uppercase">
              {currentSlide.subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FluidTypography variant="h1" color="white" className="mb-6 font-bold leading-tight">
              {currentSlide.title}
            </FluidTypography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <FluidTypography variant="lead" className="text-gray-200 leading-relaxed max-w-2xl lg:max-w-none">
              {currentSlide.description}
            </FluidTypography>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <button
              onClick={onScrollToContent}
              className="bg-gradient-to-r from-golden-500 to-golden-600 text-white px-8 py-4 rounded-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[56px]"
            >
              Explore His Legacy
            </button>
            <button
              onClick={onVideoOpen}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-royal-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 min-h-[56px]"
            >
              <Play className="h-5 w-5" />
              <span>See His Vision in Action</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-6"
          >
            {currentSlide.stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <stat.icon className="h-6 w-6 text-golden-400 mr-2" />
                  <FluidTypography variant="h4" color="white" className="font-bold">
                    {stat.value}
                  </FluidTypography>
                </div>
                <FluidTypography variant="caption" className="text-gray-300">
                  {stat.label}
                </FluidTypography>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroContent;
