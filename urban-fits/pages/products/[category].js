import React, { useState, useEffect } from 'react'
import { useCart } from "react-use-cart";
import SuggestionCard from '@/components/cards/suggestionPicCard';
import CatalogueCarousel from '@/components/carousels/catalogueCarousel';
import Navbar from '../../components/navbar';
import Button from '../../components/buttons/simple_btn';
import Shoppingcard from '@/components/cards/shoppingcard';
import Footer from '../../components/footer'
import LinkBtn from '@/components/buttons/link_btn';

// imports for images
import image1 from '../../public/card imgs/card img4.png'
import image2 from '../../public/card imgs/card img10.jpg'

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

    //Cart function
    const { addItem } = useCart()
    return (
        <>
            <Navbar hideNav={hideNav} />
            <main className="w-full pb-20 bg-white flex justify-center font_gotham overflow-hidden">
                <section className='' >
                    <CatalogueCarousel />
                    <div className='w-full p-5 md:p-7 lg:p-10 lg:pt-9 h-full font_gotham text-left pt-9' >
                        <h2 className="text-3xl md:text-4xl mb-4 capitalize">{category}</h2>
                        <div className="w-full my-6 md:my-10 flex flex-wrap overflow-hidden">
                            <div className="w-full flex my-4 items-center">
                                <span className="text-xl cursor-pointer">Filters <i className="material-symbols-outlined translate-y-1">sort</i> </span>
                            </div>
                            {/* shopping card from here */}
                            <Shoppingcard img={image2} />
                            <Shoppingcard img={image1} />
                            <Shoppingcard img={image1} />
                            <Shoppingcard img={image1} />
                            <Shoppingcard img={image1} />
                            <Shoppingcard img={image1} />
                            <Shoppingcard img={image1} />
                            <Shoppingcard img={image1} />
                        </div>
                        <Button classes="mx-auto w-36" >Load More</Button>
                        <div className="w-full mt-10">
                            <h3 className="text-2xl font_gotham_medium tracking-widest">MORE TO EXPLORE</h3>
                            <div className="w-full my-5 flex flex-wrap">
                                {["Ready to Wear", "Atelier Urban", "Essentials", "Bags", "Sneakers"].map(link => {
                                    return <LinkBtn href={`/products/${link}`} classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >{link}</LinkBtn>
                                })}
                            </div>
                            <section className="w-full my-6 md:my-10 flex flex-wrap overflow-hidden">
                                <Shoppingcard colors={3} price={67.99} name="Leather Jacket - Men" img={image2} />
                                <Shoppingcard colors={0} price={45.99} name="Ladies Herbel Bag" img={image2} />
                                <Shoppingcard colors={2} price={72.99} name="Men Joggers" img={image2} />
                                <Shoppingcard colors={2} price={72.99} name="Men Joggers" img={image2} />
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = await context.query
    // let response = await (await fetch(`${process.env.HOST}/api/products/getsingleproduct?id=${p_id}`)).json()
    return { props: { category } }
}