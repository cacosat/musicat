'use client';

import React from "react";
import {useState, useEffect, useContext} from 'react';
import SearchBar from "./searchBox";
import { SearchQueryContext } from "../context";
import Ratings from '@/app/components/Ratings'

export default function searchOverlay({children, searchBar = false}) {

    // con el useContext(SearchQueryContext) es que se puede acceder a la info del searchProvider, incluidos los resultados de la búsqueda en spotify
    const { query, searchType, setSearchType, searchResults, showSearchResults, setShowSearchResults } = useContext(SearchQueryContext)

    return (
        <>
            <div className={`relative min-h-screen `}>
                <div className={`${showSearchResults ? ' absolute z-20 min-h-screen inset-x-0 top-0 backdrop-blur-[20px] bg-background/25' : ''} `} id="searchOverlay"> {/*transition-opacity duration-250 ${showSearchResults ? 'opacity-100' : 'opacity-0'} */}
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
                                        {/* .map() permite loopear sobre los resultados y asignar sus datos a los componentes,
                                        Lo que hace es que tiene dos argumentos, el item (el elemento sobre el cuál está actualmente) y
                                        el index (la posición del elemento dentro del array). */}
                                        {searchResults.artists?.items ? (
                                            // esto revisa si existe el elemento 'artists' dentro de searchResults
                                            // dado que es lo que entrega spotify, en caso de que esté, entonces se ejecuta el primer
                                            // parentesis (tiene código para armar los componentes con los resultados), pero en caso
                                            // de que no esté, entonces se ejecuta el segúndo paréntesis "No results found"
                                            searchResults.artists.items.map((item, index) => {
                                                // código para armar los componentes con los resultados
                                                if (index < 10) { // 10 marca el límite de componentes a mostrar.
                                                    // console.log('log: ' + item + index);
                                                    let current = searchResults.artists.items[index];
                                                    const img_url = item.images[2]?.url || item.images[0]?.url || '/albumIcon.svg';
                                                    return <Ratings key={index} song='Song XXXXX' artist={item.name} album="Album XXXX" img={img_url} />
                                                } 
                                            })
                                        ) : (
                                            // En caso de que no hayan resultados
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