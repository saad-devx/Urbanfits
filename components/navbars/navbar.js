import { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useUser from '@/hooks/useUser';
import useWallet from "@/hooks/useWallet"
import Link from 'next/link'
import ToTopBtn from '../buttons/toTopBtn';
import Image from 'next/image';
import bag from '@/public/bag.svg'
const LanguageModal = dynamic(() => import('../modals/language'));;
const Logout = dynamic(() => import('@/components/modals/logout'));
const Cart = dynamic(() => import('../cart'));
const Search = dynamic(() => import('../search'));
const MobileNavbar = dynamic(() => import('./mobileNavbar'));
import {
    LogoutIcon,
    LocationIcon,
    UserIcon,
    DropDownIcon
} from "@/public/accountIcons";
import useLanguage from '@/hooks/useLanguage';
import { navbar as navLang } from '@/locales';

const ListItem = (props) => {
    const router = useRouter();
    const { href, classes } = props;
    const { asPath } = router;

    if (props.comingSoon) return <button onClick={() => useUser.setState({ CSModal: true })} className={classes || "group flex flex-col"}>
        {props.children}
        <span className={`${asPath.includes(href) ? 'w-full' : 'w-0'} group-hover:w-full h-[3px] mt-3 justify-self-start bg-gold-land transition-all duration-1000`}></span>
    </button>
    else return <Link {...props} className={classes || "group flex flex-col"}>
        {props.children}
        <span className={`${asPath.includes(href) ? 'w-full' : 'w-0'} group-hover:w-full h-[3px] mt-3 justify-self-start bg-gold-land transition-all duration-1000`}></span>
    </Link>
}

const SecondaryNavbar = (props) => {
    const { closeCart, langObj } = props;
    const calculateMinOrder = () => {
        const { currency } = props
        const minOrders = { "PKR": "15,000", "AED": "300", "SAR": "300" }
        return `${currency} ${minOrders[currency]}`
    }

    if (window.matchMedia('(min-width: 760px)').matches) return <nav className="sticky top-0 left-0 right-0 z-40 w-full max-w-[2000px] mx-auto h-[50px] flex justify-between items-end px-7 lg:px-8 xl:px-10 2xl:px-16 font_urbanist text-[15px] bg-white shadow transition-all duration-300">
        <ListItem onClick={closeCart} key={1} href='/'>{langObj.categories.item1}</ListItem>
        <ListItem onClick={closeCart} key={2} comingSoon href='/products/category/649b292762a7c100cfb7207f?name=men'>{langObj.categories.item2}</ListItem>
        <ListItem onClick={closeCart} key={3} comingSoon href='/products/category/64a59d5816b4c91fa1967b2e?name=women'>{langObj.categories.item3}</ListItem>
        <ListItem onClick={closeCart} key={4} comingSoon href='/products/category/64d4dfa643c643cc9c60c672?name=kids'>{langObj.categories.item4}</ListItem>
        <ListItem onClick={closeCart} key={5} href='/stories'>{langObj.categories.item5}</ListItem>
        <ListItem onClick={closeCart} key={7} href='/giftcard'>{langObj.categories.item6}</ListItem>
        <ListItem onClick={closeCart} key={8} comingSoon href='/products/category/64b5391e2c57908f1e94dc27?name=accessories' classes="group hidden xl:flex flex-col">{langObj.categories.item7}</ListItem>
        <ListItem onClick={closeCart} key={10} href='/earn-ufpoints' classes="group hidden lg:flex flex-col">{langObj.categories.item8}</ListItem>
        <ListItem onClick={closeCart} key={11} href='/products/category/wishlist'>{langObj.categories.item9}</ListItem>
        <span className="hidden lg:flex mb-2 flex-col justify-center items-center text-sm">
            {langObj.minimumOrder}
            <p className="font_urbanist_bold text-[13px]">{calculateMinOrder()}</p>
        </span>
    </nav>
    else if (window.matchMedia('(max-width: 760px)').matches) return <MobileNavbar {...props} />
}

export default function Navbar() {
    const { locale } = useLanguage();
    const { user, isLoggedIn, country, notifications, getNotifications, address, getAddress } = useUser();
    const { points, getUfBalance, currency } = useWallet();
    const { totalUniqueItems } = useCart();
    const [cart, setCart] = useState(false);
    const [logout, setLogout] = useState(false);
    const [langModal, setLangModal] = useState(false);
    const url = useRouter().pathname;
    const Exception = url.startsWith("/about") || (window.matchMedia('(max-width: 760px)').matches && (url.startsWith('/auth') || (url.startsWith('/user/') && url.length > '/user/'.length)))
    const unseenNotificCount = notifications?.filter(notific => notific.seen === false).length || 0

    useEffect(() => {
        getNotifications();
        getUfBalance();
        if (!address) getAddress();
    }, [user])

    const langObj = navLang[locale];

    const closeCart = () => {
        document.body.style.overflowY = 'visible'
        setCart(false)
    }

    const toggleCart = () => {
        document.body.style.overflowY = cart ? null : 'hidden';
        setCart(!cart)
    }

    if (!Exception) return <>
        <Cart cart={cart} toggleCart={toggleCart} setCart={setCart} />
        <Logout show={logout} setLogout={setLogout} />
        <LanguageModal show={langModal} setLangModal={setLangModal} />
        <ToTopBtn />
        <nav name="top_level_navbar" className="sticky z-50 font_urbanist w-full h-[45px] md:h-[65px] flex justify-between items-end md:items-center px-7 lg:px-8 xl:px-10 2xl:px-16 bg-white">
            <Link href='/' className='font_copper text-[22px] lg:text-2xl tracking-1 leading-none'><h1>URBAN FITS</h1></Link>
            <Search classes="hidden md:flex" locale={locale} placeholder={langObj.searchProducts} noResultsMsg={langObj.noResults} />
            <Link href={user && user.email ? '/user/address' : "#"} className="hidden lg:flex items-center text-black">
                <LocationIcon />
                <div className="flex flex-col justify-center ml-3 items-start text-[13px]">
                    <p className="font_urbanist leading-snug">{langObj.addressTitle}</p>
                    <p className="font_urbanist_bold truncate max-w-[130px]">{address?.shipping_address?.address || langObj.addressTip}</p>
                </div>
            </Link>
            <button onClick={() => {
                if (!user || !user.email) return
            }} className="relative hidden group md:flex items-center font_urbanist text-[13px] text-black gap-x-3">
                <UserIcon />
                {user && user.email ? <>
                    <div className="flex flex-col justify-center items-start">
                        <span className="font_urbanist text-[13px]">{langObj.greeting}</span>
                        <span className="font_urbanist_bold text-[13px] truncate max-w-[130px]">{user.firstname || user.username}</span>
                    </div>
                    <span className="absolute top-full w-full h-4 bg-transparent pointer-events-none group-hover:pointer-events-auto"></span>
                    <div onClick={closeCart} className="absolute top-full translate-y-4 left-1/2 -translate-x-1/2 bg-white w-48 !p-0 text-sm font_urbanist equillibrium_shadow rounded-lg transition-all overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                        <Link href="/user/uf-wallet" className="w-full px-4 border-b hover:bg-slate-100 flex justify-between items-center py-3 transition-all">
                            <span className="font_copper text-base">{langObj.accountMenu.item1}</span>
                            <span className='font_urbanist_medium'>{points}</span>
                        </Link>
                        <Link href="/user/myaccount" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">{langObj.accountMenu.item2}</Link>
                        <Link href="/user/orders/processing" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">{langObj.accountMenu.item3}</Link>
                        <Link href="/user/shopping-lists" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">{langObj.accountMenu.item4}</Link>
                        <span onClick={() => setLogout(!logout)} className="w-full px-4 cursor-pointer hover:bg-slate-100 flex items-center py-3 transition-all gap-x-2"><LogoutIcon />{langObj.accountMenu.item5}</span>
                    </div>
                </>
                    : <><Link href='/auth/login'>{langObj.login}</Link> &nbsp;/&nbsp;<Link href='/auth/signup'>{langObj.register}</Link></>}
            </button>
            <section className="w-auto lg:ml-5 gap-x-7 xl:gap-x-9 flex items-center justify-end">
                <button onClick={() => setLangModal(!langModal)} className="flex items-center gap-x-1.5">
                    <span className="w-6 h-[18px] md:w-7 md:h-5 overflow-hidden" title={country?.country}><Image className='w-full h-full object-cover' width={50} height={40} src={country?.src} /></span>
                    <DropDownIcon />
                </button>
                {user ? <Link href='/user/inbox/primary' className='relative'>
                    {notifications && notifications.some(notific => !notific.seen) ? <span className="absolute -top-1 right-0 z-10 translate-x-1/2 translate-y-[10%] lg:translate-y-[-30%] w-2 h-2 lg:w-4 lg:h-4 flex justify-center items-center text-[10px] border border-white aspect-square rounded-full bg-[#FF4A60]"><p className='hidden lg:block text-white'>{unseenNotificCount}</p></span> : null}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 21 16" fill="none">
                        <path d="M1.46875 4V4.24496L1.66232 4.39509L8.73082 9.8774C9.76266 10.7325 11.2415 10.7325 12.2733 9.87735L19.3378 4.39501L19.5312 4.24488V4V2.66667C19.5312 2.03131 19.0195 1.5 18.375 1.5H2.625C1.98053 1.5 1.46875 2.03131 1.46875 2.66667V4ZM2.27269 5.10298L1.46875 4.48753V5.5V13.3333C1.46875 13.9687 1.98053 14.5 2.625 14.5H18.375C19.0195 14.5 19.5312 13.9687 19.5312 13.3333V5.5V4.48753L18.7273 5.10298L12.1961 10.103L12.1737 10.1201L12.1534 10.1396C11.7444 10.5329 11.1278 10.75 10.4851 10.75C9.84161 10.75 9.23991 10.5328 8.85355 10.1464L8.83018 10.1231L8.80394 10.103L2.27269 5.10298ZM1 2.66667C1 1.97591 1.1331 1.58565 1.33026 1.36451C1.5156 1.15663 1.8475 1 2.5 1H18.375C19.0269 1 19.4031 1.15676 19.6231 1.38154C19.8453 1.60847 20 1.99809 20 2.66667V13.3333C20 14.0019 19.8453 14.3915 19.6231 14.6185C19.4031 14.8432 19.0269 15 18.375 15H2.625C1.97308 15 1.59689 14.8432 1.37686 14.6185C1.15471 14.3915 1 14.0019 1 13.3333V2.66667Z" fill="black" stroke="black" />
                    </svg>
                </Link> : null}
                <button onClick={() => { toggleCart(); scrollTo(0, 0) }} name='desktop_nav_btn' className="hidden md:block relative">
                    {totalUniqueItems !== 0 ? <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 flex justify-center items-center border border-white text-white text-[10px] aspect-square rounded-full bg-[#FF4A60]">{totalUniqueItems}</span> : null}
                    {cart ? <i className="fa-solid fa-xmark text-gotham-black text-2xl align-middle" /> : <Image src={bag} />}
                </button>
                {user && window.matchMedia('(max-width: 760px)').matches ? <Link href='/earn-ufpoints'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                        <path d="M5.00075 0.529482C4.15007 0.663237 3.41709 1.18756 3.01048 1.95263C2.66806 2.60536 1.063 6.37725 1.0095 6.65011C0.977402 6.83202 0.961351 8.77949 0.972051 11.9629C0.988102 16.655 0.998802 17.0027 1.08976 17.2703C1.30911 17.939 1.71038 18.4473 2.2882 18.7897C2.95698 19.1963 2.59316 19.1696 8.25903 19.191L13.331 19.207L13.1384 18.9502C13.0314 18.8111 12.8334 18.5062 12.6943 18.2761L12.4482 17.8641H7.91661C2.91417 17.8641 3.08538 17.8748 2.72692 17.5271C2.63061 17.4308 2.49151 17.2328 2.42731 17.0884L2.2989 16.8208V11.9896V7.16373H10.9983H19.6978L19.6603 6.81062C19.6389 6.61801 19.58 6.33445 19.5265 6.17929C19.3928 5.79408 17.7396 2.11849 17.5791 1.84028C17.242 1.26781 16.7712 0.887945 16.065 0.620436L15.7547 0.502731L10.5115 0.497379C7.6277 0.492029 5.15056 0.508081 5.00075 0.529482ZM9.68218 3.81985V5.82618H6.20455C4.29453 5.82618 2.72692 5.81548 2.72692 5.80478C2.72692 5.77268 3.99492 2.91567 4.12332 2.65351C4.32128 2.26295 4.64229 1.97939 5.0275 1.86168C5.10241 1.84028 6.1778 1.81888 7.42439 1.81888L9.68218 1.81353V3.81985ZM15.867 1.95798C16.3004 2.18804 16.4555 2.44485 17.1939 4.11947C17.5737 4.9862 17.8947 5.72453 17.9054 5.75663C17.9268 5.81013 17.2153 5.82618 14.4492 5.82618H10.9662V3.81985V1.80818L13.3096 1.82423C15.6049 1.84028 15.653 1.84028 15.867 1.95798Z" fill="#4d4d4d" />
                        <path d="M18.3499 8.555C16.9749 8.7048 15.7711 9.27727 14.7866 10.251C13.631 11.4013 13.0371 12.8405 13.0371 14.5205C13.0371 16.2004 13.631 17.6396 14.7866 18.7899C15.6373 19.6299 16.6057 20.1489 17.8148 20.411C18.3659 20.5287 19.5697 20.5287 20.1743 20.4164C21.6884 20.1221 22.9296 19.3303 23.8659 18.0677C24.631 17.0297 25.0002 15.8794 25.0002 14.5205C25.0002 13.7768 24.9253 13.2792 24.7112 12.6158C24.1495 10.8716 22.7263 9.42708 21.0036 8.84391C20.2492 8.5871 19.1524 8.46939 18.3499 8.555ZM20.1957 9.9942C21.8435 10.4276 23.0901 11.6795 23.5503 13.3434C23.7161 13.9533 23.7161 15.0876 23.5503 15.6975C23.0901 17.3614 21.8596 18.592 20.1957 19.0521C19.8479 19.143 19.6232 19.1644 19.0186 19.1644C18.4141 19.1644 18.1894 19.143 17.8416 19.0521C16.1777 18.592 14.9471 17.3614 14.487 15.6975C14.3961 15.3498 14.3747 15.125 14.3747 14.5205C14.3747 13.9159 14.3961 13.6912 14.487 13.3434C14.9792 11.5565 16.3221 10.3045 18.168 9.9193C18.6762 9.81229 19.6393 9.84975 20.1957 9.9942Z" fill="#4d4d4d" />
                        <path d="M21.1369 12.6022C21.0299 12.645 20.3986 13.2282 19.6816 13.9344C18.9861 14.6246 18.3869 15.1917 18.3494 15.1917C18.3173 15.1917 18.0017 14.9188 17.6593 14.5818C16.9423 13.8863 16.7604 13.7899 16.4501 13.9398C16.0649 14.1217 15.9258 14.5497 16.1452 14.8546C16.204 14.9349 16.6588 15.4057 17.1564 15.8979C18.0659 16.8021 18.205 16.8984 18.4993 16.8235C18.5902 16.8021 19.1948 16.2457 20.2113 15.2292C21.0727 14.3678 21.8324 13.5973 21.8913 13.5171C22.1106 13.2121 21.9555 12.7467 21.581 12.5915C21.367 12.5006 21.367 12.5006 21.1369 12.6022Z" fill="#4d4d4d" />
                    </svg>
                </Link> : null}
            </section>
        </nav>
        <SecondaryNavbar
            user={user}
            isLoggedIn={isLoggedIn}
            cart={cart}
            closeCart={closeCart}
            toggleCart={toggleCart}
            langObj={langObj}
            logout={logout}
            setLogout={setLogout}
            currency={currency}
            totalUniqueItems={totalUniqueItems}
        />
    </>
    else return <>
        <Cart cart={cart} toggleCart={toggleCart} setCart={setCart} />
        <MobileNavbar
            user={user}
            isLoggedIn={isLoggedIn}
            cart={cart}
            toggleCart={toggleCart}
            logout={logout}
            setLogout={setLogout}
            totalUniqueItems={totalUniqueItems}
        />
    </>
}