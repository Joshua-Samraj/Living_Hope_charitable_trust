import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageViewerProps {
  imageUrl: string;
  imageTitle: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex?: number;
  totalImages?: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  imageUrl,
  imageTitle,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages
}) => {
  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-6xl w-full p-4"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Image with subtle zoom animation */}
            <motion.img
              src={imageUrl}
              alt={imageTitle}
              className="max-h-[85vh] w-auto h-auto mx-auto object-contain rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ delay: 0.1 }}
            />

            {/* Image info with gradient background */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <div className="max-w-4xl mx-auto flex justify-between items-end">
                <div>
                  <h3 className="text-white text-xl font-semibold">{imageTitle}</h3>
                  {currentIndex !== undefined && totalImages !== undefined && (
                    <p className="text-gray-300 text-sm mt-1">
                      {currentIndex + 1} of {totalImages}
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  {/* Download button */}
                  {/* <a 
                    href={imageUrl} 
                    download 
                    className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-sm flex items-center"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a> */}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Keyboard hint */}
            <div className="absolute bottom--1 left-1/2 transform -translate-x-1/2 bg-black/50 text-white/70 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              
              Use ← → arrow keys to navigate
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;