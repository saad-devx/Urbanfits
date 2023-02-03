import React, { useEffect, useState } from 'react'
import Carousel from '@/subcomponents/_carousel';
import Navbar from '../subcomponents/_navbar'

export default function Home() {
    // state for navbar expansion
    const [expand, setExpand] = useState(false)

    const [resize, setSize] = useState(false)
    const getPos = ()=>{window.addEventListener('scroll', () => {
        let position = document.documentElement.scrollTop
        // if (position>>3) setSize("w-11/12 h-[90vh] rounded-3xl m-10")
        if (position>>0) setSize(true)
        else {}
    })}
    useEffect(()=>{
        getPos()
    })
      
      
    return (
        <main className="w-full h-full">
            <Navbar setExpand={setExpand} classes={resize===true?"": "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"}  />
            <section className={`${expand === true ? 'w-3/4' : 'w-full lg:w-[94.6%]'} absolute right-0 top-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700`}>
                <Carousel classes={resize===true? "w-11/12 h-[80vh] md:h-[90vh] rounded-[2rem] m-10": "w-full"} />
                <section className="p-7"></section>
                <section className="p-7"></section>
                <section className="p-7"></section>
                <section className="p-7"></section>
                <section className="p-7"></section>
            </section>
        </main>
    )
}
