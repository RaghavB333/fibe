import Image from 'next/image';

const TypesOfLoan = () => {
  return (
    <section className="px-6 lg:px-8 py-8 lg:py-12 bg-[#fff8fa]" id="typesofloan">
      <div className="flex-col lg:flex-row lg:flex gap-0 lg:gap-6 container">
        <div className="w-full lg:w-2/5 order-1 lg:order-2 mb-8 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold block lg:hidden text-center">
            Types of Personal Loan
          </h2>
          <img
            alt="Fibe personal loan and instant cash loan app"
            width="510"
            height="300"
            className="max-w-full mx-auto"
            src="https://www.fibe.in/_next/image/?url=%2Floans%2Floan-types.jpg&w=1080&q=75"
          />

        </div>
        <div className="w-full lg:w-3/5 text-center lg:text-left px-6 lg:px-0">
          <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold hidden lg:block">
            Types of Personal Loan
          </h2>

          {[
            { title: 'Loan for Wedding', desc: `Plan your dream wedding with Fibe's Wedding Loan.` },
            { title: 'Loan for Travel', desc: 'Give in to wanderlust with our Travel Loan.' },
            { title: 'Loan for Home Renovation', desc: 'Give your home a makeover with our Loan' },
            { title: 'Vehicle Loan', desc: 'Get yourself a brand-new set of wheels with our Auto Loans.' },
            { title: 'Loan for Education', desc: 'Fulfil your various educational needs with our Loan for Education.' },
            { title: 'Medical Loan', desc: 'Get the quality healthcare you deserve with our loan for Medical Emergencies.' },
            { title: 'Consumer Durable Loan', desc: 'Bring home best-in-class electronics with our Loan for Electronics.' }
          ].map(({ title, desc }, i) => (
            <div key={i} className="max-w-5xl text-base lg:text-xl mb-8 lg:mb-3">
              <h3 className="font-semibold flex lg:inline-flex justify-center lg:justify-normal after:content-[''] lg:after:content-['-'] lg:after:px-2">
                {title}
              </h3>
              {desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfLoan;
