import React from "react";
// Import the custom CSS file (path confirmed in previous steps)
import "./TileAlignment.css";
 
const TileContentStyle = ({ label, value, labelBold = true }) => {
  return (
    // Apply the custom CSS grid class
    <div className="aligned-colon-layout">
      {/* COLUMN 1: Label and Colon */}
      <span
        className={`
          label-col /* Custom class for the first column */
          text-[12px]
          ${labelBold ? "font-semibold" : ""}
          text-black
        `}
      >
        {label}:
      </span>
 
      {/* COLUMN 2: Value */}
      <span className="value-col text-[12px] text-black truncate">{value}</span>
    </div>
  );
};
 
export default TileContentStyle;