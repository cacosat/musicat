'use client';

import React from "react";
import {useState, useEffect, useContext} from 'react';
import SearchBar from "./searchBox";
import { SearchQueryContext } from "../context";

export default function searchOverlay({children, searchBar = false}) {
    const [overlayVisible, setOverlayVisible] = useState(false);

    const { query, showSearchResults } = useContext(SearchQueryContext)
    // const overlayDynamicClass = overlayVisible ? "opacity-100" : "opacity-10 pointer-events-none";


    useEffect(() => {
        setOverlayVisible(showSearchResults)
    }, [showSearchResults])

    return (
        <>
            <div className={`mx-auto `} id="searchOverlay">
                <div className={` ${searchBar ? 'absolute z-[100] inset-x-0 top-0 my-8 ml-[180px] flex justify-center' : 'hidden'}`}>
                    <SearchBar placeholder='Barra de búsqueda'/>
                </div>
                <div className={` transition-all`}> {/* ${overlayDynamicClass} */}
                    {showSearchResults ? (
                        <div className="flex flex-col items-center h-full mt-[104px]">
                            <div className="w-[80%] overflow-hidden">
                                <p className="text-gray-400 text-xl">
                                    Search results: <span className="font-thin italic">{query}</span>
                                </p>    
                            </div>    
                        </div>
                    ) : children}
                </div>
            </div>
        </>
    );
}