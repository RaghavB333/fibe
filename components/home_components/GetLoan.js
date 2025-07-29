"use client";
import React from 'react'
import { useEffect, useRef, useState } from 'react';
const GetLoan = () => {
    const stepsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        console.log(index);
        if (entry.isIntersecting) {
          setActiveIndex(index);
          console.log('Step visible in center:', index);
        }
      });
    }, observerOptions);

    stepsRef.current.forEach((el) => {
        console.log(el)
      if (el) observer.observe(el);
    });

    return () => {
      stepsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

    const steps = [
    {
      title: 'Online application',
      description: 'Download the Fibe App and provide a few basic details to initiate the application process.',
      img: '/f01.jpeg',
    },
    {
      title: 'Instant approval',
      description: 'You can complete the verification process by uploading some basic documents.',
      img: '/f02.jpeg',
    },
    {
      title: 'Cash-in-bank in minutes',
      description: 'Select the amount to be transferred directly to your bank account.',
      img: '/f03.jpeg',
    },
  ];

  return (
    <div className='px-2 lg:px-8 py-20 lg:py-32 bg-[rgb(244,250,255)]'>
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl w-[90%] mx-auto mb-4 lg:mb-8 font-semibold">How to Get a Personal Loan From Fibe?</h2>
        <p className="max-w-5xl mx-auto leading-8 text-[18px] text-base line lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">Borrow and repay on your own 
            terms. Effortless application. Takes just minutes to apply. Get instant cash transferred directly to your
            bank account.</p>
        </div>
        <div className='mt-16'>
            <div className='mx-auto w-5/6 xl:w-11/12 2xl:w-3/4 xl:flex justify-between relative'>
            <div className="xl:w-3/5">
                <ul className="grid grid-cols-1 [&>*]:relative place-content-start [&>li>div.each-step]:max-w-[300px] [&>li>div.each-step]:lg:max-w-[450px] [&>li>div.each-step]:xl:max-w-[500px] [&>li>.each-step]:py-[0px] relative" id="lineContainer">
                    {steps.map((step, index) => (
        <li
          key={index}
          ref={(el) => (stepsRef.current[index] = el)}
          data-index={index}
          className={`flex justify-center xl:justify-start items-start group border-left relative xl:h-[240px] transition-all duration-500 ${activeIndex === index ? "opacity-100" : "opacity-50"}`}
        >
          <div className="lg:absolute lg:mr-8 hidden xl:block">
            <div className={`rounded-full bg-white border-2 ${activeIndex === index ? "border-[rgb(7,159,159)]" : "border-[rgb(230,230,230)]"} mx-auto w-8 h-8 p-1`}>
              <div className={`rounded-full ${activeIndex === index ? "bg-[rgb(7,159,159)]":"bg-[rgb(230,230,230)]"} w-full h-full`}></div>
            </div>
          </div>
          {index != 2 && <div className="w-2 h-full bg-[rgb(7,159,159)] ms-3.5 hidden xl:block"></div>}
          <div className={`${index != 2 ? "xl:mx-24" : "xl:mx-28"} px-2 text-center xl:text-start each-step`}>
            <div className="font-semibold text-[19px] lg:text-xl xl:text-2xl mb-2 lg:mb-4">
              {step.title}
            </div>
            <p className="text-base leading-7 mx-auto w-[70%] xl:w-full lg:text-xl xl:text-xl text-[rgb(38,38,38)] font-medium">
              {step.description}
            </p>
            <div className="w-full xl:hidden my-5 xl:my-0 bg-[rgb(244,250,255)]">
              <img
                alt="Fibe personal loan"
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                className="mb-8 mx-auto mix-blend-darken"
                src={step.img}
              />
            </div>
          </div>
        </li>
      ))}
                </ul>
            </div>
            <div className={`xl:w-2/5 hidden xl:block bg-[rgb(244,250,255)] ${activeIndex == 1 && "fixed top-20 right-20"} ${activeIndex == 2 && "absolute top-36 right-0 w-full"}`}>
                <img alt="Fibe personal loan and instant cash loan app" loading="lazy" width="460" height="460" decoding="async" data-nimg="1" className="mb-8 mx-auto mix-blend-darken" src={`${steps[activeIndex].img}`}></img>
            </div>
            </div>
        </div>
    </div>
  )
}

export default GetLoan
