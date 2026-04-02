import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace these URLs with actual local images or your own high-res trust photos
const slideshowImages = [
  "/image/projects/gallery/Real_christmas/(5).JPG",
  "/image/projects/gallery/hunger/(5).jpg",
];

const NewVolunteers = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const whatsappNumber = '919500561937';
  const message = "Hi, I'm interested in joining as a volunteer. I found this information on your website.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); 
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center pt-24 px-4 sm:px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl w-full space-y-20">
        
        {/* --- HERO SECTION WITH SLIDESHOW IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Volunteer Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Join Our <span className="text-blue-600">Community</span> <br /> of Change Makers
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Your time and skills can create lasting impact. Whether you have a few hours or regular availability, 
              together we can build brighter futures for children in need.
            </p>
            
            <div className="pt-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-blue-200 inline-block"
                whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
              >
                Apply to Volunteer
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image Container (Slideshow) */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-blue-200/50 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
            
            {/* Main Animated Image Frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }} // Gentle overall float
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[5/4] bg-gray-900"
            >
              <AnimatePresence initial={false}>
                <motion.img 
                  key={currentImageIndex} //Important: Tells Framer it's a new element to animate
                  src={slideshowImages[currentImageIndex]} 
                  alt="Volunteers working together" 
                  initial={{ opacity: 0, scale: 1.1 }} // Cinematic zoom-in
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }} // Smooth fade-out
                  transition={{ duration: 1.2, ease: "easeInOut" }} // Soft 1.2s crossfade
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Faint Overlay to ensure readability of the label */}
              <div className="absolute inset-0 bg-black/10 z-10" />

              {/* Image Overlay Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">❤</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Impact</p>
                    <p className="text-sm font-bold text-gray-800">500+ Lives Changed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* --- CALL TO ACTION CARD (Unchanged) --- */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 p-10 rounded-3xl shadow-xl text-white text-center flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Real Difference?</h3>
          <p className="mb-8 text-blue-100 text-lg max-w-2xl">
            Click the button below to chat with our coordination team on WhatsApp. We'll help find the perfect role for your skills.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-bold py-4 px-12 rounded-xl inline-block shadow-lg"
            whileHover={{ scale: 1.05, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Chat with us on WhatsApp
          </motion.a>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default NewVolunteers;