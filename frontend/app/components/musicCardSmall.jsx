import React from "react";
import {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function MusicCardSmall(props) { // type can be 'artist', 'album' and 'song'
    const songName = 'Swallowed By The Sea'
    const albumCover = '/estoyBien.jpg';
    const artistName = 'artist name';
    const albumName = 'album name';

    function truncateText(text, limit) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    return(
        <div className="w-fit mb-8">
            <GradientOutline bg={albumCover} px={0} py={0} blur={false} >
                {/* TODO: gradiente negro más oscuro en los lados que en el centro */}
                {/* TODO: nombre que se elija según tipo de tarjeta y muestre artista, canción y album */}
                <div className="text-white h-[200px] p-4 bg-gradient-to-t from-black to-transparent flex flex-col justify-between">
                    <div className="flex justify-between">
                        <Badge type='artist' />
                        <img src="/starFilled.svg" alt="" />
                    </div>
                    <div className="text-custom-gray-200 opacity-90">
                        <div className="flex gap-2 items-center text-white font-semibold">                  
                            <img src="/songIcon.svg" alt="Song icon" className="w-[18px] h-[18px] " />
                            <p title={songName}>{truncateText(songName, 25)}</p>
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                            <img src="artistIcon.svg" alt="Artist icon" className="w-[18px] h-[18px]" />
                            <p title={artistName}>{truncateText(artistName, 25)}</p>
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                            <img src="albumIcon.svg" alt="Album icon" className="w-[18px] h-[18px]" />
                            <p title={albumName}>{truncateText(albumName, 25)}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col gap-4">
                    <div className="relative w-[150px] h-[100px] flex place-items-center aspect-video overflow-hidden rounded-lg">
                        <Image
                            src={albumCover}
                            width={200}
                            height={200}
                            alt="album cover"
                            className="absolute min-w-full min-h-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 hover:opacity-0 transition-all"></div>
                    </div>
                    <Badge type={props.type} />
                    <div className="flex flex-col gap-1 text-white">
                        <div className="font-semibold">
                            {props.type === 'song' ? (
                                <Link href={`/song/${songName}`}>
                                    <p className="" title={songName}>{truncateText(songName, 20)}</p>
                                </Link>
                            ) : (props.type === 'album' ? (
                                <Link href={`/album/${albumName}`}>
                                    <p className="" title={albumName}>{truncateText(albumName, 20)}</p>
                                </Link>
                            ) : (
                                <Link href={`/artist/${artistName}`}>
                                    <p className="" title={artistName}>{truncateText(artistName, 30)}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="text-custom-gray-200 font-light text-sm">
                            {props.type === 'song' ? (
                                <div>
                                    <Link href={`/album/${albumName}`}>
                                        <p className="" title={albumName}>{truncateText(albumName, 10)}</p>
                                    </Link>
                                    <Link href={`/artist/${artistName}`}>
                                        <p className="" title={artistName}>{truncateText(artistName, 10)}</p>
                                    </Link>
                                </div>
                            ) : (props.type === 'album' ? (
                                <Link href={`/artist/${artistName}`}>
                                    <p className="" title={artistName}>{truncateText(artistName, 20)}</p>
                                </Link>
                            ) : (
                                null
                            ))}
                        </div>
                    </div>
                </div> */}
            </GradientOutline>
        </div>
    )
}