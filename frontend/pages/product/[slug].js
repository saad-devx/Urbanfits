import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SuggestionCard from '@/components/cards/suggestionPicCard';
import LinkBtn from '@/components/link_btn';


// image imports
import image2 from '../../public/card imgs/card img10.jpg'

export default function Product() {
    const router = useRouter()
    const { slug } = router.query
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full pb-20 flex justify-center">
                        <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-9' >
                            <div className="w-full flex space-x-2">
                                <div className="product border border-red-700 w-[70%]">
                                    bla bla bla bal bla
                                </div>
                                <div className="details w-[30%]">
                                    <div className="relative w-full h-24 p-4 rounded-2xl bg-white flex flex-wrap items-center">
                                        <h3 className="w-full absolute top-3 left-3 ">Choose a Color:</h3>
                                        <span></span>
                                            <input type="button" className="w-5 h-5 mr-3 outline-none border-none rounded-full bg-red-700" ></input>
                                            <input type="button" className="w-5 h-5 mr-3 outline-none border-none rounded-full bg-red-700" ></input>
                                            <input type="button" className="w-5 h-5 mr-3 outline-none border-none rounded-full bg-red-700" ></input>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-10">
                                <h3 className="text-2xl">More To Explore</h3>
                                <div className="w-full my-5 flex flex-wrap">
                                    <LinkBtn classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >Ready to Wear</LinkBtn>
                                    <LinkBtn classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >Atelier Urban</LinkBtn>
                                    <LinkBtn classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >Essentials</LinkBtn>
                                    <LinkBtn classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >Bags</LinkBtn>
                                    <LinkBtn classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >Sneakers</LinkBtn>
                                </div>
                                <div className="flex flex-wrap justify-between md:justify-center lg:justify-between space-y-4 lg:space-y-0">
                                    <SuggestionCard btnValue="Shope Now" title="Ready to Wear" img={image2} ></SuggestionCard>
                                    <SuggestionCard btnValue="Shope Now" title="Bags" img={image2} ></SuggestionCard>
                                    <SuggestionCard btnValue="Shope Now" title="Shoes" img={image2} ></SuggestionCard>
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
