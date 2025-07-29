"use client";
import HeroSection from "../../components/home_components/HeroSection";
import Wave from "../../components/home_components/Wave";
import OurProducts from "../../components/home_components/OurProducts";
import GetLoan from "../../components/home_components/GetLoan";
import LoanCalculator from "../../components/calculators/LoanCalculator";
import Reviews from "@/components/reviews/Reviews";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import Blogs from "@/components/blogs/Blogs";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-12 lg:mt-28 bg-white'>
      <div className="overflow-x-hidden">
        <HeroSection />
        <Wave />
        <OurProducts />
        <GetLoan />
        <div className="bg-white px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">Loan Calculators</h2>
            <p className="max-w-5xl mx-auto text-base lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">Skip the guesswork when it comes to applying for a personal loan. Calculate your EMIs for varying tenures, loan amounts and interest rates with Fibe&apos;s easy-to-use EMI calculator. This can help you choose an EMI that works for you and plan your Fibe Loan better.  You can simply move  the slider left or right to change the values and takes just seconds to calculate.&nbsp;</p>
          </div>
          <LoanCalculator />
        </div>
        <div className="w-[100%] py-8 lg-py-12 bg-[rgb(254,249,235)]">
          <div className="text-center mx-4">
            <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
              Our Other Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:max-w-screen-2xl justify-items-center mt-8 container lg:w-[95%] mx-auto [&>*]:bg-white [&>*]:p-1 [&>*]:rounded-xl [&>*]:max-w-lg [&>*]:pointer grid-wrapper">
            <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
              <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                  <img alt="" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/checkscore.png"></img>
                </div>
                <div className="font-semibold text-xl">Credit Score</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Check your credit score for free in just 3 minutes</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
              </div>
            </a>
            <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
              <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                  <img alt="" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/coins.png"></img>
                </div>
                <div className="font-semibold text-xl">Financial Wellness</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Credit affordability for your employees every credit need</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
              </div>
            </a>
            <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
              <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                  <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/calculator.png"></img>
                </div>
                <div className="font-semibold text-xl">Eligibility Calculator</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Check your eligibility to see how much you can borrow</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
              </div>
            </a>
            <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
              <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                  <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/credit-card-icon.png"></img>
                </div>
                <div className="font-semibold text-xl">Credit Card</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Go numberless with Fibe Axis Bank Card</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
              </div>
            </a>
          </div>
        </div>

        {/* Why Us desktop */}
        <section className="max-lg:hidden block px-6 lg:px-8 py-20 lg:py-32 bg-white">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl mb-3 lg:mb-8 font-semibold">Why choose Fibe?</h2>
            <p className="max-w-5xl mx-auto text-base lg:text-xl mb-8 lg:mb-20 text-sub-grey font-normal">Handle all your last-minute expenses like a pro with Fibe's Instant Personal Loan. Get finance any time and  repay at your convenience.</p>
          </div>
          <div className="container mx-auto">
            <div className="slick-slider custom-slider slick-initialized">
              <div className="slick-list">
                <div className="slick-track flex justify-center items-center">
                  <div data-index="0" className={`${currentIndex === 0 ? "block" : "hidden"} lg:block w-[300px] lg:w-[512px]`} style={{ outline: 'none' }}>
                    <div>
                      <a href="https://www.youtube.com/watch?v=mpBhHNp2qVU" className="flex justify-center cursor-pointer transition-transform slick-padding lg:scale-75 " tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                        <img alt="Slide 0" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61963-1.png&w=3840&q=75"></img>
                      </a>
                    </div>
                  </div>
                  <div data-index="1" className={`${currentIndex === 1 ? "block" : "hidden"} lg:block w-[300px] lg:w-[512px]`} style={{ outline: 'none' }}>
                    <div>
                      <a href="https://www.youtube.com/watch?v=CZLWz3uou4U" className="flex justify-center cursor-pointer transition-transform slick-padding  lg:scale-125 " tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                        <img alt="Slide 1" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61956-1.png&w=3840&q=75"></img>
                      </a>
                    </div>
                  </div>
                  <div data-index="2" className={`${currentIndex === 2 ? "block" : "hidden"} lg:block w-[300px] lg:w-[512px]`} style={{ outline: 'none' }}>
                    <div>
                      <a href="https://www.youtube.com/watch?v=LiK6zeT6cTo" className="flex justify-center cursor-pointer transition-transform slick-padding lg:scale-75 " tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                        <img alt="Slide 2" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61959.png&w=3840&q=75"></img>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 lg:hidden">
                  {[1, 2, 3].map((_, index) => (
                    <span
                      key={index}
                      className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[rgb(7,159,159)]' : 'bg-gray-300'
                        }`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why us mobile */}
        <div className="lg:hidden relative w-[84vw] mx-[8vw] overflow-hidden mt-20 text-center">
          <h1 className="text-2xl mb-4 font-semibold">
            Why Choose Fibe?
          </h1>
          <p className="max-w-5xl mx-auto text-base mb-8 text-gray-600 font-normal leading-8">
            Handle all your last-minute expenses like a pro with Fibe's Instant Personal Loan. Get finance any time and  repay at your convenience.
          </p>

          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[235px]"
          >
            <style jsx>{`
              :global(.swiper-pagination-bullet) {
                background-color: #e3e9f0; /* Tailwind gray-300 */
                width: 14px;
                height: 14px;
                opacity: 1;
                margin: 0 4px;
                border-radius: 9999px;
              }

              :global(.swiper-pagination-bullet-active) {
                background-color: #079f9f; /* Tailwind orange-500 */
                width: 14px;
              }
            `}</style>
            <SwiperSlide className="h-full flex items-center justify-center">
              <a href="https://www.youtube.com/watch?v=mpBhHNp2qVU" className="flex justify-center cursor-pointer transition-transform slick-padding lg:scale-75 " tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                <img alt="Slide 0" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61963-1.png&w=3840&q=75"></img>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=CZLWz3uou4U" className="flex justify-center cursor-pointer transition-transform slick-padding  lg:scale-125 " tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                <img alt="Slide 1" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61956-1.png&w=3840&q=75"></img>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=LiK6zeT6cTo" className="flex justify-center cursor-pointer transition-transform slick-padding lg:scale-75 " tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                <img alt="Slide 2" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61959.png&w=3840&q=75"></img>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>


        <div className="bg-white">
          <div className="text-center px-8 py-8 lg:py-12 my-10 bg-[#fff5f8] ">
            <h1 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-bold">
              Awards and Achievements
            </h1>
            <div className="text-base lg:text-xl text-gray-500 max-w-5xl font-normal mx-auto leading-8 mb-8">
              The industry recognises us as much as our customers love us! And so, Fibe has been featured in multiple leading publications, documenting our efforts in making credit accessible to you!
            </div>
            <div className="container grid lg:grid-cols-6 grid-cols-2 gap-4 sm:grid-cols-3 justify-items-center">
              <img width={225} height={110} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-1.jpg&w=640&q=75" alt="" />
              <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-2.jpg&w=640&q=75" alt="" />
              <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-3.jpg&w=640&q=75" alt="" />
              <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-4.jpg&w=640&q=75" alt="" />
              <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-5.jpg&w=640&q=75" alt="" />
              <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-6.jpg&w=640&q=75" alt="" />


            </div>
          </div>
          <Reviews />
          <DownloadApp />
          <Blogs />
        </div>

      </div>
    </div>
  );
}
