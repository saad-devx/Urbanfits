import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';
import Link from 'next/link'
import Search from './search';
import Cart from './cart';
import ToTopBtn from './buttons/toTopBtn';
import Logo from '@/public/logos/logo_black.svg'
// image imports
import Image from 'next/image';
import search_logo from '@/public/search.svg'
import female_avatar from '@/public/avatars/female.svg'
import male_avatar from '@/public/avatars/male.svg'

const ListItem = (props) => {
    const router = useRouter()
    return (
        <>
            <Link onClick={props.handleMenu} href={props.href} className={`${props.classes} ${router.asPath === props.href ? 'text-gotham-black' : 'stroke_text hover:text-gotham-black'} transition-all duration-500`}>{props.children}</Link>
        </>
    )
}

const SocialIcons = ({ classes }) => {
    return (
        <div className={`${classes} w-full md:w-3/5 lg:w-auto md:mx-auto lg:m-0 flex justify-between space-x-20 text-base text-black`}>
            <Link href='#' ><i className="fa-brands fa-twitter"></i></Link>
            <Link href='#' ><i className="fa-brands fa-facebook-f"></i></Link>
            <Link href='#' ><i className="fa-solid fa-paper-plane"></i></Link>
            <Link href='#' ><i className="fa-brands fa-instagram"></i></Link>
        </div>
    )
}

const SecondaryNavbar = ({ user, navBg, handleMenu, bars, toggleSearch }) => {
    const getPfp = () => {
        let pfp = localStorage.getItem("pfp")
        if (pfp) return pfp
        if (!pfp) {
            if (user.gender === "Male") return male_avatar
            return female_avatar
        }
    }
    if (window.matchMedia('(min-width: 1024px)').matches && user?.email) return <>
        <section id='sub_nav' className={`${navBg === "bg-white" ? "bg-white" : "bg-gradient-to-b from-transparent to-white"} relative -top-10 -z-10 w-4/5 h-10 mx-auto px-10 ${navBg === "bg-white" ? "border-b border-t-white" : null} opacity-0 group_whole_nav_hover_appear rounded-b-[26px] rounded-t-[-24px] justify-self-center flex justify-between items-center transition-all duration-300 font_gotham_medium text-xs tracking-expand`}>
            <span className={`${navBg} absolute -z-10 -left-1 top-0 w-10 h-full ${navBg === "bg-white" ? "border-l" : null} rounded-b-2xl skew-x-[30deg] transition-all duration-300`}></span>
            <Link href="/products/women" className='hover:tracking-[0.5em] transition-all duration-500' >WOMEN</Link>
            <Link href="/products/men" className='hover:tracking-[0.5em] transition-all duration-500' >MEN</Link>
            <Link href="/products/kids" className='hover:tracking-[0.5em] transition-all duration-500' >KIDS</Link>
            <Link href="/products/accessories" className='hover:tracking-[0.5em] transition-all duration-500' >ACCESSORIES</Link>
            <Link href="/user/personalinfo" className="group w-1/4 flex justify-end items-center gap-x-3">
                <div className="relative w-3/5 md:w-8 aspect-square rounded-full border border-gray-300 overflow-hidden">
                    <Image className="w-full h-full object-cover object-center" width={50} height={50} src={getPfp()} alt="profile picture" />
                </div>
                <h3 className='group-hover:tracking-[0.5em] transition-all duration-500'>MY ACCOUNT</h3>
            </Link>
            <span className={`${navBg} absolute -z-10 -right-1 top-0 w-10 h-full ${navBg === "bg-white" ? "border-r" : null} rounded-b-2xl skew-x-[-30deg] transition-all duration-300`}></span>
        </section>
        <div className="down_bar -translate-y-9 bg-gray-400 z-40 w-10 h-1 rounded-full mx-auto transition-all duration-300"></div>
    </>

    else if (window.matchMedia('(max-width: 1024px)').matches) return <>
        <section className={`${navBg==="bg-white"?null:"opacity-0 pointer-events-none"} fixed bottom-7 left-1/2 -translate-x-1/2 bg-white border shadow-lg w-4/5 h-[60px] rounded-full px-7 flex justify-between items-center transition-all duration-300`}>
            <button onClick={handleMenu} className='menu_parent h-4/5 justify-center flex flex-col items-center cursor-pointer' >
                <div className={`${bars} menu btn3 my-2`}>
                    <div className="icon"></div>
                </div>
                <span className='font_gotham_medium text-[8px] tracking-widest'>MENU</span>
            </button>
            <Link href='/' className='h-4/5 justify-center flex flex-col items-center'>
                <i class="fa-regular fa-circle text-xl my-1" />
                <span className="font_gotham_medium text-[8px] tracking-widest">HOME</span>
            </Link>
            <button onClick={toggleSearch} className='h-4/5 justify-center flex flex-col items-center'>
                <Image src={search_logo} alt='search' className='my-1 w-5' />
                <span className="font_gotham_medium text-[8px] tracking-widest">SEARCH</span>
            </button>
            <Link href={user && user.email? '/user/personalinfo': '/login'} className='h-4/5 justify-center flex flex-col items-center'>
                {user && user.email ? <div className="relative w-7 aspect-square rounded-full border border-gray-300 overflow-hidden">
                    <Image className="w-full h-full object-cover object-center" width={50} height={50} src={getPfp()} alt="profile picture" />
                </div> :
                    <span class="material-symbols-outlined text-xl">hdr_strong</span>}
                <span className="font_gotham_medium text-[8px] tracking-widest"> {user && user.email ? "PROFILE" : 'LOGIN'}</span>
            </Link>
        </section>
    </>
}

