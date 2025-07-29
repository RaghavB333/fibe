import React from "react";

const OurProducts = () => {
  return (
    <div className="w-[100%] lg:px-8 py-8 lg-py-12 bg-white">
      <div className="text-center mx-4">
        <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
          Our Products
        </h2>
        <p className="max-w-5xl leading-8 px-5 mx-auto text-base lg:text-xl mb-8 text-[rgb(92,92,92)] font-normal">
          One solution for all life’s big and small upgrades. From planning your
          dream birthday trip to learning a new skill, you can do it all with a
          Fibe loan. It’s quick, safe and simple. The best part? You can sort
          out your finances anytime, anywhere — no questions asked.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:max-w-screen-2xl justify-items-center mt-8 container mx-auto [&>*]:bg-white [&>*]:p-1 [&>*]:rounded-xl [&>*]:max-w-lg [&>*]:pointer grid-wrapper">
        <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
            <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                    <img alt="" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/instant-cash-loan.png"></img>
                </div>
                <div className="font-semibold text-xl">Instant Cash Loan</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Get cash in your bank account within minutes</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
            </div>
        </a>
        <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
            <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                    <img alt="" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/personal-loan.png"></img>
                </div>
                <div className="font-semibold text-xl">Personal Loan</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Get up to ₹5 lakhs instantly  with no collateral</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
            </div>
        </a>
        <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
            <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                    <img alt="" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/loan-against-mutual-fund.png"></img>
                </div>
                <div className="font-semibold text-xl">Loan Against Mutual Fund</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Borrow using mutual fund holdings in minutes</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
            </div>
        </a>
        <a className="group each-grid-cardundefined border border-[rgb(229,231,235)] hover:bg-gradient-to-r from-[#E9FFFF] to-[#FFF2E1]" href="/instant-cash-loan/">
            <div className="text-center max-w-[340px] mx-auto [&>*]:mb-2 mt-2 mb-16 relative">
                <div className="min-w-[60px] min-h-[60px] mx-auto flex items-end">
                    <img alt="" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="mx-auto mb-1" src="/fibe-emis.png"></img>
                </div>
                <div className="font-semibold text-xl">Fibe EMIS</div>
                <div className="font-base text-lg leading-6 text-[rgb(153,153,153)] group-hover:text-black font-medium">Get big or small upgrades on affordable EMIs</div>
                <span className="absolute left-0 -bottom-16 w-full h-10 text-[rgb(7,159,159)] font-medium text-xl group-hover:-bottom-14 group-hover:transition-all">Explore</span>
            </div>
        </a>
      </div>
    </div>
  );
};

export default OurProducts;
