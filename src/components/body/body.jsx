// src/components/body/body.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
 
// Dashboard tiles
import LifeAssuredPage from "./body-details/LifeAssured.jsx";
import PremiumPage from "./body-details/PremiumDetails.jsx";
import ProductDetailsPage from "./body-details/ProductDetails.jsx";
import ProposerDetailsPage from "./body-details/ProposerDetails.jsx";
import AgentInfoPage from "./body-details/AgentInfo.jsx";
import AgentDetailsRoutePage from "./body-overview/AgentDetailsOverview.jsx";
import RequirementPage from "./body-details/Requirement.jsx";
import SmokingPage from "./body-details/Smoking.jsx";
import LiamInternalPage from "./body-details/LiamInternal.jsx";
import LiamExternalPage from "./body-details/LiamExternal.jsx";
import PreviousPoliciesPage from "./body-details/PreviousPolicies.jsx";
import PreviousClaimsPage from "./body-details/PreviousClaims.jsx";
import AMLPage from "./body-details/AML.jsx";
import PayerDetailsPage from "./body-details/PayerDetails.jsx";
import NomineePage from "./body-details/Nominee.jsx";
import NBUWPage from "./body-details/NBUW.jsx";
import TPAPage from "./body-details/TPA.jsx";
import RIPage from "./body-details/RI.jsx";
import FinalDecisionPage from "./body-details/FinalDecision.jsx";
import ClientServicePage from "./body-details/ClientService.jsx";
import MREPage from "./body-details/MRE.jsx";
 
//Overview Page
import ProposerOverviewPage from "./body-overview/ProposerOverviewPage.jsx";
import PremiumDetailsOverview from "./body-overview/PremiumDetailsOverview.jsx";
import ProductDetailsOverview from "./body-overview/ProductDetailsOverview.jsx";
import LifeAssuredOverview from "./body-overview/LifeAssuredOverview.jsx";
import AgentDetailsOverview from "./body-overview/AgentDetailsOverview.jsx";
 
