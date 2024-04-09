'use client'

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import homeIcon from '../../assets/icons/home.png'

export default function Navbar() {
    // helper funct + hooks
    const [isOpen, setIsOpen] = useState(false);
    // const toggleNav = (state) => {
    //     setIsOpen(!isOpen);
    // }

    return <>
        <div className={`fixed top-0 left-0 h-screen w-12 ${ isOpen ? 'w-64' : 'w-12' } bg-lefter p-4 transition-all`}>
            <nav className="flex flex-col text-white">
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'text-white' : 'text-black'} text-xl`}>lkdsajf</button>
                <Link href="/" className="flex gap-2">
                    <Image
                        src={homeIcon}
                        height={24}
                        width={24}
                        alt="home"
                    />
                    <p className={`${isOpen ? '' : 'hidden'} `}>Home</p>
                </Link>
                <Link href="/music">Music</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </div>
    </>
}