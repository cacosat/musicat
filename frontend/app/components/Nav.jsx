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

    return <>
        <div className={`fixed top-0 left-0 w-[164px] h-screen bg-lefter`}>
            <nav className={`flex flex-col justify-between w-fit px-8 py-9 gap-4 h-screen items-start text-white shadow-xl`}>
                <div className="flex flex-col gap-2">
                    <button onClick={() => setIsOpen(!isOpen)} className='text-xl'>
                        <Image
                            src={rightArrow}
                            height={24}
                            width={24}
                            alt="open nav bar icon"
                            className={`${isOpen ? 'rotate-180' : ''} rotate-0 transition-all`}
                        />
                    </button>
                    <Link href="/" className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-3xl">
                        <Image
                            src={homeIcon}
                            height={24}
                            width={24}
                            alt="home"
                        />
                        <p className=''>Home</p>
                    </Link>
                    <Link href="/profile" className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-3xl">
                        <Image
                            src={user}
                            height={24}
                            width={24}
                            alt="profile"
                        />
                        <p className=''>Profile</p>
                    </Link>
                </div>
                <Link href="/settings" className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-3xl justify-self-end">
                    <Image
                        src={settings}
                        height={24}
                        width={24}
                        alt="settings"
                    />
                    <p className=''>Settings</p>
                </Link>
            </nav>
        </div>
    </>
}