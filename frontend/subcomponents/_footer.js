import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Urbanfit_logo from '../public/U-logo1 1 1.png'

export default function Footer(props) {
    return (
        <footer className={`w-full h-[80vh] ${props.classes} md:h-[43Vh] bg-black mt-5 pt-10 md:pt-[5%] transition-all duration-700`}>
            <div className="w-full md:pl-5 flex flex-col md:flex-row justify-around items-center md:items-start">
                <nav className="list-none text-white text-sm font-thin pb-3 space-y-4 flex flex-col items-center md:items-start">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link href='/returnsshipping'>Returns & Shipping</Link>
                    </li>
                    <li>
                        <Link href='/user/myorders'>Track Your Order</Link>
                    </li>
                </nav>
                <nav className="list-none text-white text-sm font-thin pb-3 space-y-4 flex flex-col items-center md:items-start">
                    <li>
                        <Link href=''>FAQ</Link>
                    </li>
                    <li>
                        <Link href=''>Newsletter</Link>
                    </li>
                </nav>
                <nav className="list-none text-white text-sm font-thin pb-3 space-y-4 flex flex-col items-center md:items-start">
                    <li>
                        <Link href=''>Terms and Conditions</Link>
                    </li>
                    <li>
                        <Link href=''>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href=''>Legel Notice</Link>
                    </li>
                </nav>
                <div className=" w-full md:w-1/5 my-5 flex flex-col justify-center items-center md:items-end text-white text-sm font-thin space-y-4">
                    <Link href='/' ><Image src={Urbanfit_logo} alt="Urbanfits Logo" className="w-16" /></Link>
                    <div className="space-x-5">
                        <Link href='#' ><i className="fa-brands fa-twitter"></i></Link>
                        <Link href='#' ><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link href='#' ><i className="fa-solid fa-paper-plane"></i></Link>
                    </div>
                    <p>support@urbanfits.store</p>
                </div>
            </div>
            <h4 className="text-white text-center text-xs font-thin">&copy; 2022 all rights reserved Urban Fits UAE</h4>
        </footer>
    )
}
