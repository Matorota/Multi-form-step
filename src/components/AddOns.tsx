import React, { useState } from "react";

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (
    key: "name" | "email" | "phone" | "plan" | "billing" | "addons",
    value: any
  ) => void;
  formData: {
    plan: string;
    billing: string;
    addons: string[];
  };
}

const Step3: React.FC<Step3Props> = ({
  nextStep,
  prevStep,
  updateFormData,
  formData,
}) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    formData.addons || []
  );

  const addons = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: "+$1/mo",
      yearlyPrice: "+$10/yr",
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
  ];

  const isYearly = formData.billing === "Yearly";

  const handleAddonChange = (addon: string) => {
    let updatedAddons;
    if (selectedAddons.includes(addon)) {
      updatedAddons = selectedAddons.filter((item) => item !== addon);
    } else {
      updatedAddons = [...selectedAddons, addon];
    }
    setSelectedAddons(updatedAddons);
    updateFormData("addons", updatedAddons);
  };

  return (
    <div className="p-10 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold text-[#02295A] mb-4">Pick add-ons</h2>
      <p className="text-[#9699AA] mb-6">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="space-y-4">
        {addons.map((addon) => (
          <div
            key={addon.name}
            onClick={() => handleAddonChange(addon.name)}
            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer ${
              selectedAddons.includes(addon.name)
                ? "border-[#483EFF] bg-[#F8F9FF]"
                : "border-[#D6D9E6]"
            } hover:border-[#483EFF] hover:bg-[#F8F9FF] transition-colors`}
          >
            <div className="flex items-center space-x-4">
              {/* Checkbox */}
              <div
                className={`w-5 h-5 flex items-center justify-center border rounded ${
                  selectedAddons.includes(addon.name)
                    ? "bg-[#483EFF] border-[#483EFF]"
                    : "border-[#D6D9E6]"
                }`}
              >
                {selectedAddons.includes(addon.name) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {/* Add-on Info */}
              <div>
                <h3 className="text-sm font-bold text-[#02295A]">
                  {addon.name}
                </h3>
                <p className="text-xs text-[#9699AA]">{addon.description}</p>
              </div>
            </div>
            {/* Add-on Price */}
            <p className="text-sm font-bold text-[#483EFF]">
              {isYearly ? addon.yearlyPrice : addon.monthlyPrice}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="text-[#9699AA] hover:text-[#02295A] transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={nextStep}
          className="bg-[#02295A] text-white px-6 py-2 rounded hover:bg-[#164A8A] transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
