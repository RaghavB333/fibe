'use client';
import { useEffect, useState } from 'react';

export default function StickyFooter() {
    const [visible, setVisible] = useState(false);
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight; 
            setVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;

        // Remove non-digits
        const digitsOnly = value.replace(/\D/g, '');

        // Limit to 10 digits
        if (digitsOnly.length <= 10) {
            setPhone(digitsOnly);
        }
    };

    return (
        visible && (
            <div className="fixed bottom-0 left-0 w-full max-w-[100vw] max-lg:px-6 bg-[#232222] text-white py-4 lg:py-5 shadow-lg z-50 transition-all duration-300">
                <div className="w-full mx-auto text-center flex max-lg:flex-col justify-center items-center lg:gap-4 text-xl max-lg:text-sm">
                    <span>Need cash? Get up to ₹5 lakhs instantly</span>
                    <div className="flex gap-0">
                        <input
                            className="bg-white text-black p-3 max-lg:w-52 w-96 border border-gray-300 rounded-l-lg focus:border-[#2e9898] outline-none"
                            type="text"
                            inputMode="numeric"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Enter mobile number"
                            name="contact"
                            id="contact"
                        />
                        <button
                            className="bg-[#2e9898] text-white border border-[#2e9898] px-4 lg:px-8 py-2 font-semibold rounded-r-lg"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}
