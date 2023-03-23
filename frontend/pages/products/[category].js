import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";
import SuggestionCard from '@/components/cards/suggestionPicCard';
import Navbar from '../../components/oldnavbar';
import Button from '../../components/buttons/simple_btn';
import Shoppingcard from '@/components/cards/shoppingcard';
import Footer from '../../components/footer'
import LinkBtn from '@/components/buttons/link_btn';

// imports for images
import image1 from '../../public/card imgs/card img4.png'
import image2 from '../../public/card imgs/card img10.jpg'

function productlisting (props) {
    const { category } = props
    const [expand, setExpand] = useState(false)
    //Cart function
    const { addItem } = useCart()
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full pb-20 flex justify-center">
                        <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-9' >
                            <h2 className="text-3xl md:text-4xl mb-4 capitalize">{category}</h2>
                            <p className='transition-all duration-500 font_futuraLTlite' >Urban fit is about Parisian couture and a 75-year heritage with a contemporary twist. Designer clothing for women inspired by Pierre Urban fit archives and inspirations, reworked for the modern world by Olivier Rousting. Discover the latest pieces. Find sophisticated creations for your bold, confident self. Impressive detailing, meticulously crafted skirts and dresses, expertly tailored pants and jackets with structured shoulders and elegant lines. The newest Urban fit blazer with its iconic six gold buttons or vibrant casual wear for easy weekends. Create an audacious wardrobe in signature monochrome for the contemporary woman. Graphic lines showcase your silhouette, reflecting the distinctive flair for which Urban fit is so well known. Unleash your expressive nature in a hypnotizing long dress, and accessorize with a timeless bag bearing the Urban fit logo. Add the perfect finishing touch with a playful pair of Urban fit labyrinth pattern stiletto boots, inspired by Urban fit fascination with Renaissance gardens. Opt for a classic skirt with gold buttons and matching leather biker jacket or choose playful, more deconstructed creations. Find fresh looks to create your unique wardrobe.</p>
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
                    <Footer classes={expand === true ? 'rounded-3xl' : 'rounded-sm'} />
                </section>
            </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = await context.query
    // let response = await (await fetch(`${process.env.HOST}/api/products/getsingleproduct?id=${p_id}`)).json()
    return { props: { category } }
}
export default dynamic(() => Promise.resolve(productlisting), { ssr: false })