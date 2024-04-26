import React from "react";
import Image from "next/image";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function MusicCard(props) {
    const songName = '';
    const albumCover = '/XandY.jpg';
    const albumName = 'X&Y';
    const artistName = 'Coldplay';

    return (
        <div className="max-w-[275px]">
            <GradientOutline>
                <div className="w-full flex flex-col gap-4">
                    <div className=" flex gap-2">
                        <div className="rounded-lg overflow-hidden min-w-[125px] min-h-[125px]">
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
                                icon
                            </div>

                            {/* TODO: conditionally render text hierarchy depending on props.type */}
                            <div className="flex flex-col gap-1 text-white">
                                <p>{albumName}</p>
                                <p>{artistName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p>nuevo</p>
                        <p>rating</p>
                    </div>
                </div>
            </GradientOutline>
        </div>
    )
}