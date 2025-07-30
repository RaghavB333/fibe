import React from 'react'
import Wave from '@/components/home_components/Wave'
import GetLoan from '@/components/home_components/GetLoan'
const page = () => {

    const LoanSectionTitle = "How to Get Instant Loan Online?";
    const LoanSectionDescription = "Fibe's digital platform has made applying for loans online super simple and secure. You can get an Instant Cash Loan in % minutes with us in a few easy steps:";

    const steps = [
    {
      title: 'Apply & register',
      description: 'Download the Fibe App or register on the website and provide a few basic details. It will help us in building your profile and initiate the application process.',
      img: 'https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fapply-instant.jpg&w=1080&q=75',
    },
    {
      title: 'Upload documents & get instant approval',
      description: 'Complete the verification by uploading a few required documents and get the approval instantly.',
      img: 'https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fupload.jpg&w=1080&q=75',
    },
    {
      title: 'Cash in minutes',
      description: 'Select the amount you want to be transferred after the approval. The money will be directly transferred to your bank account and within minutes.',
      img: 'https://www.fibe.in/_next/image/?url=%2Fanimations%2Finstant-loan%2Fcash.jpg&w=1080&q=75',
    },
  ];
  return (
    <div className='mt-28'>
      <Wave/>
      <GetLoan steps={steps} title={LoanSectionTitle} description={LoanSectionDescription} bgcolor={"white"}/>
    </div>
  )
}

export default page
