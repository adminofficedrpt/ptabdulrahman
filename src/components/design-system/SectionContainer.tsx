
import React from 'react';
import { cn } from '@/lib/utils';
import GeometricPattern from './GeometricPattern';

interface SectionContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark';
  pattern?: boolean;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  variant = 'default',
  pattern = false,
  className,
  id
}) => {
  const variantClasses = {
    default: 'bg-white text-gray-900',
    accent: 'bg-gradient-to-br from-royal-50 to-golden-50 text-gray-900',
    dark: 'bg-gradient-to-br from-royal-900 to-royal-800 text-white'
  };

  return (
    <section 
      id={id}
      className={cn(
        'relative py-24 overflow-hidden',
        variantClasses[variant],
        className
      )}
    >
      {pattern && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10">
            <GeometricPattern pattern="eightPointStar" size="sm" opacity={0.05} />
          </div>
          <div className="absolute top-32 right-20">
            <GeometricPattern pattern="arabesque" size="md" opacity={0.03} />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <GeometricPattern pattern="tessellation" size="lg" opacity={0.04} />
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
