'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function SearchBar({ children, ...props }) {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const name = props.name;

    return (
        <div className="flex justify-center items-center gap-2 w-[80%]">
            <div className="rounded-md grow shadow-custom-vertical">
                <Input type="email" 
                    placeholder={`${name}`} 
                    value={query}
                    onChange={handleChange}
                />
            </div>
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
}