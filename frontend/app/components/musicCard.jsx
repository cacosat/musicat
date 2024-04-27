import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function MusicCard(props) {
    const songName = 'Fix You';
    const albumCover = '/XandY.jpg';
    const albumName = 'X&Y';
    const artistName = 'Coldplay';

    function truncateText(text, limit) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    return (
        <div className="w-[275px] h-[200px] ">
            <GradientOutline>
                <div className="w-full flex flex-col gap-4 ">
                    <div className=" flex gap-2 ">
                        <div className="rounded-lg overflow-hidden min-w-[125px] min-h-[125px] ">
                            <Image
                                src={albumCover}
                                width={125}
                                height={125}
                                alt="album cover"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-between">
                            <div className="flex justify-between">
                                <Badge type={`${props.type}`} />
                                <img src="/listenedIcon.svg" alt="" />
                            </div>

                            {/* conditionally render text hierarchy depending on props.type */}
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
                    </div>
                    <div className="flex justify-between">
                        <img src="/starFilled.svg" alt="" />
                        <img src="/newReview.svg" alt="" />
                    </div>
                </div>
            </GradientOutline>
        </div>
    )
}