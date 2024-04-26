import React from "react";
import Image from "next/image";
import GradientOutline from "./gradientOutline";
import Badge from "./badge";

export default function MusicCard() {
    const albumCover = '/XandY.jpg'

    return (
        <div className="max-w-[275px]">
            <GradientOutline>
                <div className="">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={albumCover}
                            width={125}
                            height={125}
                            alt="album cover"
                        />
                    </div>
                    <div>
                        <Badge type='song' />
                        <Badge type='artist' />
                        <Badge type='album' />
                    </div>
                </div>
            </GradientOutline>
        </div>
    )
}