import dotenv from 'dotenv'

dotenv.config();

export default async function getSpotifyAuthToken() {
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

