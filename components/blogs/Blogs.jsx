import React from 'react'
const Blogs = () => {
    return (
        <div className='items-center w-full mb-20 flex flex-col mt-32'>

            <h1 className='text-3xl font-semibold text-center mb-10 mr-3'>
                Fibe Blogs
            </h1>
            <div className='flex max-lg:flex-col px-6 lg:px-10 gap-8 mb-10'>
                <div className=' flex flex-col max-lg:w-full  w-[45vw] border border-gray-300 hover:border-[#079f9f] rounded-lg h-full p-5'>
                    <img width={450} height={450} className='object-cover h-full w-full max-lg:h-44 lg:max-h-[320px] rounded-lg' src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2025%2F04%2FWhat-is-a-Pension-Plan-and-How-It-Works.jpg&w=384&q=100" alt="" />
                    <div className='flex gap-4 items-center mt-1 lg:ml-4'>
                        <div className='text-[#079f9f] font-[550]'>Banking</div>
                        <div className='w-px h-6 bg-gray-200'></div>
                        <div>22 Jul 2025</div>
                    </div>
                    <div className='lg:ml-4 my-4 text-lg font-semibold'>
                        How to avoid KYC Fraud While Staying Complaint?
                    </div>
                    <div className='text-gray-400 font-light lg:ml-4'>
                        KYC details are like your digital passport. But with scams and phishing on the rise, just doing KYC isn&apos;t enough. You need to follow a safe KYC process to keep your data  …
                    </div>

                    <div className='flex justify-between lg:ml-4 mt-2'>
                        <span className='text-[#079f9f] font-semibold'>Read More</span>
                        <span className='text-gray-400'>3 mins read</span>
                    </div>

                </div>
                <div className='w-1/2 flex flex-col gap-[6%] max-lg:gap-8 max-lg:w-full'>
                    <div className='h-[47%] w-full border border-gray-300 hover:border-[#079f9f] rounded-lg p-5 flex max-lg:flex-col '>
                        <div>
                            <img width={150} height={150} className='w-full lg:min-w-[15vw] lg:h-full object-cover lg:w-[215px] max-lg:h-44' src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F05%2FWhat-is-personal-loan-sanction-letter.png&w=384&q=100" alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-4 items-center mt-1 lg:ml-4'>
                                <div className='text-[#079f9f] font-[550]'>Banking</div>
                                <div className='w-px h-6 bg-gray-200'></div>
                                <div>22 Jul 2025</div>
                            </div>
                            <div className='lg:ml-4 my-4 text-lg font-semibold'>
                                How to Check, Update and Troubleshoot Your KYC Easily
                            </div>
                            <div className='text-gray-400 font-light lg:ml-4'>
                                Your KYC, or Know Your Customer status, is like your entry pass to most financial services. Want to start a mutual fund SIP or  …
                            </div>

                            <div className='flex justify-between lg:ml-4 mt-2'>
                                <span className='text-[#079f9f] font-semibold'>Read More</span>
                                <span className='text-gray-400'>3 mins read</span>
                            </div>
                        </div>

                    </div>
                    <div className='h-[47%] w-full border border-gray-300 hover:border-[#079f9f] rounded-lg p-5 flex max-lg:flex-col'>
                        <div>
                            <img width={150} height={150} className='w-full lg:min-w-[15vw] h-full object-cover lg:w-[215px] max-lg:h-44' src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F08%2FWhat-is-Video-KYC-How-to-prepare-for-a-V-KYC-for-Personal-Loan-application.jpg&w=384&q=100" alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-4 items-center mt-1 lg:ml-4'>
                                <div className='text-[#079f9f] font-[550]'>Banking</div>
                                <div className='w-px h-6 bg-gray-200'></div>
                                <div>22 Jul 2025</div>
                            </div>
                            <div className='lg:ml-4 my-4 text-lg font-semibold'>
                                Reasons Why KYC is Important for Investments and Loans
                            </div>
                            <div className='text-gray-400 font-light lg:ml-4'>
                                Your KYC status matters more than you think. It decides how easily you can invest or take a loan. It may look like a small …
                            </div>

                            <div className='flex justify-between lg:ml-4 mt-2'>
                                <span className='text-[#079f9f] font-semibold'>Read More</span>
                                <span className='text-gray-400'>3 mins read</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <button className='bg-[#079f9f] hover:bg-[#038787] flex justify-center items-center max-lg:w-[65vw] w-[23vw] h-14 lg:h-16 text-white font-semibold rounded-lg text-xl mt-5 hover:cursor-pointer'>
                    Explore all blogs
                </button>
            </div>
        </div>
    )
}

export default Blogs
