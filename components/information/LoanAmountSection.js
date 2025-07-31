import React from "react";

const LoanAmountSection = ({title}) => {
  return (
    <div
      className="mt-24 mb-16 px-6 lg:px-8 container "
    >
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
          {title}
        </h2>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/50000-personal-loan/"
          >
            ₹50,000 Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/60000-personal-loan/"
          >
            ₹60,000 Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/70000-personal-loan/"
          >
            ₹70,000 Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/80000-personal-loan/"
          >
            ₹80,000 Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/90000-personal-loan/"
          >
            ₹90,000 Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/1-lakh-personal-loan/"
          >
            ₹1 Lakh Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/2-lakh-personal-loan/"
          >
            ₹2 Lakh Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/3-lakh-personal-loan/"
          >
            ₹3 Lakh Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/4-lakh-personal-loan/"
          >
            ₹4 Lakh Loan
          </a>
          <a
            className="border border-[#079f9f] px-6 py-3 bg-[#EDFFFF] rounded lg:text-2xl font-semibold"
            href="/personal-loan/5-lakh-personal-loan/"
          >
            ₹5 Lakh Loan
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoanAmountSection;
