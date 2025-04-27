import React from "react";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <img
        src={thankYouIcon}
        alt="Thank You"
        className="mx-auto mb-6 w-16 h-16"
      />
      <h2 className="text-3xl font-bold text-[#02295A] mb-4">Thank you!</h2>
      <p className="text-[#9699AA]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        <span className="font-bold"> support@loremgaming.com</span>.
      </p>
    </div>
  );
};

export default ThankYou;
