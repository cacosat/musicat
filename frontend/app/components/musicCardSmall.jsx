import React from "react";
import {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function MusicCardSmall(props) { // type can be 'artist', 'album' and 'song'
    const songName = 'Swallowed By The Sea'
    const albumCover = '/Coldplay.jpg';
    const artistName = 'Coldplay';
    const albumName = 'albumName';

    function truncateText(text, limit) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    return(
        <div className="w-fit">
            <GradientOutline background="cards" className="">
                <div className="flex flex-col gap-4">
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
                            {/* Title, or top text */}
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
                            {/* Secondary text */}
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
                </div>
            </GradientOutline>
        </div>
    )
}