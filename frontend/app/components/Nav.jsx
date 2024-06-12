'use client'

import { useState, useContext } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import homeIcon from '../../assets/icons/home.png'
import rightArrow from '@/assets/icons/rightArrow.png'
import search from '@/assets/icons/search.png'
import user from '@/assets/icons/user.png'
import settings from '@/assets/icons/settings.png'
import { SearchQueryContext } from "../context";
import SignIn from "./signIn";

export default function Navbar() {
    const {query, setQuery, showSearchResults, setShowSearchResults} = useContext(SearchQueryContext);
    // helper funct + hooks

    return <>
        <div className={`fixed top-0 left-0 w-[180px] h-screen bg-lefter shadow-custom-horizontal`}>
            <nav className={`flex flex-col justify-between px-8 py-9 gap-4 h-screen items-start text-white`}>
                <div className="flex flex-col gap-2">
                    <button className='text-xl mb-4'>
                        Icono
                    </button>
                    <Link href='/search' 
                        className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-xl"
                        onClick={() => {
                            setQuery('');
                            setShowSearchResults(false);
                        }} >
                        <Image
                            src={search}
                            height={24}
                            width={24}
                            alt="search"
                        />
                        <p className=''>Search</p>
                    </Link>
                    <Link href="/" 
                        className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-xl"
                        onClick={() => {
                            setQuery('');
                            setShowSearchResults(false);
                        }} >
                        <Image
                            src={homeIcon}
                            height={24}
                            width={24}
                            alt="home"
                        />
                        <p className=''>Home</p>
                    </Link>
                    <Link href="/profile" 
                        className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-xl"
                        onClick={() => {
                            setQuery('');
                            setShowSearchResults(false);
                        }} >
                        <Image
                            src={user}
                            height={24}
                            width={24}
                            alt="profile"
                        />
                        <p className=''>Profile</p>
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="/settings"
                        className="flex gap-2 hover:bg-[#FFFFFF1A] p-2 rounded-xl justify-self-end"
                        onClick={() => {
                            setQuery('');
                            setShowSearchResults(false);
                        }} >
                        <Image
                            src={settings}
                            height={24}
                            width={24}
                            alt="settings"
                        />
                        <p className=''>Settings</p>
                    </Link>
                </div>
            </nav>
        </div>
    </>
}