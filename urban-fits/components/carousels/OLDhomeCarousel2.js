import React, { useState, useEffect, useRef } from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// images imports
import Image from 'next/image'
import image1 from '../../public/carousel2 imgs/img1.png'

export default function HomeCarousel2() {
  const [isMobile, setIsMobile] = useState(3)
  const slideData = [image1, image1, image1, image1, image1]
  useEffect(() => {
    const media = window.matchMedia('(max-width: 967px)')
    media.matches ? setIsMobile(3) : setIsMobile(5)
  }, [])

  const onmove = (splide, newIndex) => {
    const slides = splide.Components.Slides.get()
    slides.forEach((slide, index) => {
      const distance = Math.abs(index - newIndex) * 10
      const scale = Math.abs(1 - (distance / 70)).toFixed(2)
      // if (scale > 0.4 && scale < 0.5) return slide.slide.style.transform = `translateX(14vw) scale(${scale})`
      // if (scale > 0.5 && scale < 0.6) return slide.slide.style.transform = `translateX(8vw) scale(${scale})`
      // if (scale > 0.6 && scale < 0.78) return slide.slide.style.transform = `translateX(4vw) scale(${scale})`
      // if (scale > 1) return slide.slide.style.transform = `translateX(10vw) scale(${scale})`
      slide.slide.style.transform = `scale(${-scale})`
    });
  }

  // this function works in mobile
  const onmoveMob = (splide, newIndex) => {
    const slides = splide.Components.Slides.get()
    slides.forEach((slide, index) => {
      const distance = Math.abs(index - newIndex) * 10
      const scale = Math.abs(1 - (distance / 40)).toFixed(2)

      const s_width = screen.width
      let fraction_center = s_width / 3 * scale / 2
      let n_percent = (percent) => {
        return s_width / 100 * percent
      }
      if (scale < 0.6) return slide.slide.style.transform = `translateX(-${fraction_center + n_percent(7)}px) scale(${scale})`
      if (scale < 0.9) return slide.slide.style.transform = `translateX(-${fraction_center + n_percent(10)}px) scale(${scale})`
      if (scale == 1) return slide.slide.style.transform = `translateX(-${fraction_center + n_percent(7)}px) scale(${scale})`
    });
  }

  const [loopIndex, setLoopIndex] = useState(0)
  const handleMove = (splide) => {
    const slides = document.querySelectorAll('.c2_slide')
    console.log(slides)

    // slides.forEach((slide, i) => {
    //   let width = ((-i + slides.length) + 1) / 5 * 100
    //   console.log(width)
    //   return slide.style.width = `${width}%`
    // })
  }

  const onPGMounted = () => {
    let carouselWidth = document.querySelector('.homeCarousel2').offsetWidth
    let pagination = document.querySelector('.splide__pagination')
    if (window.matchMedia('(max-width: 967px)').matches) {
      pagination.style.left = `0rem`
    }
    else {
      pagination.style.left = `calc(${carouselWidth}px - 100vw)`
    }
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
    <>
      <Splide
        //  onMove={window.matchMedia('(max-width: 967px)').matches?onmoveMob:onmove}
        onMove={handleMove}
        onPaginationMounted={onPGMounted}
        className="homeCarousel2 relative w-full h-full" hasTrack={false}
        options={{
          // fixedWidth: '13vw',
          type: 'slide',
          autoplay: true,
          speed: 500,
          interval: 2200,
          rewind: true,
          drag: false,
          arrows: false,
          perMove: 1,
          direction: 'rtl',
          perPage: 5,
          pauseOnHover: true,
          pauseOnFocus: false,
          focus: 'right'
        }}
      >
        <SplideTrack className='lg:translate-x-[4vw]- w-full h-full flex justify-center items-center'>
          {slideData.map((img, index) => {
            return <SplideSlide id={`c2_slide`} key={index} className={`group relative md:p-3 transition-all duration-500`}>
              <div className="c2_slide w-full h-full flex justify-center items-center border border-green-700">
                <Image src={img} width={152} height={600} className='w-full object-contain object-center' alt="Urban images" />
              </div>
            </SplideSlide>
          })}
        </SplideTrack>

        <h2 className="lg:hidden absolute left-5 bottom-20 font_gotham_medium tracking-widest text-xl md:text-3xl lg:text-5xl word-wrap leading-tight">URBAN<br />NEW ARRIVAL</h2>
      </Splide>
    </>
  )
}
