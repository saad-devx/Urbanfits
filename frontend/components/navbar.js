import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import jwt from 'jsonwebtoken';
import Link from 'next/link'
import LanguageModal from './modals/languagemodal';
import Search from './search';
import Cart from './cart';
import Logo from '../public/logos/logo_black.svg'
// image imports
import Image from 'next/image';
import female_avatar from '../public/avatars/female.svg'
import male_avatar from '../public/avatars/male.svg'


function ListItem(props) {

    const [dropdown, setDropdown] = useState(false)
    const toggleSubMenu = () => {
        if (dropdown === false) return setDropdown(true)
        if (dropdown === true) return setDropdown(false)
    }
    return (
        <>
            {props.submenu ?
                <>
                    <li onClick={toggleSubMenu} className='list_item mb-3' ><button className='w-full flex justify-between px-8 border-b-2 border-white transition-all' >{props.value}<i className={`material-symbols-outlined text-lg translate-y-1 transition-all ${dropdown === true ? "rotate-90" : ""}`}>chevron_right</i></button></li>
                    {props.submenu ?
                        <ul className={`${dropdown === true ? "" : "hidden"} pl-14 pb-3 font_futuraLTlite duration-500 overflow-hidden w-full list-none `}>
                            {props.submenu.map((value) => {
                                return (
                                    <li><Link href={`/products/${value.toLowerCase() === "view all" ? props.value : value}`} >{value}</Link></li>
                                )
                            })}
                        </ul>
                        : null}
                </>
                : <li onClick={toggleSubMenu} className='list_item mb-3' ><Link href={props.href} className='flex justify-between px-8 border-b-2 border-white transition-all' >{props.value}</Link></li>
            }
        </>
    )
}

export default function Navbar(props) {
    const [nav, setNav] = useState('')
    const [bars, setBars] = useState('')
    const [menu, setMenu] = useState('-translate-x-full')
    const handleMenu = () => {
        if (bars === '') {
            setBars('open')
            props.setExpand(true)
            setMenu('')
            setNav('lg:opacity-0 lg:pointer-events-none')
        }
        if (bars === 'open') {
            setBars('')
            props.setExpand(false)
            setNav('')
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
    const [user, setUser] = useState(false)
    useEffect(() => {
        const userData = jwt.decode(localStorage.getItem("authToken"))
        if (userData) return setUser(userData._doc)
    }, [])
    return (
        <>
            <Search search={search} toggleSearch={toggleSearch} />
            <Cart cart={cart} toggleCart={toggleCart} />
            <LanguageModal show={modal3} toggleModal={toggleModal} />
            {props.logoNull ? null : <Link href="/" ><Image src={Logo} className={`fixed top-6 right-6 md:top-10 md:right-10 z-10 w-14 md:w-24 lg:w-20 transition-all duration-700`} alt="Urban images" ></Image></Link>}
            <nav id='navbar' className={` ${nav} ${props.classes} border fixed z-20 bottom-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:top-0 lg:rounded-none rounded-full w-4/5 lg:w-[5.4%] h-[8%] lg:h-full lg:py-5 shadow-md bg-white flex lg:flex-col lg:justify-between items-center transition duration-700 lg:space-y-10`}>
                <div onClick={handleMenu} className={`hidden lg:block`}>
                    <div className={`${bars} menu btn6`}>
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="w-full h-full lg:h-35pr px-3 lg:px-0 text-gray-900 flex lg:flex-col justify-between items-center">
                    <span className='lg:hidden cursor-pointer flex justify-center items-center w-20pr h-3/4 rounded-full bg-gradient-to-r ' onClick={handleMenu} ><i className="material-symbols-outlined ">menu</i></span>
                    <button onClick={toggleSearch} className=' flex justify-center items-center w-20pr h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined">search</i></button>
                    <button onClick={toggleCart} className='relative flex justify-center items-center w-20pr h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined">local_mall</i> <span className={`${totalUniqueItems == 0 ? "hidden" : ''} absolute top-2 right-2 lg:top-3 lg:-right-3 w-4 h-4 flex justify-center items-center text-white rounded-full bg-gold-land text-[9px]`}>{totalUniqueItems}</span></button>
                    {user ? <Link href='/user/personalinfo' className='mr-4 lg:mr-0 lg:mt-4' title='Me' ><div  className='w-8 rounded-full border overflow-hidden'><Image src={user.gender === "Female" ? female_avatar : male_avatar} className="w-full object-cover" alt="avatar" /></div></Link>
                        : <Link href='/login' title="Login" className=' flex justify-center items-center w-20pr h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined">person</i></Link>}
                </div>
                <i className='hidden lg:block' />
            </nav>

            <div className={` ${menu} w-full lg:w-1/4 h-screen fixed m-0 left-0 top-0 z-30 transition-all ${props.transition?props.transition:'duration-700'} bg-white shadow-lg`}>
                <div className="border-b-2 w-full h-1/6 flex flex-col">
                    <div className="flex justify-end items-center w-full h-1/2 px-7">
                        <div onClick={handleMenu} className=''>
                            <div className={`${bars} menu btn6`}>
                                <div className="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full h-1/2 p-8">
                        {user ? <Link href='/user/personalinfo' title='Me' className='flex items-center gap-3' ><span className='w-10 rounded-full overflow-hidden'><Image src={user.gender === "Female" ? female_avatar : male_avatar} className="w-full h-full object-cover" alt="avatar" /></span> <span>{user.username}</span> </Link>
                            : <Link href='/login' title="Login" className=' flex justify-center items-center w-20pr h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined">person</i>Login</Link>}
                        <span className='flex space-x-5' ><button onClick={toggleSearch} className="flex font_futuraLT"><i className="material-symbols-outlined">search</i></button><button onClick={toggleCart} ><i className="material-symbols-outlined">local_mall</i></button></span>
                    </div>
                </div>
                <div className="w-full h-3/5 overflow-y-scroll">
                    <ul className=' list-none text-lg my-5 font_futuraLT' >
                        <ListItem key={1} href='/' value='Home' />
                        <ListItem key={2} submenu={["View All", "Men", "Women", "Kids"]} href='/products/new in' value='New In' />
                        <ListItem key={3} submenu={["View All", "Bags", "Sneakers", "Jewelary"]} href='/products/men' value='Men' />
                        <ListItem key={4} submenu={["View All", "Bags", "Sneakers", "Jewelary"]} href='/products/women' value='Women' />
                        <ListItem key={5} href='/products/eyewear' value='Eyewear' />
                        <ListItem key={6} href='/products/kids' value='Kids' />
                        <ListItem key={7} href='/giftcard' value='Gifts Selection' />
                        <ListItem key={8} submenu={["View All", "Bags", "Sneakers", "Jewelary"]} href='/products/essentials' value='Our Essentials' />
                    </ul>
                </div>
                <div className="w-full h-1/4 py-5 px-8 flex flex-col font_futuraLT text-sm text-gray-800 border-t-2 space-y-2">
                    <Link href='#' onClick={toggleModal} name="modal3" >Language: English</Link>
                    <Link href='#' onClick={toggleModal} name="modal3" >Shipping to: United Arab Emirates</Link>
                    <span className='text-sm text-gray-800' ><i className="material-symbols-outlined text-xs ">location_on</i> Urban Fits</span>
                    <span className='text-sm text-gray-800' ><i className="material-symbols-outlined text-xs ">call</i> +971 52 700 1997</span>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    return { props: { ...context } }
}