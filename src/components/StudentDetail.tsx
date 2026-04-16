import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, GraduationCap, Heart, BookOpen, ShieldAlert, CreditCard, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { students } from '../data/student'; 

const StudentDetail: React.FC = () => {
  const { studentSlug } = useParams<{ studentSlug: string }>();
  const navigate = useNavigate();
  const [showQRModal, setShowQRModal] = useState(false);

  const student = students.find(s => s.detailRoute.split('/').pop() === studentSlug);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleContextmenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextmenu);
    return () => document.removeEventListener('contextmenu', handleContextmenu);
  }, [studentSlug]);

  if (!student) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <ShieldAlert className="h-16 w-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Profile Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
        </button>
      </div>
    );
  }

  const extendedDetails = {
    school: "Francis Xavier College of Engineering",
    academicPerformance: "Scoring above 85% in all subjects",
    familyBackground: `${student.name} is a bright and ambitious student. They are passionate about learning and always eager to explore new things. Their family is supportive but facing financial constraints. Your support will help ${student.name.split('.')[0]} achieve their educational goals and make a positive impact.`,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pb-20"
    >
      <Helmet>
        <title>{student.name} - Student Details | Living Hope Trust</title>
        <meta name="description" content={`Support ${student.name}'s education. Help needed: ${student.need}`} />
      </Helmet>

      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-6 px-4 shadow-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-100 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back
          </button>
          <h1 className="text-xl font-bold truncate px-4">{student.name}</h1>
          <button className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            <div className="relative h-80 md:h-full min-h-[400px] bg-gray-200">
              <img 
                src={student.image} 
                alt={student.name}
                className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                draggable="false"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = student.gender?.toLowerCase() === 'Female' ? '/image/projects/student_image/girl.png' : '/image/projects/student_image/boy.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block shadow-lg">
                  {student.id.replace('_', ' ')}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1">{student.name}</h2>
                <div className="flex items-center text-gray-200 text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-1" /> {student.location}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col">
              <div className="space-y-6 flex-grow">
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Age</p>
                    <p className="text-lg font-semibold text-gray-900">{student.age} Years</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Class</p>
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-gray-900 leading-tight">{student.grade}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center border-b pb-2 mb-3">
                    <BookOpen className="h-5 w-5 mr-2 text-indigo-600" /> Academic Profile
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li><strong className="text-gray-900">Institution:</strong> {extendedDetails.school}</li>
                    <li><strong className="text-gray-900">Performance:</strong> {extendedDetails.academicPerformance}</li>
                    <li><strong className="text-gray-900">Requirements:</strong> {student.details}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center border-b pb-2 mb-3">
                    <Heart className="h-5 w-5 mr-2 text-red-500" /> Family Background
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {extendedDetails.familyBackground}
                  </p>
                </div>

                <div className="bg-[#2c3e50] p-5 rounded-2xl shadow-inner mt-6 border-l-4 border-yellow-400">
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">Total Help Needed</p>
                  <p className="text-3xl font-extrabold text-[#edfa00]">{student.need}</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-center text-sm font-medium text-gray-500 italic mb-4">
                  "Your donation can be the turning point in this student's life."
                </p>
                
                <a 
                  href={student.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#e7681b] hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <CreditCard className="h-5 w-5 mr-2" /> Donate Now via Razorpay
                </a>
                
                <button 
                  onClick={() => setShowQRModal(true)}
                  className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-colors"
                >
                  Show QR Code
                </button>

                <button 
                  onClick={() => navigate(-1)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors flex items-center justify-center"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" /> Back to Previous Step
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

      {showQRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Scan to Donate</h2>
            <p className="text-gray-500 text-sm mb-6">Supporting {student.name}</p>
            
            <div className="bg-gray-100 p-4 rounded-2xl mb-6 inline-block">
              <img 
                src="/image/qr.png" 
                alt="Donation QR Code" 
                className="w-48 h-48 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200?text=QR+Code';
                }}
              />
            </div>
            
            <button 
              onClick={() => setShowQRModal(false)}
              className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default StudentDetail;