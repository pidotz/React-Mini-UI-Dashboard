// src/components/body/body-details/ProposerDetails.jsx
import React from "react";
import { Link } from "react-router-dom";
import TileContentStyle from "./TileContentStyle.jsx";
 
const ProposerDetailsPage = () => {
  return (
    <Link to="/proposer-overview" className="block w-full h-full">
      <div className="flex flex-col gap-0.5 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4] w-full">
        <TileContentStyle
          label="NRIC &nbsp; &nbsp; &nbsp;&nbsp;"
          value="860726565621"
          labelBold={true}
        />
        <TileContentStyle label="Name " value="Ali Ahmad" labelBold={true} />
        <TileContentStyle label="Age" value="38 Years" labelBold={true} />
        <TileContentStyle label="Gender" value="MALE" labelBold={true} />
      </div>
    </Link>
  );
};
 
export default ProposerDetailsPage;