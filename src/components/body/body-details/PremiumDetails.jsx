import React from 'react';
import TileContentStyle from './TileContentStyle.jsx';
 
const PremiumDetailsPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle label="Total Premium" value="6000" labelBold={true} />
      <TileContentStyle label="Payment Frequency" value="01" labelBold={true} />
      <TileContentStyle label="Annualized Premium" value="6000" labelBold={true} />
      <TileContentStyle label="Payment Method" value="B" labelBold={true} />
    </div>
  );
};
 
export default PremiumDetailsPage;