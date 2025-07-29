"use client";
import React from "react";
import { useState, useEffect } from "react";
const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(145000);
    const [showloanAmount, setshowLoanAmount] = useState('1,45,000');
    const [loanAmountval, setLoanAmountval] = useState(27.845528455284552845528455284553);
    const [interestRate, setInterestRate] = useState(14);
    const [interestRateval, setInterestRateval] = useState(14);
    const [emis, setEmis] = useState(12);
    const [emisval, setEmisval] = useState(20);

    const [monthlyInstalment, setMonthlyInstalment] = useState('13,051');
    const [totalInterest, setTotalInterest] = useState('11,617');
    const [totalAmount, setTotalAmount] = useState('1,56,617');


    const calculate = (data,no)=>{
        let principal = loanAmount;
        let ir = interestRate;
        let n = emis;
        if(no == 1)
        {
            principal = data;
            setshowLoanAmount(parseInt(data).toLocaleString('en-IN'));
        }
        else if(no == 2){
            ir = data;
        }
        else if(no == 3){
            n = data;
        }
    const R = (ir / 100) / 12;

  const numerator = principal * R * Math.pow(1 + R, n);
  const denominator = Math.pow(1 + R, n) - 1;
  const emi = numerator / denominator;

  const totalPayment = emi * n;
  const TI = totalPayment - principal;

  console.log(principal, ir, n);

    setMonthlyInstalment(parseInt(emi).toLocaleString('en-IN'));
    setTotalInterest(parseInt(TI).toLocaleString('en-IN'));
    setTotalAmount(parseInt(totalPayment).toLocaleString('en-IN'));

}
  return (
    <div className="container max-w-screen-xl border mx-auto border-[rgb(229,231,235)] rounded-lg lg:rounded-xl flex justify-center mt-[40px] lg:mt-[40px] relative bg-white">
      <div className="lg:mt-2 px-0 lg:pb-6 lg:py-8 w-full">
        <div className="lg:px-6">
          <div className="w-full relative py-2 pb-2 pt-[150px] sm:py-4 sm:pb-4 sm:pt-[150px] lg:py-4 lg:pb-4 lg:pt-0undefined">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 justify-between">
              <div className="xl:col-span-2 flex flex-col justify-center p-2 mx-auto w-full">
                <div className="mt-4 mb-12">
                  <div className="flex justify-between items-center">
                    <label
                      className="text-base lg:text-xl font-semibold text-[rgb(51,51,51)]"
                      htmlFor="loan-slider-1"
                    >
                      Loan amount
                    </label>
                    <span className='text-base text-[rgb(51,51,51)] border border-[rgb(229,231,235)] px-4 py-1 rounded-lg before:content-["₹"] min-w-[80px] text-right'>
                      {showloanAmount}
                    </span>
                  </div>
                  <input
                    id="loan-slider-1"
                    className="range-bar relative tracking-wider before:content-['8k'] before:ml-0.5 before:text-[rgb(153,153,153)] before:absolute before:top-7 before:left-0  before:font-lg after:content-['5L'] after:ml-0.5 after:text-[rgb(153,153,153)] after:absolute after:top-7 after:right-0 after:font-lg "
                    type="range"
                    min="8000"
                    max="500000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e)=>{setLoanAmount(e.target.value); setLoanAmountval((e.target.value - e.target.min) / (e.target.max - e.target.min)*100); calculate(e.target.value,1) }}
                    style={{background: `linear-gradient(90deg, rgb(7,159,159) ${loanAmountval}%, rgb(215,220,223) ${loanAmountval}%)`}}
                  ></input>
                </div>
                <div className="mt-4 mb-12">
                  <div className="flex justify-between items-center">
                    <label
                      className="text-base lg:text-xl text-[rgb(51,51,51)] font-semibold text-plain-grey"
                      htmlFor="loan-slider-2"
                    >
                      Interest rate
                    </label>
                    <span className='text-base text-plain-grey border border-[rgb(229,231,235)] light-cement-grey px-4 py-1 rounded-lg after:content-["%"] min-w-[80px] text-right'>
                      {interestRate}
                    </span>
                  </div>
                  <input
                    id="loan-slider-2"
                    className="range-bar relative tracking-wider before:content-['12%'] before:ml-0.5 before:text-[rgb(153,153,153)] before:absolute before:top-7 before:left-0  before:font-lg after:content-['30%'] after:ml-0.5 after:text-[rgb(153,153,153)] after:absolute after:top-7 after:right-0 after:font-lg "
                    type="range"
                    min="12"
                    max="30"
                    step="2"
                    value={interestRate}
                    onChange={(e)=>{setInterestRate(e.target.value); setInterestRateval((e.target.value - e.target.min) / (e.target.max - e.target.min)*100); calculate(e.target.value, 2)}}
                    style={{background: `linear-gradient(90deg, rgb(7,159,159) ${interestRateval}%, rgb(215,220,223) ${interestRateval}%)`}}
                  ></input>
                </div>
                <div className="mt-4 mb-12 lg:mb-4">
                  <div className="flex justify-between items-center">
                    <label
                      className="text-base lg:text-xl text-[rgb(51,51,51)] font-semibold text-plain-grey"
                      htmlFor="loan-slider-3"
                    >
                      Select EMI option
                    </label>
                    <span className='text-base text-plain-grey border border-[rgb(229,231,235)] light-cement-grey px-4 py-1 rounded-lg after:content-["\00a0Months"] min-w-[80px] text-right'>
                      {emis}
                    </span>
                  </div>
                  <input
                    id="loan-slider-3"
                    className="range-bar relative tracking-wider before:content-['6\00a0Months'] before:ml-0.5 before:text-[rgb(153,153,153)] before:absolute before:top-7 before:left-0  before:font-lg after:content-['36\00a0Months'] after:ml-0.5 after:text-[rgb(153,153,153)] after:absolute after:top-7 after:right-0 after:font-lg "
                    type="range"
                    min="6"
                    max="36"
                    step="3"
                    value={emis}
                    onChange={(e)=>{setEmis(e.target.value); setEmisval((e.target.value - e.target.min) / (e.target.max - e.target.min)*100), calculate(e.target.value, 3)}}
                    style={{background: `linear-gradient(90deg, rgb(7, 159, 159) ${emisval}%, rgb(215, 220, 223) ${emisval}%)`}}
                  ></input>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="border border-[rgb(229,231,235)] rounded-xl overflow-clip w-full mx-2">
                  <div className="text-center px-6 py-8 bg-[rgb(235,255,255)] absolute left-0 top-0 w-full lg:relative border-b-2 border-[rgb(229,231,235)]">
                    <div className="mb-3 text-base lg:text-xl text-[rgb(67,67,67)] font-semibold">
                      Your monthly instalment:
                    </div>
                    <div className="text-2xl lg:text-4xl font-semibold">
                      ₹{monthlyInstalment}
                    </div>
                  </div>
                  <div className="inline-grid grid-cols-4 justify-between items-start w-full gap-2 p-4 [&>*]:mb-2 bg-[rgb(244,250,255)] lg:bg-white">
                    <div className="col-span-3 text-base text-[rgb(153,153,153)] font-medium">
                      Total interest
                    </div>
                    <div className="text-right text-base lg:text-xl font-medium">
                      ₹{totalInterest}
                    </div>
                    <div className="col-span-3 text-base text-[rgb(153,153,153)] font-medium">
                      Principal amount
                    </div>
                    <div className="text-right text-base lg:text-xl font-medium">
                      ₹{showloanAmount}
                    </div>
                    <div className="col-span-4 grid grid-cols-4 justify-between gap-2 py-4 border-t-2 border-dashed border-[rgb(229,231,235)]">
                      <div className="col-span-3 text-lg text-plain-grey font-medium">
                        Total amount
                      </div>
                      <div className="text-right text-base lg:text-xl font-medium">
                        ₹{totalAmount}
                      </div>
                    </div>
                    <div className="col-span-4 flex justify-center">
                      <a
                        target="_blank"
                        className="w-auto lg:w-full px-6 py-3 lg:py-4 text-base font-semibold text-white transition-colors duration-150 bg-[rgb(7,159,159)] hover:bg-[rgb(3,135,135)] rounded-lg focus:shadow-outline min-w-[250px] max-w-[340px] text-center"
                        href="https://portal.fibe.in/SignUp"
                      >
                        Apply now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
