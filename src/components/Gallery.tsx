import React, { useState, useMemo } from 'react';
import { galleryImages } from '../data/galleryData';
import ImageCard from './ImageCard';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))],
    []
  );

  const filteredImages = useMemo(() => {
    return selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="mt-10 text-3xl font-bold text-center mb-8">Trust Activity Gallery</h1>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-blue-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {filteredImages.map(img => (
          <ImageCard key={img.id} url={img.url} title={img.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
