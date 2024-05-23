import getSpotifyAuthToken from "../utils/spotify.js";
import express from 'express';

const router = express.Router();

router.get('/spotify-search', async (req, res) => {
    const token_data = await getSpotifyAuthToken();
    res.send(token_data);
});

export default router;