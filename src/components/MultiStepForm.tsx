import React, { useState } from "react";
import Sidebar from "./SideBar";
import Step1 from "./UserInfo";
import Step2 from "./Plans";
import Step3 from "./AddOns";
import Step4 from "./Summary";
import ThankYou from "./ThankYou";

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Tracks the current step I HAD A BIT OF A WHILD RIDE SO DONT MIND THE EXTRA STUFF
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    plan: "Arcade" | "Advanced" | "Pro";
    billing: string;
    addons: string[];
  }>({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    billing: "Monthly",
    addons: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (key: keyof typeof formData, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    // Main Container and sidebar
    <div className="flex justify-center items-center bg-white p-0 md:p-10 rounded-lg md:rounded-lg">
      <div className="flex flex-col md:flex-row bg-white md:rounded-lg w-full  ">
        <div className="relative w-full md:w-1/4 bg-[#483EFF] rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <Sidebar step={step} />
        </div>

        {/* Main Content */}
        <div className="relative flex-1  md:pr-10 md:p-4">
          {step === 1 && (
            <Step1
              nextStep={nextStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          )}
          {step === 2 && (
            <Step2
              nextStep={nextStep}
              prevStep={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          )}
          {step === 3 && (
            <Step3
              nextStep={nextStep}
              prevStep={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          )}
          {step === 4 && (
            <Step4
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
            />
          )}
          {step === 5 && <ThankYou />}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
