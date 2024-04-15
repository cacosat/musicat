'use client';

import React from "react";
import {useState, useEffect, useContext} from 'react';
import SearchBar from "./searchBox";
import { SearchQueryContext } from "../context";

export default function searchOverlay({children}) {
    // hooks + func
    const { query, showSearchResults } = useContext(SearchQueryContext)
    
    const handleShowResults = (isResults, query) => {
        if (!isResults) {
            return children;
        } else {
            return <>
                <div className="h-screen">
                    <h1>Results</h1>    
                </div>
            </>
        }
    }

    return (
        <>
            <div className="" id="searchOverlay">
                <div className="absolute inset-x-0 top-0 my-8 ml-[180px] flex justify-center">
                    <SearchBar placeholder='Barra de búsqueda'/>
                </div>
                {handleShowResults(showSearchResults, query)}
            </div>
        </>
    );
}