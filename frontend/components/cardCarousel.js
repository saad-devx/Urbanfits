import React, { useState, useEffect } from 'react'
import LinkBtn from './link_btn';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';


// images imports
import Image from 'next/image'
import image1 from '../public/card imgs/card img1.png'
import image2 from '../public/card imgs/card img2.png'
import image3 from '../public/card imgs/card img3.png'

const CardSlide = (props) => {
    return (

        <SplideSlide className={` relative  md:p-5`}>
            <div className='relative w-full h-full rounded-3xl font_futuraLT overflow-hidden' >
                <Image src={props.img} className='w-full h-full object-cover' alt='' ></Image>
                <div className="absolute w-full bottom-0 left-0 p-7 bg-gradient-to-t from-white to-transparent flex flex-col items-start text-black text-5xl">
                    <h1 className="text-2xl font-semibold">Jackets and Coats</h1>
                    <p className="mt-1 mb-4 text-lg">New In Women Wear</p>
                    <LinkBtn href="/" my="my-0" bg="bg-black/70" classes="w-1/2 text-xs md:text-base">Discover</LinkBtn>
                </div>
            </div>
        </SplideSlide>
    )
}

export default function CardCarousel() {
    const [isMobile, setIsMobile] = useState(1)
    useEffect(()=>{
        const media = window.matchMedia('(max-width: 767px)')
        media.matches ? setIsMobile(1) : setIsMobile(2)
    })

    return (
        <>
            <Splide className='w-full h-full' hasTrack={false}
                options={{
                    type: 'loop',
                    drag: true,
                    perMove: 1,
                    perPage: isMobile,
                    gap: "1rem",
                    arrows: false,
                    pauseOnHover: true,
                    pagination: false,
                    focus: 'center',
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        speed: 1,
                    },
                }} extensions={{ AutoScroll }}>

                <SplideTrack className='w-full h-full' >
                    <CardSlide img={image1} />
                    <CardSlide img={image2} />
                    <CardSlide img={image3} />
                </SplideTrack>
            </Splide>

        </>
    )
}
