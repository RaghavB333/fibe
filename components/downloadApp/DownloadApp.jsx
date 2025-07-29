"use client"
import React from 'react'

const DownloadApp = () => {
    const handleClickPlay = () => {
        window.open("https://play.google.com/store/apps/details?id=com.earlysalary.android", "_blank", "noopener,noreferrer");
    };

    const handleClickApp = () => {
        window.open("https://apps.apple.com/in/app/fibe-instant-personal-loan-app/id1094602630", "_blank", "noopener,noreferrer");
    };


    return (
        <div className='bg-[#f4faff] flex max-lg:flex-col justify-between gap-20 items-center px-16 py-10'>
            <div className='max-lg:hidden'>
                <img width={447} height={533} src="https://www.fibe.in/_next/image/?url=%2Ffibe-mobile-girl.png&w=1080&q=75" alt="" />
            </div>
            <div className='flex flex-col gap-10 w-[32vw] max-lg:w-[94vw] max-lg:text-center max-lg:gap-2 max-lg:items-center'>
                <h1 className='text-2xl font-semibold'>The cool new vibe to finance!</h1>
                <div className='text-lg'>
                    Download the Fibe App the cool new vibe to finance to avail of the loan in just a few clicks from anywhere
                </div>
                <div className='flex gap-4'>
                    <img className='h-[25vh] max-lg:hidden' src="https://www.fibe.in/_next/image/?url=%2Fappsflyer.png&w=256&q=75" alt="" />
                    <div className='flex flex-col justify-center gap-4'>
                        <button onClick={handleClickApp} className='my-1 flex gap-2 justify-center items-center w-[80vw] lg:w-64 lg:h-16 py-2 rounded-lg font-medium bg-black text-white hover:cursor-pointer hover:text-black hover:bg-white hover:border hover:border-black group'>
                            <svg width="30" height="38" viewBox="0 0 14 16" fill="none" className="fill-white group-hover:fill-black scale-50 lg:scale-75" xmlns="http://www.w3.org/2000/svg"><path d="M11.2095 8.43237C11.1899 6.39084 12.9155 5.39747 12.9944 5.35089C12.0181 3.95401 10.5029 3.76287 9.97173 3.7478C8.69905 3.61627 7.4662 4.49454 6.81903 4.49454C6.15718 4.49454 5.15917 3.7615 4.08497 3.78137C2.70047 3.80329 1.40612 4.58839 0.695353 5.80783C-0.769522 8.29399 0.324242 11.9475 1.72692 13.9575C2.4286 14.9413 3.2498 16.0422 4.32329 16.0018C5.37442 15.96 5.7665 15.3455 7.03499 15.3455C8.2909 15.3455 8.65991 16.0018 9.75577 15.9778C10.8831 15.96 11.5925 14.9893 12.2704 13.9959C13.0818 12.8683 13.4075 11.7571 13.4208 11.7002C13.3935 11.6913 11.2311 10.8808 11.2095 8.43237Z"></path><path d="M9.14241 2.59166C9.70711 1.89835 10.0943 0.957056 9.98737 0C9.16967 0.0363092 8.14579 0.554914 7.55803 1.23246C7.03526 1.82916 6.56979 2.80883 6.6914 3.72752C7.60905 3.79465 8.55185 3.27399 9.14241 2.59166Z"></path></svg>
                            <span>Download on App Store</span>
                        </button>
                        <button onClick={handleClickPlay} className='my-1 flex gap-2 justify-center items-center w-[80vw] lg:w-64 lg:h-16 py-2 rounded-lg font-medium bg-black text-white hover:cursor-pointer hover:text-black hover:bg-white hover:border hover:border-black group'>
                            <img src="https://www.fibe.in/icons/play.svg" alt="" />
                            <span>Download on Play Store</span>
                        </button>
                    </div>

                </div>
                <div className='lg:hidden flex pr-24 mt-6'>
                    <img width={447} height={533} src="https://www.fibe.in/_next/image/?url=%2Ffibe-mobile-girl.png&w=1080&q=75" alt="" />
                </div>
            </div>
            <div className='hidden lg:block'>
                <img width={275} height={270} src="https://www.fibe.in/_next/image/?url=%2Fhome-bubbles2.png&w=640&q=75" alt="" />
            </div>
        </div>
    )
}

export default DownloadApp
