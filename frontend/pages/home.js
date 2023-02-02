import React, { useState } from 'react'
import Carousel from '@/subcomponents/_carousel';
import Navbar from '../subcomponents/_navbar'

export default function Home() {
    const [expand, setExpand] = useState(false)
    return (
        <main className="w-full h-full">
            <Navbar setExpand={setExpand} />
            <section className={`${expand === true ? 'w-3/4' : 'w-full lg:w-[94.6%]'} absolute right-0 top-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700`}>
                <Carousel />
                <section className="p-7"></section>
            </section>
        </main>
    )
}
