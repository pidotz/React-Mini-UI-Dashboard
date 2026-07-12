// src/components/body/page/PremiumDetailsOverview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Info, CreditCard, Landmark } from 'lucide-react';
import TileContentStyle from '../body-details/TileContentStyle.jsx';
 
const PremiumDetailsOverview = () => {
  const navigate = useNavigate();
 
  const handleGoBack = () => {
    // Navigating directly to the dashboard to avoid a double-click issue
    // that can occur with navigate(-1) due to extra history entries.
    navigate('/');
  };
 
  // Define variants for the main container of PremiumDetailsOverview
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
 
  // Define variants for individual sections
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4
      }
    }
  };
 
  return (
    // Wrap the entire content of the page with motion.div and apply containerVariants
    <motion.div
      className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-inter text-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back button section */}
      <motion.div variants={itemVariants} className="flex justify-start mb-6">
        <button
          onClick={handleGoBack}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Dashboard
        </button>
      </motion.div>
 
      {/* Main Title and Date section */}
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <p className="text-sm text-gray-600 mb-1">Data Refreshed Date : 26/07/2025 16:18:57</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Premium Details - T0677942</h1>
      </motion.div>
 
      {/* Details Sections Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 
        {/* Premium Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <Info className="mr-2 text-blue-500" size={24} />
            Premium Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Payment Frequency" value="01" labelBold={true} />
            <TileContentStyle label="Payment Method" value="B" labelBold={true} />
            <TileContentStyle label="Policy Currency" value="MYR" labelBold={true} />
            <TileContentStyle label="Installment Premium" value="11,120.00" labelBold={true} />
            <TileContentStyle label="Annualized Premium" value="11,120.00" labelBold={true} />
            <TileContentStyle label="Service Tax/GST" value="0.00" labelBold={true} />
            <TileContentStyle label="Total Premium" value="11,120.00" labelBold={true} />
            <TileContentStyle label="Premium Received" value="11,120.00" labelBold={true} />
          </div>
        </div>
 
        {/* Credit Card Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <CreditCard className="mr-2 text-blue-500" size={24} />
            Credit Card Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Card Issuing Bank" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Credit Card Type" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Credit Card Number" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Card Expiry Date" value="-N/A-" labelBold={true} />
          </div>
        </div>
 
        {/* Bank Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <Landmark className="mr-2 text-blue-500" size={24} />
            Bank Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Bank Account Type" value="DV" labelBold={true} />
            <TileContentStyle label="Bank Account Number" value="201708170000000092" labelBold={true} />
            <TileContentStyle label="Bank Name" value="Bank Code for Online Sales" labelBold={true} />
            <TileContentStyle label="Bank Reference Number" value="" labelBold={true} />
          </div>
        </div>
 
      </motion.div>
    </motion.div>
  );
};
 
export default PremiumDetailsOverview;