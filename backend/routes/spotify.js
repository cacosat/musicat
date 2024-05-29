import {getSpotifyAuthToken, getSpotifySearch} from "../utils/spotify.js";
import express from 'express';

const router = express.Router();

// Endpoints de la API que interactúan con Spotify (URL's que tengan '/api/spotify')

// Endpoint que va a buscar info a potify y la devuelve al navegador
router.get('/spotify-search', async (req, res) => {
    const { query, type } = req.query; // Extrae parámetros del request que llega desde frontend (por medio del URL)
    if (!query || !type) {
        // mensaje de error cuando no se especifican parámetros 'query' y/o 'type'
        return res.status(400).json({error: 'Query and Type params are required for search'});
    }

    try {
        const token_data = await getSpotifyAuthToken(); // función del archivo /utils/spotify.js pide token de autorización a spotify
        if (!token_data.access_token) {
            // error si no se tiene el token de acceso
            return res.status(401).json({error: 'failed to authenticate search token'});
        }

        // función de /utils/spotify.js que hace la búsqueda, necesita token, 'query' y 'type'
        const search_data = await getSpotifySearch(token_data.access_token, query, type); 
        res.json(search_data); // se devuelve variable con el resultado al navegador
    } catch (error) {
        console.error('Search failed: ', error);
        res.status(500).json({error : 'Server error'});
    }    
});

export default router; // esto permite luego usar estar rutas