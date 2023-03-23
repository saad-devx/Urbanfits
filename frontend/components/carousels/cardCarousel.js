import React, { useState, useEffect } from 'react'
import LinkBtn from '../buttons/link_btn';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
        media.matches ? setIsMobile(1) : setIsMobile(3)
    }, [])

    return (
        <Splide className="relative w-full h-full" hasTrack={false}
            options={{
                autoplay: true,
                speed: 500,
                interval: 1700,
                type: 'loop',
                drag: true,
                perMove: 1,
                perPage: isMobile,
                // breakpoints: {
                //     640: {
                //       perPage: 1,
                
                //     },
                //     1024: {
                //       perPage: 3,
                     
                //     },
                // },
                pauseOnHover: true,
                pauseOnFocus: false,
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
                    return <SplideSlide key={index} className={`relative md:p-3`}>
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
            <div className="splide__arrows absolute lg:hidden z-10 top-1/2 left-2">
                <button className="splide__arrow--prev active:bg-gray-500 justify-center items-center w-8 h-8 border border-yellow-600 rounded-full bg-white rotate-180 transition-all duration-500" >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4689 22.4366C15.9575 22.1485 16.1328 21.6349 15.8823 21.2215C15.8197 21.115 14.8551 20.1066 13.7464 18.9854L11.7295 16.9372L17.2979 16.9247C23.3798 16.9059 23.0729 16.9247 23.3548 16.5426C23.455 16.411 23.4863 16.2732 23.4863 15.9976C23.4863 15.722 23.455 15.5842 23.3548 15.4527C23.0729 15.0706 23.3798 15.0894 17.2979 15.0706L11.7295 15.0581L13.7464 13.0099C14.8551 11.8887 15.8197 10.8803 15.8823 10.7738C16.1141 10.3917 15.995 9.94699 15.5816 9.62755C15.2747 9.38953 14.924 9.38953 14.5857 9.62128C14.4542 9.71524 13.0574 11.0807 11.479 12.6591C9.14265 15.008 8.61024 15.5717 8.56014 15.7659C8.42234 16.2732 8.39102 16.2357 11.479 19.3361C13.0574 20.9146 14.4417 22.2738 14.5669 22.3615C14.8926 22.587 15.1682 22.612 15.4689 22.4366Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div className="splide__arrows absolute z-10 top-1/2 right-2 lg:left-3/4">
                <button className="splide__arrow--next active:bg-gray-500 flex justify-center items-center w-8 h-8 border border-yellow-600 rounded-full bg-white transition-all duration-500" >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.531 9.56336C16.0425 9.85149 15.8671 10.3651 16.1176 10.7785C16.1803 10.885 17.1449 11.8934 18.2535 13.0146L20.2704 15.0628L14.7021 15.0753C8.62009 15.0941 8.92701 15.0753 8.64515 15.4574C8.54493 15.589 8.51361 15.7268 8.51361 16.0024C8.51361 16.278 8.54493 16.4158 8.64515 16.5473C8.92701 16.9294 8.62009 16.9106 14.7021 16.9294L20.2704 16.9419L18.2535 18.9901C17.1449 20.1113 16.1803 21.1197 16.1176 21.2262C15.8859 21.6083 16.0049 22.053 16.4183 22.3725C16.7252 22.6105 17.076 22.6105 17.4142 22.3787C17.5457 22.2848 18.9425 20.9193 20.521 19.3409C22.8573 16.992 23.3897 16.4283 23.4398 16.2341C23.5776 15.7268 23.6089 15.7643 20.521 12.6639C18.9425 11.0854 17.5583 9.72622 17.433 9.63853C17.1073 9.41304 16.8317 9.38798 16.531 9.56336Z" fill="black" />
                    </svg>
                </button>
            </div>
        </Splide>
    )
}
