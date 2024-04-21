'use client';

import React from "react";
import {useState, useEffect, useContext} from 'react';
import SearchBar from "./searchBox";
import { SearchQueryContext } from "../context";
import Ratings from '@/app/components/Ratings'

export default function searchOverlay({children, searchBar = false}) {

    const { query, showSearchResults, setShowSearchResults } = useContext(SearchQueryContext)

    return (
        <>
            <div className="relative">
                <div className={`${showSearchResults ? 'h-full absolute z-20 inset-x-0 top-0 backdrop-blur-2xl bg-background/80' : ''} `} id="searchOverlay"> {/*transition-opacity duration-250 ${showSearchResults ? 'opacity-100' : 'opacity-0'} */}
                    <div className={`${searchBar ? ' flex justify-center py-8' : 'hidden'}`}>
                        <SearchBar placeholder='Barra de búsqueda'/>
                    </div>
                    <div className={` `}>
                        {showSearchResults ? (
                            <div className={` flex flex-col items-center h-full pt-8`}>
                                <div className="w-[80%] overflow-hidden">
                                    <p className="text-gray-400 text-xl">
                                        Search results: <span className="font-light italic">{query}</span>
                                    </p>
                                    <div className="flex flex-col items-center gap-4">
                                        {/* Map over results */}
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                        <Ratings />
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}