import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Define unique color themes for each route
  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      navBg: 'bg-blue-50/90', 
      mobileBg: 'bg-blue-50',
      activeBg: 'bg-blue-600', 
      hoverStyle: 'hover:bg-blue-100 hover:text-blue-700' 
    },
    { 
      name: 'About', 
      path: '/about', 
      navBg: 'bg-emerald-50/90', 
      mobileBg: 'bg-emerald-50',
      activeBg: 'bg-emerald-600', 
      hoverStyle: 'hover:bg-emerald-100 hover:text-emerald-700' 
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      navBg: 'bg-purple-50/90', 
      mobileBg: 'bg-purple-50',
      activeBg: 'bg-purple-600', 
      hoverStyle: 'hover:bg-purple-100 hover:text-purple-700' 
    },
    { 
      name: 'Event Calendar', 
      path: '/events', 
      navBg: 'bg-orange-50/90', 
      mobileBg: 'bg-orange-50',
      activeBg: 'bg-orange-600', 
      hoverStyle: 'hover:bg-orange-100 hover:text-orange-700' 
    },
    { 
      name: 'Donate', 
      path: '/donation', 
      navBg: 'bg-rose-50/90', 
      mobileBg: 'bg-rose-50',
      activeBg: 'bg-rose-600', 
      hoverStyle: 'hover:bg-rose-100 hover:text-rose-700' 
    },
    { 
      name: 'Volunteer', 
      path: '/volunteer', 
      navBg: 'bg-teal-50/90', 
      mobileBg: 'bg-teal-50',
      activeBg: 'bg-teal-600', 
      hoverStyle: 'hover:bg-teal-100 hover:text-teal-700' 
    },
    { 
      name: 'Gallery', 
      path: '/gallery', 
      navBg: 'bg-indigo-50/90', 
      mobileBg: 'bg-indigo-50',
      activeBg: 'bg-indigo-600', 
      hoverStyle: 'hover:bg-indigo-100 hover:text-indigo-700' 
    },
  ];

  // Helper to determine if a route is active (handles nested routes like /projects/education)
  const checkIsActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Find the currently active item to set the navbar background
  const activeItem = navItems.find(item => checkIsActive(item.path));
  const currentNavBg = activeItem ? activeItem.navBg : 'bg-white/90';
  const currentMobileBg = activeItem ? activeItem.mobileBg : 'bg-white';

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 shadow-lg transition-colors duration-500 ease-in-out ${currentNavBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" 
              alt="Living Hope Logo" 
              className="h-20 w-15" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navItems.map((item) => {
                const isActive = checkIsActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? `${item.activeBg} text-white shadow-md transform scale-105`
                        : `text-gray-700 ${item.hoverStyle}`
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-black/5 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden border-t border-black/5 overflow-hidden transition-colors duration-500 ${currentMobileBg}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 shadow-inner">
          {navItems.map((item) => {
            const isActive = checkIsActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? `${item.activeBg} text-white shadow-md`
                    : `text-gray-700 ${item.hoverStyle}`
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;