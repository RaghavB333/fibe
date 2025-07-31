import React from 'react'
import { useEffect, useState } from 'react';



const SubNavbar = ({ items }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {

            const scrollThreshold = window.innerHeight * 1.25;
            setVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            {visible && items && (
                <section className="bg-[#fafcff] rounded-b-lg py-3 lg:py-3 block fixed mt-[9vh] lg:mt-[11.3vh] z-[9000] lg:z-[9999] w-screen shadow-lg">
                    <ul className="flex flex-nowrap items-end w-full overflow-x-auto overflow-y-hidden mb-0 container scrollbar-hide">
                        {items.map((item, index) => (
                            <li key={index} className="inline-flex mx-2 shrink-0">
                                <a
                                    href={item.href}
                                    className="px-3 py-0 lg:py-2 text-sm lg:text-base font-medium text-gray-950 hover:text-[#079f9f]"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
};

export default SubNavbar;

