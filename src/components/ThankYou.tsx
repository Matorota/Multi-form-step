import React from "react";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full min-h-[400px]">
      {/* Thank You Icon */}
      <img src={thankYouIcon} alt="Thank You" className="mb-6 w-20 h-20" />

      {/* Thank You Heading */}
      <h2 className="text-3xl font-bold text-[#02295A] mb-4">Thank you!</h2>

      {/* Thank You Message */}
      <p className="text-[#9699AA] max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        <span className="font-bold"> support@loremgaming.com</span>.
      </p>
    </div>
  );
};

export default ThankYou;
