
import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-lg mb-4">Dr. P.T. Abdul Rahman</p>
          <p className="text-sm text-slate-500">
            Islamic Scholar, Educator & Community Leader
          </p>
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
