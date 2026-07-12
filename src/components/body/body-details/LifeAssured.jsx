// src/components/body/body-details/LifeAssured.jsx
import React from "react";
import TileContentStyle from "./TileContentStyle.jsx";
 
const LifeAssuredPage = () => {
  return (
    <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4] items-start">
      <TileContentStyle label="NRIC" value="860726565621" labelBold={true} />
      <TileContentStyle label="Name" value="Ali Ahmad" labelBold={true} />
      <TileContentStyle label="Age" value="38 Years" labelBold={true} />
      <TileContentStyle label="Gender" value="MALE" labelBold={true} />
    </div>
  );
};
 
export default LifeAssuredPage;