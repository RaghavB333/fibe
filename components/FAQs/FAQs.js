"use client";
import React, { useState } from "react";
const FAQs = ({ title , FAQS }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [limit, setLimit] = useState(5);
  return (
    <section className="px-6 lg:px-8 py-12 lg:py-24 bg-[#fef9eb] mt-12 lg:mt-24">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
          {title}
        </h2>
      </div>
      <div className="flex lg:flex-nowrap container mx-auto">
        <div className="max-w-[800px] mx-auto w-full mt-0 lg:mt-2 lg:mb-2">
          {FAQS.map((item, index) => (
            <div key={index}>
            { index < limit &&
            <div
              className="border border-[#e5e7eb] md:border-transparent px-2 bg-white md:bg-transparent w-full py-2 my-6 md:mb-0 md:mt-0 rounded-xl text-start "
            >
              <button
                onClick={() => currentIndex == index ? setCurrentIndex(null) : setCurrentIndex(index)}
                className="flex justify-between w-full text-start cursor-pointer"
              >
                <p className="font-semibold text-lg lg:text-xl md:text-xl px-2 py-1">
                  {item.question}
                </p>
                <span className="p-2">
                  {currentIndex == index ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`max-w-[90%] ${
                  currentIndex == index ? "visible" : "hidden"
                }`}
              >
                <div className="text-base lg:text-lg md:text-lg px-2 text-[#5c5c5c] mb-2">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
                }
            </div>
        ))}
          { FAQS.length > limit &&
                <div className="flex justify-center items-center mt-8">
            <div onClick={()=>setLimit(limit+5)} className="w-auto rounded-lg bg-[#079f9f] hover:bg-[#038787] border border-[#079f9f] px-3 py-3 lg:py-4 text-base lg:text-xl font-semibold text-white text-center shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#038787] min-w-[250px] lg:min-w-[340px] disabled:opacity-50  disabled:cursor-not-allowed max-w-[340px]">
              View more FAQs
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  );
};

export default FAQs;
