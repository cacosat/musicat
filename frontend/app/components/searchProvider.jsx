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
    // Cache the function so it doesn't re-run unless query or searchType change
    const fetchSearchData = useCallback(async () => {
        if (query.length > 0) {
            // que solo corra cuando query tiene al menos una letra
            try {
                // request al backend de musicat, al endpoint /api/spotify/spotify-search para que el backend haga la búsqueda en spotify
                const response = await fetch(`http://localhost:5000/api/spotify/spotify-search?query=${encodeURIComponent(query)}&type=${searchType}`);
                search_data = await response.json(); // conversión de la respuesta a json para poder usarla en código
                setSearchResults(search_data); // variable con resultados queda en el useState hook 'searchType'
            } catch (error) {
                console.error('Error fetching token data: ', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    }, [query, searchType]) // función solo corre cuando cambia query o searchType

    useEffect(() => {
        const timerId = setTimeout(() => { // esto es para que la función se ejecute un poco despues de que el usuario termine de escribir
            fetchSearchData(); // esta es la ejecución del fetch/request, aquí se gatilla todo
            console.log(searchResults); // muestra los resultados en la consola de chrome
        }, 250); // delay de 250 milisegundos

        return () => clearTimeout(timerId) // buena práctica, saca el timer que se puso del componente, tiene que ver con el ciclo de componentes en react
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