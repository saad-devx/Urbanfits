import React, { useState, useEffect } from 'react'
import CatalogueCarousel from '@/components/carousels/catalogueCarousel';
import Navbar from '../../components/navbar';
import Shoppingcard from '@/components/cards/shoppingcard';
import Footer from '../../components/footer'
import MoreToExplore from '@/components/more_to_explore';
import ListingShopSection from '@/components/listingShop_section';

// imports for images
import image1 from '../../public/card imgs/card img13.png'
import image2 from '../../public/card imgs/card img14.png'
import image3 from '../../public/card imgs/card img15.png'
import image4 from '../../public/card imgs/card img16.png'

export default function productlisting(props) {
    const { category } = props
    const [hideNav, setHideNav] = useState(true);

    useEffect(() => {
        const setSizefunc = () => {
            let position = window.pageYOffset;
            if (position >> 2) {
                setHideNav(false)
            }
            else setHideNav(true)
        }
        window.addEventListener('scroll', setSizefunc);
    }, []);

    return (
        <>
            <Navbar hideNav={hideNav} />
            <main className="w-full pb-20 bg-white flex justify-center font_gotham overflow-hidden">
                <section className='' >
                    <CatalogueCarousel />
                    <div className='w-full p-5 md:p-7 lg:p-14 xl:p-16 2xl:p-24 h-full font_gotham text-left' >
                        <div className="w-full my-4 md:my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-8 2xl:gap-14">
                            {/* <div className="w-full flex my-4 items-center">
                                <span className="text-xl cursor-pointer">Filters <i className="material-symbols-outlined translate-y-1">sort</i> </span>
                            </div> */}
                            {[{ img: image1 }, { img: image2 }, { img: image3 }, { img: image4 }, { img: image1 }, { img: image2 }, { img: image3 }, { img: image4 }, { img: image1 }, { img: image2 }, { img: image3 }, { img: image4 }].map((productData, index) => {
                                const product = {
                                    name: 'Floral Print Regular Fit V-Neck Shirt',
                                    price: '76.99',
                                    variants: [1, 2, 3, 4]
                                }
                                if (index == 4) return <>
                                    <ListingShopSection classes='my-12 col-span-2 md:col-span-3 lg:col-span-4' />
                                    <Shoppingcard margin='0' product={product} img={productData.img} />
                                </>
                                return <Shoppingcard margin='0' product={product} img={productData.img} />
                            })}
                        </div>
                        <button className="py-10 lg:mt-20 group flex items-center w-auto mx-auto font_gotham_bold text-xs md:text-sm tracking-expand md:tracking-[1.5em] md:hover:tracking-[1em] transition-all duration-300">
                            <span className="w-16 group-hover:w-28 h-[2px] mx-1 bg-black transition-all"></span>
                            <span className="w-5 group-hover:w-0 h-[2px] mx-1 bg-black transition-all"></span>
                            &nbsp;MORE
                            <span className="w-5 group-hover:w-0 h-[2px] mx-1 bg-black transition-all"></span>
                            <span className="w-16 group-hover:w-28 h-[2px] mx-1 bg-black transition-all"></span>
                        </button>
                        <MoreToExplore />
                    </div>
                </section>
            </main>
            <ListingShopSection whiteTheme />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = await context.query
    // let response = await (await fetch(`${process.env.HOST}/api/products/getsingleproduct?id=${p_id}`)).json()
    return { props: { category } }
}