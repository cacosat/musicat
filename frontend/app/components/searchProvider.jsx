'use client';
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { SearchQueryContext } from "../context";

export default function SearchProvider({children}) {
    // state containing the query of the SearchBox component, 
    // and the function to modify it:
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('artist');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false)
    let search_data;
    
    // Debounced fetch search data function
    // Cache the function so it doesn't rerun unless query or searchType change
    const fetchSearchData = useCallback(async () => {
        // TODO: fetch only on new chars, and apply debounce
        if (query.length > 0) {
            try {
                const response = await fetch(`http://localhost:5000/api/spotify/spotify-search?query=${encodeURIComponent(query)}&type=${searchType}`);
                search_data = await response.json();
                setSearchResults(search_data);
            } catch (error) {
                console.error('Error fetching token data: ', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    }, [query, searchType])

    useEffect(() => {
        const timerId = setTimeout(() => {
            fetchSearchData();
        }, 250); // 250 ms delay

        return () => clearTimeout(timerId)
    }, [query, searchType, fetchSearchData]);

    const handleTypeChange = (e) => {
        // TODO: capture value from filter for search ('artist', 'album', 'song')
        // const value = e.target.value;
        // setSearchType('artist');
    }
    const handleQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setShowSearchResults(value.length > 0);
    }


    return (
        <SearchQueryContext.Provider value={{query, setQuery, searchResults, handleQueryChange, showSearchResults, setShowSearchResults, searchType, setSearchType, handleTypeChange}}>
            <div className="h-full">
                {children}
            </div>
        </SearchQueryContext.Provider>
    )
}