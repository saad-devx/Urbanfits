import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Shoppingcard(props) {
    return (
        <div className='relative bg-white w-[48%] md:w-[32%] lg:w-[23%] h-[31vh] lg:h-[62vh] my-5 rounded-2xl hover:scale-[1.02] hover:rounded-lg font_futuraLT transition-all duration-500 overflow-hidden' >
            <Link href="#" >
                <div className="relative w-full h-3/4 md:h-[80%]">
                    <span className="w-9 h-9 absolute top-2 md:top-4 right-2 md:right-4 transition-all duration-300 rounded-full flex justify-center items-center hover:bg-gold-land hover:text-white">
                        <i className="material-symbols-outlined text-xl md:text-[1.6rem]">local_mall</i>
                    </span>
                    <Image src={props.img} className={`w-full h-full object-cover ${!props.object_fit ? "object-center" : props.object_fit}`} alt='' ></Image>
                </div>
                <div className=" w-full h-full my-2 lg:my-4 px-3 text-black flex flex-col items-start">
                    <h4 className=" md:text-lg">Cotton Black Shirt</h4>
                    <div className="w-full my-1 md:my-2 flex justify-between font_futuraLTlite text-sm md:text-base">
                        <small>1 Color(s)</small>
                        <small>$7.89</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}
