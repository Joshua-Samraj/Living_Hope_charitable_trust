import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3">Living Hope</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering communities through education, healthcare, and sustainable development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Events", path: "/events" },
                { name: "Get Involved", path: "/volunteer" },
                { name: "Donate", path: "/donation" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">contact@livinghope.org</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">+91 9500561937</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 shrink-0" />
                <span className="text-gray-400 leading-tight">Rose Nagar, Melapalayam-627005</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Living Hope Charitable Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;