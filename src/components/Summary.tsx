import React from "react";

interface Step4Props {
  prevStep: () => void;
  formData: {
    plan: keyof typeof plans;
    billing: string;
    addons: string[];
  };
  nextStep?: () => void; // Optional if not always used
  goToStep?: (step: number) => void; // Optional if not always used
}

const plans = {
  Arcade: { monthlyPrice: 9, yearlyPrice: 90 },
  Advanced: { monthlyPrice: 12, yearlyPrice: 120 },
  Pro: { monthlyPrice: 15, yearlyPrice: 150 },
};

const addons: { [key: string]: { monthlyPrice: number; yearlyPrice: number } } =
  {
    "Online service": { monthlyPrice: 1, yearlyPrice: 10 },
    "Larger storage": { monthlyPrice: 2, yearlyPrice: 20 },
    "Customizable Profile": { monthlyPrice: 2, yearlyPrice: 20 },
  };

const Step4: React.FC<Step4Props> = ({ prevStep, formData, nextStep }) => {
  const addons: {
    [key: string]: { monthlyPrice: number; yearlyPrice: number };
  } = {
    "Online service": { monthlyPrice: 1, yearlyPrice: 10 },
    "Larger storage": { monthlyPrice: 2, yearlyPrice: 20 },
    "Customizable Profile": { monthlyPrice: 2, yearlyPrice: 20 },
  };

  const isYearly = formData.billing === "Yearly";
  const planPrice = isYearly
    ? plans[formData.plan as keyof typeof plans].yearlyPrice
    : plans[formData.plan as keyof typeof plans].monthlyPrice;

  const addonsPrice = formData.addons.reduce((total: number, addon) => {
    if (addons[addon]) {
      // Ensure the addon exists in the addons object
      const addonPrice = isYearly
        ? addons[addon].yearlyPrice
        : addons[addon].monthlyPrice;
      return total + addonPrice;
    }
    return total; // Skip if the addon key is invalid
  }, 0);

  const totalPrice = planPrice + addonsPrice;

  return (
    <div className="p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold text-[#02295A] mb-4">Finishing up</h2>
      <p className="text-[#9699AA] mb-6">
        Double-check everything looks OK before confirming.
      </p>

      {/* Summary Box */}
      <div className="bg-[#F8F9FF] p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center border-b border-[#D6D9E6] pb-4 mb-4">
          <div>
            <h3 className="text-sm font-bold text-[#02295A]">
              {formData.plan} ({formData.billing})
            </h3>
            <button
              onClick={prevStep} // nesugal
              className="text-sm text-[#9699AA] underline hover:text-[#483EFF]"
            >
              Change
            </button>
          </div>
          <p className="text-sm font-bold text-[#02295A]">
            {isYearly
              ? `$${plans[formData.plan].yearlyPrice}/yr`
              : `$${plans[formData.plan].monthlyPrice}/mo`}
          </p>
        </div>

        {formData.addons.map((addon) => (
          <div
            key={addon}
            className="flex justify-between items-center mb-2 last:mb-0"
          >
            <p className="text-sm text-[#9699AA]">{addon}</p>
            <p className="text-sm font-bold text-[#02295A]">
              {isYearly
                ? `+$${addons[addon].yearlyPrice}/yr`
                : `+$${addons[addon].monthlyPrice}/mo`}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-4">
        <p className="text-sm text-[#9699AA]">
          Total (per {isYearly ? "year" : "month"})
        </p>
        <p className="text-lg font-bold text-[#483EFF]">
          {isYearly ? `$${totalPrice}/yr` : `$${totalPrice}/mo`}
        </p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="text-[#9699AA] hover:text-[#02295A] transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={() => nextStep && nextStep()}
          className="bg-[#483EFF] text-white px-6 py-2 rounded hover:bg-[#164A8A] transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
