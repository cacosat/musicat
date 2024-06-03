import React from "react";

export default function Badge(props) {
    const albumBorderColor = 'border-accent-green-light';
    const albumBgGradient = 'from-accent-green-light/50';
    const artistBorderColor = 'border-accent-blue-dark';
    const artistBgGradient = 'from-accent-blue-dark/50';
    const songBorderColor = 'border-accent-green-dark';
    const songBgGradient = 'from-accent-green-dark/50';

    const badgeToDisplay = () => {
        if (props.type === 'artist') {
            return (
                <div className={`w-fit px-2 py-1 flex justify-center items-center gap-1 border ${artistBorderColor} rounded-full bg-gradient-to-b ${artistBgGradient} to-transparent backdrop-blur-3xl`}>
                    <div>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6.5V7C10 9.20915 8.20915 11 6 11C3.79086 11 2 9.20915 2 7V6.5M6 9C4.89543 9 4 8.10455 4 7V4C4 2.89543 4.89543 2 6 2C7.10455 2 8 2.89543 8 4V7C8 8.10455 7.10455 9 6 9Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-white text-xs font-light">Artist</p>
                </div>
            )
        } else if (props.type === 'album') {
            return (
                <div className={`w-fit px-2 py-1 flex justify-center items-center gap-1 border ${albumBorderColor} rounded-full bg-gradient-to-b ${albumBgGradient} to-transparent backdrop-blur-3xl`}>
                    <div>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00016 4H10.0001M2.50016 2.5H9.50015M3.44814 10.5H8.5522C9.06375 10.5 9.3195 10.5 9.52235 10.4042C9.701 10.3198 9.8506 10.1844 9.95235 10.015C10.0679 9.8227 10.0933 9.5682 10.1442 9.0592L10.3682 6.8194C10.4139 6.3622 10.4368 6.1336 10.3618 5.9569C10.2959 5.8017 10.1796 5.67325 10.0317 5.5922C9.8634 5.5 9.63365 5.5 9.1742 5.5H2.82615C2.36668 5.5 2.13694 5.5 1.96859 5.5922C1.8207 5.67325 1.70443 5.8017 1.63854 5.9569C1.56353 6.1336 1.58639 6.3622 1.63211 6.8194L1.85609 9.0592C1.90699 9.5682 1.93244 9.8227 2.04796 10.015C2.14971 10.1844 2.29936 10.3198 2.478 10.4042C2.68083 10.5 2.9366 10.5 3.44814 10.5ZM7.50015 8C7.50015 8.5523 6.8286 9 6.00015 9C5.17175 9 4.50016 8.5523 4.50016 8C4.50016 7.4477 5.17175 7 6.00015 7C6.8286 7 7.50015 7.4477 7.50015 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-white text-xs font-light">Album</p>
                </div>
            )
        } else if (props.type === 'song') {
            return (
                <div className={`w-fit px-2 py-1 flex justify-center items-center gap-1 border ${songBorderColor} rounded-full bg-gradient-to-b ${songBgGradient} to-transparent backdrop-blur-3xl`}>
                    <div>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.25 4.94488V9.74988M6.25 4.94488V3.28816C6.25 3.18449 6.25 3.13265 6.26735 3.08854C6.28265 3.04959 6.3075 3.01511 6.3396 2.98827C6.376 2.95786 6.42515 2.94147 6.5235 2.90868L8.7235 2.17535C8.90125 2.1161 8.99015 2.08647 9.0609 2.10424C9.1228 2.11979 9.17645 2.15844 9.2108 2.21227C9.25 2.27377 9.25 2.36746 9.25 2.55482V4.21155C9.25 4.31522 9.25 4.36706 9.23265 4.41117C9.21735 4.45012 9.1925 4.48459 9.1604 4.51144C9.124 4.54185 9.07485 4.55824 8.9765 4.59102L6.7765 5.32436C6.59875 5.38361 6.50985 5.41323 6.4391 5.39547C6.3772 5.37992 6.32355 5.34127 6.2892 5.28744C6.25 5.22594 6.25 5.13225 6.25 4.94488ZM6.25 9.74988C6.25 10.4402 5.4665 10.9999 4.5 10.9999C3.5335 10.9999 2.75 10.4402 2.75 9.74988C2.75 9.05948 3.5335 8.49988 4.5 8.49988C5.4665 8.49988 6.25 9.05948 6.25 9.74988Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-white text-xs font-light">Song</p>
                </div>
            )
        }
    }

    return (
        <div id='badge'>
            {badgeToDisplay()}
        </div>
    )
}