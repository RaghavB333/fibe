"use client";
import React, { useState } from "react";
import Wave from "@/components/home_components/Wave";
import LoanCalculator from "@/components/calculators/LoanCalculator";
import GetLoan from "@/components/home_components/GetLoan";
import Table from "@/components/information/Table";
import WhiteCardSection from "@/components/information/WhiteCardSection";
import Informationcardsection from "@/components/information/Informationcardsection";
import LoanAmountSection from "@/components/information/LoanAmountSection";
import FAQs from "@/components/FAQs/FAQs";
import TypesOfLoan from '@/components/personal-loan/TypesOfLoan'
import SubNavbar from "@/components/navbars/SubNavbar";
import Blogs from "@/components/blogs/Blogs";
const page = () => {
  const [formdata, setFormData] = useState("");

    const LoanSectionTitle = "How to apply for Personal Loan?";
  const LoanSectionDescription = "You can get a quick personal loan online with Fibe in super simple and quick steps.";

  const steps = [
    {
      title: "Registration",
      description:
        "Download the Fibe App or register on our official website and provide a few basic details to initiate the application process.",
      img: "https://www.fibe.in/_next/image/?url=%2Fanimations%2Fpersonal-loan%2Fregister.jpg&w=1080&q=75",
    },
    {
      title: "Get instant approval",
      description:
        "You can complete the verification by uploading some basic documents and get approval in minutes.",
      img: "https://www.fibe.in/_next/image/?url=%2Fanimations%2Fpersonal-loan%2Fapproval.jpg&w=1080&q=75",
    },
    {
      title: "Funds in minutes",
      description:
        "Select the amount you want and the money will be transferred directly to your bank account within minutes.",
      img: "https://www.fibe.in/_next/image/?url=%2Fanimations%2Fpersonal-loan%2Ffunds.jpg&w=1080&q=75",
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

  const whiteCardTitle = "Benefits of Personal Loan from Fibe";
  const whiteCardDescription = "Here’s a look at the benefits associated with when you avail loan from Fibe:";

  const whiteCardData = [
      {
          title: "No restrictions on usage",
          description: "Loans can be used for any purpose like medical treatment, home renovation, etc.",
          img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61333-3.png&w=128&q=75"
      },
      {
          title: "Collateral-free loans",
          description: "While applying for a quick instant loan, you don’t need to provide any type of security",
          img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61351.png&w=128&q=75"
        },
         {
            title: "100% digital journey",
            description: "No long forms or paperwork, just upload soft copies of the documents and get instant approval",
            img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61334.png&w=128&q=75"
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
          title: "Cash in bank",
          description: "Get funds directly in your bank account in minutes*",
          img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61333.png&w=128&q=75"
        },
       
        {
            title: "Secure app",
            description: "With ISO 27001 certification and PCI DSS app-based journey, getting instant cash is easy and secure",
            img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FGroup-61334.png&w=128&q=75"
        },
    ];
    
    const informationcardTitle = "Personal Loan Eligibility Criteria";
    const informationCardDescription = "Qualifying for an online loan from Fibe is pretty simple, thanks to our easy-to-meet eligibility criteria. Refer to the list to check your eligibility. If you match the eligibility criteria, you can then download Fibe’s App or log on to our website and apply for the loan in minutes.";
    
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

  const informationcardTitle2 = "Documents required to avail Personal Loan";
  const informationCardDescription2 = "The application process to get a loan from Fibe is 100% digital and requires minimal documentation. Submitting the required documents enables us to process your loan and disburse funds faster.";

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

    const FAQS = [
    {
      question: "How can I get a personal loan immediately?",
      answer: "You can get a personal loan instantly using the Fibe app or the official website. All you have to do is fill in a few personal details of yours and check your eligibility. After this, submit the necessary documents and enter the loan amount you wish to borrow to avail of the instant personal loan online."
    },
    {
      question: "What can you use a personal loan for?",
      answer: "A personal loan has no end-use restrictions. So, you can use a personal loan for multiple purposes. Some of these include the following:"
    },
    {
      question: "What is the minimum salary required to get a personal loan?",
      answer: "The minimum in-hand salary required to avail of a Fibe Instant Personal Loan is ₹15,000 if you live in non-metro cities. However, if you reside in metro cities, your minimum in-hand income must be ₹18,000. Note that these salary requirements vary from one lender to another."
    },
    {
      question: "How to get quick approval on my personal loan application?",
      answer: "You can get quick approval on your instant personal loan at Fibe by ensuring that you complete the online form accurately. Furthermore, check your eligibility and make sure you meet the lender’s parameters before applying. Then, submit the required documentation to get quick approval."
    },
    {
      question: "How much personal loan can I get with Fibe?",
      answer: "You can avail of a loan starting from ₹8,000 to ₹5 Lacs differing on your eligibility."
    },
    {
      question: "Why should you choose Fibe's Personal Loan?",
      answer: "Here are some reasons why you must opt for a personal loan from Fibe:"
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


const navbarItems = [
    {
        name: "EMI calculator",
        href: "#calc"
    },
    {
        name: "How to apply",
        href: "#howto"
    },
    {
        name: "Types of loan",
        href: "#tol"
    },
    {
        name: "Fees & charges",
        href: "#fc"
    },
    {
        name: "Personal loan features",
        href: "#plf"
    },
    {
        name: "Check eligibilty",
        href: "#ce"
    },
    {
        name: "Documents required",
        href: "#dr"
    },
    {
        name: "Personal loan amount",
        href: "#pla"
    },
    {
        name: "FAQs",
        href: "#faq"
    },
    {
        name: "Blogs",
        href: "#blogs"
    },
    {
        name: "Download app",
        href: "#download"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
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

  return (
    <div>
        <SubNavbar items={navbarItems}/>
      <section
        className="w-full px-6 lg:px-8 flex bg-gradient-to-t from-[#FFF3F78F] to-[#EBFFFF91]"
        id="herobanner"
      >
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
              <h1 className="w-full text-3xl lg:text-6xl font-bold leading-10 lg:leading-[72px] py-4">
                Apply for Personal Loan
              </h1>
              <p className="w-full text-base lg:text-xl py-2 leading-8 text-[#5c5c5c] font-normal">
                Get up to ₹5 lakhs directly in your bank account by applying for
                Fibe's quick online Personal Loan. Benefit from affordable
                interest rates alongside instant approval. Say goodbye to
                lengthy waits with our easy and personalised online application
                journey. Experience the convenience of accessing funds smoothly
                through our streamlined process.
              </p>
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
            <img
              alt="Solar loan"
              fetchPriority="high"
              width="420"
              height="420"
              decoding="async"
              data-nimg="1"
              className="mx-auto mix-blend-darken mb-6 lg:mb-0"
              src="https://www.fibe.in/_next/image/?url=%2Fpersonal-loan-hero-image.png&w=1080&q=100"
            />
          </div>
        </div>
      </section>

    {/* Wave section */}
      <Wave />

      {/* Calculator */}

    <div className="bg-[rgb(247,255,255)] px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
            Calculate your Personal Loan EMI
          </h2>
          <p className="max-w-5xl leading-8 px-2 mx-auto text-base lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">
            Skip the manual calculations. Use the Fibe's Personal Loan EMI Calculator to accurately determine your monthly instalments within seconds. Just enter the loan amount, tenure and interest rate. Within seconds, the calculator will determine your EMI.
          </p>
        </div>
        <LoanCalculator />
      </div>

        {/* Apply Loan */}
    
    <GetLoan
        steps={steps}
        title={LoanSectionTitle}
        description={LoanSectionDescription}
        bgcolor={"white"}
      />


      <TypesOfLoan />


      {/* Table Section */}

      <section className="px-6 lg:px-8 py-8 lg:py-12 bg-white">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
            Processing Fees and Charges for Personal Loan
          </h2>
          <p className="max-w-5xl mx-auto text-base lg:text-xl mb-2">
            Our online personal loan interest rates apply only for the number of days you use the loan amount. We don’t levy any pre-closure fees and there are no annual charges or renewal fees. Additionally, we have no hidden fees. All these features make us an affordable and reliable provider amongst others. 
          </p>
          <p className="font-semibold max-w-5xl mx-auto text-base lg:text-xl mb-8">
            Here’s our detailed fee structure.
          </p>
        </div>
        <Table tableData={tableData} />
      </section>

      {/* Benefits of Personal loan White Card Section */}

    <WhiteCardSection title={whiteCardTitle} description={whiteCardDescription} cardData={whiteCardData} />

    {/* Eligibility Criteria */}

    <Informationcardsection
        title={informationcardTitle}
        description={informationCardDescription}
        cardData={informationCardData}
        showButton={true}
      />

      {/* Document Required  */}

      <Informationcardsection
        title={informationcardTitle2}
        description={informationCardDescription2}
        cardData={informationCardData2}
        p={
          "Below is the list of documents that are necessary for a personal loan application:"
        }
        showButton={false}
      />

      {/* Loan Amount */}

      <LoanAmountSection title={"Choose Personal Loan by amount"}/>

      {/* FAQs */}

      <FAQs title={"FAQs on Personal Loan"} FAQS={FAQS}/>

      {/* blogs */}

      <Blogs data={blogsData} heading={"Personal Loan Blogs"}/>
    </div>
  );
};

export default page;

