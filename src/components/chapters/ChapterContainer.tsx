import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ChapterContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  id: string;
  sectionKeyword?: string;
}

const ChapterContainer: React.FC<ChapterContainerProps> = ({
  children,
  title,
  subtitle,
  className,
  id,
  sectionKeyword,
}) => {
  return (
    <section
      id={id}
      className={cn('relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden', className)}
    >
      {/* Floating section keyword label */}
      {sectionKeyword && (
        <div className="absolute top-12 right-8 md:right-16 pointer-events-none select-none">
          <span className="font-playfair text-[6rem] md:text-[10rem] font-bold text-foreground/[0.04] leading-none">
            {sectionKeyword}
          </span>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-fluid-base max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-6 w-16 h-px bg-golden-500" />
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default ChapterContainer;
