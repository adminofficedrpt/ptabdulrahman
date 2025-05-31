
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import FluidTypography from '@/components/typography/FluidTypography';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <FluidTypography variant="h4" color="royal" className="mb-4">
              Featured Documentary
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="mb-6">
              Watch the inspiring story of Dr. P.T. Abdul Rahman's journey in Islamic education and humanitarian service.
            </FluidTypography>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Play className="h-16 w-16 text-gray-400" />
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors min-h-[44px]"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
