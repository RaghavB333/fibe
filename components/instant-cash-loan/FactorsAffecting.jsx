"use client"

import React, { useState } from 'react'

const FactorsAffecting = () => {
    const [showRightSlide, setShowRightSlide] = useState(false)
    const [showLeftSlide, setShowLeftSlide] = useState(true)
    const [showRightSlide2, setShowRightSlide2] = useState(false)
    const [showLeftSlide2, setShowLeftSlide2] = useState(true)

    const handleClick = () => {
        if (showLeftSlide) {
            setShowLeftSlide(false)
            setShowRightSlide(true)
        }
        if (showRightSlide) {
            setShowRightSlide(false)
            setShowLeftSlide(true)
        }
    }

    const handleClick2 = () => {
        if (showLeftSlide2) {
            setShowLeftSlide2(false)
            setShowRightSlide2(true)
        }
        if (showRightSlide2) {
            setShowRightSlide2(false)
            setShowLeftSlide2(true)
        }
    }

    return (
        <>
            <section
                className="lg:text-left mt-0 mb-20 lg:mb-32 px-6 lg:px-10 py-0"
                id="whyjoinus"
            >
                <div className="container flex flex-col lg:flex-row justify-center items-center gap-8 fibe-step-slider">
                    <div className="w-full lg:w-2/3">
                        <h2 className="w-full text-center lg:text-start text-2xl lg:text-3xl mb-2 lg:mb-8 font-semibold leading-10 lg:leading-[42px] py-1">
                            Factors Affecting Loan Amount Eligibility
                        </h2>

                        {/* Slider Indicators */}
                        <div>
                            <ul className="flex justify-center lg:justify-start items-center lg:items-start mb-3 pl-0 ml-0">
                                <button onClick={() => {
                                    setShowLeftSlide(true); setShowRightSlide
                                        (false)
                                }} className={`w-[40px] lg:w-[80px] h-[8px] ${showLeftSlide ? "bg-[#079f9f]" : "bg-[#e6e6e6]"}  mr-3 mb-3 rounded-full`} />
                                <button onClick={() => {
                                    setShowRightSlide(true); setShowLeftSlide
                                        (false)
                                }} className={`w-[40px] lg:w-[80px] h-[8px] ${showRightSlide ? "bg-[#079f9f]" : "bg-[#e6e6e6]"}  mr-3 mb-3 rounded-full`} />
                            </ul>
                        </div>

                        {/* Visible Content */}
                        {showLeftSlide && <div>
                            <div className="my-2">
                                {[
                                    {
                                        title: "Income Stability",
                                        text: "Regular and sufficient income increases loan eligibility as it demonstrates repayment capability.",
                                    },
                                    {
                                        title: "Credit Score",
                                        text: "A high credit score (750+ points) indicates responsible financial behaviour and enhances eligibility.",
                                    },
                                    {
                                        title: "Employment type",
                                        text: "Salaried individuals with secure jobs or professionals with consistent earnings have higher eligibility.",
                                    },
                                    {
                                        title: "Age",
                                        text: "Borrowers in the 21-60 age group typically qualify, with younger applicants having higher tenure options.",
                                    },
                                    {
                                        title: "Existing Liabilities",
                                        text: "Current loans or credit card dues can reduce the sanctioned loan amount.",
                                    },
                                ].map(({ title, text }, i) => (
                                    <div key={i} className="mb-2 lg:mb-4 ml-4 lg:ml-8">
                                        <div className="list-item font-semibold text-base lg:text-xl my-3 text-midnight-black">
                                            {title}: &nbsp;
                                            <span className="leading-[20px] lg:leading-[30px] text-sub-grey font-normal text-sm lg:text-xl">
                                                {text}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        }
                        {/* Hidden Content */}
                        {showRightSlide && (
                            <>
                                <div className="my-2">
                                    {[
                                        {
                                            title: "Debt-to-Income Ratio",
                                            text: "A lower ratio (ideally below 40%) ensures higher eligibility.",
                                        },
                                        {
                                            title: "Loan Tenure",
                                            text: "Longer tenure increases the eligible loan amount due to lower EMI burdens.",
                                        },
                                        {
                                            title: "Nature of Loan",
                                            text: "Secured loans (backed by collateral) usually offer higher amounts than unsecured loans.",
                                        },
                                        {
                                            title: "Employment History",
                                            text: "A stable work history with reputed organisations positively impacts eligibility.",
                                        },
                                        {
                                            title: "Lender Policies",
                                            text: "Loan eligibility can vary based on the financial institution’s criteria.",
                                        },
                                    ].map(({ title, text }, i) => (
                                        <div key={i} className="mb-2 lg:mb-4 ml-4 lg:ml-8">
                                            <div className="list-item font-semibold text-base lg:text-xl my-3 text-midnight-black">
                                                {title}: &nbsp;
                                                <span className="leading-[20px] lg:leading-[30px] text-sub-grey font-normal text-sm lg:text-xl">
                                                    {text}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="leading-[20px] lg:leading-[30px] text-sub-grey font-normal text-sm lg:text-xl">
                                    Understanding and improving these factors can help maximise your
                                    loan amount eligibility.
                                </div>


                            </>
                        )}

                        {/* buttons */}
                        <div className="flex flex-wrap flex-col lg:flex-row lg:justify-between items-center">
                            <div className="flex flex-wrap mt-2 mb-2 me-2">
                                <button onClick={handleClick} className="rounded-full shadow-md bg-white text-sm lg:text-base font-medium py-4 px-6 my-3 mr-2 border border-gray-200 hover:bg-[#079f9f] hover:text-white min-w-[150px] hover:cursor-pointer text-center hidden lg:block">
                                    {showLeftSlide ? "Next" : "Previous"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/3">
                        <img
                            alt="Fibe personal loan and instant cash loan app"
                            width="500"
                            height="500"
                            loading="lazy"
                            className="mx-auto mb-1 mix-blend-multiply bg-transparent"
                            src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2025%2F01%2Fwoman-talking-with-chatbot-1.png&w=1080&q=75"
                        />
                    </div>
                </div>
            </section>

            {/* second part */}

            <div className="lg:py-20 py-10 bg-[#FFF8FA]">
                <section className="px-6 lg:px-8" id="factorstoconsider">
                    <div className="container flex flex-col lg:flex-row justify-center items-center gap-8 fibe-step-slider">

                        {/* Text Section */}
                        <div className="w-full lg:w-2/3 order-first lg:order-last">
                            <h2 className="w-full text-center lg:text-start text-2xl lg:text-3xl mb-2 lg:mb-8 font-semibold leading-10 lg:leading-[42px] py-1">
                                Factors to Consider While Applying for an Instant Loan
                            </h2>

                            
                            <div>
                                <ul className="flex justify-center lg:justify-start items-center lg:items-start mb-3 pl-0 ml-0">
                                    <button onClick={() => {
                                        setShowLeftSlide2(true); setShowRightSlide2
                                            (false)
                                    }} className={`w-[40px] lg:w-[80px] h-[8px] ${showLeftSlide2 ? "bg-[#079f9f]" : "bg-[#e6e6e6]"}  mr-3 mb-3 rounded-full`} />
                                    <button onClick={() => {
                                        setShowRightSlide2(true); setShowLeftSlide2
                                            (false)
                                    }} className={`w-[40px] lg:w-[80px] h-[8px] ${showRightSlide2 ? "bg-[#079f9f]" : "bg-[#e6e6e6]"}  mr-3 mb-3 rounded-full`} />
                                </ul>
                            </div>


                            {/* Slide 1 content */}
                            {showLeftSlide2 && <div>
                                <div className="font-semibold text-xl my-1 text-midnight-black text-center lg:text-left">
                                    Eligibility Criteria:
                                </div>
                                <div className="leading-[25px] lg:leading-[30px] font-normal text-base lg:text-xl text-center lg:text-left text-sub-grey">
                                    <p>
                                        Ensure you meet the lender's basic requirements such as age, income, employment type and credit score.
                                    </p>
                                </div>

                                <div className="font-semibold text-xl my-1 text-midnight-black text-center lg:text-left">
                                    Loan Amount:
                                </div>
                                <div className="leading-[25px] lg:leading-[30px] font-normal text-base lg:text-xl text-center lg:text-left text-sub-grey">
                                    <p>
                                        Check if the loan amount offered aligns with your financial needs to avoid borrowing excess or insufficient funds.
                                    </p>
                                </div>

                                <div className="font-semibold text-xl my-1 text-midnight-black text-center lg:text-left">
                                    Interest Rates:
                                </div>
                                <div className="leading-[25px] lg:leading-[30px] font-normal text-base lg:text-xl text-center lg:text-left text-sub-grey">
                                    <p>
                                        Compare interest rates from different lenders to select the most affordable option that suits your repayment capacity.
                                    </p>
                                </div>
                            </div> }

                            {/* Slide 2 (hidden for now — for toggling later if needed) */}
                            {showRightSlide2 && <div className="">
                                <div className="font-semibold text-xl my-1 text-midnight-black text-center lg:text-left">
                                    Repayment Tenure:
                                </div>
                                <div className="leading-[25px] lg:leading-[30px] font-normal text-base lg:text-xl text-center lg:text-left text-sub-grey">
                                    <p>
                                        Choose a flexible repayment term that allows manageable EMIs without straining your monthly budget.
                                    </p>
                                </div>

                                <div className="font-semibold text-xl my-1 text-midnight-black text-center lg:text-left">
                                    Processing Fees and Hidden Charges:
                                </div>
                                <div className="leading-[25px] lg:leading-[30px] font-normal text-base lg:text-xl text-center lg:text-left text-sub-grey">
                                    <p>
                                        Review all associated costs, including processing fees, prepayment charges or penalties for late payments.
                                    </p>
                                </div>

                                <div className="font-semibold text-xl my-1 text-midnight-black text-center lg:text-left">
                                    Documentation:
                                </div>
                                <div className="leading-[25px] lg:leading-[30px] font-normal text-base lg:text-xl text-center lg:text-left text-sub-grey">
                                    <p>
                                        Verify the required documents, such as ID proof, income proof and bank statements, to ensure a smooth application process.
                                    </p>
                                </div>
                            </div>}

                            {/* Next Button */}
                            <div className="flex flex-wrap flex-col lg:flex-row lg:justify-between items-center">
                            <div className="flex flex-wrap mt-2 mb-2 me-2">
                                <button onClick={handleClick2} className="rounded-full shadow-md bg-white text-sm lg:text-base font-medium py-4 px-6 my-3 mr-2 border border-gray-200 hover:bg-[#079f9f] hover:text-white min-w-[150px] hover:cursor-pointer text-center hidden lg:block">
                                    {showLeftSlide2 ? "Next" : "Previous"}
                                </button>
                            </div>
                        </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/3 order-last lg:order-first">
                            <img
                                alt="Fibe personal loan and instant cash loan app"
                                loading="lazy"
                                width="500"
                                height="500"
                                className="mx-auto mb-1 mix-blend-multiply bg-transparent"
                                src="https://altcont.fibe.in/wp-content/uploads/2025/01/factors-for-instant-cash-loan.png"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default FactorsAffecting
