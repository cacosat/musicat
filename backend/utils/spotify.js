import dotenv from 'dotenv'

dotenv.config();

export async function getSpotifyAuthToken() {
    const authParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
    }

    const response = await fetch('https://accounts.spotify.com/api/token', authParams);
    const data = await response.json()
    return data // data.access_token
}

export async function getSpotifySearch(token, query, type) {
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    const response = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=' + type, searchParams);
    const search_data = await response.json();
    return search_data;
}
