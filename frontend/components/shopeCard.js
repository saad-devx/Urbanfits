import React from 'react'
import LinkBtn from './link_btn'
import Image from 'next/image'

// images imports
import image1 from '../public/card imgs/card img1.png'
import image2 from '../public/card imgs/card img2.png'

export default function ShopeCard() {
    return (
        <div className='border border-green-600 relative w-[350px] h-[500px] rounded-3xl font_futuraLT overflow-hidden' >
            <Image src={image1} className='w-full h-full object-cover' ></Image>
            <div className="absolute w-full bottom-0 left-0 p-7 bg-gradient-to-t from-white to-transparent flex flex-col items-start text-black text-5xl">
                <h1 className="text-2xl font-semibold">Jackets and Coats</h1>
                <p className="mt-1 mb-4 text-lg">New In Women Wear</p>
                <LinkBtn my="my-0" bg="bg-black/70" classes="w-1/2 text-xs md:text-base">Discover</LinkBtn>
            </div>
        </div>
    )
}
