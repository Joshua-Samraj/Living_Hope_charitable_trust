import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/galleryData';
import ImageCard from './ImageCard';
import ImageViewer from './ImageViewer';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
  // State for custom mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))],
    []
  );

  const filteredImages = useMemo(() => {
    return selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 text-3xl font-bold text-center mb-8 text-gray-900"
      >
        Trust Activity Gallery
      </motion.h1>

      {/* --- CUSTOM MOBILE DROPDOWN --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="block md:hidden px-2 mb-8 relative z-30"
        ref={dropdownRef}
      >
        <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Filter Category</p>
        
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
        >
          <span className="font-semibold text-gray-800">{selectedCategory}</span>
          <motion.svg 
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-gray-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-2 right-2 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden origin-top"
            >
              <div className="max-h-60 overflow-y-auto py-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentIndex(null);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors
                      ${selectedCategory === category 
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600 pl-4' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent pl-4'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- DESKTOP BUTTON TABS --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex flex-wrap gap-3 mb-10 justify-center px-4"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(null);
            }}
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 w-auto max-w-full
              ${selectedCategory === category 
                ? 'bg-red-600 border-red-600 text-white shadow-md scale-105' 
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:scale-105'}
            `}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* --- IMAGE GRID --- */}
      <motion.div 
        layout
        className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                opacity: { duration: 0.2 },
                layout: { duration: 0.3, type: "spring", bounce: 0.2 }
              }}
              key={img.id}
              onClick={() => setCurrentIndex(index)}
              className="focus:outline-none group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative aspect-square"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out h-full w-full">
                <ImageCard url={img.url} title={img.title} />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {currentIndex !== null && (
          <ImageViewer
            imageUrl={filteredImages[currentIndex].url}
            imageTitle={filteredImages[currentIndex].title}
            onClose={() => setCurrentIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;