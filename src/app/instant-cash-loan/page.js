"use client";
import React from "react";
import { useState } from "react";
import Wave from "@/components/home_components/Wave";
import GetLoan from "@/components/home_components/GetLoan";
import LoanCalculator from "@/components/calculators/LoanCalculator";
import Informationcardsection from "@/components/information/Informationcardsection";
import Table from "@/components/information/Table";
import WhiteCardSection from "@/components/information/WhiteCardSection";
import LoanAmountSection from "@/components/information/LoanAmountSection";
import FAQs from "@/components/FAQs/FAQs";
import Reviews from "@/components/reviews/Reviews";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import SubNavbar from "@/components/navbars/SubNavbar";
import FactorsAffecting from "@/components/instant-cash-loan/FactorsAffecting";
import Blogs from "@/components/blogs/Blogs";
import HowToManage from "@/components/instant-cash-loan/HowToManage";


const navbarItems = [
  {
    name: "EMI calculator",
    href: "/"
  },
  {
    name: "How to apply",
    href: "/"
  },
  {
    name: "Check eligibilty",
    href: "/"
  },
  {
    name: "Documents required",
    href: "/"
  },
  {
    name: "Fees & charges",
    href: "/"
  },
  {
    name: "Instant cash loan features",
    href: "/"
  },
  {
    name: "FAQs",
    href: "/"
  },
  {
    name: "Blogs",
    href: "/"
  },
  {
    name: "Download app",
    href: "/"
  },
  {
    name: "Testimonials",
    href: "/"
  },
]

const blogsData = [
  {
    id: 1,
    type: 'Instant Cash Loan',
    date: '13 May 2025',
    title: 'How to Make Advance EMI Payment Online: A Detailed Guide',
    description:
      "EMIs make loan repayments easy by spreading them across monthly instalments. But what if you have some extra funds and want to pay more — or even finish your loan sooner? That&apos;s when the question arises: &apos;Can I pay EMIs in advance?&apos; Yes, many lenders allow advance EMI payments or prepayments — often through simple online … ",
    image:
      'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F05%2FHow-to-Make-Advance-EMI-Payment-Online.jpg&w=384&q=100',
    readTime: '3 mins read',
    layout: 'main',
  },
  {
    id: 2,
    type: 'Instant Cash Loan',
    date: '4 Mar 2025',
    title: 'iPhone on EMI: How to buy, chose the model and finance your purchase',
    description:
      'Today you can finance an iPhone via affordable EMIs both online and offline with ease. Many lenders in India offer a plethora of short-term loans or credit card options that you can use to buy your iPhone.  With so many options, choosing one can be difficult, especially when you want to buy an Apple iPhone … ',
    image:
      'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F11%2FBuy-iPhone-on-EMI.jpg&w=384&q=100',
    readTime: '3 mins read',
    layout: 'side',
  },
  {
    id: 3,
    type: 'Instant Cash Loan',
    date: '8 Nov 2025',
    title: 'Learn How to Buy a TV Under ₹20,000 on Affordable, Pocket-friendly EMIs',
    description:
      'When looking to buy a TV under ₹20,000, it is vital that you research your options. Most of these TVs have smart features offering internet connectivity, OTT subscription, voice assistance and more. Some models also have outstanding visual and audio quality, and you have many options to choose from.  Moreover, you can pay for a … ',
    image:
      'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F11%2FBuy-smart-TV-under-Rs.20000.jpg&w=384&q=100',
    readTime: '3 mins read',
    layout: 'side',
  },
];



