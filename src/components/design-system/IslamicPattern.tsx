
import React from 'react';
import { cn } from '@/lib/utils';

interface IslamicPatternProps {
  variant?: 'star' | 'geometric' | 'arabesque' | 'tessellation';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  className?: string;
  animate?: boolean;
}

const IslamicPattern: React.FC<IslamicPatternProps> = ({
  variant = 'star',
  size = 'md',
  opacity = 0.1,
  className,
  animate = false
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const patterns = {
    star: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        <defs>
          <pattern id="starPattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <g fill="currentColor" opacity={opacity}>
              <path d="M50 10 l7.5 15 l17.5 2.5 l-12.5 12.5 l2.5 17.5 l-15 -7.5 l-15 7.5 l2.5 -17.5 l-12.5 -12.5 l17.5 -2.5 z"/>
              <circle cx="50" cy="50" r="3" fill="currentColor"/>
            </g>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#starPattern)"/>
      </svg>
    ),
    geometric: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        <defs>
          <pattern id="geometricPattern" patternUnits="userSpaceOnUse" width="50" height="50">
            <g fill="none" stroke="currentColor" strokeWidth="1" opacity={opacity}>
              <polygon points="25,5 45,15 45,35 25,45 5,35 5,15"/>
              <polygon points="25,15 35,20 35,30 25,35 15,30 15,20"/>
            </g>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#geometricPattern)"/>
      </svg>
    ),
    arabesque: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        <defs>
          <pattern id="arabesquePattern" patternUnits="userSpaceOnUse" width="40" height="40">
            <g fill="currentColor" opacity={opacity}>
              <path d="M20 5 Q30 10 20 20 Q10 10 20 5 Z"/>
              <path d="M5 20 Q10 30 20 20 Q10 10 5 20 Z"/>
              <path d="M20 35 Q30 30 20 20 Q10 30 20 35 Z"/>
              <path d="M35 20 Q30 10 20 20 Q30 30 35 20 Z"/>
            </g>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#arabesquePattern)"/>
      </svg>
    ),
    tessellation: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        <defs>
          <pattern id="tessellationPattern" patternUnits="userSpaceOnUse" width="30" height="30">
            <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity={opacity}>
              <polygon points="15,0 30,7.5 30,22.5 15,30 0,22.5 0,7.5"/>
              <polygon points="15,7.5 22.5,11.25 22.5,18.75 15,22.5 7.5,18.75 7.5,11.25"/>
            </g>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#tessellationPattern)"/>
      </svg>
    )
  };

  return (
    <div className={cn(
      "text-golden-500",
      animate && "animate-float"
    )}>
      {patterns[variant]}
    </div>
  );
};

export default IslamicPattern;
