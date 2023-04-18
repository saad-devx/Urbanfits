import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ProductCarousel(props) {
  const [images, setImages] = useState([])
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    slider1.current.splide.sync(slider2.current.splide);
  }, [])
  useEffect(() => {
    setImages(props.img_array)
  }, [props.img_array])

  return (
    <>
      <div className="layout_height flex justify-center items-center gap-4">
        <Splide className='w-[85%] h-fulloverflow-hidden bg-white' ref={slider1} options={{
          autoplay: true,
          type: 'fade',
          speed: 2000,
          rewind: true,
          pagination: false,
          arrows: false,
        }} >
          {images.map((img) => {
            return (
              <SplideSlide className='w-full layout_height flex justify-center items-center' >
                <Image width={500} height={720} className='w-full h-full object-cover object-center' src={img.url} alt="Urban images" />
              </SplideSlide>
            )
          })}
        </Splide>

        <div className="w-[15%] h-[90%] flex justify-center items-center">
          <Splide id="thumbnail-carousel" className='w-full h-full flex flex-col items-center' ref={slider2} options={{
            autoplay: true,
            interval: 3000,
            fixedWidth: '100%',
            fixedHeight: '24.2%',
            height: 'calc(100vh - 50px)',
            rewind: true,
            pagination: false,
            isNavigation: true,
            pauseOnHover: true,
            gap: '0.5rem',
            direction: 'ttb',
            arrows: false,
            breakpoints: {
              600: {
                fixedWidth: 60,
                fixedHeight: 44,
              }
            },
          }} >
            {images.map((img) => {
              return (
                <SplideSlide className='w-full' >
                  <Image width={200} height={300} className='w-full h-full object-cover object-center' src={img.url} alt="Urban images" />
                </SplideSlide>)
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