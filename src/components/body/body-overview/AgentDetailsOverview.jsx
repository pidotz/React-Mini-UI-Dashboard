// src/components/body/page/AgentDetailsOverview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Award, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TileContentStyle from '../body-details/TileContentStyle.jsx';
 
const AgentDetailsOverview = () => {
  const navigate = useNavigate();
 
  const handleGoBack = () => {
    navigate('/');
  };
 
  // Define variants for the main container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
 
  // Define variants for individual sections/cards
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
 
  // Data for agent details based on the provided image
  const agentDetails = [
    { label: 'Commission Agent Code', value: 'B0000133' },
    { label: 'Commission Agent Name', value: 'CIMB BANK BHD - JALAN DEDAP' },
    { label: 'Servicing Agent Code', value: 'A0079265' },
    { label: 'Servicing Agent Name', value: 'AISHAH BINTI HASSAN' },
    { label: 'Lead Generator Code', value: '-N/A-' },
    { label: 'Lead Generator Name', value: '-N/A-' },
    { label: 'Channel', value: 'CIMB' },
    { label: 'Appointment Date', value: '01/01/2010' }
  ];
 
  // Data for contact details based on the provided image
  const contactDetails = [
    { label: 'Mobile', value: '-N/A-' },
    { label: 'Home', value: '-N/A-' },
    { label: 'Office', value: '-N/A-' },
    { label: 'Email ID', value: '-N/A-' }
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
        <p className="text-sm text-gray-600 mb-1">Data Refreshed Date : 05/08/2025 10:44:09</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Agent Information - L1094070</h1>
      </motion.div>
 
      {/* Main content grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
        {/* Agent Details Card */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900">
            <User className="mr-2 text-blue-500" size={24} />
            Agent Details
          </h2>
          <div className="space-y-2">
            {agentDetails.map((item, index) => (
              <TileContentStyle key={index} label={item.label} value={item.value} labelBold={true} />
            ))}
          </div>
        </motion.div>
 
        {/* Contact Details Card */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900">
            <Phone className="mr-2 text-blue-500" size={24} />
            Contact Details
          </h2>
          <div className="space-y-2">
            {contactDetails.map((item, index) => (
              <TileContentStyle key={index} label={item.label} value={item.value} labelBold={true} />
            ))}
          </div>
        </motion.div>
 
      </motion.div>
    </motion.div>
  );
};
 
export default AgentDetailsOverview;