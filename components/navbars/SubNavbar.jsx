'use client';
import React, { useEffect, useState } from 'react';

const SubNavbar = ({ items }) => {
    const [visible, setVisible] = useState(false);
    const [navType, setNavType] = useState("desktop");

    // Scroll-based visibility
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 1.25;
            setVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Device type detection
    useEffect(() => {
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        const width = window.innerWidth;

        if (isTouch && width > 1024) {
            setNavType("touchLarge"); // iPad Pro
        }
    }, []);

    return (
        <>
            {visible && items && (
                <section
                    className={`bg-[#fafcff] rounded-b-lg py-3 lg:py-3 block fixed ${navType === "touchLarge" ? "mt-20" : "mt-[9vh] lg:mt-[11.3vh]"
                        } z-[9000] w-screen shadow-lg`}
                >
                    <ul className="flex flex-nowrap items-end w-full overflow-x-auto overflow-y-hidden mb-0 container scrollbar-hide">
                        {items.map((item, index) => (
                            <li key={index} className="inline-flex mx-2 shrink-0">
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const targetId = item.href.replace('#', '');
                                        const element = document.getElementById(targetId);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
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

