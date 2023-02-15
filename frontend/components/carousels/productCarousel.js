import React, { useEffect, useRef } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// imports for images
import Image from 'next/image'
import image1 from '../../public/card imgs/card img5.jpg'
import image2 from '../../public/card imgs/card img3.jpg'
import image3 from '../../public/carousel imgs/carousel img6.jpg'

//Carousel Images component
const CarouselSlide = (props) => {
  return (
    <SplideSlide className='w-full h-[60vh] lg:h-[80vh]' >
      <Image className='w-full h-full object-contain object-center' src={props.img} alt="" />
    </SplideSlide>
  )
}

export default function ProductCarousel() {

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    slider1.current.splide.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <>
      <div className="productCarousel">

        <Splide className='w-full h-[60vh] lg:h-[80vh] overflow-hidden border-2 border-white bg-white rounded-lg lg:rounded-b-none' ref={slider1} options={{
          type: 'loop',
          rewind: true,
          gap: "0.5rem",
          waitForTransition: true,
          pagination: false,
          speed: 700,
          arrows: true,
        }} >

          <CarouselSlide img={image1} />
          <CarouselSlide img={image2} />
          <CarouselSlide img={image3} />
          <CarouselSlide img={image1} />
          <CarouselSlide img={image1} />
          <CarouselSlide img={image2} />
          <CarouselSlide img={image3} />
          <CarouselSlide img={image1} />

        </Splide>

        <Splide className='hidden md:flex justify-center bg-white rounded-b-lg' ref={slider2} options={{
          fixedWidth: 150,
          fixedHeight: 100,
          arrows: false,
          speed: 700,
          type: "loop",
          gap: 3,
          rewind: true,
          pagination: false,
          isNavigation: true,
          breakpoints: {
            600: {
              fixedWidth: 60,
              fixedHeight: 44,
            },
          },
        }} >

          <CarouselSlide img={image1} />
          <CarouselSlide img={image2} />
          <CarouselSlide img={image3} />
          <CarouselSlide img={image1} />
          <CarouselSlide img={image1} />
          <CarouselSlide img={image2} />
          <CarouselSlide img={image3} />
          <CarouselSlide img={image1} />

        </Splide>
      </div>
    </>
  );
}