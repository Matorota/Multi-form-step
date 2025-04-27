import React from "react";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar: React.FC<{ step: number }> = ({ step }) => {
  const steps = [
    { number: 1, label: "YOUR INFO", description: "Step 1" },
    { number: 2, label: "SELECT PLAN", description: "Step 2" },
    { number: 3, label: "ADD-ONS", description: "Step 3" },
    { number: 4, label: "SUMMARY", description: "Step 4" },
  ];

  return (
    <div className="relative w-full md:w-1/3 text-white rounded-l-lg overflow-hidden">
      {/* Background Image */}
      <img
        src={bgSidebarDesktop}
        alt="Sidebar Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Sidebar Steps */}
      <ul className="relative z-10 space-y-8 p-8 pt-12">
        {steps.map((stepItem, index) => (
          <li key={index} className="flex items-center space-x-4">
            {/* Step Circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                step === stepItem.number
                  ? "bg-[#BEE3F8] text-[#02295A] border-[#02295A]"
                  : "border-[#D6D9E6] text-white"
              }`}
            >
              {stepItem.number}
            </div>
            {/* Step Info */}
            <div className="hidden md:block">
              <p className="text-sm uppercase opacity-50">
                {stepItem.description}
              </p>
              <p className="font-bold">{stepItem.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