export default function Navbar(props) {
    const {user} = useUser()
    const { totalUniqueItems } = useCart()

    const [bars, setBars] = useState('')
    const [menu, setMenu] = useState('')
    const [search, setSearch] = useState(false)
    const [cart, setCart] = useState(false)
    const [navBg, setNavBg] = useState('bg-white')

    const handleMenu = () => {
        if (bars === '') {
            setBars('open')
            setMenu('open_nav')
            setSearch(false)
            setCart(false)
        }
        if (bars === 'open') {
            setBars('')
            setMenu('')
        }
    }
    const toggleSearch = () => {
        if (search === false) {
            setCart(false)
            setBars('')
            setMenu('')
            return setSearch(true)
        }
        if (search === true) return setSearch(false)
    }
    const toggleCart = () => {
        if (cart === false) {
            setMenu('')
            setBars('')
            setSearch(false)
            return setCart(true)
        }
        if (cart === true) return setCart(false)
    }

    useEffect(() => {
        if (bars == 'open' || search || cart || !props.hideNav) return setNavBg('bg-white')
        if (props.hideNav && props.hideNav === true) return setNavBg('bg-transparent')
        setNavBg('bg-whtie')
    }, [props.hideNav, bars, search, cart])

    return (
        <>
            <Search search={search} toggleSearch={toggleSearch} />
            <Cart cart={cart} toggleCart={toggleCart} />
            <Link href="/" ><Image src={Logo} className={`${props.hideNav ? 'translate-x-40' : ''} fixed ${props.lowerLogo ? 'top-[18vh]' : 'top-[11vh]'} hidden lg:block right-6 md:top-[13vh] md:right-10 z-40 w-14 md:w-24 lg:w-20 transition-all duration-1000 ease-linear`} alt="Urban images" /></Link>
            <ToTopBtn />
            <div className={`${props.hideNav ? 'h-0 -translate-y-full' : 'h-[50px]'} w-full -z-10 overflow-hidden transition-all duration-1000 ease-linear`}></div>
            <nav id='navbar' className="group_whole_nav w-full fixed z-40 top-0 left-0 font_gotham_medium text-sm overflow-hidden">
                <section className={`${navBg} z-40 w-full h-[50px] flex justify-between items-center p-7 lg:px-14 2xl:px-16 ${navBg === "bg-white" ? "border-b" : null} transition-all duration-300`}>
                    {window.matchMedia('(min-width: 1024px)').matches ? <button onClick={handleMenu} className='menu_parent gap-10 flex items-center cursor-pointer' >
                        <div className={`${bars} menu btn3`}>
                            <div className="icon"></div>
                        </div>
                        <span className='hidden lg:block tracking-[1.5em]'>MENU</span>
                    </button> :
                        <Link href="/" >
                            <Image src={Logo} width={60} height={60} className='w-8' alt="UF" />
                        </Link>}
                    <button onClick={toggleSearch} className='hidden absolute left-1/2 -translate-x-1/2 group lg:flex justify-center items-center text-center tracking-[1.5em]' ><span className="w-0 group-hover:w-14 h-[2px] bg-black transition-all"></span>&nbsp;SRCH<span className="w-0 group-hover:w-14 h-[2px] bg-black transition-all"></span></button>
                    <button onClick={toggleCart} id='cart-btn' className='group flex justify-center items-center gap-5 lg:gap-10' >
                        <div className={`${cart ? "opacity-0" : null} flex transition-all duration-300`}>
                            <span className=" w-5 group-hover:w-0 h-[2px] mx-1 bg-black transition-all"></span>
                            <span className="w-16 group-hover:w-28 h-[2px] mx-1 bg-black transition-all"></span>
                        </div>
                        <div className={`${!cart ? "hidden" : null} relative mr-7 transition-all duration-300`}>
                            <span className="absolute rotate-[26deg] w-[30px] h-0.5 bg-black"></span>
                            <span className="absolute rotate-[-26deg] w-[30px] h-0.5 bg-black"></span>
                        </div>
                        <span className="tracking-[0.7em] lg:tracking-[1.5em]">CART</span>
                        <span>{totalUniqueItems}</span>
                    </button>
                </section>
                <SecondaryNavbar user={user} navBg={navBg} handleMenu={handleMenu} toggleSearch={toggleSearch} bars={bars} />
            </nav>

            <div className={`${menu} w-full layout_height fixed left-0 top-[-100vh] z-30 flex justify-center items-center transition-all ${props.transition ? props.transition : 'duration-1000'} ease-[cubic-bezier(1,0.35,0.15,1)] bg-white shadow-lg`}>
                <ul className='w-90pr h-auto list-none flex flex-col gap-[6vh] lg:gap-[10vh] leading-[0.7] lg:leading-[0.74em] font_gotham_bold text-5xl lg:text-8xl'>
                    <li className='w-full border-b flex' >
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%] md:px-[15%] lg:px-0' href='/products/Women'>Women</ListItem>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[27%] hidden lg:block' href='/'>Home</ListItem>
                    </li>
                    <li className='w-full md:px-[15%] lg:px-0 border-b flex justify-end lg:hidden' >
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[27%]' href='/'>Home</ListItem>
                    </li>
                    <li className='w-full border-b flex'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[30%] md:px-[15%] lg:px-0' href='/products/Men'>Men</ListItem>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%] hidden lg:block' href='/products/Kids'>Kids</ListItem>
                    </li>
                    <li className='w-full md:px-[15%] lg:px-0 border-b flex justify-end lg:hidden'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/Kids'>Kids</ListItem>
                    </li>
                    <li className='w-full border-b flex justify-start md:pl-[15%]  lg:justify-between lg:px-14' >
                        <ListItem handleMenu={handleMenu} className="" href='/stories'>Stories</ListItem>
                        <ListItem handleMenu={handleMenu} classes='hidden lg:block' href='/sales'>Sale</ListItem>
                    </li>
                    <li className='w-full md:px-[15%] lg:px-0 border-b flex justify-end lg:hidden'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/sale'>Sale</ListItem>
                    </li>
                    <div className="w-full h-[20vh] lg:h-20 2xl:h-28 mt-0 flex flex-col lg:flex-row justify-between lg:items-end z-40">
                        {/* <button onClick={toggleSearch} className='lg:hidden group font_gotham_medium flex justify-center items-center text-base tracking-[1.5em]'>SRCH<span className="w-full md:w-[40vw] group-focus:w-0 h-[2px] bg-black transition-all"></span></button> */}
                        {/* {user && user.email ? <Link href='/user/personalinfo' className='lg:hidden group font_gotham_medium w-full flex justify-center items-center text-center text-base tracking-[1.5em]'>ACCOUNT<span className="w-full md:w-[40vw] group-focus:w-0 h-[2px] bg-black transition-all"></span></Link> : <Link href='/login' className='lg:hidden group font_gotham_medium w-full flex justify-center items-center text-base tracking-[1.5em]'>LOGIN<span className="w-full group-focus:w-0 h-[2px] bg-black transition-all"></span></Link>} */}
                        <div className="hidden w-full lg:flex flex-col items-start lg:flex-row lg:justify-between font_gotham_medium">
                            <div className='hidden group lg:flex justify-center items-center tracking-[1.5em] text-base'>
                                {user && user.email ? <Link href='/user/personalinfo' >MY ACCOUNT</Link>
                                    : <span className='flex' >
                                        <Link href="/login">LOGIN</Link>
                                        <Link href="/signup">/SIGNUP</Link>
                                    </span>}
                                <span className="flex my-auto">
                                    <span className="w-20 group-hover:w-28 h-[2px] mx-1 bg-black transition-all"></span>
                                    <span className="w-5 group-hover:w-0 h-[2px] mx-1 bg-black transition-all"></span>
                                </span>
                            </div>
                            <SocialIcons classes='hidden lg:block' />
                        </div>
                        <SocialIcons classes='mt-10 lg:hidden' />
                    </div>
                </ul>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    return { props: { ...context } }
}
