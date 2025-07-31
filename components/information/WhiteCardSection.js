import React from "react";

const WhiteCardSection = ({title, description, cardData}) => {
  return (
    <section className="px-6 lg:px-8 py-8 lg:py-12 bg-[#fafcff]">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
          {title}
        </h2>
        <p className="max-w-5xl mx-auto text-base lg:text-xl mb-8 text-[#5c5c5c] font-normal">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-8 lg:max-w-screen-2xl justify-items-center mt-8 container mx-auto  [&>*]:border [&>*]:border-[#e5e7eb] [&>*]:bg-white [&>*]:p-5 [&>*]:rounded-xl [&>*]:max-w-lg [&>*]:w-full [&>*]:group [&>*]:pointer  ">
        {cardData.map((card,index)=> (
            <div key={index} className="text-center lg:text-left max-w-[340px] mx-auto bg-white">
          <div className="min-w-[60px] min-h-[60px] mx-auto lg:mx-0 mb-4">
            <div className="mx-auto w-[60px] h-[60px] rounded-full lg:mx-0 bg-white">
              <img
                alt="image"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="mx-auto lg:mx-0"
                src={`${card.img}`}
              ></img>
            </div>
          </div>
          <div className="font-semibold text-[18px] lg:text-xl text-[#262626]">
            {card.title}
          </div>
          <div className="font-medium text-sm lg:text-lg leading-7 mt-2 text-[#5c5c5c] ">
            {card.description}
          </div>
          <span className="absolute left-0 -bottom-16 w-full h-10 text-primary font-medium text-xl group-hover:-bottom-14 group-hover:transition-all"></span>
        </div>
        ))}
      </div>
    </section>
  );
};

export default WhiteCardSection;
