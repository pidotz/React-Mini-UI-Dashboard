// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
 
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import ProposerOverviewPage from './components/body/body-overview/ProposerOverviewPage.jsx';
import PremiumDetailsOverview from './components/body/body-overview/PremiumDetailsOverview.jsx';
import ProductDetailsOverview from './components/body/body-overview/ProductDetailsOverview.jsx';
import LifeAssuredOverview from './components/body/body-overview/LifeAssuredOverview.jsx';
import AgentDetailsOverview from './components/body/body-overview/AgentDetailsOverview.jsx';
 
function App() {
  const location = useLocation(); // Get the current location object
  // Determine if the header should be shown.
  // It will only be shown if the current path is exactly '/' (the homepage).
  const showHeader = location.pathname === '/';
 
  return (
    <div className="App min-h-screen w-screen bg-gray-100 text-[#f0f0f0] font-sans flex flex-col">
      {/* Conditionally render the Header component */}
      {showHeader && <Header />}
     
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/proposer-overview" element={<ProposerOverviewPage />} />
          <Route path="/premium-overview" element={<PremiumDetailsOverview />} />
          <Route path="/product-overview" element={<ProductDetailsOverview />} />
          <Route path="/life-assured-overview" element={<LifeAssuredOverview />} />
          <Route path="/agent-details-overview" element={<AgentDetailsOverview />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default App;