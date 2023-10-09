import React, { useState } from 'react'
import Link from 'next/link'
import AddToShopListModal from '../modals/addtoshoppinglist';
import { useCart } from "react-use-cart";
import useUser from '@/hooks/useUser';
import Image from 'next/image'
import bag from '@/public/bag.svg'
import heart from '@/public/heart.svg'
import redHeart from '@/public/redHeart.svg'
import toaster from '@/utils/toast_function'
import ImgLoader from '../loaders/imgLoader';
import DemoImg from '@/public/card imgs/demo-img.png'

export default function Shoppingcard({ product }, props) {
    const { addItem, inCart } = useCart()
    const { user, wishList, addToWishList, removeFromWishList, inWishList } = useUser()
    const [loading, setLoading] = useState(true)
    const [addToListModal, setAddToListModal] = useState(null)

    return <>
        {addToListModal}
        <div {...props} className={`relative bg-gray-100 ${props.classes ? props.classes : "w-full min-h-[250px] h-[250px] md:h-[300px] lg:h-[370px] xl:h-[440px] 2xl:h-[460px]"} ${props.margin ? props.margin : 'mr-auto my-3 md:my-5'} rounded-2xl lg:rounded-3xl hover:scale-[1.01] hover:rounded-xl transition-all duration-500 overflow-hidden`} >
            <button title='Add to Cart' onClick={() => {
                if (inCart(`${product.variants[0]._id}${product.variants[0].sizes[0].size}`)) return toaster('info', 'This item is already in the cart!');
                addItem({ product_id: product._id, original_id: product.variants[0]._id, id: `${product.variants[0]._id}${product.variants[0].sizes[0].size}`, name: product.name, price: product.price, shipping_fee: product.shipping_details.fees, stock: product.variants[0].stock, size: product.variants[0].sizes[0].size, sizes: product.variants[0].sizes, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart")
            }} className="group w-10 h-10 absolute top-1 right-1 md:top-3 md:right-4 z-10 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60 hover:shadow-xl">
                <Image src={bag} className='w-4 md:w-5' alt='cart' />
            </button>
            <button onClick={() => {
                if (inWishList(product._id)) {
                    removeFromWishList(product._id)
                    return toaster("info", 'Product removed from WishList.')
                }
                else {
                    if (wishList.length > 79) return toaster("info", "You've reached your maximum limit.")
                    addToWishList(product._id)
                    return toaster("success", 'Product added to WishList.')
                }
            }} title='Add to Wishlist' className="group w-10 h-10 absolute top-1 left-1 md:top-3 md:left-4 z-10 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60 hover:shadow-xl">
                <Image src={inWishList(product._id) ? redHeart : heart} className='w-4 md:w-5' alt='wishlist' />
            </button>
            {user?._id && <button onClick={() => setAddToListModal(<AddToShopListModal product_id={product._id} show={addToListModal} setAddToListModal={setAddToListModal} />)} title="add to shopping list" className="group w-10 h-10 absolute top-1 left-10 md:left-14 md:top-3 z-10 text-base md:text-lg lg:text-xl text-gray-800 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60 hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 md:w-6 h-5 md:h-6' width="22" height="22" viewBox="0 0 31 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87479 6.51977C6.18215 6.51977 5.62066 7.08126 5.62066 7.7739V20.3152C5.62066 22.3931 7.30514 24.0776 9.38305 24.0776H21.9244C24.0023 24.0776 25.6867 22.3931 25.6867 20.3152V14.0445C25.6867 11.9666 24.0023 10.2822 21.9244 10.2822H16.9961C15.7381 10.2822 14.5634 9.65346 13.8656 8.60677L12.8466 7.07823C12.614 6.72933 12.2224 6.51977 11.8031 6.51977H6.87479ZM3.1124 7.7739C3.1124 5.69598 4.79688 4.01151 6.87479 4.01151H11.8031C13.061 4.01151 14.2358 4.6402 14.9336 5.6869L15.9526 7.21543C16.1852 7.56433 16.5768 7.7739 16.9961 7.7739H21.9244C25.3875 7.7739 28.195 10.5814 28.195 14.0445V20.3152C28.195 23.7784 25.3875 26.5858 21.9244 26.5858H9.38305C5.91986 26.5858 3.1124 23.7784 3.1124 20.3152V7.7739ZM15.6537 12.7904C16.3463 12.7904 16.9078 13.3519 16.9078 14.0445V15.9257H18.789C19.4817 15.9257 20.0432 16.4872 20.0432 17.1799C20.0432 17.8725 19.4817 18.434 18.789 18.434H16.9078V20.3152C16.9078 21.0078 16.3463 21.5693 15.6537 21.5693C14.9611 21.5693 14.3996 21.0078 14.3996 20.3152V18.434H12.5184C11.8257 18.434 11.2642 17.8725 11.2642 17.1799C11.2642 16.4872 11.8257 15.9257 12.5184 15.9257H14.3996V14.0445C14.3996 13.3519 14.9611 12.7904 15.6537 12.7904Z" fill="#202020" stroke="#202020" strokeWidth="0" />
                </svg>
            </button>}
            <Link href={props.link || `/products/product/${product._id}?timestamp=${Date.now()}`}>
                <div className="relative w-full h-3/4 lg:h-[70%] xl:h-[72%] pt-3 lg:pt-5 flex justify-center items-center">
                    <ImgLoader loading={loading} />
                    <Image src={product.cover_image || DemoImg} width={640} height={853} onLoad={() => setLoading(false)} className={`${loading ? 'w-0 h-0' : 'w-auto h-full'} object-contain`} alt='Urban Fits' />
                </div>
                <div className="w-full h-1/5 md:h-1/5 lg:h-1/5 py-2 lg:py-3 px-4 text-black flex flex-col items-center">
                    <span className="w-full font_urbanist_medium text-sm lg:text-base text-center">
                        <p className='truncate'>{product.name}</p>
                    </span>
                    <div className='w-full px-0 md:px-3 my-1 md:my-2 flex flex-row-reverse lg:flex-row justify-between items-center font_urbanist text-[10px] lg:text-sm '>
                        <span className='hidden lg:block'>{product.variants?.length} Color(s)</span>
                        <span className="lg:hidden px-1.5 py-0.5 border text-red-500 text-[9px] font_urbanist rounded-full">Earn 20 UF-Points</span>
                        <span>${product.price}</span>
                    </div>
                    <span className="hidden lg:flex w-full justify-center items-center border text-red-500 text-xs md:text-sm font_urbanist px-2 py-1 rounded-full">Earn 20 UF-Points</span>
                </div>
            </Link>
        </div>
    </>
}

export function SmallShoppingcard(props) {
    const { product } = props
    const { addItem, inCart } = useCart()
    const { user, wishList, addToWishList, removeFromWishList, inWishList } = useUser()
    const [addToListModal, setAddToListModal] = useState(null)

    return <>
        {addToListModal}
        <div {...props} className={`relative bg-gray-100 border ${props.classes} w-full min-h-[212px] h-[230px] 2xl:h-[250px] ${props.margin ? props.margin : 'my-3 md:my-5'} rounded-xl hover:scale-[1.01] hover:rounded-lg transition-all duration-500 overflow-hidden`} >
            <button title='Add to Cart' onClick={() => {
                if (inCart(`${product.variants[0]._id}${product.variants[0].sizes[0].size}`)) return toaster('info', 'This item is already in the cart!');
                addItem({ product_id: product._id, original_id: product.variants[0]._id, id: `${product.variants[0]._id}${product.variants[0].sizes[0].size}`, name: product.name, price: product.price, shipping_fee: product.shipping_details.fees, stock: product.variants[0].stock, size: product.variants[0].sizes[0].size, sizes: product.variants[0].sizes, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart")
            }} className="group w-8 h-8 absolute top-1 right-2 z-20 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60 hover:shadow-xl">
                <Image src={bag} alt='cart' className='w-4' />
            </button>
            <button onClick={() => {
                if (inWishList(product._id)) {
                    removeFromWishList(product._id)
                    return toaster("info", 'Product removed from WishList')
                }
                else {
                    if (wishList.length > 79) return toaster("info", "You've reached your maximum limit.")
                    addToWishList(product._id)
                    return toaster("success", 'Product added to WishList')
                }
            }} title='Add to Wishlist' className="group w-8 h-8 absolute top-1 left-2 z-20 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60 hover:shadow-xl">
                <Image src={inWishList(product._id) ? redHeart : heart} alt='wishlist' className='w-4' />
            </button>
            {user?._id && <button onClick={() => setAddToListModal(<AddToShopListModal product_id={product._id} show={addToListModal} setAddToListModal={setAddToListModal} />)} title="add to shopping list" className="group w-8 h-8 absolute top-1 left-10 z-10 text-base md:text-lg lg:text-xl text-gray-800 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60 hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' width="22" height="22" viewBox="0 0 31 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87479 6.51977C6.18215 6.51977 5.62066 7.08126 5.62066 7.7739V20.3152C5.62066 22.3931 7.30514 24.0776 9.38305 24.0776H21.9244C24.0023 24.0776 25.6867 22.3931 25.6867 20.3152V14.0445C25.6867 11.9666 24.0023 10.2822 21.9244 10.2822H16.9961C15.7381 10.2822 14.5634 9.65346 13.8656 8.60677L12.8466 7.07823C12.614 6.72933 12.2224 6.51977 11.8031 6.51977H6.87479ZM3.1124 7.7739C3.1124 5.69598 4.79688 4.01151 6.87479 4.01151H11.8031C13.061 4.01151 14.2358 4.6402 14.9336 5.6869L15.9526 7.21543C16.1852 7.56433 16.5768 7.7739 16.9961 7.7739H21.9244C25.3875 7.7739 28.195 10.5814 28.195 14.0445V20.3152C28.195 23.7784 25.3875 26.5858 21.9244 26.5858H9.38305C5.91986 26.5858 3.1124 23.7784 3.1124 20.3152V7.7739ZM15.6537 12.7904C16.3463 12.7904 16.9078 13.3519 16.9078 14.0445V15.9257H18.789C19.4817 15.9257 20.0432 16.4872 20.0432 17.1799C20.0432 17.8725 19.4817 18.434 18.789 18.434H16.9078V20.3152C16.9078 21.0078 16.3463 21.5693 15.6537 21.5693C14.9611 21.5693 14.3996 21.0078 14.3996 20.3152V18.434H12.5184C11.8257 18.434 11.2642 17.8725 11.2642 17.1799C11.2642 16.4872 11.8257 15.9257 12.5184 15.9257H14.3996V14.0445C14.3996 13.3519 14.9611 12.7904 15.6537 12.7904Z" fill="#202020" stroke="#202020" strokeWidth="0" />
                </svg>
            </button>}
            <Link href={props.link || `/products/product/${product._id}?timestamp=${Date.now()}`}>
                <div className="relative w-full h-4/5 pt-3">
                    <Image src={product.cover_image} width={640} height={853} className="h-full object-contain object-center" alt={product.name} />
                </div>
                <div className="w-full h-1/5 py-2 px-3 text-black flex flex-col items-center">
                    <span className="w-full font_urbanist_medium text-[10px] text-center truncate" >
                        {props.product.name}
                    </span>
                    <div className='w-full mt-1.5 flex justify-between font_urbanist_light text-[8px] '>
                        <span className='tracking-[0.15em]'>{product.variants.length} Color(s)</span>
                        <span className='tracking-[0.15em]'>${product.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    </>
}
