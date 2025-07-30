"use client"
import React from 'react'
import { useState } from 'react'
import Wave from '@/components/home_components/Wave'
import GetLoan from '@/components/home_components/GetLoan'
import LoanCalculator from '@/components/calculators/LoanCalculator'
import Informationcardsection from '@/components/information/Informationcardsection'
import Table from '@/components/information/Table'
const page = () => {

    const [formdata, setFormData] = useState('');
    const LoanSectionTitle = "How to Get Instant Loan Online?";
    const LoanSectionDescription = "Fibe's digital platform has made applying for loans online super simple and secure. You can get an Instant Cash Loan in % minutes with us in a few easy steps:";

    const steps = [
    {
      title: 'Apply & register',
      description: 'Download the Fibe App or register on the website and provide a few basic details. It will help us in building your profile and initiate the application process.',
      img: 'https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fapply-instant.jpg&w=1080&q=75',
    },
    {
      title: 'Upload documents & get instant approval',
      description: 'Complete the verification by uploading a few required documents and get the approval instantly.',
      img: 'https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fupload.jpg&w=1080&q=75',
    },
    {
      title: 'Cash in minutes',
      description: 'Select the amount you want to be transferred after the approval. The money will be directly transferred to your bank account and within minutes.',
      img: 'https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fcash.jpg&w=1080&q=75',
    },
  ];

    const informationcardTitle = "Instant Cash Loan Eligibility Criteria";
    const informationCardDescription = "Before applying for an instant loan, you are required to check your eligibility with our easy-to-meet eligibility criteria. With Fibe, qualifying to avail of the loan is made extremely easy. Refer to the list to check your eligibility for a money loan. You can then download Fibe’s App or log on to our website and get an instant loan online.";

    const informationCardData = [
      {
        title: "Age",
        description: "19 Years to 55 Years",
        img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61399-1.png&w=128&q=75"
      },
      {
        title: "Minimum In-Hand Salary",
        description: "₹20,000 ",
        img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F09%2FGroup-61935.png&w=128&q=75"
      },
      {
        title: "Resident",
        description: "A resident of India",
        img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61080-12.png&w=128&q=75"
      }
    ];

    const tableData = [
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
      {
        first: "",
        second: "",
      },
    ]

  return (
    <div>
      <section className="w-full px-6 lg:px-8 flex bg-gradient-to-t from-[#FFF3F78F] to-[#EBFFFF91]">
        <div className="w-full mt-10 lg:mt-16 pt-16 pb-0 flex-col lg:flex-row lg:flex gap-0 lg:gap-4 container">
          <div className="w-full lg:w-[60%] container lg:mb-20">
            <div className="py-4 mb-4 flex flex-wrap justify-between items-center text-center lg:text-left">
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
                    Instant Cash Loan
                  </div>
                </li>
              </ul>

              <h1 className="w-full text-3xl lg:text-6xl font-bold leading-10 lg:leading-[72px] py-4">
                Instant Cash Loan Online
              </h1>

              <div className="flex flex-wrap gap-4 lg:gap-8 lg:flex-row flex-col w-full items-center">
                {/* Box 1 */}
                <div className="flex w-[300px] lg:h-[92px]">
                  <img
                    alt="Flexi Repayment Options"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    className="self-start"
                    style={{ color: "transparent" }}
                    src="https://www.fibe.in/instant-cash-loan/flexi-repayment-options.svg"
                  />
                  <div className="pl-2 text-left">
                    <p className="text-base lg:text-xl font-semibold">
                      Flexi Repayment Options
                    </p>
                    <p className="text-xs lg:text-base font-medium">
                      6 months to 36 months
                    </p>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="flex w-[300px] lg:h-[92px]">
                  <img
                    alt="No collateral required"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    className="self-start"
                    style={{ color: "transparent" }}
                    src="https://www.fibe.in/instant-cash-loan/no-collateral-required.svg"
                  />
                  <div className="pl-2 text-left">
                    <p className="text-base lg:text-xl font-semibold">
                      No collateral required
                    </p>
                    <p className="text-xs lg:text-base font-medium">
                      Hassle-free credit with zero security needed
                    </p>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="flex w-[300px] lg:h-[92px]">
                  <img
                    alt="Cash in bank directly"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    className="self-start"
                    style={{ color: "transparent" }}
                    src="https://www.fibe.in/instant-cash-loan/cash-in-bank-directly.svg"
                  />
                  <div className="pl-2 text-left">
                    <p className="text-base lg:text-xl font-semibold">
                      Cash in bank directly
                    </p>
                    <p className="text-xs lg:text-base font-medium">
                      Access funds in just 2 mins*
                    </p>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="flex w-[300px] lg:w-[350px] lg:h-[92px]">
                  <img
                    alt="One-time application process"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    className="self-start"
                    style={{ color: "transparent" }}
                    src="https://www.fibe.in/instant-cash-loan/one-time-application-process.svg"
                  />
                  <div className="pl-2 text-left">
                    <p className="text-base lg:text-xl font-semibold">
                      One-time application process
                    </p>
                    <p className="text-xs lg:text-base font-medium">
                      Get multiple loans in one application
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <form>
                <div className="px-6 lg:px-0 mx-auto lg:mx-0 sm:w-11/12 flex justify-center items-center lg:items-start max-w-lg flex-col">
                  <div className="inline-flex flex-col lg:flex-row [&>*]:my-2 justify-center items-center lg:items-start sm:w-10/12 lg:w-auto lg:space-x-4">
                    <div className="w-full">
                      <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Enter your mobile number" value={formdata} onChange={(e) => { const onlyNums = e.target.value.replace(/[^0-9]/g, ''); String(onlyNums).length <= 10 && setFormData(onlyNums); }} className="rounded-lg min-w-[300px] lg:min-w-[360px] lg:mr-2 p-3 lg:p-4 text-base lg:text-xl border border-gray-400 focus:border-[#079f9f] focus:outline-none focus:ring-1 focus:ring-[#079f9f] text-center lg:text-left" aria-label="Enter your mobile number" aria-describedby="btn-step-1"></input>
                    </div>
                    <button type="submit" className="lg:text-lg min-w-[300px] lg:mr-2 p-3 lg:p-4 rounded-lg bg-[#079f9f] hover:bg-[rgb(3,129,129)] border border-[rgb(3,135,135)]]  px-3 py-3 lg:py-4 text-base font-semibold text-white  shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark lg:min-w-[250px] disabled:opacity-100 disabled:cursor-not-allowed" disabled={formdata.length != 10} id="btn-step-1">Apply Now

                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[40%] pt-8 flex justify-center">
            <img
              alt="Instant Cash Loan"
              fetchPriority="high"
              width="681"
              height="480"
              decoding="async"
              className="mix-blend-darken w-fit"
              style={{ color: "transparent" }}
              src="https://www.fibe.in/_next/image/?url=%2Finstant-cash-image.png&w=1920&q=100"

            />
          </div>
        </div>
      </section>
      <Wave/>
      <GetLoan steps={steps} title={LoanSectionTitle} description={LoanSectionDescription} bgcolor={"white"}/>

      <div className="bg-[rgb(247,255,255)] px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">Instant Cash Loan EMI Calculator</h2>
          <p className="max-w-5xl leading-8 px-2 mx-auto text-base lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">You can calculate your monthly EMI beforehand with the Instant Loan EMI calculator to check the affordability. This will help you to be prepared and manage your payments on time. Just enter the loan amount, tenure and interest rate. Within seconds, the calculator will determine your EMI amount.</p>
        </div>
        <LoanCalculator/>
      </div>
      <Informationcardsection title={informationcardTitle} description={informationCardDescription} cardData={informationCardData}/>

      <section className='px-6 lg:px-8 py-8 lg:py-12 bg-white'>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">Instant Loan Fees and Charges</h2>
          <p className="max-w-5xl mx-auto text-base lg:text-xl mb-2">Our Instant Loan interest rates apply only for the number of days you use the loan amount. There are no pre-closure fees and annual charges or renewal fees. Additionally, we have no hidden fees. All these features make us an affordable and reliable provider amongst others.</p>
          <p className="font-semibold max-w-5xl mx-auto text-base lg:text-xl mb-8">Here’s our detailed fee structure.</p>
      </div>
      <Table/>
      </section>

    </div>
  )
}

export default page
