import React from 'react';
import TileContentStyle from './TileContentStyle.jsx';
 
const ProductDetailsPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle label="Product" value="Sun Hajj Plan 500 - RTR" labelBold={true} />
      <TileContentStyle label="Term" value="42 Years" labelBold={true} />
      <TileContentStyle label="Sum Assured" value="120,000" labelBold={true} />
      <TileContentStyle label="Premium" value="6000" labelBold={true} />
    </div>
  );
};
 
export default ProductDetailsPage;