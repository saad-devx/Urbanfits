import React, { useState, useEffect } from 'react'
import LinkBtn from '../buttons/link_btn';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';
// images imports
import Image from 'next/image'
import image1 from '../../public/card imgs/card img5.jpg'
import image2 from '../../public/card imgs/card img2.jpg'
import image3 from '../../public/card imgs/card img3.jpg'

export default function CardCarousel() {
    const [isMobile, setIsMobile] = useState(1)
    useEffect(() => {
        const media = window.matchMedia('(max-width: 967px)')
        media.matches ? setIsMobile(1) : setIsMobile(2)
    }, [])

    return (
        <Splide className="w-full h-11/12 cursor-grab" hasTrack={false}
            options={{
                autoplay: true,
                speed: 400,
                interval: 1700,
                type: 'loop',
                drag: true,
                perMove: 1,
                perPage: isMobile,
                gap: "1rem",
                arrows: false,
                pauseOnHover: true,
                pagination: false,
                focus: 'center',
                // autoScroll: {
                //     pauseOnHover: true,
                //     pauseOnFocus: false,
                //     speed: 1,
                // },
                // autoScroll: false
            }}
        // extensions={{ AutoScroll }}
        >
            <SplideTrack className='w-full h-full' >
                {[image1, image2, image3].map((img, index) => {
                    return <SplideSlide key={index} className={` relative  md:p-5`}>
                        <div className='relative w-full h-full rounded-3xl font_futuraLT overflow-hidden' >
                            <Image src={img} className='w-full h-full object-cover' alt="Urban images" />
                            <div className="absolute w-full bottom-0 left-0 p-7 bg-gradient-to-t from-white to-transparent flex flex-col items-start text-black text-5xl">
                                <h1 className="text-3xl">Jackets and Coats</h1>
                                <p className="mt-1 mb-4 text-lg">New In Women Wear</p>
                                <LinkBtn href="/" my="my-0" bg="bg-black/70" classes="w-1/2 text-xs md:text-base">Discover</LinkBtn>
                            </div>
                        </div>
                    </SplideSlide>
                })}
            </SplideTrack>
        </Splide>
    )
}
