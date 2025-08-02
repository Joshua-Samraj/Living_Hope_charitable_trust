import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiClock, FiAward, FiSmile, FiChevronDown } from 'react-icons/fi';

const NewVolunteers = () => {
  const whatsappNumber = '7305955939';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const benefits = [
    { 
      icon: <FiHeart className="w-6 h-6" />, 
      text: "Transform lives of underprivileged children",
      details: "Directly impact children's education and wellbeing through mentorship and support programs."
    },
    { 
      icon: <FiUsers className="w-6 h-6" />, 
      text: "Join a passionate community",
      details: "Connect with like-minded individuals who share your commitment to social change."
    },
    { 
      icon: <FiSmile className="w-6 h-6" />, 
      text: "Gain personal fulfillment",
      details: "Experience the joy of giving back and watch your efforts create tangible differences."
    },
    { 
      icon: <FiAward className="w-6 h-6" />, 
      text: "Receive appreciation certificates",
      details: "Get formal recognition for your contributions that can enhance your professional profile."
    },
    { 
      icon: <FiClock className="w-6 h-6" />, 
      text: "Flexible timings to fit your schedule",
      details: "Choose from weekday evenings, weekends, or remote volunteering options that work for you."
    }
  ];

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 [perspective:1000px]"
            >
              <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto text-blue-600">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                  <div className="absolute bottom-4 text-blue-400">
                    <FiChevronDown className="w-5 h-5 animate-bounce" />
                  </div>
                </div>


                {/* Back */}
                  <div className="absolute inset-0 bg-black text-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">

                    <p className="text-sm text-center">{item.details}</p>
                    <button className="mt-4 text-blue-500 text-sm font-medium flex items-center">
                      Learn more <FiChevronDown className="ml-1 w-4 h-4" />
                    </button>
                  </div>

              </div>
            </div>
          ))}

          {/* CTA Card */}
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
        </motion.div>

        {/* Testimonial and Stats are unchanged, include them as-is */}
      </div>
    </motion.div>
  );
};

export default NewVolunteers;
