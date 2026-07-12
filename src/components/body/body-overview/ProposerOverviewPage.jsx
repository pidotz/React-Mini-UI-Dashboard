// src/components/body/page/ProposerOverviewPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, MapPin, Phone } from 'lucide-react';
import TileContentStyle from '../body-details/TileContentStyle.jsx';
 
const ProposerOverviewPage = () => {
  const navigate = useNavigate();
 
  const handleGoBack = () => {
    // Navigating directly to the dashboard to avoid a double-click issue
    // that can occur with navigate(-1) due to extra history entries.
    navigate('/');
  };
 
  // Define variants for the main container of ProposerOverviewPage
  const containerVariants = {
    hidden: {}, // This empty 'hidden' state ensures the component is mounted as-is, with its CSS properties.
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger children animations by 0.15 seconds
        delayChildren: 0.2 // Delay the start of children animations slightly
      }
    }
  };
 
  // Define variants for individual sections within ProposerOverviewPage
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Individual items still start transparent and below
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
      className="
        pt-6 px-6 pb-6
        bg-white /* This background ensures the page is white from the start */
        shadow-lg border border-gray-200
        w-full min-h-screen
        flex flex-col
        font-roboto
      "
      variants={containerVariants}
      initial="hidden" // This now effectively just means "start as per CSS, then trigger child animations"
      animate="visible"
    >
 
      {/* Back button section */}
      <motion.div variants={itemVariants} className="mb-8 pb-4 border-b-2 border-gray-100 flex justify-start">
        <button
          onClick={handleGoBack}
          className="
            px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md
            hover:bg-blue-600 focus:outline-none focus:ring-2 focus::ring-blue-500 focus:ring-offset-2
            transition-colors duration-200
          "
        >
          &larr; Back to Dashboard
        </button>
      </motion.div>
 
      {/* Proposer Summary Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-extrabold text-black mb-6 border-b-2 border-blue-300 pb-3 flex items-center">
          <User className="mr-2 text-blue-500" size={28} />
          Proposer Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-gray-800">
          <TileContentStyle label="Salutation" value="PUAN" />
          <TileContentStyle label="Marital Status" value="M" />
          <TileContentStyle label="Occupation Class" value="-N/A-" />
          <TileContentStyle label="Full Name" value="SALMILAH BT KUSNAN" />
          <TileContentStyle label="Nationality" value="MY" />
          <TileContentStyle label="Occupation Description" value="-N/A-" />
          <TileContentStyle label="Proposer Type" value="P" />
          <TileContentStyle label="Birth Country" value="-N/A-" />
          <TileContentStyle label="PEP Indicator" value="-N/A-" />
          <TileContentStyle label="Client No" value="01569240" />
          <TileContentStyle label="Birth Place" value="-N/A-" />
          <TileContentStyle label="Staff Indicator" value="N" />
          <TileContentStyle label="ID Type" value="NRIC" />
          <TileContentStyle label="Race" value="MAL" />
          <TileContentStyle label="E Policy Indicator" value="Y" />
          <TileContentStyle label="ID Number" value="72342342345242" />
          <TileContentStyle label="Height" value="0.00 cm" />
          <TileContentStyle label="E Policy Email ID" value="rms178@gmail.com" />
          <TileContentStyle label="Date of Birth" value="01/08/1978" />
          <TileContentStyle label="Age" value="41" />
          <TileContentStyle label="Weight" value="0.00 kg" />
          <TileContentStyle label="FATCA Category" value="-N/A-" />
          <TileContentStyle label="Communication" value="PHONE" />
          <TileContentStyle label="Style" value="" />
          <TileContentStyle label="Correspondence" value="" />
          <TileContentStyle label="Language" value="" />
          <TileContentStyle label="Gender" value="FEMALE" />
          <TileContentStyle label="Relationship" value="OW" />
        </div>
      </motion.div>
 
      {/* Spacer div */}
      <motion.div variants={itemVariants} className="mt-8 mb-4 border-b-2 border-gray-200"></motion.div>
 
      {/* Address Details & Contact Details Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-gray-800">
        {/* Address Details Column */}
        <div>
          <h3 className="text-2xl font-extrabold text-black mb-4 border-b-2 border-blue-300 pb-2 flex items-center">
            <MapPin className="mr-2 text-blue-500" size={24} />
            Address Details
          </h3>
          <div className="flex flex-col gap-4">
            <TileContentStyle label="Address" value="TAMAN SERI AUSTIN, 81100 JOHOR BHARU JOHOR" />
            <TileContentStyle label="Postcode" value="-N/A-" />
            <TileContentStyle label="Country" value="MY" />
          </div>
        </div>
 
        {/* Contact Details Column */}
        <div>
          <h3 className="text-2xl font-extrabold text-black mb-4 border-b-2 border-blue-300 pb-2 flex items-center">
            <Phone className="mr-2 text-blue-500" size={24} />
            Contact Details
          </h3>
          <div className="flex flex-col gap-4">
            <TileContentStyle label="Mobile" value="63453405948" />
            <TileContentStyle label="Home" value="63453405948" />
            <TileContentStyle label="Office" value="6345340594" />
            <TileContentStyle label="Email ID" value="rms178@gmail.com" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
 
export default ProposerOverviewPage;