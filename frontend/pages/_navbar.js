import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed z-10 left-0 top-0 w-16 h-full py-5 shadow-md bg-white flex flex-col justify-between items-center space-y-10">
            <i class="fa-solid fa-bars text-2xl" />
            <div className="w-full h-1/4 flex flex-col justify-around items-center">
            <Link href='/' ><i class="fa-solid fa-magnifying-glass"/></Link>
            <Link href='/' ><span className="material-symbols-rounded"> local_mall </span></Link>
            <Link href='/' ><span class="material-symbols-rounded">person</span></Link>
            </div>
            {/* <i class="fa-solid fa-arrow-right-from-bracket text-white"></i> */}
            <span></span>
        </nav>
    )
}
