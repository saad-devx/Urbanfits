import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
//Images from S3 Bucket
const colImg1 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-1.jpg"
const colImg2 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-2.jpg"
const colImg3 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-3.jpg"
const colImg4 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-4.jpg"
const colImg5 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-5.jpg"
const colImg6 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-6.jpg"
const colImg7 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-7.jpg"
const colImg8 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-8.jpg"
const colImg9 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-9.jpg"
const sec2Img1 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-10.jpg"
const sec2Img2 = "https://urban-fits.s3.eu-north-1.amazonaws.com/aobut-us/aobut-us-img-11.jpg"

const About = () => {

    const brand = useRef()
    const brand_subhead = useRef()
    const wraperRef = useRef()
    const imgCols = useRef()
    const Col1 = useRef()
    const Col2 = useRef()
    const Col3 = useRef()

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.to(wraperRef.current, {
                x: "-120vw",
                scrollTrigger: {
                    trigger: wraperRef.current,
                    start: "top top",
                    pin: true,
                    // markers: true,
                    scrub: 2
                }
            })
            gsap.to(brand.current, {
                xPercent: 20,
                scrollTrigger: {
                    trigger: brand.current,
                    start: "center center",
                    // markers: true,
                    scrub: 1.5
                }
            })
            gsap.to(brand_subhead.current, {
                yPercent: -25,
                scrollTrigger: {
                    trigger: brand.current,
                    start: "center center",
                    // markers: true,
                    scrub: 1
                }
            })
            gsap.to(Col1.current, {
                y: "50vh",
                scrollTrigger: {
                    trigger: Col1.current,
                    start: "bottom bottom",
                    // markers: true,
                    scrub: 1.5
                }
            })
            gsap.to(Col2.current, {
                y: "-50vh",
                scrollTrigger: {
                    trigger: Col1.current,
                    start: "bottom bottom",
                    // markers: true,
                    scrub: 1.5
                }
            })
            gsap.to(Col3.current, {
                y: "50vh",
                scrollTrigger: {
                    trigger: Col1.current,
                    start: "bottom bottom",
                    // markers: true,
                    scrub: 1.5
                }
            })

        }, wraperRef.current)
        return () => { ctx.revert() }
    }, [])
    return (
        <>
            <main className='overflow-hidden'>

                <section ref={wraperRef} className='section_1 w-[300vw] h-screen flex justify-start overflow-y-hidden overflow-hidden'>

                    <section className="brand w-[58vw] h-screen flex justify-center items-center">
                        <div ref={brand} className="flex flex-col justify-end items-end">
                            <h1 className="text-[134px] leading-[1] text-right font_copper_gothic tracking-wide">URBAN <br /> FITS</h1>
                            <h3 ref={brand_subhead} className="text-[34px] font-medium font_cinzel text-yellow-700">FASHION BRAND</h3>
                        </div>
                    </section>

                    <section ref={imgCols} className="w-[62vw] h-screen flex gap-x-3">
                        <div key={1} ref={Col1} className="w-1/3 h-[150vh] relative top-[-50vh] border-x-[16px] bg-black border-black flex flex-col">
                            <div className="w-full h-[50vh]"> <Image alt="col Image 1" src={colImg1} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                            <div className="w-full h-[50vh]"> <Image alt="col Image 2" src={colImg2} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                            <div className="w-full h-[50vh]"> <Image alt="col Image 3" src={colImg3} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                        </div>

                        <div key={2} ref={Col2} className="w-1/3 h-[150vh] border-x-[16px] bg-black border-black flex flex-col">
                            <div className="w-full h-[50vh]"> <Image alt="col Image 1" src={colImg4} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                            <div className="w-full h-[50vh]"> <Image alt="col Image 2" src={colImg5} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                            <div className="w-full h-[50vh]"> <Image alt="col Image 3" src={colImg6} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                        </div>

                        <div key={3} ref={Col3} className="w-1/3 h-[150vh] relative top-[-50vh] border-x-[16px] bg-black border-black flex flex-col">
                            <div className="w-full h-[50vh]"> <Image alt="col Image 1" src={colImg7} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                            <div className="w-full h-[50vh]"> <Image alt="col Image 2" src={colImg9} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                            <div className="w-full h-[50vh]"> <Image alt="col Image 3" src={colImg8} width={2000} height={3000} className='w-full h-full object-cover border-t-[2vh] border-black' /> </div>
                        </div>
                    </section>

                    <section className="w-screen h-screen flex">
                        <div className="w-[7%] h-full flex justify-center items-center border-x-2 border-black">
                            <h2 className="font_copper_gothic text-5xl 2xl:text-7xl -rotate-90 whitespace-nowrap">Urban Fits</h2>
                        </div>
                        <div className="w-[53%] h-full px-2">
                            <h1 className="w-full h-[17%] pb-3 flex items-end font_montserrat font-bold text-6xl">ENCHANTÉ COUTURE</h1>
                            <div className="w-full h-3/5">
                                <Image alt='about-bg' width={1800} height={1600} src={sec2Img1} className='w-full h-full object-cover' />
                            </div>
                            <div className="w-full mt-3 flex justify-between items-start font_montserrat">
                                <h2 className="text-6xl font-semibold">MEN & WOMEN</h2>
                                <span className="text-2xl">/23</span>
                            </div>
                            <p className="font_montserrat text-3xl mt-3">Join The Fashion Revolution With Our Brand</p>
                        </div>
                        <div className="w-2/5 h-full bg-black overflow-hidden">
                            <h2 className='h-[17%] pb-3 animate_loop translate-x-full flex flex-col justify-end font_montserrat font-bold text-6xl text-white whitespace-nowrap'>COLLECTION OF 2023</h2>
                            <div className="w-full h-[83%]">
                                <Image alt='about-bg' width={1400} height={1800} src={sec2Img2} className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </section>
                </section>
                {/* <section className="w-full h-screen bg-black"></section> */}
            </main>
        </>
    );
};

export default About;