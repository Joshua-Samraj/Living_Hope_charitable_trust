import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Category } from '../data/categories';

interface CategoryCardProps {
  category: Category;
  onClick: (keyword: string) => void;
  projectCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, projectCount }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(category.keyword)}
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`} />
      
      <div className="relative z-10 px-8 pb-8 text-white">
  {/* Full-width image without side padding */}
<div className="-mx-8 relative w-auto aspect-[16/9] overflow-hidden rounded-t-lg group">
  <img 
    src={category.image} 
    alt={category.name}
    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
  />

</div>


  <h3 className="text-2xl font-bold mb-2 mt-4">{category.name}</h3>

  <p className="text-white/90 mb-4 line-clamp-2">
    {category.description}
  </p>

  <div className="flex items-center justify-between">
    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
      {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
    </span>

    <motion.div
      className="flex items-center gap-2 text-sm font-medium"
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.3 }}
    >
      View Projects
      <ArrowRight className="h-4 w-4" />
    </motion.div>
  </div>
</div>

      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </motion.div>
  );
};

export default CategoryCard;