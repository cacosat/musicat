'use client';

import React from "react";
import SearchBar from "../components/searchBox";
import { useContext } from "react";
import { SearchQueryContext } from "../context";

export default function Search() {
    const {query} = useContext(SearchQueryContext);
    return <>
        <div className="w-full flex flex-col items-center py-8">
            <SearchBar placeholder={'Barra de búsqueda'} />
        </div>
        <div className={` flex flex-col items-center h-full `}>
            <div className="w-[80%] overflow-hidden">
                <p className="text-gray-400 text-xl">
                    Search results: <span className="font-light italic">{query}</span>
                </p>
            </div>
        </div>
    </>
}