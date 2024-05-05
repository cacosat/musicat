import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function Carrousel({ children }) {
    const scrollContainer = useRef(null);

    const handleLeftClick = () => {
        if (scrollContainer.current.scrollLeft === 0) {
            scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth;
        } else {
            scrollContainer.current.scrollLeft -= 16 + 275; // gap + musicCard width
        }
    };

    const handleRightClick = () => {
        if (scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth >= scrollContainer.current.scrollWidth - 10) {
            // -10 is a buffer for better detection
            scrollContainer.current.scrollLeft = 0;
        } else {
            scrollContainer.current.scrollLeft += 16 + 275; // gap + musicCard width
        }
    };

    return (
        <div className="w-full relative flex place-items-center gap-2">
            <button className="absolute top-0 z-10 h-[100%] min-w-10 bg-gradient-to-l from-transparent via-background/75 to-background flex items-center justify-start"
                    onClick={handleLeftClick}>
                <img src="/leftArrow.svg" alt="left arrow"  />
            </button>
            <div ref={scrollContainer} className="max-w-[950px] flex gap-4 h-56 overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-custom-cards px-8">
                {children}
            </div>
            <button className="absolute top-0 right-0 z-10 h-[100%] min-w-10 bg-gradient-to-r from-transparent via-background/75 to-background flex items-center justify-end"
                    onClick={handleRightClick}>
                <img src="/rightArrow.svg" alt="left arrow"  />
            </button>
        </div>  
    )
}