import React, { useState, useMemo } from 'react';
import { galleryImages } from '../data/galleryData';
import ImageCard from './ImageCard';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))], []);

  const filteredImages = useMemo(() => {
    return selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="px-6 py-10">
      <h1 className="mt-10 text-3xl font-bold text-center mb-8">Trust Activity Gallery</h1>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map(img => (
          <ImageCard key={img.id} url={img.url} title={img.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
