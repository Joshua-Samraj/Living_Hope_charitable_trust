
import React from 'react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden z-10 pt-16">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Animated Text Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 drop-shadow-md"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;