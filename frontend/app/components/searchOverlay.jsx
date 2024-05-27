'use client';

import React from "react";
import {useState, useEffect, useContext} from 'react';
import SearchBar from "./searchBox";
import { SearchQueryContext } from "../context";
import Ratings from '@/app/components/Ratings'

export default function searchOverlay({children, searchBar = false}) {

    const { query, searchType, setSearchType, searchResults, showSearchResults, setShowSearchResults } = useContext(SearchQueryContext)

    return (
        <>
            <div className="relative ">
                <div className={`${showSearchResults ? ' absolute z-20 inset-x-0 top-0 backdrop-blur-[20px] bg-background/25' : ''} `} id="searchOverlay"> {/*transition-opacity duration-250 ${showSearchResults ? 'opacity-100' : 'opacity-0'} */}
                    <div className={`${searchBar ? ' flex justify-center py-8' : ''}`}>
                        <SearchBar placeholder='Barra de búsqueda'/>
                    </div>
                    <div className={` `}>
                        {showSearchResults ? (
                            <div className={` flex flex-col items-center h-full `}>
                                <div className="w-[80%] overflow-hidden">
                                    <p className="text-gray-400 text-xl">
                                        Search results: <span className="font-light italic">{query}</span>
                                    </p>
                                    <div className="flex flex-col items-center gap-4 py-8">
                                        {/* Map over results */}
                                        {searchResults.artists?.items ? (
                                            searchResults.artists.items.map((item, index) => {
                                                // console.log('log: ' + item + index);
                                                let current = searchResults.artists.items[index];
                                                console.log(item);
                                                return <Ratings song='Song XXXXX' artist={item.name} album="Album XXXX" img={item.images[2]} />
                                            })
                                        ) : (
                                            <p className="text-white">No results found.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className={` w-[80%] mx-auto ${showSearchResults ? 'pt-[104px]' : ''}`}>
                    {children}
                </div>
            </div>
        </>
    );
}