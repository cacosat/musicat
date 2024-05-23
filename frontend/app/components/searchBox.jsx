'use client';

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { SearchQueryContext } from "../context";

export default function SearchBar({ children, placeholder }) {
    const {query, showSearchResults, handleQueryChange} = useContext(SearchQueryContext)

    useEffect(() => {
        if (query.length > 0) {
            const token_data = fetch('http://localhost:5000/api/spotify/spotify-search');
            console.log(token_data);
        }
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