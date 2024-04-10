'use client'

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import homeIcon from '../../assets/icons/home.png'
import rightArrow from '@/assets/icons/rightArrow.png'
import user from '@/assets/icons/user.png'
import settings from '@/assets/icons/settings.png'

export default function Navbar() {
    // helper funct + hooks
    const [isOpen, setIsOpen] = useState(false);
    // const toggleNav = (state) => {
    //     setIsOpen(!isOpen);
    // }

    return <>
        <div className={`fixed top-0 left-0 h-screen w-fit bg-lefter p-4 transition-all`}>
            <nav className={`flex flex-col ${ isOpen ? ' items-start' : ' items-center' } text-white h-screen`}>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'text-white' : 'text-black'} text-xl`}>
                    <Image
                        src={rightArrow}
                        height={24}
                        width={24}
                        alt="open nav bar icon"
                        className={`${isOpen ? 'rotate-180' : ''} rotate-0 transition-all`}
                    />
                </button>
                <Link href="/" className="flex gap-2">
                    <Image
                        src={homeIcon}
                        height={24}
                        width={24}
                        alt="home"
                    />
                    <p className={`${isOpen ? '' : 'hidden'} `}>Home</p>
                </Link>
                <Link href="/profile" className="flex gap-2">
                    <Image
                        src={user}
                        height={24}
                        width={24}
                        alt="profile"
                    />
                    <p className={`${isOpen ? '' : 'hidden'} `}>Profile</p>
                </Link>
                <Link href="/settings" className="flex gap-2 justify-self-end">
                    <Image
                        src={settings}
                        height={24}
                        width={24}
                        alt="settings"
                    />
                    <p className={`${isOpen ? '' : 'hidden'} `}>Settings</p>
                </Link>
            </nav>
        </div>
    </>
}