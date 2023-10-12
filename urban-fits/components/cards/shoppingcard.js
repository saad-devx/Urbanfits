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
import useWallet from '@/hooks/useWallet';
const { formatPrice } = useWallet.getState()

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
                addItem({ product_id: product._id, original_id: product.variants[0]._id, id: `${product.variants[0]._id}${product.variants[0].sizes[0].size}`, name: product.name, price: product.price, uf_points: product.uf_points, shipping_fee: product.shipping_details.fees, stock: product.variants[0].stock, size: product.variants[0].sizes[0].size, sizes: product.variants[0].sizes, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart")
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
                <svg className='w-5 h-5' width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21942 1.68268C1.96529 1.68268 1.96529 2.24417 1.96529 2.93681V15.4781C1.96529 17.556 2.34375 19.1621 5.72768 19.2405H18.269C21.3438 19.1621 22.0313 17.556 22.0313 15.4781V9.20741C22.0313 7.12951 21.3438 4.44511 18.269 4.44511H13.3407C12.0827 4.44511 10.7442 4.44511 10.2102 3.76968L9.19123 2.24114C8.95863 1.89224 8.56703 1.68268 8.14773 1.68268H3.21942ZM0.457031 2.93681C0.457031 0.858887 1.14151 0.174417 3.21942 0.174417H8.14773C9.40563 0.174417 9.64595 0.115998 10.3438 1.1627C11.0415 2.2094 11.3438 2.6627 11.3438 2.6627C11.5764 3.0116 12.9214 2.93681 13.3407 2.93681H18.269C21.7321 2.93681 23.5396 5.74431 23.5396 9.20741V15.4781C23.5396 18.9413 21.7321 20.7487 18.269 20.7487H5.72768C2.26449 20.7487 0.457031 18.9413 0.457031 15.4781V2.93681ZM12 8C12.6926 8 12.667 8.66211 12.667 9.20741V11.4004H14.957C15.6497 11.4004 16.457 11.3073 16.457 12C16.457 12.6926 15.6497 12.5969 14.957 12.5969H12.667V15.4784C12.667 15.6113 12.6926 16.5 12 16.5C11.3074 16.5 11.2693 15.7985 11.2693 15.4784V12.5969H8.86303C8.17033 12.5969 7.34375 12.6985 7.34375 12.0059C7.34375 11.3132 8.17033 11.4004 8.86303 11.4004H11.2693V9.20741C11.2693 8.51481 11.3074 8 12 8Z" fill="black" />
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
                        {product.uf_points ? <span className="lg:hidden px-1.5 py-px border text-red-500 text-[9px] font_urbanist rounded-full">Earn {product.uf_points} UF-Points</span> : <span style={{lineHeight: 1.3}} className="lg:hidden px-1.5 py-px border gradient_txt text-xs leading-[1.3] font_copper rounded-full">ON SALE</span>}
                        <span>{formatPrice(product.price)}</span>
                    </div>
                    {product.uf_points ? <span className="hidden lg:flex w-full justify-center items-center border text-red-500 text-xs md:text-sm font_urbanist px-2 py-1 rounded-full">Earn {product.uf_points} UF-Points</span> : <span style={{lineHeight: 1.3}} className="hidden lg:flex w-full justify-center items-center border text-base gradient_txt font_copper px-2 py-1 rounded-full">ON SALE</span>}
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
                addItem({ product_id: product._id, original_id: product.variants[0]._id, id: `${product.variants[0]._id}${product.variants[0].sizes[0].size}`, name: product.name, price: product.price, uf_points: product.uf_points, shipping_fee: product.shipping_details.fees, stock: product.variants[0].stock, size: product.variants[0].sizes[0].size, sizes: product.variants[0].sizes, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart")
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
                <svg className='w-5 h-5' width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21942 1.68268C1.96529 1.68268 1.96529 2.24417 1.96529 2.93681V15.4781C1.96529 17.556 2.34375 19.1621 5.72768 19.2405H18.269C21.3438 19.1621 22.0313 17.556 22.0313 15.4781V9.20741C22.0313 7.12951 21.3438 4.44511 18.269 4.44511H13.3407C12.0827 4.44511 10.7442 4.44511 10.2102 3.76968L9.19123 2.24114C8.95863 1.89224 8.56703 1.68268 8.14773 1.68268H3.21942ZM0.457031 2.93681C0.457031 0.858887 1.14151 0.174417 3.21942 0.174417H8.14773C9.40563 0.174417 9.64595 0.115998 10.3438 1.1627C11.0415 2.2094 11.3438 2.6627 11.3438 2.6627C11.5764 3.0116 12.9214 2.93681 13.3407 2.93681H18.269C21.7321 2.93681 23.5396 5.74431 23.5396 9.20741V15.4781C23.5396 18.9413 21.7321 20.7487 18.269 20.7487H5.72768C2.26449 20.7487 0.457031 18.9413 0.457031 15.4781V2.93681ZM12 8C12.6926 8 12.667 8.66211 12.667 9.20741V11.4004H14.957C15.6497 11.4004 16.457 11.3073 16.457 12C16.457 12.6926 15.6497 12.5969 14.957 12.5969H12.667V15.4784C12.667 15.6113 12.6926 16.5 12 16.5C11.3074 16.5 11.2693 15.7985 11.2693 15.4784V12.5969H8.86303C8.17033 12.5969 7.34375 12.6985 7.34375 12.0059C7.34375 11.3132 8.17033 11.4004 8.86303 11.4004H11.2693V9.20741C11.2693 8.51481 11.3074 8 12 8Z" fill="black" />
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
                        <span className='tracking-[0.15em]'>{formatPrice(product.price)}</span>
                    </div>
                </div>
            </Link>
        </div>
    </>
}
