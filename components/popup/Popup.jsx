"use client"
import React, { useState, useEffect } from "react";

const Popup = () => {
    const [formdata, setFormData] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);


    useEffect(() => {
        if (typeof window === "undefined") return;

        const shouldShow = Math.random() < 0.1;

        if (!shouldShow) return;

        // 2. Random delay between 3 to 10 seconds
        const delay = Math.floor(Math.random() * (15000 - 9000 + 1)) + 3000;

        const timer = setTimeout(() => {
            setShowPopUp(true);
        }, delay);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    // };

    return (
        <>
            {showPopUp &&
                <div onClick={() => setShowPopUp(false)} className="fixed inset-0 bg-[#000000a2] flex items-center justify-center z-[9999]">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white w-[313px] lg:w-[850px] h-[530px] flex lg:flex-row flex-col relative rounded-2xl top-1 lg:top-0 mx-auto">
                        {/* Left Image Section */}
                        <div className="flex justify-center items-center bg-[#F9E1E8] lg:w-[367px] rounded-bl-2xl rounded-se-2xl rounded-ss-2xl lg:rounded-se-none lg:rounded-s-2xl h-[161px] lg:h-full">
                            {/* Desktop Image */}
                            <img
                                alt="PopUp Image"
                                loading="lazy"
                                width="367"
                                height="530"
                                decoding="async"
                                className="hidden lg:block h-full w-full rounded-2xl"
                                src="https://www.fibe.in/_next/image/?url=%2Fpopup-desktop-view.png&w=750&q=100"
                            />
                            {/* Mobile Image */}
                            <img
                                alt="PopUp Image"
                                loading="lazy"
                                width="626"
                                height="322"
                                decoding="async"
                                className="block lg:hidden w-full h-full rounded-2xl"
                                src="https://www.fibe.in/_next/image/?url=%2Fpopup-mobile-view.png&w=1920&q=100"
                                style={{ height: "inherit" }}
                            />
                            <span className="absolute top-6 right-6 w-4 h-4 lg:w-6 lg:h-6">
                                <button onClick={() => setShowPopUp(false)} className="cursor-pointer">
                                    <img
                                        loading="lazy"
                                        width="20"
                                        height="20"
                                        decoding="async"
                                        src="https://www.fibe.in/cross-icon.svg"
                                        alt="Close"
                                    />
                                </button>
                            </span>
                        </div>

                        {/* Right Content Section */}
                        <div className="px-4 lg:px-7 lg:w-[483px] relative">
                            <span className="absolute top-6 right-6 w-4 h-4 lg:w-6 lg:h-6 hidden lg:block">
                                <button onClick={() => setShowPopUp(false)} className="cursor-pointer">
                                    <img
                                        loading="lazy"
                                        width="20"
                                        height="20"
                                        decoding="async"
                                        src="https://www.fibe.in/cross-icon.svg"
                                        alt="Close"
                                    />
                                </button>
                            </span>

                            <h1 className="font-bold text-[16px] leading-[22px] lg:text-[32px] lg:leading-[50px] text-left mt-3 lg:max-w-72">
                                Get up to{" "}
                                <span className="text-[#ff3e79]">₹5 lakhs</span> in just{" "}
                                <span className="text-[#ff3e79]">2 minutes!</span>
                            </h1>

                            {/* Features Row */}
                            <div className="py-[6px] lg:py-[14px] gap-4 flex rounded-2xl justify-around">
                                <div className="flex flex-col justify-center">
                                    <img
                                        src="https://www.fibe.in/digital-loan-process-popup.svg"
                                        alt=""
                                        width="40"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <p className="text-[10px] lg:text-[14px] font-medium text-[#000] mt-[6px] lg:mt-[10px]">
                                        100% digital process
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img
                                        src="https://www.fibe.in/instant-approval-popup.svg"
                                        alt=""
                                        width="40"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <p className="text-[10px] lg:text-[14px] font-medium text-[#000] mt-[6px] lg:mt-[10px]">
                                        Instant approval
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img
                                        src="https://www.fibe.in/easy-emis-popup.svg"
                                        alt=""
                                        width="40"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <p className="text-[10px] lg:text-[14px] font-medium text-[#000] mt-[6px] lg:mt-[10px]">
                                        Easy EMIs options
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img
                                        src="https://www.fibe.in/popup-icon.svg"
                                        alt=""
                                        width="40"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <p className="text-[10px] lg:text-[14px] font-medium mt-[6px] lg:mt-[10px]">
                                        0 foreclosure charges
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Number */}
                            <p className="font-medium text-base">Mobile Number</p>
                            <div className=" ">
                                <form className='w-full mt-3'>
                                    <div className="lg:px-0 mx-auto lg:mx-0 flex justify-center items-center w-[100%] flex-col">
                                        <div className="flex [&>*]:my-2 items-center space-x-1 w-full">
                                            <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Enter mobile number" value={formdata} onChange={(e) => { const onlyNums = e.target.value.replace(/[^0-9]/g, ''); String(onlyNums).length <= 10 && setFormData(onlyNums); }} className="rounded-lg lg:mr-2 p-3 lg:p-4 text-sm lg:text-lg w-[70%] lg:w-full border-1 border-gray-400 focus:border-[rgb(7,159,159)] focus:outline-none focus:ring-2 focus:ring-[rgb(7,159,159)] text-left" aria-label="Enter your mobile number" aria-describedby="btn-step-1"></input>
                                            <button type="submit" className="lg:min-w-36 p-3 lg:p-3 rounded-lg bg-[rgb(3,135,135)] hover:bg-[rgb(57,128,128)] border border-[rgb(3,135,135)]]  px-3 py-3 lg:py-4 text-sm hidden lg:block lg:text-lg font-semibold text-white  shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark  disabled:opacity-100 disabled:cursor-not-allowed" disabled={formdata.length != 10} id="btn-step-1">Get loan now</button>
                                            <button type="submit" className="lg:min-w-36 p-3 lg:p-3 rounded-lg bg-[rgb(3,135,135)] hover:bg-[rgb(57,128,128)] border border-[rgb(3,135,135)]]  px-3 py-3 lg:py-4 text-sm lg:hidden block lg:text-lg font-semibold text-white  shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark  disabled:opacity-100 disabled:cursor-not-allowed" disabled={formdata.length != 10} id="btn-step-1">Get loan</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* App Download Links */}
                            <div className="lg:mt-2 w-full">
                                <p className="text-[14px] font-semibold text-[#262626]">
                                    Download Our Mobile App
                                </p>
                                <div className="flex w-full mt-2 gap-1">
                                    {/* App Store */}
                                    <a
                                        href="https://apps.apple.com/in/app/fibe-instant-personal-loan-app/id1094602630"
                                        target="_blank"
                                        rel="noopener"
                                        className="h-8 lg:h-[46px] w-[50%] group inline-flex items-center justify-center rounded-md bg-black px-2 lg:px-4 py-1 lg:py-2 mb-2 text-[9px] lg:text-xs font-semibold text-white border border-black shadow-sm hover:bg-transparent hover:text-black"
                                    >
                                        <span className="mr-1 lg:mr-3 lg:text-xl">
                                            {/* Apple SVG */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="16"
                                                fill="none"
                                                className="fill-white group-hover:fill-black"
                                            >
                                                <path d="M11.21 8.432c-.02-2.041 1.705-3.035 1.784-3.081-.976-1.397-2.491-1.588-3.022-1.603-1.273-.132-2.506.747-3.153.747-.662 0-1.66-.734-2.734-.714-1.385.022-2.679.807-3.39 2.027-1.465 2.486-.37 6.14 1.032 8.15.702.983 1.523 2.084 2.596 2.044 1.051-.042 1.443-.656 2.712-.656 1.256 0 1.625.656 2.72.632 1.128-.018 1.837-.989 2.515-1.982.812-1.128 1.138-2.239 1.15-2.296-.027-.009-2.189-.82-2.21-3.268Z" />
                                                <path d="M9.142 2.592c.565-.694.952-1.635.845-2.592-.817.036-1.841.555-2.429 1.232-.523.597-.988 1.577-.867 2.496.918.067 1.86-.454 2.451-1.136Z" />
                                            </svg>
                                        </span>
                                        Download on App Store
                                    </a>

                                    {/* Play Store */}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.earlysalary.android"
                                        target="_blank"
                                        rel="noopener"
                                        className="h-8 lg:h-[46px] w-[50%] group inline-flex items-center justify-center rounded-md bg-black px-2 lg:px-4 py-1 lg:py-2 mb-2 text-[9px] lg:text-xs font-semibold text-white border border-black shadow-sm hover:bg-transparent hover:text-black"
                                    >
                                        <span className="mr-1 lg:mr-3 lg:text-xl">
                                            {/* Play SVG */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="none"
                                                className="fill-white group-hover:fill-black"
                                            >
                                                <path d="m9.037 7.413 2.291-2.267L2.44.195c-.33-.184-.63-.226-.884-.174l7.482 7.392ZM.92.547a1.5 1.5 0 0 0-.1.56v13.781c0 .215.036.398.098.556l7.534-7.457L.921.547ZM9.036 8.563l-7.49 7.412c.256.056.559.014.892-.172l8.905-4.962-2.307-2.278ZM14.835 7.095l-2.765-1.54-2.453 2.429 2.47 2.44 2.748-1.53c.889-.494.889-1.304 0-1.799Z" />
                                            </svg>
                                        </span>
                                        Download on Play Store
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Popup;
