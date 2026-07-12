import React from "react";
import TileContentStyle from "./TileContentStyle.jsx";
 
const AgentInfoPage = ({ onFullDetailsClick }) => {
  return (
    <div className="flex flex-col gap-0 p-1 text-gray-800 rounded-lg shadow-sm border border-black bg-[#ffffffe4]">
      <TileContentStyle
        label="Comm Agent Code"
        value="SLD00001"
        labelBold={true}
      />
      <TileContentStyle
        label="Comm Agent Name"
        value="GV FORWARD"
        labelBold={true}
      />
      <TileContentStyle
        label="Servicing Agent Code"
        value="SLD00001"
        labelBold={true}
      />
      <TileContentStyle
        label="Service Agent Name"
        value="GV FORWARD"
        labelBold={true}
      />
    </div>
  );
};
 
export default AgentInfoPage;