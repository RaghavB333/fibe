"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavbarForMobile = () => {
    const [showHamburger, setShowHamburger] = useState(false)
    const [animateSidebar, setAnimateSidebar] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null) // State for which dropdown is open

    // Effect for main sidebar animation
    useEffect(() => {
        if (showHamburger) {
            const timer = setTimeout(() => {
                setAnimateSidebar(true);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            setAnimateSidebar(false);
            
            setActiveDropdown(null);
        }
    }, [showHamburger]);

    const handleHamburgerClick = () => {
        setShowHamburger(true);
    };

    const handleCloseSidebar = () => {
        setAnimateSidebar(false);
        const timer = setTimeout(() => {
            setShowHamburger(false);
        }, 300); // Matches sidebar transition duration
        return () => clearTimeout(timer);
    };

    return (
        <>
            {/* Navbar */}
            <nav className='fixed z-[9997] w-full top-0 flex justify-between items-center px-8 bg-gradient-to-t from-[#FFF1F5] to-[#FFF8ED] shadow-lg'>
                <div className='pb-5 pt-4 pl-5 '>
                    <Link href="https://www.fibe.in/">
                        <Image priority width={50} height={50} src="https://www.fibe.in/fibe-india.svg" alt="fibe-logo" />
                    </Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <span className='font-semibold'>Get App</span>
                    <Image priority src="https://www.fibe.in/icons/apple.svg" width={16} height={16} alt='apple logo' />
                    <Image priority src="https://www.fibe.in/icons/google-play.svg" width={16} height={16} alt='playstore logo' className='mt-1' />
                    <Image
                        priority
                        onClick={handleHamburgerClick}
                        src="https://www.fibe.in/icons/humberger.svg"
                        width={22}
                        height={22}
                        alt='hamburger logo'
                        className='cursor-pointer'
                    />
                </div>
            </nav>

            {/* Sidebar + Backdrop */}
            {showHamburger && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={handleCloseSidebar}
                        className={`fixed inset-0 bg-black z-[9998] transition-opacity duration-300 ease-in-out ${animateSidebar ? 'opacity-40' : 'opacity-0'}`}
                    ></div>

                    {/* Sidebar */}
                    <div
                        className={`overflow-y-auto fixed top-0 right-0 h-screen w-[78vw] rounded-l-4xl bg-white z-[9999] shadow-lg transform transition-transform duration-300 ease-in-out ${animateSidebar ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className='p-5 flex flex-col gap-8 font-semibold'>
                            <div className="flex justify-between">
                                <Link href="https://www.fibe.in/">
                                    <Image width={50} height={50} src="https://www.fibe.in/fibe-india.svg" alt="fibe-logo" />
                                </Link>
                                <button
                                    className='mt-2 rounded mr-8'
                                    onClick={handleCloseSidebar}
                                >
                                    <Image width={13} height={13} src="https://www.fibe.in/icons/close.svg" alt="fibe-logo" />
                                </button>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {/* Loans Dropdown */}
                                <button onClick={() => setActiveDropdown(activeDropdown === 'loans' ? null : 'loans')} className='flex items-center gap-2 group cursor-pointer'>
                                    Loans
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="6"
                                            fill="none"
                                            className="stroke-gray-400 mt-1 group-hover:stroke-primary transition"
                                        >
                                            <path d="M1 1l5 4 5-4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`
                                        flex flex-col ml-4 gap-4 font-light overflow-hidden
                                        transition-all duration-300 ease-in-out
                                        ${activeDropdown === "loans" ? 'max-h-[20vh] opacity-100 py-2' : 'max-h-0 opacity-0'}
                                    `}
                                >
                                    <div className='flex gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="4" height="12" x="20" y="4" stroke="#333" strokeWidth="1.5" rx="2" transform="rotate(90 20 4)"></rect><rect width="4" height="12" x="20" y="12" stroke="#333" strokeWidth="1.5" rx="2" transform="rotate(90 20 12)"></rect><rect width="4" height="12" x="16" y="8" stroke="#F8A63F" strokeWidth="1.5" rx="2" transform="rotate(90 16 8)"></rect><rect width="4" height="12" x="17" y="16" stroke="#F8A63F" strokeWidth="1.5" rx="2" transform="rotate(90 17 16)"></rect></svg>
                                        <span>Instant Cash Loan →</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinejoin="round" strokeWidth="1.5" d="M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z"></path><path stroke="#333" strokeLinejoin="round" strokeWidth="1.5" d="M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M9 17c2.254 1.315 3.578 1.345 6 0"></path></svg>
                                        <span>Personal Loan →</span>
                                    </div>
                                </div>

                                {/* Our Offerings Dropdown */}
                                <button onClick={() => setActiveDropdown(activeDropdown === 'offerings' ? null : 'offerings')} className='flex items-center gap-2 group cursor-pointer'>
                                    Our Offerings
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="6"
                                            fill="none"
                                            className="stroke-gray-400 mt-1 group-hover:stroke-primary transition"
                                        >
                                            <path d="M1 1l5 4 5-4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`
                                        flex flex-col ml-4 gap-4 font-light overflow-hidden
                                        transition-all duration-300 ease-in-out
                                        ${activeDropdown === "offerings" ? 'max-h-[60vh] opacity-100 py-2' : 'max-h-0 opacity-0'}
                                    `}
                                >

                                    <div className='font-semibold'>
                                        Newly Launched
                                    </div>
                                    <div className='flex gap-2 ml-2'>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17517_29912)"><path d="M19 2.87988H21C21.5523 2.87988 22 3.30969 22 3.83988V5.75988M21 3.83988C13.0585 9.97558 8.94211 11.6283 2 12.4799M18 10.5599V20.1599C18 21.2203 18.8954 22.0799 20 22.0799C21.1046 22.0799 22 21.2203 22 20.1599V10.5599C22 9.49949 21.1046 8.63988 20 8.63988C18.8954 8.63988 18 9.49949 18 10.5599ZM2 18.2399L2 20.1599C2 21.2203 2.89543 22.0799 4 22.0799C5.10457 22.0799 6 21.2203 6 20.1599L6 18.2399C6 17.1795 5.10457 16.3199 4 16.3199C2.89543 16.3199 2 17.1795 2 18.2399ZM9.99999 14.3999V20.1599C9.99999 21.2203 10.8954 22.0799 12 22.0799C13.1046 22.0799 14 21.2203 14 20.1599V14.3999C14 13.3395 13.1046 12.4799 12 12.4799C10.8954 12.4799 9.99999 13.3395 9.99999 14.3999Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.0001 2.1719C13.0001 2.2871 12.9512 2.39763 12.8644 2.47908C12.7776 2.56053 12.6598 2.60635 12.5371 2.60635H10.6852V3.02332C10.6851 3.40527 10.5507 3.77645 10.303 4.07953C10.0553 4.38263 9.70809 4.6008 9.31501 4.69999L11.7872 7.01968C11.7907 7.05444 11.7907 7.08934 11.7872 7.12396C11.7923 7.16439 11.7923 7.20512 11.7872 7.24555C11.7872 7.36074 11.7383 7.47128 11.6515 7.55273C11.5647 7.63418 11.4469 7.67999 11.3242 7.67999H11.1853C11.1284 7.66268 11.0751 7.63621 11.0278 7.60174L10.963 7.54095L7.24106 3.95286C7.17038 3.87199 7.13117 3.77091 7.12992 3.66619C7.12992 3.42636 7.33717 3.23175 7.59276 3.23175C7.70607 3.23233 7.81519 3.27262 7.89843 3.34476C7.90168 3.35901 7.90168 3.37385 7.89843 3.38825L8.25029 3.70968H8.25013C8.4118 3.83534 8.61424 3.90588 8.82428 3.90952C9.0698 3.90952 9.30541 3.81789 9.47901 3.655C9.65261 3.4921 9.75011 3.27115 9.75011 3.04064V2.60635H7.46318C7.20758 2.60635 7.00018 2.41174 7.00018 2.17191C7.00018 1.93207 7.20758 1.73747 7.46318 1.73747H9.7594V0.868734H7.46318C7.20758 0.868734 7.00018 0.674274 7.00018 0.434292C7.00018 0.194456 7.20758 0 7.46318 0H12.5372C12.7928 0 13.0002 0.19446 13.0002 0.434292C13.0002 0.674274 12.7928 0.868734 12.5372 0.868734H10.6854V1.73747H12.5372C12.6599 1.73747 12.7777 1.78328 12.8645 1.86473C12.9513 1.94618 13.0002 2.05672 13.0002 2.17191L13.0001 2.1719Z" fill="#F8A63F"></path></g><defs><clipPath id="clip0_17517_29912"><rect width="24" height="24.3137" fill="white" transform="translate(0 0.136719)"></rect></clipPath></defs></svg>
                                        <span>Loan against mutual funds →</span>
                                    </div>
                                    <div className='font-semibold'>
                                        Financial Wellness
                                    </div>
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinejoin="round" strokeWidth="1.5" d="M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z"></path><path stroke="#F8A63F" strokeLinejoin="round" strokeWidth="1.5" d="M22 9v6h-4a3 3 0 1 1 0-6h4Z"></path></svg>
                                        <span>Salary Advance →</span>
                                    </div>
                                    <div className='font-semibold'>
                                        Credit Card
                                    </div>
                                    <div className='flex gap-2 ml-2'>
                                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="1.5"><path d="m2 7h20v4h-20z" stroke="#f8a63f" strokeLinejoin="round"></path><path d="m2 7c0-2.20914 1.79086-4 4-4h12c2.2091 0 4 1.79086 4 4v10c0 2.2091-1.7909 4-4 4h-12c-2.20914 0-4-1.7909-4-4z" stroke="#333" strokeLinejoin="round"></path><path d="m8 17h-2" stroke="#f8a63f" strokeLinecap="round"></path></g></svg>
                                        <span>Fibe Axis Bank Credit Card →</span>
                                    </div>
                                    <div className='font-semibold'>
                                        FibeEMIS - But Now Pay Later
                                    </div>
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M12 11.143v6.079M15 14.182H9"></path><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M8 6.078V5.065c0-1.679 1.343-3.04 3-3.04h2c1.657 0 3 1.361 3 3.04v1.013M6 22.287h12c2.21 0 4-1.814 4-4.052V10.13c0-2.238-1.79-4.052-4-4.052H6c-2.21 0-4 1.814-4 4.052v8.105c0 2.238 1.79 4.052 4 4.052Z"></path></svg>
                                        <span>Medical Loan →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M10.317 3.632c-2.124-1.507-5.104-2.19-7.323-2.445C1.896 1.062 1 1.991 1 3.137v11.412c0 1.145.896 2.075 1.994 2.2 2.219.254 5.2.937 7.323 2.445.408.29.958.29 1.366 0 2.124-1.508 5.104-2.19 7.323-2.445 1.098-.125 1.994-1.055 1.994-2.2V3.136c0-1.146-.896-2.075-1.994-1.95-2.219.254-5.2.938-7.323 2.445-.408.29-.958.29-1.366 0Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M3.994 6.457c1.266.199 2.678.529 4 1.047m-4 3.005c.64.1 1.316.235 2 .41m5-5.679v12.664"></path></svg>
                                        <span>Education Loan →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="none"><path d="M3.76651 8H19.7665M18.7665 12V18C18.7665 19.1046 17.8711 20 16.7665 20H13.7665M4.76651 12V18C4.76651 19.1046 5.66194 20 6.76651 20H10.2665M5.00258 12H18.5304C20.0172 12 20.9842 10.4354 20.3193 9.10557L18.3193 5.10557C17.9805 4.428 17.288 4 16.5304 4H7.00258C6.24504 4 5.55251 4.428 5.21373 5.10557L3.21373 9.10557C2.54882 10.4354 3.51582 12 5.00258 12ZM9.96651 4H13.5665L14.7665 12H8.76651L9.96651 4Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.8 18V14.5H10.5V18" stroke="#F8A63F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span>Solar Loan →</span>
                                    </div>

                                </div>

                                {/* Loan Calcs */}
                                <button onClick={() => setActiveDropdown(activeDropdown === 'LC' ? null : 'LC')} className='flex items-center gap-2 group cursor-pointer'>
                                    Loan Calculators
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="6"
                                            fill="none"
                                            className="stroke-gray-400 mt-1 group-hover:stroke-primary transition"
                                        >
                                            <path d="M1 1l5 4 5-4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`
                                        flex flex-col ml-4 gap-4 font-light overflow-hidden
                                        transition-all duration-300 ease-in-out
                                        ${activeDropdown === "LC" ? 'max-h-[60vh] opacity-100 py-2' : 'max-h-0 opacity-0'}
                                    `}
                                >
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M8 6h8m4 12V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z"></path><path fill="#F8A63F" d="M8.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
                                        <span>Personal Loan EMI Calculator →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path stroke="#333" strokeWidth="1.5" d="M17 1H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z"></path><path stroke="#F8A63F" strokeWidth="1.5" d="M15 9a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2ZM7 5a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Z"></path></svg>
                                        <span>Instant Loan EMI Calculator →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M22 10v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M5 12h1a2 2 0 0 0 2-2V9a2 2 0 1 1 4 0v6a2 2 0 1 0 4 0v-1a2 2 0 0 1 2-2h1m3-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
                                        <span>Eligibility Calculator →</span>
                                    </div>
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 8a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V10a2 2 0 0 1 2-2ZM4 16a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2ZM12 12a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 2h2a1 1 0 0 1 1 1v2m-1-2c-7.941 6.391-12.058 8.113-19 9"></path></svg>
                                        <span>Check Credit Card Score →</span>
                                    </div>



                                </div>

                                {/* Learn */}

                                <button onClick={() => setActiveDropdown(activeDropdown === 'learn' ? null : 'learn')} className='flex items-center gap-2 group cursor-pointer'>
                                    Learn
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="6"
                                            fill="none"
                                            className="stroke-gray-400 mt-1 group-hover:stroke-primary transition"
                                        >
                                            <path d="M1 1l5 4 5-4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`
                                        flex flex-col ml-4 gap-4 font-light overflow-hidden
                                        transition-all duration-300 ease-in-out
                                        ${activeDropdown === "learn" ? 'max-h-[30vh] opacity-100 py-2' : 'max-h-0 opacity-0'}
                                    `}
                                >
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeWidth="1.5" d="M16 4h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1m8 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m8 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M8 10h8m-8 4h8m-8 4h4"></path></svg>
                                        <span>Blogs →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeWidth="1.5" d="M20 16H7a3 3 0 0 0-3 3m0 0a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M8 7h8m-8 4h4"></path></svg>
                                        <span>Financial Dictionary →</span>
                                    </div>



                                </div>

                                {/* About us */}
                                <button onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')} className='flex items-center gap-2 group cursor-pointer'>
                                    About Us
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="6"
                                            fill="none"
                                            className="stroke-gray-400 mt-1 group-hover:stroke-primary transition"
                                        >
                                            <path d="M1 1l5 4 5-4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`
                                        flex flex-col ml-4 gap-4 font-light overflow-hidden
                                        transition-all duration-300 ease-in-out
                                        ${activeDropdown === "about" ? 'max-h-[60vh] opacity-100 py-2' : 'max-h-0 opacity-0'}
                                    `}
                                >
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeWidth="1.5" d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M8 10h8m-8 4h4"></path></svg>
                                        <span>About Fibe →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M12 19v3m0 0H9m3 0h3m-9-3h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4Z"></path><path stroke="#F8A63F" strokeWidth="1.5" d="M14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM8 13.5A1.5 1.5 0 0 1 9.5 12h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 8 13.5Z"></path></svg>
                                        <span>Careers →</span>
                                    </div>
                                    <div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12h10M9 7h6M9 17h6"></path></svg>
                                        <span>News →</span>
                                    </div><div className='flex gap-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M2 12V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H8M6 8l3.781 2.52a4 4 0 0 0 4.438 0L18 8"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M2 15h6m-6 3h6"></path></svg>
                                        <span>Contact Us →</span>
                                    </div>



                                </div>
                            </div>

                        </div>

                    </div>

                </>
            )}
        </>
    )
}

export default NavbarForMobile