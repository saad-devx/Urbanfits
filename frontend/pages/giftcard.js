import React from 'react'
import Navbar from './_navbar'
import Image from 'next/image'
import Card from './_card'
import giftBanner from '../public/giftbanner.png'

export default function Giftcard() {
    return (
        <main className="bg-gray-100 ">
            <Navbar />
            <section className=" w-full pl-16 p-5 flex flex-col justify-center items-center space-y-5 ">
                <div className=' w-11/12 relative rounded-sm'>
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-6xl font_futuraLT ">Urban Gift Cards</h1>
                    <Image src={giftBanner} className=' rounded-sm' />
                </div>
                <div className="w-11/12 border- border-red-800 cards flex flex-col md:flex-row justify-around itmes-center  p-5 h-auto">
                    <Card sizeClasses='w-2/5 h-2/5' />
                    <Card sizeClasses='w-2/5 h-2/5' />
                </div>
                <div className="w-2/5 "></div>
            </section>
        </main>
    )
}
