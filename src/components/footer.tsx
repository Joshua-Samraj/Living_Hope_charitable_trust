import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Living Hope</h3>
            <p className="text-gray-400 mb-6">
              Empowering communities through education, healthcare, and sustainable development initiatives.
            </p>
            {/* <div className="flex space-x-4">
              {[
                { icon: Facebook, url: "#" },
                { icon: Twitter, url: "#" },
                { icon: Instagram, url: "#" },
                { icon: Linkedin, url: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.icon.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Get Involved", path: "/volunteer" },
                { name: "Donation", path: "/donation" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">contact@livinghope.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">+91 9500561937</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">Plot No 16, Rose Nagar, Melapalayam-627005</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on our initiatives.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div> */}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} Living Hope Charitable Trust. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;