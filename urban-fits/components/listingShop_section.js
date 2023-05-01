import React from 'react'
import Image from 'next/image'
import blackThemeBg from '@/public/listing banners/listingbg1.jpg'
import whiteThemeBg from '@/public/listing banners/listingbg2.jpg'

export default function ListingShopSection(props) {
    if (window.matchMedia('(min-width: 768px)').matches) return (
        <div className={`w-full h-60 lg:h-[430px] hidden lg:flex relative justify-between ${props.classes}`}>
            <div className={`lg:w-3/5 h-full z-10 ${props.whiteTheme ? 'bglisting_white' : 'bglisting_black'}`}>
                <div className="absolute left-[9%] top-1/2 -translate-y-1/2 flex flex-col">
                    <svg className='absolute top-0 left-[9%]' width="582" height="102" viewBox="0 0 582 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.978516 1H580.621V101.5" stroke={props.whiteTheme ? 'black' : 'white'} stroke-width="2" />
                    </svg>
                    <h2 className={`font_gotham_black lg:text-[40px] my-5 ${props.whiteTheme ? 'text-black' : 'text-white'}`}>SHOPPING WITHOUT LIMITS.</h2>
                    <p className={`mb-8 font_gotham text-[10px] lg:text-[23px] ${props.whiteTheme ? 'text-black' : 'text-white'}`}>You can choose the best option for you, and it does <br /> not matter whether you are in UAE or USA. We will <br /> deliver your purchase anywhere!</p>
                    <button className={`w-[168px] py-3 border-2 ${props.whiteTheme ? 'border-black text-black' : 'border-white text-white'} font_gotham_black text-lg`}>SHOP NOW</button>
                </div>
            </div>
            <div className="absolute top-0 right-0 lg:w-3/5 h-full">
                <Image width={1000} height={450} src={props.whiteTheme? whiteThemeBg: blackThemeBg} alt='shopping section cover image' className='h-full float-right object-cover object-right' />
            </div>
        </div>
    )

    // For Mobile and screens
    if (window.matchMedia('(max-width: 768px)').matches) return (
        <div className={`w-screen h-60 flex relative ${props.whiteTheme ? null : '-left-5'} justify-between ${props.classes}`}>
            <div className={`w-3/4 h-full z-10 ${props.whiteTheme ? 'bglisting_white' : 'bglisting_black'}`}>
                <div className="absolute left-[9%] top-1/2 -translate-y-1/2 max-w-[60%]">
                    <h2 className={`inline-block font_gotham_black text-xl pt-3 pr-3 pb-1 mb-2 border-2 border-transparent ${props.whiteTheme ? 'text-black border-t-black border-r-black' : 'text-white border-t-white border-r-white'}`}>SHOPPING <br /> WITHOUT LIMITS.</h2>
                    <p className={`mb-4 font_gotham text-[10px] ${props.whiteTheme ? 'text-black' : 'text-white'}`}>You can choose the best option for you, and it does not matter whether you are in UAE or USA. We will deliver your purchase anywhere!</p>
                    <button className={`w-32 py-2.5 border-2 ${props.whiteTheme ? 'border-black text-black' : 'border-white text-white'} font_gotham_medium text-xs tracking-wider`}>SHOP NOW</button>
                </div>
            </div>
            <div className="absolute top-0 right-0 h-full">
                <Image width={1000} height={450} src={props.whiteTheme? whiteThemeBg: blackThemeBg} alt='shopping section cover image' className='h-full float-right object-cover object-left' />
            </div>
        </div>
    )
}