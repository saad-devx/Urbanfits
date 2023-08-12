import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Cart = dynamic(() => import('./cart'));
const Search = dynamic(() => import('./search'));
import useUser from '@/hooks/useUser';
import useAddress from '@/hooks/useAddress';
import Link from 'next/link'
import ToTopBtn from './buttons/toTopBtn';
import Image from 'next/image';
import bag from '@/public/bag.svg'
// import Logo from '@/public/logos/logo_black.svg'
// const DefaultPfp = 'https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/default-pfp.jpg'

const ListItem = (props) => {
    const router = useRouter()
    if (props.categories) return <Link {...props} className="group flex flex-col">
        <div className="flex items-center gap-x-4">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.566709 6.14375L0.566709 6.14375L0.567045 6.14441C0.612783 6.23422 0.65045 6.28362 0.687623 6.32028C0.725975 6.35809 0.782047 6.4003 0.885451 6.45568L0.972253 6.5H3.51431H6.05646L6.15624 6.4491L6.1569 6.44876C6.24686 6.40303 6.29634 6.36537 6.33304 6.32822C6.37087 6.28992 6.41309 6.23393 6.46849 6.13069L6.51273 6.0442V3.50481V0.965417L6.4685 0.878953C6.41309 0.77569 6.37088 0.719701 6.33304 0.681395C6.29634 0.64425 6.24686 0.606586 6.1569 0.560857L6.15624 0.56052L6.05567 0.509214L3.55707 0.500823C2.6733 0.498627 2.01112 0.500835 1.56001 0.507367C1.33391 0.510641 1.16456 0.514952 1.04826 0.520116C0.999508 0.522281 0.96343 0.524455 0.938169 0.526441C0.743945 0.610951 0.584784 0.787259 0.525972 0.959131C0.525145 0.97156 0.521384 1.01193 0.517665 1.09655C0.512561 1.21268 0.508381 1.37873 0.505381 1.60075C0.499394 2.04395 0.498274 2.69643 0.50267 3.59017C0.50267 3.59021 0.50267 3.59024 0.502671 3.59028L0.515261 6.04309L0.566709 6.14375ZM0.902272 0.530108C0.902414 0.530142 0.90474 0.529868 0.908821 0.529187C0.90417 0.529735 0.90213 0.530075 0.902272 0.530108Z" stroke="black" />
                <path d="M10.0804 6.14375L10.0804 6.14375L10.0807 6.14441C10.1265 6.23422 10.1641 6.28362 10.2013 6.32028C10.2396 6.35809 10.2957 6.4003 10.3991 6.45568L10.4859 6.5H13.028H15.5701L15.6699 6.4491L15.6706 6.44876C15.7605 6.40303 15.81 6.36537 15.8467 6.32822C15.8845 6.28992 15.9268 6.23393 15.9822 6.13069L16.0264 6.0442V3.50481V0.965417L15.9822 0.878953C15.9268 0.77569 15.8845 0.719701 15.8467 0.681395C15.81 0.64425 15.7605 0.606586 15.6706 0.560857L15.6699 0.56052L15.5693 0.509214L13.0707 0.500823C12.187 0.498627 11.5248 0.500835 11.0737 0.507367C10.8476 0.510641 10.6782 0.514952 10.5619 0.520116C10.5132 0.522281 10.4771 0.524455 10.4518 0.526441C10.2576 0.610951 10.0985 0.787259 10.0396 0.959131C10.0388 0.97156 10.0351 1.01193 10.0313 1.09655C10.0262 1.21268 10.0221 1.37873 10.0191 1.60075C10.0131 2.04395 10.0119 2.69643 10.0163 3.59017C10.0163 3.59021 10.0163 3.59024 10.0163 3.59028L10.0289 6.04309L10.0804 6.14375ZM10.4159 0.530108C10.4161 0.530142 10.4184 0.529868 10.4225 0.529187C10.4178 0.529735 10.4158 0.530075 10.4159 0.530108Z" stroke="black" />
                <path d="M0.566709 15.6437L0.566709 15.6437L0.567045 15.6444C0.612783 15.7342 0.65045 15.7836 0.687623 15.8203C0.725975 15.8581 0.782047 15.9003 0.885451 15.9557L0.972253 16H3.51431H6.05646L6.15624 15.9491L6.1569 15.9488C6.24686 15.903 6.29634 15.8654 6.33304 15.8282C6.37087 15.7899 6.41309 15.7339 6.46849 15.6307L6.51273 15.5442V13.0048V10.4654L6.4685 10.379C6.41309 10.2757 6.37088 10.2197 6.33304 10.1814C6.29634 10.1442 6.24686 10.1066 6.1569 10.0609L6.15624 10.0605L6.05567 10.0092L3.55707 10.0008C2.6733 9.99863 2.01112 10.0008 1.56001 10.0074C1.33391 10.0106 1.16456 10.015 1.04826 10.0201C0.999508 10.0223 0.96343 10.0245 0.938169 10.0264C0.743945 10.111 0.584784 10.2873 0.525972 10.4591C0.525145 10.4716 0.521384 10.5119 0.517665 10.5965C0.512561 10.7127 0.508381 10.8787 0.505381 11.1007C0.499394 11.5439 0.498274 12.1964 0.50267 13.0902C0.50267 13.0902 0.50267 13.0902 0.502671 13.0903L0.515261 15.5431L0.566709 15.6437ZM0.902272 10.0301C0.902414 10.0301 0.90474 10.0299 0.908821 10.0292C0.90417 10.0297 0.90213 10.0301 0.902272 10.0301Z" stroke="black" />
                <path d="M10.0804 15.6437L10.0804 15.6437L10.0807 15.6444C10.1265 15.7342 10.1641 15.7836 10.2013 15.8203C10.2396 15.8581 10.2957 15.9003 10.3991 15.9557L10.4859 16H13.028H15.5701L15.6699 15.9491L15.6706 15.9488C15.7605 15.903 15.81 15.8654 15.8467 15.8282C15.8845 15.7899 15.9268 15.7339 15.9822 15.6307L16.0264 15.5442V13.0048V10.4654L15.9822 10.379C15.9268 10.2757 15.8845 10.2197 15.8467 10.1814C15.81 10.1442 15.7605 10.1066 15.6706 10.0609L15.6699 10.0605L15.5693 10.0092L13.0707 10.0008C12.187 9.99863 11.5248 10.0008 11.0737 10.0074C10.8476 10.0106 10.6782 10.015 10.5619 10.0201C10.5132 10.0223 10.4771 10.0245 10.4518 10.0264C10.2576 10.111 10.0985 10.2873 10.0396 10.4591C10.0388 10.4716 10.0351 10.5119 10.0313 10.5965C10.0262 10.7127 10.0221 10.8787 10.0191 11.1007C10.0131 11.5439 10.0119 12.1964 10.0163 13.0902C10.0163 13.0902 10.0163 13.0902 10.0163 13.0903L10.0289 15.5431L10.0804 15.6437ZM10.4159 10.0301C10.4161 10.0301 10.4184 10.0299 10.4225 10.0292C10.4178 10.0297 10.4158 10.0301 10.4159 10.0301Z" stroke="black" />
            </svg>
            {props.children}
        </div>
        <span className={`${router.asPath.includes(props.href) ? 'w-full' : 'w-0'} group-hover:w-full h-[2.5px] justify-self-start bg-gold-land transition-all duration-1000`}></span>
    </Link>
    else return <Link {...props} className={props.classes || "group flex flex-col"}>
        {props.children}
        <span className={`${router.asPath.includes(props.href) ? 'w-full' : 'w-0'} group-hover:w-full h-[2.5px] justify-self-start bg-gold-land transition-all duration-1000`}></span>
    </Link>
}

