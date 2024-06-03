import React from "react";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function SearchResult({type, artist = 'Loading Artist', album = 'Loading Album', song = 'Loading Song'}) {
    const artistName = artist;
    const albumName = album;
    const albumCover = '/albumIcon.svg'
    const songName = song;
    const borderGradients = {
        'artist': 'linear-gradient(to bottom, #6590FEBF, #6590FE33)',
        'song': 'linear-gradient(to bottom, #028090BF, #02809033)',
        'album': 'linear-gradient(to bottom, #5BE7A1BF, #5BE7A133)'
    }
    const bgGradients = {
        'artist': 'bg-gradient-to-r from-transparent to-[#6590FE33]', // linear-gradient(to right, #6590FEFF, #6590FE33)
        'song': 'bg-gradient-to-r from-transparent to-[#02809033]', // linear-gradient(to right, #028090FF, #02809033)
        'album': 'bg-gradient-to-r from-transparent to-[#5BE7A133]', // linear-gradient(to right, #5BE7A1FF, #5BE7A133)
    }

    function truncateText(text, limit) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    function itemDescription (type) {
        // función que devuelve la sección de descripción (nombre de artista, canción y/o de album) del item según su tipo
        switch (type) {
            // esto es un loop que revisa 'type' contra todos los case y cuando calzan ejecuta el código dentro
            case 'song':
                return <>
                    <a className="block text-lg font-semibold text-white" href="#" title={songName}>
                        {truncateText(songName, 15)}
                    </a>
                    <span className="block text-sm font-light text-custom-gray-200" title={`Album: ${albumName}; Artist: ${artistName}`}>{truncateText(albumName, 15)} - {truncateText(artistName)}</span>
                </>
            case 'artist':
                return <>
                    <a className="block text-lg font-semibold text-white" href="#" title={artistName}>
                        {truncateText(artistName, 15)}
                    </a>
                </>
            case 'album':
                return <>
                    <a className="block text-lg font-semibold text-white" href="#" title={albumName}>
                        {truncateText(albumName, 15)}
                    </a>
                    <span className="block text-sm font-light text-custom-gray-200" title={artistName}>{truncateText(artistName)}</span>
                </>
            default:
                return <>
                    <a className="block text-lg font-semibold text-white" href="#" title={'Loading...'}>
                        Loading...
                    </a>
                    <span className="block text-sm font-light text-custom-gray-200" >0%</span>
                </>
        }
    }

    return <>
        <GradientOutline px='0' py='0' borderGradient={borderGradients[type]}>
            <div className={`w-full h-full px-4 py-2 ${bgGradients[type]}`}>
                <div className="grid grid-cols-3 items-center h-[50px]">
                    <div className="flex gap-2 justify-self-start">
                        {/* Name and group */}
                        <img
                            alt="Cover Image"
                            className="rounded-lg w-[50px] h-[50px]"
                            src={albumCover}
                            style={{
                            aspectRatio: "1/1",
                            objectFit: "cover",
                            }}
                        />
                        <div className="flex flex-col justify-center"> 
                            {itemDescription(type)}
                        </div>
                    </div>
                    <div className="justify-self-center">
                        {/* Esto es para que aparezcan los rating solo cuanto el resultado es una canción, album o artista */}
                        {type != 'artist' && type != 'album' && type != 'song' ? (
                            ''
                        ) : (
                            <img src="/stars.png" alt="" />
                        )}
                    </div>
                    <div className="justify-self-end">
                        <Badge type={type} />
                    </div>
                </div>
            </div>
        </GradientOutline>
    </>
}