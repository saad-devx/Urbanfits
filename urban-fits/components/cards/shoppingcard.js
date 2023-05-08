import React from 'react'
import Link from 'next/link'
import { useCart } from "react-use-cart";
import Image from 'next/image'
import bag from '@/public/bag.svg'
import toaster from '@/utils/toast_function'

export default function Shoppingcard(props) {
    const { product } = props
    const { addItem } = useCart()

    return (
        <div key={props.li_key} className={`relative bg-[#eaeaea] border ${props.classes} w-full min-h-[212px] h-[225px] md:h-[290px] lg:h-[380px] xl:h-[430px] 2xl:h-[470px] ${props.margin ? props.margin : 'mr-auto my-3 md:my-5'} rounded-2xl lg:rounded-3xl hover:scale-[1.01] hover:rounded-xl font_gotham transition-all duration-500 overflow-hidden`} >
            <button onClick={() => { addItem({ product_id: product._id, id: product.variants[0]._id, name: product.name, price: product.price, shipping_fee: product.shipping_detials.fees, stock: product.variants[0].stock, size: product.variants[0].size[0], sizes: product.variants[0].size, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart") }} className="group w-10 h-10 absolute top-1 right-1 md:top-4 md:right-5 z-10 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60">
                <Image src={bag} className='w-4 md:w-5' />
            </button>
            <Link href={`/products/product/${props.id}`}>
                <div className="relative w-full h-4/5 md:h-4/5 lg:h-[80%] pt-3 lg:pt-5">
                    <Image src={props.img} width={640} height={853} className={`h-full object-contain ${!props.object_fit ? props.object_fit : "object-center"}`} alt='Urban Fits' />
                </div>
                <div className="w-full h-1/5 md:h-1/5 lg:h-[20%] py-2 lg:py-4 px-3 text-black flex flex-col items-center">
                    <span className="max-w-full 2xl:px-4 font_gotham_bold tracking-wide lg:tracking-[0.15em] text-[8px] md:text-[10px] text-center lg:text-xs overflow-hidden xl:overflow-visible whitespace-nowrap xl:whitespace-pre-line text-ellipsis" >{props.product.name.toUpperCase()}</span>
                    <div className='w-full px-0 md:px-3 mt-1.5 md:mt-2 flex justify-between font_gotham_medium text-[8px] md:text-[10px] '>
                        <span className='tracking-[0.15em]' >{props.product.variants.length} COLOR(S)</span>
                        <span className='tracking-[0.15em]' >${props.product.price}</span>
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
        <div key={props.li_key} className={`relative bg-[#eaeaea] border ${props.classes} w-full min-h-[212px] h-[230px] 2xl:h-[250px] ${props.margin ? props.margin : 'my-3 md:my-5'} rounded-xl hover:scale-[1.01] hover:rounded-lg font_gotham transition-all duration-500 overflow-hidden`} >
            <button title='Add to Cart' onClick={() => { addItem({ product_id: product._id, id: product.variants[0]._id, name: product.name, price: product.price, shipping_fee: product.shipping_detials.fees, stock: product.variants[0].stock, size: product.variants[0].size[0], sizes: product.variants[0].size, color: product.variants[0].color_name, images: product.variants[0].images }, 1); toaster('success', "Your item is added to the Cart") }} className="group w-8 h-8 absolute top-1 right-2 z-20 transition-all duration-300 rounded-full flex justify-center items-center bg-transparent hover:bg-white/60">
                <Image src={bag} className='w-4' />
            </button>
            <Link href={`/products/product/${props.id}`}>
                <div className="relative w-full h-4/5 pt-3">
                    <Image src={props.img} width={640} height={853} className="h-full object-contain object-center" alt='Urban Fits' />
                </div>
                <div className="w-full h-1/5 py-2 px-3 text-black flex flex-col items-center">
                    <span className="max-w-full font_gotham_bold tracking-wide text-[8px] lg:text-[10px] text-center overflow-hidden whitespace-nowrap text-ellipsis" >{props.product.name.toUpperCase()}</span>
                    <div className='w-full mt-1.5 flex justify-between font_gotham_medium text-[8px] '>
                        <span className='tracking-[0.15em]' >{props.product.variants.length} COLOR(S)</span>
                        <span className='tracking-[0.15em]' >${props.product.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
