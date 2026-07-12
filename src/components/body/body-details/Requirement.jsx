// src/components/body/body-details/Requirement.jsx
import React from 'react';
import TileContentStyle from './TileContentStyle.jsx';
 
const RequirementPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle label="Total Documents" value="4" labelBold={true} />
      <TileContentStyle label="Received" value="0" labelBold={true} />
      <TileContentStyle label="Not Received" value="4" labelBold={true} />
      <TileContentStyle label="Waived" value="0" labelBold={true} />
    </div>
  );
};
 
export default RequirementPage;