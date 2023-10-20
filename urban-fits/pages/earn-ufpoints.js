import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useWallet from '@/hooks/useWallet'
import Button from '@/components/buttons/simple_btn'

export default function EarnUfPoints() {
    const { points, formatPrice, walletLoading } = useWallet()

    return <>
        <main className="bg-gray-100 w-full h-screen pt-10 lg:pt-16 px-5 md:px-7 lg:px-8 xl:px-10 font_urbanist">
            <section className="w-full flex gap-x-4">
                <nav className="bg-white w-1/2 min-h-[20rem] px-4 py-4 mid:px-6 mid:py-4 lg:p-6 lg:px-8 rounded-lg">
                    <div className="bg-gray-100 w-full flex justify-center py-1 mid:py-2 text-sm lg:text-base font_urbanist_medium rounded-lg">Every 100 UF-Points are equal to {formatPrice(process.env.UF_POINT_RATE * 100)}</div>
                    <div className="w-full my-5">
                        <span className="px-4 py-2 border">My UF-Points: {points}</span>
                    </div>
                    <div className="w-full flex justify-between items-center"></div>
                </nav>
                <nav className="bg-white w-1/2 p-4 flex rounded-lg gap-x-3">
                    <div className="w-1/2 h-full flex justify-center items-center gap-y-4">
                        <div className="w-full aspect-square">
                            <svg className='w-full h-full' width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id='path1' d="M183.372 11.4487C167.065 4.08882 149.026 0 129.977 0C121.029 0 112.322 0.913972 103.904 2.5976L129.977 129.976L183.372 11.4487Z" fill="url(#paint0_linear_4314_317)" />
                                <path id='path2' d="M103.901 2.59766C76.6257 8.17769 52.4777 22.2721 34.2944 41.9946L129.973 129.976L103.901 2.59766Z" fill="#FAFAFA" />
                                <path id='path3' d="M258.801 147.389C259.571 141.713 259.956 135.892 259.956 129.976C259.956 107.8 254.424 86.9708 244.611 68.6914L129.979 129.976L258.801 147.389Z" fill="url(#paint1_linear_4314_317)" />
                                <path id='path4' d="M34.2993 41.9961C16.2604 61.6224 4.18635 86.7807 0.867188 114.633L129.93 129.978L34.2993 41.9961Z" fill="url(#paint2_linear_4314_317)" />
                                <path id='path5' d="M244.611 68.6927C231.094 43.4863 209.543 23.2346 183.375 11.4492L129.979 129.977L244.611 68.6927Z" fill="#FAFAFA" />
                                <path id='path6' d="M74.7539 247.685C91.5421 255.574 110.254 260 130.025 260C138.251 260 146.284 259.23 154.077 257.787L130.025 130.023L74.7539 247.685Z" fill="#FAFAFA" />
                                <path id='path7' d="M129.979 129.977L224.263 219.45C242.639 200.112 255.097 175.098 258.801 147.342L129.979 129.977Z" fill="#FAFAFA" />
                                <path id='path8' d="M154.079 257.739C181.499 252.592 205.839 238.882 224.263 219.496L129.979 130.023L154.079 257.739Z" fill="url(#paint3_linear_4314_317)" />
                                <path id='path9' d="M0.913972 114.633C0.336726 119.684 0 124.783 0 129.978C0 152.875 5.91676 174.378 16.3072 193.042L129.976 129.978L0.913972 114.633Z" fill="#FAFAFA" />
                                <path id='path10' d="M16.3066 193.087C29.5352 216.851 49.9793 236.044 74.7046 247.685L129.976 130.023L16.3066 193.087Z" fill="url(#paint4_linear_4314_317)" />
                                <defs>
                                    <linearGradient id="paint0_linear_4314_317" x1="143.638" y1="0" x2="143.638" y2="129.976" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B3903E" />
                                        <stop offset="1" stop-color="#FAE892" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_4314_317" x1="194.968" y1="68.6914" x2="194.968" y2="147.389" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B3903E" />
                                        <stop offset="1" stop-color="#FAE892" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_4314_317" x1="65.3984" y1="41.9961" x2="65.3984" y2="129.978" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B3903E" />
                                        <stop offset="1" stop-color="#FAE892" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_4314_317" x1="177.121" y1="130.023" x2="177.121" y2="257.739" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B3903E" />
                                        <stop offset="1" stop-color="#FAE892" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_4314_317" x1="73.1412" y1="130.023" x2="73.1412" y2="247.685" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B3903E" />
                                        <stop offset="1" stop-color="#FAE892" />
                                    </linearGradient>
                                </defs>
                                <text fill='black' fontSize="12px" textAnchor='middle'>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path1' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path2' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path3' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path4' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path5' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path6' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path7' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path8' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path9' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                    <textPath className='font_urbanist_medium text-xs text-black -translate-y-2' href='#path10' textAnchor='middle' startOffset="40%">Try Again</textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <h2 className="font_urbanist_bold text-xl mb-2">Weekly Fortune Spinner</h2>
                        <ol className='text-[13px]'>
                            <li>1. Only available on URBAN FITS website <Link href="https://www.urbanfits.ae">https://www.urbanfits.ae</Link></li>
                            <li>2. 10 Points cost per spin</li>
                            <li>3. Up to 2 chances per day and 3 days in a week.</li>
                            <li>4. The coupons are only valid for 7 days.</li>
                            <li>5. Your UF-Points and vouchers will be automatically added yo your account wallet.</li>
                            <li>6. 1000 winning Points are only available for purchase over US $150.</li>
                        </ol>
                    </div>
                </nav>
            </section>
        </main>
    </>
}