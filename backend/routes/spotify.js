import {getSpotifyAuthToken, getSpotifySearch} from "../utils/spotify.js";
import express from 'express';

const router = express.Router();

router.get('/spotify-search', async (req, res) => {
    const { query, type } = req.query; // extracts parameters from request (from URL)
    if (!query || !type) {
        return res.status(400).json({error: 'Query and Type params are required for search'});
    }

    try {
        const token_data = await getSpotifyAuthToken();
        if (!token_data.access_token) {
            return res.status(401).json({error: 'failed to authenticate search token'});
        }

        const search_data = await getSpotifySearch(token_data.access_token, query, type);
        res.json(search_data);
    } catch (error) {
        console.error('Search failed: ', error);
        res.status(500).json({error : 'Server error'});
    }    
});

export default router;