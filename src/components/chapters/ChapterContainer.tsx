
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ChapterContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark' | 'gradient';
  className?: string;
  id: string;
}

const ChapterContainer: React.FC<ChapterContainerProps> = ({
  children,
  title,
  subtitle,
  variant = 'light',
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
        'relative py-20 md:py-28 lg:py-32 overflow-hidden',
        variantClasses[variant],
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6",
            variant === 'dark' ? 'text-white' : 'text-royal-900'
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              "text-lg md:text-xl font-light max-w-3xl mx-auto",
              variant === 'dark' ? 'text-white/70' : 'text-royal-600'
            )}>
              {subtitle}
            </p>
          )}
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className={cn(
              "h-[1px] w-20 bg-gradient-to-r",
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
