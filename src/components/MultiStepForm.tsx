import React, { useState } from "react";
import Sidebar from "./SideBar";
import Step1 from "./UserInfo";
import Step2 from "./Plans";
import Step3 from "./AddOns";
import Step4 from "./Summary";
import ThankYou from "./ThankYou";

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Tracks the current step
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
    <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
      <Sidebar step={step} />
      <div className="flex-1 p-6">
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
            nextStep={nextStep} // Pass nextStep to navigate to ThankYou
            prevStep={prevStep}
            formData={formData}
          />
        )}
        {step === 5 && <ThankYou />} {/* Render ThankYou on step 5 */}
      </div>
    </div>
  );
};

export default MultiStepForm;
