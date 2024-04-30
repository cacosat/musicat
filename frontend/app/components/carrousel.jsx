import React from "react";

export default function Carrousel({ children }) {

    return (
        <div className="w-full relative flex place-items-center gap-2">
            <button className="absolute top-0 z-10 h-[95%] min-w-10 bg-gradient-to-l from-transparent via-background/75 to-background flex items-center justify-start">
                <img src="/leftArrow.svg" alt="left arrow"  />
            </button>
            <div className="max-w-[950px] flex gap-4 h-56 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cards px-8">
                {children}
            </div>
            <button className="absolute top-0 right-0 z-10 h-[95%] min-w-10 bg-gradient-to-r from-transparent via-background/75 to-background flex items-center justify-end">
                <img src="/rightArrow.svg" alt="left arrow"  />
            </button>
        </div>  
    )
}