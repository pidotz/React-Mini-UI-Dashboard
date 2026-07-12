// src/components/body/body-details/PayerDetails.jsx
import React from 'react';
import TileContentStyle from './TileContentStyle.jsx';
 
const PayerDetailsPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle label="Name" value="UDAY PRO MAX STP CAS" labelBold={true} />
      <TileContentStyle label="ID Number" value="860726565621" labelBold={true} />
      <TileContentStyle label="Client Type" value="P" labelBold={true} />
    </div>
  );
};
 
export default PayerDetailsPage;