'use client';

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { SearchQueryContext } from "../context";

export default function SearchBar({ children, placeholder }) {
    const {query, showSearchResults, handleQueryChange} = useContext(SearchQueryContext)
    const search_type = 'artist'; // artist, album or song

    useEffect(() => {
        // TODO: fetch only on new chars, and apply debounce

        const fetchData = async () => {
            if (query.length > 0) {
                try {
                    const response_token = await fetch(`http://localhost:5000/api/spotify/spotify-search?query=${encodeURIComponent(query)}&type=${search_type}`);
                    const search_data = await response_token.json();
                    console.log(search_data);
                } catch (error) {
                    console.error('Error fetching token data: ', error);
                }
            }
        };

        fetchData();
    }, [query]);


    return (
        <div className="flex justify-center items-center gap-2 w-[80%]">
            <div className="rounded-md grow shadow-custom-vertical">
                <Input type="email" 
                    placeholder={placeholder} 
                    value={query}
                    onChange={handleQueryChange}
                />
            </div>
            {children}
        </div>
    );
}