import React, { useState } from 'react'
import Navbar from './_navbar'
import Image from 'next/image'
import Card from './_card'
import giftBanner from '../public/giftbanner.png'

export default function Giftcard() {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="w-full h-full bg-gray-100 transition duration-700">
                <Navbar setExpand={setExpand} />
                <section className={`${expand === true ? 'w-3/4' : 'w-[95%]'} absolute right-0 top-0 p-6 pb-20 lg:pb-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700`}>
                    <div className={` ${expand === true ? 'rounded-3xl' : 'rounded-sm'} overflow-hidden w-full lg:w-11/12 h-[40vh] lg:h-auto relative mx-auto rounded-sm bg_giftbanner bg-no-repeat bg-cover bg-right transition-all duration-700`}>
                        <h1 className="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6vw] lg:text-[4vw] font_futuraLT ">Urban Gift Cards</h1>
                        <Image src={giftBanner} alt='' className={`hidden lg:block`} />
                    </div>
                    <div className="w-full lg:w-11/12 p-5 flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-y-0">
                        <Card value='Add a personalized messgae, we deliver your gift via email.' sizeClasses='w-full h-72 md:w-1/2 lg:w-2/5 md:h-1/2' />
                        <Card value='Pick one out and we’ll mail it to the lucky recipent.' sizeClasses='w-full h-72 md:w-1/2 lg:w-2/5 md:h-2/5' />
                    </div>
                    <div className="w-2/5 "></div>
                </section>
            </main>
        </>
    )
}