const page = () => {
  const [formdata, setFormData] = useState("");
  const LoanSectionTitle = "How to Get Instant Loan Online?";
  const LoanSectionDescription =
    "Fibe's digital platform has made applying for loans online super simple and secure. You can get an Instant Cash Loan in % minutes with us in a few easy steps:";

  const steps = [
    {
      title: "Apply & register",
      description:
        "Download the Fibe App or register on the website and provide a few basic details. It will help us in building your profile and initiate the application process.",
      img: "https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fapply-instant.jpg&w=1080&q=75",
    },
    {
      title: "Upload documents & get instant approval",
      description:
        "Complete the verification by uploading a few required documents and get the approval instantly.",
      img: "https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fupload.jpg&w=1080&q=75",
    },
    {
      title: "Cash in minutes",
      description:
        "Select the amount you want to be transferred after the approval. The money will be directly transferred to your bank account and within minutes.",
      img: "https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fcash.jpg&w=1080&q=75",
    },
  ];

  const informationcardTitle = "Instant Cash Loan Eligibility Criteria";
  const informationCardDescription =
    "Before applying for an instant loan, you are required to check your eligibility with our easy-to-meet eligibility criteria. With Fibe, qualifying to avail of the loan is made extremely easy. Refer to the list to check your eligibility for a money loan. You can then download Fibe’s App or log on to our website and get an instant loan online.";

  const informationCardData = [
    {
      title: "Age",
      description: "19 Years to 55 Years",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61399-1.png&w=128&q=75",
    },
    {
      title: "Minimum In-Hand Salary",
      description: "₹20,000 ",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F09%2FGroup-61935.png&w=128&q=75",
    },
    {
      title: "Resident",
      description: "A resident of India",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61080-12.png&w=128&q=75",
    },
  ];

  const informationcardTitle2 = "Documents required for Instant Cash Loan";
  const informationCardDescription2 =
    "You need to submit some basic documents that are necessary while applying for a Cash Loan online with us.  It will enable us to process your application quickly and without any interruption.";

  const informationCardData2 = [
    {
      title: "A Selfie",
      description: "A clear photo of  your selfie",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61080-11.png&w=128&q=75",
    },
    {
      title: "Proof of Identity ",
      description: "Passport/Aadhaar card/ PAN card/driver's license",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61414.png&w=128&q=75",
    },
    {
      title: "Proof of Address",
      description: "Passport/rent agreement/ utility bills/voter’s ID",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61413-1.png&w=128&q=75",
    },
    {
      title: "Proof of Income",
      description: "Bank statements/salary  slips for the last 3 months",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61527.png&w=128&q=75",
    },
  ];

  const tableData = [
    {
      first: "Loan amount",
      second: "Up to ₹5 lakhs",
    },
    {
      first: "Rate of interest",
      second: "Starting from 18% per annum on reducing balance basis",
    },
    {
      first: "Processing fee",
      second: "Starting from 2% of the loan amount plus GST ",
    },
    {
      first: "Tenure",
      second: "6 - 36 month",
    },
    {
      first: "APR",
      second: "Starting from 18%",
    },
    {
      first: "Bounce Charges",
      second: "₹500",
    },
    {
      first: "Stamp duty",
      second: "0.1% of the loan amount",
    },
    {
      first: "Mandate rejection charges",
      second: "₹250 plus GST",
    },
    {
      first: "Pre-closure charges",
      second: "Nil",
    },
    {
      first: "Late Payment Charges",
      second:
        "₹ 500 or 3% of overdue whichever is higher plus applicable taxes",
    },
  ];

  const whiteCardTitle = "Why choose Instant Loan from Fibe?";
  const whiteCardDescription = "Our loan offerings are versatile with many benefits. Here are some of them:";

  const whiteCardData = [
    {
      title: "Cash in bank",
      description: "Get funds directly in your bank account in minutes*",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61333.png&w=128&q=75"
    },
    {
      title: "Fully digital journey",
      description: "No long forms or paperwork, just upload soft copies of the documents and get instant approval",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61334.png&w=128&q=75"
    },
    {
      title: "Minimal documentation",
      description: "Submit basic documents for an instant cash loan in 5 minutes and get quick approval",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61666.png&w=128&q=75"
    },
    {
      title: "Affordable interest rates",
      description: "Fibe offers attractive interest  rates on personal loans, even to new credit customers",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61364.png&w=128&q=75"
    },
    {
      title: "Borrow multiple times",
      description: "Repay your previous loan, anytime with 0 pre-closure charges and get the next one instantly",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61333-1.png&w=128&q=75"
    },
    {
      title: "Flexible repayment",
      description: "Get cash up to ₹5 lakhs & repay at a tenure ranging from 6 to 36 months",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61350.png&w=128&q=75"
    },
    {
      title: "Collateral-free loans",
      description: "While applying for a quick instant loan, you don’t need to provide any type of security",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61351.png&w=128&q=75"
    },
    {
      title: "Secure application & disbursal",
      description: "With ISO 27001 certification and PCI DSS app-based journey, getting instant cash is easy and secure",
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61350.png&w=128&q=75"
    },
  ];

  const FAQS = [
    {
      question: "Can I foreclose my instant cash loan online?",
      answer: "Yes, at Fibe you can foreclose your loan anytime at zero charges before the repayment tenure ends."
    },
    {
      question: "Is there a restriction on how many times I can request an instant loan?",
      answer: "There is no restriction on the number of loans, you can apply for multiple loans with Fibe. However, you must close your active loan before applying for another."
    },
    {
      question: "What is the turnaround time for processing an instant loan application?",
      answer: "The turnaround time to process an instant loan online at Fibe may vary from 8 to 24 hours. However, it takes only 2 minutes for the entire process from application to disbursal if you are a registered customer."
    },
    {
      question: "How can I repay my instant cash loan?",
      answer: "You can repay the instant cash loan through the app with multiple payment methods. This includes net banking, debit card, or setting an ECS mandate for an auto-debit from your account."
    },
    {
      question: "Do I need to provide any security or collateral to apply for an instant loan?",
      answer: "Fibe Instant Loans are unsecured forms of credit, meaning there is no need to provide collateral or security to obtain these cash loans."
    },
    {
      question: "Can the loan amount be used for personal purposes?",
      answer: "Yes, you can use an Instant Loan amount for your personal purposes. There is no obligation or restriction. As such, you can use it for home renovation, wedding expenses or any upgrades in your life."
    },
    {
      question: "How many instant loans can I borrow from Fibe’s cash loan app?",
      answer: "You can borrow multiple loans by completing the application process from the Fibe app. However, you need to close the active loan first."
    },
    {
      question: "What do I do if I face difficulty while using the Fibe loan app?",
      answer: "For any queries, you can quickly connect to our customer care team at 020-67639797 or mail us at care@fibe.in."
    },
    {
      question: "Is it possible to get an instant loan within 5 minutes?",
      answer: "Yes! The Fibe Personal Loan gives you quick approval in less than 5 minutes."
    },
    {
      question: "How do I update my personal information after receiving the loan?",
      answer: "You can view or change any details via the Fibe Personal Loan application."
    },
  ];

  return (
    <div>
      <SubNavbar items={navbarItems} />

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
      <Wave />
      <GetLoan
        steps={steps}
        title={LoanSectionTitle}
        description={LoanSectionDescription}
        bgcolor={"white"}
      />

      <div className="bg-[rgb(247,255,255)] px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
            Instant Cash Loan EMI Calculator
          </h2>
          <p className="max-w-5xl leading-8 px-2 mx-auto text-base lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">
            You can calculate your monthly EMI beforehand with the Instant Loan
            EMI calculator to check the affordability. This will help you to be
            prepared and manage your payments on time. Just enter the loan
            amount, tenure and interest rate. Within seconds, the calculator
            will determine your EMI amount.
          </p>
        </div>
        <LoanCalculator />
      </div>
      <Informationcardsection
        title={informationcardTitle}
        description={informationCardDescription}
        cardData={informationCardData}
        showButton={true}
      />

      <section className="px-6 lg:px-8 py-8 lg:py-12 bg-white">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
            Instant Loan Fees and Charges
          </h2>
          <p className="max-w-5xl mx-auto text-base lg:text-xl mb-2">
            Our Instant Loan interest rates apply only for the number of days
            you use the loan amount. There are no pre-closure fees and annual
            charges or renewal fees. Additionally, we have no hidden fees. All
            these features make us an affordable and reliable provider amongst
            others.
          </p>
          <p className="font-semibold max-w-5xl mx-auto text-base lg:text-xl mb-8">
            Here’s our detailed fee structure.
          </p>
        </div>
        <Table tableData={tableData} />
      </section>
      <Informationcardsection
        title={informationcardTitle2}
        description={informationCardDescription2}
        cardData={informationCardData2}
        p={
          "Check out the list of documents that are necessary for an Instant loan application below:"
        }
        showButton={false}
      />
      <FactorsAffecting />
      <section
        className="px-6 lg:px-8 pt-20 pb-8 lg:pt-[130px] lg:pb-[82px]"
        id="documents"
      >
        <div className="container flex flex-col lg:flex-row justify-center items-center">
          <div className=" lg:w-1/3 order-2 lg:order-2 items-center lg:my-0 my-4 flex justify-center">
            <img
              src="https://altcont.fibe.in/wp-content/uploads/2025/01/instant-cash-loan-documents.png"
              alt="Fibe personal loan and instant cash loan app"
              width="320"
              height="300"
              className="lg:pl-2 justify-center items-center w-auto lg:pr-2"
            ></img>
          </div>
          <div className="w-full lg:w-2/3 order-1 lg:order-1">
            <h2 className="text-2xl lg:text-3xl font-semibold text-center lg:text-start">
              How To Repay Your Instant Money Loan?
            </h2>
            <div className="list-inside text-center lg:text-start pt-0 lg:pt-2 container">
              <div>
                <div className="mb-4 lg:leading-8 leading-7 font-medium lg:text-xl my-3 text-[#262626] text-[17px]">
                  Repaying your instant money loan is simple and hassle-free.
                  Log in to the Fibe App or website, navigate to the repayment
                  section and choose a convenient payment mode like UPI, net
                  banking or debit card. Opt for auto-debit to ensure timely
                  payments and avoid late fees. Check your repayment schedule
                  and pay on or before the due date. Early repayment may also
                  save on interest. Ensure sufficient funds are in your account
                  for seamless processing.{" "}
                </div>
                <div className="leading-[25px] lg:leading-[30px] text-sub-grey font-normal text-base lg:text-xl"></div>
              </div>
              <div>
                <div className="mb-4 font-medium lg:text-xl my-3 text-[#262626] text-[17px]">
                  With a few clicks, you can stay stress-free and maintain a
                  strong credit score. You can also repay your loan with 0
                  foreclosure charges with Fibe.
                </div>
                <div className="leading-[25px] lg:leading-[30px] text-sub-grey font-normal text-base lg:text-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhiteCardSection title={whiteCardTitle} description={whiteCardDescription} cardData={whiteCardData} />
      <HowToManage />
      <LoanAmountSection />
      <FAQs FAQS={FAQS} />


      
      <Blogs data={blogsData} heading={"Instant Cash Loan Blogs"} />
      <Reviews />
      <DownloadApp />

    </div>
  );
};

export default page;
