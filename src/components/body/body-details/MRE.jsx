import React from 'react';
import TileContentStyle from './TileContentStyle.jsx';
 
const MREPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle label="Case Level AUW Decision" value="Manual Underwriting" labelBold={true} />
      <TileContentStyle label="Life AUW Decision" value="Manual Underwriting" labelBold={true} />
      <TileContentStyle label="PO AUW Decision" value="Manual Underwriting" labelBold={true} />
    </div>
  );
};
 
export default MREPage;