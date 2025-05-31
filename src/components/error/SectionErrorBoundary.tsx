
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { AlertCircle } from 'lucide-react';

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName: string;
}

const SectionErrorBoundary: React.FC<SectionErrorBoundaryProps> = ({
  children,
  sectionName,
}) => {
  const fallback = (
    <div className="py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Unable to load {sectionName}
        </h3>
        <p className="text-gray-600 text-sm">
          This section is temporarily unavailable. Please try refreshing the page.
        </p>
      </div>
    </div>
  );

  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
};

export default SectionErrorBoundary;
