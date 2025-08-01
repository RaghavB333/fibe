"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavbarForTouchLargeScreens from './NavbarForTouchLargeScreens';
import NavbarForMobile from './NavbarForMobile';
import { usePathname } from 'next/navigation';



const Navbar = () => {

    const [navType, setNavType] = useState("desktop"); // "desktop" | "touchLarge" | "mobile"
    const pathName = usePathname();

    useEffect(() => {
        const check = () => {
            const isTouch = window.matchMedia('(pointer: coarse)').matches;
            const width = window.innerWidth;

            if (width < 1024) {
                setNavType("mobile");
            } else if (isTouch) {
                setNavType("touchLarge"); // iPad Pro etc.
            } else {
                setNavType("desktop"); // laptops
            }
        };

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);



    const handleClickPlay = () => {
        window.open("https://play.google.com/store/apps/details?id=com.earlysalary.android", "_blank", "noopener,noreferrer");
    };

    const handleClickApp = () => {
        window.open("https://apps.apple.com/in/app/fibe-instant-personal-loan-app/id1094602630", "_blank", "noopener,noreferrer");
    };

    return (
        <>
            {
                navType === "desktop" &&
                <nav className='max-lg:hidden fixed flex z-[9001] w-full top-0 bg-gradient-to-t from-[#FFF1F5] to-[#FFF8ED] px-2 py-3 justify-between shadow-lg'>

                    <Link href={"/"}><img src="https://www.fibe.in/fibe-india.svg" alt="fibe-logo" /></Link>
                    <ul className='flex items-center gap-6 font-semibold text-lg'>
                        <li className="group">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <button
                                    className={`hover:cursor-pointer ${pathName === "/instant-cash-loan" || pathName === "/personal-loan"
                                            ? "text-[#079f9f]"
                                            : "text-black"
                                        }`}
                                >
                                    Loans
                                </button>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="6"
                                    fill="none"
                                    className="stroke-gray-500 mt-1"
                                >
                                    <path d="M1 1L6 5L11 1" strokeWidth="1.5" />
                                </svg>
                                <ul className="absolute right-[39vw] mt-50 bg-white rounded-xl shadow-xl z-[9999] w-96 p-4 space-y-4 text-sm transform scale-y-0 opacity-0 origin-top lg:transition duration-300 lg:duration-150 ease-out lg:ease-in-out lg:origin-top  lg:shadow-lg group-hover:scale-y-100 group-hover:opacity-100">

                                    {/* Item 1 - Instant Cash Loan */}
                                    <a href='/instant-cash-loan' className="group/item flex items-start gap-3 p-2 rounded-lg transition-all cursor-pointer hover:bg-[rgb(254,249,235)] hover:border border-gray-300">

                                        {/* Icon */}
                                        <div className="text-orange-500 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="4" height="12" x="20" y="4" stroke="#333" strokeWidth="1.5" rx="2" transform="rotate(90 20 4)"></rect><rect width="4" height="12" x="20" y="12" stroke="#333" strokeWidth="1.5" rx="2" transform="rotate(90 20 12)"></rect><rect width="4" height="12" x="16" y="8" stroke="#F8A63F" strokeWidth="1.5" rx="2" transform="rotate(90 16 8)"></rect><rect width="4" height="12" x="17" y="16" stroke="#F8A63F" strokeWidth="1.5" rx="2" transform="rotate(90 17 16)"></rect></svg>
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <div className="font-medium text-black flex justify-between items-center">
                                                Instant Cash Loan
                                                <span className="text-black mr-[10vw] inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                    →
                                                </span>



                                            </div>
                                            <p className='text-gray-500 font-extralight text-[12px] mt-1'>Get quick cash loans of up to ₹5 lacs in 2 minutes</p>
                                        </div>
                                    </a>

                                    {/* Item 2 - Personal Loan */}
                                    <a href='/personal-loan' className="group/item flex items-start gap-3 p-2 rounded-lg transition-all cursor-pointer hover:bg-[rgb(254,249,235)] hover:border border-gray-300">
                                        {/* Icon */}
                                        <div className="text-orange-500 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#333" strokeLinejoin="round" strokeWidth="1.5" d="M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z"></path><path stroke="#333" strokeLinejoin="round" strokeWidth="1.5" d="M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M9 17c2.254 1.315 3.578 1.345 6 0"></path></svg>
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <div className="font-medium text-black flex justify-between items-center">
                                                Personal Loan
                                                <span className="text-black mr-[11.5vw] inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                    →
                                                </span>
                                            </div>
                                            <p className='text-gray-500 font-extralight text-[12px] mt-1'>Avail of a Personal Loan at 0 preclosure charges</p>
                                        </div>
                                    </a>
                                </ul>

                            </div>
                        </li>

                        <li className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer">

                                <button className="hover:cursor-pointer">Our Offerings</button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="6"
                                    fill="none"
                                    className="stroke-gray-500 mt-1"
                                >
                                    <path d="M1 1L6 5L11 1" strokeWidth="1.5" />
                                </svg>
                                <ul className="absolute left-[-7vw] mt-[60vh] bg-white rounded-xl shadow-xl z-[9999] w-[40vw] pl-4 py-3 space-y-4 text-sm 
               transform scale-y-0 opacity-0 origin-top lg:transition duration-300 lg:duration-150 ease-out 
               lg:ease-in-out lg:origin-top lg:shadow-lg 
               group-hover:scale-y-100 group-hover:opacity-100 
               grid grid-cols-[1fr_auto_1fr] items-stretch">

                                    {/* Left column */}
                                    <div className="flex flex-col w-full space-y-6 ">
                                        <span className='my-2 text-[14px] font-semibold'>Newly Launched</span>
                                        <Link href={"/"} className='flex hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <div className='mt-2'>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0)">
                                                        <path
                                                            d="M19 2.87988H21C21.5523 2.87988 22 3.30969 22 3.83988V5.75988M21 3.83988C13.0585 9.97558 8.94211 11.6283 2 12.4799M18 10.5599V20.1599C18 21.2203 18.8954 22.0799 20 22.0799C21.1046 22.0799 22 21.2203 22 20.1599V10.5599C22 9.49949 21.1046 8.63988 20 8.63988C18.8954 8.63988 18 9.49949 18 10.5599ZM2 18.2399L2 20.1599C2 21.2203 2.89543 22.0799 4 22.0799C5.10457 22.0799 6 21.2203 6 20.1599L6 18.2399C6 17.1795 5.10457 16.3199 4 16.3199C2.89543 16.3199 2 17.1795 2 18.2399ZM10 14.3999V20.1599C10 21.2203 10.8954 22.0799 12 22.0799C13.1046 22.0799 14 21.2203 14 20.1599V14.3999C14 13.3395 13.1046 12.4799 12 12.4799C10.8954 12.4799 10 13.3395 10 14.3999Z"
                                                            stroke="#333333"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M13.0001 2.1719C13.0001 2.2871 12.9512 2.39763 12.8644 2.47908C12.7776 2.56053 12.6598 2.60635 12.5371 2.60635H10.6852V3.02332C10.6851 3.40527 10.5507 3.77645 10.303 4.07953C10.0553 4.38263 9.70809 4.6008 9.31501 4.69999L11.7872 7.01968C11.7907 7.05444 11.7907 7.08934 11.7872 7.12396C11.7923 7.16439 11.7923 7.20512 11.7872 7.24555C11.7872 7.36074 11.7383 7.47128 11.6515 7.55273C11.5647 7.63418 11.4469 7.67999 11.3242 7.67999H11.1853C11.1284 7.66268 11.0751 7.63621 11.0278 7.60174L10.963 7.54095L7.24106 3.95286C7.17038 3.87199 7.13117 3.77091 7.12992 3.66619C7.12992 3.42636 7.33717 3.23175 7.59276 3.23175C7.70607 3.23233 7.81519 3.27262 7.89843 3.34476C7.90168 3.35901 7.90168 3.37385 7.89843 3.38825L8.25029 3.70968H8.25013C8.4118 3.83534 8.61424 3.90588 8.82428 3.90952C9.0698 3.90952 9.30541 3.81789 9.47901 3.655C9.65261 3.4921 9.75011 3.27115 9.75011 3.04064V2.60635H7.46318C7.20758 2.60635 7.00018 2.41174 7.00018 2.17191C7.00018 1.93207 7.20758 1.73747 7.46318 1.73747H9.7594V0.868734H7.46318C7.20758 0.868734 7.00018 0.674274 7.00018 0.434292C7.00018 0.194456 7.20758 0 7.46318 0H12.5372C12.7928 0 13.0002 0.19446 13.0002 0.434292C13.0002 0.674274 12.7928 0.868734 12.5372 0.868734H10.6854V1.73747H12.5372C12.6599 1.73747 12.7777 1.78328 12.8645 1.86473C12.9513 1.94618 13.0002 2.05672 13.0002 2.17191L13.0001 2.1719Z"
                                                            fill="#F8A63F"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="24" height="24.3137" fill="white" transform="translate(0 0.136719)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Loan against mutual funds</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                    
                                                </div>
                                                <div className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Borrow using mutual funds holdings in minutes</div>

                                            </div>
                                        </Link>
                                        <span>Financial Wellness</span>
                                        <Link href={"/"} className='flex hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <div className='mt-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                                    <path
                                                        stroke="#333"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z"
                                                    />
                                                    <path
                                                        stroke="#F8A63F"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M22 9v6h-4a3 3 0 1 1 0-6h4Z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Salary Advance</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Easy financing for you employees instant cash needs</span>
                                            </div>
                                        </Link>
                                        <span>Credit Card</span>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <div className='mt-2'>

                                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="1.5"><path d="m2 7h20v4h-20z" stroke="#f8a63f" strokeLinejoin="round"></path><path d="m2 7c0-2.20914 1.79086-4 4-4h12c2.2091 0 4 1.79086 4 4v10c0 2.2091-1.7909 4-4 4h-12c-2.20914 0-4-1.7909-4-4z" stroke="#333" strokeLinejoin="round"></path><path d="m8 17h-2" stroke="#f8a63f" strokeLinecap="round"></path></g></svg>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Fibe Axis Bank Credit Card</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Go numberless with Fibe Axis Bank Credit Card</span>
                                            </div>

                                        </Link>
                                    </div>

                                    {/* Vertical separator */}
                                    <div className="flex justify-center items-stretch mx-4">
                                        <div className="w-px bg-gray-300 h-full"></div>
                                    </div>

                                    {/* Right column */}
                                    <div className='flex flex-col gap-4'>
                                        <h4 className='text-[17px] my-2'>
                                            FibeEMIS- Buy Now Pay Later
                                        </h4>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M12 11.143v6.079M15 14.182H9"></path><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M8 6.078V5.065c0-1.679 1.343-3.04 3-3.04h2c1.657 0 3 1.361 3 3.04v1.013M6 22.287h12c2.21 0 4-1.814 4-4.052V10.13c0-2.238-1.79-4.052-4-4.052H6c-2.21 0-4 1.814-4 4.052v8.105c0 2.238 1.79 4.052 4 4.052Z"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Medical Loan</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Access the best of Healthcare on EMIs</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M10.317 3.632c-2.124-1.507-5.104-2.19-7.323-2.445C1.896 1.062 1 1.991 1 3.137v11.412c0 1.145.896 2.075 1.994 2.2 2.219.254 5.2.937 7.323 2.445.408.29.958.29 1.366 0 2.124-1.508 5.104-2.19 7.323-2.445 1.098-.125 1.994-1.055 1.994-2.2V3.136c0-1.146-.896-2.075-1.994-1.95-2.219.254-5.2.938-7.323 2.445-.408.29-.958.29-1.366 0Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M3.994 6.457c1.266.199 2.678.529 4 1.047m-4 3.005c.64.1 1.316.235 2 .41m5-5.679v12.664"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Education Loan</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Fuel your aspirations with the latest upskilling courses on EMIs</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" fill="none"><path d="M3.76651 8H19.7665M18.7665 12V18C18.7665 19.1046 17.8711 20 16.7665 20H13.7665M4.76651 12V18C4.76651 19.1046 5.66194 20 6.76651 20H10.2665M5.00258 12H18.5304C20.0172 12 20.9842 10.4354 20.3193 9.10557L18.3193 5.10557C17.9805 4.428 17.288 4 16.5304 4H7.00258C6.24504 4 5.55251 4.428 5.21373 5.10557L3.21373 9.10557C2.54882 10.4354 3.51582 12 5.00258 12ZM9.96651 4H13.5665L14.7665 12H8.76651L9.96651 4Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.8 18V14.5H10.5V18" stroke="#F8A63F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Solar Loan</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Affordable loans to power your place with Solar Energy</span>
                                            </div>
                                        </Link>
                                    </div>
                                </ul>

                            </div>
                        </li >

                        {/* Loan Calculators */}

                        <li className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer">

                                <button className="hover:cursor-pointer">Loan Calculators</button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="6"
                                    fill="none"
                                    className="stroke-gray-500 mt-1"
                                >
                                    <path d="M1 1L6 5L11 1" strokeWidth="1.5" />
                                </svg>



                                <ul className="absolute left-[-7vw] mt-[30vh] bg-white rounded-xl shadow-xl z-[9999] w-[40vw] pl-4 py-3 space-y-4 text-sm transform scale-y-0 opacity-0 origin-top lg:transition duration-300 lg:duration-150 ease-out lg:ease-in-out lg:origin-top lg:shadow-lg group-hover:scale-y-100 group-hover:opacity-100 grid grid-cols-[1fr_auto_1fr] items-stretch">
                                    <div className='flex flex-col gap-4'>

                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M8 6h8m4 12V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z"></path><path fill="#F8A63F" d="M8.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Loan EMI Calculator</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Get EMI amount, repayment tenure and interest rate beforehand</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="none"><path stroke="#333" strokeWidth="1.5" d="M17 1H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z"></path><path stroke="#F8A63F" strokeWidth="1.5" d="M15 9a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2ZM7 5a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Z"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Instant Loan EMI Calculator</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>
                                                    Know EMI Loan amount in seconds to plan your finances better
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex justify-center items-stretch mx-4">
                                        <div className="w-px bg-gray-300 h-full"></div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M22 10v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M5 12h1a2 2 0 0 0 2-2V9a2 2 0 1 1 4 0v6a2 2 0 1 0 4 0v-1a2 2 0 0 1 2-2h1m3-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Eligibilty Calculator</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Easy-to-use calculator to know your loan eligibilty in seconds</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 8a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V10a2 2 0 0 1 2-2ZM4 16a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2ZM12 12a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 2h2a1 1 0 0 1 1 1v2m-1-2c-7.941 6.391-12.058 8.113-19 9"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Check Credit Card Score</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>
                                                    Get your credit score for free before applying for a loan
                                                </span>
                                            </div>
                                        </Link>
                                    </div>


                                </ul>
                            </div>
                        </li >

                        {/* learn */}

                        <li className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer">

                                <button className="hover:cursor-pointer">Learn</button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="6"
                                    fill="none"
                                    className="stroke-gray-500 mt-1"
                                >
                                    <path d="M1 1L6 5L11 1" strokeWidth="1.5" />
                                </svg>



                                <ul className="absolute left-[-7vw] mt-[30vh] bg-white rounded-xl shadow-xl z-[9999] w-[23vw] pl-4 py-3 space-y-4 text-sm transform scale-y-0 opacity-0 origin-top lg:transition duration-300 lg:duration-150 ease-out lg:ease-in-out lg:origin-top lg:shadow-lg group-hover:scale-y-100 group-hover:opacity-100 p-1">


                                    <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M8 6h8m4 12V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z"></path><path fill="#F8A63F" d="M8.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
                                        <div className='flex flex-col justify-center'>
                                            <div className='lg:pl-2 flex font-medium'> <span>Blogs</span>
                                                <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                    →
                                                </span>
                                            </div>
                                            <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Read about all things finance and insightful things to be financially healthy</span>
                                        </div>
                                    </Link>
                                    <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="none"><path stroke="#333" strokeWidth="1.5" d="M17 1H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z"></path><path stroke="#F8A63F" strokeWidth="1.5" d="M15 9a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2ZM7 5a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Z"></path></svg>
                                        <div className='flex flex-col justify-center'>
                                            <div className='lg:pl-2 flex font-medium'> <span>Financial Dictionary</span>
                                                <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                    →
                                                </span>
                                            </div>
                                            <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>
                                                Get all financial terms, formulas, concepts or theories you are searching for
                                            </span>
                                        </div>
                                    </Link>



                                </ul>
                            </div>
                        </li >



                        {/* About */}

                        <li className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer">

                                <button className="hover:cursor-pointer">About</button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="6"
                                    fill="none"
                                    className="stroke-gray-500 mt-1"
                                >
                                    <path d="M1 1L6 5L11 1" strokeWidth="1.5" />
                                </svg>



                                <ul className="absolute left-[-19vw] mt-[32vh] bg-white rounded-xl shadow-xl z-[9999] w-[42vw] pl-4 py-3 space-y-4 text-sm transform scale-y-0 opacity-0 origin-top lg:transition duration-300 lg:duration-150 ease-out lg:ease-in-out lg:origin-top lg:shadow-lg group-hover:scale-y-100 group-hover:opacity-100 grid grid-cols-[1fr_auto_1fr] items-stretch">
                                    <div className='flex flex-col gap-4'>

                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" fill="none"><path stroke="#333" strokeWidth="1.5" d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M8 10h8m-8 4h4"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>About Fibe</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Fibe is India's largest lending platform that offers instant credit solutions</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="none"><path stroke="#333" strokeWidth="1.5" d="M17 1H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z"></path><path stroke="#F8A63F" strokeWidth="1.5" d="M15 9a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2ZM7 5a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Z"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Careers</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>
                                                    Explore jobs at Fibe that best suits your passion and dreams
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex justify-center items-stretch mx-4">
                                        <div className="w-px bg-gray-300 h-full"></div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeWidth="1.5" d="M22 10v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8"></path><path stroke="#F8A63F" strokeLinecap="round" strokeWidth="1.5" d="M5 12h1a2 2 0 0 0 2-2V9a2 2 0 1 1 4 0v6a2 2 0 1 0 4 0v-1a2 2 0 0 1 2-2h1m3-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>News</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>Know about our news related products, industry updates, announcements etc.</span>
                                            </div>
                                        </Link>
                                        <Link href={"/"} className='flex  hover:bg-[rgb(254,249,235)] hover:border border-gray-300 p-1 rounded-lg group/item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" fill="none"><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 8a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V10a2 2 0 0 1 2-2ZM4 16a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2ZM12 12a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2Z"></path><path stroke="#F8A63F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 2h2a1 1 0 0 1 1 1v2m-1-2c-7.941 6.391-12.058 8.113-19 9"></path></svg>
                                            <div className='flex flex-col justify-center'>
                                                <div className='lg:pl-2 flex font-medium'> <span>Contact Us</span>
                                                    <span className="text-black ml-2 inline-block transform transition-transform duration-300 ease-in-out group-hover/item:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                                <span className='text-gray-500 font-extralight text-[12px] mt-1 pl-2'>
                                                    Reach us via different channels for your concerns and get instant help
                                                </span>
                                            </div>
                                        </Link>
                                    </div>


                                </ul>
                            </div>
                        </li >


                        <li className="relative group">
                            <div className="flex items-center gap-1">

                                <button className="hover:cursor-pointer">Download Fibe</button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="6"
                                    fill="none"
                                    className="stroke-gray-500 mt-1"
                                >
                                    <path d="M1 1L6 5L11 1" strokeWidth="1.5" />
                                </svg>



                                <ul className="absolute left-[-2vw] mt-[44vh] bg-white rounded-xl shadow-xl z-[9999] w-[20vw] pl-4 py-3 space-y-4 text-sm transform scale-y-0 opacity-0 origin-top lg:transition duration-300 lg:duration-150 ease-out lg:ease-in-out lg:origin-top lg:shadow-lg group-hover:scale-y-100 group-hover:opacity-100">
                                    <div className='flex flex-col'>
                                        <h2 className='text-lg'>
                                            Scan QR to get the Fibe app
                                        </h2>
                                        <img src="https://www.fibe.in/_next/image/?url=%2Fappsflyer.png&w=256&q=75" alt="qr-scan" className='w-32 h-full' />
                                        <button onClick={handleClickApp} className='my-1 flex gap-2 justify-center w-60 ml-3 py-2 rounded-xl bg-black text-white hover:cursor-pointer hover:text-black hover:bg-white group/item hover:border'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none" className="fill-white group-hover/item:fill-black"><path d="M11.21 8.432c-.02-2.041 1.705-3.035 1.784-3.081-.976-1.397-2.491-1.588-3.022-1.603-1.273-.132-2.506.747-3.153.747-.662 0-1.66-.734-2.734-.714-1.385.022-2.679.807-3.39 2.027-1.465 2.486-.37 6.14 1.032 8.15.702.983 1.523 2.084 2.596 2.044 1.051-.042 1.443-.656 2.712-.656 1.256 0 1.625.656 2.72.632 1.128-.018 1.837-.989 2.515-1.982.812-1.128 1.138-2.239 1.15-2.296-.027-.009-2.189-.82-2.21-3.268Z"></path><path d="M9.142 2.592c.565-.694.952-1.635.845-2.592-.817.036-1.841.555-2.429 1.232-.523.597-.988 1.577-.867 2.496.918.067 1.86-.454 2.451-1.136Z"></path></svg>
                                            <span>Download on App Store</span>
                                        </button>
                                        <button onClick={handleClickPlay} className='flex gap-2 my-1 justify-center w-60 ml-3 py-2 rounded-xl bg-black text-white hover:cursor-pointer hover:text-black hover:bg-white group/item hover:border'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" className="fill-white group-hover/item:fill-black"><path d="m9.037 7.413 2.291-2.267L2.44.195c-.33-.184-.63-.226-.884-.174l7.482 7.392ZM.92.547a1.5 1.5 0 0 0-.1.56v13.781c0 .215.036.398.098.556l7.534-7.457L.921.547ZM9.036 8.563l-7.49 7.412c.256.056.559.014.892-.172l8.905-4.962-2.307-2.278ZM14.835 7.095l-2.765-1.54-2.453 2.429 2.47 2.44 2.748-1.53c.889-.494.889-1.304 0-1.799Z"></path></svg>
                                            <span>Download on Play Store</span>
                                        </button>


                                    </div>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <button className="px-5 py-2 border-2 border-[rgb(7,159,159)] text-[rgb(7,159,159)] rounded-xl font-semibold hover:cursor-pointer hover:bg-[rgb(7,159,159)] hover:text-white">Sign In</button>
                        </li>

                    </ul >


                </nav >
            }

            {
                navType === "touchLarge" && <NavbarForTouchLargeScreens />
            }



            {/* mobile design */}
            <div className='lg:hidden block'>
                <NavbarForMobile />
            </div>

        </>


    )
}

export default Navbar


