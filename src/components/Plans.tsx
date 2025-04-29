import React, { useState } from "react";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

// dont use this way find a diferent one (task for my self)
interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (
    key: "name" | "email" | "phone" | "plan" | "billing" | "addons",
    value: any
  ) => void;
  formData: {
    plan: string;
    billing: string;
  };
}

const Step2: React.FC<Step2Props> = ({
  nextStep,
  prevStep,
  updateFormData,
  formData,
}) => {
  const [billing, setBilling] = useState(formData.billing || "Monthly");

  const plans = [
    {
      name: "Arcade",
      icon: iconArcade,
      monthlyPrice: "$9/mo",
      yearlyPrice: "$90/yr",
      yearlyBonus: "2 months free",
    },
    {
      name: "Advanced",
      icon: iconAdvanced,
      monthlyPrice: "$12/mo",
      yearlyPrice: "$120/yr",
      yearlyBonus: "2 months free",
    },
    {
      name: "Pro",
      icon: iconPro,
      monthlyPrice: "$15/mo",
      yearlyPrice: "$150/yr",
      yearlyBonus: "2 months free",
    },
  ];

  const handlePlanChange = (plan: string) => {
    updateFormData("plan", plan);
  };

  const handleBillingChange = (billingType: string) => {
    setBilling(billingType);
    updateFormData("billing", billingType);
  };

  return (
    <div className="p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold text-[#02295A] mb-4">
        Select your plan
      </h2>
      <p className="text-[#9699AA] mb-6">
        You have the option of monthly or yearly billing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => handlePlanChange(plan.name)}
            className={`border rounded-lg p-4 cursor-pointer ${
              formData.plan === plan.name
                ? "border-[#483EFF] bg-[#F8F9FF]"
                : "border-[#D6D9E6]"
            }`}
          >
            <img src={plan.icon} alt={plan.name} className="mb-4" />
            <h3 className="text-lg font-bold text-[#02295A]">{plan.name}</h3>
            <p className="text-sm text-[#9699AA]">
              {billing === "Monthly" ? plan.monthlyPrice : plan.yearlyPrice}
            </p>
            {billing === "Yearly" && (
              <p className="text-xs text-[#483EFF] font-medium">
                {plan.yearlyBonus}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Billing to fix */}
      <div className="flex items-center justify-center bg-[#F8F9FF] p-4 rounded-lg mt-6">
        <div className="flex items-center space-x-4">
          <span
            className={`text-sm font-medium ${
              billing === "Monthly" ? "text-[#02295A]" : "text-[#9699AA]"
            }`}
          >
            Monthly
          </span>
          <div
            className="relative w-12 h-6 bg-[#02295A] rounded-full cursor-pointer"
            onClick={() =>
              handleBillingChange(billing === "Monthly" ? "Yearly" : "Monthly")
            }
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                billing === "Yearly" ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
          <span
            className={`text-sm font-medium ${
              billing === "Yearly" ? "text-[#02295A]" : "text-[#9699AA]"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

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

export default Step2;
