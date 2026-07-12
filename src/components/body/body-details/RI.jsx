import React from 'react';
import TileContentStyle from './TileContentStyle.jsx';
 
const RIPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle label="RI Notes" value="No" labelBold={true} />
    </div>
  );
};
 
export default RIPage;