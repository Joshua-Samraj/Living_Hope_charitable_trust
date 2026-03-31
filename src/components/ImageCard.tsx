import React, { useState } from 'react';

interface ImageCardProps {
  url: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-gray-200 rounded-xl overflow-hidden group">
      {/* SHINE PANEL: Only visible while isLoaded is false */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 animate-shimmer" />
      )}
      
      <img
        src={url}
        alt={title}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Hover Title */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 z-20">
        <p className="text-white text-xs font-medium truncate">{title}</p>
      </div>
    </div>
  );
};

export default ImageCard;