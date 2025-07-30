import React from 'react'

const Informationcardsection = ({title, description, cardData}) => {
  return (
    <section className="px-6 lg:px-8 py-20 lg:py-32" id="eligbilitycriteria">
        <div className="text-center">
            <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">{title}</h2>
            <p className="max-w-5xl mx-auto text-base lg:text-xl mb-8 text-[#5c5c5c] font-normal">{description}</p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8 lg:max-w-screen-2xl justify-items-center mt-8 container mx-auto [&>*]:bg-latte [&>*]:p-5 [&>*]:rounded-xl [&>*]:max-w-lg [&>*]:w-full [&>*]:group [&>*]:pointer ">
            {cardData.map((item,index) => (
                <div key={index} className="text-center max-w-[200px] mx-auto [&>*]:mb-2 lg:mt-2 lg:mb-2 relative group p-4 bg-[#fef9eb] border border-[#e5e7eb]">
                <div className="min-w-[60px] min-h-[60px] mx-auto lg:mx-0 mb-4">
                    <div className="mx-auto w-[60px] h-[60px] rounded-full bg-white">
                        <img alt="image" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto lg:mx-0" src={`${item.img}`}></img>
                    </div>
                </div>
                <div className="font-semibold text-[18px] lg:text-xl">{item.title}</div>
                <div className="font-medium text-sm lg:text-lg leading-6 mt-2 text-[#5c5c5c]">{item.description}</div>
                <span className=""></span>
            </div>
            ))}
        </div>
        <div className="flex justify-center items-center mt-8">
            <a className="w-full lg:w-auto rounded-lg bg-[#079f9f] hover:bg-[#038787] border border-[#079f9f]  px-3 py-3 lg:py-4 text-base lg:text-xl font-semibold text-white text-center shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#038787] min-w-[250px] lg:min-w-[340px] disabled:opacity-50  disabled:cursor-not-allowed max-w-[340px]" href="../instant-cash-loan/eligibility-criteria/">Check eligibility now</a>
        </div>
    </section>
  )
}

export default Informationcardsection
