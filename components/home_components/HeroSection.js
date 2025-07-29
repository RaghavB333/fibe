"use client"
import React from 'react'
import { useState, useEffect } from 'react'
const text = ["Fibe EMIS", "Personal Loans", "Instant Cash"];
const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [formdata,setFormData] = useState('');
  useEffect(() => {
     const interval = setInterval(()=>{
      setIndex((prev)=> (prev+1) % text.length);
    },1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className='flex justify-center items-center z-50 bg-gradient-to-t from-[#EBFFFF91] to-[FFF3F78F] h-[500px] w-screen'>
      <div className='flex flex-col flex-wrap gap-y-2 lg:gap-y-4 justify-center items-center h-[80%] mx-3'>
            <h1 className='text-2xl lg:text-6xl font-semibold'>Lightning-fast upgrades with</h1>
            <span className=' text-2xl md:text-5xl font-bold text-[rgb(248,166,63)]'>{text[index]}</span>
            <div className='text-[18px] md:text-3xl mt-1.5 lg:mt-3 flex items-center gap-2'>Fibe <p className='w-5 h-[2px] bg-black'></p> finance simplified unlike ever before!</div>
            <ul className='flex flex-wrap items-center justify-center text-sm lg:text-[18px] mt-1.5 lg:mt-4 text-gray-700 lg:divide-x divide-[rgb(229,231,235)]'>
                <li className='py-1 px-4'>Cash-in-bank in minutes</li>
                <li className='py-1 px-4'>Fastest loan processing</li>
                <li className='py-1 px-4'>Borrow and repay at your convenience</li>
                <li className='py-1 px-4'>One-time application for multiple loans</li>
            </ul>

            <form className='w-full mt-3'>
              <div className="px-6 lg:px-0 mx-auto lg:mx-0 sm:w-11/12 flex justify-center items-center w-[100%] flex-col">
                <div className="inline-flex flex-col lg:flex-row [&>*]:my-2 justify-center items-center sm:w-10/12 lg:space-x-4 w-full">
                  <div>
                    <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Enter your mobile number" value={formdata} onChange={(e)=>{const onlyNums = e.target.value.replace(/[^0-9]/g, ''); String(onlyNums).length <= 10 && setFormData(onlyNums);}} className="rounded-lg min-w-[300px] lg:min-w-[360px] lg:mr-2 p-3 lg:p-4 text-base lg:text-xl border border-gray-400 focus:border-[rgb(7,159,159)] focus:outline-none focus:ring-2 focus:ring-[rgb(7,159,159)] text-center lg:text-left" aria-label="Enter your mobile number" aria-describedby="btn-step-1"></input>
                  </div>
                    <button type="submit" className="min-w-[300px] lg:mr-2 p-3 lg:p-4 rounded-lg bg-[rgb(3,135,135)] hover:bg-[rgb(57,128,128)] border border-[rgb(3,135,135)]]  px-3 py-3 lg:py-4 text-base font-semibold text-white  shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark lg:min-w-[250px] disabled:opacity-100 disabled:cursor-not-allowed" disabled={formdata.length != 10} id="btn-step-1">Get your loan now</button>
                </div>
              </div>
            </form>
      </div>
    </div>
  )
}

export default HeroSection
