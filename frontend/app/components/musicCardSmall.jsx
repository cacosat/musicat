import React from "react";
import {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function MusicCardSmall(props) { // type can be 'artist', 'album' and 'song'
    const [isHovered, setIsHovered] = useState(false);
    const songName = 'Swallowed By The Sea'
    const albumCover = '/XandY.jpg';
    const artistName = 'Coldplay';
    const albumName = 'X&Y';

    function truncateText(text, limit) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    function typeToDisplay(type) {
        
        if (type === 'artist') {
            return <>
                <div className="flex gap-2 items-center text-white font-semibold">                  
                    <img src="artistIcon.svg" alt="Artist icon" className="w-[24px] h-[24px]" />
                    <p title={artistName}>{truncateText(artistName, 25)}</p>
                </div>
            </>
        } else if (type === 'album') {
            return <>
                <div className="text-custom-gray-200 opacity-90">
                    <div className="flex gap-2 items-center text-white font-semibold">                  
                        <img src="albumIcon.svg" alt="Album icon" className="w-[18px] h-[18px]" />
                        <p title={albumName}>{truncateText(albumName, 25)}</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                        <img src="artistIcon.svg" alt="Artist icon" className="w-[18px] h-[18px]" />
                        <p title={artistName}>{truncateText(artistName, 25)}</p>
                    </div>
                </div>
            </>
        } else if (type === 'song') {
            return <>
                <div className="text-custom-gray-200 opacity-90">
                    <div className="flex gap-2 items-center text-white font-semibold">                  
                        <img src="/songIcon.svg" alt="Song icon" className="w-[18px] h-[18px] " />
                        <p title={songName}>{truncateText(songName, 25)}</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                        <img src="albumIcon.svg" alt="Album icon" className="w-[18px] h-[18px]" />
                        <p title={albumName}>{truncateText(albumName, 25)}</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                        <img src="artistIcon.svg" alt="Artist icon" className="w-[18px] h-[18px]" />
                        <p title={artistName}>{truncateText(artistName, 25)}</p>
                    </div>
                </div>
            </>
        } else {
            return <>
                <div className="flex place-items-center w-full h-full">
                    Error, type incorrect
                </div>
            </>
        }
    }

    return(
        <div className="w-fit"
            onMouseEnter={() => {setIsHovered(true)}}
            onMouseLeave={() => {setIsHovered(false)}}
        >
            <GradientOutline bg={albumCover} px={0} py={0} blur={isHovered} >
                {/* TODO: nombre que se elija según tipo de tarjeta y muestre artista, canción y album */}
                <div className="text-white rounded-lg max-w-[200px] w-[200px] h-[200px] flex flex-col justify-between p-4 bg-gradient-to-r from-black/50 via-black/0 to-black/50 hover:bg-black/25 transition-all">
                    <div className="flex justify-between">
                        <Badge type={props.type} />
                        <img src="/starFilled.svg" alt="" />
                    </div>
                    {typeToDisplay(props.type)}
                </div>
            </GradientOutline>
        </div>
    )
}