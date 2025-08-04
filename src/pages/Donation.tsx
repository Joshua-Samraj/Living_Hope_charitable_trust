import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, CheckCircle, Sparkles } from 'lucide-react';


const Donation = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const upiId = 'lydiasherinss@okaxis';
  const qrCodePath = '/image/projects/qr_code.png';

  // Bank Details
  const bankDetails = {
    accountName: 'LIVING HOPE CHARITABLE TRUST',
    accountNumber: '925010021372118',
    bankName: 'AXIS BANK ',
    ifsc: 'UTIB0002095',
    branch: 'Palayamkottai Branch',
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
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 to-yellow-50 overflow-hidden">
        {/* <DonationAnimation /> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Support Our Cause</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scan the QR code or use the bank details below to donate. Your support empowers lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UPI QR Code Section */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Donate via UPI</h2>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <div className="w-60 h-60 mx-auto mb-4 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <img
                src={qrCodePath}
                alt="UPI QR Code"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              UPI ID: <span className="font-bold text-blue-600">{upiId}</span>
            </p>
            <button
              onClick={handleCopyUPI}
              className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300"
            >
              Copy UPI ID
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Use any UPI app like Google Pay, PhonePe, or Paytm to scan or send to the above UPI ID.
          </p>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Donate via Bank Transfer</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg text-left space-y-4">
            <p className="text-lg">
              <strong>Account Name:</strong> {bankDetails.accountName}
            </p>
            <p className="text-lg">
              <strong>Account Number:</strong> {bankDetails.accountNumber}
            </p>
            <p className="text-lg">
              <strong>Bank Name:</strong> {bankDetails.bankName}
            </p>
            <p className="text-lg">
              <strong>IFSC Code:</strong> {bankDetails.ifsc}
            </p>
            <p className="text-lg">
              <strong>Branch:</strong> {bankDetails.branch}
            </p>
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
