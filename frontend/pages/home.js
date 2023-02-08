import React, { useEffect, useState } from 'react'
import Carousel from '@/components/carousel';
import Navbar from '../components/navbar'
import Footer from '@/components/footer';
import CardCarousel from '@/components/cardCarousel';

export default function Home() {
    // state for navbar expansion
    const [expand, setExpand] = useState(false)

    const [resize, setSize] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let position = document.documentElement.scrollTop
            if (position >> 0) setSize(true)
            else { }
        })
    })


    return (
        <main className="w-full h-full">
            <Navbar setExpand={setExpand} classes={resize === true ? "" : "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"} />
            <section className={`${expand === true ? 'w-3/4' : 'w-full lg:w-[94.6%]'} bg-gray-100 absolute right-0 top-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700`}>
                <Carousel classes={resize === true ? "w-11/12 h-[80vh] md:h-[90vh] rounded-[2rem] m-10" : "w-full"} />
                {/* Auto scroll Carousel  */}
                <section className="relative w-full h-screen p-3 md:p-5 md:pr-0 flex flex-col md:flex-row font_futuraLT">
                    <div className="w-full md:w-[35%] md:h-full p-5 flex flex-col justify-center items-start">
                        <h2 className="text-2xl md:text-5xl word-wrap leading-tight">Newest Gear to Work</h2>
                        <h4 className="font_futuraLTlite text-lg">Innovation and Comfort for Women</h4>
                    </div>
                    <div className="w-full md:w-[65%] h-full">
                        <CardCarousel />
                    </div>
                    <div className="absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </section>
                <Footer />
            </section>
        </main>
    )
}
