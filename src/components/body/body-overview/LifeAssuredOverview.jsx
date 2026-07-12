// src/components/body/page/LifeAssuredOverview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, MapPin, Phone } from 'lucide-react';
import TileContentStyle from '../body-details/TileContentStyle.jsx';
 
const LifeAssuredOverview = () => {
  const navigate = useNavigate();
 
  const handleGoBack = () => {
    // Navigating directly to the dashboard to avoid a double-click issue
    // that can occur with navigate(-1) due to extra history entries.
    navigate('/');
  };
 
  // Define variants for the main container of LifeAssuredOverview
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
 
  // Dummy data for the Life Assured Details table
  const lifeAssuredData = [
    {
      laNo: '1',
      relation: 'LF',
      idType: 'NRIC',
      idNumber: '990323010102',
      salutation: 'MS',
      laName: 'TEST SIT SCEN SIX',
      dob: '23/03/1999',
      age: '26',
      gender: 'FEMALE'
    },
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
        <p className="text-sm text-gray-600 mb-1">Data Refreshed Date : 25/07/2025 16:17:18</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Life Assured Details - T0677942</h1>
      </motion.div>
 
      {/* Life Assured Table Section */}
      <motion.div variants={itemVariants} className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-9 gap-4 font-semibold text-xs md:text-sm text-gray-600 border-b pb-2 mb-2">
          <div className="col-span-1">LA No</div>
          <div className="col-span-1">Relation</div>
          <div className="col-span-1">ID Type</div>
          <div className="col-span-1">ID Number</div>
          <div className="col-span-1">Salutation</div>
          <div className="col-span-1">LA Name</div>
          <div className="col-span-1">DOB</div>
          <div className="col-span-1">Age</div>
          <div className="col-span-1">Gender</div>
        </div>
        {/* Table Rows */}
        {lifeAssuredData.map((data, index) => (
          <div key={index} className="grid grid-cols-9 gap-4 text-xs md:text-sm text-gray-800 py-2 border-b last:border-b-0">
            <div className="col-span-1">{data.laNo}</div>
            <div className="col-span-1">{data.relation}</div>
            <div className="col-span-1">{data.idType}</div>
            <div className="col-span-1">{data.idNumber}</div>
            <div className="col-span-1">{data.salutation}</div>
            <div className="col-span-1">{data.laName}</div>
            <div className="col-span-1">{data.dob}</div>
            <div className="col-span-1">{data.age}</div>
            <div className="col-span-1">{data.gender}</div>
          </div>
        ))}
      </motion.div>
     
      {/* Details Sections Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
 
        {/* Basic Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <Info className="mr-2 text-blue-500" size={24} />
            Basic Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Race" value="CHI" labelBold={true} />
            <TileContentStyle label="Marital Status" value="S" labelBold={true} />
            <TileContentStyle label="Birth Place" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Birth Country" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Occupation Description" value="ARMY" labelBold={true} />
            <TileContentStyle label="Occupation Class" value="CLS4" labelBold={true} />
            <TileContentStyle label="Nationality" value="MY" labelBold={true} />
            <TileContentStyle label="Height" value="140.00 cm" labelBold={true} />
            <TileContentStyle label="Weight" value="35.00 kg" labelBold={true} />
            <TileContentStyle label="PEP Indicator" value="-N/A-" labelBold={true} />
          </div>
        </div>
 
        {/* Address Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <MapPin className="mr-2 text-blue-500" size={24} />
            Address Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Address" value="TEST 55555" labelBold={true} />
            <TileContentStyle label="Postcode" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Country" value="MY" labelBold={true} />
          </div>
        </div>
 
        {/* Contact Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
            <Phone className="mr-2 text-blue-500" size={24} />
            Contact Details
          </h2>
          <div className="space-y-2">
            <TileContentStyle label="Mobile" value="601123403211" labelBold={true} />
            <TileContentStyle label="Home" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Office" value="-N/A-" labelBold={true} />
            <TileContentStyle label="Email ID" value="laftest4@sunifemalaysia.com" labelBold={true} />
          </div>
        </div>
 
      </motion.div>
    </motion.div>
  );
};
 
export default LifeAssuredOverview;