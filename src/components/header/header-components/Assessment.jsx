import React from 'react';
 
const Assessment = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start"> {/* Adjusted for small screens */}
      <label htmlFor="decision-select" className="font-medium text-gray-700 whitespace-nowrap">Assessment Decision:</label>
      <select id="decision-select" className="p-2 border-2 border-black rounded-md focus:ring-blue-500 focus:border-blue-700 flex-grow max-w-[150px]"> {/* Changed border to border-2 and border-gray-300 to border-gray-700, and focus:border-blue-500 to focus:border-blue-700 */}
          <option>--Decision--</option>
          <option>Approved</option>
          <option>Rejected</option>
      </select>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap">Submit</button>
      <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 whitespace-nowrap">Save & Close</button>
    </div>
  );
};
 
export default Assessment;