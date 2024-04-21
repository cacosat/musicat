'use client';
import React from "react";
import { useState } from "react";
import { SearchQueryContext } from "../context";

export default function SearchProvider({children}) {
    // state containing the query of the SearchBar component, 
    // and the function to modify it:
    const [query, setQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false)

    const handleQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setShowSearchResults(value.length > 0);
    }

    return (
        <SearchQueryContext.Provider value={{query, setQuery, handleQueryChange, showSearchResults, setShowSearchResults}}>
            <div className="h-full">
                {children}
            </div>
        </SearchQueryContext.Provider>
    )
}