
import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingStateProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  variant?: 'spinner' | 'skeleton' | 'pulse';
}

const LoadingState: React.FC<LoadingStateProps> = ({
  size = 'md',
  text,
  className,
  variant = 'spinner',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  if (variant === 'skeleton') {
    return (
      <div className={cn('animate-pulse', className)}>
        <div className="bg-gray-200 rounded h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-200 rounded h-4 w-1/2"></div>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={cn('bg-gray-100 rounded', className)}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    );
  }

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <Loader className={cn(sizeClasses[size], 'text-royal-600')} />
      </motion.div>
      {text && (
        <span className="text-sm text-gray-600 font-medium">{text}</span>
      )}
    </div>
  );
};

export default LoadingState;
