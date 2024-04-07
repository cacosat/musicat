import React from "react";
import Link from "next/link";

export default function Navbar() {
    // helper funct + hooks

    return <>
        <div className="fixed top-0 left-0 h-screen w-12 hover:w-64 bg-lefter p-4 transition-all">
            <nav className="flex flex-col">
                <Link href="/">Home</Link>
                <Link href="/music">Music</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </div>
    </>
}