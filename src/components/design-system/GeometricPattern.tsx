
import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricPatternProps {
  pattern?: 'eightPointStar' | 'arabesque' | 'tessellation';
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
  className?: string;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({
  pattern = 'eightPointStar',
  size = 'md',
  opacity = 0.1,
  className
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const patterns = {
    eightPointStar: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cn(sizeClasses[size], className)}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    arabesque: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cn(sizeClasses[size], className)}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    tessellation: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cn(sizeClasses[size], className)}>
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
        <polygon points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  };

  return (
    <div 
      className="text-golden-500" 
      style={{ opacity }}
    >
      {patterns[pattern]}
    </div>
  );
};

export default GeometricPattern;
