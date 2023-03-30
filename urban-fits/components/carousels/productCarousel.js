import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ProductCarousel(props) {
  const [images, setImages] = useState([])
  useEffect(() => {
    setImages(props.img_array)
  }, [props.img_array])

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    slider1.current.splide.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <>
      <div className="relative productCarousel">
        <Splide className='w-full h-60vh lg:h-80vh overflow-hidden border-2 border-white bg-white rounded-lg lg:rounded-b-none' ref={slider1} options={{
          type: 'fade',
          focus: "center",
          rewind: true,
          gap: "0.5rem",
          cover: true,
          waitForTransition: true,
          pagination: false,
          speed: 500,
          arrows: true,
        }} >
          {images.map((img) => {
            return <SplideSlide className='w-full h-60vh lg:h-80vh' >
              <Image width={1400} height={1900} className='w' src={img.url} alt="Urban images" />
            </SplideSlide>
          })}
        </Splide>

        <div className="absolute right-0 top-0">

          <Splide className='bg-slate-600 rounded-b-lg' ref={slider2} options={{
            fixedWidth : 100,
            fixedHeight: 60,
            gap        : 10,
            rewind     : true,
            pagination : false,
            arrows: false,
            speed: 500,
            type: "loop",
            direction: 'ttb',
            width: '180px',
            height: '400px',
            perPage: 3,
            pagination: false,
            isNavigation: true,
            // breakpoints: {
            //   600: {
            //     fixedWidth: 60,
            //     fixedHeight: 44,
            //   },
            // },
          }} >
            {images.map((img) => {
              return <SplideSlide className='w-full h-60vh lg:h-80vh' >
                <Image width={1400} height={1900} className='w-full h-full object-cover object-center' src={img.url} alt="Urban images" />
              </SplideSlide>
            })}
          </Splide>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { img_array: context.img_array } }
}