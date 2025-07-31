import TypesOfLoan from '@/components/personal-loan/TypesOfLoan'
import React from 'react'

const navbarItems = [
    {
        name: "EMI calculator",
        href: "#calc"
    },
    {
        name: "How to apply",
        href: "#howto"
    },
    {
        name: "Types of loan",
        href: "#tol"
    },
    {
        name: "Fees & charges",
        href: "#fc"
    },
    {
        name: "Personal loan features",
        href: "#plf"
    },
    {
        name: "Check eligibilty",
        href: "#ce"
    },
    {
        name: "Documents required",
        href: "#dr"
    },
    {
        name: "Personal loan amount",
        href: "#pla"
    },
    {
        name: "FAQs",
        href: "#faq"
    },
    {
        name: "Blogs",
        href: "#blogs"
    },
    {
        name: "Download app",
        href: "#download"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    },
]


const blogsData = [
    {
        id: 1,
        type: 'Instant Cash Loan',
        date: '13 May 2025',
        title: 'How to Make Advance EMI Payment Online: A Detailed Guide',
        description:
            "EMIs make loan repayments easy by spreading them across monthly instalments. But what if you have some extra funds and want to pay more — or even finish your loan sooner? That&apos;s when the question arises: &apos;Can I pay EMIs in advance?&apos; Yes, many lenders allow advance EMI payments or prepayments — often through simple online … ",
        image:
            'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2024%2F05%2FHow-to-Make-Advance-EMI-Payment-Online.jpg&w=384&q=100',
        readTime: '3 mins read',
        layout: 'main',
    },
    {
        id: 2,
        type: 'Instant Cash Loan',
        date: '4 Mar 2025',
        title: 'iPhone on EMI: How to buy, chose the model and finance your purchase',
        description:
            'Today you can finance an iPhone via affordable EMIs both online and offline with ease. Many lenders in India offer a plethora of short-term loans or credit card options that you can use to buy your iPhone.  With so many options, choosing one can be difficult, especially when you want to buy an Apple iPhone … ',
        image:
            'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F11%2FBuy-iPhone-on-EMI.jpg&w=384&q=100',
        readTime: '3 mins read',
        layout: 'side',
    },
    {
        id: 3,
        type: 'Instant Cash Loan',
        date: '8 Nov 2025',
        title: 'Learn How to Buy a TV Under ₹20,000 on Affordable, Pocket-friendly EMIs',
        description:
            'When looking to buy a TV under ₹20,000, it is vital that you research your options. Most of these TVs have smart features offering internet connectivity, OTT subscription, voice assistance and more. Some models also have outstanding visual and audio quality, and you have many options to choose from.  Moreover, you can pay for a … ',
        image:
            'https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F11%2FBuy-smart-TV-under-Rs.20000.jpg&w=384&q=100',
        readTime: '3 mins read',
        layout: 'side',
    },
];

const page = () => {
    return (
        <div>
            <TypesOfLoan />

        </div>
    )
}

export default page

