// src/components/header/header.jsx
import React from 'react';
// Import your individual header components from their new files
import CaseID from './header-components/CaseID.jsx';
import PolicyNumber from './header-components/PolicyNumber.jsx';
import ProposalSubmissionDate from './header-components/ProposalSubmissionDate.jsx';
import Entity from './header-components/Entity.jsx';
import ProposalStatus from './header-components/ProposalStatus.jsx';
import DecisionUpdateDate from './header-components/DecisionUpdateDate.jsx';
import Assessment from './header-components/Assessment.jsx';
 
const Header = () => {
    return (
        <div className="w-full bg-gray-100 pt-4 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="bg-[#f2d1adda] p-4 rounded-lg shadow-sm mb-4 border-2 border-black">
                <div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap md:gap-x-4 lg:flex-nowrap lg:justify-between items-start text-sm text-gray-700">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 flex-grow">
                        <CaseID />
                        <PolicyNumber />
                        <ProposalSubmissionDate />
                        <Entity />
                        <ProposalStatus />
                        <DecisionUpdateDate />
                    </div>
                    <div className="p-2 flex-grow-0 min-w-[300px]">
                        <Assessment />
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Header;