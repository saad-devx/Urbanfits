import React, { useEffect } from "react";

// images imports
import Image from "next/image";
import image1 from "@/public/carousel2 imgs/img1.png";
export default function HomeCarousel2() {
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `
    $('.hero-slider').slick({
      dots: true,
      arrows:false,
      infinite: true,
      rtl: true,
      speed: 900,
      centerMode: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendDots: $('.slider-pagi-wrapper'),
      dotsClass: 'hero-slide-pagi',
     
      responsive: [
    
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
        $('.hero-slide-pagi').css({
            'display': 'flex',
            'align-items': 'flex-end',
        });
        $('.hero-slide-pagi li').css({
            'padding': '0px 5px',
            'margin': '0px 4px',
        });
    `;
        document.body.appendChild(script);
    }, []);
    return (
        <>
            <div className="w-full layout_height bg-metal-gold px-14">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="md:w-1/3 w-2/5 px-4">
                        <div className="content-wrapper md:mb-12 mb-6">
                            <h2 className="lg:text-4xl text-2xl font_gotham_medium mb-5 tracking-widest uppercase">
                                <span className="block">Urban</span> New Arrival
                            </h2>
                        </div>
                        {/*.content-wrapper*/}
                        <div className="slider-pagi-wrapper"></div>
                    </div>
                    {/*.col-grid*/}
                    <div className="md:w-2/3 w-3/5 px-4" dir="rtl">
                        <div className="hero-slider">
                            {[image1, image1, image1, image1, image1].map((img) => {

                                return <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                    <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                        <div className="hero-slider-img-inner relative">
                                            <Image width={500} height={900} src={img} alt="Carousel slide" />
                                            <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                            {/*.info-dot-one*/}
                                            <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                            {/*.info-dot-two*/}
                                            <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                            {/*.info-dot-three*/}
                                            <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                            {/*.info-dot-four*/}
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                            {/*.slider-item*/}
                        </div>
                        {/*.hero-slider*/}
                    </div>
                    {/*.col-grid*/}
                </div>
                {/*.row*/}
            </div>
            {/*.container*/}
        </>
    );
}
