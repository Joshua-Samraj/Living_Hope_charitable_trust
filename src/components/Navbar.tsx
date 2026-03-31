import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', navBg: 'bg-blue-50/95', mobileBg: 'bg-blue-50', activeBg: 'bg-blue-600', hoverStyle: 'hover:bg-blue-100 hover:text-blue-700' },
    { name: 'About', path: '/about', navBg: 'bg-emerald-50/95', mobileBg: 'bg-emerald-50', activeBg: 'bg-emerald-600', hoverStyle: 'hover:bg-emerald-100 hover:text-emerald-700' },
    { name: 'Projects', path: '/projects', navBg: 'bg-purple-50/95', mobileBg: 'bg-purple-50', activeBg: 'bg-purple-600', hoverStyle: 'hover:bg-purple-100 hover:text-purple-700' },
    { name: 'Event Calendar', path: '/events', navBg: 'bg-orange-50/95', mobileBg: 'bg-orange-50', activeBg: 'bg-orange-600', hoverStyle: 'hover:bg-orange-100 hover:text-orange-700' },
    { name: 'Donate', path: '/donation', navBg: 'bg-rose-50/95', mobileBg: 'bg-rose-50', activeBg: 'bg-rose-600', hoverStyle: 'hover:bg-rose-100 hover:text-rose-700' },
    { name: 'Volunteer', path: '/volunteer', navBg: 'bg-teal-50/95', mobileBg: 'bg-teal-50', activeBg: 'bg-teal-600', hoverStyle: 'hover:bg-teal-100 hover:text-teal-700' },
    { name: 'Gallery', path: '/gallery', navBg: 'bg-indigo-50/95', mobileBg: 'bg-indigo-50', activeBg: 'bg-indigo-600', hoverStyle: 'hover:bg-indigo-100 hover:text-indigo-700' },
  ];

  const checkIsActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const activeItem = navItems.find(item => checkIsActive(item.path));
  
  // ==========================================
  // NAVBAR STYLE LOGIC
  // ==========================================
  const isHomePage = location.pathname === '/';
  
  // It should only be transparent if we are ON the home page AND at the top.
  const isTransparent = isHomePage && !isScrolled;
  
  const navbarBackgroundClass = isTransparent 
    ? 'bg-transparent' 
    : (activeItem ? activeItem.navBg : 'bg-white/95') + ' backdrop-blur-md shadow-lg';
    
  // White text if transparent, Black text otherwise
  const textColorClass = isTransparent ? 'text-white drop-shadow-md' : 'text-black';
  
  // Makes the logo solid white when transparent
  const logoFilterClass = isTransparent ? 'brightness-0 invert drop-shadow-lg' : '';

  const currentMobileBg = activeItem ? activeItem.mobileBg : 'bg-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${navbarBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" 
              alt="Living Hope Logo" 
              className={`h-20 w-15 transition-all duration-300 ${logoFilterClass}`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navItems.map((item) => {
                const isActive = checkIsActive(item.path);
                
                // Styling logic for links
                const linkStyle = isActive
                  ? `${item.activeBg} text-white shadow-md transform scale-105`
                  : `${textColorClass} ${!isTransparent ? item.hoverStyle : 'hover:text-blue-200'}`;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${linkStyle}`}
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
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${textColorClass} ${!isTransparent ? 'hover:bg-black/5' : 'hover:bg-white/20'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden transition-colors duration-500 ${!isTransparent ? currentMobileBg : 'bg-black/80 backdrop-blur-xl'}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 shadow-inner border-t border-white/10">
          {navItems.map((item) => {
            const isActive = checkIsActive(item.path);
            
            // Mobile link text styling
            const mobileLinkStyle = isActive
              ? `${item.activeBg} text-white shadow-md`
              : (!isTransparent ? `text-black ${item.hoverStyle}` : 'text-gray-200 hover:text-white hover:bg-white/10');

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${mobileLinkStyle}`}
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