
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GeometricPattern from '@/components/design-system/GeometricPattern';

interface ChapterContainerProps {
  children: React.ReactNode;
  chapterNumber: number;
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark' | 'gradient';
  pattern?: boolean;
  className?: string;
  id: string;
}

const ChapterContainer: React.FC<ChapterContainerProps> = ({
  children,
  chapterNumber,
  title,
  subtitle,
  variant = 'light',
  pattern = true,
  className,
  id
}) => {
  const variantClasses = {
    light: 'bg-white text-royal-900',
    dark: 'bg-gradient-to-br from-royal-900 to-royal-800 text-white',
    gradient: 'bg-gradient-to-br from-royal-50 via-white to-golden-50 text-royal-900'
  };

  return (
    <motion.section 
      id={id}
      className={cn(
        'relative min-h-screen py-24 overflow-hidden',
        variantClasses[variant],
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Islamic Geometric Patterns */}
      {pattern && (
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-20 left-10">
            <GeometricPattern pattern="eightPointStar" size="lg" opacity={0.1} />
          </div>
          <div className="absolute top-40 right-20">
            <GeometricPattern pattern="arabesque" size="md" opacity={0.08} />
          </div>
          <div className="absolute bottom-32 left-1/4">
            <GeometricPattern pattern="tessellation" size="lg" opacity={0.06} />
          </div>
          <div className="absolute bottom-20 right-1/3">
            <GeometricPattern pattern="eightPointStar" size="sm" opacity={0.04} />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Chapter Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className={cn(
              "text-sm font-light tracking-[0.2em] uppercase",
              variant === 'dark' ? 'text-golden-300' : 'text-golden-600'
            )}>
              Chapter {chapterNumber}
            </span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-6xl font-playfair font-bold mb-6",
            variant === 'dark' ? 'text-white' : 'text-royal-900'
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              "text-xl md:text-2xl font-light max-w-3xl mx-auto",
              variant === 'dark' ? 'text-white/80' : 'text-royal-700'
            )}>
              {subtitle}
            </p>
          )}
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className={cn(
              "h-[1px] w-24 bg-gradient-to-r",
              variant === 'dark' 
                ? 'from-transparent via-golden-300 to-transparent' 
                : 'from-transparent via-golden-600 to-transparent'
            )} />
          </div>
        </motion.div>

        {children}
      </div>
    </motion.section>
  );
};

export default ChapterContainer;
