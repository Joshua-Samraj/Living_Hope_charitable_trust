import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, CheckCircle, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Donation = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  // Add your slideshow images here
  const sliderImages = [
    '/image/projects/gallery/future_sparks/(1).jpg',
    '/image/projects/gallery/future_sparks/(2).jpg',
    '/image/projects/gallery/future_sparks/(3).jpg',
    '/image/projects/gallery/future_sparks/(4).jpg',
    '/image/projects/gallery/future_sparks/(5).jpg',
    '/image/projects/gallery/future_sparks/(6).jpg',
  ];

  const upiId = 'lydiasherinss@okaxis';
  const qrCodePath = '/image/projects/qr_code.png';

  // Bank Details
  const bankDetails = {
    accountName: 'LIVING HOPE CHARITABLE TRUST',
    accountNumber: '925010021372118',
    bankName: 'AXIS BANK ',
    ifsc: 'UTIB0002095',
    branch: 'Palayamkottai Branch',
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    alert('UPI ID copied to clipboard!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 bg-gray-50"
    >
      <Helmet>
        <title>Donate | Living Hope Charitable Trust | Support Our Cause</title>
        <meta 
          name="description" 
          content="Make a donation to Living Hope Charitable Trust. Support rural education, cancer care, and humanitarian aid. Donate via UPI or bank transfer securely." 
        />
        <meta name="keywords" content="Donate, Charity Donation, NGO Donation, Cancer Support, Education, Fund Donation, Living Hope" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://living-hope-charitable-trust.vercel.app/donation" />
        <meta property="og:title" content="Donate | Living Hope Charitable Trust" />
        <meta property="og:description" content="Make a donation to support rural education, cancer care, and humanitarian aid programs." />
        <meta property="og:image" content="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Donate to Living Hope Charitable Trust" />
        <meta name="twitter:description" content="Support our mission to empower communities through education and humanitarian aid." />
        <meta name="twitter:image" content="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" />
      </Helmet>

      {/* Hero Section with Infinite Scroll Background */}
      <section className="relative py-24 md:py-32 overflow-hidden pb-40 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0 bg-gray-900 overflow-hidden flex items-center">
          <motion.div
            className="flex h-full items-center w-max"
            animate={{ x: ["-50%", "0%"] }} // Moving from left to right seamlessly
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {/* First Set of Images */}
            <div className="flex h-full items-center w-max">
              {sliderImages.map((src, index) => (
                <img
                  key={`set1-${index}`}
                  src={src}
                  // max-w-none ensures flexbox doesn't squish the images
                  className="h-[70%] md:h-[80%] w-auto max-w-none object-contain px-4 pointer-events-none opacity-40"
                  alt="Charity Impact"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Living+Hope';
                  }}
                />
              ))}
            </div>
            {/* Second Identical Set for perfect looping */}
            <div className="flex h-full items-center w-max">
              {sliderImages.map((src, index) => (
                <img
                  key={`set2-${index}`}
                  src={src}
                  className="h-[70%] md:h-[80%] w-auto max-w-none object-contain px-4 pointer-events-none opacity-40"
                  alt="Charity Impact"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Living+Hope';
                  }}
                />
              ))}
            </div>
          </motion.div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Support Our Cause</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 font-medium drop-shadow">
              Scan the QR code or use the bank details below to donate to our general fund, or directly sponsor a student's education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impactful Student Donation Banner */}
      <section className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-[#e7681b] to-orange-500 rounded-3xl shadow-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between transform transition-transform hover:-translate-y-2"
        >
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <GraduationCap className="h-8 w-8 mr-3 text-yellow-200" />
              <h2 className="text-3xl font-extrabold tracking-tight">Future Sparks Fund</h2>
            </div>
            <p className="text-orange-100 text-lg font-medium">
              Want to see exactly where your money goes? Directly sponsor a student's education and rewrite their future.
            </p>
          </div>
          <Link 
            to="/fund_donation" 
            className="shrink-0 bg-white text-[#e7681b] hover:text-orange-600 font-bold text-lg py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all flex items-center whitespace-nowrap"
          >
            Meet the Students <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* UPI QR Code Section */}
      <section className="py-12 bg-transparent">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">General Donation via UPI</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-64 h-64 mx-auto mb-6 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center p-2">
              <img
                src={qrCodePath}
                alt="UPI QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-blue-50 py-3 px-4 rounded-lg inline-block mb-4">
              <p className="text-lg font-medium text-gray-700">
                UPI ID: <span className="font-bold text-blue-700">{upiId}</span>
              </p>
            </div>
            <div>
              <button
                onClick={handleCopyUPI}
                className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition duration-300 shadow-md"
              >
                Copy UPI ID
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Use any UPI app like Google Pay, PhonePe, or Paytm to scan or send to the above UPI ID.
            </p>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Bank Transfer</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-left space-y-5 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
            
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500 font-medium">Account Name</span>
              <span className="text-gray-900 font-bold text-right">{bankDetails.accountName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500 font-medium">Account Number</span>
              <span className="text-gray-900 font-bold text-xl tracking-wider">{bankDetails.accountNumber}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500 font-medium">Bank Name</span>
              <span className="text-gray-900 font-bold">{bankDetails.bankName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500 font-medium">IFSC Code</span>
              <span className="text-gray-900 font-bold tracking-wider">{bankDetails.ifsc}</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-500 font-medium">Branch</span>
              <span className="text-gray-900 font-bold text-right">{bankDetails.branch}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            You can use internet banking, NEFT, or IMPS to make your contribution.
          </p>
        </div>
      </section>

      {/* Thank You Animation */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-center py-16"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8"
              >
                <Sparkles className="h-8 w-8 text-yellow-500" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -left-8"
              >
                <Sparkles className="h-6 w-6 text-blue-500" />
              </motion.div>

              <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 max-w-xl mx-auto">
                We truly appreciate your support. Your donation is making a real difference.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Donation;