import React from 'react';

const HowToManage = () => {
    return (
        <section className="px-6 lg:px-8 py-8 lg:pt-32 pt-20 container ">
            <div className="text-center">
                <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
                    How to Manage Your Cash Loan via the Fibe App?
                </h2>
                <p className="max-w-5xl mx-auto text-base lg:text-xl mb-8 text-sub-grey font-normal">
                    Managing your loan with the Fibe App is simple and convenient. Follow the below super easy steps:
                </p>
            </div>

            {/* Desktop Layout */}
            <div className="w-full hidden lg:flex">
                {/* Left Column */}
                <div className="mx-auto pt-1 lg:pt-6 container w-[35%]">
                    <ul className="grid grid-cols-1 relative stepbar place-content-center processbar">
                        {[
                            {
                                title: 'Log in to the App',
                                text: 'Open the Fibe App and log in with your registered credentials.'
                            },
                            {
                                title: 'Access Your Loan Details',
                                text: "Navigate to the 'My Loans' or 'Dashboard' section to view all active loans."
                            },
                            {
                                title: 'Check Repayment Schedule',
                                text: 'Review your EMI amounts, due dates and the repayment schedule.'
                            },
                            {
                                title: 'Make Repayments',
                                text: 'Use app to make your EMI payments  seamlessly through net banking,  UPI or debit card.'
                            },
                        ].map(({ title, text }, i) =>
                        (
                            <li key={i} className="flex relative">
                                <div onClick={() => console.log(i)} className="m-4 mt-0 ml-0 mb-0 p-3 each-step w-full ">


                                    <div className="font-semibold text-lg lg:text-xl mt-0 mb-2 lg:mb-1">{title}</div>
                                    <p className="text-base text-[#5e5e5e]">{text}</p>

                                </div>
                                <div className={`w-1 bg-[#E6E6E6] absolute right-3.5 top-7.5 ${i === 3 ? "h-0" : "h-full"}`}></div>
                                <div className="right-0 step-line2">
                                    <div className="rounded-full bg-white border border-[#E6E6E6] mx-auto w-8 h-8">
                                        <div className="rounded-full bg-[#999] h-full">

                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* left lines */}

                {/* <div className='max-lg:hidden relative top-14 right-[17px] h-[72px] bg-[#E6E6E6] w-1'>
                </div>
                <div className='max-lg:hidden relative top-40 right-[21px] h-[72px] bg-[#E6E6E6] w-1'>
                </div>
                <div className='max-lg:hidden relative top-[35.8vh] right-[25px] h-[73px] bg-[#E6E6E6] w-1'>
                </div> */}


                {/* right lines */}

                {/* <div className='max-lg:hidden relative top-14 left-[452px] h-[72px] bg-[#E6E6E6] w-1'>
                </div>
                <div className='max-lg:hidden relative top-40 left-[449px] h-[72px] bg-[#E6E6E6] w-1'>
                </div> */}


                {/* Center Image */}
                <div className="flex w-[30%] justify-center items-center">
                    <img
                        alt="how to manage"
                        loading="lazy"
                        width="200"
                        height="404"
                        className="mx-auto"
                        src="https://altcont.fibe.in/wp-content/uploads/2025/01/howtomanage.png"
                    />
                </div>

                {/* Right Column */}
                <div className="mx-auto pt-1 lg:pt-6 w-[35%]">
                    <ul className="grid grid-cols-1 relative stepbar place-content-center processbar">
                        {[
                            {
                                title: 'Monitor Loans',
                                text: 'Keep track of your outstanding balance & repayment history in real-time.'
                            },
                            {
                                title: 'Update Personal Detail',
                                text: 'Update change to your profile, like contact information, for uninterrupted service'
                            },
                            {
                                title: 'Apply for Top-Up Loans:',
                                text: 'Need extra funds? Check your eligibility for a top-up loan & apply instantly.'
                            },
                        ].map(({ title, text }, i) => (
                            <li key={i} className="flex relative">
                                <div className="right-0 step-line2">
                                    <div className="rounded-full bg-white border border-[#E6E6E6] mx-auto w-8 h-8">
                                        <div className="rounded-full bg-[#999] h-full"></div>
                                    </div>
                                </div>
                                <div className={`w-1 bg-[#E6E6E6] absolute left-3.5 top-7.5 ${i === 2 ? "h-0" : "h-full"}`}></div>
                                <div className="m-4 mt-0 ml-0 mb-0 p-3 each-step w-full">
                                    <div className="font-semibold text-lg lg:text-xl mt-0 mb-2 lg:mb-1">{title}</div>
                                    <p className="text-base">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {/* Mobile Layout */}


            <div className="mx-auto pt-1 lg:pt-6 flex flex-col lg:hidden">

                <div className="flex w-full justify-center items-center">
                    <img
                        alt="how to manage"
                        loading="lazy"
                        width="200"
                        height="404"
                        className="mx-auto"
                        src="https://altcont.fibe.in/wp-content/uploads/2025/01/howtomanage.png"
                    />
                </div>
                <ul className="grid grid-cols-1 relative stepbar place-content-center processbar">
                    {[
                        'Open the Fibe App and log in with your registered credentials.',
                        "Navigate to the 'My Loans' or 'Dashboard' section to view all active loans.",
                        'Review your EMI amounts, due dates and the repayment schedule.',
                        'Use app to make your EMI payments  seamlessly through net banking,  UPI or debit card.',
                        'Keep track of your outstanding balance & repayment history in real-time.',
                        'Update change to your profile, like contact information, for uninterrupted service',
                        'Need extra funds? Check your eligibility for a top-up loan & apply instantly.'
                    ].map((text, i) => (
                        <li key={i} className="flex relative">
                            <div className="right-0">
                                <div className="rounded-full bg-white border border-[#E6E6E6] mt-3 mx-auto w-8 h-8">
                                    <div className="rounded-full bg-[#999] h-full"></div>
                                </div>
                            </div>
                            <div className={`w-1 bg-[#E6E6E6] absolute left-3.5 top-[5.2vh] ${i === 6 ? "h-0" : "h-full"}`}></div>
                            <div className="m-4 mt-0 ml-0 mb-0 p-3 each-step w-full">
                                <p className="text-[#5e5e5e]">{text}</p>
                            </div>
                        </li>
                    ))}
                </ul>



            </div>
        </section>
    );
};

export default HowToManage;
