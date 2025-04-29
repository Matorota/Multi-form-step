import React from "react";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg"; // Desktop background image
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg"; // Mobile background image

const Sidebar: React.FC<{ step: number }> = ({ step }) => {
  const steps = [
    { number: 1, label: "YOUR INFO" },
    { number: 2, label: "SELECT PLAN" },
    { number: 3, label: "ADD-ONS" },
    { number: 4, label: "SUMMARY" },
  ];

  return (
    <div className=" md:rounded-lg h-full flex flex-col justify-start items-start pl-6 md:pr-50 text-white relative">
      <img
        src={bgSidebarDesktop}
        alt="Sidebar Background"
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block rounded-lg" // why IT DOSENT FULLY ROUND WTF
      />
      <img
        src={bgSidebarMobile}
        alt="Sidebar Background Mobile"
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
      />

      <ul className="relative z-10 space-y-6 mt-4 md:mt-8">
        {steps.map((stepItem, index) => (
          <li key={index} className="flex items-center space-x-4">
            {/* Step Circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                step === stepItem.number
                  ? "bg-white text-[#483EFF] border-white"
                  : "border-white text-white"
              }`}
            >
              {stepItem.number}
            </div>

            {/* Step Info */}
            <div className="hidden md:block">
              <p className="text-xs opacity-75 text-white mb-1 whitespace-nowrap">
                STEP {stepItem.number}
              </p>
              <p className="text-sm uppercase font-bold text-white mb-1 whitespace-nowrap">
                {stepItem.label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
