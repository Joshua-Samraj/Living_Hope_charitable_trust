import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/galleryData';
import ImageCard from './ImageCard';
import ImageViewer from './ImageViewer';

const IMAGES_PER_PAGE = 10;

const GhostCard = () => (
  <div className="w-full aspect-square bg-gray-200 rounded-xl overflow-hidden relative">
    <div className="absolute inset-0 animate-shimmer" />
  </div>
);

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(IMAGES_PER_PAGE);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Categories extraction
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))],
    []
  );

  // Filter images based on category
  const filteredImages = useMemo(() => {
    return selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  // Handle category change with a small ghost loading delay
  const handleCategoryChange = (category: string) => {
    setIsPageLoading(true);
    setSelectedCategory(category);
    setVisibleCount(IMAGES_PER_PAGE);
    setIsDropdownOpen(false);
    // Smooth transition delay
    setTimeout(() => setIsPageLoading(false), 600);
  };

  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + IMAGES_PER_PAGE);
  };

  // Close dropdown on click outside
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

      {/* --- MOBILE DROPDOWN --- */}
      <div className="block md:hidden px-2 mb-8 relative z-30" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center"
        >
          <span className="font-semibold text-gray-800">{selectedCategory}</span>
          <motion.svg animate={{ rotate: isDropdownOpen ? 180 : 0 }} className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-2 right-2 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden origin-top z-50">
              {categories.map((category) => (
                <button key={category} onClick={() => handleCategoryChange(category)} className="w-full text-left px-5 py-3 text-sm hover:bg-gray-50">
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- DESKTOP TABS --- */}
      <div className="hidden md:flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
              selectedCategory === category ? 'bg-red-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- IMAGE GRID --- */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 relative z-10">
        <AnimatePresence mode="popLayout">
          {isPageLoading
            ? Array.from({ length: 10 }).map((_, i) => (
                <motion.div key={`skeleton-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <GhostCard />
                </motion.div>
              ))
            : visibleImages.map((img, index) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={img.id}
                  onClick={() => setCurrentIndex(index)}
                  className="focus:outline-none aspect-square"
                >
                  <ImageCard url={img.url} title={img.title} />
                </motion.button>
              ))}
        </AnimatePresence>
      </div>

      {/* --- LOAD MORE --- */}
      {visibleCount < filteredImages.length && !isPageLoading && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full shadow-sm hover:shadow-md transition-all"
          >
            Load More Images
          </button>
        </div>
      )}

      {/* --- VIEWER --- */}
      <AnimatePresence>
        {currentIndex !== null && (
          <ImageViewer
            imageUrl={filteredImages[currentIndex].url}
            imageTitle={filteredImages[currentIndex].title}
            onClose={() => setCurrentIndex(null)}
            onNext={() => setCurrentIndex((currentIndex + 1) % filteredImages.length)}
            onPrev={() => setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;