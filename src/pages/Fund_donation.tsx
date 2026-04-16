import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Heart, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { students } from '../data/student';

const FutureSparksHome: React.FC = () => {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => e.preventDefault();
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'u')) {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextmenu);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-gray-50 overflow-x-hidden"
    >
      <Helmet>
        <title>Support Education | Future Sparks by Living Hope Trust</title>
        <meta name="description" content="Donate and help students achieve their dreams. Every contribution counts." />
        <meta property="og:title" content="Support Education | Future Sparks by Living Hope Trust" />
        <meta property="og:description" content="Donate and help students achieve their dreams. Every contribution counts." />
        <meta property="og:image" content="https://living-hope-charitable-education-website-liart.vercel.app/image/thumbline.jpg" />
        <meta property="og:url" content="https://living-hope-charitable-education-website-liart.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white pt-24 pb-16 px-4 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-20">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src="image/projects/logo_final.png" 
            alt="Living Hope Logo" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-xl mb-6 object-cover pointer-events-none"
            draggable="false"
          />
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-3xl font-semibold mb-2 text-blue-200"
          >
            Living Hope Charitable Trust
          </motion.h1>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-6 tracking-tight uppercase"
          >
            Future Sparks
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl text-indigo-100 mb-2"
          >
            Join the 2025 Educational Fundraising | Empower a Child's Future
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg max-w-2xl text-indigo-200 mb-8"
          >
            Help students achieve their dreams through your donations
          </motion.p>
          <motion.a 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            href="tel:+919500561937" 
            className="bg-[#e7681b] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center"
          >
            <PhoneCall className="mr-2 h-5 w-5" /> Contact Us
          </motion.a>
        </div>
      </section>

      <div className="bg-orange-500 text-white py-3 overflow-hidden whitespace-nowrap shadow-md relative z-20">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          <span className="text-sm md:text-base font-medium px-4">
            Give with Heart, Save on Tax! Your generous donation comes with the added benefit of 80G tax exemption | Contact us : +919500561937 | Thank you for your support! 🙏
          </span>
          <span className="text-sm md:text-base font-medium px-4">
            Give with Heart, Save on Tax! Your generous donation comes with the added benefit of 80G tax exemption | Contact us : +919500561937 | Thank you for your support! 🙏
          </span>
        </div>
      </div>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Students in Need</h2>
          <div className="h-1 w-24 bg-[#e7681b] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Added padding to the container to give the image breathing room, and changed object-cover to object-contain */}
              <div className="relative h-64 w-full bg-gray-50 overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-full h-full object-contain pointer-events-none drop-shadow-md"
                  draggable="false"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = student.gender?.toLowerCase() === 'female' ? '/image/projects/student_image/girl.png' : '/image/projects/student_image/boy.png';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center">
                  <GraduationCap className="h-3 w-3 mr-1" /> {student.grade}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{student.name}</h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Age</span>
                    <span className="font-semibold text-gray-800">{student.age} Years</span>
                  </div>
                  <div className="flex items-start text-sm border-b border-gray-100 pb-2">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-700">{student.location}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Requirement</p>
                    <p className="text-sm font-medium text-gray-700">{student.details}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="bg-orange-50 rounded-xl p-4 mb-4 flex justify-between items-center border border-orange-100">
                    <span className="text-orange-800 font-bold uppercase text-xs tracking-wider">Fund Need</span>
                    <span className="text-xl font-extrabold text-[#e7681b]">{student.need}</span>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      to={student.detailRoute}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-3 rounded-xl font-bold transition-colors duration-300 text-sm flex items-center justify-center"
                    >
                      View Details
                    </Link>
                    <a 
                      href={student.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center shadow-lg shadow-green-600/30 text-sm"
                    >
                      <Heart className="h-4 w-4 mr-1.5" /> Donate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Educational Donation Fund. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.div>
  );
};

export default FutureSparksHome;