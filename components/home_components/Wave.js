import React from 'react'
const wave = () => {
  return (
    <>
    <div className='w-[100%] lg:pt-5 flex justify-center items-center bg-gradient-to-r from-[#E9FFFF] via-[#FFF2E1] to-[#FDDFE8]'>
      <div className='w-[95%] h-[70%] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white'>
        <div className="text-center justify-center item-center h-full p-4">
          <div className="font-bold text-2xl md:text-4xl">34 Mn+</div>
          <div className="font-medium text-base lg:text-xl">App downloads</div>
        </div>
        <div className="text-center justify-center item-center h-full p-4 ">
          <div className="font-bold text-2xl md:text-4xl">8 Mn+</div>
          <div className="font-medium text-base lg:text-xl">Loans Given</div>
        </div>
        <div className="text-center justify-center item-center h-full p-4 ">
          <div className="font-bold text-2xl md:text-4xl">33,000 Cr+</div>
          <div className="font-medium text-base lg:text-xl">Money Disbursed</div>
        </div>
        <div className="text-center justify-center item-center h-full p-4 ">
          <div className="font-bold text-2xl md:text-4xl">8,000+</div>
          <div className="font-medium text-base lg:text-xl">Partner tie-ups</div>
        </div>
      </div>
    </div>
    <img src='/wave.png'></img>
  </>
  )
}

export default wave
