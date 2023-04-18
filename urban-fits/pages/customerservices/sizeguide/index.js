import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// Default theme
import CutomerServices from '../index'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '@/public/card imgs/card img6.jpg'
import img2 from '@/public/card imgs/card img5.jpg'
import img3 from '@/public/card imgs/card img12.jpg'

const GuideCard = (props) => {
    return <Link href={props.href} className='group w-[200px]'>
        <div className='w-full h-[300px] overflow-hidden'>
            <Image src={props.img} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700' />
        </div>
        <h4 className="mt-4 font_gotham_medium text-sm tracking-wide group-hover:tracking-expand transition-all duration-700">{props.title}</h4>
    </Link>
}

export default function SizeGuide() {
    const onPGMounted = () => {
        let pagination = document.querySelector('.splide__pagination')
        pagination.style.width = `calc(${3 * 0.9 * 2}rem + ${3 * 2}px)`
        let pageItems = document.querySelectorAll('.splide__pagination__page')
        pageItems.forEach((item) => {
            item.style.width = '2px'
            item.style.height = '10px'
            item.style.borderRadius = '0'
            item.style.background = 'gray'
            item.style.margin = '0.9rem'
            item.style.transition = 'all 0.4s'
        })
    }
    return (
        <CutomerServices>
            {/* To be displayed on the mobile screens */}
            <Splide onPaginationMounted={onPGMounted} className="hidden w-screen h-screen relative transition-all duration-1000" hasTrack={false}
                options={{
                    type: 'fade',
                    rewind: true,
                    fixedWidth: '100vw',
                    // fixedHeight: '100vh',
                    speed: 900,
                    gap: '0.5rem',
                    arrows: false,
                    autoplay: true,
                    padding: '0',
                    waitForTransition: true,
                    interval: 3200,
                    drag: false,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                }}>
                <SplideTrack className='w-full h-full transition-all duration-1000 ease-linear' >
                    <SplideSlide key={1} className="w-full h-full p-10">
                        <div>
                        <GuideCard href='/customerservices/sizeguide/women' img={img1} title='WOMEN' />
                        </div>
                    </SplideSlide>
                    <SplideSlide key={2} className="w-full h-full p-10">
                        <div>
                        <GuideCard href='/customerservices/sizeguide/men' img={img2} title='MEN' />
                        </div>
                    </SplideSlide>
                    <SplideSlide key={3} className="w-full h-full p-10">
                        <div>
                        <GuideCard href='/customerservices/sizeguide/kids' img={img3} title='KIDS' />
                        </div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
            {/* To be displayed on the desktop screens */}
            <div className="flex flex-col md:flex-row items-center md:justify-start gap-5">
                <GuideCard href='/customerservices/sizeguide/women' img={img1} title='WOMEN' />
                <GuideCard href='/customerservices/sizeguide/men' img={img2} title='MEN' />
                <GuideCard href='/customerservices/sizeguide/kids' img={img3} title='KIDS' />
            </div>
        </CutomerServices>
    )
}
