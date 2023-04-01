import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toaster from '@/utils/toast_function'

export default function Shoppingcard(props) {
    console.log(props.colors)

    return (
        <div key={props.li_key} className='relative bg-gray-100 border w-[48%] md:w-[32%] lg:w-[315px] h-[31vh] lg:h-[460px] mr-auto my-5 rounded-2xl lg:rounded-3xl shadow-md hover:scale-[1.01] hover:rounded-xl font_gotham transition-all duration-500 overflow-hidden' >
            <Link href={`/products/product/${props.id}`}>
                <div className="relative w-full h-3/4 md:h-[80%]">
                    <button onClick={()=>{props.addItem(); toaster('success', "Your item is added to the Cart")}} className="group w-9 h-9 absolute top-2 md:top-4 right-2 md:right-4 transition-all duration-300 rounded-full flex justify-center items-center bg-white/60 hover:bg-gold-land">
                        <i className="material-symbols-outlined text-xl md:text-[1.6rem] group-hover:text-white">local_mall</i>
                    </button>
                    <Image src={props.img} width={640} height={853} className={`w-full h-full object-cover ${!props.object_fit ? "object-center" : props.object_fit}`} alt='Urban Fits' />
                </div>
                <div className=" w-full h-full my-2 lg:my-4 px-3 text-black flex flex-col items-start">
                    <h4 className="font_gotham_bold tracking-widest md:text-[13px] capitalize">{props.name?props.name.toUpperCase():''}</h4>
                    <div className="w-full my-3 md:mb-3 flex justify-between font_gotham text-[10px]">
                        <small className='tracking-widest' >{props.colors} COLOR(S)</small>
                        <small className='tracking-widest' >${props.price}</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}