const SecondaryNavbar = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) return <section className="w-full h-[50px] flex justify-between items-center px-7 lg:px-14 2xl:px-16 font_urbanist text-[15px] bg-white transition-all duration-300">
        <ListItem key={1} href='/all-categories' categories>All Categories</ListItem>
        <ListItem key={2} href='/products/64d517f6218f4e9ee6253b18?name=new+collection'>New Collection</ListItem>
        <ListItem key={3} href='/products/64a59d5816b4c91fa1967b2e?name=women'>Women</ListItem>
        <ListItem key={4} href='/products/649b292762a7c100cfb7207f?name=men'>Men</ListItem>
        <ListItem key={5} href='/products/64d4dfa643c643cc9c60c672?name=kids'>Kids</ListItem>
        <ListItem key={6} href='/products/64d4dfa643c643cc9c60c672?name=baby+products' classes="group hidden 2xl:flex flex-col">Baby Products</ListItem>
        <ListItem key={7} href='/sale'>Sales</ListItem>
        <ListItem key={8} href='/giftcard' classes="group hidden xl:flex flex-col">Gifts</ListItem>
        <ListItem key={9} href='/products/64b5391e2c57908f1e94dc27?name=accessories' classes="group hidden xl:flex flex-col">Accessories</ListItem>
        <ListItem key={10} href='/uf-points'>Earn Uf Points</ListItem>
        <ListItem key={11} href='/wishlist'>Wishlist</ListItem>
        <span className="flex flex-col justify-center items-center text-sm">
            Minimum Order
            <p className="font_urbanist_bold text-[13px]">USD 100</p>
        </span>
    </section>

    else if (window.matchMedia('(max-width: 1024px)').matches) return <section className="w-full h-[50px] flex justify-center items-start px-7 lg:px-14 2xl:px-16 font_urbanist text-[15px] bg-white transition-all duration-300">
        <Search classes="flex lg:hidden" />
    </section>
}


