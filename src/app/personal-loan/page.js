"use client"
import React, { useState } from 'react'
const page = () => {
    const [formdata, setFormData] = useState('');
  return (
    <div>
      <section className="w-full px-6 lg:px-8 flex bg-gradient-to-t from-[#FFF3F78F] to-[#EBFFFF91]" id="herobanner">
        <div className="w-full mt-10 lg:mt-16 pt-16 pb-0 lg:py-0 flex-col lg:flex-row lg:flex gap-0 container">
            <div className="w-full lg:w-3/5 container lg:pt-16 lg:pb-10">
                <div className="py-4 mb-2 flex flex-wrap justify-between items-center text-center lg:text-left">
                                 <ul className="flex flex-wrap justify-center items-center mx-auto lg:mx-0 [&>li]:mb-2">
                <li className="inline-flex items-center">
                  <a
                    className="text-sm md:text-base lg:text-lg xl:text-xl px-2 text-sub-grey hover:text-[#079f9f] font-normal"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="inline-flex items-center font-semibold">
                  <img
                    alt="Breadcrumb arrow"
                    loading="lazy"
                    width="6"
                    height="6"
                    decoding="async"
                    className="mx-auto lg:mx-0"
                    style={{ color: "transparent" }}
                    src="https://www.fibe.in/icons/breadcrumb-arrow.svg"
                  />
                </li>
                <li className="inline-flex items-center">
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl px-2 text-[#079f9f] font-medium">
                    Personal Loan
                  </div>
                </li>
              </ul>
                    <h1 className="w-full text-3xl lg:text-6xl font-bold leading-10 lg:leading-[72px] py-4">Apply for Personal Loan</h1>
                    <p className="w-full text-base lg:text-xl py-2 leading-8 text-[#5c5c5c] font-normal">Get up to ₹5 lakhs directly in your bank account by applying for Fibe's quick online Personal Loan. Benefit from affordable interest rates alongside instant approval. Say goodbye to lengthy waits with our easy and personalised online application journey. Experience the convenience of accessing funds smoothly through our streamlined process.</p>
                </div>
                            <div>
              <form>
                <div className="px-6 lg:px-0 mx-auto lg:mx-0 sm:w-11/12 flex justify-center items-center lg:items-start max-w-lg flex-col">
                  <div className="inline-flex flex-col lg:flex-row [&>*]:my-2 justify-center items-center lg:items-start sm:w-10/12 lg:w-auto lg:space-x-4">
                    <div className="w-full">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter your mobile number"
                        value={formdata}
                        onChange={(e) => {
                          const onlyNums = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                          String(onlyNums).length <= 10 &&
                            setFormData(onlyNums);
                        }}
                        className="rounded-lg min-w-[300px] lg:min-w-[360px] lg:mr-2 p-3 lg:p-4 text-base lg:text-xl border border-gray-400 focus:border-[#079f9f] focus:outline-none focus:ring-1 focus:ring-[#079f9f] text-center lg:text-left"
                        aria-label="Enter your mobile number"
                        aria-describedby="btn-step-1"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="lg:text-lg min-w-[300px] lg:mr-2 p-3 lg:p-4 rounded-lg bg-[#079f9f] hover:bg-[rgb(3,129,129)] border border-[rgb(3,135,135)]]  px-3 py-3 lg:py-4 text-base font-semibold text-white  shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark lg:min-w-[250px] disabled:opacity-100 disabled:cursor-not-allowed"
                      disabled={formdata.length != 10}
                      id="btn-step-1"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
            <div className="w-full lg:w-2/5 lg:mt-12 pt-8 self-center">
                <img alt="Solar loan" fetchPriority="high" width="420" height="420" decoding="async" data-nimg="1" className="mx-auto mix-blend-darken mb-6 lg:mb-0" src="https://www.fibe.in/_next/image/?url=%2Fpersonal-loan-hero-image.png&w=1080&q=100"/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default page
