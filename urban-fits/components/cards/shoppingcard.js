import React from 'react'
import Link from 'next/link'
import { useCart } from "react-use-cart";
import Image from 'next/image'
import bag from '@/public/bag.svg'
import toaster from '@/utils/toast_function'

export default function Shoppingcard(props) {
    const { product } = props
    const { addItem, inCart } = useCart()

    return (
        <div key={props.li_key} className={`relative bg-[#eaeaea] border ${props.classes ? props.classes : "w-full min-h-[212px] h-[225px] md:h-[290px] lg:h-[370px] xl:h-[400px] 2xl:h-[440px]"} ${props.margin ? props.margin : 'mr-auto my-3 md:my-5'} rounded-2xl lg:rounded-3xl hover:scale-[1.01] hover:rounded-xl font_gotham transition-all duration-500 overflow-hidden`} >
            <button onClick={() => {
                if (inCart(`${product.variants[0]._id}${product.variants[0].sizes[0].size}`)) return toaster('info', 'This item is already in the cart!');
                addItem({ product_id: product._id, id: `${product.variants[0]._id}${product.variants[0].sizes[0].size}`, name: product.name, price: product.price, shipping_fee: product.shipping_detials.fees, stock: product.variants[0].stock, size: product.variants[0].sizes[0].size, sizes: product.variants[0].sizes, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart")
            }} className="group w-10 h-10 absolute top-1 right-1 md:top-3 md:right-4 z-10 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60">
                <Image src={bag} className='w-4 md:w-5' />
            </button>
            <button className={`fa-regular fa-heart text-[22px] group w-10 h-10 absolute top-1 left-1 md:top-3 md:left-4 z-10 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60`}>
            </button>
            <Link href={props.link || `/products/product/64806298f7cd24b01e205f3f`}>
                <div className="relative w-full h-4/5 md:h-4/5 lg:h-4/5 pt-3 lg:pt-5">
                    <Image src={props.img} width={640} height={853} className={`h-full object-contain ${!props.object_fit ? props.object_fit : "object-center"}`} alt='Urban Fits' />
                </div>
                <div className="w-full h-1/5 md:h-1/5 lg:h-1/5 py-2 lg:py-3 px-3 text-black flex flex-col items-center">
                    <span className="max-w-full 2xl:px-4 font_urbanist_medium text-sm lg:text-base text-center overflow-hidden xl:overflow-visible whitespace-nowrap xl:whitespace-pre-line text-ellipsis">
                        {props.product.name}
                    </span>
                    <div className='w-full px-0 md:px-3 mt-1.5 flex justify-between font_urbanist text-[10px] lg:text-sm '>
                        <span>{props.product.variants.length} Color(S)</span>
                        <span>${props.product.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export function SmallShoppingcard(props) {
    const { product } = props
    const { addItem } = useCart()
    return (
        <div {...props} className={`relative bg-[#eaeaea] border ${props.classes} w-full min-h-[212px] h-[230px] 2xl:h-[250px] ${props.margin ? props.margin : 'my-3 md:my-5'} rounded-xl hover:scale-[1.01] hover:rounded-lg font_gotham transition-all duration-500 overflow-hidden`} >
            <button title='Add to Cart' onClick={() => {
                if (inCart(`${product.variants[0]._id}${product.variants[0].sizes[0].size}`)) return toaster('info', 'This item is already in the cart!');
                addItem({ product_id: product._id, id: `${product.variants[0]._id}${product.variants[0].sizes[0].size}`, name: product.name, price: product.price, shipping_fee: product.shipping_detials.fees, stock: product.variants[0].stock, size: product.variants[0].sizes[0].size, sizes: product.variants[0].sizes, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart")
            }} className="group w-8 h-8 absolute top-1 right-2 z-20 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60">
                <Image src={bag} className='w-4' />
            </button>
            <Link href={`/products/product/64806298f7cd24b01e205f3f`}>
                <div className="relative w-full h-4/5 pt-3">
                    <Image src={product.cover_image} width={640} height={853} className="h-full object-contain object-center" alt={product.name} />
                </div>
                <div className="w-full h-1/5 py-2 px-3 text-black flex flex-col items-center">
                    <span className="max-w-full font_gotham_bold tracking-wide text-[8px] lg:text-[10px] text-center overflow-hidden whitespace-nowrap text-ellipsis" >{props.product.name.toUpperCase()}</span>
                    <div className='w-full mt-1.5 flex justify-between font_gotham_medium text-[8px] '>
                        <span className='tracking-[0.15em]'>{product.variants.length} COLOR(S)</span>
                        <span className='tracking-[0.15em]'>${product.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
