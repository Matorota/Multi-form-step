import React, { useState } from "react";

interface Step1Props {
  nextStep: () => void;
  updateFormData: (
    key: "name" | "email" | "phone" | "plan" | "billing" | "addons",
    value: any
  ) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
  };
}

const Step1: React.FC<Step1Props> = ({
  nextStep,
  updateFormData,
  formData,
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData(
      name as "name" | "email" | "phone" | "plan" | "billing" | "addons",
      value
    );
    setErrors({ ...errors, [name]: "" });
  };

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "This field is required.";
    if (!formData.email) newErrors.email = "This field is required.";
    if (!formData.phone) newErrors.phone = "This field is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      nextStep();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold text-[#02295A] mb-4">Personal Info</h2>
      <p className="text-[#9699AA] mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#02295A]">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className={`w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#483EFF] ${
              errors.name ? "border-[#F9818E]" : "border-[#D6D9E6]"
            }`}
          />
          {errors.name && (
            <p className="text-[#F9818E] text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field  JUST TESTING NOT RL NEEDED could be done diferently*/}
        <div>
          <label className="block text-sm font-medium text-[#02295A]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#483EFF] ${
              errors.email ? "border-[#F9818E]" : "border-[#D6D9E6]"
            }`}
          />
          {errors.email && (
            <p className="text-[#F9818E] text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Number Field UST TESTING NOT RL NEEDED*/}
        <div>
          <label className="block text-sm font-medium text-[#02295A]">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className={`w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#483EFF] ${
              errors.phone ? "border-[#F9818E]" : "border-[#D6D9E6]"
            }`}
          />
          {errors.phone && (
            <p className="text-[#F9818E] text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#02295A] text-white px-6 py-2 rounded hover:bg-[#164A8A] transition-colors"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
