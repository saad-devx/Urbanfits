import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";
import SuggestionCard from '@/components/cards/suggestionPicCard';
import Navbar from '../../components/navbar';
import Button from '../../components/buttons/simple_btn';
import Shoppingcard from '@/components/cards/shoppingcard';
import Footer from '../../components/footer'
import LinkBtn from '@/components/buttons/link_btn';

// imports for images
import image1 from '../../public/card imgs/card img4.png'
import image2 from '../../public/card imgs/card img10.jpg'

function productlisting(props) {
    const { category } = props
    //Cart function
    const { addItem } = useCart()
    return (
        <>
            <Navbar hideNav={true} />
            <div className="w-full pb-20 bg-white flex justify-center font_gotham">
                <section className='w-full p-5 md:p-7 lg:p-10 lg:pt-9 h-full font_gotham text-left pt-9' >
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
                        <h3 className="text-2xl">More To Explore</h3>
                        <div className="w-full my-5 flex flex-wrap">
                            {["Ready to Wear", "Atelier Urban", "Essentials", "Bags", "Sneakers"].map(link => {
                                return <LinkBtn href={`/products/${link}`} classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >{link}</LinkBtn>
                            })}
                        </div>
                        <div className="flex flex-wrap justify-between md:justify-center lg:justify-between space-y-4 lg:space-y-0">
                            <SuggestionCard href="/products/Ready to Wear" btnValue="Shope Now" title="Ready to Wear" img={image2} />
                            <SuggestionCard href="/products/Bags" btnValue="Shope Now" title="Bags" img={image2} />
                            <SuggestionCard href="/products/Shoes" btnValue="Shope Now" title="Shoes" img={image2} />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = await context.query
    // let response = await (await fetch(`${process.env.HOST}/api/products/getsingleproduct?id=${p_id}`)).json()
    return { props: { category } }
}
export default dynamic(() => Promise.resolve(productlisting), { ssr: false })