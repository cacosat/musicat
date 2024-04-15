'use client';

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { SearchQueryContext } from "../context";

export default function SearchBar({ children, placeholder }) {
    const {query, handleQueryChange} = useContext(SearchQueryContext)

    useEffect(() => {
        console.log(query);
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
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
}