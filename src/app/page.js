"use client";
import HeroSection from "../../components/home_components/HeroSection";
import Wave from "../../components/home_components/Wave";
import OurProducts from "../../components/home_components/OurProducts";
import GetLoan from "../../components/home_components/GetLoan";
import LoanCalculator from "../../components/calculators/LoanCalculator";
import { useState, useEffect } from "react";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);

//   const slides = [
//   'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61963-1.png&w=3840&q=75',
//   'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61956-1.png&w=3840&q=75',
//   'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61959.png&w=3840&q=75',
// ];

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <Wave/>
      <OurProducts/>
      <GetLoan/>
      <div className="bg-white px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">Loan Calculators</h2>
          <p className="max-w-5xl mx-auto text-base lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">Skip the guesswork when it comes to applying for a personal loan. Calculate your EMIs for varying tenures, loan amounts and interest rates with Fibe’s easy-to-use EMI calculator. This can help you choose an EMI that works for you and plan your Fibe Loan better.  You can simply move  the slider left or right to change the values and takes just seconds to calculate.&nbsp;</p>
        </div>
        <LoanCalculator/> 
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


    <section className="px-6 lg:px-8 py-20 lg:py-32 bg-white">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl lg:mb-8 font-semibold">Why choose Fibe?</h2>
        <p className="max-w-5xl mx-auto text-base lg:text-xl mb-24 lg:mb-20 text-sub-grey font-normal">Handle all your last-minute expenses like a pro with Fibe's Instant Personal Loan. Get finance any time and  repay at your convenience.</p>
      </div>
      <div className="container mx-auto">
        <div className="slick-slider custom-slider slick-initialized">
          <div className="slick-list">
            <div className="slick-track flex justify-center items-center">
              <div data-index="0" className={`absolute transition-transform duration-[2s] ease-in-out ${currentIndex === 0 ? "translate-x-0" : "-translate-x-[700px]"} lg:static lg:translate-x-0 w-[300px] lg:w-[512px]`} style={{outline: 'none'}}>
                <div>
                  <div className="flex justify-center cursor-pointer transition-transform slick-padding lg:scale-75 " tabIndex="-1" style={{width: '100%', display: 'inline-block'}}>
                    <img alt="Slide 0" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61963-1.png&w=3840&q=75"></img>
                  </div>
                </div>
              </div>
              <div data-index="1" className={`absolute transition-transform duration-[2s] ease-in-out ${currentIndex === 1 ? "translate-x-0" : "-translate-x-[700px]"} lg:static lg:translate-x-0 w-[300px] lg:w-[512px]`} style={{outline: 'none'}}>
                <div>
                  <div className="flex justify-center cursor-pointer transition-transform slick-padding  lg:scale-125 " tabIndex="-1" style={{width: '100%', display: 'inline-block'}}>
                    <img alt="Slide 1" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1"  src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61956-1.png&w=3840&q=75"></img>
                  </div>
                </div>
              </div>
              <div data-index="2" className={`absolute transition-transform duration-[2s] ease-in-out ${currentIndex === 2 ? "translate-x-0" : "-translate-x-[700px]"} lg:static lg:translate-x-0 w-[300px] lg:w-[512px]`} style={{outline: 'none'}}>
                <div>
                  <div className="flex justify-center cursor-pointer transition-transform slick-padding lg:scale-75 " tabIndex="-1" style={{width: '100%', display: 'inline-block'}}>
                    <img alt="Slide 2" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" src="https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F07%2FGroup-61959.png&w=3840&q=75"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-28 gap-2 lg:hidden">
          {[1,2,3].map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[rgb(7,159,159)]' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
