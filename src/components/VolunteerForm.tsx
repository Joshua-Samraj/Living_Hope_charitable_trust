// import React from 'react';
import { motion } from 'framer-motion';


const NewVolunteers = () => {
  const whatsappNumber = '+919500561937';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center px-4 sm:px-6 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full space-y-12">
        {/* Hero Section */}
        <motion.div 
          className="space-y-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
            Volunteer Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Join Our <span className="text-blue-600">Community</span> of <br className="hidden lg:block" /> Change Makers
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your time and skills can create lasting impact. Whether you have a few hours or regular availability, 
            together we can build brighter futures for children in need.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
            className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-3">Ready to Make a Difference?</h3>
            <p className="mb-5 text-blue-100">Join our team of dedicated volunteers today</p>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg inline-block w-fit mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>

        {/* Testimonial and Stats are unchanged, include them as-is */}
      </div>
    </motion.div>
  );
};

export default NewVolunteers;
