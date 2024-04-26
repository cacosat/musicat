import React from "react";
import Image from "next/image";
import GradientOutline from "./gradientOutline";

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
                        <div className="w-fit px-2 py-1 flex justify-center items-center gap-1 border border-accent-green-dark rounded-full bg-gradient-to-b from-accent-green-dark/50 to to-transparent">
                            <div>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00016 4H10.0001M2.50016 2.5H9.50015M3.44814 10.5H8.5522C9.06375 10.5 9.3195 10.5 9.52235 10.4042C9.701 10.3198 9.8506 10.1844 9.95235 10.015C10.0679 9.8227 10.0933 9.5682 10.1442 9.0592L10.3682 6.8194C10.4139 6.3622 10.4368 6.1336 10.3618 5.9569C10.2959 5.8017 10.1796 5.67325 10.0317 5.5922C9.8634 5.5 9.63365 5.5 9.1742 5.5H2.82615C2.36668 5.5 2.13694 5.5 1.96859 5.5922C1.8207 5.67325 1.70443 5.8017 1.63854 5.9569C1.56353 6.1336 1.58639 6.3622 1.63211 6.8194L1.85609 9.0592C1.90699 9.5682 1.93244 9.8227 2.04796 10.015C2.14971 10.1844 2.29936 10.3198 2.478 10.4042C2.68083 10.5 2.9366 10.5 3.44814 10.5ZM7.50015 8C7.50015 8.5523 6.8286 9 6.00015 9C5.17175 9 4.50016 8.5523 4.50016 8C4.50016 7.4477 5.17175 7 6.00015 7C6.8286 7 7.50015 7.4477 7.50015 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p className="text-white text-xs font-light">Album</p>
                        </div>
                    </div>
                </div>
            </GradientOutline>
        </div>
    )
}