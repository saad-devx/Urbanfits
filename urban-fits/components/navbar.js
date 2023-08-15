import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Cart = dynamic(() => import('./cart'));
const Search = dynamic(() => import('./search'));
import { Countries } from '@/static data/countryCodes';
import useUser from '@/hooks/useUser';
import useAddress from '@/hooks/useAddress';
import Link from 'next/link'
import ToTopBtn from './buttons/toTopBtn';
import Image from 'next/image';
import logoutIcon from '@/public/logoutIcon.svg'
import bag from '@/public/bag.svg'

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
        <span className={`${router.asPath.includes(props.href) ? 'w-full' : 'w-0'} group-hover:w-full h-[2.5px] mt-px justify-self-start bg-gold-land transition-all duration-1000`}></span>
    </Link>
    else return <Link {...props} className={props.classes || "group flex flex-col"}>
        {props.children}
        <span className={`${router.asPath.includes(props.href) ? 'w-full' : 'w-0'} group-hover:w-full h-[2.5px] mt-px justify-self-start bg-gold-land transition-all duration-1000`}></span>
    </Link>
}

const SecondaryNavbar = ({ cart, setCart, totalUniqueItems }) => {
    const router = useRouter()
    if (window.matchMedia('(min-width: 1024px)').matches) return <nav className="sticky top-[-1px] left-0 right-0 z-40 w-full h-[50px] border-b flex justify-between items-center px-7 lg:px-8 xl:px-10 2xl:px-16 font_urbanist text-[15px] bg-white transition-all duration-300">
        <ListItem key={1} href='/all-categories' categories>All Categories</ListItem>
        <ListItem key={2} href='/products/category/64d517f6218f4e9ee6253b18?name=new+collection'>New Collection</ListItem>
        <ListItem key={3} href='/products/category/64a59d5816b4c91fa1967b2e?name=women'>Women</ListItem>
        <ListItem key={4} href='/products/category/649b292762a7c100cfb7207f?name=men'>Men</ListItem>
        <ListItem key={5} href='/products/category/64d4dfa643c643cc9c60c672?name=kids'>Kids</ListItem>
        <ListItem key={6} href='/products/category/64d4dfa643c643cc9c60c672?name=baby+products' classes="group hidden 2xl:flex flex-col">Baby Products</ListItem>
        <ListItem key={7} href='/products/category/sale'>Sales</ListItem>
        <ListItem key={8} href='/giftcard' classes="group hidden xl:flex flex-col">Gifts</ListItem>
        <ListItem key={9} href='/products/category/64b5391e2c57908f1e94dc27?name=accessories' classes="group hidden xl:flex flex-col">Accessories</ListItem>
        <ListItem key={10} href='/uf-points'>Earn Uf Points</ListItem>
        <ListItem key={11} href='/products/category/wishlist'>Wishlist</ListItem>
        <span className="flex flex-col justify-center items-center text-sm">
            Minimum Order
            <p className="font_urbanist_bold text-[13px]">USD 100</p>
        </span>
    </nav>

    else if (window.matchMedia('(max-width: 1024px)').matches) return <>
        <section className="w-full h-[50px] flex justify-center items-start px-7 lg:px-8 xl:px-10 2xl:px-16 font_urbanist text-[15px] bg-white border-b transition-all duration-300">
            <Search classes="flex lg:hidden" />
        </section>
        <section className="fixed z-40 bottom-4 left-[5%] right-[5%] bg-gray-50 w-[90%] h-14 rounded-full border flex justify-around items-center">
            <button>
                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.80469" x2="25" y2="1.80469" stroke="gray" strokeWidth="2" />
                    <line y1="8.80469" x2="20" y2="8.80469" stroke="gray" strokeWidth="2" />
                    <line y1="15.8047" x2="25" y2="15.8047" stroke="gray" strokeWidth="2" />
                </svg>
            </button>
            <button>
                <svg width="24" height="21" viewBox="0 0 24 21" fill={router.pathname === '/wishlist' ? 'black' : "#000000"} xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                        <path id="Vector" d="M5.70654 0.532631C5.61255 0.54438 5.34821 0.597248 5.11912 0.650116C3.20413 1.09655 1.5711 2.37713 0.689969 4.12177C-0.255778 5.99564 -0.226407 8.42756 0.760459 10.3308C1.31851 11.4058 1.60634 11.7054 5.57731 15.4002C7.61566 17.2976 9.57764 19.1245 9.93597 19.4534C10.2884 19.7883 10.6996 20.1407 10.8406 20.2347C11.3986 20.5989 12.0624 20.5872 12.6381 20.2053C12.8026 20.0996 13.3841 19.5886 13.9304 19.0775C19.3641 14.0198 21.4847 12.0285 21.6903 11.7876C22.5949 10.7126 23.0942 9.71401 23.3409 8.46868C23.4701 7.81664 23.4701 6.50082 23.3409 5.84879C22.8768 3.52847 21.3495 1.71922 19.1467 0.890957C18.4536 0.632492 17.9954 0.54438 17.1612 0.509134C15.5811 0.444517 14.3592 0.808718 12.9847 1.76034C12.456 2.12454 12.2152 2.33014 11.9567 2.64147L11.7452 2.89406L11.3986 2.53573C10.447 1.56649 9.00784 0.808718 7.68615 0.579624C7.23971 0.497385 6.16473 0.473888 5.70654 0.532631ZM7.93874 2.10692C9.08421 2.42413 9.86548 2.9528 10.7701 4.02191C11.2107 4.54471 11.4456 4.72094 11.7217 4.72094C12.0213 4.72094 12.2093 4.58583 12.6616 4.05128C13.437 3.14078 14.0009 2.69434 14.8351 2.34776C15.5282 2.05405 15.8689 1.99531 16.8382 1.99531C17.9073 1.99531 18.4007 2.10692 19.2231 2.52399C20.5859 3.21714 21.514 4.40373 21.8782 5.91928C21.9957 6.43033 22.0075 7.75203 21.9017 8.27483C21.6844 9.27932 21.2438 10.1605 20.6035 10.8536C20.4332 11.0357 15.6457 15.506 12.4384 18.4783C12.0977 18.7955 11.7746 19.054 11.7217 19.054C11.6747 19.054 10.0593 17.5972 8.13846 15.8173C2.49922 10.5834 2.58734 10.6656 2.08803 9.76101C1.64746 8.96212 1.47711 8.21609 1.48299 7.09999C1.48886 5.89578 1.71795 5.12039 2.34649 4.18639C3.08664 3.07616 4.26736 2.30077 5.60668 2.04818C6.18235 1.93657 7.43943 1.97181 7.93874 2.10692Z"
                            fill={router.pathname === '/wishlist' ? 'black' : 'gray'} />
                    </g>
                </svg>
            </button>
            <button onClick={() => {
                document.body.style.overflowY = cart ? null : 'hidden'
                setCart(!cart)
            }} className="relative">
                {totalUniqueItems !== 0 ? <i className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-2 h-2 border border-white aspect-square rounded-full bg-gold-land"></i> : null}
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99911 0.762917C9.93454 0.771265 9.72701 0.800486 9.53792 0.825531C8.24195 0.996679 7.01978 1.90252 6.4894 3.08386C6.26341 3.58061 6.21729 3.85611 6.18501 4.83709L6.15734 5.7471H4.40017C2.45853 5.7471 2.24638 5.76797 1.74368 5.99756C1.19946 6.24802 0.793609 6.76564 0.682922 7.36675C0.646026 7.56712 0.636802 9.06154 0.650638 12.593C0.669086 18.0281 0.65525 17.7692 0.950417 18.4288C1.47618 19.5851 2.55538 20.4074 3.9113 20.6829C4.22492 20.7456 4.80603 20.7539 10.322 20.7539C15.8379 20.7539 16.419 20.7456 16.7326 20.6829C18.0885 20.4074 19.1677 19.5851 19.6935 18.4288C19.9887 17.7692 19.9748 18.0281 19.9933 12.593C20.0071 9.06154 19.9979 7.56712 19.961 7.36675C19.8918 6.9994 19.6474 6.5444 19.3891 6.31481C19.2784 6.21045 19.057 6.06852 18.9002 5.99756C18.3975 5.76797 18.1854 5.7471 16.2437 5.7471H14.4866L14.4589 4.83709C14.4266 3.85611 14.3805 3.58061 14.1545 3.08386C13.638 1.93591 12.4988 1.06347 11.2213 0.842228C10.8616 0.779613 10.179 0.733696 9.99911 0.762917ZM10.8662 2.05697C11.5395 2.1822 12.1575 2.54537 12.5541 3.04629C12.9784 3.58478 13.0891 3.99804 13.0891 5.03746V5.7471H10.322H7.55477V5.03746C7.55477 3.99804 7.66545 3.58478 8.08975 3.04629C8.47716 2.55371 9.09978 2.1822 9.74545 2.06114C10.1698 1.97765 10.4373 1.97765 10.8662 2.05697ZM6.1804 8.65662C6.19423 10.5017 6.19884 10.5142 6.50785 10.6603C6.83069 10.8106 7.29188 10.7104 7.44869 10.4516C7.52248 10.3305 7.53171 10.151 7.54554 8.65662L7.55938 6.9994H10.322H13.0845L13.0984 8.65662C13.1122 10.5017 13.1168 10.5142 13.4258 10.6603C13.7486 10.8106 14.2098 10.7104 14.3667 10.4516C14.4404 10.3305 14.4497 10.151 14.4635 8.65662L14.4773 6.99523L16.3314 7.00775C18.3698 7.02028 18.3283 7.0161 18.5174 7.27909C18.5958 7.38344 18.6004 7.69235 18.6143 12.28C18.6281 17.6607 18.6327 17.5397 18.3468 18.0823C18.0747 18.5916 17.4982 19.0967 16.9494 19.3096C16.3959 19.5266 16.4743 19.5225 10.322 19.5225C4.16958 19.5225 4.24798 19.5266 3.69454 19.3096C3.14572 19.0967 2.56922 18.5874 2.29711 18.0823C2.01578 17.5438 2.02039 17.6649 2.02039 12.376C2.02039 9.32035 2.03884 7.50867 2.06651 7.41266C2.12186 7.23734 2.27867 7.09541 2.46314 7.04115C2.53694 7.02445 3.39938 7.00358 4.38173 7.00358L6.16656 6.9994L6.1804 8.65662Z"
                        fill={cart ? 'black' : 'gray'} />
                </svg>
            </button>
            <button>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2819 15.5591C13.2577 15.5591 13.2214 15.5591 13.1973 15.5591C13.161 15.5591 13.1126 15.5591 13.0763 15.5591C10.3312 15.4744 8.27539 13.334 8.27539 10.6977C8.27539 8.01304 10.4642 5.82422 13.1489 5.82422C15.8335 5.82422 18.0223 8.01304 18.0223 10.6977C18.0103 13.3461 15.9424 15.4744 13.3182 15.5591C13.294 15.5591 13.294 15.5591 13.2819 15.5591ZM13.1368 7.62607C11.4438 7.62607 10.0772 9.00466 10.0772 10.6856C10.0772 12.3423 11.3712 13.6847 13.0159 13.7451C13.0521 13.733 13.1731 13.733 13.294 13.7451C14.9145 13.6605 16.1842 12.3302 16.1963 10.6856C16.1963 9.00466 14.8298 7.62607 13.1368 7.62607Z" fill="gray" />
                    <path d="M12.9984 26.9023C9.76795 26.9023 6.68162 25.5367 4.29182 23.0513C4.07566 22.8328 3.97958 22.5051 4.0036 22.191C4.15972 20.5659 5.04839 19.0501 6.52551 17.9303C10.1042 15.2264 15.9046 15.2264 19.4713 17.9303C20.9484 19.0637 21.8371 20.5659 21.9932 22.191C22.0292 22.5187 21.9211 22.8328 21.705 23.0513C19.3151 25.5367 16.2288 26.9023 12.9984 26.9023ZM5.88903 21.9179C7.88253 23.8161 10.3924 24.8539 12.9984 24.8539C15.6043 24.8539 18.1142 23.8161 20.1077 21.9179C19.8916 21.0848 19.3152 20.2791 18.4625 19.6236C15.5083 17.384 10.5005 17.384 7.52226 19.6236C6.66962 20.2791 6.10519 21.0848 5.88903 21.9179Z" fill="gray" />
                    <path d="M13.1347 26.7069C5.96357 26.7069 0.134766 20.8781 0.134766 13.707C0.134766 6.53583 5.96357 0.707031 13.1347 0.707031C20.3058 0.707031 26.1346 6.53583 26.1346 13.707C26.1346 20.8781 20.3058 26.7069 13.1347 26.7069ZM13.1347 2.52097C6.96728 2.52097 1.94871 7.53955 1.94871 13.707C1.94871 19.8744 6.96728 24.8929 13.1347 24.8929C19.3021 24.8929 24.3207 19.8744 24.3207 13.707C24.3207 7.53955 19.3021 2.52097 13.1347 2.52097Z" fill="gray" />
                </svg>
            </button>
            <Link href='/' className={`fa-solid fa-house text-xl ${router.pathname === '/' ? 'text-black' : 'text-gray-400'}`}></Link>
        </section>
    </>
}


export default function Navbar() {
    const { user, country, setCountry } = useUser()
    const { address, getAddress } = useAddress()
    const { totalUniqueItems } = useCart()
    const [cart, setCart] = useState(false)

    useEffect(() => {
        if (!address) getAddress()
    }, [user])

    const getDisplayAddress = () => {
        if (!address) return <Link href='/user/address'>Set your Address</Link>
        let shippingAddress = address.addresses.filter(address => address.tag === 'shipping')[0]
        if (shippingAddress) return shippingAddress.address
        else return <Link href='/user/address'>Set your Address</Link>
    }

    return <>
        <Cart cart={cart} setCart={setCart} />
        <ToTopBtn />
        <nav className="sticky -top-full z-50 font_urbanist w-full h-[65px] flex justify-between items-center px-7 lg:px-8 xl:px-10 2xl:px-16 bg-white">
            <Link href='/' className='font_copper text-xl lg:text-2xl tracking-2'><h1>URBAN FITS</h1></Link>
            <Search classes="hidden lg:flex" />
            <Link href={user ? '/user/address' : "#"} className="hidden md:justify-self-end lg:justify-self-auto md:flex items-center text-black">
                <i className="fa-solid fa-location-dot mr-3 text-lg text-gray-400"></i>
                <div className="flex flex-col justify-center items-start">
                    <p className="font_urbanist text-[13px]">Deliver to</p>
                    <p className="font_urbanist_bold text-[13px] truncate max-w-[130px]">{getDisplayAddress()}</p>
                </div>
            </Link>
            <button onClick={() => {
                if (!user || !user.email) return
            }} className="relative hidden group lg:flex items-center font_urbanist text-[13px] text-black">
                <i className="fa-regular fa-user text-lg mr-3"></i>
                {user && user.email ? <>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font_urbanist text-[13px]">Welcome Back</p>
                        <p className="font_urbanist_bold text-[13px] truncate max-w-[130px]">{user.firstname ? user.firstname : user.email}</p>
                    </div>
                    <span className="absolute top-full w-full h-4 bg-transparent pointer-events-none group-hover:pointer-events-auto"></span>
                    <div className="absolute top-full translate-y-4 left-1/2 -translate-x-1/2 bg-white w-48 !p-0 text-sm font_urbanist equillibrium_shadow rounded-lg transition-all overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                        <li className="w-full px-4 border-b hover:bg-slate-100 flex justify-between items-center py-3 transition-all">
                            <span className="font_copper text-base">UF-Points</span>
                            <p className='font_urbanist_medium'>{100}</p>
                        </li>
                        <Link href="/user/personalnifo" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">My Dashboard</Link>
                        <Link href="/user/orders" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">My Orders</Link>
                        <Link href="/user/orders/buyagain" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">Buy Again</Link>
                        <Link href="/user/shoppinglists" className="w-full px-4 border-b hover:bg-slate-100 flex items-center py-3 transition-all">My Shopping Lists</Link>
                        <button className="w-full px-4 hover:bg-slate-100 flex items-center py-3 transition-all gap-x-2"><Image src={logoutIcon} alt="lo" /> Log Out</button>
                    </div>
                </>
                    : <><Link href='/auth/login'>Login</Link> &nbsp;/&nbsp;<Link href='/auth/signup'>Register</Link></>}
            </button>
            <button className="group relative flex items-center gap-x-2">
                <span className="w-7 h-5 overflow-hidden" title={country.country}><Image width={50} height={40} src={country.src} /></span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.718574 1.26652C0.471471 0.976974 0.475731 0.51076 0.729225 0.226124C0.852776 0.0862599 1.01361 0.0163273 1.1755 0.0163274C1.34166 0.0163274 1.50675 0.0899399 1.63136 0.238392L4.99708 4.20367L8.44587 0.231032C8.6951 -0.0536042 9.09984 -0.054831 9.35014 0.232259C9.59831 0.520576 9.59831 0.985564 9.34907 1.27388L5.44336 5.77162C5.323 5.90903 5.1611 5.98633 4.99175 5.98633L4.98749 5.98633C4.81708 5.9851 4.65305 5.90535 4.53483 5.76426L0.718574 1.26652Z" fill="#C4C4C4" />
                </svg>
                <span className="absolute top-full w-full h-4 bg-transparent pointer-events-none group-hover:pointer-events-auto"></span>
                <div className="absolute top-full translate-y-4 left-1/2 -translate-x-1/2 bg-white equillibrium_shadow w-36 max-h-[12rem] text-xs rounded-lg overflow-y-scroll transition-all opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    {Countries.map((c, index) => {
                        return <li onClick={() => {
                            return setCountry(c)
                        }} key={index} title={c.country} className="w-full px-3 border-b hover:bg-slate-100 flex justify-between items-center py-2 transition-all">
                            <span className="w-5 h-4 overflow-hidden">
                                <Image width={50} height={40} src={c.src} />
                            </span>
                            {c.code}
                        </li>
                    })}
                </div>
            </button>
            <div className='relative'>
                <i className="absolute top-0 right-0 z-10 translate-x-1/3 w-2 h-2 border border-white aspect-square rounded-full bg-gold-land"></i>
                <button className="fa-regular fa-envelope text-xl translate-y-[15%]"></button>
            </div>
            <button onClick={() => {
                document.body.style.overflowY = cart ? null : 'hidden'
                setCart(!cart)
            }} className="hidden lg:block relative">
                {totalUniqueItems !== 0 ? <i className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-2 h-2 border border-white aspect-square rounded-full bg-gold-land"></i> : null}
                <Image src={bag} />
            </button>
        </nav>
        <SecondaryNavbar
            cart={cart}
            setCart={setCart}
            totalUniqueItems={totalUniqueItems}
        />
    </>
}