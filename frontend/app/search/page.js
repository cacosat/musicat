'use client';

import React from "react";
import SearchBar from "../components/searchBox";
import SearchResult from "../components/searchResult";
import { useContext } from "react";
import { SearchQueryContext } from "../context";

export default function Search() {
    const {query} = useContext(SearchQueryContext);
    return <>
        <div className="w-full flex flex-col items-center py-8">
            <SearchBar placeholder={'Busca algún artista, album o canción...'} />
        </div>
        <div className={`w-full flex flex-col items-center `}>
            <div className="w-[80%] overflow-hidden">
                {query.length > 0 ? (
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-xl">
                            Search results: <span className="font-light italic">{query}</span>
                        </p>
                        <div className="flex flex-col gap-4 py-8">
                            {/*  Map over search results like the example bellow: (this won't work with parenthesis ternary)
                             {resultsArray.map((result, index) => (
                                 <div key={index}>
                                     <h2>{result.title}</h2>
                                     <p>{result.description}</p>
                                 </div>
                             ))} */}
                            <SearchResult type='artist' />
                            <SearchResult type='album' />
                            <SearchResult type='song' />
                            <SearchResult type='adsf' />
                        </div>
                    </div>
                    ) : null}
            </div>
        </div>
    </>
}