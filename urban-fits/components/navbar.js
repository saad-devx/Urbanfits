import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Link from 'next/link'
import LanguageModal from './modals/languagemodal';
import Search from './search';
import Cart from './cart';
import Image from 'next/image';
import Logo from '@/public/logos/logo_black.svg'

const ListItem = (props) => {
    const router = useRouter()
    return (
        <>
            <Link onClick={props.handleMenu} href={router.asPath === props.href ? '/' : props.href} className={`${props.classes} stroke_text hover:text-zinc-800 transition-all duration-500`}>{router.asPath === props.href ? 'Home' : props.children}</Link>
        </>
    )
}

export default function Navbar(props) {
    const [bars, setBars] = useState('')
    const [menu, setMenu] = useState('-translate-x-full')
    const handleMenu = () => {
        if (bars === '') {
            setBars('open')
            setMenu('')
        }
        if (bars === 'open') {
            setBars('')
            setMenu('-translate-x-full')
        }
    }

    // states and function for modals
    const [modal3, setModal3] = useState(false)
    const toggleModal = (e) => {
        if (e.target.name === "modal3") {
            if (modal3 === false) return setModal3(true)
            if (modal3 === true) return setModal3(false)
        }
    }

    // state for search componenet
    const [search, setSearch] = useState(false)
    const toggleSearch = () => {
        if (search === false) return setSearch(true)
        if (search === true) return setSearch(false)
    }
    // state for cart componenet
    const [cart, setCart] = useState(false)
    const toggleCart = () => {
        if (cart === false) return setCart(true)
        if (cart === true) return setCart(false)
    }
    const { totalUniqueItems } = useCart()

    // getting user payload form jwt token in localstorage
    // const [user, setUser] = useState(false)
    // useEffect(() => {
    //     const userData = jwt.decode(localStorage.getItem("authToken"))
    //     if (userData) return setUser(userData._doc)
    // }, [])
    return (
        <>
            <Search search={search} toggleSearch={toggleSearch} />
            <Cart cart={cart} toggleCart={toggleCart} />
            <LanguageModal show={modal3} toggleModal={toggleModal} />
            <Link href="/" ><Image src={Logo} className={`${props.hideNav ? 'translate-x-40' : ''} fixed ${props.lowerLogo?'top-[18vh]': 'top-[14vh]'} right-6 md:top-[17vh] md:right-10 z-40 w-14 md:w-24 lg:w-20 transition-all duration-1000 ease-linear`} alt="Urban images" /></Link>
            <div id='navbar' className={`${props.hideNav ? 'h-0 -translate-y-full' : 'h-[10vh] lg:h-[13vh] lg:min-h-[80px]'} w-full -z-10 overflow-hidden transition-all duration-1000 ease-linear`}></div>
            <nav id='navbar' className={`${props.hideNav ? 'h-0 -translate-y-full' : 'h-[10vh] lg:h-[13vh] lg:min-h-[80px]'} fixed border z-30 top-0 left-0 lg:translate-x-0 w-full  p-7 lg:px-14 shadow-sm bg-white font_gotham font-semibold text-sm flex justify-between items-center overflow-hidden transition-all duration-[1.2s] ease-linear`}>
                <button onClick={handleMenu} className='menu_parent gap-10 flex items-center cursor-pointer' >
                    <div className={`${bars} menu btn3`}>
                        <div className="icon"></div>
                    </div>
                    <span className='hidden lg:block tracking-[1.5em]'>MENU</span>
                </button>
                <button onClick={toggleSearch} className='hidden group lg:flex lg:flex-col justify-center items-center text-center tracking-[1.5em]' >&nbsp;SRCH<span className="w-0 group-hover:w-full h-[2px] bg-black transition-all"></span></button>
                <button onClick={toggleCart} className='group flex justify-center items-center gap-5 lg:gap-10' >
                    <div className="flex">
                        <span className="hidden lg:block w-10 group-hover:w-6 h-[2px] mx-1 bg-black transition-all"></span>
                        <span className="w-5 group-hover:w-9 h-[2px] mx-1 bg-black transition-all"></span>
                    </div>
                    <span className="tracking-[0.7em] lg:tracking-[1.5em]">CART</span>
                    <span>{totalUniqueItems}</span>
                </button>
            </nav>

            <div className={`${menu} w-full h-90vh lg:h-87vh fixed left-0 bottom-0 z-30 flex justify-center items-center transition-all ${props.transition ? props.transition : 'duration-700'} bg-white shadow-lg`}>
                <ul className='w-90pr h-auto list-none flex flex-col gap-[10vh] lg:gap-[12vh] leading-[0.84] lg:leading-[105px] font_gotham_black text-6xl lg:text-9xl font-bold'>
                    <li className='w-full border-b' >
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/Women'>Women</ListItem>
                    </li>
                    <li className='w-full border-b flex'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[30%]' href='/products/Men'>Men</ListItem>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%] hidden lg:block' href='/products/Kids'>Kids</ListItem>
                    </li>
                    <li className='w-full border-b flex lg:hidden'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/Kids'>Kids</ListItem>
                    </li>
                    <li className='w-full border-b flex justify-start lg:justify-between lg:px-14' >
                        <ListItem handleMenu={handleMenu} href='/stories'>Stories</ListItem>
                        <ListItem handleMenu={handleMenu} classes='hidden lg:block' href='/sale'>Sale</ListItem>
                    </li>
                    <li className='w-full border-b flex lg:hidden'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/sale'>Sale</ListItem>
                    </li>
                    <button onClick={toggleSearch} className='lg:hidden group flex justify-center items-center text-base tracking-[1.5em]'>SRCH<span className="w-4/5 group-focus:w-0 h-[2px] bg-black transition-all"></span></button>
                </ul>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    return { props: { ...context } }
}