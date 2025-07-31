'use client';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';


const Footer = () => {
    const [phone, setPhone] = useState('');
    const [visible, setVisible] = useState(false);
    

    const scrollingRef = useRef(false); // <-- NEW: track if scrolling to top

    const handleChange = (e) => {
        const value = e.target.value;
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length <= 10) {
            setPhone(digitsOnly);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollingRef.current) return; // <-- ignore scroll updates while scrolling to top

            const scrollThreshold = window.innerHeight;
            setVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        scrollingRef.current = true; // <-- set flag

        setVisible(true); // make visible immediately

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Wait for scroll to complete (typically 500–1000ms for smooth scroll)
        setTimeout(() => {
            scrollingRef.current = false; // <-- reset flag
            setVisible(true); // optionally hide after scroll to top, or check `scrollY`
        }, 800);
    }


    const handleClickPlay = () => {
        window.open("https://play.google.com/store/apps/details?id=com.earlysalary.android", "_blank", "noopener,noreferrer");
    };

    const handleClickApp = () => {
        window.open("https://apps.apple.com/in/app/fibe-instant-personal-loan-app/id1094602630", "_blank", "noopener,noreferrer");
    };


    return (
        <div className='mt-2'>
            <div className='flex justify-center items-center'>
                <button onClick={handleClick} className='bg-black text-white mx-auto flex justify-center items-center rounded-[100%] w-[80px] h-[80px] text-xl hover:cursor-pointer'>
                    <img src="https://www.fibe.in/icons/arrowup.svg" alt="up-arrow" width={15} height={16} />
                </button>
            </div>
            <div className='bg-black h-full mt-[-40px] shadow-lg flex flex-col text-white max-lg:px-4'>
                <div className='bg-[#323232] rounded-lg mt-[40px] h-full pb-10'>
                    <div className='flex flex-col ml-6 mt-5'>
                        <div className="flex items-center gap-2">
                            <span className='font-semibold text-white text-lg'>Useful Links</span>
                            <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
                        </div>
                        <div className="max-lg:grid-cols-1 grid grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto_auto] items-stretch mt-4">
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Products</h1>
                                <Link href={"/"} className='hover:text-white'>Instant Cash Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Personal Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Loan Against Mutual funds</Link>
                                <Link href={"/"} className='hover:text-white'>Fibe axis Bank Credit Card</Link>
                                <Link href={"/"} className='hover:text-white'>Personal Loan App</Link>
                                <Link href={"/"} className='hover:text-white'>Instant Cash Loan App</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>

                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Fibe EMIS</h1>
                                <Link href={"/"} className='hover:text-white'>Buy Now Pay Later</Link>
                                <Link href={"/"} className='hover:text-white'>Education Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Medical Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Solar Loan</Link>
                                <h1 className='mt-4 mb-2 text-white font-semibold'>Financial Wellness</h1>
                                <Link href={"/"} className='hover:text-white'>Salary Advance</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>About Company</h1>
                                <Link href={"/"} className='hover:text-white'>About Us</Link>
                                <Link href={"/"} className='hover:text-white'>Career</Link>
                                <Link href={"/"} className='hover:text-white'>Contact US</Link>
                                <Link href={"/"} className='hover:text-white'>Meet the Team</Link>
                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Resources</h1>
                                <Link href={"/"} className='hover:text-white'>Blogs</Link>
                                <Link href={"/"} className='hover:text-white'>Financial Dictionary</Link>
                                <Link href={"/"} className='hover:text-white'>News & Media</Link>
                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1>Download The App</h1>
                                <button onClick={handleClickApp} className='my-1 flex gap-2 justify-center items-center w-[80vw] lg:w-96 py-2 rounded-lg font-medium bg-white text-black hover:cursor-pointer hover:text-white hover:bg-[#323232] hover:border hover:border-white group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none" className="fill-black group-hover:fill-white"><path d="M11.21 8.432c-.02-2.041 1.705-3.035 1.784-3.081-.976-1.397-2.491-1.588-3.022-1.603-1.273-.132-2.506.747-3.153.747-.662 0-1.66-.734-2.734-.714-1.385.022-2.679.807-3.39 2.027-1.465 2.486-.37 6.14 1.032 8.15.702.983 1.523 2.084 2.596 2.044 1.051-.042 1.443-.656 2.712-.656 1.256 0 1.625.656 2.72.632 1.128-.018 1.837-.989 2.515-1.982.812-1.128 1.138-2.239 1.15-2.296-.027-.009-2.189-.82-2.21-3.268Z"></path><path d="M9.142 2.592c.565-.694.952-1.635.845-2.592-.817.036-1.841.555-2.429 1.232-.523.597-.988 1.577-.867 2.496.918.067 1.86-.454 2.451-1.136Z"></path></svg>
                                    <span>Download on App Store</span>
                                </button>
                                <button onClick={handleClickPlay} className='my-1 flex gap-2 justify-center items-center w-[80vw] lg:w-96 py-2 rounded-lg font-medium bg-white text-black hover:cursor-pointer hover:text-white hover:bg-[#323232] hover:border hover:border-white group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" className="fill-black group-hover:fill-white"><path d="m9.037 7.413 2.291-2.267L2.44.195c-.33-.184-.63-.226-.884-.174l7.482 7.392ZM.92.547a1.5 1.5 0 0 0-.1.56v13.781c0 .215.036.398.098.556l7.534-7.457L.921.547ZM9.036 8.563l-7.49 7.412c.256.056.559.014.892-.172l8.905-4.962-2.307-2.278ZM14.835 7.095l-2.765-1.54-2.453 2.429 2.47 2.44 2.748-1.53c.889-.494.889-1.304 0-1.799Z"></path></svg>
                                    <span>Download on Play Store</span>
                                </button>
                                <div className='mt-2'>
                                    Follow us on :
                                </div>
                                <div className='flex gap-3'>
                                    <Link href={"https://www.facebook.com/Fibe.IN/"} target='_blank' className='w-10 h-10 rounded-lg bg-white flex items-center justify-center group hover:bg-[#323232] hover:border hover:border-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-black group-hover:fill-white"><path d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18A26.065 26.065 0 0 0 14.693 2C11.98 2 10 3.657 10 6.699V9H7v4l3-.001V22h4v-9.003l3.066-.001L17.525 9z"></path></svg>
                                    </Link>
                                    <Link href={"https://twitter.com/FibeIndia"} target='_blank' className='w-10 h-10 rounded-lg bg-white flex items-center justify-center group hover:bg-[#323232] hover:border hover:border-white'>
                                        <svg fill="none" height="40" viewBox="0 0 41 40" width="41" xmlns="http://www.w3.org/2000/svg" className="fill-black group-hover:fill-white"><clipPath id="a"><path d="m7.3335 7h26v26.0009h-26z"></path></clipPath><rect fill="#fff" height="40" rx="4" width="40" x=".333496"></rect><g clipPath="url(#a)"><path d="m7.3335 19.9992c-.00341-7.1446 5.8097-12.96517 12.9184-12.99905 7.2194-.03434 13.1082 5.83725 13.0816 13.05575-.0261 7.0575-5.7765 13.04-13.1878 12.9438-7.0782-.0917-12.80697-5.8495-12.8122-13.0005zm11.93 1.6299c.0262.0305.0469.0523.0648.0762 1.4336 1.913 2.8675 3.826 4.2995 5.7401.0425.0571.0857.0812.1587.0812 1.4705-.0023 2.9409-.0018 4.4116-.0021.0311 0 .0623-.0045.103-.0077-.0207-.0314-.0323-.0507-.0457-.0685-.9581-1.2716-1.9166-2.5431-2.8745-3.8152-1.1718-1.556-2.3428-3.1126-3.516-4.6674-.0462-.0612-.045-.0944.0075-.1504.6624-.7031 1.3217-1.4092 1.9826-2.114 1.1998-1.2794 2.4003-2.5581 3.6004-3.8373.1128-.1201.2242-.2415.3547-.3823-.0612 0-.0973 0-.1337 0-.3222 0-.6445.0068-.9663-.0034-.1339-.0043-.2231.0391-.3129.1355-.6552.7048-1.3149 1.4054-1.9744 2.1061-.9528 1.0124-1.9068 2.0239-2.8606 3.0357-.1053.1117-.2115.2226-.3168.3334-.0152-.0139-.0218-.0182-.0261-.0241-1.3766-1.8277-2.7535-3.6552-4.128-5.4845-.056-.0746-.1149-.101-.2076-.101-1.4666.003-2.9334.0021-4.4.0023-.0362 0-.0726.0032-.1255.0059 2.1133 2.8049 4.2153 5.5952 6.3204 8.3892-2.1015 2.2098-4.203 4.4195-6.3218 6.6475.4487 0 .8653.0016 1.2819-.0027.0378-.0005.083-.0307.1112-.0601.2545-.2649.5058-.533.7582-.8 1.0907-1.1534 2.1816-2.3064 3.272-3.4601.4917-.5203.9824-1.0415 1.4837-1.5725z" fill="#323232"></path><path d="m19.2634 21.6284c-.501.5313-.9917 1.0525-1.4836 1.5726-1.0905 1.1536-2.1814 2.3066-3.272 3.4601-.2525.2669-.5038.5351-.7582.8-.0282.0293-.0735.0598-.1112.06-.4167.0043-.8335.0028-1.282.0028 2.1188-2.228 4.2204-4.4378 6.3219-6.6475-2.105-2.794-4.2072-5.5841-6.3205-8.3892.0532-.0025.0894-.006.1255-.006 1.4666-.0002 2.9334.0007 4.4-.0022.0928 0 .1517.0263.2076.1009 1.3745 1.8293 2.7515 3.6568 4.128 5.4845.0046.0059.0112.0103.0262.0241.1055-.1109.2115-.2217.3167-.3333.9538-1.0118 1.9076-2.0233 2.8607-3.0358.6595-.7006 1.3192-1.4013 1.9744-2.106.0898-.0965.1789-.1399.3129-.1356.3218.0103.6442.0034.9662.0034h.1338c-.1306.1408-.2422.262-.3548.3823-1.2001 1.2792-2.4006 2.5582-3.6004 3.8374-.6608.7047-1.3201 1.4108-1.9826 2.114-.0527.0559-.0536.0894-.0075.1503 1.1735 1.5548 2.3444 3.1115 3.5161 4.6674.9578 1.2719 1.9164 2.5434 2.8744 3.8153.0135.0177.0248.0371.0457.0685-.0407.0031-.0718.0077-.103.0077-1.4704.0004-2.9409-.0002-4.4115.002-.0733 0-.1162-.0241-.1588-.0812-1.4322-1.9141-2.8658-3.8271-4.2994-5.7401-.018-.0238-.0387-.0454-.0648-.0761zm-4.9574-8.167c.0348.0496.0551.0803.0771.1094.345.455.6907.9096 1.0354 1.3649 1.3425 1.7731 2.6844 3.5467 4.0266 5.3201 1.5566 2.0569 3.1135 4.1134 4.6681 6.1719.0421.0557.0823.0746.1492.0744.667-.0023 1.334-.0014 2.001-.0016.0279 0 .0557-.0036.0855-.0057-.0046-.0175-.0046-.0259-.0084-.0311-.3989-.5283-.7978-1.0564-1.1969-1.5844-1.5598-2.064-3.1203-4.1275-4.6797-6.192-1.2949-1.7142-2.5884-3.4294-3.8812-5.1452-.0457-.0605-.096-.0823-.1717-.0821-.6632.0028-1.3265.0016-1.9897.0016-.03 0-.0602 0-.115 0z" fill="#fff"></path><path d="m14.3064 13.4616h.1151c.6631 0 1.3264.0011 1.9896-.0016.0755-.0003.126.0216.1717.0821 1.2928 1.7158 2.5866 3.4309 3.8812 5.1452 1.5594 2.0644 3.1196 4.1279 4.6797 6.1919.3991.5281.7982 1.0561 1.1969 1.5844.0041.0052.0038.0136.0084.0312-.0298.002-.0578.0056-.0855.0056-.667.0003-1.334-.0006-2.001.0016-.0669 0-.1071-.0186-.1492-.0743-1.5546-2.0586-3.1115-4.115-4.6681-6.172-1.3422-1.7733-2.6841-3.5469-4.0265-5.3201-.3448-.4552-.6905-.9098-1.0355-1.3649-.022-.0291-.0423-.0598-.077-.1094z" fill="#323232"></path></g></svg>
                                    </Link>
                                    <Link href={"https://www.instagram.com/fibe.india/?hl=en"} target='_blank' className='w-10 h-10 rounded-lg bg-white flex items-center justify-center group hover:bg-[#323232] hover:border hover:border-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-black group-hover:fill-white"><path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path></svg>
                                    </Link>
                                    <Link href={"https://www.linkedin.com/company/fibe-in/"} target='_blank' className='w-10 h-10 rounded-lg bg-white flex items-center justify-center group hover:bg-[#323232] hover:border hover:border-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-black group-hover:fill-white"><path d="M8.643 4A2.641 2.641 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4zm12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768 2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11zm-15.172.31V26h4.56V11.31h-4.56z"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Legal */}
                <div className='bg-[#323232] rounded-lg mt-[40px] h-full pb-10'>
                    <div className='flex flex-col ml-6 mt-5'>
                        <div className="flex items-center gap-2">
                            <span className='font-semibold text-white text-lg'>Legal</span>
                            <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
                        </div>
                        <div className="max-lg:grid-cols-1 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch mt-4">
                            <div className='flex flex-col text-[#dedede] gap-2'>

                                <Link href={"/"} className='hover:text-white'>Fair Practices Codes</Link>
                                <Link href={"/"} className='hover:text-white'>Terms And Conditions</Link>
                                <Link href={"/"} className='hover:text-white'>Amazon pay giftcards T&C</Link>
                                <Link href={"/"} className='hover:text-white'>Promotioal T&Cs for HRMS Tie-ups</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>

                                <Link href={"/"} className='hover:text-white'>Refer & Earn T&C</Link>
                                <Link href={"/"} className='hover:text-white'>Privacy Policy</Link>
                                <Link href={"/"} className='hover:text-white'>Disclaimer</Link>
                                <Link href={"/"} className='hover:text-white'>Disclosure</Link>
                                <Link href={"/"} className='hover:text-white'>Regulatory Disclosures</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>

                                <Link href={"/"} className='hover:text-white'>Vigil Mechanism Policy</Link>
                                <Link href={"/"} className='hover:text-white'>Moratorium Policy</Link>
                                <Link href={"/"} className='hover:text-white'>Moratorium Terms</Link>
                                <Link href={"/"} className='hover:text-white'>FACE - Code of Conduct</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>

                                <Link href={"/"} className='hover:text-white'>Grievance Redressal Policy</Link>
                                <Link href={"/"} className='hover:text-white'>Our Lending Partners</Link>

                            </div>


                        </div>

                    </div>

                </div>

                {/* Resources */}
                <div className='bg-[#323232] rounded-lg mt-[40px] h-full pb-10'>
                    <div className='flex flex-col ml-6 mt-5'>
                        <div className="flex items-center gap-2">
                            <span className='font-semibold text-white text-lg'>Resources</span>
                            <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
                        </div>
                        <div className="max-lg:grid-cols-1 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch mt-4">
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Calculators</h1>
                                <Link href={"/"} className='hover:text-white'>Personal Loan EMI Calculator</Link>
                                <Link href={"/"} className='hover:text-white'>Instant Loan EMI Calculator</Link>
                                <Link href={"/"} className='hover:text-white'>Eligibilty Calculator</Link>
                                <Link href={"/"} className='hover:text-white'>Check Credit Score</Link>
                                <Link href={"/"} className='hover:text-white'>Personal Loan Interest Rate</Link>


                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Personal Loan Eligibilty</h1>
                                <Link href={"/"} className='hover:text-white'>Instant Loan Eligibilty Criterion</Link>
                                <Link href={"/"} className='hover:text-white'>Personal Loan Eligibilty Criterion</Link>
                                <Link href={"/"} className='hover:text-white'>Document Required for Instant Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Document Required for Personal Loan</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Personal Loan By Salary</h1>
                                <Link href={"/"} className='hover:text-white'>20000 Salary Loan</Link>
                                <Link href={"/"} className='hover:text-white'>30000 Salary Loan</Link>
                                <Link href={"/"} className='hover:text-white'>40000 Salary Loan</Link>
                                <Link href={"/"} className='hover:text-white'>50000 Salary Loan</Link>




                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 text-white font-semibold'>Credit Card</h1>
                                <Link href={"/"} className='hover:text-white'>Cashback Credit Card</Link>
                                <Link href={"/"} className='hover:text-white'>Free Credit Card</Link>
                                <Link href={"/"} className='hover:text-white'>Card Eligibility Criterion</Link>
                                <Link href={"/"} className='hover:text-white'>Document required for Credit Card</Link>




                            </div>





                        </div>
                        <div className="max-lg:grid-cols-1 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch mt-4">
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 mt-5 text-white font-semibold' > Types of Loan</h1 >

                                <Link href={"/"} className='hover:text-white'>Loan for Salaried Professional</Link>
                                <Link href={"/"} className='hover:text-white'>Travel Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Digital Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Short Term Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Long Term Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Wedding Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Medical Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Secured Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Emergency Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Quick Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Small Personal Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Personal Loan Application Process</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 mt-5 text-white font-semibold' > Personal Loan By Amount</h1 >

                                <Link href={"/"} className='hover:text-white'>50000 Loan</Link>
                                <Link href={"/"} className='hover:text-white'>60000 Loan</Link>
                                <Link href={"/"} className='hover:text-white'>70000 Loan</Link>
                                <Link href={"/"} className='hover:text-white'>80000 Loan</Link>
                                <Link href={"/"} className='hover:text-white'>90000 Loan</Link>
                                <Link href={"/"} className='hover:text-white'>1 lakh Loan</Link>
                                <Link href={"/"} className='hover:text-white'>2 lakh Loan</Link>
                                <Link href={"/"} className='hover:text-white'>3 lakh Loan</Link>
                                <Link href={"/"} className='hover:text-white'>4 lakh Loan</Link>
                                <Link href={"/"} className='hover:text-white'>5 lakh Loan</Link>
                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>
                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 mt-5 text-white font-semibold' >Blogs</h1 >

                                <Link href={"/"} className='hover:text-white'>Foreclosure Charges For Personal Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Check Personal Loan Statement</Link>
                                <Link href={"/"} className='hover:text-white'>What is Loan Account Number?</Link>
                                <Link href={"/"} className='hover:text-white'>Check Loan Status Using Pan Card</Link>
                                <Link href={"/"} className='hover:text-white'>Non-Payment of Personal Loan</Link>
                                <Link href={"/"} className='hover:text-white'>Check Bank Statements Online</Link>
                                <Link href={"/"} className='hover:text-white'>Bonus Calculation On Salary</Link>

                            </div>
                            <div className="flex justify-center items-stretch mx-4">
                                <div className="w-px bg-gray-600 h-full"></div>
                            </div>
                            <div className="lg:hidden flex justify-stretch items-center my-4">
                                <div className="h-px bg-gray-600 w-[90%]"></div>
                            </div>

                            <div className='flex flex-col text-[#dedede] gap-2'>
                                <h1 className='mb-4 mt-5 text-white font-semibold' >Financial Dictionary</h1 >

                                <Link href={"/"} className='hover:text-white'>Interest Rate</Link>
                                <Link href={"/"} className='hover:text-white'>Credit Line vs Credit Limit</Link>
                                <Link href={"/"} className='hover:text-white'>Grace Period</Link>
                                <Link href={"/"} className='hover:text-white'>NACH</Link>
                                <Link href={"/"} className='hover:text-white'>Late fee</Link>
                                <Link href={"/"} className='hover:text-white'>Pre Payment</Link>
                                <Link href={"/"} className='hover:text-white'>Amount Due</Link>
                                <Link href={"/"} className='hover:text-white'>Pay off</Link>

                            </div>
                        </div>

                    </div>

                </div>

                {/* Certificates */}
                <div className='bg-[#323232] rounded-lg mt-[40px] h-full pb-10'>
                    <div className='flex flex-col ml-6 mt-5'>
                        <div className="flex items-center gap-2">
                            <span className='font-semibold text-white text-lg'>Fibe Certifications</span>
                            <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="..." />
                            </svg>
                        </div>
                        <div className="flex max-lg:flex-col mt-4 gap-4 max-lg:gap-0 items-start">
                            <div className="flex flex-col gap-2 max-lg:gap-0">
                                <span>Security Partner</span>
                                <img className='max-lg:h-20 max-lg:w-32' src="https://www.fibe.in/footer/dss-certification.svg" alt="qrc" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span>ISO 27001 Certified</span>
                                <img className='max-lg:h-20 max-lg:w-32' src="https://www.fibe.in/footer/iso-certification.svg" alt="iso" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span>SOC2 Certified</span>
                                <img className='max-lg:h-20 max-lg:w-32' src="https://www.fibe.in/footer/soc2-certification.svg" alt="soc2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span>Member</span>
                                <img className='max-lg:h-16 max-lg:w-32' src="https://www.fibe.in/footer/face-certification.svg" alt="member" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* last section */}
                <div className='bg-[#323232] rounded-lg mt-[40px] h-full px-4 py-4 lg:py-6 lg:text-center mb-32 max-lg:mb-72`'>
                    <div className='text-xs lg:text-lg'>
                        FIBE is a registered trademark owned by Social Worth Technologies Private Limited and has licensed the same to Earlysalary Services Private Limited (Formerly known as Ashish Securities Private Limited), a wholly-owned subsidiary.
                    </div>
                </div>



            </div>
            {visible &&
                <div className="fixed bottom-0 left-0 w-full max-w-[100vw] max-lg:px-6 bg-[#232222] text-white py-4 lg:py-5 shadow-lg z-50 transition-all duration-300">
                    <div className="w-full mx-auto text-center flex max-lg:flex-col justify-center items-center lg:gap-4 text-xl max-lg:text-sm">
                        <span>Need cash? Get up to ₹5 lakhs instantly</span>
                        <div className="flex gap-0">
                            <input
                                className="bg-white text-black p-3 max-lg:w-52 w-96 border border-gray-300 rounded-l-lg focus:border-[#2e9898] outline-none"
                                type="text"
                                inputMode="numeric"
                                value={phone}
                                onChange={handleChange}
                                placeholder="Enter mobile number"
                                name="contact"
                                id="contact"
                            />
                            <button
                                className="bg-[#2e9898] text-white border border-[#2e9898] px-4 lg:px-8 py-2 font-semibold rounded-r-lg"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Footer