export default function Navbar() {
    const { user } = useUser()
    const { address, getAddress } = useAddress()
    const { totalUniqueItems } = useCart()
    const [cart, setCart] = useState(false)

    useEffect(() => {
        if (!address) getAddress()
    }, [])

    const getDisplayAddress = () => {
        if (!address) return <Link href='/user/address'>Set your Address</Link>
        let shippingAddress = address.addresses.filter(address => address.tag === 'shipping')[0]
        if (shippingAddress) return shippingAddress.address
        else return <Link href='/user/address'>Set your Address</Link>
    }

    return <>
        <Cart cart={cart} setCart={setCart} />
        {/* <Link href="/" ><Image src={Logo} className={`${props.hideNav ? 'translate-x-40' : ''} fixed hidden lg:block right-6 md:top-[13vh] md:right-10 z-40 w-14 md:w-24 lg:w-20 transition-all duration-1000 ease-linear`} alt="Urban images" /></Link> */}
        <ToTopBtn />
        <nav className="sticky z-40 top-0 left-0 right-0 w-full font_urbanist shadow-md">
            <section className="w-full h-[55px] flex justify-between items-center px-7 lg:px-14 2xl:px-16 bg-white transition-all duration-300">
                <Link href='/' className='font_copper text-xl tracking-2'><h1>URBAN FITS</h1></Link>
                <Search classes="hidden lg:flex" />
                <div className="hidden md:justify-self-end lg:justify-self-auto md:flex items-center text-black">
                    <i className="fa-solid fa-location-dot mr-3 text-lg text-gray-400"></i>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font_urbanist text-[13px]">Deliver to</p>
                        <p className="font_urbanist_bold text-[13px] truncate max-w-[130px]">{getDisplayAddress()}</p>
                    </div>
                </div>
                <button onClick={() => {
                    if (!user || !user.email) return
                }} className="hidden lg:flex items-center font_urbanist text-[13px] text-black">
                    <i className="fa-regular fa-user text-lg mr-3"></i>
                    {user && user.email ? <div className="flex flex-col justify-center items-start">
                        <p className="font_urbanist text-[13px]">Welcome Back</p>
                        <p className="font_urbanist_bold text-[13px] truncate max-w-[130px]">{user.firstname ? user.firstname : user.email}</p>
                    </div>
                        : <><Link href='/auth/login'>Login</Link> &nbsp;/&nbsp;<Link href='/auth/signup'>Register</Link></>}
                </button>
                <div className='relative'>
                    <i className="absolute top-0 right-0 z-10 translate-x-1/3 w-2 h-2 border border-white aspect-square rounded-full bg-gold-land"></i>
                    <button className="fa-regular fa-envelope text-xl translate-y-[15%]"></button>
                </div>
                <button onClick={() => setCart(!cart)} className="hidden lg:block relative">
                    {totalUniqueItems !== 0 ? <i className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-2 h-2 border border-white aspect-square rounded-full bg-gold-land"></i> : null}
                    <Image src={bag} />
                </button>
            </section>
            <SecondaryNavbar />
        </nav>
    </>
}
export async function getServerSideProps(context) {
    return { props: { ...context } }
}
