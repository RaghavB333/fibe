
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
    return (
        <div className='bg-white w-[100vw] mb-10'>
            <h1 className='my-14 text-2xl px-4 lg:text-3xl font-semibold  text-center'>
                Here's what our customers think of us!
            </h1>
            <div className='mx-auto flex max-lg:hidden justify-center items-stretch lg:w-[94%] gap-5'>
                <div className='w-full border border-gray-300 flex flex-col max-lg:items-center rounded-lg'>
                    <div className='flex ml-6 lg:my-4 justify-between'>
                        <div className='flex gap-1'>
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                        </div>
                        <div>
                            <img className='w-20 mr-5 max-lg:relative max-lg:top-2 max-lg:right-0' src="https://www.fibe.in/_next/image/?url=%2Ftestimonials%2Fcolon.png&w=1920&q=75" alt="" />
                        </div>
                    </div>
                    <div className='text-xl text-gray-700 font-semibold ml-6 mb-8'>
                        Instant Loan in minutes
                    </div>
                    <div className='ml-6 mr-6 text-gray-600 text-lg'>
                        I would like to thank Fibe (EarlySalary), few days back I met with an accident and I didn&apos;t have much money to pay in one go. So, I took an instant cash advance from Fibe (EarlySalary). They helped me to clear all the medical bills in just 10 mins!
                    </div>
                    <div className=' max-lg:flex-col flex  ml-6 mt-4 mb-6 max-lg:items-center max-lg:justify-center items-center gap-2'>
                        <img src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FMask-group-13.jpg&w=3840&q=75" alt="profile-pic" />
                        <span className='text-lg font-[600]'>Subham Pawar</span>
                    </div>

                </div>
                <div className='w-full border border-gray-300 flex flex-col justify-between max-lg:items-center rounded-lg'>
                    <div className='flex ml-6 lg:my-4 justify-between'>
                        <div className='flex gap-1'>
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                        </div>
                        <div>
                            <img className='w-20 mr-5 max-lg:relative max-lg:top-2 max-lg:right-0' src="https://www.fibe.in/_next/image/?url=%2Ftestimonials%2Fcolon.png&w=1920&q=75" alt="" />
                        </div>
                    </div>
                    <div className='text-xl text-gray-700 font-semibold ml-6 mb-8'>
                        Quick and Easy
                    </div>
                    <div className='ml-6 mr-6 text-gray-600 text-lg'>
                         The overall experience with Fibe was really good. I applied for an online personal loan and the service was very quick. The entire process was fast and smooth, and the loan was sanctioned without any hassles.
                    </div>
                    <div className='max-lg:flex-col flex  ml-6 mt-4 mb-6 max-lg:items-center max-lg:justify-center items-center gap-2'>
                        <img src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FMask-group-14.jpg&w=3840&q=75" alt="profile-pic" />
                        <span className='text-lg text-gray-600 font-[600]'>Shilpi Mukharjee</span>
                    </div>

                </div>


               





            </div>
            <div className='w-full h-full mb-10 lg:hidden'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper max-w-[100vw] relative"
                >
                    <style jsx>{`
                        .swiper-pagination {
                        position: absolute !important;
                        bottom: 8px !important;
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                        }
                    `}</style>

                    <SwiperSlide className='max-w-[90vw] border border-gray-300 flex flex-col items-center rounded-lg px-4 pt-2 mx-5 justify-center text-center'>
                        <div className='flex ml-6 lg:my-4 justify-between max-lg:ml-[21vw]'>
                            <div className='flex gap-1'>
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            </div>
                            <div>
                                <img className='w-20 mr-3 max-lg:relative max-lg:top-2 max-lg:right-0' src="https://www.fibe.in/_next/image/?url=%2Ftestimonials%2Fcolon.png&w=1920&q=75" alt="" />
                            </div>
                        </div>
                        <div className='text-xl text-gray-600 font-semibold mb-4'>
                            Instant Loan in minutes
                        </div>
                        <div className='text-gray-700 text-sm max-lg:text-center'>
                            I would like to thank Fibe (EarlySalary), few days back I met with an accident and I didn&apos;t have much money to pay in one go. So, I took an instant cash advance from Fibe (EarlySalary). They helped me to clear all the medical bills in just 10 mins!
                        </div>
                        <div className=' max-lg:flex-col flex  lg:ml-6 mt-4 mb-6 max-lg:items-center max-lg:justify-center items-center gap-2'>
                            <img className='w-20 h-20 object-cover' src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FMask-group-13.jpg&w=3840&q=75" alt="profile-pic" />
                            <span className='text-lg font-[500]'>Subham Pawar</span>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='max-w-[90vw] border border-gray-300 flex flex-col items-center rounded-lg px-4 pt-2 mx-5 justify-center text-center'>
                        <div className='flex ml-6 lg:my-4 justify-between max-lg:ml-[21vw]'>
                            <div className='flex gap-1'>
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                                <img className='w-6' src="https://www.fibe.in/icons/star.svg" alt="star" />
                            </div>
                            <div>
                                <img className='w-20 mr-3 max-lg:relative max-lg:top-2 max-lg:right-0' src="https://www.fibe.in/_next/image/?url=%2Ftestimonials%2Fcolon.png&w=1920&q=75" alt="" />
                            </div>
                        </div>
                        <div className='text-xl text-gray-600 font-semibold mb-4'>
                            Quick and Easy
                        </div>
                        <div className='text-gray-700 text-sm max-lg:text-center'>
                            The overall experience with Fibe was really good. I applied for an online personal loan and the service was very quick. The entire process was fast and smooth, and the loan was sanctioned without any hassles.
                        </div>
                        <div className=' max-lg:flex-col flex  lg:ml-6 mt-4 mb-6 max-lg:items-center max-lg:justify-center items-center gap-2'>
                            <img className='w-20 h-20 object-cover' src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F08%2FMask-group-14.jpg&w=3840&q=75" alt="profile-pic" />
                            <span className='text-lg font-[500]'>Subham Pawar</span>
                        </div>

                    </SwiperSlide>
                   
                </Swiper >
            </div>


        </div >
    )
}

export default Reviews
