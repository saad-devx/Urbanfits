import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SuggestionCard from '@/components/cards/suggestionPicCard';
import LinkBtn from '@/components/link_btn';
import Button from '@/components/simple_btn';
import ProductCarousel from '@/components/carousels/productCarousel';


// image imports
import image2 from '../../public/card imgs/card img10.jpg'

export default function Product() {
    const router = useRouter()
    const { slug } = router.query
    const [expand, setExpand] = useState(false)

    const [quantity, setQuantity] = useState(1)
    const changeQuantity = (e) => {
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === 23) return
        if (name === "decrement") return setQuantity(quantity - 1)
        if (name === "increment") return setQuantity(quantity + 1)
    }
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full pb-20 flex justify-center">
                        <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-5' >
                            <div className="w-full flex flex-col lg:flex-row lg:space-x-2">
                                <div className="w-full lg:w-[70%] mb-3">
                                    <ProductCarousel />
                                </div>
                                <div className="details w-full lg:w-[30%] m-0 space-y-3">
                                    <div className="w-full h-28 p-4 rounded-2xl bg-white items-center">
                                        <small className="w-full">Choose a Color:</small>
                                        <span className="w-full my-3 mx-auto flex flex-wrap justify-center space-x-3">
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-red-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-blue-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-black" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-orange-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-green-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-yellow-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-indigo-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-purple-600" ></input>
                                            <input type="button" className="w-5 h-5 mb-3 outline-none border-none rounded-full bg-gray-600" ></input>
                                        </span>
                                    </div>

                                    <div className="w-full h-28 p-4 rounded-2xl bg-white items-center">
                                        <small className='w-full' >23 Pieces left in Stock</small>
                                        <div className="flex justify-end my-5">
                                            <span className="w-full flex justify-end">
                                                <span onClick={changeQuantity} name="decrement" className="fa-solid fa-circle-minus text-2xl cursor-pointer hover:text-gray-400 text-gray-400"></span>
                                                <input type="number" readOnly className='w-1/6 h-auto text-sm text-center mx-3 border-none outline-none pointer-events-none' value={quantity} />
                                                <span onClick={changeQuantity} name="increment" className="fa-solid fa-circle-plus text-2xl cursor-pointer hover:text-gray-400 text-gray-400"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full h-32 p-4 rounded-2xl bg-white items-center">
                                        <span className="w-full flex justify-between">
                                            <small>Size</small>
                                            <small><button className='underline'>Size Chart</button></small>
                                        </span>
                                        <span className="w-full mt-3 flex flex-wrap justify-end pill-container text-xs">
                                            {[32, 34, 36, 38, 42, 44, 46, 48].map((value) => {
                                                return <>
                                                    <input type="radio" id={value} name="size" value={value} />
                                                    <label className="selector border border-gray-400 rounded-full w-10 mb-2 mr-1 px-1 py-1" htmlFor={value}>{value}</label>
                                                </>
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between p-3 text-lg">
                                        <p>Price :</p> <p>${150}</p>
                                    </div>
                                    <div className="w-full">
                                    <Button classes="w-full" my="my-2" >Add to Cart</Button>
                                    <Button classes="w-full" my="my-2" >Customization</Button>
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
