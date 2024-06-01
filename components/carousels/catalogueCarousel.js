import { useEffect } from 'react';
import Link from 'next/link';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Logo from '@/public/logos/logo_black.svg';
import useCarousel from '@/hooks/useCarousel';

export default function CatalogueCarousel() {
    const { catalogueSlides, getCatalogueSlides } = useCarousel();
    const onPGMounted = () => {
        const slidesCount = catalogueSlides.length;
        let pagination = document.querySelector('.splide__pagination')
        if (window.matchMedia('(min-width: 1000px)').matches) pagination.style.left = `calc(25% - ((${slidesCount * 0.9 * 2}rem + ${slidesCount * 2}px) / 2))`
        else pagination.style.width = `calc(${slidesCount * 0.9 * 2}rem + ${slidesCount * 2}px)`
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

    useEffect(() => {
        getCatalogueSlides()
    }, [])

    return <Splide onPaginationMounted={onPGMounted} onPaginationUpdated={onPGMounted} className="catalogue_carousel w-full layout_height relative transition-all duration-1000" hasTrack={false}
        options={{
            type: 'fade',
            rewind: true,
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
        <SplideTrack className='w-full h-full transition-all duration-1000 ease-linear'>
            {catalogueSlides.map((slide, index) => <SplideSlide key={index} className="w-full h-full p-10">
                <section className="flex justify-center items-center w-full h-full bg-white">
                    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                        <Link href={slide.href || "#"} className='relative w-3/5 h-[45%] md:h-3/5 lg:w-[42%] lg:h-[68%] z-20 flex flex-col justify-center items-center' >
                            <span className="absolute -left-10 top-1/2 -rotate-90 translate-x-[-36%] lg:translate-x-[-40%] text-black font_urbanist_medium lg:text-xl tracking-widest uppercase">{slide.title}</span>
                            <Image src={process.env.NEXT_PUBLIC_BASE_IMG_URL + slide.image1} width={314} height={442} priority className='w-full object-cover' alt={slide.title} />
                        </Link>
                    </div>
                    <div className="absolute top-0 left-0 z-[5] opacity-40 lg:opacity-100 lg:static pointer-events-none lg:pointer-events-auto w-full lg:w-1/2 h-full">
                        <Image className='h-full object-cover' width={828} height={724} priority src={process.env.NEXT_PUBLIC_BASE_IMG_URL + slide.image2} alt={slide.title} />
                    </div>
                </section>
                <Link href={slide.href || "#"} className="hidden lg:block absolute z-20 left-1/2 bottom-10 -translate-x-1/2 font_urbanist_bold tracking-[1.5em] hover:tracking-[2.5em] transition-all duration-500 text-xs md:text-base" >BUY</Link>
            </SplideSlide>)}
        </SplideTrack>
        <Image src={Logo} alt='Urban Fits' className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px]" />
    </Splide>
}