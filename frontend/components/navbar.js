import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import LanguageModal from './modals/languagemodal';
import Logo from '../public/logo_black.svg'


function ListItem(props) {
    return (
        <li className='list_item transition-all' ><Link href={props.href} className='flex justify-between px-8 border-b-2 text-base border-white transition-all' >{props.value}<i className="material-symbols-outlined text-lg translate-y-1 transition-all">chevron_right</i></Link></li>
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
    return (
        <>
            <LanguageModal show={modal3} toggleModal={toggleModal} />
            <Image src={Logo} className={`fixed top-10 right-10 z-10 w-28 transition-all duration-700`} ></Image>
            <nav className={` ${nav} ${props.classes} border fixed z-40 bottom-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:top-0 lg:rounded-none rounded-full w-4/5 lg:w-[5.4%] h-[8%] lg:h-full lg:py-5 shadow-md bg-white bg-opacity-70 backdrop-blur flex lg:flex-col lg:justify-between items-center transition duration-700 lg:space-y-10`}>
                <div onClick={handleMenu} className={`hidden lg:block`}>
                    <div className={`${bars} menu btn6`}>
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="w-full h-full lg:h-1/3 text-gray-900 flex lg:flex-col justify-around items-center">
                    <span className='lg:hidden cursor-pointer flex justify-center items-center w-[20%] h-3/4 rounded-full bg-gradient-to-r ' onClick={handleMenu} ><i className="material-symbols-outlined text-[1.6rem">menu</i></span>
                    <Link href='/' className=' flex justify-center items-center w-[20%] h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined text-[1.6rem]">search</i></Link>
                    <Link href='/' className=' flex justify-center items-center w-[20%] h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined text-[1.6rem]">local_mall</i></Link>
                    <Link href='/user/personalinfo' className=' flex justify-center items-center w-[20%] h-3/4 rounded-full bg-gradient-to-r ' ><i className="material-symbols-outlined text-[1.6rem]">person</i></Link>
                </div>
                <i className='hidden lg:block' />
            </nav>

            <div className={` ${menu} w-full lg:w-1/4 h-screen fixed m-0 left-0 top-0 z-10 transition duration-700 bg-white shadow-lg`}>
                <div className="border-b-2 w-full h-[16%] flex flex-col">
                    <div className="flex justify-end items-center w-full h-1/2 px-7">
                        <div onClick={handleMenu} className=''>
                            <div className={`${bars} menu btn6`}>
                                <div className="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full h-1/2 p-5">
                        <Link href='/login' className="flex font_futuraLT"><i className="material-symbols-outlined text-[1.6rem]">person</i>Login</Link>
                        <span className='flex space-x-5' ><Link href='/login' className="flex font_futuraLT"><i className="material-symbols-outlined text-[1.6rem]">search</i></Link><Link href='/login' ><i className="material-symbols-outlined text-[1.6rem]">local_mall</i></Link></span>
                    </div>
                </div>
                <div className="w-full h-1/2 ">
                    <ul className=' list-none text-lg my-5 space-y-5 lg:space-y-3 font_futuraLT' >
                        <ListItem href='/' value='Home' />
                        <ListItem href='#' value='New In' />
                        <ListItem href='#' value='Men' />
                        <ListItem href='#' value='Women' />
                        <ListItem href='#' value='Eyewear' />
                        <ListItem href='#' value='Kids' />
                        <ListItem href='/giftcard' value='Gifts Selection' />
                        <ListItem href='#' value='Our Essentials' />
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