const Body = () => {
  const [showAgentDetailsInTile, setShowAgentDetailsInTile] = useState(false);
  const navigate = useNavigate();
 
  // Tiles array configured for a 4x5 grid (20 tiles total)
  const tiles = [
    {
      name: "Proposer",
      component: ProposerDetailsPage,
      routePath: "/proposer-overview",
      bgColor: "bg-red-400",
      glowColor: "#f87171",
    },
    {
      name: "Life Assured",
      component: LifeAssuredPage,
      routePath: "/life-assured-overview",
      bgColor: "bg-green-400",
      glowColor: "#4ade80",
    },
    {
      name: "Product Details",
      component: ProductDetailsPage,
      routePath: "/product-overview",
      bgColor: "bg-blue-400",
      glowColor: "#60a5fa",
    },
    {
      name: "Premium Details",
      component: PremiumPage,
      routePath: "/premium-overview",
      bgColor: "bg-yellow-400",
      glowColor: "#facc15",
    },
    {
      name: "Agent Info",
      component: AgentInfoPage,
      isAgentSection: true,
      routePath: "/agent-details-overview",
      bgColor: "bg-purple-400",
      glowColor: "#c084fc",
    },
    {
      name: "Requirement",
      component: RequirementPage,
      bgColor: "bg-pink-400",
      glowColor: "#f472b6",
    },
    {
      name: "Smoking",
      component: SmokingPage,
      bgColor: "bg-orange-400",
      glowColor: "#fb923c",
    },
    {
      name: "LIAM Internal",
      component: LiamInternalPage,
      bgColor: "bg-lime-400",
      glowColor: "#a3e635",
    },
    {
      name: "LIAM External",
      component: LiamExternalPage,
      bgColor: "bg-cyan-400",
      glowColor: "#22d3ee",
    },
    {
      name: "Previous Policies",
      component: PreviousPoliciesPage,
      bgColor: "bg-indigo-400",
      glowColor: "#818cf8",
    },
    {
      name: "Previous Claims",
      component: PreviousClaimsPage,
      bgColor: "bg-teal-400",
      glowColor: "#2dd4bf",
    },
    {
      name: "AML: 6000",
      component: AMLPage,
      bgColor: "bg-emerald-400",
      glowColor: "#34d399",
    },
    {
      name: "Payer Details",
      component: PayerDetailsPage,
      bgColor: "bg-rose-400",
      glowColor: "#fb7185",
    },
    {
      name: "Nominee/Trustee",
      component: NomineePage,
      bgColor: "bg-sky-400",
      glowColor: "#38bdf8",
    },
    {
      name: "Client Service Notes",
      component: ClientServicePage,
      bgColor: "bg-fuchsia-400",
      glowColor: "#e879f9",
    },
    {
      name: "MRE AUW Results",
      component: MREPage,
      bgColor: "bg-amber-400",
      glowColor: "#fbbf24",
    },
    {
      name: "NB/UW Notes",
      component: NBUWPage,
      bgColor: "bg-violet-400",
      glowColor: "#a78bfa",
    },
    {
      name: "TPA Notes",
      component: TPAPage,
      bgColor: "bg-yellow-500",
      glowColor: "#eab308",
    },
    {
      name: "RI Notes",
      component: RIPage,
      bgColor: "bg-green-500",
      glowColor: "#22c55e",
    },
    {
      name: "Final Decision",
      component: FinalDecisionPage,
      bgColor: "bg-red-500",
      glowColor: "#ef4444",
    },
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
 
  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };
 
  const handleTileClick = (routePath) => {
    if (routePath) {
      navigate(routePath);
    }
  };
 
  return (
    // Global body padding set to p-0.5 for compactness
    <div className="flex-grow p-0.5 sm:p-1 lg:p-2 font-inter bg-gray-100">
      <motion.div
        className="transition-filter duration-300 ease-in-out"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Grid gap set to gap-2, and columns set to xl:grid-cols-5 for a 4x5 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {tiles.map((tile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={
                tile.routePath
                  ? () => handleTileClick(tile.routePath)
                  : undefined
              }
              className={`
                            group relative overflow-hidden flex flex-col
                            rounded-lg border-2 border-black
                            cursor-pointer transition-all duration-300 ease-in-out
                            hover:translate-y-[-4px] hover:scale-[1.01] active:translate-y-[1px]
                            transform bg-white shadow-xl
                            `}
              style={{
                boxShadow: `0 0 0px 0 ${tile.glowColor}`,
              }}
              whileHover={{
                boxShadow: `0 0 20px 4px ${tile.glowColor}`,
              }}
            >
              <div
                className={`p-2 flex-grow relative rounded-t-lg ${tile.bgColor}`}
              >
                <div className="relative z-10 w-full">
                  {tile.isAgentSection ? (
                    <AnimatePresence mode="wait">
                      {showAgentDetailsInTile ? (
                        <motion.div
                          key="agent-details-route-page"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AgentDetailsRoutePage
                            onGoBack={() => setShowAgentDetailsInTile(false)}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="agent-info-page"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AgentInfoPage
                            onFullDetailsClick={() =>
                              setShowAgentDetailsInTile(true)
                            }
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    React.createElement(tile.component)
                  )}
                </div>
              </div>
 
              {/* Header Section padding adjusted to py-3 (from p-2) for more vertical space.
                                Reverted text size to text-xl as requested. */}
              <div className="relative overflow-hidden flex flex-col items-center justify-center py-3 rounded-b-lg bg-gradient-to-br from-[grey] to-[black] text-white flex-shrink-0">
                <div className="absolute inset-0 rounded-b-lg bg-[#112b7be4] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-b-lg bg-black/30 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="relative z-10 text-m font-semibold text-white">
                    {tile.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
 
export default Body;