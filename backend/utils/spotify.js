import dotenv from 'dotenv'

dotenv.config(); // carga variables de entorno, del archivo .env

export async function getSpotifyAuthToken() {
    // función que ejecuta un request al endpoint de spotify que entrega el token de autorización
    const authParams = { // parámetros del request
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
    }

    const response = await fetch('https://accounts.spotify.com/api/token', authParams); // ejecuta el request al endpoint /api/token
    const data = await response.json(); // se convierte la info a json para poder usarla en el código
    return data 
}

export async function getSpotifySearch(token, query, type) {
    // función que ejecuta el request al endpoint de búsqueda de spotify
    const searchParams = { // parámetros del request
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, // token es el token de autorización que retorna la otra función
        }
    }

    // fetch (ir a buscar) datos de búsqueda para tipos 'artist', 'album', 'track'
    // const response = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=' + type, searchParams); // request anterior
    const response = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=artist,album,track', searchParams);
    const search_data = await response.json(); // devuelve un obj de la forma {artist:{...}, album:{...}, tracks:{...}}

    return search_data;
}
