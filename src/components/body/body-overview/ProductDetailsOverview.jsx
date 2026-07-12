// src/components/body/page/ProductDetailsOverview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, CreditCard, Landmark, User } from 'lucide-react';
import TileContentStyle from '../body-details/TileContentStyle.jsx';
 
const ProductDetailsOverview = () => {
  const navigate = useNavigate();
 
  const handleGoBack = () => {
    // Navigating directly to the dashboard to avoid a double-click issue
    // that can occur with navigate(-1) due to extra history entries.
    navigate('/');
  };
 
  // Define variants for the main container of ProductDetailsOverview
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
 
  // Dummy data for the Product Details table
  const productDetails = [
    {
      laNo: 1,
      laFullName: 'TEST SIT SCEN SIX',
      planRiderCode: 'ULFC',
      planRider: '00',
      sumAssured: '490,000.00',
      planRiderName: 'Sun Prime Link+(Dth(80))',
      term: 54,
      premiumPayingTerm: 54,
      premium: '11,120.00'
    },
    {
      laNo: 1,
      laFullName: 'TEST SIT SCEN SIX',
      planRiderCode: 'ZTV1',
      planRider: '01',
      sumAssured: '490,000.00',
      planRiderName: 'Sun Prime Link+(TPD) - RVE',
      term: 44,
      premiumPayingTerm: 44,
      premium: '0.00'
    },
    {
      laNo: 1,
      laFullName: 'TEST SIT SCEN SIX',
      planRiderCode: 'DUM2',
      planRider: '00',
      sumAssured: '0.00',
      planRiderName: 'Dummy Supplementary Benefits 2',
      term: 54,
      premiumPayingTerm: 54,
      premium: '0.00'
    }
  ];
 
  return (
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
        <p className="text-sm text-gray-600 mb-1">Data Refreshed Date : 25/07/2025 16:18:16</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Product Details - T0677942</h1>
      </motion.div>
 
      {/* Details Sections Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 
        {/* Policy Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 col-span-1">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <Info className="mr-2 text-blue-500" size={24} />
            Policy Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Proposal Signed Date" value="18/06/2025" labelBold={true} />
            <TileContentStyle label="Proposal Received Date" value="18/06/2025" labelBold={true} />
            <TileContentStyle label="Proposal Entry Date" value="18/06/2025" labelBold={true} />
            <TileContentStyle label="Commencement Date" value="18/06/2025" labelBold={true} />
            <TileContentStyle label="Serial Number" value="DC-V1111" labelBold={true} />
            <TileContentStyle label="Servicing Branch" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Campaign Code" value="-N/A-" labelBold={true} />
            <TileContentStyle label="FACT Finding Option" value="2/2" labelBold={true} />
            <TileContentStyle label="Cross Reference Type" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Cross Reference Number" value="-N/A-" labelBold={true} />
            <TileContentStyle label="NF Option" value="YPH" labelBold={true} />
          </div>
        </div>
 
        {/* Loan Product Details and Fund Direction Section */}
        <div className="md:col-span-1 lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
              <CreditCard className="mr-2 text-blue-500" size={24} />
              Loan Product Details
            </h2>
            <div className="space-y-2">
              <TileContentStyle label="Fund Name" value="CAWE" labelBold={true} />
              <TileContentStyle label="Fund %" value="100" labelBold={true} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
              <Landmark className="mr-2 text-blue-500" size={24} />
              Fund Direction
            </h2>
            <div className="flex space-x-4 border-b pb-2 mb-2 text-gray-600">
              <span className="font-semibold text-gray-900">Client Number</span>
              <span className="font-semibold text-gray-900">Client Name</span>
              <span className="font-semibold text-gray-900">NRIC Number</span>
            </div>
            {/* The image shows a tab-like structure, so I'll create a space to put the data here. */}
            <div className="space-y-2">
              <TileContentStyle label="Controlling Individual" value="" labelBold={true} />
              {/* Add content for controlling individual here */}
            </div>
          </div>
        </div>
 
      </motion.div>
 
      {/* Product Details Section - Table */}
      <motion.div variants={itemVariants} className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
          <Info className="mr-2 text-blue-500" size={24} />
          Product Details
        </h2>
        {/* Table Header */}
        <div className="grid grid-cols-9 gap-4 font-semibold text-xs md:text-sm text-gray-600 border-b pb-2 mb-2">
          <div className="col-span-1">LA No</div>
          <div className="col-span-1">LA Full Name</div>
          <div className="col-span-1">Plan/Rider Code</div>
          <div className="col-span-1">Plan/Rider</div>
          <div className="col-span-1">Sum Assured (RM)</div>
          <div className="col-span-1">Plan/Rider Name</div>
          <div className="col-span-1">Term</div>
          <div className="col-span-1">Premium Paying Term</div>
          <div className="col-span-1">Premium (RM)</div>
        </div>
        {/* Table Rows */}
        {productDetails.map((product, index) => (
          <div key={index} className="grid grid-cols-9 gap-4 text-xs md:text-sm text-gray-800 py-2 border-b last:border-b-0">
            <div className="col-span-1">{product.laNo}</div>
            <div className="col-span-1">{product.laFullName}</div>
            <div className="col-span-1">{product.planRiderCode}</div>
            <div className="col-span-1">{product.planRider}</div>
            <div className="col-span-1">{product.sumAssured}</div>
            <div className="col-span-1">{product.planRiderName}</div>
            <div className="col-span-1">{product.term}</div>
            <div className="col-span-1">{product.premiumPayingTerm}</div>
            <div className="col-span-1">{product.premium}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
 
export default ProductDetailsOverview;